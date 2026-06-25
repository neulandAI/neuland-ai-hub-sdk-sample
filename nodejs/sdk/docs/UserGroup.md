# UserGroup

Named group scoped to a tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **string** | UTC timestamp when the record was created. | [optional] [default to undefined]
**updated_at** | **string** | UTC timestamp when the record was last updated. | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**tenant_id** | **number** | ID of the tenant. | [default to undefined]
**name** | **string** | Name of the user group. | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**source** | **string** | Where the group and its membership come from: \&#39;manual\&#39; (managed in the HUB) or \&#39;external\&#39; (synced from an identity provider). | [optional] [default to 'manual']
**external_id** | **string** |  | [optional] [default to undefined]
**creator_user_id** | **number** |  | [default to undefined]

## Example

```typescript
import { UserGroup } from 'neuland-hub-sdk';

const instance: UserGroup = {
    created_at,
    updated_at,
    id,
    tenant_id,
    name,
    description,
    source,
    external_id,
    creator_user_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
