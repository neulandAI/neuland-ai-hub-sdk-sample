# neuland_hub_sdk.Storage

All URIs are relative to *https://api.your-domain.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storage_download_file**](Storage.md#storage_download_file) | **GET** /storage/{path} | Download a file by signed token


# **storage_download_file**
> object storage_download_file(path, token)

Download a file by signed token

Stream a stored file as an attachment, authorized by a signed download token.

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.api.storage import Storage
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Your Hub API URL
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "https://api.your-domain.com"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = Storage(api_client)
    path = 'path_example' # str | Storage path of the file to download.
    token = 'token_example' # str | Signed download token authorizing access to the file.

    try:
        # Download a file by signed token
        api_response = api_instance.storage_download_file(path, token)
        print("The response of Storage->storage_download_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Storage->storage_download_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| Storage path of the file to download. | 
 **token** | **str**| Signed download token authorizing access to the file. | 

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
**400** | Token is malformed or missing required claims. |  -  |
**401** | Token issuer is not trusted. |  -  |
**404** | Token does not match the path, or the file no longer exists. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

