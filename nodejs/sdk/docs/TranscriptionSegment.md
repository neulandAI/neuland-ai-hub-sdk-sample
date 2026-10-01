# TranscriptionSegment

A single time-aligned segment of a transcript.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start** | **number** |  | [default to undefined]
**end** | **number** |  | [default to undefined]
**speaker** | **string** |  | [default to undefined]
**text** | **string** | Transcribed text for this segment. | [default to undefined]

## Example

```typescript
import { TranscriptionSegment } from '@neulandai/neuland-hub-sdk';

const instance: TranscriptionSegment = {
    start,
    end,
    speaker,
    text,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
