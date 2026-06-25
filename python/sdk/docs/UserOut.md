# UserOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Unique identifier of the user. | 
**created_at** | **datetime** | UTC timestamp when the user was created. | 
**email** | **str** | Current confirmed email address. | 
**email_confirmed** | **bool** | Whether the email address has been confirmed. | 
**pending_email** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**admin** | **bool** | Whether the user has tenant administrator privileges. | 
**superadmin** | **bool** |  | [optional] 
**active** | **bool** | Whether the account is active and can authenticate. | 
**tenant_id** | **int** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.user_out import UserOut

# TODO update the JSON string below
json = "{}"
# create an instance of UserOut from a JSON string
user_out_instance = UserOut.from_json(json)
# print the JSON string representation of the object
print(UserOut.to_json())

# convert the object into a dict
user_out_dict = user_out_instance.to_dict()
# create an instance of UserOut from a dict
user_out_from_dict = UserOut.from_dict(user_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


