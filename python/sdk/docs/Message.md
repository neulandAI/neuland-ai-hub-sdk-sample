# neuland_hub_sdk.Message

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**messages_rephrase_message**](Message.md#messages_rephrase_message) | **GET** /messages/{message_id}/rephrase | Rephrase Message
[**messages_translate_message**](Message.md#messages_translate_message) | **GET** /messages/{message_id}/translate | Translate Message


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

