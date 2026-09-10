# AccessItemOut

One item a user may use, and what put it there.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_id** | **int** | Internal id of the model, tool or connector. | 
**item_public_id** | **UUID** | Public id of the model, tool or connector. | 
**name** | **str** | Name of the model, tool or connector. | 
**roles** | **List[Optional[str]]** | Names of the user&#39;s roles that grant this item. | [optional] 
**granted_directly** | **bool** | Whether the user holds an unrevoked direct grant for it. | [optional] [default to False]
**always_available** | **bool** | Whether the item reaches every user whatever their roles say. Only default tools do — they are bound in code for every chat — so an empty &#x60;roles&#x60; with no direct grant is expected rather than unexplained. | [optional] [default to False]

## Example

```python
from neuland_hub_sdk.models.access_item_out import AccessItemOut

# TODO update the JSON string below
json = "{}"
# create an instance of AccessItemOut from a JSON string
access_item_out_instance = AccessItemOut.from_json(json)
# print the JSON string representation of the object
print(AccessItemOut.to_json())

# convert the object into a dict
access_item_out_dict = access_item_out_instance.to_dict()
# create an instance of AccessItemOut from a dict
access_item_out_from_dict = AccessItemOut.from_dict(access_item_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


