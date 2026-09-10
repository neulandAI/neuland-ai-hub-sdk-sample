# DateWindowRequest

A [date_start, date_end] window shared by the analytics endpoints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_start** | **string** | Inclusive start of the window. | [default to undefined]
**date_end** | **string** | Inclusive end of the window. | [default to undefined]

## Example

```typescript
import { DateWindowRequest } from 'neuland-hub-sdk';

const instance: DateWindowRequest = {
    date_start,
    date_end,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
