# PasswordResetIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**old_password** | **str** | Current password, required to authorize the change. | 
**new_password** | **str** | New password to set. | 

## Example

```python
from neuland_hub_sdk.models.password_reset_in import PasswordResetIn

# TODO update the JSON string below
json = "{}"
# create an instance of PasswordResetIn from a JSON string
password_reset_in_instance = PasswordResetIn.from_json(json)
# print the JSON string representation of the object
print(PasswordResetIn.to_json())

# convert the object into a dict
password_reset_in_dict = password_reset_in_instance.to_dict()
# create an instance of PasswordResetIn from a dict
password_reset_in_from_dict = PasswordResetIn.from_dict(password_reset_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


