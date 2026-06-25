# ToolCallOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | ID of the tool call. | [default to undefined]
**call_id** | **string** | Provider-assigned identifier for the tool call. | [default to undefined]
**tool_name** | **string** | Name of the invoked tool. | [default to undefined]
**call_group** | **number** | Group index for tool calls issued together. | [default to undefined]
**call_index** | **number** | Order of the call within its group. | [default to undefined]
**state** | **string** |  | [default to undefined]
**is_error** | **boolean** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**progress_steps** | [**Array&lt;ToolCallProgressStepOut&gt;**](ToolCallProgressStepOut.md) | Ordered progress steps emitted during the call. | [default to undefined]

## Example

```typescript
import { ToolCallOut } from 'neuland-hub-sdk';

const instance: ToolCallOut = {
    id,
    call_id,
    tool_name,
    call_group,
    call_index,
    state,
    is_error,
    description,
    progress_steps,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
