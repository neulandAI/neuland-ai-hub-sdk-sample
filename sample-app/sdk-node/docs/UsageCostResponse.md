# UsageCostResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_date** | **string** |  | [default to undefined]
**end_date** | **string** |  | [default to undefined]
**total_cost** | **number** |  | [default to undefined]
**total_tokens** | **number** |  | [default to undefined]
**total_prompt_tokens** | **number** |  | [default to undefined]
**total_completion_tokens** | **number** |  | [default to undefined]
**total_cached_tokens** | **number** |  | [default to undefined]
**record_count** | **number** |  | [default to undefined]
**by_source** | [**Array&lt;CostBySource&gt;**](CostBySource.md) |  | [default to undefined]
**by_model** | [**Array&lt;CostByModel&gt;**](CostByModel.md) |  | [default to undefined]
**timeseries** | [**Array&lt;CostTimeseriesPoint&gt;**](CostTimeseriesPoint.md) |  | [default to undefined]

## Example

```typescript
import { UsageCostResponse } from 'neuland-hub-sdk';

const instance: UsageCostResponse = {
    start_date,
    end_date,
    total_cost,
    total_tokens,
    total_prompt_tokens,
    total_completion_tokens,
    total_cached_tokens,
    record_count,
    by_source,
    by_model,
    timeseries,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
