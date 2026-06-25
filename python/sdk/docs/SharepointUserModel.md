# SharepointUserModel

The signed-in user's SharePoint / Microsoft Graph profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** |  | 
**job_title** | **str** |  | 
**mail** | **str** |  | 
**surname** | **str** |  | 
**user_principal_name** | **str** |  | 

## Example

```python
from neuland_hub_sdk.models.sharepoint_user_model import SharepointUserModel

# TODO update the JSON string below
json = "{}"
# create an instance of SharepointUserModel from a JSON string
sharepoint_user_model_instance = SharepointUserModel.from_json(json)
# print the JSON string representation of the object
print(SharepointUserModel.to_json())

# convert the object into a dict
sharepoint_user_model_dict = sharepoint_user_model_instance.to_dict()
# create an instance of SharepointUserModel from a dict
sharepoint_user_model_from_dict = SharepointUserModel.from_dict(sharepoint_user_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


