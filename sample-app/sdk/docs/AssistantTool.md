# AssistantTool


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**assistant_id** | **int** |  | 
**tool_id** | **int** |  | 

## Example

```python
from neuland_hub_sdk.models.assistant_tool import AssistantTool

# TODO update the JSON string below
json = "{}"
# create an instance of AssistantTool from a JSON string
assistant_tool_instance = AssistantTool.from_json(json)
# print the JSON string representation of the object
print(AssistantTool.to_json())

# convert the object into a dict
assistant_tool_dict = assistant_tool_instance.to_dict()
# create an instance of AssistantTool from a dict
assistant_tool_from_dict = AssistantTool.from_dict(assistant_tool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


