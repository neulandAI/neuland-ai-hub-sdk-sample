# PromptGroupsIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_ids** | **List[UUID]** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.prompt_groups_in import PromptGroupsIn

# TODO update the JSON string below
json = "{}"
# create an instance of PromptGroupsIn from a JSON string
prompt_groups_in_instance = PromptGroupsIn.from_json(json)
# print the JSON string representation of the object
print(PromptGroupsIn.to_json())

# convert the object into a dict
prompt_groups_in_dict = prompt_groups_in_instance.to_dict()
# create an instance of PromptGroupsIn from a dict
prompt_groups_in_from_dict = PromptGroupsIn.from_dict(prompt_groups_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


