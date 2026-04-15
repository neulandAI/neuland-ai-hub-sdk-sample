# neuland_hub_sdk.TemplatesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_templates_post**](TemplatesApi.md#create_templates_post) | **POST** /templates/ | Create
[**delete_templates_template_id_delete**](TemplatesApi.md#delete_templates_template_id_delete) | **DELETE** /templates/{template_id} | Delete
[**update_templates_template_id_patch**](TemplatesApi.md#update_templates_template_id_patch) | **PATCH** /templates/{template_id} | Update


# **create_templates_post**
> TemplateOut create_templates_post(template_in, tenant_id=tenant_id, cookie_name=cookie_name)

Create

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.template_in import TemplateIn
from neuland_hub_sdk.models.template_out import TemplateOut
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
    api_instance = neuland_hub_sdk.TemplatesApi(api_client)
    template_in = neuland_hub_sdk.TemplateIn() # TemplateIn | 
    tenant_id = 56 # int |  (optional)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create
        api_response = api_instance.create_templates_post(template_in, tenant_id=tenant_id, cookie_name=cookie_name)
        print("The response of TemplatesApi->create_templates_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->create_templates_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_in** | [**TemplateIn**](TemplateIn.md)|  | 
 **tenant_id** | **int**|  | [optional] 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**TemplateOut**](TemplateOut.md)

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

# **delete_templates_template_id_delete**
> delete_templates_template_id_delete(template_id, tenant_id=tenant_id, cookie_name=cookie_name)

Delete

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
    api_instance = neuland_hub_sdk.TemplatesApi(api_client)
    template_id = 56 # int | 
    tenant_id = 56 # int |  (optional)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete
        api_instance.delete_templates_template_id_delete(template_id, tenant_id=tenant_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling TemplatesApi->delete_templates_template_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **int**|  | 
 **tenant_id** | **int**|  | [optional] 
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

# **update_templates_template_id_patch**
> TemplateOut update_templates_template_id_patch(template_id, template_in, tenant_id=tenant_id, cookie_name=cookie_name)

Update

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.template_in import TemplateIn
from neuland_hub_sdk.models.template_out import TemplateOut
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
    api_instance = neuland_hub_sdk.TemplatesApi(api_client)
    template_id = 56 # int | 
    template_in = neuland_hub_sdk.TemplateIn() # TemplateIn | 
    tenant_id = 56 # int |  (optional)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update
        api_response = api_instance.update_templates_template_id_patch(template_id, template_in, tenant_id=tenant_id, cookie_name=cookie_name)
        print("The response of TemplatesApi->update_templates_template_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->update_templates_template_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **int**|  | 
 **template_in** | [**TemplateIn**](TemplateIn.md)|  | 
 **tenant_id** | **int**|  | [optional] 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**TemplateOut**](TemplateOut.md)

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

