# Llm

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**llmGetCost**](#llmgetcost) | **POST** /llm/cost | Get Cost|
|[**llmGetUsageCosts**](#llmgetusagecosts) | **POST** /llm/services/cost | Get Usage Costs|
|[**llmLlmTotalTokens**](#llmllmtotaltokens) | **POST** /llm/tokens | Llm Total Tokens|

# **llmGetCost**
> TimeseriesResponse llmGetCost(usageRequest)

Returns: - Total cost of current month (all models) - Timeseries cost per model for requested granularity

### Example

```typescript
import {
    Llm,
    Configuration,
    UsageRequest
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Llm(configuration);

let usageRequest: UsageRequest; //
let cookieName: string; // (optional) (default to undefined)
let tenantId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.llmGetCost(
    usageRequest,
    cookieName,
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usageRequest** | **UsageRequest**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**TimeseriesResponse**

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

# **llmGetUsageCosts**
> UsageCostResponse llmGetUsageCosts(usageCostRequest)

Get aggregated usage costs from the database.  Returns cost data aggregated by source, model, and time period. Supports filtering by date range, source type, model, and provider.

### Example

```typescript
import {
    Llm,
    Configuration,
    UsageCostRequest
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Llm(configuration);

let usageCostRequest: UsageCostRequest; //
let cookieName: string; // (optional) (default to undefined)
let tenantId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.llmGetUsageCosts(
    usageCostRequest,
    cookieName,
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usageCostRequest** | **UsageCostRequest**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**UsageCostResponse**

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

# **llmLlmTotalTokens**
> TokensTimeseriesResponse llmLlmTotalTokens(usageRequest)

Return the total cost and tokens used in llms.

### Example

```typescript
import {
    Llm,
    Configuration,
    UsageRequest
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Llm(configuration);

let usageRequest: UsageRequest; //
let cookieName: string; // (optional) (default to undefined)
let tenantId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.llmLlmTotalTokens(
    usageRequest,
    cookieName,
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usageRequest** | **UsageRequest**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**TokensTimeseriesResponse**

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

