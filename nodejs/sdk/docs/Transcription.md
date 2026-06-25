# Transcription

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**transcriptionsCreateTranscription**](#transcriptionscreatetranscription) | **POST** /transcriptions/ | Transcribe an audio file|

# **transcriptionsCreateTranscription**
> TranscriptionOut transcriptionsCreateTranscription()

Transcribe an uploaded audio file via the configured Whisper provider.

### Example

```typescript
import {
    Transcription,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Transcription(configuration);

let file: File; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.transcriptionsCreateTranscription(
    file,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**TranscriptionOut**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**413** | Audio file exceeds the 25 MB limit. |  -  |
|**415** | Unsupported audio content type. |  -  |
|**502** | Transcription provider request failed. |  -  |
|**503** | No transcription provider is configured or available. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

