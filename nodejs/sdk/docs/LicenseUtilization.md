# LicenseUtilization


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**licenses** | **number** |  | [default to undefined]
**active_users** | **number** | Active, non-deleting users. | [default to undefined]
**active_unused_users** | **number** | Active users with no LLM usage in the window. | [default to undefined]
**utilization_pct** | **number** |  | [default to undefined]

## Example

```typescript
import { LicenseUtilization } from '@neulandai/neuland-hub-sdk';

const instance: LicenseUtilization = {
    licenses,
    active_users,
    active_unused_users,
    utilization_pct,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
