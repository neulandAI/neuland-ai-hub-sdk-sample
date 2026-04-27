from pydantic import BaseModel


class UserInfoResponse(BaseModel):
    """ user info response """
    name: str | None = None
    email: str | None = None
    first_name: str | None = None
    last_name: str | None = None
    admin: bool | None = None
    tenant_id: int | None = None


class LlmModelsResponse(BaseModel):
    """ Model llm response """
    name: str | None = None
    provider: str | None = None
    description: str | None = None
    default: bool | None = None
    multi_modal: bool | None = None
    gdpr_compliant: bool | None = None


class AssistantModel(BaseModel):
    """ Assistant model """
    name: str
    description: str | None = None
    model: str | None = None
