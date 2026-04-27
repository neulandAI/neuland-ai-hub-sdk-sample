# TemplateApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**templatesCreate**](#templatescreate) | **POST** /templates/ | Create|
|[**templatesDelete**](#templatesdelete) | **DELETE** /templates/{template_id} | Delete|
|[**templatesUpdate**](#templatesupdate) | **PATCH** /templates/{template_id} | Update|

# **templatesCreate**
> TemplateOut templatesCreate(templateIn)


### Example

```typescript
import {
    TemplateApi,
    Configuration,
    TemplateIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new TemplateApi(configuration);

let templateIn: TemplateIn; //
let tenantId: number; // (optional) (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.templatesCreate(
    templateIn,
    tenantId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **templateIn** | **TemplateIn**|  | |
| **tenantId** | [**number**] |  | (optional) defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**TemplateOut**

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

# **templatesDelete**
> templatesDelete()


### Example

```typescript
import {
    TemplateApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new TemplateApi(configuration);

let templateId: number; // (default to undefined)
let tenantId: number; // (optional) (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.templatesDelete(
    templateId,
    tenantId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **templateId** | [**number**] |  | defaults to undefined|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|
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

# **templatesUpdate**
> TemplateOut templatesUpdate(templateIn)


### Example

```typescript
import {
    TemplateApi,
    Configuration,
    TemplateIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new TemplateApi(configuration);

let templateId: number; // (default to undefined)
let templateIn: TemplateIn; //
let tenantId: number; // (optional) (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.templatesUpdate(
    templateId,
    templateIn,
    tenantId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **templateIn** | **TemplateIn**|  | |
| **templateId** | [**number**] |  | defaults to undefined|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**TemplateOut**

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

