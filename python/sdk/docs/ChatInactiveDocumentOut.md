# ChatInactiveDocumentOut

A document deactivated in a chat, identifying chat and document by public id.  `chat_id`/`document_id` (int) are kept alongside the public ids (dual-key — both are returned permanently); external clients should reference `chat_public_id`/`document_public_id`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | **int** | Internal id of the chat (deprecated; use chat_public_id). | 
**chat_public_id** | **UUID** | Public id of the chat. | 
**document_id** | **int** | Internal id of the document (deprecated; use document_public_id). | 
**document_public_id** | **UUID** | Public id of the document. | 

## Example

```python
from neuland_hub_sdk.models.chat_inactive_document_out import ChatInactiveDocumentOut

# TODO update the JSON string below
json = "{}"
# create an instance of ChatInactiveDocumentOut from a JSON string
chat_inactive_document_out_instance = ChatInactiveDocumentOut.from_json(json)
# print the JSON string representation of the object
print(ChatInactiveDocumentOut.to_json())

# convert the object into a dict
chat_inactive_document_out_dict = chat_inactive_document_out_instance.to_dict()
# create an instance of ChatInactiveDocumentOut from a dict
chat_inactive_document_out_from_dict = ChatInactiveDocumentOut.from_dict(chat_inactive_document_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


