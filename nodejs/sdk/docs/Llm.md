# Llm

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**llmApiKeyInventory**](#llmapikeyinventory) | **POST** /llm/usage/api/keys | API key inventory with idleness and expiry flags|
|[**llmCostMovers**](#llmcostmovers) | **POST** /llm/insights/movers | Biggest cost movers and the most-expensive model vs the prior period|
|[**llmGetCost**](#llmgetcost) | **POST** /llm/cost | [Deprecated] LLM cost metrics — superseded by POST /llm/usage|
|[**llmGetUsageCosts**](#llmgetusagecosts) | **POST** /llm/services/cost | [Deprecated] External service usage costs — superseded by POST /llm/usage|
|[**llmLlmTotalTokens**](#llmllmtotaltokens) | **POST** /llm/tokens | [Deprecated] Token usage metrics — superseded by POST /llm/usage|
|[**llmMessageTokens**](#llmmessagetokens) | **POST** /llm/usage/messages | Token usage aggregated across messages (avg tokens per message)|
|[**llmSubtenantUsage**](#llmsubtenantusage) | **POST** /llm/usage/subtenants | Usage rolled up across a parent tenant and its direct children|
|[**llmUsageQuery**](#llmusagequery) | **POST** /llm/usage | Unified usage aggregation (cost/tokens/requests by dimension)|
|[**llmUtilization**](#llmutilization) | **POST** /llm/insights/utilization | Idle assistants and license utilization|

# **llmApiKeyInventory**
> ApiKeyInventoryResponse llmApiKeyInventory(apiKeyInventoryRequest)

List the tenant\'s API keys, flagging idle and soon-expiring ones.

### Example

```typescript
import {
    Llm,
    Configuration,
    ApiKeyInventoryRequest
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Llm(configuration);

let apiKeyInventoryRequest: ApiKeyInventoryRequest; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.llmApiKeyInventory(
    apiKeyInventoryRequest,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKeyInventoryRequest** | **ApiKeyInventoryRequest**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiKeyInventoryResponse**

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
|**403** | Admin privileges required. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llmCostMovers**
> MoversResponse llmCostMovers(dateWindowRequest)

Period-over-period per-model cost deltas for the tenant.

### Example

```typescript
import {
    Llm,
    Configuration,
    DateWindowRequest
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Llm(configuration);

let dateWindowRequest: DateWindowRequest; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.llmCostMovers(
    dateWindowRequest,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateWindowRequest** | **DateWindowRequest**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**MoversResponse**

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
|**403** | Admin privileges required. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llmGetCost**
> TimeseriesResponse llmGetCost(usageRequest)

Return current-month total LLM cost and per-model cost timeseries for the tenant.

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

const { status, data } = await apiInstance.llmGetCost(
    usageRequest,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usageRequest** | **UsageRequest**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


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
|**401** | Missing or invalid authentication. |  -  |
|**403** | Admin privileges required. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llmGetUsageCosts**
> UsageCostResponse llmGetUsageCosts(usageCostRequest)

Return non-LLM service usage costs aggregated by source, model, and time period.

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

const { status, data } = await apiInstance.llmGetUsageCosts(
    usageCostRequest,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usageCostRequest** | **UsageCostRequest**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


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
|**400** | Custom granularity requires both date_start and date_end. |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Admin privileges required. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llmLlmTotalTokens**
> TokensTimeseriesResponse llmLlmTotalTokens(usageRequest)

Return current-month token totals and per-model token timeseries for the tenant.

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

const { status, data } = await apiInstance.llmLlmTotalTokens(
    usageRequest,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usageRequest** | **UsageRequest**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


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
|**401** | Missing or invalid authentication. |  -  |
|**403** | Admin privileges required. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llmMessageTokens**
> MessageTokensResponse llmMessageTokens(dateWindowRequest)

Tenant-wide message-level token usage (count, totals, average).

### Example

```typescript
import {
    Llm,
    Configuration,
    DateWindowRequest
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Llm(configuration);

let dateWindowRequest: DateWindowRequest; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.llmMessageTokens(
    dateWindowRequest,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateWindowRequest** | **DateWindowRequest**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**MessageTokensResponse**

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
|**403** | Admin privileges required. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llmSubtenantUsage**
> SubtenantUsageResponse llmSubtenantUsage(dateWindowRequest)

Per-tenant usage for the caller\'s tenant plus its direct child tenants.

### Example

```typescript
import {
    Llm,
    Configuration,
    DateWindowRequest
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Llm(configuration);

let dateWindowRequest: DateWindowRequest; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.llmSubtenantUsage(
    dateWindowRequest,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateWindowRequest** | **DateWindowRequest**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SubtenantUsageResponse**

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
|**403** | Admin privileges required. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llmUsageQuery**
> UsageQueryResponse llmUsageQuery(usageQueryRequest)

Aggregate the tenant\'s usage by any combination of dimensions and time bucket.

### Example

```typescript
import {
    Llm,
    Configuration,
    UsageQueryRequest
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Llm(configuration);

let usageQueryRequest: UsageQueryRequest; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.llmUsageQuery(
    usageQueryRequest,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usageQueryRequest** | **UsageQueryRequest**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**UsageQueryResponse**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Too many group_by dimensions. |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Admin privileges required, or user-level analytics is not enabled for the tenant. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llmUtilization**
> UtilizationResponse llmUtilization(utilizationRequest)

Idle assistants and license-utilization counts for the tenant.

### Example

```typescript
import {
    Llm,
    Configuration,
    UtilizationRequest
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Llm(configuration);

let utilizationRequest: UtilizationRequest; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.llmUtilization(
    utilizationRequest,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **utilizationRequest** | **UtilizationRequest**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**UtilizationResponse**

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
|**403** | Admin privileges required. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

