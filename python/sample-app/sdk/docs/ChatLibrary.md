# ChatLibrary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**creator_user_id** | **int** |  | 
**updater_user_id** | **int** |  | [optional] 
**chat_id** | **int** |  | 
**library_id** | **int** |  | 

## Example

```python
from neuland_hub_sdk.models.chat_library import ChatLibrary

# TODO update the JSON string below
json = "{}"
# create an instance of ChatLibrary from a JSON string
chat_library_instance = ChatLibrary.from_json(json)
# print the JSON string representation of the object
print(ChatLibrary.to_json())

# convert the object into a dict
chat_library_dict = chat_library_instance.to_dict()
# create an instance of ChatLibrary from a dict
chat_library_from_dict = ChatLibrary.from_dict(chat_library_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


