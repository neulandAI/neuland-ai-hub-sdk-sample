# neuland_hub_sdk.Tenant

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_library_to_tenants**](Tenant.md#add_library_to_tenants) | **POST** /tenants/{tenant_id}/libraries/{library_id} | Add Library To Tenants
[**create_tenant**](Tenant.md#create_tenant) | **POST** /tenants/ | Create Tenant
[**create_tenant_connector**](Tenant.md#create_tenant_connector) | **POST** /tenants/{tenant_id}/connectors/{connector_id} | Create Tenant Connector
[**create_tenant_tool**](Tenant.md#create_tenant_tool) | **POST** /tenants/{tenant_id}/tools/{tool_id} | Create Tenant Tool
[**delete_tenant**](Tenant.md#delete_tenant) | **DELETE** /tenants/{tenant_id} | Delete Tenant
[**delete_tenant_connector**](Tenant.md#delete_tenant_connector) | **DELETE** /tenants/{tenant_id}/connectors/{connector_id} | Delete Tenant Connector
[**delete_tenant_model**](Tenant.md#delete_tenant_model) | **DELETE** /tenants/{tenant_id}/models/{model_id} | Delete Tenant Model
[**delete_tenant_models_bulk**](Tenant.md#delete_tenant_models_bulk) | **DELETE** /tenants/models/{model_id}/bulk | Delete Tenant Models Bulk
[**delete_tenant_tool**](Tenant.md#delete_tenant_tool) | **DELETE** /tenants/{tenant_id}/tools/{tool_id} | Delete Tenant Tool
[**get_current_tenant**](Tenant.md#get_current_tenant) | **GET** /tenants/current | Get Current Tenant
[**put_tenant_model**](Tenant.md#put_tenant_model) | **PUT** /tenants/{tenant_id}/models/{model_id} | Put Tenant Model
[**put_tenant_models_bulk**](Tenant.md#put_tenant_models_bulk) | **PUT** /tenants/models/{model_id}/bulk | Put Tenant Models Bulk
[**remove_tenant_library_member**](Tenant.md#remove_tenant_library_member) | **DELETE** /tenants/{tenant_id}/libraries/{library_id} | Remove Tenant Library Member
[**update_current_tenant**](Tenant.md#update_current_tenant) | **PATCH** /tenants/current | Update Current Tenant
[**update_tenant**](Tenant.md#update_tenant) | **PATCH** /tenants/{tenant_id} | Update Tenant


# **add_library_to_tenants**
> object add_library_to_tenants(library_id, tenant_id, cookie_name=cookie_name)

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
        api_response = api_instance.add_library_to_tenants(library_id, tenant_id, cookie_name=cookie_name)
        print("The response of Tenant->add_library_to_tenants:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Tenant->add_library_to_tenants: %s\n" % e)
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

# **create_tenant**
> TenantOut create_tenant(tenant_in, cookie_name=cookie_name, tenant_id=tenant_id)

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
        api_response = api_instance.create_tenant(tenant_in, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of Tenant->create_tenant:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Tenant->create_tenant: %s\n" % e)
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

# **create_tenant_connector**
> object create_tenant_connector(tenant_id, connector_id, cookie_name=cookie_name)

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
        api_response = api_instance.create_tenant_connector(tenant_id, connector_id, cookie_name=cookie_name)
        print("The response of Tenant->create_tenant_connector:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Tenant->create_tenant_connector: %s\n" % e)
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

# **create_tenant_tool**
> object create_tenant_tool(tenant_id, tool_id, cookie_name=cookie_name)

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
        api_response = api_instance.create_tenant_tool(tenant_id, tool_id, cookie_name=cookie_name)
        print("The response of Tenant->create_tenant_tool:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Tenant->create_tenant_tool: %s\n" % e)
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

# **delete_tenant**
> delete_tenant(tenant_id, cookie_name=cookie_name)

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
        api_instance.delete_tenant(tenant_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Tenant->delete_tenant: %s\n" % e)
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

# **delete_tenant_connector**
> delete_tenant_connector(tenant_id, connector_id, cookie_name=cookie_name)

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
        api_instance.delete_tenant_connector(tenant_id, connector_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Tenant->delete_tenant_connector: %s\n" % e)
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

# **delete_tenant_model**
> delete_tenant_model(tenant_id, model_id, cookie_name=cookie_name)

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
        api_instance.delete_tenant_model(tenant_id, model_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Tenant->delete_tenant_model: %s\n" % e)
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

# **delete_tenant_models_bulk**
> delete_tenant_models_bulk(model_id, tenant_model_bulk_in, cookie_name=cookie_name)

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
        api_instance.delete_tenant_models_bulk(model_id, tenant_model_bulk_in, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Tenant->delete_tenant_models_bulk: %s\n" % e)
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

# **delete_tenant_tool**
> delete_tenant_tool(tenant_id, tool_id, cookie_name=cookie_name)

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
        api_instance.delete_tenant_tool(tenant_id, tool_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Tenant->delete_tenant_tool: %s\n" % e)
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

# **get_current_tenant**
> TenantOut get_current_tenant(cookie_name=cookie_name)

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
        api_response = api_instance.get_current_tenant(cookie_name=cookie_name)
        print("The response of Tenant->get_current_tenant:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Tenant->get_current_tenant: %s\n" % e)
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

# **put_tenant_model**
> TenantLLM put_tenant_model(tenant_id, model_id, cookie_name=cookie_name)

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
        api_response = api_instance.put_tenant_model(tenant_id, model_id, cookie_name=cookie_name)
        print("The response of Tenant->put_tenant_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Tenant->put_tenant_model: %s\n" % e)
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

# **put_tenant_models_bulk**
> put_tenant_models_bulk(model_id, tenant_model_bulk_in, cookie_name=cookie_name)

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
        api_instance.put_tenant_models_bulk(model_id, tenant_model_bulk_in, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Tenant->put_tenant_models_bulk: %s\n" % e)
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

# **remove_tenant_library_member**
> remove_tenant_library_member(library_id, tenant_id, cookie_name=cookie_name)

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
        api_instance.remove_tenant_library_member(library_id, tenant_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Tenant->remove_tenant_library_member: %s\n" % e)
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

# **update_current_tenant**
> TenantOut update_current_tenant(tenant_update_in, cookie_name=cookie_name, tenant_id=tenant_id)

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
        api_response = api_instance.update_current_tenant(tenant_update_in, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of Tenant->update_current_tenant:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Tenant->update_current_tenant: %s\n" % e)
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

# **update_tenant**
> TenantOut update_tenant(tenant_id, tenant_update_in, cookie_name=cookie_name)

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
        api_response = api_instance.update_tenant(tenant_id, tenant_update_in, cookie_name=cookie_name)
        print("The response of Tenant->update_tenant:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Tenant->update_tenant: %s\n" % e)
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

