# ModelApi

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v1ChatCompletions**](#v1chatcompletions) | **POST** /v1/chat/completions | Create a chat completion|
|[**v1ListModels**](#v1listmodels) | **GET** /v1/models | List the models the API key may call|

# **v1ChatCompletions**
> any v1ChatCompletions(requestBody)

OpenAI Chat Completions request and response, streamed or not. `model` is an id from GET /v1/models. Claude models are asked to cache the prompt when your organization has prompt caching on for the model and the request sets no `cache_control`; a top-level `\"cache_control\": null` is removed and opts out. OpenAI and Azure OpenAI models get a `prompt_cache_key` per API key unless the request sets one.

### Example

```typescript
import {
    ModelApi,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ModelApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.v1ChatCompletions(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |


### Return type

**any**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Malformed request body. |  -  |
|**401** | Missing or invalid API key. |  -  |
|**403** | Model API disabled for tenant. |  -  |
|**404** | Unknown or inaccessible model. |  -  |
|**429** | Usage quota exhausted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1ListModels**
> ModelList v1ListModels()


### Example

```typescript
import {
    ModelApi,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ModelApi(configuration);

const { status, data } = await apiInstance.v1ListModels();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ModelList**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid API key. |  -  |
|**403** | Model API disabled for tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

