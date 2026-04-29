# neuland_hub_sdk.User

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**users_activate_user**](User.md#users_activate_user) | **POST** /users/{user_id}/activate | Activate User
[**users_create_group**](User.md#users_create_group) | **POST** /users/groups | Create Group
[**users_create_user**](User.md#users_create_user) | **POST** /users/ | Create User
[**users_deactivate_user**](User.md#users_deactivate_user) | **POST** /users/{user_id}/deactivate | Deactivate User
[**users_delete_group**](User.md#users_delete_group) | **DELETE** /users/groups/{group_id} | Delete Group
[**users_delete_user**](User.md#users_delete_user) | **DELETE** /users/{user_id} | Delete User
[**users_get_myself**](User.md#users_get_myself) | **GET** /users/me | Get Myself
[**users_reset_password**](User.md#users_reset_password) | **POST** /users/passwd | Reset Password
[**users_update_group**](User.md#users_update_group) | **PATCH** /users/groups/{group_id} | Update Group
[**users_update_user**](User.md#users_update_user) | **PATCH** /users/{user_id} | Update User
[**users_upsert_members**](User.md#users_upsert_members) | **PUT** /users/members/{group_id} | Upsert Members
[**users_upsert_my_preferences**](User.md#users_upsert_my_preferences) | **PATCH** /users/me/preferences | Upsert My Preferences


# **users_activate_user**
> UserOut users_activate_user(user_id, cookie_name=cookie_name, tenant_id=tenant_id)

Activate User

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.user_out import UserOut
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
    api_instance = neuland_hub_sdk.User(api_client)
    user_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Activate User
        api_response = api_instance.users_activate_user(user_id, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of User->users_activate_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling User->users_activate_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

[**UserOut**](UserOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_create_group**
> UserGroup users_create_group(group_in, cookie_name=cookie_name, tenant_id=tenant_id)

Create Group

Create a new user group

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.group_in import GroupIn
from neuland_hub_sdk.models.user_group import UserGroup
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
    api_instance = neuland_hub_sdk.User(api_client)
    group_in = neuland_hub_sdk.GroupIn() # GroupIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Create Group
        api_response = api_instance.users_create_group(group_in, cookie_name=cookie_name, tenant_id=tenant_id)
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
 **tenant_id** | **int**|  | [optional] 

### Return type

[**UserGroup**](UserGroup.md)

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

# **users_create_user**
> UserOut users_create_user(user_in, cookie_name=cookie_name, tenant_id=tenant_id)

Create User

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.user_in import UserIn
from neuland_hub_sdk.models.user_out import UserOut
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
    api_instance = neuland_hub_sdk.User(api_client)
    user_in = neuland_hub_sdk.UserIn() # UserIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Create User
        api_response = api_instance.users_create_user(user_in, cookie_name=cookie_name, tenant_id=tenant_id)
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
 **tenant_id** | **int**|  | [optional] 

### Return type

[**UserOut**](UserOut.md)

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

# **users_deactivate_user**
> UserOut users_deactivate_user(user_id, cookie_name=cookie_name, tenant_id=tenant_id)

Deactivate User

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.user_out import UserOut
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
    api_instance = neuland_hub_sdk.User(api_client)
    user_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Deactivate User
        api_response = api_instance.users_deactivate_user(user_id, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of User->users_deactivate_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling User->users_deactivate_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

[**UserOut**](UserOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_delete_group**
> users_delete_group(group_id, cookie_name=cookie_name, tenant_id=tenant_id)

Delete Group

Delete a user group

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
    api_instance = neuland_hub_sdk.User(api_client)
    group_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Delete Group
        api_instance.users_delete_group(group_id, cookie_name=cookie_name, tenant_id=tenant_id)
    except Exception as e:
        print("Exception when calling User->users_delete_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

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

# **users_delete_user**
> users_delete_user(user_id, cookie_name=cookie_name, tenant_id=tenant_id)

Delete User

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
    api_instance = neuland_hub_sdk.User(api_client)
    user_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Delete User
        api_instance.users_delete_user(user_id, cookie_name=cookie_name, tenant_id=tenant_id)
    except Exception as e:
        print("Exception when calling User->users_delete_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

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

# **users_get_myself**
> UserOut users_get_myself(cookie_name=cookie_name)

Get Myself

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.user_out import UserOut
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
    api_instance = neuland_hub_sdk.User(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Get Myself
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

[**UserOut**](UserOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_reset_password**
> users_reset_password(password_reset_in, cookie_name=cookie_name)

Reset Password

Resets the current user password.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.password_reset_in import PasswordResetIn
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
    api_instance = neuland_hub_sdk.User(api_client)
    password_reset_in = neuland_hub_sdk.PasswordResetIn() # PasswordResetIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Reset Password
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

# **users_update_group**
> UserGroup users_update_group(group_id, group_in, cookie_name=cookie_name, tenant_id=tenant_id)

Update Group

Update an existing user group

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.group_in import GroupIn
from neuland_hub_sdk.models.user_group import UserGroup
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
    api_instance = neuland_hub_sdk.User(api_client)
    group_id = 56 # int | 
    group_in = neuland_hub_sdk.GroupIn() # GroupIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Update Group
        api_response = api_instance.users_update_group(group_id, group_in, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of User->users_update_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling User->users_update_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **int**|  | 
 **group_in** | [**GroupIn**](GroupIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

[**UserGroup**](UserGroup.md)

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

# **users_update_user**
> UserOut users_update_user(user_id, user_update_in, cookie_name=cookie_name)

Update User

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.user_out import UserOut
from neuland_hub_sdk.models.user_update_in import UserUpdateIn
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
    api_instance = neuland_hub_sdk.User(api_client)
    user_id = 56 # int | 
    user_update_in = neuland_hub_sdk.UserUpdateIn() # UserUpdateIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update User
        api_response = api_instance.users_update_user(user_id, user_update_in, cookie_name=cookie_name)
        print("The response of User->users_update_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling User->users_update_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**|  | 
 **user_update_in** | [**UserUpdateIn**](UserUpdateIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**UserOut**](UserOut.md)

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

# **users_upsert_members**
> List[UserGroupMember] users_upsert_members(group_id, request_body, cookie_name=cookie_name, tenant_id=tenant_id)

Upsert Members

Synchronize group members — add new ones and remove missing ones.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.user_group_member import UserGroupMember
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
    api_instance = neuland_hub_sdk.User(api_client)
    group_id = 56 # int | 
    request_body = [56] # List[int] | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Upsert Members
        api_response = api_instance.users_upsert_members(group_id, request_body, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of User->users_upsert_members:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling User->users_upsert_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **int**|  | 
 **request_body** | [**List[int]**](int.md)|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

[**List[UserGroupMember]**](UserGroupMember.md)

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

# **users_upsert_my_preferences**
> UserPreferenceOut users_upsert_my_preferences(user_preference_update_in, cookie_name=cookie_name)

Upsert My Preferences

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.user_preference_out import UserPreferenceOut
from neuland_hub_sdk.models.user_preference_update_in import UserPreferenceUpdateIn
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
    api_instance = neuland_hub_sdk.User(api_client)
    user_preference_update_in = neuland_hub_sdk.UserPreferenceUpdateIn() # UserPreferenceUpdateIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Upsert My Preferences
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

