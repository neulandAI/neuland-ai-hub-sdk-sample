# Application

Applications available on the platform.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **string** |  | [optional] [default to undefined]
**updated_at** | **string** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**name** | **string** | Name of the application. | [optional] [default to undefined]
**tenant_id** | **number** | ID of the tenant that owns the application. | [default to undefined]
**is_active** | **boolean** |  | [optional] [default to true]
**is_native** | **boolean** |  | [optional] [default to false]
**app_url** | **string** | Unique URL identifier for the application. | [optional] [default to undefined]
**native_app_id** | **number** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**version** | **string** |  | [optional] [default to undefined]
**avatar** | **string** |  | [optional] [default to undefined]
**creator_user_id** | **number** |  | [default to undefined]

## Example

```typescript
import { Application } from 'neuland-hub-sdk';

const instance: Application = {
    created_at,
    updated_at,
    id,
    name,
    tenant_id,
    is_active,
    is_native,
    app_url,
    native_app_id,
    description,
    version,
    avatar,
    creator_user_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
