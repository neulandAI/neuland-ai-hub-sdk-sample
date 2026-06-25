# ProjectIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Display name of the project. | 
**description_show_in_chat** | **bool** | Whether the project description is shown to users in chat. | [optional] [default to False]
**description** | **str** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.project_in import ProjectIn

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectIn from a JSON string
project_in_instance = ProjectIn.from_json(json)
# print the JSON string representation of the object
print(ProjectIn.to_json())

# convert the object into a dict
project_in_dict = project_in_instance.to_dict()
# create an instance of ProjectIn from a dict
project_in_from_dict = ProjectIn.from_dict(project_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


