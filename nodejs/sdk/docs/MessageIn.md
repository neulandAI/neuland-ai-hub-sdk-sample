# MessageIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **string** |  | [optional] [default to undefined]
**chat_id** | **string** |  | [optional] [default to undefined]
**project_id** | **string** |  | [optional] [default to undefined]
**model** | **string** |  | [optional] [default to undefined]
**temperature** | **number** |  | [optional] [default to undefined]
**reasoning_effort** | [**ReasoningEffortEnum**](ReasoningEffortEnum.md) |  | [optional] [default to undefined]
**similarity_top_k** | **number** |  | [optional] [default to undefined]
**system_prompt** | **string** |  | [optional] [default to undefined]
**assistant_id** | **string** |  | [optional] [default to undefined]
**document_ids** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**disabled_tool_names** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**library_id** | **string** |  | [optional] [default to undefined]
**_private** | **boolean** |  | [optional] [default to undefined]
**form_data** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**form_fields** | **Array&lt;{ [key: string]: any; }&gt;** |  | [optional] [default to undefined]
**playground** | **boolean** | Backs the assistant editor\&#39;s preview pane and is not needed to send a message: it starts a sandbox chat in which the given system_prompt/temperature/similarity_top_k/model override the assistant\&#39;s live config without saving it. Requires assistant_id; only the assistant\&#39;s creator may use it. | [optional] [default to false]

## Example

```typescript
import { MessageIn } from '@neulandai/neuland-hub-sdk';

const instance: MessageIn = {
    content,
    chat_id,
    project_id,
    model,
    temperature,
    reasoning_effort,
    similarity_top_k,
    system_prompt,
    assistant_id,
    document_ids,
    disabled_tool_names,
    library_id,
    _private,
    form_data,
    form_fields,
    playground,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
