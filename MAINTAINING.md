# Maintaining

How to regenerate the SDKs. For SDK consumers, see [README.md](README.md) instead.

## Regenerating the SDKs

The SDKs are auto-generated from Hub's full OpenAPI spec. The generator version is pinned in [openapitools.json](openapitools.json) (currently `7.21.0`).

> Requires Java (the generator runs on the JVM). On macOS: `brew install openjdk` and add `/opt/homebrew/opt/openjdk/bin` to your PATH.

### 1. Fetch the Hub spec to `/tmp`

From a local Hub by default, or set `HUB_URL` to a deployment, e.g.
`HUB_URL=https://api.your-domain.com`.

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

The version is read from `python/sdk/pyproject.toml`, the single source of
truth, so a regen never resets it. Both
wipes keep `.openapi-generator-ignore` and `LICENSE`: the ignore file lists the scaffolding (`git_push.sh`,
CI configs, empty test stubs) that must stay out of the repo, and the generator
only honours it if the file is present when it runs.

```bash
SDK_VERSION=$(python3 -c "import tomllib;print(tomllib.load(open('python/sdk/pyproject.toml','rb'))['project']['version'])")
echo "$SDK_VERSION"   # e.g. 1.0.3

find python/sdk -mindepth 1 -maxdepth 1 ! -name .openapi-generator-ignore ! -name LICENSE -exec rm -rf {} +
npx --yes @openapitools/openapi-generator-cli generate \
  -i /tmp/hub-openapi.json \
  -g python \
  -o python/sdk \
  --skip-validate-spec \
  --git-user-id neulandAI --git-repo-id neuland-ai-hub-sdk-sample \
  --additional-properties=packageName=neuland_hub_sdk,projectName=neuland-hub-sdk,packageVersion=$SDK_VERSION,packageUrl=https://github.com/neulandAI/neuland-ai-hub-sdk-sample,apiNameSuffix=
```

> Use the pinned `npx` command, not a globally installed `openapi-generator`
> (Homebrew ships a newer version). A different generator version changes the
> emitted code and `.openapi-generator/VERSION` in the same commit.

### 4. Regenerate the Node SDK

```bash
find nodejs/sdk -mindepth 1 -maxdepth 1 ! -name node_modules ! -name dist ! -name .openapi-generator-ignore ! -name LICENSE ! -name package-lock.json -exec rm -rf {} +
npx --yes @openapitools/openapi-generator-cli generate \
  -i /tmp/hub-openapi.json \
  -g typescript-axios \
  -o nodejs/sdk \
  --skip-validate-spec \
  --git-user-id neulandAI --git-repo-id neuland-ai-hub-sdk-sample \
  --additional-properties=npmName=neuland-hub-sdk,npmVersion=$SDK_VERSION,enumPropertyNaming=original,apiNameSuffix=
( cd nodejs/sdk && npm ci --ignore-scripts && npm run build )
```

> Keep `package-lock.json` and install with `npm ci`, not `npm install`. The
> generated `common.ts` does not compile against axios 1.20+ with TypeScript 5.9
> (`TS2527` in `createRequestFunction`); the lockfile pins axios 1.15.x, which
> works. Bump axios only when the build passes with the new version.

### 5. Update the API Reference spec, then sync the SDK docs

The API Reference tab is driven by `docs/openapi.json`. Copy the normalized
spec over it so the reference and the SDKs come from the same Hub version
(the sync script's coverage check fails otherwise):

```bash
cp /tmp/hub-openapi.json docs/openapi.json
```


The generated `python/sdk/docs/` and `nodejs/sdk/docs/` folders are the SDK's
markdown reference (one page per API tag and per model). This step copies them
into the Mintlify content tree as Mintlify-ready `.mdx` and rebuilds the
matching navigation in [docs/docs.json](docs/docs.json):

```bash
python3 scripts/sync-sdk-docs.py
```

It first patches the package metadata the generator cannot set (author name and
email; see `SDK_AUTHOR_*` at the top of the script). Then it writes to
`docs/sdk/python/reference/` and `docs/sdk/node/reference/`, and
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

## Releasing

Both SDKs are published to [PyPI](https://pypi.org/project/neuland-hub-sdk/) and
[npm](https://www.npmjs.com/package/neuland-hub-sdk) by
[.github/workflows/release.yml](.github/workflows/release.yml) when a
`sdk-v<version>` tag is pushed. The registries trust the workflow via OIDC
(trusted publishing), so no tokens are stored in the repo.

1. Bump the version in a PR to `dev`. Same value in all of:
   `python/sdk/pyproject.toml`, `python/sdk/setup.py`,
   `python/sdk/neuland_hub_sdk/__init__.py`, `nodejs/sdk/package.json`
   (and `package-lock.json`). Also update the pin in `README.md` and
   `docs/sdk/python/installation.mdx`.
2. Merge, then tag the merge commit and push the tag:

   ```bash
   git tag sdk-v<version> && git push origin sdk-v<version>
   ```

3. The workflow checks the tag matches both manifests, builds, and publishes.
   Watch it under Actions. A version mismatch fails before anything is published.

## Why pin the generator version?

`openapitools.json` pins the JAR to `7.21.0`. Newer versions have changed default class naming behavior — pinning keeps the generated code stable across machines and across time.

## Files involved

| File | Purpose |
|---|---|
| [openapitools.json](openapitools.json) | Pins the openapi-generator JAR version. |
| [scripts/normalize-openapi.py](scripts/normalize-openapi.py) | Rewrites OpenAPI 3.1 binary fields to the 3.0-style shape the pinned generator understands. Temporary; remove once openapi-generator ships native 3.1 binary support. |
| [scripts/sync-sdk-docs.py](scripts/sync-sdk-docs.py) | Copies the generated `*/sdk/docs/` markdown into `docs/sdk/<lang>/reference/` as Mintlify `.mdx` and rebuilds the SDK navigation groups in `docs/docs.json`. Idempotent; run after every regen. |
| `python/sdk/`, `nodejs/sdk/` | Generated output, committed; published to PyPI and npm by the release workflow. |
| [docs/](docs/) | Mintlify docs site, published at https://docs.neuland-hub.ai (deployed from `dev`; set in the Mintlify dashboard). Curated guide/SDK pages are hand-written; `docs/sdk/*/reference/` is generated by `sync-sdk-docs.py`; the API Reference tab is driven by `docs/openapi.json`. |
| [python/streaming.py](python/streaming.py), [nodejs/streaming.ts](nodejs/streaming.ts) | Hand-written SSE clients for the streaming endpoints (excluded from OpenAPI). Live outside `sdk/` so regen doesn't wipe them; maintained by hand, never regenerated. |
