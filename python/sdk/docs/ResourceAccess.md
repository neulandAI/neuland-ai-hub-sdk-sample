# neuland_hub_sdk.ResourceAccess

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**access_get_user_access**](ResourceAccess.md#access_get_user_access) | **GET** /access/user/{user_id} | Effective access for a user, and where it comes from
[**access_revoke_user_grant**](ResourceAccess.md#access_revoke_user_grant) | **DELETE** /access/user/{user_id}/grants/{kind}/{item_id} | Revoke one direct grant from a user
[**access_set_user_grants**](ResourceAccess.md#access_set_user_grants) | **PUT** /access/user/{user_id}/grants/{kind} | Set a user&#39;s direct grants for one kind


# **access_get_user_access**
> UserAccessOut access_get_user_access(user_id, cookie_name=cookie_name)

Effective access for a user, and where it comes from

The models, tools and connectors this user may use, each with the roles
that grant it and whether it was also granted directly.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.resource_access import ResourceAccess
from neuland_hub_sdk.models.user_access_out import UserAccessOut
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
    api_instance = ResourceAccess(api_client)
    user_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the user to inspect.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Effective access for a user, and where it comes from
        api_response = api_instance.access_get_user_access(user_id, cookie_name=cookie_name)
        print("The response of ResourceAccess->access_get_user_access:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceAccess->access_get_user_access: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **UUID**| Public id of the user to inspect. | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**UserAccessOut**](UserAccessOut.md)

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
**403** | One of the three MANAGE_*_ACCESS permissions is required to inspect anyone other than yourself. |  -  |
**404** | User not found. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **access_revoke_user_grant**
> access_revoke_user_grant(user_id, kind, item_id, cookie_name=cookie_name)

Revoke one direct grant from a user

Revoke one direct grant. The user keeps whatever their roles grant.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.resource_access import ResourceAccess
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
    api_instance = ResourceAccess(api_client)
    user_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the user.
    kind = neuland_hub_sdk.AccessKind() # AccessKind | Which resource kind to revoke.
    item_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the item to revoke.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Revoke one direct grant from a user
        api_instance.access_revoke_user_grant(user_id, kind, item_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling ResourceAccess->access_revoke_user_grant: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **UUID**| Public id of the user. | 
 **kind** | [**AccessKind**](.md)| Which resource kind to revoke. | 
 **item_id** | **UUID**| Public id of the item to revoke. | 
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
**403** | The matching MANAGE_*_ACCESS permission is required. |  -  |
**404** | User or item not found. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **access_set_user_grants**
> List[UserGrantOut] access_set_user_grants(user_id, kind, user_grant_in, cookie_name=cookie_name)

Set a user's direct grants for one kind

Grant these items directly, on top of what the user's roles already give.

The complete desired set: an item left out is revoked. That returns the user
to their roles' set rather than to nothing, so unlike a role change this
cannot strip anyone bare.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.resource_access import ResourceAccess
from neuland_hub_sdk.models.user_grant_in import UserGrantIn
from neuland_hub_sdk.models.user_grant_out import UserGrantOut
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
    api_instance = ResourceAccess(api_client)
    user_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the user to grant to.
    kind = neuland_hub_sdk.AccessKind() # AccessKind | Which resource kind to set.
    user_grant_in = neuland_hub_sdk.UserGrantIn() # UserGrantIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Set a user's direct grants for one kind
        api_response = api_instance.access_set_user_grants(user_id, kind, user_grant_in, cookie_name=cookie_name)
        print("The response of ResourceAccess->access_set_user_grants:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceAccess->access_set_user_grants: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **UUID**| Public id of the user to grant to. | 
 **kind** | [**AccessKind**](.md)| Which resource kind to set. | 
 **user_grant_in** | [**UserGrantIn**](UserGrantIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[UserGrantOut]**](UserGrantOut.md)

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
**403** | The matching MANAGE_*_ACCESS permission is required, or an item is outside the caller&#39;s own access. |  -  |
**404** | User not found, or one or more items not found. |  -  |
**422** | An item is not enabled for the tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

