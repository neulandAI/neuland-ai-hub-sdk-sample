# CostCacheCreationTokens

Cost per cache-write prompt token. Providers charge a premium over the prompt rate (Anthropic 1.25x for a 5-minute TTL). Unset falls back to cost_prompt_tokens, which under-charges every cached call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```typescript
import { CostCacheCreationTokens } from 'neuland-hub-sdk';

const instance: CostCacheCreationTokens = {
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
