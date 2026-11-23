# Changelog

Python (`neuland-hub-sdk`) and Node (`@neulandai/neuland-hub-sdk`) share one version.

## 1.4.0

Generated from Hub `v3.0.0-rc.101` (`release` branch). Tested against a Hub on that version.

### Added

- `assistantsMyMemberships` / `assistants_my_memberships`: assistants the caller is a member of.
- `librariesUpdateLibraryGroups`, `projectsUpdateProjectGroups`, `promptsUpdatePromptGroups`
  (Python: `libraries_update_library_groups`, ...): set the user groups that have access.
- `workflowsCancelWorkflowRun` / `workflows_cancel_workflow_run`: stop a pending or running run.
- `chatsConvertChat` / `chats_convert_chat`: export a chat as PDF. Python returns `bytes`;
  Node callers pass `{ responseType: "arraybuffer" }`.
- `llmAgentUsage` / `llm_agent_usage`: usage per agent for a date window.
- `settingsWebSearchEngines` / `settings_web_search_engines`, and the settings fields
  `web_search_engine`, `sharepoint_anonymous_links`, `sharepoint_external_invites`.
- `authGetEntraGroup` / `auth_get_entra_group`: one Entra directory group.
- `wellKnownJwks` / `well_known_jwks` (class `WellKnown`): the Hub's public JWK Set.
- Marketplace applications and assistants: `departments`, `industries`, `use_cases`.
- `supports_google_grounding` on LLM catalog entries, `admin_consent_available` on
  connector status, `description` and `send_identity` on custom connectors,
  `assistant_public_id` on `UsageQueryRequest`.

### Changed

- **Node: `documentsUnimportDocuments` has a new `libraryId` argument before `options`.**
  A call that passes all seven earlier arguments plus `options` must add `undefined`
  for `libraryId`.
- `IdleAssistant.assistant_id` is replaced by `assistant_public_id` (Hub change).

### Not included

- The query parameters Hub added to `/auth/connectors/callback` (`admin_consent`,
  `tenant`, `scope`) and `/auth/sso/{slug}/{provider}/init` (`email`, `force_login`).
  Both are browser redirect targets, and the parameters would have shifted Node's
  `options` argument.

## 1.3.1

Generated from Hub `v3.0.0-rc.47` (`release` branch). Fixes regressions in 1.3.0.
(Correction: an earlier version of this entry said rc.47 lets `authExchangeToken` /
`auth_exchange_token` authenticate with the API key. It does not: the exchange still needs a
signed-in Hub session, and an API key alone gets `401 Token is invalid`.)
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
- The `cookie_name` query parameter Hub rc.47 added to `/auth/exchange/token`. It is
  for browser sessions, and it would have shifted Node's `options` argument the same way.

## 1.3.0

Generated from Hub `v3.0.0-rc.46`. Adds `/v1/models` and `/v1/chat/completions`
(OpenAI-compatible), custom connector OAuth sign-in and detection, Google picker
token, admin connector credential removal, role holder reassignment and SSO relink.
Has the regressions listed under 1.3.1; do not use.
