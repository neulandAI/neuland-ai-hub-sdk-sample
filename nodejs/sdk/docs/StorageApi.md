# StorageApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**storageDownloadFile**](#storagedownloadfile) | **GET** /storage/{path} | Download File|

# **storageDownloadFile**
> any storageDownloadFile()


### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let path: string; //File path (default to undefined)
let token: string; //Download token (default to undefined)

const { status, data } = await apiInstance.storageDownloadFile(
    path,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **path** | [**string**] | File path | defaults to undefined|
| **token** | [**string**] | Download token | defaults to undefined|


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

