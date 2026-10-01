# ApplicationCatalogIn

Payload for creating a catalog item (superadmin).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Display name; unique across the catalog. Max 100 characters. | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**avatar** | **string** |  | [optional] [default to undefined]
**app_url** | **string** | Canonical URL of the application; unique across the catalog. Max 100 characters. | [default to undefined]
**version** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ApplicationCatalogIn } from '@neulandai/neuland-hub-sdk';

const instance: ApplicationCatalogIn = {
    name,
    description,
    avatar,
    app_url,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
