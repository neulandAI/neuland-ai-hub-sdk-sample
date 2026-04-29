# ApplicationMember

User-specific access control for applications. This table allows setting explicit allow/deny rules for users on specific applications.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **number** | ID of the user. | [default to undefined]
**tenant_id** | **number** | ID of the tenant. | [default to undefined]
**app_id** | **number** | ID of the application. | [default to undefined]
**granted_by** | **number** |  | [default to undefined]
**created_at** | **string** | Timestamp when access was created. | [optional] [default to undefined]

## Example

```typescript
import { ApplicationMember } from 'neuland-hub-sdk';

const instance: ApplicationMember = {
    user_id,
    tenant_id,
    app_id,
    granted_by,
    created_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
