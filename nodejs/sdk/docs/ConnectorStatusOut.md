# ConnectorStatusOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connector_id** | **number** | Unique identifier of the connector. | [default to undefined]
**name** | **string** | Human-readable connector name. | [default to undefined]
**connected** | **boolean** | Whether the current user has a valid consent for this connector. | [default to undefined]
**needs_consent** | **boolean** | Whether the user must (re)grant consent to use this connector. | [default to undefined]
**missing_caps** | **Array&lt;string | null&gt;** | Capabilities not yet covered by the user\&#39;s consent. | [default to undefined]

## Example

```typescript
import { ConnectorStatusOut } from 'neuland-hub-sdk';

const instance: ConnectorStatusOut = {
    connector_id,
    name,
    connected,
    needs_consent,
    missing_caps,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
