# RoleReassignIn

Move every holder of a role to another role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role_id** | **string** | Public id of the role to move the holders to. | [default to undefined]
**exclude_user_ids** | **Array&lt;string&gt;** | Public ids of users to leave on the source role. | [optional] [default to undefined]

## Example

```typescript
import { RoleReassignIn } from '@neulandai/neuland-hub-sdk';

const instance: RoleReassignIn = {
    role_id,
    exclude_user_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
