# UsageQueryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_date** | **string** | Start of the window. | [default to undefined]
**end_date** | **string** | End of the window. | [default to undefined]
**bucket** | **string** |  | [default to undefined]
**group_by** | **Array&lt;string&gt;** | Dimensions the rows are grouped by. | [default to undefined]
**totals** | [**UsageMetrics**](UsageMetrics.md) | Window totals, counted once per record (no group fan-out). | [default to undefined]
**rows** | [**Array&lt;UsageRow&gt;**](UsageRow.md) | One entry per group (and time bucket). | [default to undefined]
**truncated** | **boolean** | True when more rows matched than were returned (capped at MAX_USAGE_ROWS) — narrow the window or dimensions for a complete set. | [optional] [default to false]

## Example

```typescript
import { UsageQueryResponse } from '@neulandai/neuland-hub-sdk';

const instance: UsageQueryResponse = {
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
