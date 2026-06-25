# ToolCallOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | ID of the tool call. | 
**call_id** | **str** | Provider-assigned identifier for the tool call. | 
**tool_name** | **str** | Name of the invoked tool. | 
**call_group** | **int** | Group index for tool calls issued together. | 
**call_index** | **int** | Order of the call within its group. | 
**state** | **str** |  | 
**is_error** | **bool** |  | 
**description** | **str** |  | 
**progress_steps** | [**List[ToolCallProgressStepOut]**](ToolCallProgressStepOut.md) | Ordered progress steps emitted during the call. | 

## Example

```python
from neuland_hub_sdk.models.tool_call_out import ToolCallOut

# TODO update the JSON string below
json = "{}"
# create an instance of ToolCallOut from a JSON string
tool_call_out_instance = ToolCallOut.from_json(json)
# print the JSON string representation of the object
print(ToolCallOut.to_json())

# convert the object into a dict
tool_call_out_dict = tool_call_out_instance.to_dict()
# create an instance of ToolCallOut from a dict
tool_call_out_from_dict = ToolCallOut.from_dict(tool_call_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


