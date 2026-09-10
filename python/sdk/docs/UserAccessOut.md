# UserAccessOut

A user's effective access across all three kinds, with provenance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **int** |  | 
**user_public_id** | **UUID** |  | 
**tenant_id** | **int** |  | 
**models** | [**List[AccessItemOut]**](AccessItemOut.md) |  | [optional] 
**tools** | [**List[AccessItemOut]**](AccessItemOut.md) |  | [optional] 
**connectors** | [**List[AccessItemOut]**](AccessItemOut.md) |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.user_access_out import UserAccessOut

# TODO update the JSON string below
json = "{}"
# create an instance of UserAccessOut from a JSON string
user_access_out_instance = UserAccessOut.from_json(json)
# print the JSON string representation of the object
print(UserAccessOut.to_json())

# convert the object into a dict
user_access_out_dict = user_access_out_instance.to_dict()
# create an instance of UserAccessOut from a dict
user_access_out_from_dict = UserAccessOut.from_dict(user_access_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


