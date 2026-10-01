# AssistantTool


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **string** | UTC timestamp when the record was created. | [optional] [default to undefined]
**updated_at** | **string** | UTC timestamp when the record was last updated. | [optional] [default to undefined]
**assistant_id** | **number** | ID of the assistant the tool is attached to. | [default to undefined]
**tool_id** | **number** | ID of the tool attached to the assistant. | [default to undefined]

## Example

```typescript
import { AssistantTool } from '@neulandai/neuland-hub-sdk';

const instance: AssistantTool = {
    created_at,
    updated_at,
    assistant_id,
    tool_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
