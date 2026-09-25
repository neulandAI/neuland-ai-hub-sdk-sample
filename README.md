# neuland-ai-hub-sdk-sample

The Neuland AI Hub SDK plus runnable sample apps that demonstrate it end-to-end.

This README has two paths — pick the one that matches what you're doing:

- **[Integrating the SDK in your project](#integrating-the-sdk-in-your-project)** — install, configure with an API key, call Hub.
- **[Running the sample apps locally](#running-the-sample-apps-locally)** — clone this repo and play with the FastAPI/Express sample backends + Next.js demo frontend. For evaluation and learning.

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

---

# Running the sample apps locally

This section is for running our sample backends on your machine. **You do NOT need this to use the SDK.**

The sample uses a more elaborate auth flow the frontend holds a short-lived JWT, the sample backend verifies it and extracts the API key from inside, then uses the SDK.

## Prerequisites

- A running Hub backend (default `:8000`)
- A running Hub frontend (default `:3001`)
- A registered application on Hub — you'll need its numeric `app_id`
- Hub backend's RSA public key (for the sample backend to verify JWTs)

> Ports below (`:8000`, `:3001`, `:9999`, `:3002`) are local-test defaults.

## 1. Configure the shared backend env

Both sample backends read the same env file:

```bash
cp python/.env.example python/.env
```

Fill in real values.

## 2. Run a sample backend — pick one

### 2A. Python (FastAPI)

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
cd nodejs/sdk && npm install && npm run build
cd ../sample-app
npm install
set -a && source ../../python/.env && set +a
node src/index.js
```

## 3. Run the frontend

> **Internal only for now.** The demo UI depends on `@neulandai/ui-library`, a
> private package on GitHub Packages, and this repo ships no npm registry config
> for it. To install it, put these two lines in your own `~/.npmrc` with a GitHub
> token that has `read:packages` for the `neulandAI` org:
>
> ```
> @neulandai:registry=https://npm.pkg.github.com
> //npm.pkg.github.com/:_authToken=<your token>
> ```
>
> Never commit that file. The SDK and both sample backends do not need this.

```bash
cd frontend
npm install
cp .env.local.example .env.local
npm run dev -- -p 3002
```

Open http://localhost:3002 in your browser.

---
