# Prompt

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**promptsCreatePrompt**](#promptscreateprompt) | **POST** /prompts/ | Create a prompt|
|[**promptsDeletePrompt**](#promptsdeleteprompt) | **DELETE** /prompts/{prompt_id} | Delete a prompt|
|[**promptsOptimizePrompt**](#promptsoptimizeprompt) | **POST** /prompts/optimize | Optimize a prompt|
|[**promptsUpdatePrompt**](#promptsupdateprompt) | **PATCH** /prompts/{prompt_id} | Update a prompt|

# **promptsCreatePrompt**
> Prompt promptsCreatePrompt(promptIn)

Create a saved prompt for the current user.

### Example

```typescript
import {
    Prompt,
    Configuration,
    PromptIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Prompt(configuration);

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

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Only admins may create public prompts. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **promptsDeletePrompt**
> promptsDeletePrompt()

Delete a prompt owned by the current user.

### Example

```typescript
import {
    Prompt,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Prompt(configuration);

let promptId: string; //Public id of the prompt to delete. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.promptsDeletePrompt(
    promptId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **promptId** | [**string**] | Public id of the prompt to delete. | defaults to undefined|
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
|**403** | Not the creator of this prompt. |  -  |
|**404** | No prompt exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **promptsOptimizePrompt**
> PromptOptimizeOut promptsOptimizePrompt(promptOptimizeIn)

Rewrite a draft prompt into a clearer, better-structured version using an LLM.

### Example

```typescript
import {
    Prompt,
    Configuration,
    PromptOptimizeIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Prompt(configuration);

let promptOptimizeIn: PromptOptimizeIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.promptsOptimizePrompt(
    promptOptimizeIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **promptOptimizeIn** | **PromptOptimizeIn**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PromptOptimizeOut**

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
|**403** | Usage budget exceeded. |  -  |
|**404** | Current user does not exist. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **promptsUpdatePrompt**
> Prompt promptsUpdatePrompt(promptIn)

Update a prompt owned by the current user.

### Example

```typescript
import {
    Prompt,
    Configuration,
    PromptIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Prompt(configuration);

let promptId: string; //Public id of the prompt to update. (default to undefined)
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
| **promptId** | [**string**] | Public id of the prompt to update. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Prompt**

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
|**403** | Not the creator, or only admins may make a prompt public. |  -  |
|**404** | No prompt exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

