# neuland_hub_sdk.User

All URIs are relative to *https://api.your-domain.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**users_activate_user**](User.md#users_activate_user) | **POST** /users/{user_id}/activate | Activate a user
[**users_create_group**](User.md#users_create_group) | **POST** /users/groups | Create a user group
[**users_create_user**](User.md#users_create_user) | **POST** /users/ | Create a user
[**users_deactivate_user**](User.md#users_deactivate_user) | **POST** /users/{user_id}/deactivate | Deactivate a user
[**users_delete_group**](User.md#users_delete_group) | **DELETE** /users/groups/{group_id} | Delete a user group
[**users_delete_user**](User.md#users_delete_user) | **DELETE** /users/{user_id} | Delete a user
[**users_get_myself**](User.md#users_get_myself) | **GET** /users/me | Get current user
[**users_reset_password**](User.md#users_reset_password) | **POST** /users/passwd | Change own password
[**users_sync_external_group**](User.md#users_sync_external_group) | **POST** /users/groups/{group_id}/sync | Sync an external group&#39;s members
[**users_update_group**](User.md#users_update_group) | **PATCH** /users/groups/{group_id} | Update a user group
[**users_update_user**](User.md#users_update_user) | **PATCH** /users/{user_id} | Update a user
[**users_upsert_members**](User.md#users_upsert_members) | **PUT** /users/members/{group_id} | Set user group members
[**users_upsert_my_preferences**](User.md#users_upsert_my_preferences) | **PATCH** /users/me/preferences | Update own preferences


# **users_activate_user**
> UserOut users_activate_user(user_id, cookie_name=cookie_name)

Activate a user

Re-activate a user so they can authenticate again.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.user_out import UserOut
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
    api_instance = neuland_hub_sdk.User(api_client)
    user_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the user to activate.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Activate a user
        api_response = api_instance.users_activate_user(user_id, cookie_name=cookie_name)
        print("The response of User->users_activate_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling User->users_activate_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **UUID**| Public id of the user to activate. | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**UserOut**](UserOut.md)

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
**403** | Administrator privileges required for the user&#39;s tenant. |  -  |
**404** | No user exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_create_group**
> UserGroup users_create_group(group_in, cookie_name=cookie_name)

Create a user group

Create a new user group

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.group_in import GroupIn
from neuland_hub_sdk.models.user_group import UserGroup
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
    api_instance = neuland_hub_sdk.User(api_client)
    group_in = neuland_hub_sdk.GroupIn() # GroupIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create a user group
        api_response = api_instance.users_create_group(group_in, cookie_name=cookie_name)
        print("The response of User->users_create_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling User->users_create_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_in** | [**GroupIn**](GroupIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**UserGroup**](UserGroup.md)

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
**403** | Administrator privileges required. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_create_user**
> UserOut users_create_user(user_in, cookie_name=cookie_name)

Create a user

Create a user in the caller's (or specified) tenant and send a confirmation email.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.user_in import UserIn
from neuland_hub_sdk.models.user_out import UserOut
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
    api_instance = neuland_hub_sdk.User(api_client)
    user_in = neuland_hub_sdk.UserIn() # UserIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create a user
        api_response = api_instance.users_create_user(user_in, cookie_name=cookie_name)
        print("The response of User->users_create_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling User->users_create_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_in** | [**UserIn**](UserIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**UserOut**](UserOut.md)

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
**403** | Administrator privileges required for the target tenant or flags. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_deactivate_user**
> UserOut users_deactivate_user(user_id, cookie_name=cookie_name)

Deactivate a user

Deactivate a user so they can no longer authenticate; you cannot deactivate yourself.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.user_out import UserOut
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
    api_instance = neuland_hub_sdk.User(api_client)
    user_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the user to deactivate.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Deactivate a user
        api_response = api_instance.users_deactivate_user(user_id, cookie_name=cookie_name)
        print("The response of User->users_deactivate_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling User->users_deactivate_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **UUID**| Public id of the user to deactivate. | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**UserOut**](UserOut.md)

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
**403** | Administrator privileges required for the user&#39;s tenant. |  -  |
**404** | No user exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_delete_group**
> users_delete_group(group_id, cookie_name=cookie_name)

Delete a user group

Delete a user group.

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
    api_instance = neuland_hub_sdk.User(api_client)
    group_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the user group to delete.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete a user group
        api_instance.users_delete_group(group_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling User->users_delete_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **UUID**| Public id of the user group to delete. | 
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
**400** | Group belongs to another tenant. |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Administrator privileges required. |  -  |
**404** | No user group exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_delete_user**
> users_delete_user(user_id, cookie_name=cookie_name)

Delete a user

Schedule permanent deletion (irreversible): deactivate + flag the user and revoke
their sessions synchronously, then reassign shared resources and hard-delete async.

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
    api_instance = neuland_hub_sdk.User(api_client)
    user_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the user to delete.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete a user
        api_instance.users_delete_user(user_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling User->users_delete_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **UUID**| Public id of the user to delete. | 
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
**403** | Administrator privileges required for the user&#39;s tenant. |  -  |
**404** | No user exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_get_myself**
> UserMeOut users_get_myself(cookie_name=cookie_name)

Get current user

Return the profile of the currently authenticated user, including the
effective feature-flag map for their tenant.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.user_me_out import UserMeOut
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
    api_instance = neuland_hub_sdk.User(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Get current user
        api_response = api_instance.users_get_myself(cookie_name=cookie_name)
        print("The response of User->users_get_myself:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling User->users_get_myself: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cookie_name** | **str**|  | [optional] 

### Return type

[**UserMeOut**](UserMeOut.md)

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
**404** | The current user no longer exists. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_reset_password**
> users_reset_password(password_reset_in, cookie_name=cookie_name)

Change own password

Change the current user's password and revoke all of their sessions.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.password_reset_in import PasswordResetIn
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
    api_instance = neuland_hub_sdk.User(api_client)
    password_reset_in = neuland_hub_sdk.PasswordResetIn() # PasswordResetIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Change own password
        api_instance.users_reset_password(password_reset_in, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling User->users_reset_password: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **password_reset_in** | [**PasswordResetIn**](PasswordResetIn.md)|  | 
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
**401** | Missing or invalid authentication, or wrong current password. |  -  |
**404** | The current user no longer exists. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_sync_external_group**
> GroupSyncOut users_sync_external_group(group_id, cookie_name=cookie_name)

Sync an external group's members

Reconcile an external group's membership against its bound directory group.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.group_sync_out import GroupSyncOut
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
    api_instance = neuland_hub_sdk.User(api_client)
    group_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the external group to sync.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Sync an external group's members
        api_response = api_instance.users_sync_external_group(group_id, cookie_name=cookie_name)
        print("The response of User->users_sync_external_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling User->users_sync_external_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **UUID**| Public id of the external group to sync. | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**GroupSyncOut**](GroupSyncOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | The group does not belong to the caller&#39;s tenant. |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Admin privileges required. |  -  |
**404** | No group exists with the given id. |  -  |
**409** | The group is not an external (identity-provider) group. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_update_group**
> UserGroup users_update_group(group_id, group_in, cookie_name=cookie_name)

Update a user group

Update an existing user group.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.group_in import GroupIn
from neuland_hub_sdk.models.user_group import UserGroup
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
    api_instance = neuland_hub_sdk.User(api_client)
    group_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the user group to update.
    group_in = neuland_hub_sdk.GroupIn() # GroupIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update a user group
        api_response = api_instance.users_update_group(group_id, group_in, cookie_name=cookie_name)
        print("The response of User->users_update_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling User->users_update_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **UUID**| Public id of the user group to update. | 
 **group_in** | [**GroupIn**](GroupIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | Group belongs to another tenant or caller lacks admin rights. |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Administrator privileges required. |  -  |
**404** | No user group exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_update_user**
> UserOut users_update_user(user_id, user_update_in, cookie_name=cookie_name)

Update a user

Update a user's profile, role, tenant, or email; password changes are restricted.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.user_out import UserOut
from neuland_hub_sdk.models.user_update_in import UserUpdateIn
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
    api_instance = neuland_hub_sdk.User(api_client)
    user_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the user to update.
    user_update_in = neuland_hub_sdk.UserUpdateIn() # UserUpdateIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update a user
        api_response = api_instance.users_update_user(user_id, user_update_in, cookie_name=cookie_name)
        print("The response of User->users_update_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling User->users_update_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **UUID**| Public id of the user to update. | 
 **user_update_in** | [**UserUpdateIn**](UserUpdateIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**UserOut**](UserOut.md)

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
**403** | Insufficient privileges to change the requested fields or tenant. |  -  |
**404** | No user exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_upsert_members**
> List[UserGroupMember] users_upsert_members(group_id, request_body, cookie_name=cookie_name)

Set user group members

Synchronize group members — add new ones and remove missing ones.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.user_group_member import UserGroupMember
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
    api_instance = neuland_hub_sdk.User(api_client)
    group_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the user group to update.
    request_body = None # List[Optional[UUID]] | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Set user group members
        api_response = api_instance.users_upsert_members(group_id, request_body, cookie_name=cookie_name)
        print("The response of User->users_upsert_members:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling User->users_upsert_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **UUID**| Public id of the user group to update. | 
 **request_body** | [**List[Optional[UUID]]**](UUID.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[UserGroupMember]**](UserGroupMember.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | Group belongs to another tenant. |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Administrator privileges required. |  -  |
**404** | No user group exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_upsert_my_preferences**
> UserPreferenceOut users_upsert_my_preferences(user_preference_update_in, cookie_name=cookie_name)

Update own preferences

Create or update the current user's UI preferences.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.user_preference_out import UserPreferenceOut
from neuland_hub_sdk.models.user_preference_update_in import UserPreferenceUpdateIn
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
    api_instance = neuland_hub_sdk.User(api_client)
    user_preference_update_in = neuland_hub_sdk.UserPreferenceUpdateIn() # UserPreferenceUpdateIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update own preferences
        api_response = api_instance.users_upsert_my_preferences(user_preference_update_in, cookie_name=cookie_name)
        print("The response of User->users_upsert_my_preferences:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling User->users_upsert_my_preferences: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_preference_update_in** | [**UserPreferenceUpdateIn**](UserPreferenceUpdateIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**UserPreferenceOut**](UserPreferenceOut.md)

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
**404** | The current user no longer exists. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

