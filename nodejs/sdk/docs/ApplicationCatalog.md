# ApplicationCatalog

Marketplace catalog for Applications (operator-owned: outlives its superadmin creator).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **string** | UTC timestamp when the record was created. | [optional] [default to undefined]
**updated_at** | **string** | UTC timestamp when the record was last updated. | [optional] [default to undefined]
**creator_user_id** | **number** |  | [optional] [default to undefined]
**updater_user_id** | **number** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**public_id** | **string** | Public, non-enumerable external identifier for the application catalog item. Exposed to clients instead of the internal integer id. | [optional] [default to undefined]
**name** | **string** | Display name of the catalog application; unique across the platform. | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**avatar** | **string** |  | [optional] [default to undefined]
**app_url** | **string** | Canonical URL of the application; unique across the catalog. | [default to undefined]
**version** | **string** |  | [optional] [default to undefined]
**state** | [**MarketplaceCatalogStateEnum**](MarketplaceCatalogStateEnum.md) | Lifecycle state; DEPRECATED items are hidden from the marketplace and reject new installs. | [optional] [default to undefined]

## Example

```typescript
import { ApplicationCatalog } from 'neuland-hub-sdk';

const instance: ApplicationCatalog = {
    created_at,
    updated_at,
    creator_user_id,
    updater_user_id,
    id,
    public_id,
    name,
    description,
    avatar,
    app_url,
    version,
    state,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
