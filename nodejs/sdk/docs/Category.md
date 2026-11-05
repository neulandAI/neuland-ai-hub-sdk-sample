# Category

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**categoriesListCategories**](#categorieslistcategories) | **GET** /categories/ | List categories|

# **categoriesListCategories**
> Array<CategoryOut> categoriesListCategories()

List the active category taxonomy, ordered by sort_order then name.

### Example

```typescript
import {
    Category,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Category(configuration);

let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.categoriesListCategories(
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<CategoryOut>**

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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

