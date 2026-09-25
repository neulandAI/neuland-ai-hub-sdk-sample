# neuland_hub_sdk.Document

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**documents_delete_chat_document**](Document.md#documents_delete_chat_document) | **DELETE** /documents/{document_id} | Delete a document
[**documents_document_usage**](Document.md#documents_document_usage) | **POST** /documents/usage | Document counts and storage bytes by dimension
[**documents_get_file**](Document.md#documents_get_file) | **GET** /documents/{document_id} | Download a document
[**documents_get_text**](Document.md#documents_get_text) | **GET** /documents/{document_id}/text | Get a document&#39;s extracted text
[**documents_import_documents**](Document.md#documents_import_documents) | **POST** /documents/import | Import documents from a connected source
[**documents_retry_document**](Document.md#documents_retry_document) | **POST** /documents/{document_id}/retry | Retry document processing
[**documents_unimport_documents**](Document.md#documents_unimport_documents) | **DELETE** /documents/import | Remove imported documents
[**documents_upload_documents**](Document.md#documents_upload_documents) | **POST** /documents/ | Upload documents


# **documents_delete_chat_document**
> documents_delete_chat_document(document_id, cookie_name=cookie_name)

Delete a document

Delete a document and its associated content.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.document import Document
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


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = Document(api_client)
    document_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete a document
        api_instance.documents_delete_chat_document(document_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Document->documents_delete_chat_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **UUID**|  | 
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
**401** | Missing or invalid authentication. |  -  |
**403** | Caller may not access this document. |  -  |
**404** | No document exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **documents_document_usage**
> DocumentUsageResponse documents_document_usage(document_usage_request, cookie_name=cookie_name)

Document counts and storage bytes by dimension

Aggregate the tenant's document storage by dimension and time bucket.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.document import Document
from neuland_hub_sdk.models.document_usage_request import DocumentUsageRequest
from neuland_hub_sdk.models.document_usage_response import DocumentUsageResponse
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


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = Document(api_client)
    document_usage_request = neuland_hub_sdk.DocumentUsageRequest() # DocumentUsageRequest | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Document counts and storage bytes by dimension
        api_response = api_instance.documents_document_usage(document_usage_request, cookie_name=cookie_name)
        print("The response of Document->documents_document_usage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Document->documents_document_usage: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_usage_request** | [**DocumentUsageRequest**](DocumentUsageRequest.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**DocumentUsageResponse**](DocumentUsageResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | Too many group_by dimensions, or a truncated bucketed result. |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Admin privileges required, or user-level analytics is not enabled for the tenant. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **documents_get_file**
> object documents_get_file(document_id, cookie_name=cookie_name)

Download a document

Stream a document's content as an attachment to authorized callers.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.document import Document
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


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = Document(api_client)
    document_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Download a document
        api_response = api_instance.documents_get_file(document_id, cookie_name=cookie_name)
        print("The response of Document->documents_get_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Document->documents_get_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **UUID**|  | 
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
**401** | Missing or invalid authentication. |  -  |
**403** | Caller may not access this document. |  -  |
**404** | No document exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **documents_get_text**
> DocumentTextOut documents_get_text(document_id, cookie_name=cookie_name)

Get a document's extracted text

Return the text extracted from a document by the processing pipeline.

Type-agnostic: a PDF yields its extracted text, an audio/video upload yields
its transcript — both are stored in the same place by the same pipeline.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.document import Document
from neuland_hub_sdk.models.document_text_out import DocumentTextOut
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


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = Document(api_client)
    document_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Get a document's extracted text
        api_response = api_instance.documents_get_text(document_id, cookie_name=cookie_name)
        print("The response of Document->documents_get_text:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Document->documents_get_text: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **UUID**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**DocumentTextOut**](DocumentTextOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Caller may not access this document. |  -  |
**404** | No such document, or its text is not extracted yet. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **documents_import_documents**
> UUID documents_import_documents(src, drive_id, drive_item_ids, cookie_name=cookie_name, project_id=project_id, chat_id=chat_id, assistant_id=assistant_id, message_id=message_id, library_id=library_id)

Import documents from a connected source

Import drive items from a connected source as documents; returns an import token.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.document import Document
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


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = Document(api_client)
    src = 'src_example' # str | Source type which the documents will be imported from
    drive_id = 'drive_id_example' # str | Drive ID
    drive_item_ids = ['drive_item_ids_example'] # List[str] | Item IDs of the documents to be imported
    cookie_name = 'cookie_name_example' # str |  (optional)
    project_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    chat_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    assistant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    message_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    library_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)

    try:
        # Import documents from a connected source
        api_response = api_instance.documents_import_documents(src, drive_id, drive_item_ids, cookie_name=cookie_name, project_id=project_id, chat_id=chat_id, assistant_id=assistant_id, message_id=message_id, library_id=library_id)
        print("The response of Document->documents_import_documents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Document->documents_import_documents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **src** | **str**| Source type which the documents will be imported from | 
 **drive_id** | **str**| Drive ID | 
 **drive_item_ids** | [**List[str]**](str.md)| Item IDs of the documents to be imported | 
 **cookie_name** | **str**|  | [optional] 
 **project_id** | **UUID**|  | [optional] 
 **chat_id** | **UUID**|  | [optional] 
 **assistant_id** | **UUID**|  | [optional] 
 **message_id** | **UUID**|  | [optional] 
 **library_id** | **UUID**|  | [optional] 

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
**400** | The provided source type is not supported. |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Usage limit exceeded, or caller lacks access to the target entity. |  -  |
**404** | The referenced project, chat, assistant, or library does not exist. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **documents_retry_document**
> documents_retry_document(document_id, cookie_name=cookie_name)

Retry document processing

Re-run processing for a previously failed or stuck document.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.document import Document
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


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = Document(api_client)
    document_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Retry document processing
        api_instance.documents_retry_document(document_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Document->documents_retry_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **UUID**|  | 
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
**401** | Missing or invalid authentication. |  -  |
**403** | Usage limit exceeded, or caller may not access this document. |  -  |
**404** | No document exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **documents_unimport_documents**
> documents_unimport_documents(src, drive_id, drive_item_ids, cookie_name=cookie_name, project_id=project_id, chat_id=chat_id, assistant_id=assistant_id)

Remove imported documents

Delete documents previously imported from a source for the given entity.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.document import Document
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


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = Document(api_client)
    src = 'src_example' # str | Source type which the documents will be imported from
    drive_id = 'drive_id_example' # str | Sharepoint drive ID
    drive_item_ids = ['drive_item_ids_example'] # List[str] | Sharepoint item IDs of the documents to be unimported
    cookie_name = 'cookie_name_example' # str |  (optional)
    project_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    chat_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    assistant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)

    try:
        # Remove imported documents
        api_instance.documents_unimport_documents(src, drive_id, drive_item_ids, cookie_name=cookie_name, project_id=project_id, chat_id=chat_id, assistant_id=assistant_id)
    except Exception as e:
        print("Exception when calling Document->documents_unimport_documents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **src** | **str**| Source type which the documents will be imported from | 
 **drive_id** | **str**| Sharepoint drive ID | 
 **drive_item_ids** | [**List[str]**](str.md)| Sharepoint item IDs of the documents to be unimported | 
 **cookie_name** | **str**|  | [optional] 
 **project_id** | **UUID**|  | [optional] 
 **chat_id** | **UUID**|  | [optional] 
 **assistant_id** | **UUID**|  | [optional] 

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
**400** | The provided source type is not supported. |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Caller lacks access to the target entity. |  -  |
**404** | The referenced project, chat, or assistant does not exist. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **documents_upload_documents**
> List[Document] documents_upload_documents(files, cookie_name=cookie_name, project_id=project_id, chat_id=chat_id, assistant_id=assistant_id, message_id=message_id, library_id=library_id)

Upload documents

Upload files as documents and kick off async processing for the given entity.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.document import Document
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


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = Document(api_client)
    files = None # List[bytes] | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    project_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    chat_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    assistant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    message_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    library_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)

    try:
        # Upload documents
        api_response = api_instance.documents_upload_documents(files, cookie_name=cookie_name, project_id=project_id, chat_id=chat_id, assistant_id=assistant_id, message_id=message_id, library_id=library_id)
        print("The response of Document->documents_upload_documents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Document->documents_upload_documents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **files** | **List[bytes]**|  | 
 **cookie_name** | **str**|  | [optional] 
 **project_id** | **UUID**|  | [optional] 
 **chat_id** | **UUID**|  | [optional] 
 **assistant_id** | **UUID**|  | [optional] 
 **message_id** | **UUID**|  | [optional] 
 **library_id** | **UUID**|  | [optional] 

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
**401** | Missing or invalid authentication. |  -  |
**403** | Usage limit exceeded, or caller lacks access to the target entity. |  -  |
**404** | The referenced project, chat, assistant, or library does not exist. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

