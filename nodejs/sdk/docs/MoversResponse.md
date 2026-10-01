# MoversResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_date** | **string** |  | [default to undefined]
**end_date** | **string** |  | [default to undefined]
**previous_start** | **string** |  | [default to undefined]
**previous_end** | **string** |  | [default to undefined]
**most_expensive_model** | [**ModelDelta**](ModelDelta.md) |  | [default to undefined]
**biggest_increase** | [**ModelDelta**](ModelDelta.md) |  | [default to undefined]
**biggest_decrease** | [**ModelDelta**](ModelDelta.md) |  | [default to undefined]
**per_model** | [**Array&lt;ModelDelta&gt;**](ModelDelta.md) |  | [default to undefined]

## Example

```typescript
import { MoversResponse } from '@neulandai/neuland-hub-sdk';

const instance: MoversResponse = {
    start_date,
    end_date,
    previous_start,
    previous_end,
    most_expensive_model,
    biggest_increase,
    biggest_decrease,
    per_model,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
