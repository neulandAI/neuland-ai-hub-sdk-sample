# neuland_hub_sdk.LLMApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_cost_llm_cost_post**](LLMApi.md#get_cost_llm_cost_post) | **POST** /llm/cost | Get Cost
[**get_usage_costs_llm_services_cost_post**](LLMApi.md#get_usage_costs_llm_services_cost_post) | **POST** /llm/services/cost | Get Usage Costs
[**llm_total_tokens_llm_tokens_post**](LLMApi.md#llm_total_tokens_llm_tokens_post) | **POST** /llm/tokens | Llm Total Tokens


# **get_cost_llm_cost_post**
> TimeseriesResponse get_cost_llm_cost_post(usage_request, cookie_name=cookie_name, tenant_id=tenant_id)

Get Cost

Returns:
- Total cost of current month (all models)
- Timeseries cost per model for requested granularity

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
    api_instance = neuland_hub_sdk.LLMApi(api_client)
    usage_request = neuland_hub_sdk.UsageRequest() # UsageRequest | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Get Cost
        api_response = api_instance.get_cost_llm_cost_post(usage_request, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of LLMApi->get_cost_llm_cost_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LLMApi->get_cost_llm_cost_post: %s\n" % e)
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
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_usage_costs_llm_services_cost_post**
> UsageCostResponse get_usage_costs_llm_services_cost_post(usage_cost_request, cookie_name=cookie_name, tenant_id=tenant_id)

Get Usage Costs

Get aggregated usage costs from the database.

Returns cost data aggregated by source, model, and time period.
Supports filtering by date range, source type, model, and provider.

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
    api_instance = neuland_hub_sdk.LLMApi(api_client)
    usage_cost_request = neuland_hub_sdk.UsageCostRequest() # UsageCostRequest | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Get Usage Costs
        api_response = api_instance.get_usage_costs_llm_services_cost_post(usage_cost_request, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of LLMApi->get_usage_costs_llm_services_cost_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LLMApi->get_usage_costs_llm_services_cost_post: %s\n" % e)
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
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llm_total_tokens_llm_tokens_post**
> TokensTimeseriesResponse llm_total_tokens_llm_tokens_post(usage_request, cookie_name=cookie_name, tenant_id=tenant_id)

Llm Total Tokens

Return the total cost and tokens used in llms.

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
    api_instance = neuland_hub_sdk.LLMApi(api_client)
    usage_request = neuland_hub_sdk.UsageRequest() # UsageRequest | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Llm Total Tokens
        api_response = api_instance.llm_total_tokens_llm_tokens_post(usage_request, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of LLMApi->llm_total_tokens_llm_tokens_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LLMApi->llm_total_tokens_llm_tokens_post: %s\n" % e)
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
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

