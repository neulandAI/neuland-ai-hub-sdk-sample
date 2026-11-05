# Changelog

Python (`neuland-hub-sdk`) and Node (`@neulandai/neuland-hub-sdk`) share one version.

## 1.3.1

Generated from Hub `v3.0.0-rc.46` (same spec as 1.3.0). Fixes regressions in 1.3.0.
Upgrade from 1.3.0 is recommended; code written for 1.2.1 works again unchanged.

### Fixed

- **Node: `apiKey` as a string returned 400 on every call.** 1.3.0 also sent the
  key as an `X-Entra-Access-Token` header. The SDK now sends only `X-API-KEY`.
  The Python README no longer shows the `EntraAccessToken` line.
- **`v1ChatCompletions` / `v1_chat_completions` could not send a body.** They now
  take the OpenAI request body as their first argument:
  `v1ChatCompletions({ model, messages })`, `v1_chat_completions({"model": ..., "messages": [...]})`.
- **`reasoning_effort` accepts `"low"`, `"medium"`, `"high"`, `"auto"` and `null`
  again.** In 1.3.0, Python rejected `MessageIn(reasoning_effort="low")` and the
  enum value, and Node rejected `null`. The type is now `ReasoningEffortOrAutoEnum`.
- **Node: `workflowsStreamRunEvents(workflowId, runId, options)` is back to the
  1.2.1 signature.** In 1.3.0 the third argument became `after`, so a 1.2.1 call
  put the options, including the stream token, into the URL. To resume from an
  event id in Node, pass `{ params: { after: <id> } }` in the options.
- **The API key is no longer forwarded on a redirect to another host.** Both
  SDKs now strip `X-API-KEY`, `X-Entra-Access-Token`, `Authorization` and
  `Cookie` when a redirect leaves the original host (present since 1.2.1 or earlier).
- **Node: printing an axios error no longer shows the API key.** Credential
  headers are redacted on the error, and the raw request object is hidden from
  `console.log` output (it is still readable as `error.request`).
- **Python: `Model.from_dict(...)` no longer sends unset fields as `null`.** A
  PATCH built with `LibraryUpdateIn.from_dict({"name": "x"})` (also `ChatIn`,
  `AssistantIn`, ...) nulled every other field, and the Hub answered 500. Only the
  keys you pass are sent now; an explicit `None` is still sent as `null`.

### Removed

- `ReasoningEffort` (the 1.3.0 wrapper type). Use `ReasoningEffortOrAutoEnum` or a plain string.
- The `after` parameter of `workflowsStreamRunEvents` / `workflows_stream_run_events`
  (added in 1.3.0). Python callers cannot pass it in 1.3.1.

## 1.3.0

Generated from Hub `v3.0.0-rc.46`. Adds `/v1/models` and `/v1/chat/completions`
(OpenAI-compatible), custom connector OAuth sign-in and detection, Google picker
token, admin connector credential removal, role holder reassignment and SSO relink.
Has the regressions listed under 1.3.1; do not use.
