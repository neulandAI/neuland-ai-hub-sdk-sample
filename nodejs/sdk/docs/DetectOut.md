# DetectOut

What the add dialog pre-selects: the auth the server asks for and the client registrations it accepts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_mode** | **string** |  | [default to undefined]
**oauth_client_mode** | **string** |  | [default to undefined]
**supports_cimd** | **boolean** |  | [optional] [default to false]
**supports_dcr** | **boolean** |  | [optional] [default to false]
**message** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { DetectOut } from '@neulandai/neuland-hub-sdk';

const instance: DetectOut = {
    auth_mode,
    oauth_client_mode,
    supports_cimd,
    supports_dcr,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
