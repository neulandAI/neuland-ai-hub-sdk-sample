# neuland_hub_sdk.Chat

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**chats_add_library_to_chat**](Chat.md#chats_add_library_to_chat) | **POST** /chats/{chat_id}/libraries/{library_id} | Add a library to a chat
[**chats_cancel_message**](Chat.md#chats_cancel_message) | **POST** /chats/{chat_id}/cancel | Cancel in-progress generation
[**chats_deactivate_documents**](Chat.md#chats_deactivate_documents) | **POST** /chats/{chat_id}/inactive-documents | Deactivate documents in a chat
[**chats_list_chat_message_turns**](Chat.md#chats_list_chat_message_turns) | **GET** /chats/{chat_id}/turns | List message turns for a chat
[**chats_remove_chat**](Chat.md#chats_remove_chat) | **DELETE** /chats/{chat_id} | Delete a chat
[**chats_remove_inactive_documents**](Chat.md#chats_remove_inactive_documents) | **DELETE** /chats/{chat_id}/inactive-documents | Reactivate documents in a chat
[**chats_remove_library_from_chat**](Chat.md#chats_remove_library_from_chat) | **DELETE** /chats/{chat_id}/libraries/{library_id} | Remove a library from a chat
[**chats_summerize_chat**](Chat.md#chats_summerize_chat) | **GET** /chats/{chat_id}/summary | Summarize a chat
[**chats_update_chat**](Chat.md#chats_update_chat) | **PATCH** /chats/{chat_id} | Update a chat


# **chats_add_library_to_chat**
> ChatLibrary chats_add_library_to_chat(chat_id, library_id, cookie_name=cookie_name)

Add a library to a chat

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
    chat_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | ID of the chat.
    library_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | ID of the library to enable.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Add a library to a chat
        api_response = api_instance.chats_add_library_to_chat(chat_id, library_id, cookie_name=cookie_name)
        print("The response of Chat->chats_add_library_to_chat:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Chat->chats_add_library_to_chat: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **UUID**| ID of the chat. | 
 **library_id** | **UUID**| ID of the library to enable. | 
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
**401** | Missing or invalid authentication. |  -  |
**403** | No access to the chat or the library. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chats_cancel_message**
> object chats_cancel_message(chat_id, cookie_name=cookie_name)

Cancel in-progress generation

Cancel any pending or streaming message generation in the chat.

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
    chat_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | ID of the chat.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Cancel in-progress generation
        api_response = api_instance.chats_cancel_message(chat_id, cookie_name=cookie_name)
        print("The response of Chat->chats_cancel_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Chat->chats_cancel_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **UUID**| ID of the chat. | 
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
**401** | Missing or invalid authentication. |  -  |
**403** | No access to this chat. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chats_deactivate_documents**
> List[ChatInactiveDocumentOut] chats_deactivate_documents(chat_id, document_ids, cookie_name=cookie_name)

Deactivate documents in a chat

Exclude the given documents from the chat's retrieval context.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.chat_inactive_document_out import ChatInactiveDocumentOut
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
    chat_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | ID of the chat.
    document_ids = None # List[UUID] | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Deactivate documents in a chat
        api_response = api_instance.chats_deactivate_documents(chat_id, document_ids, cookie_name=cookie_name)
        print("The response of Chat->chats_deactivate_documents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Chat->chats_deactivate_documents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **UUID**| ID of the chat. | 
 **document_ids** | [**List[UUID]**](UUID.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[ChatInactiveDocumentOut]**](ChatInactiveDocumentOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | No access to this chat. |  -  |
**404** | Chat or one of the documents does not exist. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chats_list_chat_message_turns**
> object chats_list_chat_message_turns(chat_id, limit=limit, offset=offset, cookie_name=cookie_name)

List message turns for a chat

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
    chat_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the chat.
    limit = 50 # int | Max turns to return (newest first). (optional) (default to 50)
    offset = 0 # int | Number of newest turns to skip. (optional) (default to 0)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # List message turns for a chat
        api_response = api_instance.chats_list_chat_message_turns(chat_id, limit=limit, offset=offset, cookie_name=cookie_name)
        print("The response of Chat->chats_list_chat_message_turns:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Chat->chats_list_chat_message_turns: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **UUID**| Public id of the chat. | 
 **limit** | **int**| Max turns to return (newest first). | [optional] [default to 50]
 **offset** | **int**| Number of newest turns to skip. | [optional] [default to 0]
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
**403** | No access to this chat. |  -  |
**404** | Chat does not exist. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chats_remove_chat**
> chats_remove_chat(chat_id, cookie_name=cookie_name)

Delete a chat

Delete a chat and its messages.

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
    chat_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | ID of the chat to delete.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete a chat
        api_instance.chats_remove_chat(chat_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Chat->chats_remove_chat: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **UUID**| ID of the chat to delete. | 
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
**403** | No access to this chat. |  -  |
**404** | No chat exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chats_remove_inactive_documents**
> BulkResult chats_remove_inactive_documents(chat_id, document_ids, cookie_name=cookie_name)

Reactivate documents in a chat

Re-include previously deactivated documents in the chat's retrieval context.

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
    chat_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | ID of the chat.
    document_ids = None # List[UUID] | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Reactivate documents in a chat
        api_response = api_instance.chats_remove_inactive_documents(chat_id, document_ids, cookie_name=cookie_name)
        print("The response of Chat->chats_remove_inactive_documents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Chat->chats_remove_inactive_documents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **UUID**| ID of the chat. | 
 **document_ids** | [**List[UUID]**](UUID.md)|  | 
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
**401** | Missing or invalid authentication. |  -  |
**403** | No access to this chat. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chats_remove_library_from_chat**
> chats_remove_library_from_chat(chat_id, library_id, cookie_name=cookie_name)

Remove a library from a chat

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
    chat_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | ID of the chat.
    library_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | ID of the library to disable.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove a library from a chat
        api_instance.chats_remove_library_from_chat(chat_id, library_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Chat->chats_remove_library_from_chat: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **UUID**| ID of the chat. | 
 **library_id** | **UUID**| ID of the library to disable. | 
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
**403** | No access to this chat. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chats_summerize_chat**
> str chats_summerize_chat(chat_id, cookie_name=cookie_name)

Summarize a chat

Generate a short LLM summary of the chat's recent conversation.

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
    chat_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | ID of the chat to summarize.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Summarize a chat
        api_response = api_instance.chats_summerize_chat(chat_id, cookie_name=cookie_name)
        print("The response of Chat->chats_summerize_chat:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Chat->chats_summerize_chat: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **UUID**| ID of the chat to summarize. | 
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
**401** | Missing or invalid authentication. |  -  |
**403** | No access to the chat, or usage budget exceeded. |  -  |
**404** | Chat or owning user does not exist. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chats_update_chat**
> Chat chats_update_chat(chat_id, chat_in, cookie_name=cookie_name)

Update a chat

Update settings of an existing chat (name, model, temperature, etc.).

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
    chat_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | ID of the chat to update.
    chat_in = neuland_hub_sdk.ChatIn() # ChatIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update a chat
        api_response = api_instance.chats_update_chat(chat_id, chat_in, cookie_name=cookie_name)
        print("The response of Chat->chats_update_chat:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Chat->chats_update_chat: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **UUID**| ID of the chat to update. | 
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
**401** | Missing or invalid authentication. |  -  |
**403** | No access to this chat. |  -  |
**404** | No chat exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

