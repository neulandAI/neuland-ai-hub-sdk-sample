from typing import Dict, Any
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
import jwt
from cryptography.hazmat.primitives import serialization

import config

bearer_scheme = HTTPBearer()


def public_key_pem_from_env(public_key) -> bytes:
    """Read RSA public key from env and normalize \\n into real newlines."""
    if not public_key:
        raise RuntimeError("Public key is not set")
    if "\\n" in public_key:
        public_key = public_key.replace("\\n", "\n")
    return public_key.encode("utf-8")


def decode_service_token(token: str) -> Dict[str, Any]:
    """
    Verify an RS256 JWT using a public key and claim validation.
    Returns the verified claims (payload) as a dict.
    """
    p_key = public_key_pem_from_env(config.NLND_JWT_PUBLIC_KEY)
    expected_audience = config.NLND_JWT_AUDIENCE
    expected_issuer = config.NLND_JWT_ISSUER
    leeway_seconds = int(config.NLND_JWT_LEEWAY_SECONDS or 60)
    try:
        header = jwt.get_unverified_header(token)
    except jwt.InvalidTokenError as e:
        raise jwt.InvalidTokenError(f"Failed to get unverified header: {e}") from e
    alg = header.get("alg")
    if alg != "RS256":
        raise jwt.InvalidAlgorithmError(f"Unexpected alg '{alg}'; only RS256 is allowed")
    public_key = serialization.load_pem_public_key(p_key)
    decode_kwargs: Dict[str, Any] = {
        "key": public_key,
        "algorithms": ["RS256"],
        "leeway": leeway_seconds,
        "options": {
            "require": ["exp", "iat", "nbf"],
            "verify_signature": True,
            "verify_exp": True,
            "verify_nbf": True,
            "verify_iat": True,
            "verify_aud": bool(expected_audience),
            "verify_iss": bool(expected_issuer),
            "verify_jti": False,
        },
    }
    if expected_audience:
        decode_kwargs["audience"] = expected_audience
    if expected_issuer:
        decode_kwargs["issuer"] = expected_issuer
    return jwt.decode(token, **decode_kwargs)


async def get_api_key(
    credentials: HTTPAuthorizationCredentials = Depends(bearer_scheme)) -> str:
    """FastAPI dependency: decode Bearer token and return the api_key claim."""
    try:
        payload = decode_service_token(credentials.credentials)
    except jwt.InvalidTokenError as e:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=str(e))
    api_key = payload.get("x-api-key")
    if not api_key:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="x-api-key claim missing from token")
    return api_key
