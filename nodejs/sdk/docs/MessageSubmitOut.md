# MessageSubmitOut

Response for POST /messages/submit: the created message, dual-key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Internal id of the message (deprecated; use public_id). | [default to undefined]
**public_id** | **string** | Public, non-enumerable external id of the message. | [default to undefined]
**chat_id** | **number** | Internal id of the chat (deprecated; use chat_public_id). | [default to undefined]
**chat_public_id** | **string** | Public id of the chat the message belongs to. | [default to undefined]
**parent_id** | **number** |  | [optional] [default to undefined]
**creator_user_id** | **number** | Internal id of the user who created the message. | [default to undefined]
**role** | **string** | Role of the message author. | [default to undefined]
**content** | **string** | Rendered content of the message. | [default to undefined]
**sent_user_msg** | **string** |  | [optional] [default to undefined]
**state** | **string** |  | [optional] [default to undefined]
**state_reason** | **string** |  | [optional] [default to undefined]
**state_changed_at** | **string** |  | [optional] [default to undefined]
**turn_step_index** | **number** |  | [optional] [default to undefined]
**is_final_step** | **boolean** |  | [optional] [default to undefined]
**completed** | **boolean** | DEPRECATED. Whether processing finished. | [optional] [default to false]
**error** | **string** |  | [optional] [default to undefined]
**hint** | **string** |  | [optional] [default to undefined]
**usage** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**interrupt** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**llm_catalog_id** | **number** |  | [optional] [default to undefined]
**llm_settings_id** | **number** |  | [optional] [default to undefined]
**celery_task_id** | **string** |  | [optional] [default to undefined]
**created_at** | **string** | When the message was created. | [default to undefined]
**updated_at** | **string** | When the message was last updated. | [default to undefined]

## Example

```typescript
import { MessageSubmitOut } from 'neuland-hub-sdk';

const instance: MessageSubmitOut = {
    id,
    public_id,
    chat_id,
    chat_public_id,
    parent_id,
    creator_user_id,
    role,
    content,
    sent_user_msg,
    state,
    state_reason,
    state_changed_at,
    turn_step_index,
    is_final_step,
    completed,
    error,
    hint,
    usage,
    interrupt,
    llm_catalog_id,
    llm_settings_id,
    celery_task_id,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
