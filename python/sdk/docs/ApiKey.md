# neuland_hub_sdk.ApiKey

All URIs are relative to *https://api.your-domain.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_create_key**](ApiKey.md#api_create_key) | **POST** /api/key/ | Create an API key
[**api_revoke_api_key**](ApiKey.md#api_revoke_api_key) | **PATCH** /api/key/revoke/{api_key_id} | Revoke an API key


# **api_create_key**
> ApiKeyCreateResponse api_create_key(cookie_name=cookie_name, api_key_create_request=api_key_create_request)

Create an API key

Create an API key for the current user; the secret is returned only once.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.api_key_create_request import ApiKeyCreateRequest
from neuland_hub_sdk.models.api_key_create_response import ApiKeyCreateResponse
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
    api_instance = neuland_hub_sdk.ApiKey(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)
    api_key_create_request = neuland_hub_sdk.ApiKeyCreateRequest() # ApiKeyCreateRequest |  (optional)

    try:
        # Create an API key
        api_response = api_instance.api_create_key(cookie_name=cookie_name, api_key_create_request=api_key_create_request)
        print("The response of ApiKey->api_create_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiKey->api_create_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cookie_name** | **str**|  | [optional] 
 **api_key_create_request** | [**ApiKeyCreateRequest**](ApiKeyCreateRequest.md)|  | [optional] 

### Return type

[**ApiKeyCreateResponse**](ApiKeyCreateResponse.md)

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
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_revoke_api_key**
> ApiKey api_revoke_api_key(api_key_id, cookie_name=cookie_name)

Revoke an API key

Deactivate an API key so it can no longer authenticate requests.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.api_key import ApiKey
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
    api_instance = neuland_hub_sdk.ApiKey(api_client)
    api_key_id = 56 # int | ID of the API key to revoke.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Revoke an API key
        api_response = api_instance.api_revoke_api_key(api_key_id, cookie_name=cookie_name)
        print("The response of ApiKey->api_revoke_api_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiKey->api_revoke_api_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key_id** | **int**| ID of the API key to revoke. | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**ApiKey**](ApiKey.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**404** | No API key exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

