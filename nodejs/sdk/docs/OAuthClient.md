# OAuthClient


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **string** |  | [optional] [default to undefined]
**updated_at** | **string** |  | [optional] [default to undefined]
**creator_user_id** | **number** |  | [optional] [default to undefined]
**updater_user_id** | **number** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**name** | **string** |  | [default to undefined]
**provider_key** | [**OAuth2ProviderEnum**](OAuth2ProviderEnum.md) |  | [default to undefined]
**client_id** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**icon_url** | **string** |  | [optional] [default to undefined]
**authorize_url** | **string** |  | [default to undefined]
**admin_consent_url** | **string** |  | [optional] [default to undefined]
**token_url** | **string** |  | [default to undefined]
**logout_url** | **string** |  | [optional] [default to undefined]
**redirect_uri** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { OAuthClient } from 'neuland-hub-sdk';

const instance: OAuthClient = {
    created_at,
    updated_at,
    creator_user_id,
    updater_user_id,
    id,
    name,
    provider_key,
    client_id,
    description,
    icon_url,
    authorize_url,
    admin_consent_url,
    token_url,
    logout_url,
    redirect_uri,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
