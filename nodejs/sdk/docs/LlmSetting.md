# LlmSetting

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**llmCreateLlmSettings**](#llmcreatellmsettings) | **POST** /llm/settings | Create LLM settings|
|[**llmDeleteLlmSettings**](#llmdeletellmsettings) | **DELETE** /llm/settings/{settings_id} | Delete LLM settings|
|[**llmTestLlmConnection**](#llmtestllmconnection) | **POST** /llm/settings/test | Test an LLM connection|
|[**llmTestTranscriptionConnection**](#llmtesttranscriptionconnection) | **POST** /llm/settings/test/transcription | Test a transcription connection with an audio file|
|[**llmUpdateLlmSettings**](#llmupdatellmsettings) | **PATCH** /llm/settings/{settings_id} | Update LLM settings|

# **llmCreateLlmSettings**
> any llmCreateLlmSettings(lLMSettingsIn)

Create a provider-specific settings entry for a catalog model.

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
|**401** | Missing or invalid authentication. |  -  |
|**403** | Platform operator privileges required. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llmDeleteLlmSettings**
> llmDeleteLlmSettings()

Remove an LLM settings entry permanently.

### Example

```typescript
import {
    LlmSetting,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new LlmSetting(configuration);

let settingsId: string; //Public id of the LLM settings entry to delete. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.llmDeleteLlmSettings(
    settingsId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingsId** | [**string**] | Public id of the LLM settings entry to delete. | defaults to undefined|
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
|**404** | No LLM settings exist with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llmTestLlmConnection**
> LLMConnectionTestOut llmTestLlmConnection(lLMConnectionTestIn)

Verify a (possibly unsaved) chat or embedding config reaches its provider.  A lightweight probe stripped of tools, history, streaming and budget tracking: chat models get a one-word `achat` probe, embedding models a single embed. Each probe is bounded by the client\'s own timeout. A reachable-but-failing config returns `ok=false` with HTTP 200 so the caller can distinguish it from a server error.

### Example

```typescript
import {
    LlmSetting,
    Configuration,
    LLMConnectionTestIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new LlmSetting(configuration);

let lLMConnectionTestIn: LLMConnectionTestIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.llmTestLlmConnection(
    lLMConnectionTestIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lLMConnectionTestIn** | **LLMConnectionTestIn**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**LLMConnectionTestOut**

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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llmTestTranscriptionConnection**
> LLMConnectionTestOut llmTestTranscriptionConnection()

Verify a (possibly unsaved) transcription config by transcribing an upload.  Mirrors the real transcription route (`read_audio_file` + a real `transcribe` call), but builds the client from the submitted fields so a not-yet-saved model can be tested. `args` is an optional JSON string for provider extras (e.g. gateway `default_headers`). A reachable-but-failing config returns `ok=false` with HTTP 200.

### Example

```typescript
import {
    LlmSetting,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new LlmSetting(configuration);

let file: File; // (default to undefined)
let modelName: string; // (default to undefined)
let provider: string; // (default to undefined)
let library: string; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)
let apiKey: string; // (optional) (default to undefined)
let endpoint: string; // (optional) (default to undefined)
let deploymentName: string; // (optional) (default to undefined)
let apiVersion: string; // (optional) (default to undefined)
let args: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.llmTestTranscriptionConnection(
    file,
    modelName,
    provider,
    library,
    cookieName,
    apiKey,
    endpoint,
    deploymentName,
    apiVersion,
    args
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | defaults to undefined|
| **modelName** | [**string**] |  | defaults to undefined|
| **provider** | [**string**] |  | defaults to undefined|
| **library** | [**string**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|
| **apiKey** | [**string**] |  | (optional) defaults to undefined|
| **endpoint** | [**string**] |  | (optional) defaults to undefined|
| **deploymentName** | [**string**] |  | (optional) defaults to undefined|
| **apiVersion** | [**string**] |  | (optional) defaults to undefined|
| **args** | [**string**] |  | (optional) defaults to undefined|


### Return type

**LLMConnectionTestOut**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Platform operator privileges required. |  -  |
|**413** | Audio file exceeds the 25 MB limit. |  -  |
|**415** | Unsupported audio content type. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llmUpdateLlmSettings**
> any llmUpdateLlmSettings(lLMSettingsUpdate)

Update fields of an existing LLM settings entry.

### Example

```typescript
import {
    LlmSetting,
    Configuration,
    LLMSettingsUpdate
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new LlmSetting(configuration);

let settingsId: string; //Public id of the LLM settings entry to update. (default to undefined)
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
| **settingsId** | [**string**] | Public id of the LLM settings entry to update. | defaults to undefined|
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
|**404** | No LLM settings exist with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

