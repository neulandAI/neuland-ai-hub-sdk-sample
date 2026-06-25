# neuland_hub_sdk.Transcription

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transcriptions_create_transcription**](Transcription.md#transcriptions_create_transcription) | **POST** /transcriptions/ | Transcribe an audio file


# **transcriptions_create_transcription**
> TranscriptionOut transcriptions_create_transcription(file, cookie_name=cookie_name)

Transcribe an audio file

Transcribe an uploaded audio file via the configured Whisper provider.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.transcription_out import TranscriptionOut
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
    api_instance = neuland_hub_sdk.Transcription(api_client)
    file = None # bytes | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Transcribe an audio file
        api_response = api_instance.transcriptions_create_transcription(file, cookie_name=cookie_name)
        print("The response of Transcription->transcriptions_create_transcription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Transcription->transcriptions_create_transcription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **bytes**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**TranscriptionOut**](TranscriptionOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**413** | Audio file exceeds the 25 MB limit. |  -  |
**415** | Unsupported audio content type. |  -  |
**502** | Transcription provider request failed. |  -  |
**503** | No transcription provider is configured or available. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

