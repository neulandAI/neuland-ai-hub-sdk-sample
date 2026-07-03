# CredentialTemplateOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connector_id** | **number** | Unique identifier of the connector. | [default to undefined]
**name** | **string** | Human-readable connector name. | [default to undefined]
**auth_type** | [**ConnectorAuthType**](ConnectorAuthType.md) | Authentication mechanism the connector uses. | [default to undefined]
**is_admin** | **boolean** | Whether the caller is allowed to edit the admin credential part. | [default to undefined]
**admin** | [**CredentialPartOut**](CredentialPartOut.md) |  | [optional] [default to undefined]
**user** | [**CredentialPartOut**](CredentialPartOut.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CredentialTemplateOut } from 'neuland-hub-sdk';

const instance: CredentialTemplateOut = {
    connector_id,
    name,
    auth_type,
    is_admin,
    admin,
    user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
