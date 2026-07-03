# TranscriptionOut

The response format from the transcription endpoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | Full transcribed text of the audio. | [default to undefined]
**language** | **string** |  | [default to undefined]
**duration_seconds** | **number** | Duration of the transcribed audio in seconds. | [default to undefined]
**segments** | [**Array&lt;TranscriptionSegment&gt;**](TranscriptionSegment.md) | Time-aligned, optionally diarized transcript segments. | [default to undefined]

## Example

```typescript
import { TranscriptionOut } from 'neuland-hub-sdk';

const instance: TranscriptionOut = {
    text,
    language,
    duration_seconds,
    segments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
