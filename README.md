# neuland-ai-hub-sdk-sample

Sample backend (FastAPI) demonstrating how to consume the Neuland AI Hub via the SDK.

## Prerequisites

- A running Hub backend
- A running Hub frontend — required for the bundled frontend's auth-token exchange

> All URLs and ports below (`:8000`, `:3001`, `:9999`, `:3002`) are the values used in our local test setup. Use whatever you like — just keep the values consistent across the Hub backend, the Hub frontend, your `python/sample-app/.env` (`NLND_JWT_AUDIENCE`), and the port you start the bundled frontend on.

---

## Quick Start

### 1. Install the sample-app

```bash
cd python/sample-app
python -m venv .venv && source .venv/bin/activate    # optional but recommended
pip install -e sdk
pip install -r requirements.txt
```

### 2. Configure

Create the env file and fill in the required values:

```bash
cp python/sample-app/.env.example python/sample-app/.env
```

See `python/sample-app/.env.example` for the full list of variables. Key one to watch: **`NLND_JWT_AUDIENCE` must match the URL the bundled frontend runs on** (the service token's `aud` claim).

### 3. Run the sample-app

```bash
cd python/sample-app
uvicorn main:app --host 0.0.0.0 --port 9999 --reload
```

API docs: http://localhost:9999/docs (replace the port with whatever you ran on).

### 4. Run the bundled frontend

```bash
cd python/frontend
npm install
npm run dev -- -p 3002
```

> Pick any free port — just make sure it matches the URL set in `NLND_JWT_AUDIENCE`, and that nothing else (e.g. PostgREST) is already using it.

### 5. Sign in

1. Log in to your Hub frontend in the browser as you normally would.
2. Open the bundled frontend (e.g. http://localhost:3002).
3. From your Hub frontend tab, copy the `access-token` cookie value (DevTools → Application → Cookies). Paste it into the **Access Token** field on the bundled frontend → **Authorize**.

The bundled frontend exchanges that access token via the Hub frontend for a service token, stores both in cookies, and redirects to the dashboard. From there, every API call hits the sample-app, which verifies the JWT and forwards to the Hub backend via the SDK.

---

## Installing the SDK in another project

The SDK (`python/sample-app/sdk/`) is published as a tagged Python package on this repository. The repo is private, so consumers need GitHub authentication. Pick one auth method below, then install.

### Auth setup (one-time per machine)

**Option 1 — SSH (recommended for developers)**

Make sure your SSH key is added to your GitHub account; `git+ssh://` URLs work directly — no further setup needed.

**Option 2 — Personal Access Token via `~/.netrc`**

Create a [fine-grained PAT](https://github.com/settings/personal-access-tokens) with `Contents: Read` access to the `neulandAI/neuland-ai-hub-sdk-sample` repo, then:

```bash
cat >> ~/.netrc <<EOF
machine github.com
  login <your-github-username>
  password <your-PAT>
EOF
chmod 600 ~/.netrc
```

**Option 3 — Personal Access Token in the URL (CI/CD)**

Set `GITHUB_TOKEN` as an env var or secret and embed it in the install URL.

### Install

Pick a released tag from [Releases](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/tags) (e.g. `sdk-v1.0.3`) and install:

```bash
# SSH
pip install "git+ssh://git@github.com/neulandAI/neuland-ai-hub-sdk-sample.git@sdk-v1.0.3#subdirectory=python/sample-app/sdk"

# HTTPS (uses ~/.netrc if present)
pip install "git+https://github.com/neulandAI/neuland-ai-hub-sdk-sample.git@sdk-v1.0.3#subdirectory=python/sample-app/sdk"

# HTTPS with token in URL (for CI)
pip install "git+https://${GITHUB_TOKEN}@github.com/neulandAI/neuland-ai-hub-sdk-sample.git@sdk-v1.0.3#subdirectory=python/sample-app/sdk"
```

Then in your code:

```python
from neuland_hub_sdk import ApiClient, Configuration
from neuland_hub_sdk.api.user import User

config = Configuration(host="https://hub.neuland.ai.com")
config.api_key["APIKeyHeader"] = "<your-api-key>"

with ApiClient(config) as client:
    me = User(client).get_myself()
    print(me)
```

### `requirements.txt` usage

```
neuland-hub-sdk @ git+ssh://git@github.com/neulandAI/neuland-ai-hub-sdk-sample.git@sdk-v1.0.3#subdirectory=python/sample-app/sdk
```

To upgrade, change the tag (`@sdk-v1.0.4`, etc.) and re-run `pip install -r requirements.txt`.

---
