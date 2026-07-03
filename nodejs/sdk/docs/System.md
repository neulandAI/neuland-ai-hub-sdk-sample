# System

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**systemReadSystemSettings**](#systemreadsystemsettings) | **GET** /system/settings | Read system settings|
|[**systemUpdateSystemSettings**](#systemupdatesystemsettings) | **PATCH** /system/settings | Update system settings|

# **systemReadSystemSettings**
> SystemSettings systemReadSystemSettings()

Return the current platform-wide system settings.

### Example

```typescript
import {
    System,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new System(configuration);

let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.systemReadSystemSettings(
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SystemSettings**

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
|**403** | Superadmin privileges required. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **systemUpdateSystemSettings**
> SystemSettings systemUpdateSystemSettings(systemSettingsUpdate)

Apply the provided system settings changes and record an audit entry.

### Example

```typescript
import {
    System,
    Configuration,
    SystemSettingsUpdate
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new System(configuration);

let systemSettingsUpdate: SystemSettingsUpdate; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.systemUpdateSystemSettings(
    systemSettingsUpdate,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **systemSettingsUpdate** | **SystemSettingsUpdate**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SystemSettings**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | No changes were provided. |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Superadmin privileges required. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

