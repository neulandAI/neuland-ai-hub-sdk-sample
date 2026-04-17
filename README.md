# neuland-ai-hub-sdk-sample

Here you can find backend samples also a dummy frontend app.

## Prerequisites

- Python 3.13+

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

## Installing the SDK in another project

The SDK (`sample-app/sdk/`) is published as a tagged Python package on this repository. Since the repo is private, consumers need GitHub authentication. Pick **one** of the auth methods below, then install.

### Auth setup (one-time per machine)

**Option 1 — SSH (recommended for developers)**

Make sure your SSH key is added to your GitHub account, then you can use `git+ssh://` URLs directly — no further setup needed.

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

Set `GITHUB_TOKEN` as an env var or secret, and embed it in the install URL (see below).

### Install

Pick a released tag from [Releases](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/tags) (e.g. `sdk-v1.0.1`) and install:

```bash
# SSH
pip install "git+ssh://git@github.com/neulandAI/neuland-ai-hub-sdk-sample.git@sdk-v1.0.1#subdirectory=sample-app/sdk"

# HTTPS (uses ~/.netrc if present)
pip install "git+https://github.com/neulandAI/neuland-ai-hub-sdk-sample.git@sdk-v1.0.1#subdirectory=sample-app/sdk"

# HTTPS with token in URL (for CI)
pip install "git+https://${GITHUB_TOKEN}@github.com/neulandAI/neuland-ai-hub-sdk-sample.git@sdk-v1.0.1#subdirectory=sample-app/sdk"
```

Then in your code:

```python
from neuland_hub_sdk import ApiClient, Configuration

config = Configuration(host="https://hub.neuland.ai.com")
client = ApiClient(config)
```

### `requirements.txt` usage

```
neuland-hub-sdk @ git+ssh://git@github.com/neulandAI/neuland-ai-hub-sdk-sample.git@sdk-v1.0.1#subdirectory=sample-app/sdk
```

To upgrade, change the tag (`@sdk-v1.0.2`) and re-run `pip install -r requirements.txt`.

## Releasing a new SDK version (maintainers)

Go to [Actions → Release SDK](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/actions/workflows/publish.yml) → **Run workflow**, pick `patch`/`minor`/`major`. The workflow will bump the version in all source files, commit, and push a `sdk-v<version>` tag — which is what consumers pin to.
