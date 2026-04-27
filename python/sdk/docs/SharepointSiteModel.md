# SharepointSiteModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**web_url** | **str** |  | 
**name** | **str** |  | 
**display_name** | **str** |  | 
**description** | **str** |  | 
**imported_count** | **int** |  | [optional] [default to 0]

## Example

```python
from neuland_hub_sdk.models.sharepoint_site_model import SharepointSiteModel

# TODO update the JSON string below
json = "{}"
# create an instance of SharepointSiteModel from a JSON string
sharepoint_site_model_instance = SharepointSiteModel.from_json(json)
# print the JSON string representation of the object
print(SharepointSiteModel.to_json())

# convert the object into a dict
sharepoint_site_model_dict = sharepoint_site_model_instance.to_dict()
# create an instance of SharepointSiteModel from a dict
sharepoint_site_model_from_dict = SharepointSiteModel.from_dict(sharepoint_site_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


