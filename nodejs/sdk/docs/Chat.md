# Chat


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
**project_id** | **number** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**busy** | **boolean** |  | [default to undefined]
**temperature** | **number** |  | [optional] [default to undefined]
**similarity_top_k** | **number** |  | [optional] [default to undefined]
**system_prompt** | **string** |  | [optional] [default to undefined]
**llm_catalog_id** | **number** |  | [optional] [default to undefined]
**llm_settings_id** | **number** |  | [optional] [default to undefined]
**assistant_id** | **number** |  | [optional] [default to undefined]
**_private** | **boolean** |  | [optional] [default to false]
**consumed_tokens** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { Chat } from 'neuland-hub-sdk';

const instance: Chat = {
    state,
    state_reason,
    state_changed_at,
    id,
    created_at,
    updated_at,
    creator_user_id,
    project_id,
    name,
    busy,
    temperature,
    similarity_top_k,
    system_prompt,
    llm_catalog_id,
    llm_settings_id,
    assistant_id,
    _private,
    consumed_tokens,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
