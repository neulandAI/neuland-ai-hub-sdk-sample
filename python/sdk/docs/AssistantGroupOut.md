# AssistantGroupOut

A group's access to an assistant, identifying assistant and group by public id.  `assistant_id`/`group_id` (int) are kept alongside the public ids (dual-key — both are returned permanently); external clients should reference `assistant_public_id`/`group_public_id`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assistant_id** | **int** | Internal id of the assistant (deprecated; use assistant_public_id). | 
**assistant_public_id** | **UUID** | Public id of the assistant. | 
**group_id** | **int** | Internal id of the user group (deprecated; use group_public_id). | 
**group_public_id** | **UUID** | Public id of the user group. | 
**tenant_id** | **int** | Internal id of the tenant the grant belongs to. | 
**created_at** | **datetime** | Timestamp when access was granted. | 

## Example

```python
from neuland_hub_sdk.models.assistant_group_out import AssistantGroupOut

# TODO update the JSON string below
json = "{}"
# create an instance of AssistantGroupOut from a JSON string
assistant_group_out_instance = AssistantGroupOut.from_json(json)
# print the JSON string representation of the object
print(AssistantGroupOut.to_json())

# convert the object into a dict
assistant_group_out_dict = assistant_group_out_instance.to_dict()
# create an instance of AssistantGroupOut from a dict
assistant_group_out_from_dict = AssistantGroupOut.from_dict(assistant_group_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


