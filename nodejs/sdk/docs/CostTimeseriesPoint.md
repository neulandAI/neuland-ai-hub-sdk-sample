# CostTimeseriesPoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | Date of the data point (YYYY-MM-DD). | [default to undefined]
**cost** | **number** | Cost incurred on this date. | [default to undefined]
**tokens** | **number** | Tokens consumed on this date. | [default to undefined]
**record_count** | **number** | Number of usage records on this date. | [default to undefined]

## Example

```typescript
import { CostTimeseriesPoint } from '@neulandai/neuland-hub-sdk';

const instance: CostTimeseriesPoint = {
    date,
    cost,
    tokens,
    record_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
