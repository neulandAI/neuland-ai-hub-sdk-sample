# ProjectMemberBulkDelete


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_ids** | **List[int]** | IDs of the users to remove from the project. | 

## Example

```python
from neuland_hub_sdk.models.project_member_bulk_delete import ProjectMemberBulkDelete

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectMemberBulkDelete from a JSON string
project_member_bulk_delete_instance = ProjectMemberBulkDelete.from_json(json)
# print the JSON string representation of the object
print(ProjectMemberBulkDelete.to_json())

# convert the object into a dict
project_member_bulk_delete_dict = project_member_bulk_delete_instance.to_dict()
# create an instance of ProjectMemberBulkDelete from a dict
project_member_bulk_delete_from_dict = ProjectMemberBulkDelete.from_dict(project_member_bulk_delete_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


