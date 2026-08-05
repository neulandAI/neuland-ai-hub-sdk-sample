# MarketplaceCatalogStateUpdate

Payload for the `/{catalog_id}/state` toggle endpoint.  Shared across every marketplace catalog type since the state machine (ACTIVE <-> DEPRECATED) is identical everywhere.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | [**MarketplaceCatalogStateEnum**](MarketplaceCatalogStateEnum.md) | Target lifecycle state. DEPRECATED hides the item from the marketplace and blocks new installs. | 

## Example

```python
from neuland_hub_sdk.models.marketplace_catalog_state_update import MarketplaceCatalogStateUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of MarketplaceCatalogStateUpdate from a JSON string
marketplace_catalog_state_update_instance = MarketplaceCatalogStateUpdate.from_json(json)
# print the JSON string representation of the object
print(MarketplaceCatalogStateUpdate.to_json())

# convert the object into a dict
marketplace_catalog_state_update_dict = marketplace_catalog_state_update_instance.to_dict()
# create an instance of MarketplaceCatalogStateUpdate from a dict
marketplace_catalog_state_update_from_dict = MarketplaceCatalogStateUpdate.from_dict(marketplace_catalog_state_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


