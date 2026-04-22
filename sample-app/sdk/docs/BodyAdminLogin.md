# BodyAdminLogin


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **str** |  | 
**password** | **str** |  | 

## Example

```python
from neuland_hub_sdk.models.body_admin_login import BodyAdminLogin

# TODO update the JSON string below
json = "{}"
# create an instance of BodyAdminLogin from a JSON string
body_admin_login_instance = BodyAdminLogin.from_json(json)
# print the JSON string representation of the object
print(BodyAdminLogin.to_json())

# convert the object into a dict
body_admin_login_dict = body_admin_login_instance.to_dict()
# create an instance of BodyAdminLogin from a dict
body_admin_login_from_dict = BodyAdminLogin.from_dict(body_admin_login_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


