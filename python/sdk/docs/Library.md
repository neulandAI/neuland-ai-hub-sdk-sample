# neuland_hub_sdk.Library

All URIs are relative to *https://api.your-domain.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**libraries_add_library_members**](Library.md#libraries_add_library_members) | **POST** /libraries/{library_id}/members | Add library members
[**libraries_delete_library**](Library.md#libraries_delete_library) | **DELETE** /libraries/{library_id} | Delete a library
[**libraries_leave_library**](Library.md#libraries_leave_library) | **DELETE** /libraries/{library_id}/remove/me | Leave a library
[**libraries_new_library**](Library.md#libraries_new_library) | **POST** /libraries/ | Create a library
[**libraries_remove_library_members**](Library.md#libraries_remove_library_members) | **DELETE** /libraries/{library_id}/members | Remove library members
[**libraries_remove_single_member**](Library.md#libraries_remove_single_member) | **DELETE** /libraries/{library_id}/members/{user_id} | Remove a library member
[**libraries_update_library**](Library.md#libraries_update_library) | **PATCH** /libraries/{library_id} | Update a library


# **libraries_add_library_members**
> List[LibraryMemberOut] libraries_add_library_members(library_id, library_member_bulk_in, cookie_name=cookie_name)

Add library members

Add one or more members to the library; owner only.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.library_member_bulk_in import LibraryMemberBulkIn
from neuland_hub_sdk.models.library_member_out import LibraryMemberOut
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
    api_instance = neuland_hub_sdk.Library(api_client)
    library_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the library to add members to.
    library_member_bulk_in = neuland_hub_sdk.LibraryMemberBulkIn() # LibraryMemberBulkIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Add library members
        api_response = api_instance.libraries_add_library_members(library_id, library_member_bulk_in, cookie_name=cookie_name)
        print("The response of Library->libraries_add_library_members:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Library->libraries_add_library_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_id** | **UUID**| Public id of the library to add members to. | 
 **library_member_bulk_in** | [**LibraryMemberBulkIn**](LibraryMemberBulkIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[LibraryMemberOut]**](LibraryMemberOut.md)

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
**403** | Caller is not an owner of this library. |  -  |
**404** | No library exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **libraries_delete_library**
> libraries_delete_library(library_id, cookie_name=cookie_name)

Delete a library

Delete a library; owner only.

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
    api_instance = neuland_hub_sdk.Library(api_client)
    library_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the library to delete.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete a library
        api_instance.libraries_delete_library(library_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Library->libraries_delete_library: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_id** | **UUID**| Public id of the library to delete. | 
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
**403** | Caller is not an owner of this library. |  -  |
**404** | No library exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **libraries_leave_library**
> libraries_leave_library(library_id, cookie_name=cookie_name)

Leave a library

Remove the caller from the library's members.

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
    api_instance = neuland_hub_sdk.Library(api_client)
    library_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the library to leave.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Leave a library
        api_instance.libraries_leave_library(library_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Library->libraries_leave_library: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_id** | **UUID**| Public id of the library to leave. | 
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
**400** | Cannot leave while you are the sole owner of the library. |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Caller is not a member of this library. |  -  |
**404** | No library exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **libraries_new_library**
> Library libraries_new_library(library_in, cookie_name=cookie_name)

Create a library

Create a library owned by the caller in their tenant.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.library import Library
from neuland_hub_sdk.models.library_in import LibraryIn
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
    api_instance = neuland_hub_sdk.Library(api_client)
    library_in = neuland_hub_sdk.LibraryIn() # LibraryIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create a library
        api_response = api_instance.libraries_new_library(library_in, cookie_name=cookie_name)
        print("The response of Library->libraries_new_library:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Library->libraries_new_library: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_in** | [**LibraryIn**](LibraryIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Library**](Library.md)

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

# **libraries_remove_library_members**
> libraries_remove_library_members(library_id, library_member_bulk_delete, cookie_name=cookie_name)

Remove library members

Remove one or more members from the library; owner only.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.library_member_bulk_delete import LibraryMemberBulkDelete
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
    api_instance = neuland_hub_sdk.Library(api_client)
    library_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the library to remove members from.
    library_member_bulk_delete = neuland_hub_sdk.LibraryMemberBulkDelete() # LibraryMemberBulkDelete | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove library members
        api_instance.libraries_remove_library_members(library_id, library_member_bulk_delete, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Library->libraries_remove_library_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_id** | **UUID**| Public id of the library to remove members from. | 
 **library_member_bulk_delete** | [**LibraryMemberBulkDelete**](LibraryMemberBulkDelete.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**400** | Cannot remove the sole owner of the library. |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Caller is not an owner of this library. |  -  |
**404** | No library exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **libraries_remove_single_member**
> libraries_remove_single_member(library_id, user_id, cookie_name=cookie_name)

Remove a library member

Remove a member from the library; owner only unless removing yourself.

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
    api_instance = neuland_hub_sdk.Library(api_client)
    library_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the library.
    user_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the member to remove.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove a library member
        api_instance.libraries_remove_single_member(library_id, user_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Library->libraries_remove_single_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_id** | **UUID**| Public id of the library. | 
 **user_id** | **UUID**| Public id of the member to remove. | 
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
**400** | Cannot remove the sole owner of the library. |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Caller may not remove this member. |  -  |
**404** | No library exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **libraries_update_library**
> Library libraries_update_library(library_id, library_update_in, cookie_name=cookie_name)

Update a library

Update name and/or description of an existing library.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.library import Library
from neuland_hub_sdk.models.library_update_in import LibraryUpdateIn
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
    api_instance = neuland_hub_sdk.Library(api_client)
    library_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the library to update.
    library_update_in = neuland_hub_sdk.LibraryUpdateIn() # LibraryUpdateIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update a library
        api_response = api_instance.libraries_update_library(library_id, library_update_in, cookie_name=cookie_name)
        print("The response of Library->libraries_update_library:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Library->libraries_update_library: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_id** | **UUID**| Public id of the library to update. | 
 **library_update_in** | [**LibraryUpdateIn**](LibraryUpdateIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Library**](Library.md)

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
**403** | Caller is not a member of this library. |  -  |
**404** | No library exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

