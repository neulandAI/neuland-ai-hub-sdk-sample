# SharepointDriveModel

A document library (drive) within a SharePoint site.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Drive id. | 
**web_url** | **str** | URL to open the drive in SharePoint. | 
**name** | **str** |  | 
**description** | **str** |  | 
**root** | [**SharepointItemModel**](SharepointItemModel.md) | The drive&#39;s root folder item. | 
**imported_count** | **int** | Number of imported documents from this drive in the current scope. | [optional] [default to 0]

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


