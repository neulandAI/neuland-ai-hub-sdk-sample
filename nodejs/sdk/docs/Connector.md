# Connector


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **string** | UTC timestamp when the record was created. | [optional] [default to undefined]
**updated_at** | **string** | UTC timestamp when the record was last updated. | [optional] [default to undefined]
**creator_user_id** | **number** |  | [optional] [default to undefined]
**updater_user_id** | **number** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**oauth_client_id** | **number** | ID of the OAuth client backing this connector. | [default to undefined]
**name** | **string** | Name of the connector. | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**scopes** | **Array&lt;string | null&gt;** | OAuth scopes requested by this connector. | [optional] [default to undefined]
**caps** | **Array&lt;string | null&gt;** | Capabilities provided by this connector. | [optional] [default to undefined]
**auto_attach** | **boolean** | Whether this connector is automatically attached to new resources. | [optional] [default to false]

## Example

```typescript
import { Connector } from 'neuland-hub-sdk';

const instance: Connector = {
    created_at,
    updated_at,
    creator_user_id,
    updater_user_id,
    id,
    oauth_client_id,
    name,
    description,
    scopes,
    caps,
    auto_attach,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
