# SharepointDriveModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**web_url** | **str** |  | 
**name** | **str** |  | 
**description** | **str** |  | 
**root** | [**SharepointItemModel**](SharepointItemModel.md) |  | 
**imported_count** | **int** |  | [optional] [default to 0]

## Example

```python
from neuland_hub_sdk.models.sharepoint_drive_model import SharepointDriveModel

# TODO update the JSON string below
json = "{}"
# create an instance of SharepointDriveModel from a JSON string
sharepoint_drive_model_instance = SharepointDriveModel.from_json(json)
# print the JSON string representation of the object
print(SharepointDriveModel.to_json())

# convert the object into a dict
sharepoint_drive_model_dict = sharepoint_drive_model_instance.to_dict()
# create an instance of SharepointDriveModel from a dict
sharepoint_drive_model_from_dict = SharepointDriveModel.from_dict(sharepoint_drive_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


