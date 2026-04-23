# neuland_hub_sdk.Tarif

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tarifs_create_tarif**](Tarif.md#tarifs_create_tarif) | **POST** /tarifs/ | Create Tarif
[**tarifs_delete_tarif**](Tarif.md#tarifs_delete_tarif) | **DELETE** /tarifs/{tarif_id} | Delete Tarif
[**tarifs_update_tarif**](Tarif.md#tarifs_update_tarif) | **PATCH** /tarifs/{tarif_id} | Update Tarif


# **tarifs_create_tarif**
> Tarif tarifs_create_tarif(tarif_in, cookie_name=cookie_name)

Create Tarif

Create a new tarif plan.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tarif import Tarif
from neuland_hub_sdk.models.tarif_in import TarifIn
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
    api_instance = neuland_hub_sdk.Tarif(api_client)
    tarif_in = neuland_hub_sdk.TarifIn() # TarifIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Tarif
        api_response = api_instance.tarifs_create_tarif(tarif_in, cookie_name=cookie_name)
        print("The response of Tarif->tarifs_create_tarif:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Tarif->tarifs_create_tarif: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tarif_in** | [**TarifIn**](TarifIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Tarif**](Tarif.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tarifs_delete_tarif**
> tarifs_delete_tarif(tarif_id, cookie_name=cookie_name)

Delete Tarif

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
    api_instance = neuland_hub_sdk.Tarif(api_client)
    tarif_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Tarif
        api_instance.tarifs_delete_tarif(tarif_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Tarif->tarifs_delete_tarif: %s\n" % e)
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
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tarifs_update_tarif**
> Tarif tarifs_update_tarif(tarif_id, tarif_in, cookie_name=cookie_name)

Update Tarif

Update an existing tarif plan.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tarif import Tarif
from neuland_hub_sdk.models.tarif_in import TarifIn
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
    api_instance = neuland_hub_sdk.Tarif(api_client)
    tarif_id = 56 # int | 
    tarif_in = neuland_hub_sdk.TarifIn() # TarifIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Tarif
        api_response = api_instance.tarifs_update_tarif(tarif_id, tarif_in, cookie_name=cookie_name)
        print("The response of Tarif->tarifs_update_tarif:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Tarif->tarifs_update_tarif: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tarif_id** | **int**|  | 
 **tarif_in** | [**TarifIn**](TarifIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Tarif**](Tarif.md)

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

