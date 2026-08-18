# InvitationOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Unique identifier of the invitation. | 
**public_id** | **UUID** | Public, non-enumerable external identifier of the invitation. | 
**email** | **str** | Email address the invitation was sent to. | 
**tenant_id** | **int** | Internal id of the tenant (deprecated; use tenant_public_id). | 
**tenant_public_id** | **UUID** |  | [optional] 
**project_id** | **int** |  | 
**project_public_id** | **UUID** |  | [optional] 
**status** | **str** | Current invitation status. | 
**created_at** | **datetime** | UTC timestamp when the invitation was created. | 
**accepted_at** | **datetime** |  | 
**revoked_at** | **datetime** |  | 
**creator_user_id** | **int** | Internal id of the creating user (deprecated; use creator_user_public_id). | 
**creator_user_public_id** | **UUID** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.invitation_out import InvitationOut

# TODO update the JSON string below
json = "{}"
# create an instance of InvitationOut from a JSON string
invitation_out_instance = InvitationOut.from_json(json)
# print the JSON string representation of the object
print(InvitationOut.to_json())

# convert the object into a dict
invitation_out_dict = invitation_out_instance.to_dict()
# create an instance of InvitationOut from a dict
invitation_out_from_dict = InvitationOut.from_dict(invitation_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


