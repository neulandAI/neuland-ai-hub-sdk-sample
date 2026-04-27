# UserOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**created_at** | **string** |  | [default to undefined]
**email** | **string** |  | [default to undefined]
**email_confirmed** | **boolean** |  | [default to undefined]
**pending_email** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**first_name** | **string** |  | [optional] [default to undefined]
**last_name** | **string** |  | [optional] [default to undefined]
**admin** | **boolean** |  | [default to undefined]
**superadmin** | **boolean** |  | [optional] [default to undefined]
**active** | **boolean** |  | [default to undefined]
**tenant_id** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { UserOut } from 'neuland-hub-sdk';

const instance: UserOut = {
    id,
    created_at,
    email,
    email_confirmed,
    pending_email,
    name,
    first_name,
    last_name,
    admin,
    superadmin,
    active,
    tenant_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
