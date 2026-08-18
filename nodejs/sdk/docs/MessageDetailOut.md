# MessageDetailOut

Composed message state — the recovery contract for dropped SSE streams.  See backend/docs/streaming-architecture.md §6 requirement 4.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | ID of the message. | [default to undefined]
**public_id** | **string** | Public, non-enumerable external id of the message. | [default to undefined]
**chat_id** | **string** | Public id of the chat the message belongs to. | [default to undefined]
**parent_id** | **string** |  | [default to undefined]
**role** | **string** | Role of the message author. | [default to undefined]
**content** | **string** | Text content of the message. | [default to undefined]
**state** | **string** |  | [default to undefined]
**state_reason** | **string** |  | [optional] [default to undefined]
**error** | **string** |  | [default to undefined]
**hint** | **string** |  | [default to undefined]
**created_at** | **string** | When the message was created. | [default to undefined]
**updated_at** | **string** | When the message was last updated. | [default to undefined]
**usage** | **{ [key: string]: any; }** |  | [default to undefined]
**tool_calls** | [**Array&lt;ToolCallOut&gt;**](ToolCallOut.md) | Tool calls made while generating the message. | [default to undefined]
**files** | [**Array&lt;MessageFileOut&gt;**](MessageFileOut.md) | Files attached to the message. | [default to undefined]
**interrupt** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**reasoning** | **Array&lt;{ [key: string]: any; }&gt;** |  | [optional] [default to undefined]
**turn_step_index** | **number** |  | [optional] [default to undefined]
**is_final_step** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { MessageDetailOut } from 'neuland-hub-sdk';

const instance: MessageDetailOut = {
    id,
    public_id,
    chat_id,
    parent_id,
    role,
    content,
    state,
    state_reason,
    error,
    hint,
    created_at,
    updated_at,
    usage,
    tool_calls,
    files,
    interrupt,
    reasoning,
    turn_step_index,
    is_final_step,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
