# neuland_hub_sdk.LLMAdminApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_llm_model_llm_admin_models_post**](LLMAdminApi.md#create_llm_model_llm_admin_models_post) | **POST** /llm-admin/models | Create Llm Model
[**delete_llm_model_llm_admin_models_model_id_delete**](LLMAdminApi.md#delete_llm_model_llm_admin_models_model_id_delete) | **DELETE** /llm-admin/models/{model_id} | Delete Llm Model
[**grant_tenant_model_access_llm_admin_tenants_tenant_id_models_model_id_post**](LLMAdminApi.md#grant_tenant_model_access_llm_admin_tenants_tenant_id_models_model_id_post) | **POST** /llm-admin/tenants/{tenant_id}/models/{model_id} | Grant Tenant Model Access
[**revoke_tenant_model_access_llm_admin_tenants_tenant_id_models_model_id_delete**](LLMAdminApi.md#revoke_tenant_model_access_llm_admin_tenants_tenant_id_models_model_id_delete) | **DELETE** /llm-admin/tenants/{tenant_id}/models/{model_id} | Revoke Tenant Model Access
[**update_llm_model_llm_admin_models_model_id_patch**](LLMAdminApi.md#update_llm_model_llm_admin_models_model_id_patch) | **PATCH** /llm-admin/models/{model_id} | Update Llm Model


# **create_llm_model_llm_admin_models_post**
> LLMSettingsOut create_llm_model_llm_admin_models_post(llm_settings_in, cookie_name=cookie_name)

Create Llm Model

Create a new LLM model entry (superadmin only).

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.llm_settings_in import LLMSettingsIn
from neuland_hub_sdk.models.llm_settings_out import LLMSettingsOut
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
    api_instance = neuland_hub_sdk.LLMAdminApi(api_client)
    llm_settings_in = neuland_hub_sdk.LLMSettingsIn() # LLMSettingsIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Llm Model
        api_response = api_instance.create_llm_model_llm_admin_models_post(llm_settings_in, cookie_name=cookie_name)
        print("The response of LLMAdminApi->create_llm_model_llm_admin_models_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LLMAdminApi->create_llm_model_llm_admin_models_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **llm_settings_in** | [**LLMSettingsIn**](LLMSettingsIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**LLMSettingsOut**](LLMSettingsOut.md)

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

# **delete_llm_model_llm_admin_models_model_id_delete**
> delete_llm_model_llm_admin_models_model_id_delete(model_id, cookie_name=cookie_name)

Delete Llm Model

Delete an LLM model entry (superadmin only).

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
    api_instance = neuland_hub_sdk.LLMAdminApi(api_client)
    model_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Llm Model
        api_instance.delete_llm_model_llm_admin_models_model_id_delete(model_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling LLMAdminApi->delete_llm_model_llm_admin_models_model_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

# **grant_tenant_model_access_llm_admin_tenants_tenant_id_models_model_id_post**
> TenantLLMOut grant_tenant_model_access_llm_admin_tenants_tenant_id_models_model_id_post(tenant_id, model_id, cookie_name=cookie_name)

Grant Tenant Model Access

Grant a tenant access to an LLM model (superadmin only). Idempotent.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tenant_llm_out import TenantLLMOut
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
    api_instance = neuland_hub_sdk.LLMAdminApi(api_client)
    tenant_id = 56 # int | 
    model_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Grant Tenant Model Access
        api_response = api_instance.grant_tenant_model_access_llm_admin_tenants_tenant_id_models_model_id_post(tenant_id, model_id, cookie_name=cookie_name)
        print("The response of LLMAdminApi->grant_tenant_model_access_llm_admin_tenants_tenant_id_models_model_id_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LLMAdminApi->grant_tenant_model_access_llm_admin_tenants_tenant_id_models_model_id_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **int**|  | 
 **model_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**TenantLLMOut**](TenantLLMOut.md)

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

# **revoke_tenant_model_access_llm_admin_tenants_tenant_id_models_model_id_delete**
> revoke_tenant_model_access_llm_admin_tenants_tenant_id_models_model_id_delete(tenant_id, model_id, cookie_name=cookie_name)

Revoke Tenant Model Access

Revoke a tenant's access to an LLM model (superadmin only).

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
    api_instance = neuland_hub_sdk.LLMAdminApi(api_client)
    tenant_id = 56 # int | 
    model_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Revoke Tenant Model Access
        api_instance.revoke_tenant_model_access_llm_admin_tenants_tenant_id_models_model_id_delete(tenant_id, model_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling LLMAdminApi->revoke_tenant_model_access_llm_admin_tenants_tenant_id_models_model_id_delete: %s\n" % e)
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

# **update_llm_model_llm_admin_models_model_id_patch**
> LLMSettingsOut update_llm_model_llm_admin_models_model_id_patch(model_id, llm_settings_update, cookie_name=cookie_name)

Update Llm Model

Update an LLM model entry (superadmin only).

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.llm_settings_out import LLMSettingsOut
from neuland_hub_sdk.models.llm_settings_update import LLMSettingsUpdate
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
    api_instance = neuland_hub_sdk.LLMAdminApi(api_client)
    model_id = 56 # int | 
    llm_settings_update = neuland_hub_sdk.LLMSettingsUpdate() # LLMSettingsUpdate | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Llm Model
        api_response = api_instance.update_llm_model_llm_admin_models_model_id_patch(model_id, llm_settings_update, cookie_name=cookie_name)
        print("The response of LLMAdminApi->update_llm_model_llm_admin_models_model_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LLMAdminApi->update_llm_model_llm_admin_models_model_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**|  | 
 **llm_settings_update** | [**LLMSettingsUpdate**](LLMSettingsUpdate.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**LLMSettingsOut**](LLMSettingsOut.md)

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

