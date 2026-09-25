# neuland_hub_sdk.Project

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projects_add_library_to_project**](Project.md#projects_add_library_to_project) | **POST** /projects/{project_id}/libraries/{library_id} | Add a library to a project
[**projects_add_members**](Project.md#projects_add_members) | **POST** /projects/{project_id}/members | Add members to a project
[**projects_create_project**](Project.md#projects_create_project) | **POST** /projects/ | Create a project
[**projects_delete_member**](Project.md#projects_delete_member) | **DELETE** /projects/{project_id}/members/{user_id} | Remove a member from a project
[**projects_delete_members**](Project.md#projects_delete_members) | **DELETE** /projects/{project_id}/members | Remove members from a project
[**projects_delete_project**](Project.md#projects_delete_project) | **DELETE** /projects/{project_id} | Delete a project
[**projects_is_project_name_free**](Project.md#projects_is_project_name_free) | **GET** /projects/available | Check if a project name is free
[**projects_leave_project**](Project.md#projects_leave_project) | **DELETE** /projects/{project_id}/remove/me | Leave a project
[**projects_remove_library_from_project**](Project.md#projects_remove_library_from_project) | **DELETE** /projects/{project_id}/libraries/{library_id} | Remove a library from a project
[**projects_update_project**](Project.md#projects_update_project) | **PATCH** /projects/{project_id} | Update a project


# **projects_add_library_to_project**
> ProjectLibrary projects_add_library_to_project(project_id, library_id, cookie_name=cookie_name)

Add a library to a project

Enable a library for a project by creating an association.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.project import Project
from neuland_hub_sdk.models.project_library import ProjectLibrary
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
    api_instance = Project(api_client)
    project_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the project.
    library_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the library to enable.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Add a library to a project
        api_response = api_instance.projects_add_library_to_project(project_id, library_id, cookie_name=cookie_name)
        print("The response of Project->projects_add_library_to_project:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Project->projects_add_library_to_project: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **UUID**| Public id of the project. | 
 **library_id** | **UUID**| Public id of the library to enable. | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**ProjectLibrary**](ProjectLibrary.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Current user lacks access to the library or the project. |  -  |
**404** | Library or project not found. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_add_members**
> List[ProjectMember] projects_add_members(project_id, project_member_bulk_in, cookie_name=cookie_name)

Add members to a project

Add one or more members to a project (project owner only).

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.project import Project
from neuland_hub_sdk.models.project_member import ProjectMember
from neuland_hub_sdk.models.project_member_bulk_in import ProjectMemberBulkIn
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
    api_instance = Project(api_client)
    project_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the project to add members to.
    project_member_bulk_in = neuland_hub_sdk.ProjectMemberBulkIn() # ProjectMemberBulkIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Add members to a project
        api_response = api_instance.projects_add_members(project_id, project_member_bulk_in, cookie_name=cookie_name)
        print("The response of Project->projects_add_members:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Project->projects_add_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **UUID**| Public id of the project to add members to. | 
 **project_member_bulk_in** | [**ProjectMemberBulkIn**](ProjectMemberBulkIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[ProjectMember]**](ProjectMember.md)

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
**403** | Current user is not an owner of the project. |  -  |
**404** | No project exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_create_project**
> Project projects_create_project(project_in, cookie_name=cookie_name)

Create a project

Create a project and add the current user as its owner.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.project import Project
from neuland_hub_sdk.models.project import Project
from neuland_hub_sdk.models.project_in import ProjectIn
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
    api_instance = Project(api_client)
    project_in = neuland_hub_sdk.ProjectIn() # ProjectIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create a project
        api_response = api_instance.projects_create_project(project_in, cookie_name=cookie_name)
        print("The response of Project->projects_create_project:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Project->projects_create_project: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_in** | [**ProjectIn**](ProjectIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Project**](Project.md)

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
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_delete_member**
> projects_delete_member(project_id, user_id, cookie_name=cookie_name)

Remove a member from a project

Remove a single member from a project (project owner only).

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.project import Project
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
    api_instance = Project(api_client)
    project_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the project to remove the member from.
    user_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the user to remove.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove a member from a project
        api_instance.projects_delete_member(project_id, user_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Project->projects_delete_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **UUID**| Public id of the project to remove the member from. | 
 **user_id** | **UUID**| Public id of the user to remove. | 
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
**403** | Current user is not an owner of the project. |  -  |
**404** | Project not found, or the user is not a member of it. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_delete_members**
> projects_delete_members(project_id, project_member_bulk_delete, cookie_name=cookie_name)

Remove members from a project

Remove multiple members from a project (project owner only).

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.project import Project
from neuland_hub_sdk.models.project_member_bulk_delete import ProjectMemberBulkDelete
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
    api_instance = Project(api_client)
    project_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the project to remove members from.
    project_member_bulk_delete = neuland_hub_sdk.ProjectMemberBulkDelete() # ProjectMemberBulkDelete | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove members from a project
        api_instance.projects_delete_members(project_id, project_member_bulk_delete, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Project->projects_delete_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **UUID**| Public id of the project to remove members from. | 
 **project_member_bulk_delete** | [**ProjectMemberBulkDelete**](ProjectMemberBulkDelete.md)|  | 
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
**401** | Missing or invalid authentication. |  -  |
**403** | Current user is not an owner of the project. |  -  |
**404** | Project not found, or a user is not a member of it. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_delete_project**
> projects_delete_project(project_id, cookie_name=cookie_name)

Delete a project

Permanently delete a project (project owner only).

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.project import Project
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
    api_instance = Project(api_client)
    project_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the project to delete.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete a project
        api_instance.projects_delete_project(project_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Project->projects_delete_project: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **UUID**| Public id of the project to delete. | 
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
**403** | Current user is not an owner of the project. |  -  |
**404** | No project exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_is_project_name_free**
> bool projects_is_project_name_free(name, cookie_name=cookie_name)

Check if a project name is free

Return true if no project already uses the given name.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.project import Project
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
    api_instance = Project(api_client)
    name = 'name_example' # str | Project name to check for availability.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Check if a project name is free
        api_response = api_instance.projects_is_project_name_free(name, cookie_name=cookie_name)
        print("The response of Project->projects_is_project_name_free:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Project->projects_is_project_name_free: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Project name to check for availability. | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**bool**

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
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_leave_project**
> projects_leave_project(project_id, cookie_name=cookie_name)

Leave a project

Remove the current user from a project they belong to.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.project import Project
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
    api_instance = Project(api_client)
    project_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the project to leave.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Leave a project
        api_instance.projects_leave_project(project_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Project->projects_leave_project: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **UUID**| Public id of the project to leave. | 
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
**403** | Current user is not a member of the project. |  -  |
**404** | Project not found, or the user is not a member of it. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_remove_library_from_project**
> projects_remove_library_from_project(project_id, library_id, cookie_name=cookie_name)

Remove a library from a project

Disable a library for a project by deleting the association.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.project import Project
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
    api_instance = Project(api_client)
    project_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the project.
    library_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the library to disable.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove a library from a project
        api_instance.projects_remove_library_from_project(project_id, library_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Project->projects_remove_library_from_project: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **UUID**| Public id of the project. | 
 **library_id** | **UUID**| Public id of the library to disable. | 
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
**403** | Current user is not a member of the project. |  -  |
**404** | No project exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_update_project**
> Project projects_update_project(project_id, project_in, cookie_name=cookie_name)

Update a project

Update an existing project's fields (project owner only).

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.project import Project
from neuland_hub_sdk.models.project import Project
from neuland_hub_sdk.models.project_in import ProjectIn
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
    api_instance = Project(api_client)
    project_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the project to update.
    project_in = neuland_hub_sdk.ProjectIn() # ProjectIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update a project
        api_response = api_instance.projects_update_project(project_id, project_in, cookie_name=cookie_name)
        print("The response of Project->projects_update_project:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Project->projects_update_project: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **UUID**| Public id of the project to update. | 
 **project_in** | [**ProjectIn**](ProjectIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Project**](Project.md)

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
**403** | Current user is not an owner of the project. |  -  |
**404** | No project exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

