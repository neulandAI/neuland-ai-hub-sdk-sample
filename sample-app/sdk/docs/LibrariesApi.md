# neuland_hub_sdk.LibrariesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_library_members_libraries_library_id_members_post**](LibrariesApi.md#add_library_members_libraries_library_id_members_post) | **POST** /libraries/{library_id}/members | Add Library Members
[**delete_library_libraries_library_id_delete**](LibrariesApi.md#delete_library_libraries_library_id_delete) | **DELETE** /libraries/{library_id} | Delete Library
[**leave_library_libraries_library_id_remove_me_delete**](LibrariesApi.md#leave_library_libraries_library_id_remove_me_delete) | **DELETE** /libraries/{library_id}/remove/me | Leave Library
[**new_library_libraries_post**](LibrariesApi.md#new_library_libraries_post) | **POST** /libraries/ | New Library
[**remove_library_members_libraries_library_id_members_delete**](LibrariesApi.md#remove_library_members_libraries_library_id_members_delete) | **DELETE** /libraries/{library_id}/members | Remove Library Members
[**remove_single_member_libraries_library_id_members_user_id_delete**](LibrariesApi.md#remove_single_member_libraries_library_id_members_user_id_delete) | **DELETE** /libraries/{library_id}/members/{user_id} | Remove Single Member
[**update_library_libraries_library_id_patch**](LibrariesApi.md#update_library_libraries_library_id_patch) | **PATCH** /libraries/{library_id} | Update Library


# **add_library_members_libraries_library_id_members_post**
> List[LibraryMember] add_library_members_libraries_library_id_members_post(library_id, library_member_bulk_in, cookie_name=cookie_name)

Add Library Members

Adds a new member to the library

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.library_member import LibraryMember
from neuland_hub_sdk.models.library_member_bulk_in import LibraryMemberBulkIn
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
    api_instance = neuland_hub_sdk.LibrariesApi(api_client)
    library_id = 56 # int | 
    library_member_bulk_in = neuland_hub_sdk.LibraryMemberBulkIn() # LibraryMemberBulkIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Add Library Members
        api_response = api_instance.add_library_members_libraries_library_id_members_post(library_id, library_member_bulk_in, cookie_name=cookie_name)
        print("The response of LibrariesApi->add_library_members_libraries_library_id_members_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LibrariesApi->add_library_members_libraries_library_id_members_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_id** | **int**|  | 
 **library_member_bulk_in** | [**LibraryMemberBulkIn**](LibraryMemberBulkIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[LibraryMember]**](LibraryMember.md)

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

# **delete_library_libraries_library_id_delete**
> delete_library_libraries_library_id_delete(library_id, cookie_name=cookie_name)

Delete Library

Delete a library

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
    api_instance = neuland_hub_sdk.LibrariesApi(api_client)
    library_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Library
        api_instance.delete_library_libraries_library_id_delete(library_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling LibrariesApi->delete_library_libraries_library_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_id** | **int**|  | 
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

# **leave_library_libraries_library_id_remove_me_delete**
> leave_library_libraries_library_id_remove_me_delete(library_id, cookie_name=cookie_name)

Leave Library

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
    api_instance = neuland_hub_sdk.LibrariesApi(api_client)
    library_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Leave Library
        api_instance.leave_library_libraries_library_id_remove_me_delete(library_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling LibrariesApi->leave_library_libraries_library_id_remove_me_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_id** | **int**|  | 
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

# **new_library_libraries_post**
> Library new_library_libraries_post(library_in, cookie_name=cookie_name)

New Library

Create a new library

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.library import Library
from neuland_hub_sdk.models.library_in import LibraryIn
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
    api_instance = neuland_hub_sdk.LibrariesApi(api_client)
    library_in = neuland_hub_sdk.LibraryIn() # LibraryIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # New Library
        api_response = api_instance.new_library_libraries_post(library_in, cookie_name=cookie_name)
        print("The response of LibrariesApi->new_library_libraries_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LibrariesApi->new_library_libraries_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_in** | [**LibraryIn**](LibraryIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Library**](Library.md)

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

# **remove_library_members_libraries_library_id_members_delete**
> remove_library_members_libraries_library_id_members_delete(library_id, library_member_bulk_delete, cookie_name=cookie_name)

Remove Library Members

Deletes a member from the library

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.library_member_bulk_delete import LibraryMemberBulkDelete
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
    api_instance = neuland_hub_sdk.LibrariesApi(api_client)
    library_id = 56 # int | 
    library_member_bulk_delete = neuland_hub_sdk.LibraryMemberBulkDelete() # LibraryMemberBulkDelete | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove Library Members
        api_instance.remove_library_members_libraries_library_id_members_delete(library_id, library_member_bulk_delete, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling LibrariesApi->remove_library_members_libraries_library_id_members_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_id** | **int**|  | 
 **library_member_bulk_delete** | [**LibraryMemberBulkDelete**](LibraryMemberBulkDelete.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_single_member_libraries_library_id_members_user_id_delete**
> remove_single_member_libraries_library_id_members_user_id_delete(library_id, user_id, cookie_name=cookie_name)

Remove Single Member

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
    api_instance = neuland_hub_sdk.LibrariesApi(api_client)
    library_id = 56 # int | 
    user_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove Single Member
        api_instance.remove_single_member_libraries_library_id_members_user_id_delete(library_id, user_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling LibrariesApi->remove_single_member_libraries_library_id_members_user_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_id** | **int**|  | 
 **user_id** | **int**|  | 
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

# **update_library_libraries_library_id_patch**
> Library update_library_libraries_library_id_patch(library_id, library_update_in, cookie_name=cookie_name)

Update Library

Update an existing library

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.library import Library
from neuland_hub_sdk.models.library_update_in import LibraryUpdateIn
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
    api_instance = neuland_hub_sdk.LibrariesApi(api_client)
    library_id = 56 # int | 
    library_update_in = neuland_hub_sdk.LibraryUpdateIn() # LibraryUpdateIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Library
        api_response = api_instance.update_library_libraries_library_id_patch(library_id, library_update_in, cookie_name=cookie_name)
        print("The response of LibrariesApi->update_library_libraries_library_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LibrariesApi->update_library_libraries_library_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_id** | **int**|  | 
 **library_update_in** | [**LibraryUpdateIn**](LibraryUpdateIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Library**](Library.md)

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

