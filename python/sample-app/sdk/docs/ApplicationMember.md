# ApplicationMember

User-specific access control for applications. This table allows setting explicit allow/deny rules for users on specific applications.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **int** | ID of the user. | 
**tenant_id** | **int** | ID of the tenant. | 
**app_id** | **int** | ID of the application. | 
**granted_by** | **int** |  | 
**created_at** | **datetime** | Timestamp when access was created. | [optional] 

## Example

```python
from neuland_hub_sdk.models.application_member import ApplicationMember

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationMember from a JSON string
application_member_instance = ApplicationMember.from_json(json)
# print the JSON string representation of the object
print(ApplicationMember.to_json())

# convert the object into a dict
application_member_dict = application_member_instance.to_dict()
# create an instance of ApplicationMember from a dict
application_member_from_dict = ApplicationMember.from_dict(application_member_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


