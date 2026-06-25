# Maintaining

How to regenerate the SDKs. For SDK consumers, see [README.md](README.md) instead.

## Regenerating the SDKs

The SDKs are auto-generated from Hub's full OpenAPI spec. The generator version is pinned in [openapitools.json](openapitools.json) (currently `7.21.0`).

> Requires Java (the generator runs on the JVM). On macOS: `brew install openjdk` and add `/opt/homebrew/opt/openjdk/bin` to your PATH.

### 1. Fetch the live Hub spec to `/tmp`

```bash
curl -fsSL "${HUB_URL:-http://localhost:8000}/openapi.json" -o /tmp/hub-openapi.json
```

### 2. Normalize the spec for the pinned generator

FastAPI ≥ 0.129.1 emits binary fields using OpenAPI 3.1's `contentMediaType: application/octet-stream`. The pinned generator (7.21.0) doesn't recognize that keyword yet (tracking: [openapi-generator#23095](https://github.com/OpenAPITools/openapi-generator/issues/23095)) and emits broken multipart upload code unless the spec is rewritten to the 3.0-style `format: binary` shape.

```bash
python3 scripts/normalize-openapi.py /tmp/hub-openapi.json /tmp/hub-openapi.json
```

Drop this step (and delete `scripts/normalize-openapi.py`) once the generator ships native 3.1 binary support.

### 3. Regenerate the Python SDK

```bash
rm -rf python/sdk
npx --yes @openapitools/openapi-generator-cli generate \
  -i /tmp/hub-openapi.json \
  -g python \
  -o python/sdk \
  --skip-validate-spec \
  --additional-properties=packageName=neuland_hub_sdk,projectName=neuland-hub-sdk,packageVersion=1.0.0,apiNameSuffix=
```

### 4. Regenerate the Node SDK

```bash
find nodejs/sdk -mindepth 1 -maxdepth 1 ! -name node_modules ! -name dist -exec rm -rf {} +
npx --yes @openapitools/openapi-generator-cli generate \
  -i /tmp/hub-openapi.json \
  -g typescript-axios \
  -o nodejs/sdk \
  --skip-validate-spec \
  --additional-properties=npmName=neuland-hub-sdk,npmVersion=1.0.0,enumPropertyNaming=original,apiNameSuffix=
( cd nodejs/sdk && npm install && npm run build )
```

### 5. Sync the SDK docs into the Mintlify site

The generated `python/sdk/docs/` and `nodejs/sdk/docs/` folders are the SDK's
markdown reference (one page per API tag and per model). This step copies them
into the Mintlify content tree as Mintlify-ready `.mdx` and rebuilds the
matching navigation in [docs/docs.json](docs/docs.json):

```bash
python3 scripts/sync-sdk-docs.py
```

It writes to `docs/sdk/python/reference/` and `docs/sdk/node/reference/`, and
rebuilds each SDK tab's navigation: the per-resource method pages are listed
flat in the spec's tag order (no individual headers), followed by a single
**Models** section sub-grouped by resource. The model-to-resource mapping is
derived from
[docs/openapi.json](docs/openapi.json), so it stays correct across regens. The
curated `Get Started` group (`installation.mdx`, `usage.mdx`) and the API
Reference tab are left untouched. The script is idempotent.

**This is the single command to run after any change** to the SDKs or to
[docs/openapi.json](docs/openapi.json). The branch is linked to the Mintlify
dashboard, so once you run the script and push, the site redeploys automatically:

```bash
python3 scripts/sync-sdk-docs.py
git add docs && git commit -m "docs: sync SDK reference" && git push
```

The script also **re-injects the SSE streaming endpoints** (`POST /messages/stream`
and `GET /messages/{id}/stream`) into `docs/openapi.json`. The Hub hides these
from its schema (`include_in_schema=False`), so a freshly fetched spec drops
them; re-injecting on every run keeps them in the API Reference tab. They are
flagged `x-streaming` so the coverage check ignores them (they are intentionally
absent from the SDK — see the Streaming guide).

The script also prints a **coverage check**: it compares the operations in
`docs/openapi.json` (which drives the API Reference tab) against the methods in
the committed SDK. If the SDK is stale — operations exist in the spec but not in
the SDK — it lists the affected resources and tells you to regenerate. Keeping
`docs/openapi.json` and the committed SDK generated from the **same** spec
version is what keeps the API Reference and SDK tabs consistent.

> Optional: verify before pushing. Mintlify deploys this branch automatically,
> so a quick local check avoids a broken build:
>
> ```bash
> cd docs && mint broken-links   # requires the Mintlify CLI: npm i -g mint
> ```

### 6. Clean up

```bash
rm -f /tmp/hub-openapi.json
```

## Why pin the generator version?

`openapitools.json` pins the JAR to `7.21.0`. Newer versions have changed default class naming behavior — pinning keeps the generated code stable across machines and across time.

## Files involved

| File | Purpose |
|---|---|
| [openapitools.json](openapitools.json) | Pins the openapi-generator JAR version. |
| [scripts/normalize-openapi.py](scripts/normalize-openapi.py) | Rewrites OpenAPI 3.1 binary fields to the 3.0-style shape the pinned generator understands. Temporary; remove once openapi-generator ships native 3.1 binary support. |
| [scripts/sync-sdk-docs.py](scripts/sync-sdk-docs.py) | Copies the generated `*/sdk/docs/` markdown into `docs/sdk/<lang>/reference/` as Mintlify `.mdx` and rebuilds the SDK navigation groups in `docs/docs.json`. Idempotent; run after every regen. |
| `python/sdk/`, `nodejs/sdk/` | Generated output, committed for consumers to install from a tag. |
| [docs/](docs/) | Mintlify docs site (linked to the Mintlify dashboard). Curated guide/SDK pages are hand-written; `docs/sdk/*/reference/` is generated by `sync-sdk-docs.py`; the API Reference tab is driven by `docs/openapi.json`. |
| [python/streaming.py](python/streaming.py), [nodejs/streaming.ts](nodejs/streaming.ts) | Hand-written SSE clients for the streaming endpoints (excluded from OpenAPI). Live outside `sdk/` so regen doesn't wipe them; maintained by hand, never regenerated. |
