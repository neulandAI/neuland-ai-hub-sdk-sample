# ProjectGroupOut

A group's access to a project, identifying project and group by public id.  `project_id`/`group_id` (int) are kept alongside the public ids (dual-key — both are returned permanently); external clients should reference `project_public_id`/`group_public_id`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project_id** | **int** | Internal id of the project (deprecated; use project_public_id). | 
**project_public_id** | **UUID** | Public id of the project. | 
**group_id** | **int** | Internal id of the user group (deprecated; use group_public_id). | 
**group_public_id** | **UUID** | Public id of the user group. | 
**tenant_id** | **int** | Internal id of the tenant the grant belongs to. | 
**created_at** | **datetime** | Timestamp when access was granted. | 

## Example

```python
from neuland_hub_sdk.models.project_group_out import ProjectGroupOut

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectGroupOut from a JSON string
project_group_out_instance = ProjectGroupOut.from_json(json)
# print the JSON string representation of the object
print(ProjectGroupOut.to_json())

# convert the object into a dict
project_group_out_dict = project_group_out_instance.to_dict()
# create an instance of ProjectGroupOut from a dict
project_group_out_from_dict = ProjectGroupOut.from_dict(project_group_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


