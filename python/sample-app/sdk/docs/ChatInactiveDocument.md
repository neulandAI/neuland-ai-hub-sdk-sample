# ChatInactiveDocument


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creator_user_id** | **int** |  | 
**created_at** | **datetime** |  | [optional] 
**chat_id** | **int** |  | 
**document_id** | **int** |  | 

## Example

```python
from neuland_hub_sdk.models.chat_inactive_document import ChatInactiveDocument

# TODO update the JSON string below
json = "{}"
# create an instance of ChatInactiveDocument from a JSON string
chat_inactive_document_instance = ChatInactiveDocument.from_json(json)
# print the JSON string representation of the object
print(ChatInactiveDocument.to_json())

# convert the object into a dict
chat_inactive_document_dict = chat_inactive_document_instance.to_dict()
# create an instance of ChatInactiveDocument from a dict
chat_inactive_document_from_dict = ChatInactiveDocument.from_dict(chat_inactive_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


