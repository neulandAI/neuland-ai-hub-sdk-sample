# neuland_hub_sdk.Chat

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**chats_add_library_to_chat**](Chat.md#chats_add_library_to_chat) | **POST** /chats/{chat_id}/libraries/{library_id} | Add Library To Chat
[**chats_cancel_message**](Chat.md#chats_cancel_message) | **POST** /chats/{chat_id}/cancel | Cancel Message
[**chats_deactivate_documents**](Chat.md#chats_deactivate_documents) | **POST** /chats/{chat_id}/inactive-documents | Deactivate Documents
[**chats_remove_chat**](Chat.md#chats_remove_chat) | **DELETE** /chats/{chat_id} | Remove Chat
[**chats_remove_inactive_documents**](Chat.md#chats_remove_inactive_documents) | **DELETE** /chats/{chat_id}/inactive-documents | Remove Inactive Documents
[**chats_remove_library_from_chat**](Chat.md#chats_remove_library_from_chat) | **DELETE** /chats/{chat_id}/libraries/{library_id} | Remove Library From Chat
[**chats_summerize_chat**](Chat.md#chats_summerize_chat) | **GET** /chats/{chat_id}/summary | Summerize Chat
[**chats_update_chat**](Chat.md#chats_update_chat) | **PATCH** /chats/{chat_id} | Update Chat
[**chats_update_chat_tool_settings**](Chat.md#chats_update_chat_tool_settings) | **PUT** /chats/{chat_id}/tools/{tool_id} | Update Chat Tool Settings


# **chats_add_library_to_chat**
> ChatLibrary chats_add_library_to_chat(chat_id, library_id, cookie_name=cookie_name)

Add Library To Chat

Enables a library in a chat by creating a new association

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.chat_library import ChatLibrary
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
    api_instance = neuland_hub_sdk.Chat(api_client)
    chat_id = 56 # int | 
    library_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Add Library To Chat
        api_response = api_instance.chats_add_library_to_chat(chat_id, library_id, cookie_name=cookie_name)
        print("The response of Chat->chats_add_library_to_chat:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Chat->chats_add_library_to_chat: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **int**|  | 
 **library_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**ChatLibrary**](ChatLibrary.md)

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

# **chats_cancel_message**
> object chats_cancel_message(chat_id, cookie_name=cookie_name)

Cancel Message

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
    api_instance = neuland_hub_sdk.Chat(api_client)
    chat_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Cancel Message
        api_response = api_instance.chats_cancel_message(chat_id, cookie_name=cookie_name)
        print("The response of Chat->chats_cancel_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Chat->chats_cancel_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **int**|  | 
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

# **chats_deactivate_documents**
> List[ChatInactiveDocument] chats_deactivate_documents(chat_id, document_ids, cookie_name=cookie_name)

Deactivate Documents

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.chat_inactive_document import ChatInactiveDocument
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
    api_instance = neuland_hub_sdk.Chat(api_client)
    chat_id = 56 # int | 
    document_ids = [56] # List[int] | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Deactivate Documents
        api_response = api_instance.chats_deactivate_documents(chat_id, document_ids, cookie_name=cookie_name)
        print("The response of Chat->chats_deactivate_documents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Chat->chats_deactivate_documents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **int**|  | 
 **document_ids** | [**List[int]**](int.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[ChatInactiveDocument]**](ChatInactiveDocument.md)

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

# **chats_remove_chat**
> chats_remove_chat(chat_id, cookie_name=cookie_name)

Remove Chat

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
    api_instance = neuland_hub_sdk.Chat(api_client)
    chat_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove Chat
        api_instance.chats_remove_chat(chat_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Chat->chats_remove_chat: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **int**|  | 
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

# **chats_remove_inactive_documents**
> BulkResult chats_remove_inactive_documents(chat_id, document_ids, cookie_name=cookie_name)

Remove Inactive Documents

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.bulk_result import BulkResult
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
    api_instance = neuland_hub_sdk.Chat(api_client)
    chat_id = 56 # int | 
    document_ids = [56] # List[int] | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove Inactive Documents
        api_response = api_instance.chats_remove_inactive_documents(chat_id, document_ids, cookie_name=cookie_name)
        print("The response of Chat->chats_remove_inactive_documents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Chat->chats_remove_inactive_documents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **int**|  | 
 **document_ids** | [**List[int]**](int.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**BulkResult**](BulkResult.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chats_remove_library_from_chat**
> chats_remove_library_from_chat(chat_id, library_id, cookie_name=cookie_name)

Remove Library From Chat

Disables a library from a chat by removing the association

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
    api_instance = neuland_hub_sdk.Chat(api_client)
    chat_id = 56 # int | 
    library_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove Library From Chat
        api_instance.chats_remove_library_from_chat(chat_id, library_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Chat->chats_remove_library_from_chat: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **int**|  | 
 **library_id** | **int**|  | 
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

# **chats_summerize_chat**
> str chats_summerize_chat(chat_id, cookie_name=cookie_name)

Summerize Chat

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
    api_instance = neuland_hub_sdk.Chat(api_client)
    chat_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Summerize Chat
        api_response = api_instance.chats_summerize_chat(chat_id, cookie_name=cookie_name)
        print("The response of Chat->chats_summerize_chat:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Chat->chats_summerize_chat: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**str**

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

# **chats_update_chat**
> Chat chats_update_chat(chat_id, chat_in, cookie_name=cookie_name)

Update Chat

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.chat import Chat
from neuland_hub_sdk.models.chat_in import ChatIn
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
    api_instance = neuland_hub_sdk.Chat(api_client)
    chat_id = 56 # int | 
    chat_in = neuland_hub_sdk.ChatIn() # ChatIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Chat
        api_response = api_instance.chats_update_chat(chat_id, chat_in, cookie_name=cookie_name)
        print("The response of Chat->chats_update_chat:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Chat->chats_update_chat: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **int**|  | 
 **chat_in** | [**ChatIn**](ChatIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Chat**](Chat.md)

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

# **chats_update_chat_tool_settings**
> ChatToolSettingsOut chats_update_chat_tool_settings(chat_id, tool_id, chat_tool_settings_update, cookie_name=cookie_name)

Update Chat Tool Settings

Update tool settings for a chat (upsert: create or update).

- Validates tool_id exists in Tool table
- Validates tool is enabled for the tenant
- Creates new ChatToolSettings entry if it doesn't exist
- Updates existing entry if it exists

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.chat_tool_settings_out import ChatToolSettingsOut
from neuland_hub_sdk.models.chat_tool_settings_update import ChatToolSettingsUpdate
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
    api_instance = neuland_hub_sdk.Chat(api_client)
    chat_id = 56 # int | 
    tool_id = 56 # int | 
    chat_tool_settings_update = neuland_hub_sdk.ChatToolSettingsUpdate() # ChatToolSettingsUpdate | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Chat Tool Settings
        api_response = api_instance.chats_update_chat_tool_settings(chat_id, tool_id, chat_tool_settings_update, cookie_name=cookie_name)
        print("The response of Chat->chats_update_chat_tool_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Chat->chats_update_chat_tool_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **int**|  | 
 **tool_id** | **int**|  | 
 **chat_tool_settings_update** | [**ChatToolSettingsUpdate**](ChatToolSettingsUpdate.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**ChatToolSettingsOut**](ChatToolSettingsOut.md)

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

