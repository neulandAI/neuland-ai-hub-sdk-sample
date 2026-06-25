# UsageCostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**granularity** | **string** | Aggregation window; \&#39;custom\&#39; requires date_start and date_end. | [optional] [default to GranularityEnum_monthly]
**date_start** | **string** |  | [optional] [default to undefined]
**date_end** | **string** |  | [optional] [default to undefined]
**source** | **string** |  | [optional] [default to undefined]
**model** | **string** |  | [optional] [default to undefined]
**provider** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { UsageCostRequest } from 'neuland-hub-sdk';

const instance: UsageCostRequest = {
    granularity,
    date_start,
    date_end,
    source,
    model,
    provider,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
