# ProjectMemberBulkIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**members** | [**List[ProjectMemberIn]**](ProjectMemberIn.md) | List of members to add to the project. | 

## Example

```python
from neuland_hub_sdk.models.project_member_bulk_in import ProjectMemberBulkIn

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectMemberBulkIn from a JSON string
project_member_bulk_in_instance = ProjectMemberBulkIn.from_json(json)
# print the JSON string representation of the object
print(ProjectMemberBulkIn.to_json())

# convert the object into a dict
project_member_bulk_in_dict = project_member_bulk_in_instance.to_dict()
# create an instance of ProjectMemberBulkIn from a dict
project_member_bulk_in_from_dict = ProjectMemberBulkIn.from_dict(project_member_bulk_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


