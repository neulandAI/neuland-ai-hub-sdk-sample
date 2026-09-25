"""Hand-written SSE client for the Hub message-stream endpoints.

The streaming endpoints — ``POST /messages/stream`` and
``GET /messages/{id}/stream`` — are deliberately excluded from the OpenAPI
schema (``include_in_schema=False`` on the server), so openapi-generator never
sees them and the generated SDK has no methods for them. That is intentional:
OpenAPI cannot model an open-ended event stream, so every method the generator
*would* emit calls ``.read()`` and blocks until the stream closes — the exact
opposite of streaming. This module is the supported way to consume them.

It reuses the generated ``Configuration`` only for the host and the X-API-KEY
credential, then streams over urllib3 (already an SDK dependency) so nothing
here depends on generated request code.

    from neuland_hub_sdk import Configuration
    from streaming import stream_message

    config = Configuration(host="https://api.your-domain.com")
    config.api_key["APIKeyHeader"] = "ak_prod_v1.<key_id>.<secret>"

    for event in stream_message(config, {"content": "Explain quantum tunneling"}):
        print(event.event, event.data)

The stream ends after a terminal ``state`` event (completed / failed /
cancelled), or on a forced max-duration close without one. On any disconnect,
refetch the canonical message via ``GET /messages/{id}`` — do not resume.
"""

from __future__ import annotations

import codecs
import json
from dataclasses import dataclass
from typing import Any, Iterator

import urllib3

_API_KEY_ID = "APIKeyHeader"  # auth-scheme name in the generated Configuration
_API_KEY_HEADER = "X-API-KEY"  # actual header the Hub reads
TERMINAL_EVENT = "state"  # last event; the server closes the connection after it


@dataclass
class StreamEvent:
    """One SSE frame. ``event`` is the type, also mirrored in ``data['type']``."""

    event: str
    data: dict[str, Any]


class _SSEDecoder:
    """Incremental SSE parser. Feed it whole lines (terminators stripped)."""

    def __init__(self) -> None:
        self._event: str | None = None
        self._data: list[str] = []

    def push(self, line: str) -> StreamEvent | None:
        if line == "":  # blank line dispatches the buffered frame
            if not self._data:
                self._event = None
                return None
            event = self._event or "message"
            payload = "\n".join(self._data)
            self._event = None
            self._data = []
            return StreamEvent(event=event, data=json.loads(payload))
        if line.startswith(":"):  # comment / heartbeat ping
            return None
        field, _, value = line.partition(":")
        if value.startswith(" "):  # one optional leading space, per the SSE spec
            value = value[1:]
        if field == "event":
            self._event = value
        elif field == "data":
            self._data.append(value)
        return None


def _headers(config: Any, *, post: bool) -> dict[str, str]:
    key = (config.api_key or {}).get(_API_KEY_ID)
    if not key:
        raise ValueError(
            f"No API key set: Configuration.api_key['{_API_KEY_ID}'] is empty."
        )
    headers = {_API_KEY_HEADER: key, "Accept": "text/event-stream"}
    if post:
        headers["Content-Type"] = "application/json"
    return headers


def _to_body(message_in: Any) -> bytes:
    if hasattr(message_in, "to_dict"):  # generated MessageIn model
        payload = message_in.to_dict()
    elif hasattr(message_in, "model_dump"):  # raw pydantic model
        payload = message_in.model_dump(exclude_none=True)
    elif isinstance(message_in, dict):
        payload = message_in
    else:
        raise TypeError(f"Unsupported message_in type: {type(message_in)!r}")
    return json.dumps(payload).encode("utf-8")


def _stream(
    method: str,
    url: str,
    headers: dict[str, str],
    body: bytes | None,
    *,
    pool: urllib3.PoolManager,
) -> Iterator[StreamEvent]:
    resp = pool.request(
        method, url, body=body, headers=headers, preload_content=False
    )
    try:
        if resp.status >= 400:
            detail = resp.read().decode("utf-8", "replace")
            raise urllib3.exceptions.HTTPError(
                f"{method} {url} failed: HTTP {resp.status}: {detail}"
            )
        decoder = _SSEDecoder()
        text = codecs.getincrementaldecoder("utf-8")()  # handle split multibyte chars
        buffer = ""
        for chunk in resp.stream(decode_content=True):
            buffer += text.decode(chunk)
            buffer = buffer.replace("\r\n", "\n").replace("\r", "\n")  # sse-starlette CRLF
            while "\n" in buffer:
                line, buffer = buffer.split("\n", 1)
                event = decoder.push(line)
                if event is not None:
                    yield event
                    if event.event == TERMINAL_EVENT:
                        return
    finally:
        resp.release_conn()


def stream_message(
    config: Any, message_in: Any, *, pool: urllib3.PoolManager | None = None
) -> Iterator[StreamEvent]:
    """POST /messages/stream — create a message and stream its generation.

    ``message_in`` may be a generated ``MessageIn`` model or a plain dict; only
    ``content`` is required.
    """
    own = pool is None
    pool = pool or urllib3.PoolManager()
    try:
        url = config.host.rstrip("/") + "/messages/stream"
        yield from _stream(
            "POST", url, _headers(config, post=True), _to_body(message_in), pool=pool
        )
    finally:
        if own:
            pool.clear()


def observe_message(
    config: Any, message_id: int, *, pool: urllib3.PoolManager | None = None
) -> Iterator[StreamEvent]:
    """GET /messages/{message_id}/stream — observe an existing message's stream."""
    own = pool is None
    pool = pool or urllib3.PoolManager()
    try:
        url = f"{config.host.rstrip('/')}/messages/{message_id}/stream"
        yield from _stream("GET", url, _headers(config, post=False), None, pool=pool)
    finally:
        if own:
            pool.clear()
