# TenantUpdateIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**domain** | **string** |  | [optional] [default to undefined]
**parent_tenant_id** | **string** |  | [optional] [default to undefined]
**subtenants_enabled** | **boolean** |  | [optional] [default to undefined]
**timezone** | **string** |  | [optional] [default to undefined]
**locale** | **string** |  | [optional] [default to undefined]
**tarif_id** | **string** |  | [optional] [default to undefined]
**tarif_expires_at** | **string** |  | [optional] [default to undefined]
**max_users** | **number** |  | [optional] [default to undefined]
**max_projects** | **number** |  | [optional] [default to undefined]
**licenses** | **number** |  | [optional] [default to undefined]
**display_name** | **string** |  | [optional] [default to undefined]
**motto** | **string** |  | [optional] [default to undefined]
**logo_url** | **string** |  | [optional] [default to undefined]
**square_logo_url** | **string** |  | [optional] [default to undefined]
**favicon_url** | **string** |  | [optional] [default to undefined]
**chat_square_logo_url** | **string** |  | [optional] [default to undefined]
**primary_color** | **string** |  | [optional] [default to undefined]
**secondary_color** | **string** |  | [optional] [default to undefined]
**theme** | **string** |  | [optional] [default to undefined]
**storage_limit_gb** | **number** |  | [optional] [default to undefined]
**api_rate_limit** | **number** |  | [optional] [default to undefined]
**upstream_tenant_id** | **string** |  | [optional] [default to undefined]
**upstream_oidc_issuer** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { TenantUpdateIn } from '@neulandai/neuland-hub-sdk';

const instance: TenantUpdateIn = {
    name,
    domain,
    parent_tenant_id,
    subtenants_enabled,
    timezone,
    locale,
    tarif_id,
    tarif_expires_at,
    max_users,
    max_projects,
    licenses,
    display_name,
    motto,
    logo_url,
    square_logo_url,
    favicon_url,
    chat_square_logo_url,
    primary_color,
    secondary_color,
    theme,
    storage_limit_gb,
    api_rate_limit,
    upstream_tenant_id,
    upstream_oidc_issuer,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
