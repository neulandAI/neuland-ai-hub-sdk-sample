# ToolOut

A tool as returned by the API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Unique identifier of the tool. | 
**name** | **str** | Human-readable name of the tool. | 
**description** | **str** |  | 
**prompt** | **str** |  | 
**created_at** | **datetime** | UTC timestamp when the tool was created. | 
**updated_at** | **datetime** |  | 

## Example

```python
from neuland_hub_sdk.models.tool_out import ToolOut

# TODO update the JSON string below
json = "{}"
# create an instance of ToolOut from a JSON string
tool_out_instance = ToolOut.from_json(json)
# print the JSON string representation of the object
print(ToolOut.to_json())

# convert the object into a dict
tool_out_dict = tool_out_instance.to_dict()
# create an instance of ToolOut from a dict
tool_out_from_dict = ToolOut.from_dict(tool_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


