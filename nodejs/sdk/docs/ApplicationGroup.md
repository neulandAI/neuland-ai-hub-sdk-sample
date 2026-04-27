# ApplicationGroup

Group-level access for an application, scoped to tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenant_id** | **number** | ID of the tenant. | [default to undefined]
**group_id** | **number** |  ID of the user group. | [default to undefined]
**app_id** | **number** | ID of the application. | [default to undefined]
**granted_by** | **number** |  | [default to undefined]
**created_at** | **string** | Timestamp when the user group was created. | [optional] [default to undefined]

## Example

```typescript
import { ApplicationGroup } from 'neuland-hub-sdk';

const instance: ApplicationGroup = {
    tenant_id,
    group_id,
    app_id,
    granted_by,
    created_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
