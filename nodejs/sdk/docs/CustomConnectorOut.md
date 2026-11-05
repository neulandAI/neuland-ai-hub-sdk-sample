# CustomConnectorOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Internal id, as the role grant lists key it. | [default to undefined]
**public_id** | **string** |  | [default to undefined]
**connector_id** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**url** | **string** |  | [default to undefined]
**enabled** | **boolean** | Switched on for, and usable by, the caller. | [default to undefined]
**header_names** | **Array&lt;string&gt;** |  | [default to undefined]
**owner** | **string** |  | [default to undefined]
**auth_mode** | **string** |  | [default to undefined]
**signed_in** | **boolean** | The caller has a stored sign-in. | [default to undefined]
**usable** | **boolean** | The caller may use it in chat; false for an organisation MCP an admin manages but is outside the audience of. | [default to undefined]
**can_manage** | **boolean** |  | [default to undefined]

## Example

```typescript
import { CustomConnectorOut } from '@neulandai/neuland-hub-sdk';

const instance: CustomConnectorOut = {
    id,
    public_id,
    connector_id,
    name,
    url,
    enabled,
    header_names,
    owner,
    auth_mode,
    signed_in,
    usable,
    can_manage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
