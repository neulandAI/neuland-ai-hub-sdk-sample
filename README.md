# neuland-ai-hub-sdk-sample

The Neuland AI Hub SDK plus runnable sample apps that demonstrate it end-to-end.

This README has two paths — pick the one that matches what you're doing:

- **[Integrating the SDK in your project](#integrating-the-sdk-in-your-project)** — install, configure with an API key, call Hub.
- **[Running the sample apps locally](#running-the-sample-apps-locally)** — clone this repo and play with the FastAPI/Express sample backends + Next.js demo frontend. For evaluation and learning.

---

# Integrating the SDK in your project

## 1. Get an API key

In Hub UI: **Settings → API keys → Create new key**. Copy when shown — it's only displayed once.

## 2. Authenticate consumers (one-time per machine)

The repo is private, so consumers need GitHub authentication to install.

**SSH (recommended for developers):** add your key to GitHub. `git+ssh://` URLs work directly.

**PAT via `~/.netrc`:**
```bash
cat >> ~/.netrc <<EOF
machine github.com
  login <your-github-username>
  password <your-PAT>
EOF
chmod 600 ~/.netrc
```

**Token in URL (CI):** set `GITHUB_TOKEN` and embed it in the install URL.

## 3. Install + use

### Python

```bash
pip install "git+ssh://git@github.com/neulandAI/neuland-ai-hub-sdk-sample.git@sdk-v1.0.2#subdirectory=python/sdk"
```

```python
import os
from neuland_hub_sdk import ApiClient, Configuration
from neuland_hub_sdk.api.user import User

config = Configuration(host="https://hub.neuland.ai.com")
config.api_key["APIKeyHeader"] = os.environ["NLND_HUB_API_KEY"]

with ApiClient(config) as client:
    me = User(client).users_get_myself()
    print(me)
```

`requirements.txt`:
```
neuland-hub-sdk @ git+ssh://git@github.com/neulandAI/neuland-ai-hub-sdk-sample.git@sdk-v1.0.2#subdirectory=python/sdk
```

Requires Python 3.9+.

### Node.js

```bash
# npm doesn't support git subdirectory installs natively. Use gitpkg:
npm install "https://gitpkg.vercel.app/neulandAI/neuland-ai-hub-sdk-sample/nodejs/sdk?dev"
```

Or local clone:
```bash
git clone git@github.com:neulandAI/neuland-ai-hub-sdk-sample.git
cd neuland-ai-hub-sdk-sample/nodejs/sdk && npm install && npm run build
# then in your project:
npm install /absolute/path/to/neuland-ai-hub-sdk-sample/nodejs/sdk
```

```ts
import { Configuration, User } from "neuland-hub-sdk";

const config = new Configuration({
  basePath: "https://hub.neuland.ai.com",
  apiKey: process.env.NLND_HUB_API_KEY,
});

const { data: me } = await new User(config).usersGetMyself();
console.log(me);
```

Requires Node.js 18+.

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
pip install -r requirements.txt
set -a && source .env && set +a
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

```bash
cd frontend
npm install
cp .env.local.example .env.local
npm run dev -- -p 3002
```

Open http://localhost:3002 in your browser.

---
