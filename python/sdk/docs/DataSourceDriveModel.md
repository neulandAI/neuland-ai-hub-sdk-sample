# DataSourceDriveModel

A drive from a data source, normalized across providers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Drive id. | 
**web_url** | **str** | URL to open the drive in the source application. | 
**name** | **str** |  | 
**description** | **str** |  | 
**root** | [**DataSourceItemModel**](DataSourceItemModel.md) | The drive&#39;s root folder item. | 
**imported_count** | **int** | Number of imported documents from this drive in the current scope. | [optional] [default to 0]

## Example

```python
from neuland_hub_sdk.models.data_source_drive_model import DataSourceDriveModel

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceDriveModel from a JSON string
data_source_drive_model_instance = DataSourceDriveModel.from_json(json)
# print the JSON string representation of the object
print(DataSourceDriveModel.to_json())

# convert the object into a dict
data_source_drive_model_dict = data_source_drive_model_instance.to_dict()
# create an instance of DataSourceDriveModel from a dict
data_source_drive_model_from_dict = DataSourceDriveModel.from_dict(data_source_drive_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


