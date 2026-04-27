# TokenTimeseriesPerModel

\"Represents token usage timeseries for a specific LLM model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**llm_model** | **string** |  | [default to undefined]
**timeseries** | **{ [key: string]: Array&lt;TokenTimeseriesPoint&gt;; }** |  | [default to undefined]

## Example

```typescript
import { TokenTimeseriesPerModel } from 'neuland-hub-sdk';

const instance: TokenTimeseriesPerModel = {
    llm_model,
    timeseries,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
