# SharepointItemModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**web_url** | **str** |  | 
**drive_id** | **str** |  | 
**site_id** | **str** |  | 
**parent_folder_id** | **str** |  | 
**parent_path** | **str** |  | 
**name** | **str** |  | 
**description** | **str** |  | 
**size** | **int** |  | 
**last_modified_date_time** | **datetime** |  | 
**mimetype** | **str** |  | 
**folder** | [**SharepointFolderModel**](SharepointFolderModel.md) |  | 
**imported** | **bool** |  | [optional] 
**imported_count** | **int** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.sharepoint_item_model import SharepointItemModel

# TODO update the JSON string below
json = "{}"
# create an instance of SharepointItemModel from a JSON string
sharepoint_item_model_instance = SharepointItemModel.from_json(json)
# print the JSON string representation of the object
print(SharepointItemModel.to_json())

# convert the object into a dict
sharepoint_item_model_dict = sharepoint_item_model_instance.to_dict()
# create an instance of SharepointItemModel from a dict
sharepoint_item_model_from_dict = SharepointItemModel.from_dict(sharepoint_item_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


