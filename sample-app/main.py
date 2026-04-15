""" sample app using neuland hub sdk """


import base64
from typing import List, Dict, Any
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel
import jwt
from cryptography.hazmat.primitives import serialization

import config

bearer_scheme = HTTPBearer()

import neuland_hub_sdk
from neuland_hub_sdk import UsersApi, AssistantsApi, SettingsApi, Configuration
from neuland_hub_sdk.rest import ApiException


app = FastAPI(title="SDK Consumer")
sdk_config = Configuration(host="http://localhost:8000")


class UserInfoResponse(BaseModel):
    """ user info response """
    name: str | None = None
    email: str | None = None
    first_name: str | None = None
    last_name:str | None = None
    admin: bool | None = None
    tenant_id: int | None = None


class LlmModelsResponse(BaseModel):
    """ Model llm response """
    name: str | None = None
    provider: str | None = None
    description:str | None = None
    default: bool | None = None
    multi_modal: bool | None = None
    gdpr_compliant: bool | None = None


class AssistantModel(BaseModel):
    """ Assistant model """
    name: str
    description: str | None = None
    provider: str
    model: str
    
    
def public_key_pem_from_env(public_key) -> bytes:
    """Read RSA public key from env and normalize \\n into real newlines."""
    if not public_key:
        raise RuntimeError("Public key is not set")
    if "\\n" in public_key:
        public_key = public_key.replace("\\n", "\n")
    return public_key.encode("utf-8")


def b64url_decode(part: str) -> bytes:
    """Decode a base64url-encoded string, adding padding if necessary."""
    return base64.urlsafe_b64decode(part + "=" * (-len(part) % 4))


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


@app.get("/auth/token", status_code=status.HTTP_200_OK)
async def verify_service_token(
    credentials: HTTPAuthorizationCredentials = Depends(bearer_scheme)) -> Dict[str, Any]:
    """Verify a service token and return the full payload."""
    try:
        return decode_service_token(credentials.credentials)
    except jwt.InvalidTokenError as e:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=str(e))


@app.get("/users/me", response_model=UserInfoResponse)
async def get_user_info(api_key: str = Depends(get_api_key)) -> UserInfoResponse:
    """ get user info """
    sdk_config.api_key["APIKeyHeader"] = api_key
    with neuland_hub_sdk.ApiClient(sdk_config) as api_client:
        api = UsersApi(api_client)
        try:
            user = api.get_myself_users_me_get()
            return UserInfoResponse(name=user.name,
                    email=user.email,
                    first_name=user.first_name,
                    last_name=user.last_name,
                    admin=user.admin,
                    tenant_id=user.tenant_id)
        except ApiException as e:
            raise HTTPException(status_code=e.status, detail=f"API error: {e.reason}")


@app.get("/llm/models", response_model=List[LlmModelsResponse])
async def get_llm_models(api_key: str = Depends(get_api_key)) -> List[LlmModelsResponse]:
    """ get llm models """
    sdk_config.api_key["APIKeyHeader"] = api_key
    with neuland_hub_sdk.ApiClient(sdk_config) as api_client:
        api = SettingsApi(api_client)
        try:
            models = api.list_available_models_settings_models_get()
            return [LlmModelsResponse(name=m.name,
                    provider=m.provider,
                    description=m.description,
                    default=m.default,
                    multi_modal=m.multi_modal,
                    gdpr_compliant=m.gdpr_compliant) for m in models]
        except ApiException as e:
            raise HTTPException(status_code=e.status, detail=f"API error: {e.reason}")
        
        
@app.post("/assistants", status_code=status.HTTP_201_CREATED)
async def create_assistant(payload: AssistantModel, api_key: str = Depends(get_api_key)) -> AssistantModel:
    """ create assistant """
    sdk_config.api_key["APIKeyHeader"] = api_key
    with neuland_hub_sdk.ApiClient(sdk_config) as api_client:
        api = AssistantsApi(api_client)
        try:
            assitant = api.create_assistant_assistants_post(payload.model_dump(exclude_unset=True))
            return AssistantModel(name=assitant.name,
                    description=assitant.description,
                    provider=assitant.provider,
                    model=assitant.model)
        except ApiException as e:
            raise HTTPException(status_code=e.status, detail=f"API error: {e.reason}")