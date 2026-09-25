# neuland_hub_sdk.System

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**system_read_system_settings**](System.md#system_read_system_settings) | **GET** /system/settings | Read system settings
[**system_update_system_settings**](System.md#system_update_system_settings) | **PATCH** /system/settings | Update system settings


# **system_read_system_settings**
> SystemSettings system_read_system_settings(cookie_name=cookie_name)

Read system settings

Return the current platform-wide system settings.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.system import System
from neuland_hub_sdk.models.system_settings import SystemSettings
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


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = System(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Read system settings
        api_response = api_instance.system_read_system_settings(cookie_name=cookie_name)
        print("The response of System->system_read_system_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling System->system_read_system_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cookie_name** | **str**|  | [optional] 

### Return type

[**SystemSettings**](SystemSettings.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Superadmin privileges required. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **system_update_system_settings**
> SystemSettings system_update_system_settings(system_settings_update, cookie_name=cookie_name)

Update system settings

Apply the provided system settings changes and record an audit entry.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.system import System
from neuland_hub_sdk.models.system_settings import SystemSettings
from neuland_hub_sdk.models.system_settings_update import SystemSettingsUpdate
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


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = System(api_client)
    system_settings_update = neuland_hub_sdk.SystemSettingsUpdate() # SystemSettingsUpdate | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update system settings
        api_response = api_instance.system_update_system_settings(system_settings_update, cookie_name=cookie_name)
        print("The response of System->system_update_system_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling System->system_update_system_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **system_settings_update** | [**SystemSettingsUpdate**](SystemSettingsUpdate.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**SystemSettings**](SystemSettings.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | No changes were provided. |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Superadmin privileges required. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

