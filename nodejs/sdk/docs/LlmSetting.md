# LlmSetting

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**llmCreateLlmSettings**](#llmcreatellmsettings) | **POST** /llm/settings | Create Llm Settings|
|[**llmDeleteLlmSettings**](#llmdeletellmsettings) | **DELETE** /llm/settings/{settings_id} | Delete Llm Settings|
|[**llmUpdateLlmSettings**](#llmupdatellmsettings) | **PATCH** /llm/settings/{settings_id} | Update Llm Settings|

# **llmCreateLlmSettings**
> any llmCreateLlmSettings(lLMSettingsIn)


### Example

```typescript
import {
    LlmSetting,
    Configuration,
    LLMSettingsIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new LlmSetting(configuration);

let lLMSettingsIn: LLMSettingsIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.llmCreateLlmSettings(
    lLMSettingsIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lLMSettingsIn** | **LLMSettingsIn**|  | |
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

# **llmDeleteLlmSettings**
> llmDeleteLlmSettings()


### Example

```typescript
import {
    LlmSetting,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new LlmSetting(configuration);

let settingsId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.llmDeleteLlmSettings(
    settingsId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingsId** | [**number**] |  | defaults to undefined|
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

# **llmUpdateLlmSettings**
> any llmUpdateLlmSettings(lLMSettingsUpdate)


### Example

```typescript
import {
    LlmSetting,
    Configuration,
    LLMSettingsUpdate
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new LlmSetting(configuration);

let settingsId: number; // (default to undefined)
let lLMSettingsUpdate: LLMSettingsUpdate; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.llmUpdateLlmSettings(
    settingsId,
    lLMSettingsUpdate,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lLMSettingsUpdate** | **LLMSettingsUpdate**|  | |
| **settingsId** | [**number**] |  | defaults to undefined|
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

