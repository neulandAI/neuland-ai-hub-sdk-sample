# TimeseriesPoint

Represents a single point in the timeseries data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | Date of the data point (YYYY-MM-DD). | [default to undefined]
**cost** | **number** | Cost incurred on this date. | [default to undefined]

## Example

```typescript
import { TimeseriesPoint } from 'neuland-hub-sdk';

const instance: TimeseriesPoint = {
    date,
    cost,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
