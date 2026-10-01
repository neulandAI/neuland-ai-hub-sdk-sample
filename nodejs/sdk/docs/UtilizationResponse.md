# UtilizationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_date** | **string** |  | [default to undefined]
**end_date** | **string** |  | [default to undefined]
**idle_days** | **number** |  | [default to undefined]
**idle_assistants** | [**Array&lt;IdleAssistant&gt;**](IdleAssistant.md) |  | [default to undefined]
**license_utilization** | [**LicenseUtilization**](LicenseUtilization.md) |  | [default to undefined]

## Example

```typescript
import { UtilizationResponse } from '@neulandai/neuland-hub-sdk';

const instance: UtilizationResponse = {
    start_date,
    end_date,
    idle_days,
    idle_assistants,
    license_utilization,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
