# AssistantIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Display name of the assistant. | [default to undefined]
**model** | **string** |  | [optional] [default to undefined]
**avatar** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**description_show_in_chat** | **boolean** | Whether to show the description inside the chat UI. | [optional] [default to false]
**predefined_prompts** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**instructions** | **string** |  | [optional] [default to undefined]
**temperature** | **number** |  | [optional] [default to undefined]
**similarity_top_k** | **number** |  | [optional] [default to undefined]
**input_type** | [**AssistantInputTypeEnum**](AssistantInputTypeEnum.md) | Input mode: free-text prompt or structured form. | [optional] [default to undefined]
**form_fields** | [**Array&lt;FormField&gt;**](FormField.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AssistantIn } from 'neuland-hub-sdk';

const instance: AssistantIn = {
    name,
    model,
    avatar,
    description,
    description_show_in_chat,
    predefined_prompts,
    instructions,
    temperature,
    similarity_top_k,
    input_type,
    form_fields,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
