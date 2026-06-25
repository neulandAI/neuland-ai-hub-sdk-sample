# TranscriptionOut

The response format from the transcription endpoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **str** | Transcribed text of the audio. | 
**language** | **str** | Detected language of the audio (ISO 639-1 or language name). | 
**duration_seconds** | **float** | Duration of the audio in seconds. | 

## Example

```python
from neuland_hub_sdk.models.transcription_out import TranscriptionOut

# TODO update the JSON string below
json = "{}"
# create an instance of TranscriptionOut from a JSON string
transcription_out_instance = TranscriptionOut.from_json(json)
# print the JSON string representation of the object
print(TranscriptionOut.to_json())

# convert the object into a dict
transcription_out_dict = transcription_out_instance.to_dict()
# create an instance of TranscriptionOut from a dict
transcription_out_from_dict = TranscriptionOut.from_dict(transcription_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


