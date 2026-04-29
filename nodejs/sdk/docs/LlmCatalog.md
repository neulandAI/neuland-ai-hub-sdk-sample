# LlmCatalog

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**llmCreateCatalog**](#llmcreatecatalog) | **POST** /llm/catalog | Create Catalog|
|[**llmDeleteCatalog**](#llmdeletecatalog) | **DELETE** /llm/catalog/{catalog_id} | Delete Catalog|
|[**llmUpdateCatalog**](#llmupdatecatalog) | **PATCH** /llm/catalog/{catalog_id} | Update Catalog|

# **llmCreateCatalog**
> any llmCreateCatalog(catalogIn)


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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llmDeleteCatalog**
> llmDeleteCatalog()


### Example

```typescript
import {
    LlmCatalog,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new LlmCatalog(configuration);

let catalogId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.llmDeleteCatalog(
    catalogId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **catalogId** | [**number**] |  | defaults to undefined|
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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llmUpdateCatalog**
> any llmUpdateCatalog(catalogUpdate)


### Example

```typescript
import {
    LlmCatalog,
    Configuration,
    CatalogUpdate
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new LlmCatalog(configuration);

let catalogId: number; // (default to undefined)
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
| **catalogId** | [**number**] |  | defaults to undefined|
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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

