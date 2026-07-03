# ApiKey

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiCreateKey**](#apicreatekey) | **POST** /api/key/ | Create an API key|
|[**apiRevokeApiKey**](#apirevokeapikey) | **PATCH** /api/key/revoke/{api_key_id} | Revoke an API key|

# **apiCreateKey**
> ApiKeyCreateResponse apiCreateKey()

Create an API key for the current user; the secret is returned only once.

### Example

```typescript
import {
    ApiKey,
    Configuration,
    ApiKeyCreateRequest
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ApiKey(configuration);

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

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiRevokeApiKey**
> ApiKey apiRevokeApiKey()

Deactivate an API key so it can no longer authenticate requests.

### Example

```typescript
import {
    ApiKey,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ApiKey(configuration);

let apiKeyId: number; //ID of the API key to revoke. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiRevokeApiKey(
    apiKeyId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKeyId** | [**number**] | ID of the API key to revoke. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiKey**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**404** | No API key exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

