# ConnectorStatusOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connector_id** | **number** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**connected** | **boolean** |  | [default to undefined]
**needs_consent** | **boolean** |  | [default to undefined]
**missing_caps** | **Array&lt;string&gt;** |  | [default to undefined]

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
