# neuland_hub_sdk.Role

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**roles_assign_role_to_group**](Role.md#roles_assign_role_to_group) | **POST** /roles/{role_id}/groups/{group_id} | Assign a role to a group
[**roles_assign_role_to_user**](Role.md#roles_assign_role_to_user) | **POST** /roles/{role_id}/users/{user_id} | Assign a role to a user
[**roles_create_role**](Role.md#roles_create_role) | **POST** /roles/ | Create a custom role
[**roles_delete_role**](Role.md#roles_delete_role) | **DELETE** /roles/{role_id} | Delete a role
[**roles_set_default_role**](Role.md#roles_set_default_role) | **PUT** /roles/{role_id}/default | Set a role as the tenant default
[**roles_unassign_role_from_group**](Role.md#roles_unassign_role_from_group) | **DELETE** /roles/{role_id}/groups/{group_id} | Unassign a role from a group
[**roles_unassign_role_from_user**](Role.md#roles_unassign_role_from_user) | **DELETE** /roles/{role_id}/users/{user_id} | Unassign a role from a user
[**roles_update_role**](Role.md#roles_update_role) | **PATCH** /roles/{role_id} | Update a role


# **roles_assign_role_to_group**
> roles_assign_role_to_group(role_id, group_id, cookie_name=cookie_name)

Assign a role to a group

Assign a role to a group; members inherit it.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.role import Role
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
    api_instance = Role(api_client)
    role_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the role to assign.
    group_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the group to assign it to.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Assign a role to a group
        api_instance.roles_assign_role_to_group(role_id, group_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Role->roles_assign_role_to_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role_id** | **UUID**| Public id of the role to assign. | 
 **group_id** | **UUID**| Public id of the group to assign it to. | 
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
**403** | MANAGE_GROUPS required, or the grant would exceed the caller&#39;s own permissions. |  -  |
**404** | No such role or group. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roles_assign_role_to_user**
> roles_assign_role_to_user(role_id, user_id, cookie_name=cookie_name)

Assign a role to a user

Assign a role to a user, bounded by the caller's own permissions and rank.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.role import Role
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
    api_instance = Role(api_client)
    role_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the role to assign.
    user_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the user to assign it to.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Assign a role to a user
        api_instance.roles_assign_role_to_user(role_id, user_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Role->roles_assign_role_to_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role_id** | **UUID**| Public id of the role to assign. | 
 **user_id** | **UUID**| Public id of the user to assign it to. | 
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
**403** | MANAGE_USERS required, or the grant would exceed the caller&#39;s own permissions. |  -  |
**404** | No such role or user. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roles_create_role**
> Role roles_create_role(role_in, cookie_name=cookie_name)

Create a custom role

Create a tenant-scoped custom role and grant it the requested permissions.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.role import Role
from neuland_hub_sdk.models.role import Role
from neuland_hub_sdk.models.role_in import RoleIn
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
    api_instance = Role(api_client)
    role_in = neuland_hub_sdk.RoleIn() # RoleIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create a custom role
        api_response = api_instance.roles_create_role(role_in, cookie_name=cookie_name)
        print("The response of Role->roles_create_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Role->roles_create_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role_in** | [**RoleIn**](RoleIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Role**](Role.md)

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
**403** | MANAGE_ROLES required, or permissions exceed the caller&#39;s own. Setting a resource list additionally needs that kind&#39;s MANAGE_*_ACCESS, and every item named must be one the caller holds. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roles_delete_role**
> roles_delete_role(role_id, cookie_name=cookie_name)

Delete a role

Delete a custom role. Holders left with no role become roleless; system
roles and the current default are protected.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.role import Role
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
    api_instance = Role(api_client)
    role_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the role to delete.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete a role
        api_instance.roles_delete_role(role_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Role->roles_delete_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role_id** | **UUID**| Public id of the role to delete. | 
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
**401** | Missing or invalid authentication. |  -  |
**403** | MANAGE_ROLES required. |  -  |
**404** | No role exists with the given id. |  -  |
**422** | The Operator role and default roles cannot be deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roles_set_default_role**
> roles_set_default_role(role_id, cookie_name=cookie_name)

Set a role as the tenant default

Make a role the tenant's default: assigned to new users and used as the
fallback when a user would be left with no role. Exactly one per tenant.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.role import Role
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
    api_instance = Role(api_client)
    role_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the role to make default.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Set a role as the tenant default
        api_instance.roles_set_default_role(role_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Role->roles_set_default_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role_id** | **UUID**| Public id of the role to make default. | 
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
**401** | Missing or invalid authentication. |  -  |
**403** | MANAGE_ROLES required. |  -  |
**404** | No role exists with the given id. |  -  |
**422** | The Operator role cannot be a tenant default. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roles_unassign_role_from_group**
> roles_unassign_role_from_group(role_id, group_id, cookie_name=cookie_name)

Unassign a role from a group

Remove a role from a group.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.role import Role
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
    api_instance = Role(api_client)
    role_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the role to remove.
    group_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the group to remove it from.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Unassign a role from a group
        api_instance.roles_unassign_role_from_group(role_id, group_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Role->roles_unassign_role_from_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role_id** | **UUID**| Public id of the role to remove. | 
 **group_id** | **UUID**| Public id of the group to remove it from. | 
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
**403** | MANAGE_GROUPS required. |  -  |
**404** | No such role or group. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roles_unassign_role_from_user**
> roles_unassign_role_from_user(role_id, user_id, cookie_name=cookie_name)

Unassign a role from a user

Remove a role from a user.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.role import Role
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
    api_instance = Role(api_client)
    role_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the role to remove.
    user_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the user to remove it from.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Unassign a role from a user
        api_instance.roles_unassign_role_from_user(role_id, user_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Role->roles_unassign_role_from_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role_id** | **UUID**| Public id of the role to remove. | 
 **user_id** | **UUID**| Public id of the user to remove it from. | 
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
**401** | Missing or invalid authentication. |  -  |
**403** | MANAGE_USERS required. |  -  |
**404** | No such role or user. |  -  |
**422** | Cannot remove the last platform super administrator. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roles_update_role**
> Role roles_update_role(role_id, role_update_in, cookie_name=cookie_name)

Update a role

Edit a role's name, permission set and/or the resources it grants.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.role import Role
from neuland_hub_sdk.models.role import Role
from neuland_hub_sdk.models.role_update_in import RoleUpdateIn
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
    api_instance = Role(api_client)
    role_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the role to update.
    role_update_in = neuland_hub_sdk.RoleUpdateIn() # RoleUpdateIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update a role
        api_response = api_instance.roles_update_role(role_id, role_update_in, cookie_name=cookie_name)
        print("The response of Role->roles_update_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Role->roles_update_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role_id** | **UUID**| Public id of the role to update. | 
 **role_update_in** | [**RoleUpdateIn**](RoleUpdateIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Role**](Role.md)

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
**403** | MANAGE_ROLES required, or permissions exceed the caller&#39;s own. Setting a resource list additionally needs that kind&#39;s MANAGE_*_ACCESS, and every item named must be one the caller holds. |  -  |
**404** | No role exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

