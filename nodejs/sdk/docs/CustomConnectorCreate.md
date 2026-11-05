# CustomConnectorCreate

Either `url` (with optional `name`/`headers` and auth settings), or `config` — a pasted `mcpServers` JSON blob of fixed-header servers. Never both.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**url** | **string** |  | [optional] [default to undefined]
**headers** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**config** | **string** |  | [optional] [default to undefined]
**auth_mode** | **string** |  | [optional] [default to AuthModeEnum_none]
**oauth_client_mode** | **string** |  | [optional] [default to undefined]
**oauth_client_id** | **string** |  | [optional] [default to undefined]
**oauth_client_secret** | **string** |  | [optional] [default to undefined]
**organization** | **boolean** | Add for the organisation instead of yourself (needs &#x60;MANAGE_CONNECTORS&#x60; and &#x60;MANAGE_CONNECTOR_ACCESS&#x60;). | [optional] [default to false]
**all_users** | **boolean** |  | [optional] [default to false]
**role_ids** | **Array&lt;string&gt;** | Roles to grant an organisation MCP to (also needs &#x60;MANAGE_ROLES&#x60;); further roles and single users can be given it later in the role editor and the user access settings. | [optional] [default to undefined]

## Example

```typescript
import { CustomConnectorCreate } from '@neulandai/neuland-hub-sdk';

const instance: CustomConnectorCreate = {
    name,
    url,
    headers,
    config,
    auth_mode,
    oauth_client_mode,
    oauth_client_id,
    oauth_client_secret,
    organization,
    all_users,
    role_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
