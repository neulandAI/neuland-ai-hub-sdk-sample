# Maintaining

How to regenerate the SDKs and manage what they expose. For SDK consumers, see [README.md](README.md) instead.

## Regenerating the SDKs

The SDKs are auto-generated from Hub's OpenAPI, filtered by [spec/sdk-whitelist.json](spec/sdk-whitelist.json). The generator version is pinned in [openapitools.json](openapitools.json) (currently `7.21.0`).

> Requires Java (the generator runs on the JVM). On macOS: `brew install openjdk` and add `/opt/homebrew/opt/openjdk/bin` to your PATH.

### 1. Fetch the live Hub spec to `/tmp`

```bash
curl -fsSL "${HUB_URL:-http://localhost:8000}/openapi.json" -o /tmp/hub-openapi.json
```

### 2. Filter to only the whitelisted endpoints

```bash
npx --yes openapi-format /tmp/hub-openapi.json \
  -o /tmp/hub-openapi.sdk.json \
  --filterFile spec/sdk-whitelist.json
```

### 3. Regenerate the Python SDK

```bash
rm -rf python/sdk
npx --yes @openapitools/openapi-generator-cli generate \
  -i /tmp/hub-openapi.sdk.json \
  -g python \
  -o python/sdk \
  --skip-validate-spec \
  --additional-properties=packageName=neuland_hub_sdk,projectName=neuland-hub-sdk,packageVersion=1.0.0,apiNameSuffix=
```

### 4. Regenerate the Node SDK

```bash
find nodejs/sdk -mindepth 1 -maxdepth 1 ! -name node_modules ! -name dist -exec rm -rf {} +
npx --yes @openapitools/openapi-generator-cli generate \
  -i /tmp/hub-openapi.sdk.json \
  -g typescript-axios \
  -o nodejs/sdk \
  --skip-validate-spec \
  --additional-properties=npmName=neuland-hub-sdk,npmVersion=1.0.0,enumPropertyNaming=original,apiNameSuffix=
( cd nodejs/sdk && npm install && npm run build )
```

### 5. Clean up

```bash
rm -f /tmp/hub-openapi.json /tmp/hub-openapi.sdk.json
```

## Adding an endpoint to the SDK

1. Find the endpoint's `operationId` in Hub's `/openapi.json`.
2. Add it to `inverseOperationIds` in [spec/sdk-whitelist.json](spec/sdk-whitelist.json).
3. Re-run the regen steps above.
4. Commit the diff in `python/sdk/` and `nodejs/sdk/`.

## Removing an endpoint

1. Delete its `operationId` from `spec/sdk-whitelist.json`.
2. Re-run the regen steps.
3. Commit.

## Why pin the generator version?

`openapitools.json` pins the JAR to `7.21.0`. Newer versions have changed default class naming behavior — pinning keeps the generated code stable across machines and across time.

## Files involved

| File | Purpose |
|---|---|
| [openapitools.json](openapitools.json) | Pins the openapi-generator JAR version. |
| [spec/sdk-whitelist.json](spec/sdk-whitelist.json) | List of `operationId`s exposed by the public SDK. **The contract.** |
| [spec/README.md](spec/README.md) | Explains the `spec/` folder's role. |
| `python/sdk/`, `nodejs/sdk/` | Generated output, committed for consumers to install from a tag. |
