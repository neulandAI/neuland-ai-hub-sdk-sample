# LlmCatalog

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**llmCreateCatalog**](#llmcreatecatalog) | **POST** /llm/catalog | Create a catalog entry|
|[**llmDeleteCatalog**](#llmdeletecatalog) | **DELETE** /llm/catalog/{catalog_id} | Delete a catalog entry|
|[**llmUpdateCatalog**](#llmupdatecatalog) | **PATCH** /llm/catalog/{catalog_id} | Update a catalog entry|

# **llmCreateCatalog**
> any llmCreateCatalog(catalogIn)

Register a new LLM in the model catalog.

### Example

```typescript
import {
    LlmCatalog,
    Configuration,
    CatalogIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new LlmCatalog(configuration);

let catalogIn: CatalogIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.llmCreateCatalog(
    catalogIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **catalogIn** | **CatalogIn**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**any**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Platform operator privileges required. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llmDeleteCatalog**
> llmDeleteCatalog()

Remove a catalog entry permanently.

### Example

```typescript
import {
    LlmCatalog,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new LlmCatalog(configuration);

let catalogId: string; //Public id of the catalog entry to delete. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.llmDeleteCatalog(
    catalogId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **catalogId** | [**string**] | Public id of the catalog entry to delete. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Platform operator privileges required. |  -  |
|**404** | No catalog entry exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llmUpdateCatalog**
> any llmUpdateCatalog(catalogUpdate)

Update fields of an existing catalog entry.

### Example

```typescript
import {
    LlmCatalog,
    Configuration,
    CatalogUpdate
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new LlmCatalog(configuration);

let catalogId: string; //Public id of the catalog entry to update. (default to undefined)
let catalogUpdate: CatalogUpdate; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.llmUpdateCatalog(
    catalogId,
    catalogUpdate,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **catalogUpdate** | **CatalogUpdate**|  | |
| **catalogId** | [**string**] | Public id of the catalog entry to update. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**any**

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
|**404** | No catalog entry exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

