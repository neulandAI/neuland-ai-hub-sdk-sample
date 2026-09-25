import os

NLND_HUB_API_URL = os.getenv("NLND_HUB_API_URL")
if not NLND_HUB_API_URL:
    raise RuntimeError(
        "NLND_HUB_API_URL is not set. Point it at your Hub API, e.g. https://api.your-domain.com "
        "(see python/.env.example)."
    )
NLND_JWT_ISSUER = os.getenv("NLND_JWT_ISSUER") or "hub.neuland.ai.com"  # must equal the Hub's NLND_JWT_ISSUER
NLND_JWT_AUDIENCE = os.getenv("NLND_JWT_AUDIENCE") or "http://localhost:9999"
NLND_JWT_PUBLIC_KEY = os.getenv("NLND_JWT_PUBLIC_KEY")
NLND_JWT_LEEWAY_SECONDS = os.getenv("NLND_JWT_LEEWAY_SECONDS") or 60
