# neuland_hub_sdk.LlmSetting

All URIs are relative to *https://api.your-domain.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**llm_create_llm_settings**](LlmSetting.md#llm_create_llm_settings) | **POST** /llm/settings | Create LLM settings
[**llm_delete_llm_settings**](LlmSetting.md#llm_delete_llm_settings) | **DELETE** /llm/settings/{settings_id} | Delete LLM settings
[**llm_update_llm_settings**](LlmSetting.md#llm_update_llm_settings) | **PATCH** /llm/settings/{settings_id} | Update LLM settings


# **llm_create_llm_settings**
> object llm_create_llm_settings(llm_settings_in, cookie_name=cookie_name)

Create LLM settings

Create a provider-specific settings entry for a catalog model.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.llm_settings_in import LLMSettingsIn
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
    api_instance = neuland_hub_sdk.LlmSetting(api_client)
    llm_settings_in = neuland_hub_sdk.LLMSettingsIn() # LLMSettingsIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create LLM settings
        api_response = api_instance.llm_create_llm_settings(llm_settings_in, cookie_name=cookie_name)
        print("The response of LlmSetting->llm_create_llm_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LlmSetting->llm_create_llm_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **llm_settings_in** | [**LLMSettingsIn**](LLMSettingsIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**object**

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
**403** | Platform operator privileges required. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llm_delete_llm_settings**
> llm_delete_llm_settings(settings_id, cookie_name=cookie_name)

Delete LLM settings

Remove an LLM settings entry permanently.

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
    api_instance = neuland_hub_sdk.LlmSetting(api_client)
    settings_id = 56 # int | ID of the LLM settings entry to delete.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete LLM settings
        api_instance.llm_delete_llm_settings(settings_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling LlmSetting->llm_delete_llm_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settings_id** | **int**| ID of the LLM settings entry to delete. | 
 **cookie_name** | **str**|  | [optional] 

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
**403** | Platform operator privileges required. |  -  |
**404** | No LLM settings exist with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llm_update_llm_settings**
> object llm_update_llm_settings(settings_id, llm_settings_update, cookie_name=cookie_name)

Update LLM settings

Update fields of an existing LLM settings entry.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.llm_settings_update import LLMSettingsUpdate
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
    api_instance = neuland_hub_sdk.LlmSetting(api_client)
    settings_id = 56 # int | ID of the LLM settings entry to update.
    llm_settings_update = neuland_hub_sdk.LLMSettingsUpdate() # LLMSettingsUpdate | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update LLM settings
        api_response = api_instance.llm_update_llm_settings(settings_id, llm_settings_update, cookie_name=cookie_name)
        print("The response of LlmSetting->llm_update_llm_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LlmSetting->llm_update_llm_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settings_id** | **int**| ID of the LLM settings entry to update. | 
 **llm_settings_update** | [**LLMSettingsUpdate**](LLMSettingsUpdate.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**object**

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
**403** | Platform operator privileges required. |  -  |
**404** | No LLM settings exist with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

