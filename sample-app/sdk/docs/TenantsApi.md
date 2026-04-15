# neuland_hub_sdk.TenantsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_library_to_tenants_tenants_tenant_id_libraries_library_id_post**](TenantsApi.md#add_library_to_tenants_tenants_tenant_id_libraries_library_id_post) | **POST** /tenants/{tenant_id}/libraries/{library_id} | Add Library To Tenants
[**create_tenant_connector_tenants_tenant_id_connectors_connector_id_post**](TenantsApi.md#create_tenant_connector_tenants_tenant_id_connectors_connector_id_post) | **POST** /tenants/{tenant_id}/connectors/{connector_id} | Create Tenant Connector
[**create_tenant_tenants_post**](TenantsApi.md#create_tenant_tenants_post) | **POST** /tenants/ | Create Tenant
[**create_tenant_tool_tenants_tenant_id_tools_tool_id_post**](TenantsApi.md#create_tenant_tool_tenants_tenant_id_tools_tool_id_post) | **POST** /tenants/{tenant_id}/tools/{tool_id} | Create Tenant Tool
[**delete_tenant_connector_tenants_tenant_id_connectors_connector_id_delete**](TenantsApi.md#delete_tenant_connector_tenants_tenant_id_connectors_connector_id_delete) | **DELETE** /tenants/{tenant_id}/connectors/{connector_id} | Delete Tenant Connector
[**delete_tenant_tenants_tenant_id_delete**](TenantsApi.md#delete_tenant_tenants_tenant_id_delete) | **DELETE** /tenants/{tenant_id} | Delete Tenant
[**delete_tenant_tool_tenants_tenant_id_tools_tool_id_delete**](TenantsApi.md#delete_tenant_tool_tenants_tenant_id_tools_tool_id_delete) | **DELETE** /tenants/{tenant_id}/tools/{tool_id} | Delete Tenant Tool
[**get_current_tenant_tenants_current_get**](TenantsApi.md#get_current_tenant_tenants_current_get) | **GET** /tenants/current | Get Current Tenant
[**remove_tenant_library_member_tenants_tenant_id_libraries_library_id_delete**](TenantsApi.md#remove_tenant_library_member_tenants_tenant_id_libraries_library_id_delete) | **DELETE** /tenants/{tenant_id}/libraries/{library_id} | Remove Tenant Library Member
[**update_current_tenant_tenants_current_patch**](TenantsApi.md#update_current_tenant_tenants_current_patch) | **PATCH** /tenants/current | Update Current Tenant
[**update_tenant_tenants_tenant_id_patch**](TenantsApi.md#update_tenant_tenants_tenant_id_patch) | **PATCH** /tenants/{tenant_id} | Update Tenant


# **add_library_to_tenants_tenants_tenant_id_libraries_library_id_post**
> object add_library_to_tenants_tenants_tenant_id_libraries_library_id_post(library_id, tenant_id, cookie_name=cookie_name)

Add Library To Tenants

Assign library to the tenant by superadmin or to one entire tenancy by admin

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
    api_instance = neuland_hub_sdk.TenantsApi(api_client)
    library_id = 56 # int | 
    tenant_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Add Library To Tenants
        api_response = api_instance.add_library_to_tenants_tenants_tenant_id_libraries_library_id_post(library_id, tenant_id, cookie_name=cookie_name)
        print("The response of TenantsApi->add_library_to_tenants_tenants_tenant_id_libraries_library_id_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantsApi->add_library_to_tenants_tenants_tenant_id_libraries_library_id_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_id** | **int**|  | 
 **tenant_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**object**

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

# **create_tenant_connector_tenants_tenant_id_connectors_connector_id_post**
> object create_tenant_connector_tenants_tenant_id_connectors_connector_id_post(tenant_id, connector_id, cookie_name=cookie_name)

Create Tenant Connector

Enable a connector for a tenant by creating TenantConnector record (superadmin only)

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
    api_instance = neuland_hub_sdk.TenantsApi(api_client)
    tenant_id = 56 # int | 
    connector_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Tenant Connector
        api_response = api_instance.create_tenant_connector_tenants_tenant_id_connectors_connector_id_post(tenant_id, connector_id, cookie_name=cookie_name)
        print("The response of TenantsApi->create_tenant_connector_tenants_tenant_id_connectors_connector_id_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantsApi->create_tenant_connector_tenants_tenant_id_connectors_connector_id_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **int**|  | 
 **connector_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_tenant_tenants_post**
> TenantOut create_tenant_tenants_post(tenant_in, cookie_name=cookie_name)

Create Tenant

Create a new tenant (superadmin only)

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tenant_in import TenantIn
from neuland_hub_sdk.models.tenant_out import TenantOut
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
    api_instance = neuland_hub_sdk.TenantsApi(api_client)
    tenant_in = neuland_hub_sdk.TenantIn() # TenantIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Tenant
        api_response = api_instance.create_tenant_tenants_post(tenant_in, cookie_name=cookie_name)
        print("The response of TenantsApi->create_tenant_tenants_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantsApi->create_tenant_tenants_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_in** | [**TenantIn**](TenantIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**TenantOut**](TenantOut.md)

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

# **create_tenant_tool_tenants_tenant_id_tools_tool_id_post**
> object create_tenant_tool_tenants_tenant_id_tools_tool_id_post(tenant_id, tool_id, cookie_name=cookie_name)

Create Tenant Tool

Enable a tool for a tenant by creating TenantTool record (superadmin only)

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
    api_instance = neuland_hub_sdk.TenantsApi(api_client)
    tenant_id = 56 # int | 
    tool_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Tenant Tool
        api_response = api_instance.create_tenant_tool_tenants_tenant_id_tools_tool_id_post(tenant_id, tool_id, cookie_name=cookie_name)
        print("The response of TenantsApi->create_tenant_tool_tenants_tenant_id_tools_tool_id_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantsApi->create_tenant_tool_tenants_tenant_id_tools_tool_id_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **int**|  | 
 **tool_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_tenant_connector_tenants_tenant_id_connectors_connector_id_delete**
> delete_tenant_connector_tenants_tenant_id_connectors_connector_id_delete(tenant_id, connector_id, cookie_name=cookie_name)

Delete Tenant Connector

Disable a connector for a tenant by removing TenantConnector record (superadmin only)

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
    api_instance = neuland_hub_sdk.TenantsApi(api_client)
    tenant_id = 56 # int | 
    connector_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Tenant Connector
        api_instance.delete_tenant_connector_tenants_tenant_id_connectors_connector_id_delete(tenant_id, connector_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling TenantsApi->delete_tenant_connector_tenants_tenant_id_connectors_connector_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **int**|  | 
 **connector_id** | **int**|  | 
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

# **delete_tenant_tenants_tenant_id_delete**
> delete_tenant_tenants_tenant_id_delete(tenant_id, cookie_name=cookie_name)

Delete Tenant

Delete a tenant (superadmin only)

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
    api_instance = neuland_hub_sdk.TenantsApi(api_client)
    tenant_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Tenant
        api_instance.delete_tenant_tenants_tenant_id_delete(tenant_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling TenantsApi->delete_tenant_tenants_tenant_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **int**|  | 
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

# **delete_tenant_tool_tenants_tenant_id_tools_tool_id_delete**
> delete_tenant_tool_tenants_tenant_id_tools_tool_id_delete(tenant_id, tool_id, cookie_name=cookie_name)

Delete Tenant Tool

Disable a tool for a tenant by removing TenantTool record (superadmin only)

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
    api_instance = neuland_hub_sdk.TenantsApi(api_client)
    tenant_id = 56 # int | 
    tool_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Tenant Tool
        api_instance.delete_tenant_tool_tenants_tenant_id_tools_tool_id_delete(tenant_id, tool_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling TenantsApi->delete_tenant_tool_tenants_tenant_id_tools_tool_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **int**|  | 
 **tool_id** | **int**|  | 
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

# **get_current_tenant_tenants_current_get**
> TenantOut get_current_tenant_tenants_current_get(cookie_name=cookie_name)

Get Current Tenant

Get current user's tenant

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tenant_out import TenantOut
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
    api_instance = neuland_hub_sdk.TenantsApi(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Get Current Tenant
        api_response = api_instance.get_current_tenant_tenants_current_get(cookie_name=cookie_name)
        print("The response of TenantsApi->get_current_tenant_tenants_current_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantsApi->get_current_tenant_tenants_current_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cookie_name** | **str**|  | [optional] 

### Return type

[**TenantOut**](TenantOut.md)

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

# **remove_tenant_library_member_tenants_tenant_id_libraries_library_id_delete**
> remove_tenant_library_member_tenants_tenant_id_libraries_library_id_delete(library_id, tenant_id, cookie_name=cookie_name)

Remove Tenant Library Member

Deletes a tenant from the library

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
    api_instance = neuland_hub_sdk.TenantsApi(api_client)
    library_id = 56 # int | 
    tenant_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove Tenant Library Member
        api_instance.remove_tenant_library_member_tenants_tenant_id_libraries_library_id_delete(library_id, tenant_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling TenantsApi->remove_tenant_library_member_tenants_tenant_id_libraries_library_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_id** | **int**|  | 
 **tenant_id** | **int**|  | 
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

# **update_current_tenant_tenants_current_patch**
> TenantOut update_current_tenant_tenants_current_patch(tenant_update_in, cookie_name=cookie_name, tenant_id=tenant_id)

Update Current Tenant

Update current user's tenant (tenant admin only)

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tenant_out import TenantOut
from neuland_hub_sdk.models.tenant_update_in import TenantUpdateIn
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
    api_instance = neuland_hub_sdk.TenantsApi(api_client)
    tenant_update_in = neuland_hub_sdk.TenantUpdateIn() # TenantUpdateIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Update Current Tenant
        api_response = api_instance.update_current_tenant_tenants_current_patch(tenant_update_in, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of TenantsApi->update_current_tenant_tenants_current_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantsApi->update_current_tenant_tenants_current_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_update_in** | [**TenantUpdateIn**](TenantUpdateIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

[**TenantOut**](TenantOut.md)

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

# **update_tenant_tenants_tenant_id_patch**
> TenantOut update_tenant_tenants_tenant_id_patch(tenant_id, tenant_update_in, cookie_name=cookie_name)

Update Tenant

Update a tenant (superadmin only)

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tenant_out import TenantOut
from neuland_hub_sdk.models.tenant_update_in import TenantUpdateIn
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
    api_instance = neuland_hub_sdk.TenantsApi(api_client)
    tenant_id = 56 # int | 
    tenant_update_in = neuland_hub_sdk.TenantUpdateIn() # TenantUpdateIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Tenant
        api_response = api_instance.update_tenant_tenants_tenant_id_patch(tenant_id, tenant_update_in, cookie_name=cookie_name)
        print("The response of TenantsApi->update_tenant_tenants_tenant_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantsApi->update_tenant_tenants_tenant_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **int**|  | 
 **tenant_update_in** | [**TenantUpdateIn**](TenantUpdateIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**TenantOut**](TenantOut.md)

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

