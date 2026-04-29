# neuland_hub_sdk.LlmCatalog

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**llm_create_catalog**](LlmCatalog.md#llm_create_catalog) | **POST** /llm/catalog | Create Catalog
[**llm_delete_catalog**](LlmCatalog.md#llm_delete_catalog) | **DELETE** /llm/catalog/{catalog_id} | Delete Catalog
[**llm_update_catalog**](LlmCatalog.md#llm_update_catalog) | **PATCH** /llm/catalog/{catalog_id} | Update Catalog


# **llm_create_catalog**
> object llm_create_catalog(catalog_in, cookie_name=cookie_name)

Create Catalog

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.catalog_in import CatalogIn
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
    api_instance = neuland_hub_sdk.LlmCatalog(api_client)
    catalog_in = neuland_hub_sdk.CatalogIn() # CatalogIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Catalog
        api_response = api_instance.llm_create_catalog(catalog_in, cookie_name=cookie_name)
        print("The response of LlmCatalog->llm_create_catalog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LlmCatalog->llm_create_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalog_in** | [**CatalogIn**](CatalogIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**object**

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

# **llm_delete_catalog**
> llm_delete_catalog(catalog_id, cookie_name=cookie_name)

Delete Catalog

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
    api_instance = neuland_hub_sdk.LlmCatalog(api_client)
    catalog_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Catalog
        api_instance.llm_delete_catalog(catalog_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling LlmCatalog->llm_delete_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalog_id** | **int**|  | 
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

# **llm_update_catalog**
> object llm_update_catalog(catalog_id, catalog_update, cookie_name=cookie_name)

Update Catalog

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.catalog_update import CatalogUpdate
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
    api_instance = neuland_hub_sdk.LlmCatalog(api_client)
    catalog_id = 56 # int | 
    catalog_update = neuland_hub_sdk.CatalogUpdate() # CatalogUpdate | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Catalog
        api_response = api_instance.llm_update_catalog(catalog_id, catalog_update, cookie_name=cookie_name)
        print("The response of LlmCatalog->llm_update_catalog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LlmCatalog->llm_update_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalog_id** | **int**|  | 
 **catalog_update** | [**CatalogUpdate**](CatalogUpdate.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**object**

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

