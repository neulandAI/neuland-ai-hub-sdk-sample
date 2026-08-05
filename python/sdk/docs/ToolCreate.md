# ToolCreate

Fields required to create a tool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Human-readable name of the tool. | 
**description** | **str** | Short description of what the tool does. | 
**prompt** | **str** |  | [optional] 
**category_public_id** | **UUID** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.tool_create import ToolCreate

# TODO update the JSON string below
json = "{}"
# create an instance of ToolCreate from a JSON string
tool_create_instance = ToolCreate.from_json(json)
# print the JSON string representation of the object
print(ToolCreate.to_json())

# convert the object into a dict
tool_create_dict = tool_create_instance.to_dict()
# create an instance of ToolCreate from a dict
tool_create_from_dict = ToolCreate.from_dict(tool_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


