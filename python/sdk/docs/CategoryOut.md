# CategoryOut

A category as returned by the API (external fields only).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Internal identifier; correlates with tools.category_id so clients can group tools by category. | 
**public_id** | **UUID** | Public, non-enumerable external identifier of the category. | 
**name** | **str** | Display name of the category. | 
**slug** | **str** | Stable, URL-safe identifier for the category. | 
**description** | **str** |  | [optional] 
**sort_order** | **int** | Position used to order categories in listings. | 
**is_active** | **bool** | Whether the category is active and selectable. | 

## Example

```python
from neuland_hub_sdk.models.category_out import CategoryOut

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryOut from a JSON string
category_out_instance = CategoryOut.from_json(json)
# print the JSON string representation of the object
print(CategoryOut.to_json())

# convert the object into a dict
category_out_dict = category_out_instance.to_dict()
# create an instance of CategoryOut from a dict
category_out_from_dict = CategoryOut.from_dict(category_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


