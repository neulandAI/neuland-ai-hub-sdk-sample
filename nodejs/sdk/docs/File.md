# File

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**filesDownloadFile**](#filesdownloadfile) | **GET** /files/{file_id} | Download a file|
|[**filesPresignedFileUrl**](#filespresignedfileurl) | **GET** /files/{file_id}/url | Get a short-lived direct download URL for a file|

# **filesDownloadFile**
> any filesDownloadFile()

Stream a stored file as an attachment to authorized callers.

### Example

```typescript
import {
    File,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new File(configuration);

let fileId: string; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.filesDownloadFile(
    fileId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**any**

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
|**403** | Caller may not access this file. |  -  |
|**404** | No file exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filesPresignedFileUrl**
> DirectFileUrl filesPresignedFileUrl()

Short-lived read-only URL for streaming media straight from storage.

### Example

```typescript
import {
    File,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new File(configuration);

let fileId: string; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.filesPresignedFileUrl(
    fileId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**DirectFileUrl**

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
|**403** | Caller may not access this file. |  -  |
|**404** | No file exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

