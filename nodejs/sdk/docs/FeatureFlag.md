# FeatureFlag

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**featureClearTenantFeatureFlag**](#featurecleartenantfeatureflag) | **DELETE** /feature/flags/tenants/{tenant_id}/{flag_key} | Clear a tenant\&#39;s feature-flag override|
|[**featureListTenantFeatureFlags**](#featurelisttenantfeatureflags) | **GET** /feature/flags/tenants/{tenant_id} | List effective feature flags for a tenant|
|[**featureSetTenantFeatureFlag**](#featuresettenantfeatureflag) | **PUT** /feature/flags/tenants/{tenant_id}/{flag_key} | Set a tenant\&#39;s feature-flag override|

# **featureClearTenantFeatureFlag**
> FeatureFlagOut featureClearTenantFeatureFlag()

Remove a tenant override so the flag reverts to its catalog default.

### Example

```typescript
import {
    FeatureFlag,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new FeatureFlag(configuration);

let tenantId: string; //Public id of the tenant. (default to undefined)
let flagKey: string; //Catalog key of the feature flag. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.featureClearTenantFeatureFlag(
    tenantId,
    flagKey,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] | Public id of the tenant. | defaults to undefined|
| **flagKey** | [**string**] | Catalog key of the feature flag. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**FeatureFlagOut**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Platform operator privileges required. |  -  |
|**404** | No such tenant, or unknown feature flag. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **featureListTenantFeatureFlags**
> Array<FeatureFlagOut> featureListTenantFeatureFlags()

Return every catalog flag with its effective value for the tenant.  Operator-only: MANAGE_FEATURE_FLAGS is a platform permission, so only the Operator role holds it.

### Example

```typescript
import {
    FeatureFlag,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new FeatureFlag(configuration);

let tenantId: string; //Public id of the tenant. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.featureListTenantFeatureFlags(
    tenantId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] | Public id of the tenant. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<FeatureFlagOut>**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Platform operator privileges required. |  -  |
|**404** | No such tenant, or unknown feature flag. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **featureSetTenantFeatureFlag**
> FeatureFlagOut featureSetTenantFeatureFlag(featureFlagSetIn)

Enable or disable a feature for a tenant (upserts the override row).

### Example

```typescript
import {
    FeatureFlag,
    Configuration,
    FeatureFlagSetIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new FeatureFlag(configuration);

let tenantId: string; //Public id of the tenant. (default to undefined)
let flagKey: string; //Catalog key of the feature flag. (default to undefined)
let featureFlagSetIn: FeatureFlagSetIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.featureSetTenantFeatureFlag(
    tenantId,
    flagKey,
    featureFlagSetIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **featureFlagSetIn** | **FeatureFlagSetIn**|  | |
| **tenantId** | [**string**] | Public id of the tenant. | defaults to undefined|
| **flagKey** | [**string**] | Catalog key of the feature flag. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**FeatureFlagOut**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Platform operator privileges required. |  -  |
|**404** | No such tenant, or unknown feature flag. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

