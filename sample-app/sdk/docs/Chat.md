# Chat


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** |  | [optional] 
**state_reason** | **str** |  | [optional] 
**state_changed_at** | **datetime** |  | [optional] 
**id** | **int** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**creator_user_id** | **int** |  | 
**project_id** | **int** |  | 
**name** | **str** |  | 
**busy** | **bool** |  | 
**temperature** | **float** |  | [optional] 
**similarity_top_k** | **int** |  | [optional] 
**system_prompt** | **str** |  | [optional] 
**provider** | **str** |  | [optional] 
**model** | **str** |  | [optional] 
**assistant_id** | **int** |  | [optional] 
**private** | **bool** |  | [optional] [default to False]
**consumed_tokens** | **int** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.chat import Chat

# TODO update the JSON string below
json = "{}"
# create an instance of Chat from a JSON string
chat_instance = Chat.from_json(json)
# print the JSON string representation of the object
print(Chat.to_json())

# convert the object into a dict
chat_dict = chat_instance.to_dict()
# create an instance of Chat from a dict
chat_from_dict = Chat.from_dict(chat_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


