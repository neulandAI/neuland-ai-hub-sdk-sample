# neuland_hub_sdk.SimpleChatApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_supported_languages_simple_chat_languages_get**](SimpleChatApi.md#get_supported_languages_simple_chat_languages_get) | **GET** /simple_chat/languages | Get Supported Languages
[**simple_chat_simple_chat_post**](SimpleChatApi.md#simple_chat_simple_chat_post) | **POST** /simple_chat/ | Simple Chat


# **get_supported_languages_simple_chat_languages_get**
> object get_supported_languages_simple_chat_languages_get(cookie_name=cookie_name)

Get Supported Languages

Get list of supported languages for the help system.

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
    api_instance = neuland_hub_sdk.SimpleChatApi(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Get Supported Languages
        api_response = api_instance.get_supported_languages_simple_chat_languages_get(cookie_name=cookie_name)
        print("The response of SimpleChatApi->get_supported_languages_simple_chat_languages_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SimpleChatApi->get_supported_languages_simple_chat_languages_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

# **simple_chat_simple_chat_post**
> SimpleMessageOut simple_chat_simple_chat_post(simple_message_in, cookie_name=cookie_name)

Simple Chat

Simple chat endpoint that handles both help requests and feedback.
Automatically detects whether the message is a help request or feedback.
Maintains conversation history for context.
Supports multiple languages (DE/EN) for help responses.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.simple_message_in import SimpleMessageIn
from neuland_hub_sdk.models.simple_message_out import SimpleMessageOut
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
    api_instance = neuland_hub_sdk.SimpleChatApi(api_client)
    simple_message_in = neuland_hub_sdk.SimpleMessageIn() # SimpleMessageIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Simple Chat
        api_response = api_instance.simple_chat_simple_chat_post(simple_message_in, cookie_name=cookie_name)
        print("The response of SimpleChatApi->simple_chat_simple_chat_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SimpleChatApi->simple_chat_simple_chat_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **simple_message_in** | [**SimpleMessageIn**](SimpleMessageIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**SimpleMessageOut**](SimpleMessageOut.md)

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

