# CatalogUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**multi_modal** | **bool** |  | [optional] 
**gdpr_compliant** | **bool** |  | [optional] 
**embedding_dimension** | **int** |  | [optional] 
**supports_embedding** | **bool** |  | [optional] 
**supports_transcription** | **bool** |  | [optional] 
**supports_reasoning_effort** | **bool** |  | [optional] 
**supports_clarification** | **bool** |  | [optional] 
**auto_seed** | **bool** |  | [optional] 
**tier** | [**ModelTierEnum**](ModelTierEnum.md) |  | [optional] 
**auto_routable** | **bool** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.catalog_update import CatalogUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of CatalogUpdate from a JSON string
catalog_update_instance = CatalogUpdate.from_json(json)
# print the JSON string representation of the object
print(CatalogUpdate.to_json())

# convert the object into a dict
catalog_update_dict = catalog_update_instance.to_dict()
# create an instance of CatalogUpdate from a dict
catalog_update_from_dict = CatalogUpdate.from_dict(catalog_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


