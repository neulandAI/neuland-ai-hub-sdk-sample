# SimpleMessageOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response** | **str** |  | 
**type** | **str** |  | 
**history** | **List[Optional[Dict[str, object]]]** |  | 

## Example

```python
from neuland_hub_sdk.models.simple_message_out import SimpleMessageOut

# TODO update the JSON string below
json = "{}"
# create an instance of SimpleMessageOut from a JSON string
simple_message_out_instance = SimpleMessageOut.from_json(json)
# print the JSON string representation of the object
print(SimpleMessageOut.to_json())

# convert the object into a dict
simple_message_out_dict = simple_message_out_instance.to_dict()
# create an instance of SimpleMessageOut from a dict
simple_message_out_from_dict = SimpleMessageOut.from_dict(simple_message_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


