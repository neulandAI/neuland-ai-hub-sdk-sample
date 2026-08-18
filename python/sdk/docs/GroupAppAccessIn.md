# GroupAppAccessIn

Schema for granting app access to a group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **UUID** | Public id of the application to grant access to. | 
**group_ids** | **List[UUID]** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.group_app_access_in import GroupAppAccessIn

# TODO update the JSON string below
json = "{}"
# create an instance of GroupAppAccessIn from a JSON string
group_app_access_in_instance = GroupAppAccessIn.from_json(json)
# print the JSON string representation of the object
print(GroupAppAccessIn.to_json())

# convert the object into a dict
group_app_access_in_dict = group_app_access_in_instance.to_dict()
# create an instance of GroupAppAccessIn from a dict
group_app_access_in_from_dict = GroupAppAccessIn.from_dict(group_app_access_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


