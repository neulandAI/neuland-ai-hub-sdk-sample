# ApiKeyApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiCreateKey**](#apicreatekey) | **POST** /api/key/ | Create Key|
|[**apiRevokeApiKey**](#apirevokeapikey) | **PATCH** /api/key/revoke/{api_key_id} | Revoke Api Key|

# **apiCreateKey**
> ApiKeyCreateResponse apiCreateKey()

create key endpoint

### Example

```typescript
import {
    ApiKeyApi,
    Configuration,
    ApiKeyCreateRequest
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ApiKeyApi(configuration);

let cookieName: string; // (optional) (default to undefined)
let apiKeyCreateRequest: ApiKeyCreateRequest; // (optional)

const { status, data } = await apiInstance.apiCreateKey(
    cookieName,
    apiKeyCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKeyCreateRequest** | **ApiKeyCreateRequest**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiKeyCreateResponse**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiRevokeApiKey**
> ApiKey apiRevokeApiKey()

Update an existing apikey\'s active status

### Example

```typescript
import {
    ApiKeyApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ApiKeyApi(configuration);

let apiKeyId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiRevokeApiKey(
    apiKeyId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKeyId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiKey**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

