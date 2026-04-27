# UserGroupMember

Membership of a user in a group (within a tenant).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_id** | **number** |  ID of the user group. | [default to undefined]
**user_id** | **number** | ID of the user. | [default to undefined]
**tenant_id** | **number** | ID of the tenant. | [default to undefined]
**creator_user_id** | **number** |  | [default to undefined]
**created_at** | **string** | Timestamp when the user group was created. | [optional] [default to undefined]

## Example

```typescript
import { UserGroupMember } from 'neuland-hub-sdk';

const instance: UserGroupMember = {
    group_id,
    user_id,
    tenant_id,
    creator_user_id,
    created_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
