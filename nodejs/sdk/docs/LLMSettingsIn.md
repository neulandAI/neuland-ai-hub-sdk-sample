# LLMSettingsIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**llm_catalog_id** | **string** | Public id of the catalog model these settings configure. | [default to undefined]
**provider** | **string** | Provider backing the model. | [default to undefined]
**library** | **string** | Client library used to call the provider. | [default to undefined]
**max_tokens** | **number** | Maximum tokens allowed per request for this model. | [default to undefined]
**cost_prompt_tokens** | [**CostPromptTokens**](CostPromptTokens.md) |  | [default to undefined]
**cost_completion_tokens** | [**CostCompletionTokens**](CostCompletionTokens.md) |  | [default to undefined]
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
import { LLMSettingsIn } from 'neuland-hub-sdk';

const instance: LLMSettingsIn = {
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
