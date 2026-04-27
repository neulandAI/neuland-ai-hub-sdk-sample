from pydantic import BaseModel


class UserInfoResponse(BaseModel):
    """ user info response """
    name: str | None = None
    email: str | None = None
    first_name: str | None = None
    last_name: str | None = None
    admin: bool | None = None
    tenant_id: int | None = None


class AssistantModel(BaseModel):
    """ Assistant model """
    name: str
    description: str | None = None
    model: str | None = None
