# TokenTimeseriesPoint

Represents a single point in the token timeseries data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | Date of the data point (YYYY-MM-DD). | [default to undefined]
**value** | **number** | Token count for this date. | [default to undefined]

## Example

```typescript
import { TokenTimeseriesPoint } from 'neuland-hub-sdk';

const instance: TokenTimeseriesPoint = {
    date,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
