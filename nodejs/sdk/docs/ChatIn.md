# ChatIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**temperature** | **number** |  | [optional] [default to undefined]
**reasoning_effort** | [**ReasoningEffortEnum**](ReasoningEffortEnum.md) |  | [optional] [default to undefined]
**similarity_top_k** | **number** |  | [optional] [default to undefined]
**system_prompt** | **string** |  | [optional] [default to undefined]
**model** | **string** |  | [optional] [default to undefined]
**_private** | **boolean** |  | [optional] [default to undefined]
**disabled_tool_names** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { ChatIn } from '@neulandai/neuland-hub-sdk';

const instance: ChatIn = {
    name,
    temperature,
    reasoning_effort,
    similarity_top_k,
    system_prompt,
    model,
    _private,
    disabled_tool_names,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
