# neuland_hub_sdk.DocumentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_chat_document_documents_document_id_delete**](DocumentsApi.md#delete_chat_document_documents_document_id_delete) | **DELETE** /documents/{document_id} | Delete Chat Document
[**get_file_documents_document_id_get**](DocumentsApi.md#get_file_documents_document_id_get) | **GET** /documents/{document_id} | Get File
[**import_documents_documents_import_post**](DocumentsApi.md#import_documents_documents_import_post) | **POST** /documents/import | Import Documents
[**retry_document_documents_document_id_retry_post**](DocumentsApi.md#retry_document_documents_document_id_retry_post) | **POST** /documents/{document_id}/retry | Retry Document
[**unimport_documents_documents_import_delete**](DocumentsApi.md#unimport_documents_documents_import_delete) | **DELETE** /documents/import | Unimport Documents
[**upload_documents_documents_post**](DocumentsApi.md#upload_documents_documents_post) | **POST** /documents/ | Upload Documents


# **delete_chat_document_documents_document_id_delete**
> delete_chat_document_documents_document_id_delete(document_id, cookie_name=cookie_name)

Delete Chat Document

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
    api_instance = neuland_hub_sdk.DocumentsApi(api_client)
    document_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Chat Document
        api_instance.delete_chat_document_documents_document_id_delete(document_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DocumentsApi->delete_chat_document_documents_document_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **int**|  | 
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

# **get_file_documents_document_id_get**
> object get_file_documents_document_id_get(document_id, cookie_name=cookie_name)

Get File

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
    api_instance = neuland_hub_sdk.DocumentsApi(api_client)
    document_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Get File
        api_response = api_instance.get_file_documents_document_id_get(document_id, cookie_name=cookie_name)
        print("The response of DocumentsApi->get_file_documents_document_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentsApi->get_file_documents_document_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **int**|  | 
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

# **import_documents_documents_import_post**
> UUID import_documents_documents_import_post(src, drive_id, drive_item_ids, cookie_name=cookie_name, project_id=project_id, chat_id=chat_id, assistant_id=assistant_id, message_id=message_id, library_id=library_id)

Import Documents

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
    api_instance = neuland_hub_sdk.DocumentsApi(api_client)
    src = 'src_example' # str | Source type which the documents will be imported from
    drive_id = 'drive_id_example' # str | Sharepoint drive ID
    drive_item_ids = ['drive_item_ids_example'] # List[str] | Sharepoint item IDs of the documents to be imported
    cookie_name = 'cookie_name_example' # str |  (optional)
    project_id = 56 # int |  (optional)
    chat_id = 56 # int |  (optional)
    assistant_id = 56 # int |  (optional)
    message_id = 56 # int |  (optional)
    library_id = 56 # int |  (optional)

    try:
        # Import Documents
        api_response = api_instance.import_documents_documents_import_post(src, drive_id, drive_item_ids, cookie_name=cookie_name, project_id=project_id, chat_id=chat_id, assistant_id=assistant_id, message_id=message_id, library_id=library_id)
        print("The response of DocumentsApi->import_documents_documents_import_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentsApi->import_documents_documents_import_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **src** | **str**| Source type which the documents will be imported from | 
 **drive_id** | **str**| Sharepoint drive ID | 
 **drive_item_ids** | [**List[str]**](str.md)| Sharepoint item IDs of the documents to be imported | 
 **cookie_name** | **str**|  | [optional] 
 **project_id** | **int**|  | [optional] 
 **chat_id** | **int**|  | [optional] 
 **assistant_id** | **int**|  | [optional] 
 **message_id** | **int**|  | [optional] 
 **library_id** | **int**|  | [optional] 

### Return type

**UUID**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retry_document_documents_document_id_retry_post**
> retry_document_documents_document_id_retry_post(document_id, cookie_name=cookie_name)

Retry Document

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
    api_instance = neuland_hub_sdk.DocumentsApi(api_client)
    document_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Retry Document
        api_instance.retry_document_documents_document_id_retry_post(document_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DocumentsApi->retry_document_documents_document_id_retry_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **int**|  | 
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

# **unimport_documents_documents_import_delete**
> unimport_documents_documents_import_delete(src, drive_id, drive_item_ids, cookie_name=cookie_name, project_id=project_id, chat_id=chat_id, assistant_id=assistant_id)

Unimport Documents

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
    api_instance = neuland_hub_sdk.DocumentsApi(api_client)
    src = 'src_example' # str | Source type which the documents will be imported from
    drive_id = 'drive_id_example' # str | Sharepoint drive ID
    drive_item_ids = ['drive_item_ids_example'] # List[str] | Sharepoint item IDs of the documents to be unimported
    cookie_name = 'cookie_name_example' # str |  (optional)
    project_id = 56 # int |  (optional)
    chat_id = 56 # int |  (optional)
    assistant_id = 56 # int |  (optional)

    try:
        # Unimport Documents
        api_instance.unimport_documents_documents_import_delete(src, drive_id, drive_item_ids, cookie_name=cookie_name, project_id=project_id, chat_id=chat_id, assistant_id=assistant_id)
    except Exception as e:
        print("Exception when calling DocumentsApi->unimport_documents_documents_import_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **src** | **str**| Source type which the documents will be imported from | 
 **drive_id** | **str**| Sharepoint drive ID | 
 **drive_item_ids** | [**List[str]**](str.md)| Sharepoint item IDs of the documents to be unimported | 
 **cookie_name** | **str**|  | [optional] 
 **project_id** | **int**|  | [optional] 
 **chat_id** | **int**|  | [optional] 
 **assistant_id** | **int**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_documents_documents_post**
> List[Document] upload_documents_documents_post(files, cookie_name=cookie_name, project_id=project_id, chat_id=chat_id, assistant_id=assistant_id, message_id=message_id, library_id=library_id)

Upload Documents

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.document import Document
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
    api_instance = neuland_hub_sdk.DocumentsApi(api_client)
    files = ['files_example'] # List[str] | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    project_id = 56 # int |  (optional)
    chat_id = 56 # int |  (optional)
    assistant_id = 56 # int |  (optional)
    message_id = 56 # int |  (optional)
    library_id = 56 # int |  (optional)

    try:
        # Upload Documents
        api_response = api_instance.upload_documents_documents_post(files, cookie_name=cookie_name, project_id=project_id, chat_id=chat_id, assistant_id=assistant_id, message_id=message_id, library_id=library_id)
        print("The response of DocumentsApi->upload_documents_documents_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentsApi->upload_documents_documents_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **files** | [**List[str]**](str.md)|  | 
 **cookie_name** | **str**|  | [optional] 
 **project_id** | **int**|  | [optional] 
 **chat_id** | **int**|  | [optional] 
 **assistant_id** | **int**|  | [optional] 
 **message_id** | **int**|  | [optional] 
 **library_id** | **int**|  | [optional] 

### Return type

[**List[Document]**](Document.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

