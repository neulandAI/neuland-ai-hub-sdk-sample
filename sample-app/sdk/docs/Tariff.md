# neuland_hub_sdk.Tariff

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_tariff**](Tariff.md#create_tariff) | **POST** /tarifs/ | Create Tariff
[**delete_tariff**](Tariff.md#delete_tariff) | **DELETE** /tarifs/{tarif_id} | Delete Tariff
[**update_tariff**](Tariff.md#update_tariff) | **PATCH** /tarifs/{tarif_id} | Update Tariff


# **create_tariff**
> Tariff create_tariff(tariff_in, cookie_name=cookie_name)

Create Tariff

Create a new tarif plan.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tariff import Tariff
from neuland_hub_sdk.models.tariff_in import TariffIn
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
    api_instance = neuland_hub_sdk.Tariff(api_client)
    tariff_in = neuland_hub_sdk.TariffIn() # TariffIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Tariff
        api_response = api_instance.create_tariff(tariff_in, cookie_name=cookie_name)
        print("The response of Tariff->create_tariff:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Tariff->create_tariff: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tariff_in** | [**TariffIn**](TariffIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Tariff**](Tariff.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**401** | Not authenticated |  -  |
**403** | Insufficient permissions |  -  |
**404** | Resource not found |  -  |
**422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_tariff**
> delete_tariff(tarif_id, cookie_name=cookie_name)

Delete Tariff

Delete a tarif plan.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
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
    api_instance = neuland_hub_sdk.Tariff(api_client)
    tarif_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Tariff
        api_instance.delete_tariff(tarif_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Tariff->delete_tariff: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tarif_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**401** | Not authenticated |  -  |
**403** | Insufficient permissions |  -  |
**404** | Resource not found |  -  |
**422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_tariff**
> Tariff update_tariff(tarif_id, tariff_in, cookie_name=cookie_name)

Update Tariff

Update an existing tarif plan.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tariff import Tariff
from neuland_hub_sdk.models.tariff_in import TariffIn
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
    api_instance = neuland_hub_sdk.Tariff(api_client)
    tarif_id = 56 # int | 
    tariff_in = neuland_hub_sdk.TariffIn() # TariffIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Tariff
        api_response = api_instance.update_tariff(tarif_id, tariff_in, cookie_name=cookie_name)
        print("The response of Tariff->update_tariff:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Tariff->update_tariff: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tarif_id** | **int**|  | 
 **tariff_in** | [**TariffIn**](TariffIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Tariff**](Tariff.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Not authenticated |  -  |
**403** | Insufficient permissions |  -  |
**404** | Resource not found |  -  |
**422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

