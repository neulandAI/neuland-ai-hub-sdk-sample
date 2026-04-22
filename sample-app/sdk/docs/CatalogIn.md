# CatalogIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**description** | **str** |  | 
**multi_modal** | **bool** |  | 
**gdpr_compliant** | **bool** |  | 
**auto_seed** | **bool** |  | [optional] [default to False]

## Example

```python
from neuland_hub_sdk.models.catalog_in import CatalogIn

# TODO update the JSON string below
json = "{}"
# create an instance of CatalogIn from a JSON string
catalog_in_instance = CatalogIn.from_json(json)
# print the JSON string representation of the object
print(CatalogIn.to_json())

# convert the object into a dict
catalog_in_dict = catalog_in_instance.to_dict()
# create an instance of CatalogIn from a dict
catalog_in_from_dict = CatalogIn.from_dict(catalog_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


