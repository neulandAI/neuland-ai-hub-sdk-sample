# TenantOAuthClientIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **string** |  | [default to undefined]
**authorize_url** | **string** |  | [default to undefined]
**token_url** | **string** |  | [default to undefined]
**revocation_url** | **string** |  | [optional] [default to undefined]
**redirect_uri** | **string** |  | [optional] [default to undefined]
**admin_consent_url** | **string** |  | [optional] [default to undefined]
**secret** | **string** |  | [default to undefined]

## Example

```typescript
import { TenantOAuthClientIn } from 'neuland-hub-sdk';

const instance: TenantOAuthClientIn = {
    client_id,
    authorize_url,
    token_url,
    revocation_url,
    redirect_uri,
    admin_consent_url,
    secret,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
