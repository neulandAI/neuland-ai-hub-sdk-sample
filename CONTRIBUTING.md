# Contributing

Thanks for helping improve the Neuland AI Hub SDK.

## Workflow

1. Branch from `dev`.
2. Open a pull request into `dev`. CI builds both SDKs, import-tests the Python
   SDK on 3.9 to 3.13, and checks the docs tree on every PR.
3. Keep PRs focused: one change per PR.

## What not to edit by hand

`python/sdk/` and `nodejs/sdk/` are generated from the Hub's OpenAPI spec.
Do not edit files in those folders directly; your change will be lost on the
next regeneration. Instead:

- To change SDK behaviour, change the Hub API and regenerate.
- To change the generator settings or the post-generation fixes, see
  [MAINTAINING.md](MAINTAINING.md).

After any regeneration, run `python3 scripts/sync-sdk-docs.py` so the docs
site stays in sync with the SDK.

## Hand-written code

Everything else is maintained by hand and welcomes direct changes:

- `python/sample-app/`, `nodejs/sample-app/` – sample backends
- `python/streaming.py`, `nodejs/streaming.ts` – SSE streaming clients
- `docs/guides/`, `docs/sdk/*/{installation,usage,streaming}.mdx` – curated docs

## Reporting bugs

Use GitHub Issues. Include the SDK version, the language, and a minimal
reproduction. For security issues, see [SECURITY.md](SECURITY.md) instead.
