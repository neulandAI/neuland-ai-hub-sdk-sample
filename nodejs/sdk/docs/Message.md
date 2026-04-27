# Message


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **string** |  | [optional] [default to undefined]
**state_reason** | **string** |  | [optional] [default to undefined]
**state_changed_at** | **string** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**created_at** | **string** |  | [optional] [default to undefined]
**updated_at** | **string** |  | [optional] [default to undefined]
**creator_user_id** | **number** |  | [default to undefined]
**chat_id** | **number** |  | [default to undefined]
**role** | **string** |  | [default to undefined]
**content** | **string** |  | [default to undefined]
**sent_user_msg** | **string** |  | [default to undefined]
**parent_id** | **number** |  | [default to undefined]
**completed** | **boolean** |  | [optional] [default to false]
**error** | **string** |  | [default to undefined]
**hint** | **string** |  | [default to undefined]
**llm_catalog_id** | **number** |  | [optional] [default to undefined]
**llm_settings_id** | **number** |  | [optional] [default to undefined]
**usage** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**celery_task_id** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { Message } from 'neuland-hub-sdk';

const instance: Message = {
    state,
    state_reason,
    state_changed_at,
    id,
    created_at,
    updated_at,
    creator_user_id,
    chat_id,
    role,
    content,
    sent_user_msg,
    parent_id,
    completed,
    error,
    hint,
    llm_catalog_id,
    llm_settings_id,
    usage,
    celery_task_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
