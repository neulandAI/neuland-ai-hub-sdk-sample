# GooglePickerTokenOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | Short-lived Google access token limited to &#x60;drive.file&#x60;. | 
**api_key** | **str** | Google Picker API key. | 
**app_id** | **str** | OAuth client&#39;s Cloud project number. | 

## Example

```python
from neuland_hub_sdk.models.google_picker_token_out import GooglePickerTokenOut

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePickerTokenOut from a JSON string
google_picker_token_out_instance = GooglePickerTokenOut.from_json(json)
# print the JSON string representation of the object
print(GooglePickerTokenOut.to_json())

# convert the object into a dict
google_picker_token_out_dict = google_picker_token_out_instance.to_dict()
# create an instance of GooglePickerTokenOut from a dict
google_picker_token_out_from_dict = GooglePickerTokenOut.from_dict(google_picker_token_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


