# LLMSettingsUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**llm_catalog_id** | **string** |  | [optional] [default to undefined]
**provider** | **string** |  | [optional] [default to undefined]
**library** | **string** |  | [optional] [default to undefined]
**max_tokens** | **number** |  | [optional] [default to undefined]
**reasoning_effort** | [**ReasoningEffortEnum**](ReasoningEffortEnum.md) |  | [optional] [default to undefined]
**cost_prompt_tokens** | [**CostPromptTokens1**](CostPromptTokens1.md) |  | [optional] [default to undefined]
**cost_completion_tokens** | [**CostCompletionTokens1**](CostCompletionTokens1.md) |  | [optional] [default to undefined]
**cost_cached_tokens** | [**CostCachedTokens**](CostCachedTokens.md) |  | [optional] [default to undefined]
**cost_cache_creation_tokens** | [**CostCacheCreationTokens**](CostCacheCreationTokens.md) |  | [optional] [default to undefined]
**tier_threshold_tokens** | **number** |  | [optional] [default to undefined]
**cost_prompt_tokens_above_tier** | [**CostPromptTokensAboveTier**](CostPromptTokensAboveTier.md) |  | [optional] [default to undefined]
**cost_completion_tokens_above_tier** | [**CostCompletionTokensAboveTier**](CostCompletionTokensAboveTier.md) |  | [optional] [default to undefined]
**cost_cached_tokens_above_tier** | [**CostCachedTokensAboveTier**](CostCachedTokensAboveTier.md) |  | [optional] [default to undefined]
**cost_cache_creation_tokens_above_tier** | [**CostCacheCreationTokensAboveTier**](CostCacheCreationTokensAboveTier.md) |  | [optional] [default to undefined]
**cost_audio_per_minute** | [**CostAudioPerMinute**](CostAudioPerMinute.md) |  | [optional] [default to undefined]
**active** | **boolean** |  | [optional] [default to undefined]
**last_seen_at** | **string** |  | [optional] [default to undefined]
**region** | **string** |  | [optional] [default to undefined]
**args** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**openai_resource** | **string** |  | [optional] [default to undefined]
**api_version** | **string** |  | [optional] [default to undefined]
**deployment_name** | **string** |  | [optional] [default to undefined]
**hosted_on** | **string** |  | [optional] [default to undefined]
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
    reasoning_effort,
    cost_prompt_tokens,
    cost_completion_tokens,
    cost_cached_tokens,
    cost_cache_creation_tokens,
    tier_threshold_tokens,
    cost_prompt_tokens_above_tier,
    cost_completion_tokens_above_tier,
    cost_cached_tokens_above_tier,
    cost_cache_creation_tokens_above_tier,
    cost_audio_per_minute,
    active,
    last_seen_at,
    region,
    args,
    openai_resource,
    api_version,
    deployment_name,
    hosted_on,
    endpoint,
    api_key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
