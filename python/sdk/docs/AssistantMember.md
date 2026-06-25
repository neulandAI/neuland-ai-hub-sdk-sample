# AssistantMember

Saves the members of an AI Assistant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Timestamp when the membership was created. | [optional] 
**assistant_id** | **int** | ID of the assistant. | 
**user_id** | **int** |  | 
**granted_via** | [**AssistantMemberGrantedViaEnum**](AssistantMemberGrantedViaEnum.md) |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.assistant_member import AssistantMember

# TODO update the JSON string below
json = "{}"
# create an instance of AssistantMember from a JSON string
assistant_member_instance = AssistantMember.from_json(json)
# print the JSON string representation of the object
print(AssistantMember.to_json())

# convert the object into a dict
assistant_member_dict = assistant_member_instance.to_dict()
# create an instance of AssistantMember from a dict
assistant_member_from_dict = AssistantMember.from_dict(assistant_member_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


