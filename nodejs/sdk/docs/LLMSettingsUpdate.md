# LLMSettingsUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**llm_catalog_id** | **string** |  | [optional] [default to undefined]
**provider** | **string** |  | [optional] [default to undefined]
**library** | **string** |  | [optional] [default to undefined]
**max_tokens** | **number** |  | [optional] [default to undefined]
**cost_prompt_tokens** | [**CostPromptTokens1**](CostPromptTokens1.md) |  | [optional] [default to undefined]
**cost_completion_tokens** | [**CostCompletionTokens1**](CostCompletionTokens1.md) |  | [optional] [default to undefined]
**cost_cached_tokens** | [**CostCachedTokens**](CostCachedTokens.md) |  | [optional] [default to undefined]
**cost_audio_per_minute** | [**CostAudioPerMinute**](CostAudioPerMinute.md) |  | [optional] [default to undefined]
**region** | **string** |  | [optional] [default to undefined]
**args** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**openai_resource** | **string** |  | [optional] [default to undefined]
**api_version** | **string** |  | [optional] [default to undefined]
**deployment_name** | **string** |  | [optional] [default to undefined]
**endpoint** | **string** |  | [optional] [default to undefined]
**api_key** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { LLMSettingsUpdate } from 'neuland-hub-sdk';

const instance: LLMSettingsUpdate = {
    llm_catalog_id,
    provider,
    library,
    max_tokens,
    cost_prompt_tokens,
    cost_completion_tokens,
    cost_cached_tokens,
    cost_audio_per_minute,
    region,
    args,
    openai_resource,
    api_version,
    deployment_name,
    endpoint,
    api_key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
