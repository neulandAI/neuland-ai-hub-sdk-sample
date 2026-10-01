# ConnectorOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Unique identifier of the connector. | [default to undefined]
**public_id** | **string** | Public, non-enumerable external identifier of the connector. | [default to undefined]
**name** | **string** | Human-readable connector name. | [default to undefined]
**provider** | **string** | OAuth provider key backing the connector. | [default to undefined]
**caps** | **Array&lt;string&gt;** | Capabilities the connector requests. | [default to undefined]
**scopes** | **Array&lt;string&gt;** | OAuth scopes requested from the provider. | [default to undefined]

## Example

```typescript
import { ConnectorOut } from '@neulandai/neuland-hub-sdk';

const instance: ConnectorOut = {
    id,
    public_id,
    name,
    provider,
    caps,
    scopes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
