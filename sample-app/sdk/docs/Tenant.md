# neuland_hub_sdk.Tenant

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenants_add_library_to_tenants**](Tenant.md#tenants_add_library_to_tenants) | **POST** /tenants/{tenant_id}/libraries/{library_id} | Add Library To Tenants
[**tenants_create_tenant**](Tenant.md#tenants_create_tenant) | **POST** /tenants/ | Create Tenant
[**tenants_create_tenant_connector**](Tenant.md#tenants_create_tenant_connector) | **POST** /tenants/{tenant_id}/connectors/{connector_id} | Create Tenant Connector
[**tenants_create_tenant_tool**](Tenant.md#tenants_create_tenant_tool) | **POST** /tenants/{tenant_id}/tools/{tool_id} | Create Tenant Tool
[**tenants_delete_tenant**](Tenant.md#tenants_delete_tenant) | **DELETE** /tenants/{tenant_id} | Delete Tenant
[**tenants_delete_tenant_connector**](Tenant.md#tenants_delete_tenant_connector) | **DELETE** /tenants/{tenant_id}/connectors/{connector_id} | Delete Tenant Connector
[**tenants_delete_tenant_model**](Tenant.md#tenants_delete_tenant_model) | **DELETE** /tenants/{tenant_id}/models/{model_id} | Delete Tenant Model
[**tenants_delete_tenant_models_bulk**](Tenant.md#tenants_delete_tenant_models_bulk) | **DELETE** /tenants/models/{model_id}/bulk | Delete Tenant Models Bulk
[**tenants_delete_tenant_tool**](Tenant.md#tenants_delete_tenant_tool) | **DELETE** /tenants/{tenant_id}/tools/{tool_id} | Delete Tenant Tool
[**tenants_get_current_tenant**](Tenant.md#tenants_get_current_tenant) | **GET** /tenants/current | Get Current Tenant
[**tenants_put_tenant_model**](Tenant.md#tenants_put_tenant_model) | **PUT** /tenants/{tenant_id}/models/{model_id} | Put Tenant Model
[**tenants_put_tenant_models_bulk**](Tenant.md#tenants_put_tenant_models_bulk) | **PUT** /tenants/models/{model_id}/bulk | Put Tenant Models Bulk
[**tenants_remove_tenant_library_member**](Tenant.md#tenants_remove_tenant_library_member) | **DELETE** /tenants/{tenant_id}/libraries/{library_id} | Remove Tenant Library Member
[**tenants_update_current_tenant**](Tenant.md#tenants_update_current_tenant) | **PATCH** /tenants/current | Update Current Tenant
[**tenants_update_tenant**](Tenant.md#tenants_update_tenant) | **PATCH** /tenants/{tenant_id} | Update Tenant


# **tenants_add_library_to_tenants**
> object tenants_add_library_to_tenants(library_id, tenant_id, cookie_name=cookie_name)

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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    library_id = 56 # int | 
    tenant_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Add Library To Tenants
        api_response = api_instance.tenants_add_library_to_tenants(library_id, tenant_id, cookie_name=cookie_name)
        print("The response of Tenant->tenants_add_library_to_tenants:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Tenant->tenants_add_library_to_tenants: %s\n" % e)
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

# **tenants_create_tenant**
> TenantOut tenants_create_tenant(tenant_in, cookie_name=cookie_name, tenant_id=tenant_id)

Create Tenant

Create a new tenant (platform operator or parent tenant admin)

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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    tenant_in = neuland_hub_sdk.TenantIn() # TenantIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Create Tenant
        api_response = api_instance.tenants_create_tenant(tenant_in, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of Tenant->tenants_create_tenant:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Tenant->tenants_create_tenant: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_in** | [**TenantIn**](TenantIn.md)|  | 
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
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenants_create_tenant_connector**
> object tenants_create_tenant_connector(tenant_id, connector_id, cookie_name=cookie_name)

Create Tenant Connector

Enable a connector for a tenant by creating TenantConnector record (superadmin or parent tenant admin)

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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    tenant_id = 56 # int | 
    connector_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Tenant Connector
        api_response = api_instance.tenants_create_tenant_connector(tenant_id, connector_id, cookie_name=cookie_name)
        print("The response of Tenant->tenants_create_tenant_connector:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Tenant->tenants_create_tenant_connector: %s\n" % e)
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

# **tenants_create_tenant_tool**
> object tenants_create_tenant_tool(tenant_id, tool_id, cookie_name=cookie_name)

Create Tenant Tool

Enable a tool for a tenant by creating TenantTool record (superadmin or parent tenant admin)

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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    tenant_id = 56 # int | 
    tool_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Tenant Tool
        api_response = api_instance.tenants_create_tenant_tool(tenant_id, tool_id, cookie_name=cookie_name)
        print("The response of Tenant->tenants_create_tenant_tool:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Tenant->tenants_create_tenant_tool: %s\n" % e)
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

# **tenants_delete_tenant**
> tenants_delete_tenant(tenant_id, cookie_name=cookie_name)

Delete Tenant

Delete a tenant (superadmin or parent tenant admin)

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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    tenant_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Tenant
        api_instance.tenants_delete_tenant(tenant_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Tenant->tenants_delete_tenant: %s\n" % e)
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

# **tenants_delete_tenant_connector**
> tenants_delete_tenant_connector(tenant_id, connector_id, cookie_name=cookie_name)

Delete Tenant Connector

Disable a connector for a tenant by removing TenantConnector record (superadmin or parent tenant admin)

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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    tenant_id = 56 # int | 
    connector_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Tenant Connector
        api_instance.tenants_delete_tenant_connector(tenant_id, connector_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Tenant->tenants_delete_tenant_connector: %s\n" % e)
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

# **tenants_delete_tenant_model**
> tenants_delete_tenant_model(tenant_id, model_id, cookie_name=cookie_name)

Delete Tenant Model

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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    tenant_id = 56 # int | 
    model_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Tenant Model
        api_instance.tenants_delete_tenant_model(tenant_id, model_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Tenant->tenants_delete_tenant_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **int**|  | 
 **model_id** | **int**|  | 
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

# **tenants_delete_tenant_models_bulk**
> tenants_delete_tenant_models_bulk(model_id, tenant_model_bulk_in, cookie_name=cookie_name)

Delete Tenant Models Bulk

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tenant_model_bulk_in import TenantModelBulkIn
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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    model_id = 56 # int | 
    tenant_model_bulk_in = neuland_hub_sdk.TenantModelBulkIn() # TenantModelBulkIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Tenant Models Bulk
        api_instance.tenants_delete_tenant_models_bulk(model_id, tenant_model_bulk_in, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Tenant->tenants_delete_tenant_models_bulk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**|  | 
 **tenant_model_bulk_in** | [**TenantModelBulkIn**](TenantModelBulkIn.md)|  | 
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

# **tenants_delete_tenant_tool**
> tenants_delete_tenant_tool(tenant_id, tool_id, cookie_name=cookie_name)

Delete Tenant Tool

Disable a tool for a tenant by removing TenantTool record (superadmin or parent tenant admin)

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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    tenant_id = 56 # int | 
    tool_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Tenant Tool
        api_instance.tenants_delete_tenant_tool(tenant_id, tool_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Tenant->tenants_delete_tenant_tool: %s\n" % e)
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

# **tenants_get_current_tenant**
> TenantOut tenants_get_current_tenant(cookie_name=cookie_name)

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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Get Current Tenant
        api_response = api_instance.tenants_get_current_tenant(cookie_name=cookie_name)
        print("The response of Tenant->tenants_get_current_tenant:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Tenant->tenants_get_current_tenant: %s\n" % e)
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

# **tenants_put_tenant_model**
> TenantLLM tenants_put_tenant_model(tenant_id, model_id, cookie_name=cookie_name)

Put Tenant Model

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tenant_llm import TenantLLM
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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    tenant_id = 56 # int | 
    model_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Put Tenant Model
        api_response = api_instance.tenants_put_tenant_model(tenant_id, model_id, cookie_name=cookie_name)
        print("The response of Tenant->tenants_put_tenant_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Tenant->tenants_put_tenant_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **int**|  | 
 **model_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**TenantLLM**](TenantLLM.md)

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

# **tenants_put_tenant_models_bulk**
> tenants_put_tenant_models_bulk(model_id, tenant_model_bulk_in, cookie_name=cookie_name)

Put Tenant Models Bulk

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tenant_model_bulk_in import TenantModelBulkIn
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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    model_id = 56 # int | 
    tenant_model_bulk_in = neuland_hub_sdk.TenantModelBulkIn() # TenantModelBulkIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Put Tenant Models Bulk
        api_instance.tenants_put_tenant_models_bulk(model_id, tenant_model_bulk_in, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Tenant->tenants_put_tenant_models_bulk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**|  | 
 **tenant_model_bulk_in** | [**TenantModelBulkIn**](TenantModelBulkIn.md)|  | 
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

# **tenants_remove_tenant_library_member**
> tenants_remove_tenant_library_member(library_id, tenant_id, cookie_name=cookie_name)

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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    library_id = 56 # int | 
    tenant_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove Tenant Library Member
        api_instance.tenants_remove_tenant_library_member(library_id, tenant_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Tenant->tenants_remove_tenant_library_member: %s\n" % e)
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

# **tenants_update_current_tenant**
> TenantOut tenants_update_current_tenant(tenant_update_in, cookie_name=cookie_name, tenant_id=tenant_id)

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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    tenant_update_in = neuland_hub_sdk.TenantUpdateIn() # TenantUpdateIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Update Current Tenant
        api_response = api_instance.tenants_update_current_tenant(tenant_update_in, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of Tenant->tenants_update_current_tenant:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Tenant->tenants_update_current_tenant: %s\n" % e)
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

# **tenants_update_tenant**
> TenantOut tenants_update_tenant(tenant_id, tenant_update_in, cookie_name=cookie_name)

Update Tenant

Update a tenant (superadmin or parent tenant admin)

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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    tenant_id = 56 # int | 
    tenant_update_in = neuland_hub_sdk.TenantUpdateIn() # TenantUpdateIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Tenant
        api_response = api_instance.tenants_update_tenant(tenant_id, tenant_update_in, cookie_name=cookie_name)
        print("The response of Tenant->tenants_update_tenant:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Tenant->tenants_update_tenant: %s\n" % e)
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

