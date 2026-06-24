from typing import List, Dict, Any
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials

import config
import neuland_hub_sdk
from neuland_hub_sdk import Configuration
from neuland_hub_sdk.api.user import User
from neuland_hub_sdk.api.assistant import Assistant as AssistantApi
from neuland_hub_sdk.models.assistant_in import AssistantIn
from neuland_hub_sdk.rest import ApiException

from auth import bearer_scheme, decode_service_token, get_api_key
from schemas import UserInfoResponse, AssistantModel

router = APIRouter()
sdk_config = Configuration(host=config.NLND_HUB_API_URL)


@router.get("/auth/token", status_code=status.HTTP_200_OK)
async def verify_service_token(
    credentials: HTTPAuthorizationCredentials = Depends(bearer_scheme)) -> Dict[str, Any]:
    """Verify a service token and return the full payload."""
    try:
        return decode_service_token(credentials.credentials)
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=str(e))


@router.get("/users/me", response_model=UserInfoResponse)
async def get_user_info(api_key: str = Depends(get_api_key)) -> UserInfoResponse:
    """ get user info """
    sdk_config.api_key["APIKeyHeader"] = api_key
    with neuland_hub_sdk.ApiClient(sdk_config) as api_client:
        api = User(api_client)
        try:
            user = api.get_myself()
            return UserInfoResponse(name=user.name,
                    email=user.email,
                    first_name=user.first_name,
                    last_name=user.last_name,
                    admin=user.admin,
                    tenant_id=user.tenant_id)
        except ApiException as e:
            raise HTTPException(status_code=e.status, detail=f"API error: {e.reason}")


@router.post("/assistants", status_code=status.HTTP_201_CREATED)
async def create_assistant(payload: AssistantModel, api_key: str = Depends(get_api_key)) -> AssistantModel:
    """ create assistant """
    sdk_config.api_key["APIKeyHeader"] = api_key
    with neuland_hub_sdk.ApiClient(sdk_config) as api_client:
        api = AssistantApi(api_client)
        try:
            assistant_in = AssistantIn(**payload.model_dump(exclude_unset=True))
            assistant = api.create_assistant(assistant_in=assistant_in)
            return AssistantModel(name=assistant.name,
                    description=assistant.description,
                    model=payload.model)
        except ApiException as e:
            raise HTTPException(status_code=e.status, detail=f"API error: {e.reason}")
