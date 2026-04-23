# neuland-ai-hub-sdk-sample

Sample application demonstrating how to use the Neuland AI Hub SDK.

## Prerequisites

- Python 3.13+
- Hub backend running

## Installation

1. **Create and activate a virtual environment (Optional)**

   ```bash
   cd sample-app
   python -m venv .venv
   source .venv/bin/activate        # macOS / Linux
   # .venv\Scripts\activate          # Windows
   ```

2. **Install dependencies**

   ```bash
   pip3 install -e sdk
   pip3 install -r requirements.txt
   ```

## Configuration

Set the following environment variables (or rely on the defaults in `sample-app/config.py`):

| Variable | Default | Description |
|---|---|---|
| `NLND_HUB_API_URL` | `http://localhost:8000` | Hub API base URL |
| `NLND_JWT_PUBLIC_KEY` | _(required)_ | PEM-encoded RSA public key used to verify service tokens |
| `NLND_JWT_ISSUER` | `hub.neuland.ai.com` | Expected JWT issuer |
| `NLND_JWT_AUDIENCE` | `http://localhost:9999` | Expected JWT audience |
| `NLND_JWT_KID` | `rsa-key-2025-09-15` | Key ID |
| `NLND_JWT_LEEWAY_SECONDS` | `60` | Clock-skew tolerance in seconds |

## Run the App

```bash
cd sample-app
uvicorn main:app --host 0.0.0.0 --port 9999 --reload
```

The API docs will be available at [http://localhost:9999/docs](http://localhost:9999/docs).

## Project Structure

```
sample-app/
├── main.py        # App entry point
├── config.py      # Environment configuration
├── auth.py        # JWT verification and API key extraction
├── schemas.py     # Pydantic response models
├── routes.py      # API endpoints
└── sdk/           # Auto-generated SDK (domain-specific API classes)
```

---

## SDK Regeneration (Maintainers)

> This section is only relevant when the Hub API changes and the SDK needs to be regenerated. Regular users can skip it — the committed SDK is ready to use.

The SDK is auto-generated from the Hub API's OpenAPI spec. Requires [OpenAPI Generator](https://openapi-generator.tech/) v7.21.0+ and a reachable Hub backend.

```bash
cd sample-app
rm -rf sdk
curl $NLND_HUB_API_URL/openapi.json -o /tmp/openapi.json

openapi-generator generate \
  -i /tmp/openapi.json \
  -g python \
  -o sdk \
  --package-name neuland_hub_sdk \
  --additional-properties=apiNameSuffix="",packageVersion=0.1.0a1 \
  --remove-operation-id-prefix

rm /tmp/openapi.json
pip3 install -e sdk
```

### Flags explained

| Flag | Purpose |
|---|---|
| `--package-name neuland_hub_sdk` | Python import name |
| `apiNameSuffix=""` | Generate class names without the `Api` suffix (e.g. `Chat` instead of `ChatApi`) |
| `packageVersion=0.1.0a1` | SDK version stamped into the generated package |
| `--remove-operation-id-prefix` | Strip tag prefixes from operationIds so method names stay clean |
