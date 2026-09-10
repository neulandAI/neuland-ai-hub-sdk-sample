# ChatIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**temperature** | **float** |  | [optional] 
**reasoning_effort** | [**ReasoningEffortEnum**](ReasoningEffortEnum.md) |  | [optional] 
**similarity_top_k** | **int** |  | [optional] 
**system_prompt** | **str** |  | [optional] 
**model** | **str** |  | [optional] 
**private** | **bool** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.chat_in import ChatIn

# TODO update the JSON string below
json = "{}"
# create an instance of ChatIn from a JSON string
chat_in_instance = ChatIn.from_json(json)
# print the JSON string representation of the object
print(ChatIn.to_json())

# convert the object into a dict
chat_in_dict = chat_in_instance.to_dict()
# create an instance of ChatIn from a dict
chat_in_from_dict = ChatIn.from_dict(chat_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


