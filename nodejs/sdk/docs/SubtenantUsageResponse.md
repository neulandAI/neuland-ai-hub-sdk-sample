# SubtenantUsageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_date** | **string** |  | [default to undefined]
**end_date** | **string** |  | [default to undefined]
**totals** | [**UsageMetrics**](UsageMetrics.md) | Combined totals across the subtree. | [default to undefined]
**rows** | [**Array&lt;SubtenantUsageRow&gt;**](SubtenantUsageRow.md) | One row per tenant (self + direct children). | [default to undefined]

## Example

```typescript
import { SubtenantUsageResponse } from '@neulandai/neuland-hub-sdk';

const instance: SubtenantUsageResponse = {
    start_date,
    end_date,
    totals,
    rows,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
