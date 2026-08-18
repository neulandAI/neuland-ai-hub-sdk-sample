# ChatInactiveDocumentOut

A document deactivated in a chat, identifying chat and document by public id.  `chat_id`/`document_id` (int) are kept alongside the public ids (dual-key — both are returned permanently); external clients should reference `chat_public_id`/`document_public_id`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | **number** | Internal id of the chat (deprecated; use chat_public_id). | [default to undefined]
**chat_public_id** | **string** | Public id of the chat. | [default to undefined]
**document_id** | **number** | Internal id of the document (deprecated; use document_public_id). | [default to undefined]
**document_public_id** | **string** | Public id of the document. | [default to undefined]

## Example

```typescript
import { ChatInactiveDocumentOut } from 'neuland-hub-sdk';

const instance: ChatInactiveDocumentOut = {
    chat_id,
    chat_public_id,
    document_id,
    document_public_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
