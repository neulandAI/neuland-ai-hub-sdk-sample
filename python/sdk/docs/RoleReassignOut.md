# RoleReassignOut

Result of moving every holder of a role to another role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**holder_count** | **int** | Number of users directly holding the source role. | 
**moved_count** | **int** | Number of users moved to the target role. | 
**skipped_count** | **int** | Number of holders left on the source role: the caller and the excluded users. | 

## Example

```python
from neuland_hub_sdk.models.role_reassign_out import RoleReassignOut

# TODO update the JSON string below
json = "{}"
# create an instance of RoleReassignOut from a JSON string
role_reassign_out_instance = RoleReassignOut.from_json(json)
# print the JSON string representation of the object
print(RoleReassignOut.to_json())

# convert the object into a dict
role_reassign_out_dict = role_reassign_out_instance.to_dict()
# create an instance of RoleReassignOut from a dict
role_reassign_out_from_dict = RoleReassignOut.from_dict(role_reassign_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


