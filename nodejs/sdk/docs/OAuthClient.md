# OAuthClient


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **string** | UTC timestamp when the record was created. | [optional] [default to undefined]
**updated_at** | **string** | UTC timestamp when the record was last updated. | [optional] [default to undefined]
**creator_user_id** | **number** |  | [optional] [default to undefined]
**updater_user_id** | **number** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**name** | **string** | Unique human-readable name of the OAuth client. | [default to undefined]
**provider_key** | [**OAuth2ProviderEnum**](OAuth2ProviderEnum.md) | OAuth provider this client uses. | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**icon_url** | **string** |  | [optional] [default to undefined]
**oidc_issuer** | **string** |  | [optional] [default to undefined]

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
    description,
    icon_url,
    oidc_issuer,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
