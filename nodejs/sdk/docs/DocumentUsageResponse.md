# DocumentUsageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_date** | **string** | Start of the window. | [default to undefined]
**end_date** | **string** | End of the window. | [default to undefined]
**bucket** | **string** |  | [default to undefined]
**group_by** | **Array&lt;string&gt;** | Dimensions the rows are grouped by. | [default to undefined]
**totals** | [**DocumentMetrics**](DocumentMetrics.md) | Window totals, counted once. | [default to undefined]
**rows** | [**Array&lt;DocumentUsageRow&gt;**](DocumentUsageRow.md) | One entry per group. | [default to undefined]
**truncated** | **boolean** | True when more rows matched than were returned. | [optional] [default to false]

## Example

```typescript
import { DocumentUsageResponse } from '@neulandai/neuland-hub-sdk';

const instance: DocumentUsageResponse = {
    start_date,
    end_date,
    bucket,
    group_by,
    totals,
    rows,
    truncated,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
