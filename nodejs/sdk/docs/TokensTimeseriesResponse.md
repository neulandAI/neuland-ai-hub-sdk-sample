# TokensTimeseriesResponse

Response model for LLM tokens with timeseries data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_prompt_tokens** | **number** | Total prompt tokens across all models for the current month. | [default to undefined]
**total_completion_tokens** | **number** | Total completion tokens across all models for the current month. | [default to undefined]
**total_requests** | **number** | Total requests across all models for the current month. | [default to undefined]
**total_tokens** | **number** | Total tokens (prompt + completion) for the current month. | [default to undefined]
**tokens_per_model** | [**Array&lt;TokensPerModel&gt;**](TokensPerModel.md) | Current-month token summary for each model. | [default to undefined]
**timeseries_per_model** | [**Array&lt;TokenTimeseriesPerModel&gt;**](TokenTimeseriesPerModel.md) | Token usage timeseries for each model. | [default to undefined]

## Example

```typescript
import { TokensTimeseriesResponse } from '@neulandai/neuland-hub-sdk';

const instance: TokensTimeseriesResponse = {
    total_prompt_tokens,
    total_completion_tokens,
    total_requests,
    total_tokens,
    tokens_per_model,
    timeseries_per_model,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
