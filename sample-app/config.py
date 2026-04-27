import os
from dotenv import load_dotenv

load_dotenv()

NLND_HUB_API_URL = os.getenv("NLND_HUB_API_URL") or "http://localhost:8000"
NLND_JWT_ISSUER = os.getenv("NLND_JWT_ISSUER") or "hub.neuland.ai.com"
NLND_JWT_AUDIENCE = os.getenv("NLND_JWT_AUDIENCE") or "http://localhost:9999"
NLND_JWT_KID = os.getenv("NLND_JWT_KID") or "rsa-key-2025-09-15"
NLND_JWT_PUBLIC_KEY = os.getenv("NLND_JWT_PUBLIC_KEY")
NLND_JWT_LEEWAY_SECONDS = os.getenv("NLND_JWT_LEEWAY_SECONDS") or 60
