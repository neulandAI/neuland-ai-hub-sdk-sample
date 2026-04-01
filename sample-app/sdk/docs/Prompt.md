# Prompt


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**tenant_id** | **int** |  | 
**created_at** | **datetime** |  | [optional] 
**creator_user_id** | **int** |  | 
**name** | **str** |  | 
**prompt** | **str** |  | 
**is_public** | **bool** |  | [optional] [default to False]
**description** | **str** |  | 

## Example

```python
from neuland_hub_sdk.models.prompt import Prompt

# TODO update the JSON string below
json = "{}"
# create an instance of Prompt from a JSON string
prompt_instance = Prompt.from_json(json)
# print the JSON string representation of the object
print(Prompt.to_json())

# convert the object into a dict
prompt_dict = prompt_instance.to_dict()
# create an instance of Prompt from a dict
prompt_from_dict = Prompt.from_dict(prompt_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


