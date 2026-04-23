# neuland_hub_sdk.Storage

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storage_download_file**](Storage.md#storage_download_file) | **GET** /storage/{path} | Download File


# **storage_download_file**
> object storage_download_file(path, token)

Download File

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.Storage(api_client)
    path = 'path_example' # str | File path
    token = 'token_example' # str | Download token

    try:
        # Download File
        api_response = api_instance.storage_download_file(path, token)
        print("The response of Storage->storage_download_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Storage->storage_download_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| File path | 
 **token** | **str**| Download token | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

