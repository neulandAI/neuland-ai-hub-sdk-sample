# MessageIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** |  | [optional] 
**chat_id** | **UUID** |  | [optional] 
**project_id** | **UUID** |  | [optional] 
**model** | **str** |  | [optional] 
**temperature** | **float** |  | [optional] 
**similarity_top_k** | **int** |  | [optional] 
**system_prompt** | **str** |  | [optional] 
**assistant_id** | **UUID** |  | [optional] 
**private** | **bool** |  | [optional] 
**form_data** | **Dict[str, object]** |  | [optional] 
**form_fields** | **List[Dict[str, object]]** |  | [optional] 
**playground** | **bool** | Start a playground (sandbox) chat for testing assistant settings: the given system_prompt/temperature/similarity_top_k/model override the assistant&#39;s live config without saving it. Requires assistant_id; only the assistant&#39;s creator may use it. | [optional] [default to False]

## Example

```python
from neuland_hub_sdk.models.message_in import MessageIn

# TODO update the JSON string below
json = "{}"
# create an instance of MessageIn from a JSON string
message_in_instance = MessageIn.from_json(json)
# print the JSON string representation of the object
print(MessageIn.to_json())

# convert the object into a dict
message_in_dict = message_in_instance.to_dict()
# create an instance of MessageIn from a dict
message_in_from_dict = MessageIn.from_dict(message_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


