# neuland_hub_sdk.Tenant

All URIs are relative to *https://api.your-domain.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenants_add_library_to_tenants**](Tenant.md#tenants_add_library_to_tenants) | **POST** /tenants/{tenant_id}/libraries/{library_id} | Assign a library to a tenant
[**tenants_create_tenant**](Tenant.md#tenants_create_tenant) | **POST** /tenants/ | Create a tenant
[**tenants_create_tenant_connector**](Tenant.md#tenants_create_tenant_connector) | **POST** /tenants/{tenant_id}/connectors/{connector_id} | Enable a connector for a tenant
[**tenants_create_tenant_oauth_client**](Tenant.md#tenants_create_tenant_oauth_client) | **POST** /tenants/{tenant_id}/oauth-clients/{oauth_client_id} | Create a per-tenant OAuth client config
[**tenants_create_tenant_tool**](Tenant.md#tenants_create_tenant_tool) | **POST** /tenants/{tenant_id}/tools/{tool_id} | Enable a tool for a tenant
[**tenants_delete_tenant**](Tenant.md#tenants_delete_tenant) | **DELETE** /tenants/{tenant_id} | Delete a tenant
[**tenants_delete_tenant_connector**](Tenant.md#tenants_delete_tenant_connector) | **DELETE** /tenants/{tenant_id}/connectors/{connector_id} | Disable a connector for a tenant
[**tenants_delete_tenant_model**](Tenant.md#tenants_delete_tenant_model) | **DELETE** /tenants/{tenant_id}/models/{model_id} | Disable a model for a tenant
[**tenants_delete_tenant_models_bulk**](Tenant.md#tenants_delete_tenant_models_bulk) | **DELETE** /tenants/models/{model_id}/bulk | Disable a model for multiple tenants
[**tenants_delete_tenant_oauth_client**](Tenant.md#tenants_delete_tenant_oauth_client) | **DELETE** /tenants/{tenant_id}/oauth-clients/{oauth_client_id} | Delete a per-tenant OAuth client config
[**tenants_delete_tenant_tool**](Tenant.md#tenants_delete_tenant_tool) | **DELETE** /tenants/{tenant_id}/tools/{tool_id} | Disable a tool for a tenant
[**tenants_get_current_tenant**](Tenant.md#tenants_get_current_tenant) | **GET** /tenants/current | Get current tenant
[**tenants_put_tenant_model**](Tenant.md#tenants_put_tenant_model) | **PUT** /tenants/{tenant_id}/models/{model_id} | Enable a model for a tenant
[**tenants_put_tenant_models_bulk**](Tenant.md#tenants_put_tenant_models_bulk) | **PUT** /tenants/models/{model_id}/bulk | Enable a model for multiple tenants
[**tenants_remove_tenant_library_member**](Tenant.md#tenants_remove_tenant_library_member) | **DELETE** /tenants/{tenant_id}/libraries/{library_id} | Unassign a library from a tenant
[**tenants_update_current_tenant**](Tenant.md#tenants_update_current_tenant) | **PATCH** /tenants/current | Update current tenant
[**tenants_update_tenant**](Tenant.md#tenants_update_tenant) | **PATCH** /tenants/{tenant_id} | Update a tenant
[**tenants_update_tenant_oauth_client**](Tenant.md#tenants_update_tenant_oauth_client) | **PATCH** /tenants/{tenant_id}/oauth-clients/{oauth_client_id} | Update a per-tenant OAuth client config
[**tenants_update_tenant_oauth_secret**](Tenant.md#tenants_update_tenant_oauth_secret) | **PUT** /tenants/{tenant_id}/oauth-clients/{oauth_client_id}/secret | Set a per-tenant OAuth client secret


# **tenants_add_library_to_tenants**
> object tenants_add_library_to_tenants(library_id, tenant_id, cookie_name=cookie_name)

Assign a library to a tenant

Assign a library to a tenant (library owner who is admin of that tenant).

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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    library_id = 56 # int | 
    tenant_id = 56 # int | ID of the tenant.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Assign a library to a tenant
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
 **tenant_id** | **int**| ID of the tenant. | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**object**

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
**403** | Library owner and tenant admin privileges required. |  -  |
**404** | Current user not found. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenants_create_tenant**
> TenantOut tenants_create_tenant(tenant_in, cookie_name=cookie_name, tenant_id=tenant_id)

Create a tenant

Create a new tenant (platform operator or parent tenant admin).

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tenant_in import TenantIn
from neuland_hub_sdk.models.tenant_out import TenantOut
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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    tenant_in = neuland_hub_sdk.TenantIn() # TenantIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Create a tenant
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

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Tenant admin privileges required, or not permitted to create this kind of tenant. |  -  |
**404** | Current user or parent tenant not found. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenants_create_tenant_connector**
> object tenants_create_tenant_connector(tenant_id, connector_id, cookie_name=cookie_name)

Enable a connector for a tenant

Enable a connector for a tenant (superadmin or parent tenant admin).

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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    tenant_id = 56 # int | 
    connector_id = 56 # int | ID of the connector to enable.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Enable a connector for a tenant
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
 **connector_id** | **int**| ID of the connector to enable. | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Superadmin or parent tenant admin required. |  -  |
**404** | No connector exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenants_create_tenant_oauth_client**
> TenantOAuthClientOut tenants_create_tenant_oauth_client(tenant_id, oauth_client_id, tenant_o_auth_client_in, cookie_name=cookie_name)

Create a per-tenant OAuth client config

Provision per-tenant SSO config and secret for a deployment-wide template.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tenant_o_auth_client_in import TenantOAuthClientIn
from neuland_hub_sdk.models.tenant_o_auth_client_out import TenantOAuthClientOut
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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    tenant_id = 56 # int | ID of the tenant to configure.
    oauth_client_id = 56 # int | ID of the platform OAuth client to override.
    tenant_o_auth_client_in = neuland_hub_sdk.TenantOAuthClientIn() # TenantOAuthClientIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create a per-tenant OAuth client config
        api_response = api_instance.tenants_create_tenant_oauth_client(tenant_id, oauth_client_id, tenant_o_auth_client_in, cookie_name=cookie_name)
        print("The response of Tenant->tenants_create_tenant_oauth_client:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Tenant->tenants_create_tenant_oauth_client: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **int**| ID of the tenant to configure. | 
 **oauth_client_id** | **int**| ID of the platform OAuth client to override. | 
 **tenant_o_auth_client_in** | [**TenantOAuthClientIn**](TenantOAuthClientIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**TenantOAuthClientOut**](TenantOAuthClientOut.md)

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
**403** | Superadmin privileges required. |  -  |
**404** | The tenant or platform OAuth client does not exist. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenants_create_tenant_tool**
> object tenants_create_tenant_tool(tenant_id, tool_id, cookie_name=cookie_name)

Enable a tool for a tenant

Enable a tool for a tenant (superadmin or parent tenant admin).

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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    tenant_id = 56 # int | 
    tool_id = 56 # int | ID of the tool to enable.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Enable a tool for a tenant
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
 **tool_id** | **int**| ID of the tool to enable. | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Superadmin or parent tenant admin required. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenants_delete_tenant**
> tenants_delete_tenant(tenant_id, cookie_name=cookie_name)

Delete a tenant

Delete a tenant by id (superadmin or parent tenant admin).

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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    tenant_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete a tenant
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

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Superadmin or parent tenant admin required. |  -  |
**404** | No tenant exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenants_delete_tenant_connector**
> tenants_delete_tenant_connector(tenant_id, connector_id, cookie_name=cookie_name)

Disable a connector for a tenant

Disable a connector for a tenant (superadmin or parent tenant admin).

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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    tenant_id = 56 # int | 
    connector_id = 56 # int | ID of the connector to disable.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Disable a connector for a tenant
        api_instance.tenants_delete_tenant_connector(tenant_id, connector_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Tenant->tenants_delete_tenant_connector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **int**|  | 
 **connector_id** | **int**| ID of the connector to disable. | 
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
**403** | Superadmin or parent tenant admin required. |  -  |
**404** | The connector is not enabled for the tenant. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenants_delete_tenant_model**
> tenants_delete_tenant_model(tenant_id, model_id, cookie_name=cookie_name)

Disable a model for a tenant

Disable an LLM catalog model for a tenant (superadmin or parent tenant admin).

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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    tenant_id = 56 # int | 
    model_id = 56 # int | ID of the LLM catalog model to disable.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Disable a model for a tenant
        api_instance.tenants_delete_tenant_model(tenant_id, model_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Tenant->tenants_delete_tenant_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **int**|  | 
 **model_id** | **int**| ID of the LLM catalog model to disable. | 
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
**403** | Superadmin or parent tenant admin required. |  -  |
**404** | Tenant model association not found. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenants_delete_tenant_models_bulk**
> tenants_delete_tenant_models_bulk(model_id, tenant_model_bulk_in, cookie_name=cookie_name)

Disable a model for multiple tenants

Disable an LLM catalog model for all tenants or a list of tenants (superadmin).

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tenant_model_bulk_in import TenantModelBulkIn
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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    model_id = 56 # int | ID of the LLM catalog model to disable.
    tenant_model_bulk_in = neuland_hub_sdk.TenantModelBulkIn() # TenantModelBulkIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Disable a model for multiple tenants
        api_instance.tenants_delete_tenant_models_bulk(model_id, tenant_model_bulk_in, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Tenant->tenants_delete_tenant_models_bulk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| ID of the LLM catalog model to disable. | 
 **tenant_model_bulk_in** | [**TenantModelBulkIn**](TenantModelBulkIn.md)|  | 
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
**401** | Missing or invalid authentication. |  -  |
**403** | Superadmin privileges required. |  -  |
**404** | Catalog model not found, or a target tenant not found. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenants_delete_tenant_oauth_client**
> tenants_delete_tenant_oauth_client(tenant_id, oauth_client_id, cookie_name=cookie_name)

Delete a per-tenant OAuth client config

Delete a per-tenant OAuth client configuration and its stored secret.

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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    tenant_id = 56 # int | ID of the tenant.
    oauth_client_id = 56 # int | ID of the platform OAuth client being overridden.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete a per-tenant OAuth client config
        api_instance.tenants_delete_tenant_oauth_client(tenant_id, oauth_client_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Tenant->tenants_delete_tenant_oauth_client: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **int**| ID of the tenant. | 
 **oauth_client_id** | **int**| ID of the platform OAuth client being overridden. | 
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
**403** | Superadmin privileges required. |  -  |
**404** | No per-tenant OAuth config exists for this tenant and OAuth client. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenants_delete_tenant_tool**
> tenants_delete_tenant_tool(tenant_id, tool_id, cookie_name=cookie_name)

Disable a tool for a tenant

Disable a tool for a tenant (superadmin or parent tenant admin).

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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    tenant_id = 56 # int | 
    tool_id = 56 # int | ID of the tool to disable.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Disable a tool for a tenant
        api_instance.tenants_delete_tenant_tool(tenant_id, tool_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Tenant->tenants_delete_tenant_tool: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **int**|  | 
 **tool_id** | **int**| ID of the tool to disable. | 
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
**403** | Superadmin or parent tenant admin required. |  -  |
**404** | The tool is not enabled for the tenant. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenants_get_current_tenant**
> TenantOut tenants_get_current_tenant(cookie_name=cookie_name)

Get current tenant

Get the tenant the current user belongs to.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tenant_out import TenantOut
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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Get current tenant
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

[APIKeyHeader](../README.md#APIKeyHeader)

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

# **tenants_put_tenant_model**
> TenantLLM tenants_put_tenant_model(tenant_id, model_id, cookie_name=cookie_name)

Enable a model for a tenant

Enable an LLM catalog model for a tenant (superadmin or parent tenant admin).

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tenant_llm import TenantLLM
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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    tenant_id = 56 # int | 
    model_id = 56 # int | ID of the LLM catalog model to enable.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Enable a model for a tenant
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
 **model_id** | **int**| ID of the LLM catalog model to enable. | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**TenantLLM**](TenantLLM.md)

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
**403** | Superadmin or parent tenant admin required. |  -  |
**404** | Tenant or catalog model not found. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenants_put_tenant_models_bulk**
> tenants_put_tenant_models_bulk(model_id, tenant_model_bulk_in, cookie_name=cookie_name)

Enable a model for multiple tenants

Enable an LLM catalog model for all tenants or a list of tenants (superadmin).

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tenant_model_bulk_in import TenantModelBulkIn
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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    model_id = 56 # int | ID of the LLM catalog model to enable.
    tenant_model_bulk_in = neuland_hub_sdk.TenantModelBulkIn() # TenantModelBulkIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Enable a model for multiple tenants
        api_instance.tenants_put_tenant_models_bulk(model_id, tenant_model_bulk_in, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Tenant->tenants_put_tenant_models_bulk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| ID of the LLM catalog model to enable. | 
 **tenant_model_bulk_in** | [**TenantModelBulkIn**](TenantModelBulkIn.md)|  | 
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
**401** | Missing or invalid authentication. |  -  |
**403** | Superadmin privileges required. |  -  |
**404** | Catalog model not found, or a target tenant not found. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenants_remove_tenant_library_member**
> tenants_remove_tenant_library_member(library_id, tenant_id, cookie_name=cookie_name)

Unassign a library from a tenant

Remove a library assignment from a tenant (library owner who is tenant admin).

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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    library_id = 56 # int | 
    tenant_id = 56 # int | ID of the tenant.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Unassign a library from a tenant
        api_instance.tenants_remove_tenant_library_member(library_id, tenant_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Tenant->tenants_remove_tenant_library_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_id** | **int**|  | 
 **tenant_id** | **int**| ID of the tenant. | 
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
**403** | Library owner and tenant admin privileges required. |  -  |
**404** | The library is not assigned to the tenant. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenants_update_current_tenant**
> TenantOut tenants_update_current_tenant(tenant_update_in, cookie_name=cookie_name, tenant_id=tenant_id)

Update current tenant

Update the current user's tenant (tenant admin; some fields superadmin-only).

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tenant_out import TenantOut
from neuland_hub_sdk.models.tenant_update_in import TenantUpdateIn
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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    tenant_update_in = neuland_hub_sdk.TenantUpdateIn() # TenantUpdateIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Update current tenant
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

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Tenant admin privileges required, or superadmin required to change protected fields. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenants_update_tenant**
> TenantOut tenants_update_tenant(tenant_id, tenant_update_in, cookie_name=cookie_name)

Update a tenant

Update a tenant by id (superadmin or parent tenant admin).

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tenant_out import TenantOut
from neuland_hub_sdk.models.tenant_update_in import TenantUpdateIn
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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    tenant_id = 56 # int | 
    tenant_update_in = neuland_hub_sdk.TenantUpdateIn() # TenantUpdateIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update a tenant
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

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Superadmin or parent tenant admin required; some fields require superadmin. |  -  |
**404** | No tenant exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenants_update_tenant_oauth_client**
> TenantOAuthClientOut tenants_update_tenant_oauth_client(tenant_id, oauth_client_id, tenant_o_auth_client_update, cookie_name=cookie_name)

Update a per-tenant OAuth client config

Update an existing per-tenant OAuth client configuration.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tenant_o_auth_client_out import TenantOAuthClientOut
from neuland_hub_sdk.models.tenant_o_auth_client_update import TenantOAuthClientUpdate
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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    tenant_id = 56 # int | ID of the tenant.
    oauth_client_id = 56 # int | ID of the platform OAuth client being overridden.
    tenant_o_auth_client_update = neuland_hub_sdk.TenantOAuthClientUpdate() # TenantOAuthClientUpdate | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update a per-tenant OAuth client config
        api_response = api_instance.tenants_update_tenant_oauth_client(tenant_id, oauth_client_id, tenant_o_auth_client_update, cookie_name=cookie_name)
        print("The response of Tenant->tenants_update_tenant_oauth_client:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Tenant->tenants_update_tenant_oauth_client: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **int**| ID of the tenant. | 
 **oauth_client_id** | **int**| ID of the platform OAuth client being overridden. | 
 **tenant_o_auth_client_update** | [**TenantOAuthClientUpdate**](TenantOAuthClientUpdate.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**TenantOAuthClientOut**](TenantOAuthClientOut.md)

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
**403** | Superadmin privileges required. |  -  |
**404** | No per-tenant OAuth config exists for this tenant and OAuth client. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenants_update_tenant_oauth_secret**
> tenants_update_tenant_oauth_secret(tenant_id, oauth_client_id, secret_update_in, cookie_name=cookie_name)

Set a per-tenant OAuth client secret

Replace the stored OAuth client secret for a per-tenant configuration.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.secret_update_in import SecretUpdateIn
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
    api_instance = neuland_hub_sdk.Tenant(api_client)
    tenant_id = 56 # int | ID of the tenant.
    oauth_client_id = 56 # int | ID of the platform OAuth client being overridden.
    secret_update_in = neuland_hub_sdk.SecretUpdateIn() # SecretUpdateIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Set a per-tenant OAuth client secret
        api_instance.tenants_update_tenant_oauth_secret(tenant_id, oauth_client_id, secret_update_in, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Tenant->tenants_update_tenant_oauth_secret: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **int**| ID of the tenant. | 
 **oauth_client_id** | **int**| ID of the platform OAuth client being overridden. | 
 **secret_update_in** | [**SecretUpdateIn**](SecretUpdateIn.md)|  | 
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
**401** | Missing or invalid authentication. |  -  |
**403** | Superadmin privileges required. |  -  |
**404** | No per-tenant OAuth config exists for this tenant and OAuth client. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

