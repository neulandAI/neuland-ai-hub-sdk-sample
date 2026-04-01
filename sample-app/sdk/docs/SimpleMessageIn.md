# SimpleMessageIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** |  | 
**history** | **List[Optional[Dict[str, object]]]** |  | [optional] 
**language** | **str** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.simple_message_in import SimpleMessageIn

# TODO update the JSON string below
json = "{}"
# create an instance of SimpleMessageIn from a JSON string
simple_message_in_instance = SimpleMessageIn.from_json(json)
# print the JSON string representation of the object
print(SimpleMessageIn.to_json())

# convert the object into a dict
simple_message_in_dict = simple_message_in_instance.to_dict()
# create an instance of SimpleMessageIn from a dict
simple_message_in_from_dict = SimpleMessageIn.from_dict(simple_message_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


