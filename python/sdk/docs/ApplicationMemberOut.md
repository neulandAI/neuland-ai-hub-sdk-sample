# ApplicationMemberOut

A user's application membership, identifying app and user by public id.  `app_id`/`user_id` (int) are kept alongside the public ids (dual-key — both are returned permanently); external clients should reference `app_public_id`/`user_public_id`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **int** | Internal id of the application (deprecated; use app_public_id). | 
**app_public_id** | **UUID** | Public id of the application. | 
**user_id** | **int** | Internal id of the member user (deprecated; use user_public_id). | 
**user_public_id** | **UUID** | Public id of the member user. | 
**tenant_id** | **int** | Internal id of the tenant the membership belongs to. | 
**created_at** | **datetime** | Timestamp when access was created. | 

## Example

```python
from neuland_hub_sdk.models.application_member_out import ApplicationMemberOut

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationMemberOut from a JSON string
application_member_out_instance = ApplicationMemberOut.from_json(json)
# print the JSON string representation of the object
print(ApplicationMemberOut.to_json())

# convert the object into a dict
application_member_out_dict = application_member_out_instance.to_dict()
# create an instance of ApplicationMemberOut from a dict
application_member_out_from_dict = ApplicationMemberOut.from_dict(application_member_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


