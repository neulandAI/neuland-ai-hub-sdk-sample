# Settings

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**settingsCurrent**](#settingscurrent) | **GET** /settings/current | Get current tenant settings|
|[**settingsUpdateCurrentSettings**](#settingsupdatecurrentsettings) | **PATCH** /settings/current | Update current tenant settings|
|[**settingsUpdateSettings**](#settingsupdatesettings) | **PATCH** /settings/{settings_id} | Update settings by id|

# **settingsCurrent**
> Settings settingsCurrent()

Get the settings for the current user\'s tenant, creating defaults if absent.

### Example

```typescript
import {
    Settings,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Settings(configuration);

let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.settingsCurrent(
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Settings**

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

# **settingsUpdateCurrentSettings**
> Settings settingsUpdateCurrentSettings(settingsIn)

Update the settings for the current user\'s tenant (tenant admin only).

### Example

```typescript
import {
    Settings,
    Configuration,
    SettingsIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Settings(configuration);

let settingsIn: SettingsIn; //
let cookieName: string; // (optional) (default to undefined)
let tenantId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.settingsUpdateCurrentSettings(
    settingsIn,
    cookieName,
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingsIn** | **SettingsIn**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**Settings**

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
|**403** | Tenant admin privileges required. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **settingsUpdateSettings**
> Settings settingsUpdateSettings(settingsIn)

Update a tenant\'s settings by id (tenant admin; some fields superadmin-only).

### Example

```typescript
import {
    Settings,
    Configuration,
    SettingsIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Settings(configuration);

let settingsId: number; //ID of the settings record to update. (default to undefined)
let settingsIn: SettingsIn; //
let cookieName: string; // (optional) (default to undefined)
let tenantId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.settingsUpdateSettings(
    settingsId,
    settingsIn,
    cookieName,
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingsIn** | **SettingsIn**|  | |
| **settingsId** | [**number**] | ID of the settings record to update. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**Settings**

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
|**403** | Tenant admin privileges required, or superadmin required to change protected fields. |  -  |
|**404** | No settings record exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

