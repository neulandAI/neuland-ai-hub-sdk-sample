# InvitationIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | **List[Optional[str]]** | Email addresses to invite; already-invited or existing users are skipped. | 
**tenant_id** | **int** |  | [optional] 
**project_id** | **int** |  | [optional] 
**admin** | **bool** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.invitation_in import InvitationIn

# TODO update the JSON string below
json = "{}"
# create an instance of InvitationIn from a JSON string
invitation_in_instance = InvitationIn.from_json(json)
# print the JSON string representation of the object
print(InvitationIn.to_json())

# convert the object into a dict
invitation_in_dict = invitation_in_instance.to_dict()
# create an instance of InvitationIn from a dict
invitation_in_from_dict = InvitationIn.from_dict(invitation_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


