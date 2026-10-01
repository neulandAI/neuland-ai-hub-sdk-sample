# ApplicationMemberOut

A user\'s application membership, identifying app and user by public id.  `app_id`/`user_id` (int) are kept alongside the public ids (dual-key — both are returned permanently); external clients should reference `app_public_id`/`user_public_id`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **number** | Internal id of the application (deprecated; use app_public_id). | [default to undefined]
**app_public_id** | **string** | Public id of the application. | [default to undefined]
**user_id** | **number** | Internal id of the member user (deprecated; use user_public_id). | [default to undefined]
**user_public_id** | **string** | Public id of the member user. | [default to undefined]
**tenant_id** | **number** | Internal id of the tenant the membership belongs to. | [default to undefined]
**created_at** | **string** | Timestamp when access was created. | [default to undefined]

## Example

```typescript
import { ApplicationMemberOut } from '@neulandai/neuland-hub-sdk';

const instance: ApplicationMemberOut = {
    app_id,
    app_public_id,
    user_id,
    user_public_id,
    tenant_id,
    created_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
