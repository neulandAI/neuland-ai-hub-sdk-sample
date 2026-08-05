# MarketplaceCatalogStateUpdate

Payload for the `/{catalog_id}/state` toggle endpoint.  Shared across every marketplace catalog type since the state machine (ACTIVE <-> DEPRECATED) is identical everywhere.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | [**MarketplaceCatalogStateEnum**](MarketplaceCatalogStateEnum.md) | Target lifecycle state. DEPRECATED hides the item from the marketplace and blocks new installs. | [default to undefined]

## Example

```typescript
import { MarketplaceCatalogStateUpdate } from 'neuland-hub-sdk';

const instance: MarketplaceCatalogStateUpdate = {
    state,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
