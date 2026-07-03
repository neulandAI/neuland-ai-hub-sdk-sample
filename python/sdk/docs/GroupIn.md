# GroupIn

Schema for creating a user group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Display name of the user group. | 
**description** | **str** |  | [optional] 
**source** | [**UserGroupSource**](UserGroupSource.md) | Whether the group is managed manually or synced from an external directory. | [optional] 
**external_id** | **str** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.group_in import GroupIn

# TODO update the JSON string below
json = "{}"
# create an instance of GroupIn from a JSON string
group_in_instance = GroupIn.from_json(json)
# print the JSON string representation of the object
print(GroupIn.to_json())

# convert the object into a dict
group_in_dict = group_in_instance.to_dict()
# create an instance of GroupIn from a dict
group_in_from_dict = GroupIn.from_dict(group_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


