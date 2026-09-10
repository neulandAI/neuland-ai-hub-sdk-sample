# neuland_hub_sdk.Llm

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**llm_api_key_inventory**](Llm.md#llm_api_key_inventory) | **POST** /llm/usage/api/keys | API key inventory with idleness and expiry flags
[**llm_cost_movers**](Llm.md#llm_cost_movers) | **POST** /llm/insights/movers | Biggest cost movers and the most-expensive model vs the prior period
[**llm_get_cost**](Llm.md#llm_get_cost) | **POST** /llm/cost | [Deprecated] LLM cost metrics — superseded by POST /llm/usage
[**llm_get_usage_costs**](Llm.md#llm_get_usage_costs) | **POST** /llm/services/cost | [Deprecated] External service usage costs — superseded by POST /llm/usage
[**llm_llm_total_tokens**](Llm.md#llm_llm_total_tokens) | **POST** /llm/tokens | [Deprecated] Token usage metrics — superseded by POST /llm/usage
[**llm_message_tokens**](Llm.md#llm_message_tokens) | **POST** /llm/usage/messages | Token usage aggregated across messages (avg tokens per message)
[**llm_subtenant_usage**](Llm.md#llm_subtenant_usage) | **POST** /llm/usage/subtenants | Usage rolled up across a parent tenant and its direct children
[**llm_usage_query**](Llm.md#llm_usage_query) | **POST** /llm/usage | Unified usage aggregation (cost/tokens/requests by dimension)
[**llm_utilization**](Llm.md#llm_utilization) | **POST** /llm/insights/utilization | Idle assistants and license utilization


# **llm_api_key_inventory**
> ApiKeyInventoryResponse llm_api_key_inventory(api_key_inventory_request, cookie_name=cookie_name)

API key inventory with idleness and expiry flags

List the tenant's API keys, flagging idle and soon-expiring ones.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.api_key_inventory_request import ApiKeyInventoryRequest
from neuland_hub_sdk.models.api_key_inventory_response import ApiKeyInventoryResponse
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.Llm(api_client)
    api_key_inventory_request = neuland_hub_sdk.ApiKeyInventoryRequest() # ApiKeyInventoryRequest | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # API key inventory with idleness and expiry flags
        api_response = api_instance.llm_api_key_inventory(api_key_inventory_request, cookie_name=cookie_name)
        print("The response of Llm->llm_api_key_inventory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Llm->llm_api_key_inventory: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key_inventory_request** | [**ApiKeyInventoryRequest**](ApiKeyInventoryRequest.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**ApiKeyInventoryResponse**](ApiKeyInventoryResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Admin privileges required. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llm_cost_movers**
> MoversResponse llm_cost_movers(date_window_request, cookie_name=cookie_name)

Biggest cost movers and the most-expensive model vs the prior period

Period-over-period per-model cost deltas for the tenant.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.date_window_request import DateWindowRequest
from neuland_hub_sdk.models.movers_response import MoversResponse
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.Llm(api_client)
    date_window_request = neuland_hub_sdk.DateWindowRequest() # DateWindowRequest | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Biggest cost movers and the most-expensive model vs the prior period
        api_response = api_instance.llm_cost_movers(date_window_request, cookie_name=cookie_name)
        print("The response of Llm->llm_cost_movers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Llm->llm_cost_movers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date_window_request** | [**DateWindowRequest**](DateWindowRequest.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**MoversResponse**](MoversResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Admin privileges required. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llm_get_cost**
> TimeseriesResponse llm_get_cost(usage_request, cookie_name=cookie_name)

[Deprecated] LLM cost metrics — superseded by POST /llm/usage

Return current-month total LLM cost and per-model cost timeseries for the tenant.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.timeseries_response import TimeseriesResponse
from neuland_hub_sdk.models.usage_request import UsageRequest
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.Llm(api_client)
    usage_request = neuland_hub_sdk.UsageRequest() # UsageRequest | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # [Deprecated] LLM cost metrics — superseded by POST /llm/usage
        api_response = api_instance.llm_get_cost(usage_request, cookie_name=cookie_name)
        print("The response of Llm->llm_get_cost:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Llm->llm_get_cost: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usage_request** | [**UsageRequest**](UsageRequest.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**TimeseriesResponse**](TimeseriesResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Admin privileges required. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llm_get_usage_costs**
> UsageCostResponse llm_get_usage_costs(usage_cost_request, cookie_name=cookie_name)

[Deprecated] External service usage costs — superseded by POST /llm/usage

Return non-LLM service usage costs aggregated by source, model, and time period.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.usage_cost_request import UsageCostRequest
from neuland_hub_sdk.models.usage_cost_response import UsageCostResponse
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.Llm(api_client)
    usage_cost_request = neuland_hub_sdk.UsageCostRequest() # UsageCostRequest | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # [Deprecated] External service usage costs — superseded by POST /llm/usage
        api_response = api_instance.llm_get_usage_costs(usage_cost_request, cookie_name=cookie_name)
        print("The response of Llm->llm_get_usage_costs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Llm->llm_get_usage_costs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usage_cost_request** | [**UsageCostRequest**](UsageCostRequest.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**UsageCostResponse**](UsageCostResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | Custom granularity requires both date_start and date_end. |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Admin privileges required. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llm_llm_total_tokens**
> TokensTimeseriesResponse llm_llm_total_tokens(usage_request, cookie_name=cookie_name)

[Deprecated] Token usage metrics — superseded by POST /llm/usage

Return current-month token totals and per-model token timeseries for the tenant.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tokens_timeseries_response import TokensTimeseriesResponse
from neuland_hub_sdk.models.usage_request import UsageRequest
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.Llm(api_client)
    usage_request = neuland_hub_sdk.UsageRequest() # UsageRequest | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # [Deprecated] Token usage metrics — superseded by POST /llm/usage
        api_response = api_instance.llm_llm_total_tokens(usage_request, cookie_name=cookie_name)
        print("The response of Llm->llm_llm_total_tokens:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Llm->llm_llm_total_tokens: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usage_request** | [**UsageRequest**](UsageRequest.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**TokensTimeseriesResponse**](TokensTimeseriesResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Admin privileges required. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llm_message_tokens**
> MessageTokensResponse llm_message_tokens(date_window_request, cookie_name=cookie_name)

Token usage aggregated across messages (avg tokens per message)

Tenant-wide message-level token usage (count, totals, average).

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.date_window_request import DateWindowRequest
from neuland_hub_sdk.models.message_tokens_response import MessageTokensResponse
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.Llm(api_client)
    date_window_request = neuland_hub_sdk.DateWindowRequest() # DateWindowRequest | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Token usage aggregated across messages (avg tokens per message)
        api_response = api_instance.llm_message_tokens(date_window_request, cookie_name=cookie_name)
        print("The response of Llm->llm_message_tokens:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Llm->llm_message_tokens: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date_window_request** | [**DateWindowRequest**](DateWindowRequest.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**MessageTokensResponse**](MessageTokensResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Admin privileges required. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llm_subtenant_usage**
> SubtenantUsageResponse llm_subtenant_usage(date_window_request, cookie_name=cookie_name)

Usage rolled up across a parent tenant and its direct children

Per-tenant usage for the caller's tenant plus its direct child tenants.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.date_window_request import DateWindowRequest
from neuland_hub_sdk.models.subtenant_usage_response import SubtenantUsageResponse
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.Llm(api_client)
    date_window_request = neuland_hub_sdk.DateWindowRequest() # DateWindowRequest | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Usage rolled up across a parent tenant and its direct children
        api_response = api_instance.llm_subtenant_usage(date_window_request, cookie_name=cookie_name)
        print("The response of Llm->llm_subtenant_usage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Llm->llm_subtenant_usage: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date_window_request** | [**DateWindowRequest**](DateWindowRequest.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**SubtenantUsageResponse**](SubtenantUsageResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Admin privileges required. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llm_usage_query**
> UsageQueryResponse llm_usage_query(usage_query_request, cookie_name=cookie_name)

Unified usage aggregation (cost/tokens/requests by dimension)

Aggregate the tenant's usage by any combination of dimensions and time bucket.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.usage_query_request import UsageQueryRequest
from neuland_hub_sdk.models.usage_query_response import UsageQueryResponse
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.Llm(api_client)
    usage_query_request = neuland_hub_sdk.UsageQueryRequest() # UsageQueryRequest | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Unified usage aggregation (cost/tokens/requests by dimension)
        api_response = api_instance.llm_usage_query(usage_query_request, cookie_name=cookie_name)
        print("The response of Llm->llm_usage_query:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Llm->llm_usage_query: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usage_query_request** | [**UsageQueryRequest**](UsageQueryRequest.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**UsageQueryResponse**](UsageQueryResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | Too many group_by dimensions. |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Admin privileges required, or user-level analytics is not enabled for the tenant. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llm_utilization**
> UtilizationResponse llm_utilization(utilization_request, cookie_name=cookie_name)

Idle assistants and license utilization

Idle assistants and license-utilization counts for the tenant.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.utilization_request import UtilizationRequest
from neuland_hub_sdk.models.utilization_response import UtilizationResponse
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.Llm(api_client)
    utilization_request = neuland_hub_sdk.UtilizationRequest() # UtilizationRequest | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Idle assistants and license utilization
        api_response = api_instance.llm_utilization(utilization_request, cookie_name=cookie_name)
        print("The response of Llm->llm_utilization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Llm->llm_utilization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **utilization_request** | [**UtilizationRequest**](UtilizationRequest.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**UtilizationResponse**](UtilizationResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Admin privileges required. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

