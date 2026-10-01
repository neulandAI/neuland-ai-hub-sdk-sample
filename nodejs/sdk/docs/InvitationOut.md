# InvitationOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Unique identifier of the invitation. | [default to undefined]
**public_id** | **string** | Public, non-enumerable external identifier of the invitation. | [default to undefined]
**email** | **string** | Email address the invitation was sent to. | [default to undefined]
**tenant_id** | **number** | Internal id of the tenant (deprecated; use tenant_public_id). | [default to undefined]
**tenant_public_id** | **string** |  | [optional] [default to undefined]
**project_id** | **number** |  | [default to undefined]
**project_public_id** | **string** |  | [optional] [default to undefined]
**status** | **string** | Current invitation status. | [default to undefined]
**created_at** | **string** | UTC timestamp when the invitation was created. | [default to undefined]
**accepted_at** | **string** |  | [default to undefined]
**revoked_at** | **string** |  | [default to undefined]
**creator_user_id** | **number** | Internal id of the creating user (deprecated; use creator_user_public_id). | [default to undefined]
**creator_user_public_id** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { InvitationOut } from '@neulandai/neuland-hub-sdk';

const instance: InvitationOut = {
    id,
    public_id,
    email,
    tenant_id,
    tenant_public_id,
    project_id,
    project_public_id,
    status,
    created_at,
    accepted_at,
    revoked_at,
    creator_user_id,
    creator_user_public_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
