# Maintaining

How to regenerate the SDKs. For SDK consumers, see [README.md](README.md) instead.

## Regenerating the SDKs

The SDKs are auto-generated from Hub's full OpenAPI spec. The generator version is pinned in [openapitools.json](openapitools.json) (currently `7.21.0`).

> Requires Java (the generator runs on the JVM). On macOS: `brew install openjdk` and add `/opt/homebrew/opt/openjdk/bin` to your PATH.

### 1. Fetch the live Hub spec to `/tmp`

```bash
curl -fsSL "${HUB_URL:-http://localhost:8000}/openapi.json" -o /tmp/hub-openapi.json
```

### 2. Regenerate the Python SDK

```bash
rm -rf python/sdk
npx --yes @openapitools/openapi-generator-cli generate \
  -i /tmp/hub-openapi.json \
  -g python \
  -o python/sdk \
  --skip-validate-spec \
  --additional-properties=packageName=neuland_hub_sdk,projectName=neuland-hub-sdk,packageVersion=1.0.0,apiNameSuffix=
```

### 3. Regenerate the Node SDK

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

### 4. Clean up

```bash
rm -f /tmp/hub-openapi.json
```

## Why pin the generator version?

`openapitools.json` pins the JAR to `7.21.0`. Newer versions have changed default class naming behavior — pinning keeps the generated code stable across machines and across time.

## Files involved

| File | Purpose |
|---|---|
| [openapitools.json](openapitools.json) | Pins the openapi-generator JAR version. |
| `python/sdk/`, `nodejs/sdk/` | Generated output, committed for consumers to install from a tag. |
