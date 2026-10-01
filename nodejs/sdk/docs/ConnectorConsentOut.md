# ConnectorConsentOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_url** | **string** | URL to redirect the user to for granting consent. | [default to undefined]
**connector** | [**ConnectorOut**](ConnectorOut.md) | Details of the connector consent is being requested for. | [default to undefined]

## Example

```typescript
import { ConnectorConsentOut } from '@neulandai/neuland-hub-sdk';

const instance: ConnectorConsentOut = {
    consent_url,
    connector,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
