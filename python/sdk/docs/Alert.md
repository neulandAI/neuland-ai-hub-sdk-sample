# neuland_hub_sdk.Alert

All URIs are relative to *https://api.your-domain.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alerts_create_alert**](Alert.md#alerts_create_alert) | **POST** /alerts/ | Create a budget alert
[**alerts_delete_alert**](Alert.md#alerts_delete_alert) | **DELETE** /alerts/{alert_id} | Delete a budget alert
[**alerts_update_alert**](Alert.md#alerts_update_alert) | **PATCH** /alerts/{alert_id} | Update a budget alert


# **alerts_create_alert**
> BudgetAlert alerts_create_alert(budget_alert_request, cookie_name=cookie_name, tenant_id=tenant_id)

Create a budget alert

Create a new budget alert with threshold and current spend.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.budget_alert import BudgetAlert
from neuland_hub_sdk.models.budget_alert_request import BudgetAlertRequest
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.your-domain.com
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "https://api.your-domain.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.Alert(api_client)
    budget_alert_request = neuland_hub_sdk.BudgetAlertRequest() # BudgetAlertRequest | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Create a budget alert
        api_response = api_instance.alerts_create_alert(budget_alert_request, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of Alert->alerts_create_alert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Alert->alerts_create_alert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budget_alert_request** | [**BudgetAlertRequest**](BudgetAlertRequest.md)|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

[**BudgetAlert**](BudgetAlert.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Admin privileges required. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_delete_alert**
> alerts_delete_alert(alert_id, cookie_name=cookie_name, tenant_id=tenant_id)

Delete a budget alert

Delete an existing budget alert.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.your-domain.com
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "https://api.your-domain.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.Alert(api_client)
    alert_id = 56 # int | ID of the budget alert to delete.
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Delete a budget alert
        api_instance.alerts_delete_alert(alert_id, cookie_name=cookie_name, tenant_id=tenant_id)
    except Exception as e:
        print("Exception when calling Alert->alerts_delete_alert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alert_id** | **int**| ID of the budget alert to delete. | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

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
**204** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Admin privileges required. |  -  |
**404** | No budget alert exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_update_alert**
> BudgetAlert alerts_update_alert(alert_id, budget_alert_update, cookie_name=cookie_name, tenant_id=tenant_id)

Update a budget alert

Update an existing budget alert.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.budget_alert import BudgetAlert
from neuland_hub_sdk.models.budget_alert_update import BudgetAlertUpdate
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.your-domain.com
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "https://api.your-domain.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.Alert(api_client)
    alert_id = 56 # int | ID of the budget alert to update.
    budget_alert_update = neuland_hub_sdk.BudgetAlertUpdate() # BudgetAlertUpdate | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Update a budget alert
        api_response = api_instance.alerts_update_alert(alert_id, budget_alert_update, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of Alert->alerts_update_alert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Alert->alerts_update_alert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alert_id** | **int**| ID of the budget alert to update. | 
 **budget_alert_update** | [**BudgetAlertUpdate**](BudgetAlertUpdate.md)|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

[**BudgetAlert**](BudgetAlert.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Admin privileges required. |  -  |
**404** | No budget alert exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

