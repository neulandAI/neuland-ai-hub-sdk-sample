# ApplicationGroupOut

A group\'s application access, identifying app and group by public id.  `app_id`/`group_id` (int) are kept alongside the public ids (dual-key — both are returned permanently); external clients should reference `app_public_id`/`group_public_id`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **number** | Internal id of the application (deprecated; use app_public_id). | [default to undefined]
**app_public_id** | **string** | Public id of the application. | [default to undefined]
**group_id** | **number** | Internal id of the user group (deprecated; use group_public_id). | [default to undefined]
**group_public_id** | **string** | Public id of the user group. | [default to undefined]
**tenant_id** | **number** | Internal id of the tenant the access belongs to. | [default to undefined]
**created_at** | **string** | Timestamp when the access was created. | [default to undefined]

## Example

```typescript
import { ApplicationGroupOut } from 'neuland-hub-sdk';

const instance: ApplicationGroupOut = {
    app_id,
    app_public_id,
    group_id,
    group_public_id,
    tenant_id,
    created_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
