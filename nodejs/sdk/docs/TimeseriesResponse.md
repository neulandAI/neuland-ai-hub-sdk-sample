# TimeseriesResponse

Timeseries response model for LLM costs. Contains total cost for the current month and timeseries data for each model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_cost** | **number** | Total LLM cost for the current month across all models. | [default to undefined]
**timeseries** | **{ [key: string]: Array&lt;TimeseriesPoint&gt;; }** | Cost timeseries keyed by model name. | [default to undefined]

## Example

```typescript
import { TimeseriesResponse } from 'neuland-hub-sdk';

const instance: TimeseriesResponse = {
    total_cost,
    timeseries,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
