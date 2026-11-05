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
 *     baseUrl: "https://api.your-domain.com",
 *     apiKey: "ak_prod_v1.<key_id>.<secret>",
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
  /** Base URL of the Hub API, e.g. "https://api.your-domain.com". */
  baseUrl: string;
  /** API key value, e.g. "ak_prod_v1.<key_id>.<secret>". */
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

/** GET /messages/{id}/stream — observe an existing message's stream. `messageId` is the message's public id (UUID). */
export function observeMessage(
  opts: StreamOptions & { messageId: string },
): AsyncGenerator<StreamEvent> {
  const url = `${trimEnd(opts.baseUrl)}/messages/${opts.messageId}/stream`;
  return request("GET", url, opts);
}

function trimEnd(s: string): string {
  return s.replace(/\/+$/, "");
}

const MAX_REDIRECTS = 5;

/**
 * fetch() keeps custom headers such as X-API-KEY when a redirect goes to
 * another origin. Follow redirects by hand and drop the key once the origin
 * changes, so it never reaches another host.
 */
async function fetchKeepingKeyOnOrigin(url: string, init: RequestInit & { headers: Record<string, string> }): Promise<Response> {
  const origin = new URL(url).origin;
  let current = url;
  let { method, body } = init;
  let headers = init.headers;
  for (let hop = 0; ; hop++) {
    const resp = await fetch(current, { ...init, method, body, headers, redirect: "manual" });
    const location = resp.headers.get("location");
    if (resp.status < 300 || resp.status >= 400 || !location) return resp;
    if (hop >= MAX_REDIRECTS) throw new Error(`${init.method} ${url} failed: too many redirects`);
    current = new URL(location, current).toString();
    if (new URL(current).origin !== origin) {
      headers = Object.fromEntries(Object.entries(headers).filter(([k]) => k.toLowerCase() !== "x-api-key"));
    }
    if (resp.status === 303 || ((resp.status === 301 || resp.status === 302) && method === "POST")) {
      method = "GET"; // same method change fetch() itself applies
      body = undefined;
      headers = Object.fromEntries(Object.entries(headers).filter(([k]) => k.toLowerCase() !== "content-type"));
    }
  }
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

  const resp = await fetchKeepingKeyOnOrigin(url, { method, headers, body, signal: opts.signal });
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
