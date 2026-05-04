# neuland_hub_sdk.Message

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**messages_convert_message**](Message.md#messages_convert_message) | **GET** /messages/{message_id}/convert | Convert Message
[**messages_create_message**](Message.md#messages_create_message) | **POST** /messages/ | Create Message
[**messages_get_message**](Message.md#messages_get_message) | **GET** /messages/{message_id} | Get Message
[**messages_rephrase_message**](Message.md#messages_rephrase_message) | **GET** /messages/{message_id}/rephrase | Rephrase Message
[**messages_submit_message**](Message.md#messages_submit_message) | **POST** /messages/submit | Submit Message
[**messages_translate_message**](Message.md#messages_translate_message) | **GET** /messages/{message_id}/translate | Translate Message


# **messages_convert_message**
> object messages_convert_message(message_id, format, cookie_name=cookie_name)

Convert Message

Convert a message to various document formats.

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
    api_instance = neuland_hub_sdk.Message(api_client)
    message_id = 56 # int | 
    format = neuland_hub_sdk.OutputFormat() # OutputFormat | Output format
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Convert Message
        api_response = api_instance.messages_convert_message(message_id, format, cookie_name=cookie_name)
        print("The response of Message->messages_convert_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Message->messages_convert_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message_id** | **int**|  | 
 **format** | [**OutputFormat**](.md)| Output format | 
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

# **messages_create_message**
> Message messages_create_message(message_in, cookie_name=cookie_name)

Create Message

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.message import Message
from neuland_hub_sdk.models.message_in import MessageIn
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
    api_instance = neuland_hub_sdk.Message(api_client)
    message_in = neuland_hub_sdk.MessageIn() # MessageIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Message
        api_response = api_instance.messages_create_message(message_in, cookie_name=cookie_name)
        print("The response of Message->messages_create_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Message->messages_create_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message_in** | [**MessageIn**](MessageIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Message**](Message.md)

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

# **messages_get_message**
> Message messages_get_message(message_id, cookie_name=cookie_name)

Get Message

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.message import Message
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
    api_instance = neuland_hub_sdk.Message(api_client)
    message_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Get Message
        api_response = api_instance.messages_get_message(message_id, cookie_name=cookie_name)
        print("The response of Message->messages_get_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Message->messages_get_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Message**](Message.md)

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

# **messages_rephrase_message**
> Translation messages_rephrase_message(message_id, style, cookie_name=cookie_name)

Rephrase Message

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.translation import Translation
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
    api_instance = neuland_hub_sdk.Message(api_client)
    message_id = 56 # int | 
    style = neuland_hub_sdk.RephraseStyleEnum() # RephraseStyleEnum | Style of rephrasing: 'same' (same length), 'short' (shorter), or 'long' (longer)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Rephrase Message
        api_response = api_instance.messages_rephrase_message(message_id, style, cookie_name=cookie_name)
        print("The response of Message->messages_rephrase_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Message->messages_rephrase_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message_id** | **int**|  | 
 **style** | [**RephraseStyleEnum**](.md)| Style of rephrasing: &#39;same&#39; (same length), &#39;short&#39; (shorter), or &#39;long&#39; (longer) | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Translation**](Translation.md)

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

# **messages_submit_message**
> Message messages_submit_message(cookie_name=cookie_name, content=content, project_id=project_id, chat_id=chat_id, document_ids=document_ids, updated_at=updated_at, files=files, chat_temperature=chat_temperature, chat_similarity_top_k=chat_similarity_top_k, chat_system_prompt=chat_system_prompt, assistant_id=assistant_id, model=model, tool_ids=tool_ids, private=private, library_id=library_id)

Submit Message

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.message import Message
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
    api_instance = neuland_hub_sdk.Message(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)
    content = 'content_example' # str |  (optional)
    project_id = 56 # int |  (optional)
    chat_id = 56 # int |  (optional)
    document_ids = [56] # List[int] |  (optional)
    updated_at = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    files = None # List[bytes] |  (optional)
    chat_temperature = 3.4 # float |  (optional)
    chat_similarity_top_k = 56 # int |  (optional)
    chat_system_prompt = 'chat_system_prompt_example' # str |  (optional)
    assistant_id = 56 # int |  (optional)
    model = 'model_example' # str |  (optional)
    tool_ids = [56] # List[int] |  (optional)
    private = False # bool |  (optional) (default to False)
    library_id = 56 # int |  (optional)

    try:
        # Submit Message
        api_response = api_instance.messages_submit_message(cookie_name=cookie_name, content=content, project_id=project_id, chat_id=chat_id, document_ids=document_ids, updated_at=updated_at, files=files, chat_temperature=chat_temperature, chat_similarity_top_k=chat_similarity_top_k, chat_system_prompt=chat_system_prompt, assistant_id=assistant_id, model=model, tool_ids=tool_ids, private=private, library_id=library_id)
        print("The response of Message->messages_submit_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Message->messages_submit_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cookie_name** | **str**|  | [optional] 
 **content** | **str**|  | [optional] 
 **project_id** | **int**|  | [optional] 
 **chat_id** | **int**|  | [optional] 
 **document_ids** | [**List[int]**](int.md)|  | [optional] 
 **updated_at** | **datetime**|  | [optional] 
 **files** | **List[bytes]**|  | [optional] 
 **chat_temperature** | **float**|  | [optional] 
 **chat_similarity_top_k** | **int**|  | [optional] 
 **chat_system_prompt** | **str**|  | [optional] 
 **assistant_id** | **int**|  | [optional] 
 **model** | **str**|  | [optional] 
 **tool_ids** | [**List[int]**](int.md)|  | [optional] 
 **private** | **bool**|  | [optional] [default to False]
 **library_id** | **int**|  | [optional] 

### Return type

[**Message**](Message.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **messages_translate_message**
> Translation messages_translate_message(message_id, lang, cookie_name=cookie_name)

Translate Message

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.translation import Translation
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
    api_instance = neuland_hub_sdk.Message(api_client)
    message_id = 56 # int | 
    lang = 'lang_example' # str | Target language. Preferably RFC 5646 format.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Translate Message
        api_response = api_instance.messages_translate_message(message_id, lang, cookie_name=cookie_name)
        print("The response of Message->messages_translate_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Message->messages_translate_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message_id** | **int**|  | 
 **lang** | **str**| Target language. Preferably RFC 5646 format. | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Translation**](Translation.md)

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

