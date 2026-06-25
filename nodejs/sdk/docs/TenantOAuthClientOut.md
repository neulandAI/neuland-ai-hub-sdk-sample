# TenantOAuthClientOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenant_id** | **number** |  | [default to undefined]
**oauth_client_id** | **number** |  | [default to undefined]
**provider_key** | [**OAuth2ProviderEnum**](OAuth2ProviderEnum.md) |  | [default to undefined]
**client_id** | **string** |  | [default to undefined]
**authorize_url** | **string** |  | [default to undefined]
**token_url** | **string** |  | [default to undefined]
**revocation_url** | **string** |  | [optional] [default to undefined]
**redirect_uri** | **string** |  | [optional] [default to undefined]
**admin_consent_url** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { TenantOAuthClientOut } from 'neuland-hub-sdk';

const instance: TenantOAuthClientOut = {
    tenant_id,
    oauth_client_id,
    provider_key,
    client_id,
    authorize_url,
    token_url,
    revocation_url,
    redirect_uri,
    admin_consent_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
