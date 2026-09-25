# neuland-ai-hub-sdk-sample

The Neuland AI Hub SDK plus runnable sample apps that demonstrate it end-to-end.

This README has two paths — pick the one that matches what you're doing:

- **[Integrating the SDK in your project](#integrating-the-sdk-in-your-project)** — install, configure with an API key, call Hub.
- **[Running the sample apps locally](#running-the-sample-apps-locally)** — clone this repo and run the FastAPI/Express sample backends. For evaluation and learning.

---

# Integrating the SDK in your project

## 1. Get an API key

In Hub UI: **Settings → API keys → Create new key**. Copy when shown — it's only displayed once.

## 2. Install + use

### Python

```bash
pip install neuland-hub-sdk
```

```python
import os
from neuland_hub_sdk import ApiClient, Configuration
from neuland_hub_sdk.api.user import User

config = Configuration(host="https://api.your-domain.com")
config.api_key["APIKeyHeader"] = os.environ["NLND_HUB_API_KEY"]

with ApiClient(config) as client:
    me = User(client).users_get_myself()
    print(me)
```

`requirements.txt`:
```
neuland-hub-sdk==1.0.5
```

Requires Python 3.9+.

### Node.js

```bash
npm install neuland-hub-sdk
```

```ts
import { Configuration, User } from "neuland-hub-sdk";

const config = new Configuration({
  basePath: "https://api.your-domain.com",
  apiKey: process.env.NLND_HUB_API_KEY,
});

const { data: me } = await new User(config).usersGetMyself();
console.log(me);
```

Requires Node.js 18+.

## 3. Streaming (not in the generated SDK)

Live, token-by-token responses aren't part of the generated SDK. To use streaming, copy one standalone file into your project — full usage is documented at the top of each file:

- **Python** — [python/streaming.py](python/streaming.py) (needs only `urllib3`, already an SDK dependency)
- **Node.js** — [nodejs/streaming.ts](nodejs/streaming.ts) (needs only `fetch`)

```python
from streaming import stream_message

for event in stream_message(config, {"content": "Explain quantum tunneling"}):
    print(event.event, event.data)
```

The stream ends after a terminal `state` event. On disconnect, refetch the message via `GET /messages/{id}` — don't resume.

Streaming must be enabled on your Hub deployment. If the stream endpoints answer `500` or `503` with "Streaming is not configured", poll the chat turns instead (see the SDK usage docs).

---

# Running the sample apps locally

This section is for running our sample backends on your machine, against your
**live Hub deployment**. You don't run the Hub yourself. **You do NOT need this
to use the SDK** — section 1 above is enough for that.

The `frontend/` folder is a demo UI used by the neuland team and is not covered by this guide.

The sample shows the auth flow of an application embedded in the Hub: the Hub
hands the app a short-lived JWT (service token), the sample backend verifies it,
extracts the API key from inside, then calls the Hub with the SDK.

## Prerequisites

- Your Hub API URL, for example `https://api.your-domain.com`
- An application registered in your Hub by an admin, with its `app_url` set to
  where this sample backend is reachable (`http://localhost:9999` while testing
  locally). You'll need its numeric `app_id`.
- The Hub's RSA **public key**, used to verify the service tokens. It is not
  downloadable from the API — ask your Hub administrator for it.

> Only `:9999`, the sample backend, runs on your machine.

## 1. Configure the shared backend env

Both sample backends read the same env file:

```bash
cp python/.env.example python/.env
```

Fill in real values.

## 2. Run a sample backend — pick one

### 2A. Python (FastAPI)

Requires Python 3.10+ (the sample's own dependencies; the SDK alone runs on 3.9+).

```bash
cd python
python3 -m venv .venv && source .venv/bin/activate
pip install -e sdk
pip install -r sample-app/requirements.txt
set -a && source .env && set +a
cd sample-app
uvicorn main:app --host 0.0.0.0 --port 9999 --reload
```

API docs: http://localhost:9999/docs

### 2B. Node.js (Express)

```bash
cd nodejs/sdk && npm ci --ignore-scripts && npm run build
cd ../sample-app
npm ci
set -a && source ../../python/.env && set +a
node src/index.js
```

---
