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
