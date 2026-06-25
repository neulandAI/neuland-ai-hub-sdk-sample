# TranscriptionOut

The response format from the transcription endpoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | Transcribed text of the audio. | [default to undefined]
**language** | **string** | Detected language of the audio (ISO 639-1 or language name). | [default to undefined]
**duration_seconds** | **number** | Duration of the audio in seconds. | [default to undefined]

## Example

```typescript
import { TranscriptionOut } from 'neuland-hub-sdk';

const instance: TranscriptionOut = {
    text,
    language,
    duration_seconds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
