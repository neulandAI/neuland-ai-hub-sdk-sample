# ToolUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**prompt** | **str** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.tool_update import ToolUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ToolUpdate from a JSON string
tool_update_instance = ToolUpdate.from_json(json)
# print the JSON string representation of the object
print(ToolUpdate.to_json())

# convert the object into a dict
tool_update_dict = tool_update_instance.to_dict()
# create an instance of ToolUpdate from a dict
tool_update_from_dict = ToolUpdate.from_dict(tool_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


