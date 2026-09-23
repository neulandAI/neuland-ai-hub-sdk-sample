# UtilizationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_start** | **string** | Inclusive start of the window. | [default to undefined]
**date_end** | **string** | Inclusive end of the window. | [default to undefined]
**idle_days** | **number** | An assistant is idle after this many days without a chat. | [optional] [default to 30]

## Example

```typescript
import { UtilizationRequest } from 'neuland-hub-sdk';

const instance: UtilizationRequest = {
    date_start,
    date_end,
    idle_days,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
