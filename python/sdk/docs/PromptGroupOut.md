# PromptGroupOut

A group's access to a prompt, identifying prompt and group by public id.  `prompt_id`/`group_id` (int) are kept alongside the public ids (dual-key — both are returned permanently); external clients should reference `prompt_public_id`/`group_public_id`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prompt_id** | **int** | Internal id of the prompt (deprecated; use prompt_public_id). | 
**prompt_public_id** | **UUID** | Public id of the prompt. | 
**group_id** | **int** | Internal id of the user group (deprecated; use group_public_id). | 
**group_public_id** | **UUID** | Public id of the user group. | 
**tenant_id** | **int** | Internal id of the tenant the grant belongs to. | 
**created_at** | **datetime** | Timestamp when access was granted. | 

## Example

```python
from neuland_hub_sdk.models.prompt_group_out import PromptGroupOut

# TODO update the JSON string below
json = "{}"
# create an instance of PromptGroupOut from a JSON string
prompt_group_out_instance = PromptGroupOut.from_json(json)
# print the JSON string representation of the object
print(PromptGroupOut.to_json())

# convert the object into a dict
prompt_group_out_dict = prompt_group_out_instance.to_dict()
# create an instance of PromptGroupOut from a dict
prompt_group_out_from_dict = PromptGroupOut.from_dict(prompt_group_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


