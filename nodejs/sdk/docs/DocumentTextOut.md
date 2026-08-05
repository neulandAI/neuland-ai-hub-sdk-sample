# DocumentTextOut

A document\'s extracted text — for audio, that text *is* the transcript.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | Extracted text, chunks joined by blank lines. Audio transcripts carry inline &#x60;[2:05] SPEAKER_00:&#x60; turn labels when diarization was available. | [default to undefined]

## Example

```typescript
import { DocumentTextOut } from 'neuland-hub-sdk';

const instance: DocumentTextOut = {
    text,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
