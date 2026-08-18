# UserUpdateIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**password** | **str** |  | [optional] 
**admin** | **bool** |  | [optional] 
**superadmin** | **bool** |  | [optional] 
**tenant_id** | **UUID** |  | [optional] 
**role_id** | **UUID** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.user_update_in import UserUpdateIn

# TODO update the JSON string below
json = "{}"
# create an instance of UserUpdateIn from a JSON string
user_update_in_instance = UserUpdateIn.from_json(json)
# print the JSON string representation of the object
print(UserUpdateIn.to_json())

# convert the object into a dict
user_update_in_dict = user_update_in_instance.to_dict()
# create an instance of UserUpdateIn from a dict
user_update_in_from_dict = UserUpdateIn.from_dict(user_update_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


