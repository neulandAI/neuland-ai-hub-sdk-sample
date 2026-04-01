# Assistant

Represents an AI Assistant partially compatible with the OpenAI Assistant API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** |  | [optional] 
**state_reason** | **str** |  | [optional] 
**state_changed_at** | **datetime** |  | [optional] 
**id** | **int** |  | [optional] 
**tenant_id** | **int** |  | 
**created_at** | **datetime** |  | [optional] 
**creator_user_id** | **int** |  | 
**name** | **str** |  | 
**avatar** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**instructions** | **str** |  | [optional] 
**provider** | **str** |  | [optional] 
**model** | **str** |  | [optional] 
**temperature** | **float** |  | [optional] 
**similarity_top_k** | **int** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.assistant import Assistant

# TODO update the JSON string below
json = "{}"
# create an instance of Assistant from a JSON string
assistant_instance = Assistant.from_json(json)
# print the JSON string representation of the object
print(Assistant.to_json())

# convert the object into a dict
assistant_dict = assistant_instance.to_dict()
# create an instance of Assistant from a dict
assistant_from_dict = Assistant.from_dict(assistant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


