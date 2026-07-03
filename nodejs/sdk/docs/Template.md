# Template

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**templatesCreate**](#templatescreate) | **POST** /templates/ | Create an email template|
|[**templatesDelete**](#templatesdelete) | **DELETE** /templates/{template_id} | Delete an email template|
|[**templatesUpdate**](#templatesupdate) | **PATCH** /templates/{template_id} | Update an email template|

# **templatesCreate**
> TemplateOut templatesCreate(templateIn)

Create a new email template for the current user\'s tenant.

### Example

```typescript
import {
    Template,
    Configuration,
    TemplateIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Template(configuration);

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

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Admin privileges required. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **templatesDelete**
> templatesDelete()

Delete an email template.

### Example

```typescript
import {
    Template,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Template(configuration);

let templateId: number; //ID of the template to delete. (default to undefined)
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
| **templateId** | [**number**] | ID of the template to delete. | defaults to undefined|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Admin privileges required. |  -  |
|**404** | No email template exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **templatesUpdate**
> TemplateOut templatesUpdate(templateIn)

Update an existing email template.

### Example

```typescript
import {
    Template,
    Configuration,
    TemplateIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Template(configuration);

let templateId: number; //ID of the template to update. (default to undefined)
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
| **templateId** | [**number**] | ID of the template to update. | defaults to undefined|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**TemplateOut**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Admin privileges required. |  -  |
|**404** | No email template exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

