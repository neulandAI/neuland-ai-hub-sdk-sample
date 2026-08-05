# MessageTurnOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent** | [**MessageDetailOut**](MessageDetailOut.md) |  | 
**steps** | [**List[MessageDetailOut]**](MessageDetailOut.md) |  | 

## Example

```python
from neuland_hub_sdk.models.message_turn_out import MessageTurnOut

# TODO update the JSON string below
json = "{}"
# create an instance of MessageTurnOut from a JSON string
message_turn_out_instance = MessageTurnOut.from_json(json)
# print the JSON string representation of the object
print(MessageTurnOut.to_json())

# convert the object into a dict
message_turn_out_dict = message_turn_out_instance.to_dict()
# create an instance of MessageTurnOut from a dict
message_turn_out_from_dict = MessageTurnOut.from_dict(message_turn_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


