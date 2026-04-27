# PromptApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**promptsCreatePrompt**](#promptscreateprompt) | **POST** /prompts/ | Create Prompt|
|[**promptsDeletePrompt**](#promptsdeleteprompt) | **DELETE** /prompts/{prompt_id} | Delete Prompt|
|[**promptsUpdatePrompt**](#promptsupdateprompt) | **PATCH** /prompts/{prompt_id} | Update Prompt|

# **promptsCreatePrompt**
> Prompt promptsCreatePrompt(promptIn)


### Example

```typescript
import {
    PromptApi,
    Configuration,
    PromptIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new PromptApi(configuration);

let promptIn: PromptIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.promptsCreatePrompt(
    promptIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **promptIn** | **PromptIn**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Prompt**

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

# **promptsDeletePrompt**
> promptsDeletePrompt()


### Example

```typescript
import {
    PromptApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new PromptApi(configuration);

let promptId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.promptsDeletePrompt(
    promptId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **promptId** | [**number**] |  | defaults to undefined|
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

# **promptsUpdatePrompt**
> Prompt promptsUpdatePrompt(promptIn)


### Example

```typescript
import {
    PromptApi,
    Configuration,
    PromptIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new PromptApi(configuration);

let promptId: number; // (default to undefined)
let promptIn: PromptIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.promptsUpdatePrompt(
    promptId,
    promptIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **promptIn** | **PromptIn**|  | |
| **promptId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Prompt**

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

