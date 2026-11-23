# MyAssistantMembershipOut

The caller's own access to one assistant: a direct membership row, or `GROUP` when only a group grants it, with the caller's conversion flag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assistant_id** | **int** | Internal id of the assistant (deprecated; use assistant_public_id). | 
**assistant_public_id** | **UUID** | Public id of the assistant. | 
**granted_via** | **str** | INVITED or DISCOVERED for a direct membership, GROUP for group-only access. | 
**is_tool** | **bool** | Whether the caller has converted the assistant into a tool. | 

## Example

```python
from neuland_hub_sdk.models.my_assistant_membership_out import MyAssistantMembershipOut

# TODO update the JSON string below
json = "{}"
# create an instance of MyAssistantMembershipOut from a JSON string
my_assistant_membership_out_instance = MyAssistantMembershipOut.from_json(json)
# print the JSON string representation of the object
print(MyAssistantMembershipOut.to_json())

# convert the object into a dict
my_assistant_membership_out_dict = my_assistant_membership_out_instance.to_dict()
# create an instance of MyAssistantMembershipOut from a dict
my_assistant_membership_out_from_dict = MyAssistantMembershipOut.from_dict(my_assistant_membership_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


