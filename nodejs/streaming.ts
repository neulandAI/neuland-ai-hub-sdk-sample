/**
 * Hand-written SSE client for the Hub message-stream endpoints.
 *
 * The streaming endpoints — `POST /messages/stream` and
 * `GET /messages/{id}/stream` — are deliberately excluded from the OpenAPI
 * schema (`include_in_schema=False` on the server), so the generator never sees
 * them and the generated SDK has no methods for them. That is intentional:
 * OpenAPI cannot model an open-ended event stream, so any generated method
 * would read the whole body before returning — the opposite of streaming.
 * This module is the supported way to consume them.
 *
 * Standalone and dependency-free: uses the platform `fetch` (browsers and
 * Node 18+). Works unchanged in the Next.js frontend and the Node sample app.
 *
 *   import { streamMessage } from "./streaming";
 *
 *   for await (const event of streamMessage({
 *     baseUrl: "http://localhost:8001",
 *     apiKey: "ak_dev_v1.<key_id>.<secret>",
 *     message: { content: "Explain quantum tunneling" },
 *   })) {
 *     console.log(event.event, event.data);
 *   }
 *
 * The stream ends after a terminal `state` event (completed / failed /
 * cancelled), or on a forced max-duration close without one. On any disconnect,
 * refetch the canonical message via `GET /messages/{id}` — do not resume.
 */

export interface StreamEvent {
  /** SSE event type; also present as `data.type`. */
  event: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

export interface StreamOptions {
  /** Base URL of the Hub API, e.g. "http://localhost:8001". */
  baseUrl: string;
  /** API key value, e.g. "ak_dev_v1.<key_id>.<secret>". */
  apiKey: string;
  /** Optional AbortSignal to cancel the stream. */
  signal?: AbortSignal;
}

const TERMINAL_EVENT = "state"; // last event; the server closes the connection after it

/** POST /messages/stream — create a message and stream its generation. */
export function streamMessage(
  opts: StreamOptions & { message: Record<string, unknown> },
): AsyncGenerator<StreamEvent> {
  const url = `${trimEnd(opts.baseUrl)}/messages/stream`;
  return request("POST", url, opts, JSON.stringify(opts.message));
}

/** GET /messages/{id}/stream — observe an existing message's stream. */
export function observeMessage(
  opts: StreamOptions & { messageId: number },
): AsyncGenerator<StreamEvent> {
  const url = `${trimEnd(opts.baseUrl)}/messages/${opts.messageId}/stream`;
  return request("GET", url, opts);
}

function trimEnd(s: string): string {
  return s.replace(/\/+$/, "");
}

async function* request(
  method: string,
  url: string,
  opts: StreamOptions,
  body?: string,
): AsyncGenerator<StreamEvent> {
  const headers: Record<string, string> = {
    "X-API-KEY": opts.apiKey,
    Accept: "text/event-stream",
  };
  if (body !== undefined) headers["Content-Type"] = "application/json";

  const resp = await fetch(url, { method, headers, body, signal: opts.signal });
  if (!resp.ok) {
    const detail = await resp.text().catch(() => "");
    throw new Error(`${method} ${url} failed: HTTP ${resp.status}: ${detail}`);
  }
  if (!resp.body) throw new Error("Response has no readable body.");

  const reader = resp.body.getReader();
  const utf8 = new TextDecoder(); // streaming decode handles split multibyte chars
  let buffer = "";
  let event: string | null = null;
  let data: string[] = [];

  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += utf8.decode(value, { stream: true });
      buffer = buffer.replace(/\r\n/g, "\n").replace(/\r/g, "\n"); // sse-starlette CRLF

      let nl: number;
      while ((nl = buffer.indexOf("\n")) !== -1) {
        const line = buffer.slice(0, nl);
        buffer = buffer.slice(nl + 1);

        if (line === "") {
          // blank line dispatches the buffered frame
          if (data.length) {
            const frame: StreamEvent = {
              event: event ?? "message",
              data: JSON.parse(data.join("\n")),
            };
            event = null;
            data = [];
            yield frame;
            if (frame.event === TERMINAL_EVENT) {
              await reader.cancel();
              return;
            }
          } else {
            event = null;
          }
          continue;
        }
        if (line.startsWith(":")) continue; // comment / heartbeat ping

        const colon = line.indexOf(":");
        const field = colon === -1 ? line : line.slice(0, colon);
        let val = colon === -1 ? "" : line.slice(colon + 1);
        if (val.startsWith(" ")) val = val.slice(1); // one optional leading space, per spec
        if (field === "event") event = val;
        else if (field === "data") data.push(val);
      }
    }
  } finally {
    reader.releaseLock();
  }
}
