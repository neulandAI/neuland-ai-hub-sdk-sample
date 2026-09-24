from typing import Optional

from pydantic import BaseModel


class UserInfoResponse(BaseModel):
    """ user info response """
    name: Optional[str] = None
    email: Optional[str] = None
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    admin: Optional[bool] = None
    tenant_id: Optional[int] = None


class AssistantModel(BaseModel):
    """ Assistant model """
    name: str
    description: Optional[str] = None
    model: Optional[str] = None
