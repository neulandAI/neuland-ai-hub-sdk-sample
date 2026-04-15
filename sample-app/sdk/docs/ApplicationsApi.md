# neuland_hub_sdk.ApplicationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_app_applications_post**](ApplicationsApi.md#create_app_applications_post) | **POST** /applications/ | Create App
[**delete_app_applications_app_id_delete**](ApplicationsApi.md#delete_app_applications_app_id_delete) | **DELETE** /applications/{app_id} | Delete App
[**update_app_applications_app_id_patch**](ApplicationsApi.md#update_app_applications_app_id_patch) | **PATCH** /applications/{app_id} | Update App
[**update_group_membership_applications_group_access_put**](ApplicationsApi.md#update_group_membership_applications_group_access_put) | **PUT** /applications/group/access | Update Group Membership
[**update_user_membership_applications_user_access_put**](ApplicationsApi.md#update_user_membership_applications_user_access_put) | **PUT** /applications/user/access | Update User Membership


# **create_app_applications_post**
> object create_app_applications_post(application_in, cookie_name=cookie_name)

Create App

Create a new application

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.application_in import ApplicationIn
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
    api_instance = neuland_hub_sdk.ApplicationsApi(api_client)
    application_in = neuland_hub_sdk.ApplicationIn() # ApplicationIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create App
        api_response = api_instance.create_app_applications_post(application_in, cookie_name=cookie_name)
        print("The response of ApplicationsApi->create_app_applications_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationsApi->create_app_applications_post: %s\n" % e)
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
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_app_applications_app_id_delete**
> delete_app_applications_app_id_delete(app_id, cookie_name=cookie_name)

Delete App

Delete an application

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
    api_instance = neuland_hub_sdk.ApplicationsApi(api_client)
    app_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete App
        api_instance.delete_app_applications_app_id_delete(app_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling ApplicationsApi->delete_app_applications_app_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **int**|  | 
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

# **update_app_applications_app_id_patch**
> Application update_app_applications_app_id_patch(app_id, application_in, cookie_name=cookie_name)

Update App

Update an existing application

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.application import Application
from neuland_hub_sdk.models.application_in import ApplicationIn
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
    api_instance = neuland_hub_sdk.ApplicationsApi(api_client)
    app_id = 56 # int | 
    application_in = neuland_hub_sdk.ApplicationIn() # ApplicationIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update App
        api_response = api_instance.update_app_applications_app_id_patch(app_id, application_in, cookie_name=cookie_name)
        print("The response of ApplicationsApi->update_app_applications_app_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationsApi->update_app_applications_app_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **int**|  | 
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
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_group_membership_applications_group_access_put**
> List[ApplicationGroup] update_group_membership_applications_group_access_put(group_app_access_in, cookie_name=cookie_name, tenant_id=tenant_id)

Update Group Membership

Grant or update app access for a user group

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.application_group import ApplicationGroup
from neuland_hub_sdk.models.group_app_access_in import GroupAppAccessIn
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
    api_instance = neuland_hub_sdk.ApplicationsApi(api_client)
    group_app_access_in = neuland_hub_sdk.GroupAppAccessIn() # GroupAppAccessIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Update Group Membership
        api_response = api_instance.update_group_membership_applications_group_access_put(group_app_access_in, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of ApplicationsApi->update_group_membership_applications_group_access_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationsApi->update_group_membership_applications_group_access_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_app_access_in** | [**GroupAppAccessIn**](GroupAppAccessIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

[**List[ApplicationGroup]**](ApplicationGroup.md)

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

# **update_user_membership_applications_user_access_put**
> List[ApplicationMember] update_user_membership_applications_user_access_put(application_access_in, cookie_name=cookie_name, tenant_id=tenant_id)

Update User Membership

Grant or update app access for list of users

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.application_access_in import ApplicationAccessIn
from neuland_hub_sdk.models.application_member import ApplicationMember
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
    api_instance = neuland_hub_sdk.ApplicationsApi(api_client)
    application_access_in = neuland_hub_sdk.ApplicationAccessIn() # ApplicationAccessIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Update User Membership
        api_response = api_instance.update_user_membership_applications_user_access_put(application_access_in, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of ApplicationsApi->update_user_membership_applications_user_access_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationsApi->update_user_membership_applications_user_access_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_access_in** | [**ApplicationAccessIn**](ApplicationAccessIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

[**List[ApplicationMember]**](ApplicationMember.md)

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

