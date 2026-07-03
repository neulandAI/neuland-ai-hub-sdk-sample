# neuland_hub_sdk.LlmCatalog

All URIs are relative to *https://api.your-domain.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**llm_create_catalog**](LlmCatalog.md#llm_create_catalog) | **POST** /llm/catalog | Create a catalog entry
[**llm_delete_catalog**](LlmCatalog.md#llm_delete_catalog) | **DELETE** /llm/catalog/{catalog_id} | Delete a catalog entry
[**llm_update_catalog**](LlmCatalog.md#llm_update_catalog) | **PATCH** /llm/catalog/{catalog_id} | Update a catalog entry


# **llm_create_catalog**
> object llm_create_catalog(catalog_in, cookie_name=cookie_name)

Create a catalog entry

Register a new LLM in the model catalog.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.catalog_in import CatalogIn
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
    api_instance = neuland_hub_sdk.LlmCatalog(api_client)
    catalog_in = neuland_hub_sdk.CatalogIn() # CatalogIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create a catalog entry
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

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Platform operator privileges required. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llm_delete_catalog**
> llm_delete_catalog(catalog_id, cookie_name=cookie_name)

Delete a catalog entry

Remove a catalog entry permanently.

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
    api_instance = neuland_hub_sdk.LlmCatalog(api_client)
    catalog_id = 56 # int | ID of the catalog entry to delete.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete a catalog entry
        api_instance.llm_delete_catalog(catalog_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling LlmCatalog->llm_delete_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalog_id** | **int**| ID of the catalog entry to delete. | 
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
**403** | Platform operator privileges required. |  -  |
**404** | No catalog entry exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llm_update_catalog**
> object llm_update_catalog(catalog_id, catalog_update, cookie_name=cookie_name)

Update a catalog entry

Update fields of an existing catalog entry.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.catalog_update import CatalogUpdate
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
    api_instance = neuland_hub_sdk.LlmCatalog(api_client)
    catalog_id = 56 # int | ID of the catalog entry to update.
    catalog_update = neuland_hub_sdk.CatalogUpdate() # CatalogUpdate | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update a catalog entry
        api_response = api_instance.llm_update_catalog(catalog_id, catalog_update, cookie_name=cookie_name)
        print("The response of LlmCatalog->llm_update_catalog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LlmCatalog->llm_update_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalog_id** | **int**| ID of the catalog entry to update. | 
 **catalog_update** | [**CatalogUpdate**](CatalogUpdate.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**object**

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
**403** | Platform operator privileges required. |  -  |
**404** | No catalog entry exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

