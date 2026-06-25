# neuland_hub_sdk.Llm

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**llm_get_cost**](Llm.md#llm_get_cost) | **POST** /llm/cost | Get LLM cost metrics
[**llm_get_usage_costs**](Llm.md#llm_get_usage_costs) | **POST** /llm/services/cost | Get external service usage costs
[**llm_llm_total_tokens**](Llm.md#llm_llm_total_tokens) | **POST** /llm/tokens | Get token usage metrics


# **llm_get_cost**
> TimeseriesResponse llm_get_cost(usage_request, cookie_name=cookie_name, tenant_id=tenant_id)

Get LLM cost metrics

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
    tenant_id = 56 # int |  (optional)

    try:
        # Get LLM cost metrics
        api_response = api_instance.llm_get_cost(usage_request, cookie_name=cookie_name, tenant_id=tenant_id)
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
 **tenant_id** | **int**|  | [optional] 

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
> UsageCostResponse llm_get_usage_costs(usage_cost_request, cookie_name=cookie_name, tenant_id=tenant_id)

Get external service usage costs

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
    tenant_id = 56 # int |  (optional)

    try:
        # Get external service usage costs
        api_response = api_instance.llm_get_usage_costs(usage_cost_request, cookie_name=cookie_name, tenant_id=tenant_id)
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
 **tenant_id** | **int**|  | [optional] 

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
> TokensTimeseriesResponse llm_llm_total_tokens(usage_request, cookie_name=cookie_name, tenant_id=tenant_id)

Get token usage metrics

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
    tenant_id = 56 # int |  (optional)

    try:
        # Get token usage metrics
        api_response = api_instance.llm_llm_total_tokens(usage_request, cookie_name=cookie_name, tenant_id=tenant_id)
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
 **tenant_id** | **int**|  | [optional] 

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

