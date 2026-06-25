# DataSourceUserModel

The current user's profile on the data source.

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
from neuland_hub_sdk.models.data_source_user_model import DataSourceUserModel

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceUserModel from a JSON string
data_source_user_model_instance = DataSourceUserModel.from_json(json)
# print the JSON string representation of the object
print(DataSourceUserModel.to_json())

# convert the object into a dict
data_source_user_model_dict = data_source_user_model_instance.to_dict()
# create an instance of DataSourceUserModel from a dict
data_source_user_model_from_dict = DataSourceUserModel.from_dict(data_source_user_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


