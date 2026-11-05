# neuland_hub_sdk.Application

All URIs are relative to *https://api.your-domain.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applications_create_app**](Application.md#applications_create_app) | **POST** /applications/ | Create an application
[**applications_delete_app**](Application.md#applications_delete_app) | **DELETE** /applications/{app_id} | Delete an application
[**applications_update_app**](Application.md#applications_update_app) | **PATCH** /applications/{app_id} | Update an application
[**applications_update_group_membership**](Application.md#applications_update_group_membership) | **PUT** /applications/group/access | Set application access for a user group
[**applications_update_user_membership**](Application.md#applications_update_user_membership) | **PUT** /applications/user/access | Set application access for users


# **applications_create_app**
> object applications_create_app(application_in, cookie_name=cookie_name)

Create an application

Create a new application (superadmin only).

### Example

* Api Key Authentication (APIKeyHeader):

```python
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.application import Application
from neuland_hub_sdk.models.application_in import ApplicationIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Your Hub API URL
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
    api_instance = Application(api_client)
    application_in = neuland_hub_sdk.ApplicationIn() # ApplicationIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create an application
        api_response = api_instance.applications_create_app(application_in, cookie_name=cookie_name)
        print("The response of Application->applications_create_app:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Application->applications_create_app: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_in** | [**ApplicationIn**](ApplicationIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Superadmin privileges required. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applications_delete_app**
> applications_delete_app(app_id, cookie_name=cookie_name)

Delete an application

Delete an application (superadmin only).

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.application import Application
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Your Hub API URL
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
    api_instance = Application(api_client)
    app_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete an application
        api_instance.applications_delete_app(app_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Application->applications_delete_app: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **UUID**|  | 
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
**401** | Missing or invalid authentication. |  -  |
**403** | Superadmin privileges required. |  -  |
**404** | No application exists with the given public id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applications_update_app**
> Application applications_update_app(app_id, application_in, cookie_name=cookie_name)

Update an application

Update an existing application (superadmin only).

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.application import Application
from neuland_hub_sdk.models.application import Application
from neuland_hub_sdk.models.application_in import ApplicationIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Your Hub API URL
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
    api_instance = Application(api_client)
    app_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    application_in = neuland_hub_sdk.ApplicationIn() # ApplicationIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update an application
        api_response = api_instance.applications_update_app(app_id, application_in, cookie_name=cookie_name)
        print("The response of Application->applications_update_app:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Application->applications_update_app: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **UUID**|  | 
 **application_in** | [**ApplicationIn**](ApplicationIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Application**](Application.md)

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
**403** | Superadmin privileges required. |  -  |
**404** | No application exists with the given public id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applications_update_group_membership**
> List[ApplicationGroupOut] applications_update_group_membership(group_app_access_in, cookie_name=cookie_name)

Set application access for a user group

Grant or update application access for a user group (tenant admin only).

### Example

* Api Key Authentication (APIKeyHeader):

```python
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.application import Application
from neuland_hub_sdk.models.application_group_out import ApplicationGroupOut
from neuland_hub_sdk.models.group_app_access_in import GroupAppAccessIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Your Hub API URL
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
    api_instance = Application(api_client)
    group_app_access_in = neuland_hub_sdk.GroupAppAccessIn() # GroupAppAccessIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Set application access for a user group
        api_response = api_instance.applications_update_group_membership(group_app_access_in, cookie_name=cookie_name)
        print("The response of Application->applications_update_group_membership:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Application->applications_update_group_membership: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_app_access_in** | [**GroupAppAccessIn**](GroupAppAccessIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[ApplicationGroupOut]**](ApplicationGroupOut.md)

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
**403** | Tenant admin privileges required. |  -  |
**404** | Application not found, or one or more groups not found. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applications_update_user_membership**
> List[ApplicationMemberOut] applications_update_user_membership(application_access_in, cookie_name=cookie_name)

Set application access for users

Grant or update application access for a list of users (tenant admin only).

### Example

* Api Key Authentication (APIKeyHeader):

```python
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.application import Application
from neuland_hub_sdk.models.application_access_in import ApplicationAccessIn
from neuland_hub_sdk.models.application_member_out import ApplicationMemberOut
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Your Hub API URL
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
    api_instance = Application(api_client)
    application_access_in = neuland_hub_sdk.ApplicationAccessIn() # ApplicationAccessIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Set application access for users
        api_response = api_instance.applications_update_user_membership(application_access_in, cookie_name=cookie_name)
        print("The response of Application->applications_update_user_membership:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Application->applications_update_user_membership: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_access_in** | [**ApplicationAccessIn**](ApplicationAccessIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[ApplicationMemberOut]**](ApplicationMemberOut.md)

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
**403** | Tenant admin privileges required. |  -  |
**404** | No application exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

