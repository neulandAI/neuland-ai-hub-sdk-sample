# InvitationOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**email** | **str** |  | 
**tenant_id** | **int** |  | 
**project_id** | **int** |  | 
**status** | **str** |  | 
**created_at** | **datetime** |  | 
**accepted_at** | **datetime** |  | 
**revoked_at** | **datetime** |  | 
**creator_user_id** | **int** |  | 

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


