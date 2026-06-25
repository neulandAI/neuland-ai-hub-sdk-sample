# ChatToolSettingsOut

Response schema for chat tool settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | **int** | ID of the chat. | 
**tool_id** | **int** | ID of the tool. | 
**enabled** | **bool** | Whether the tool is enabled for the chat. | 
**created_at** | **datetime** | When the setting was created. | 
**updated_at** | **datetime** |  | 

## Example

```python
from neuland_hub_sdk.models.chat_tool_settings_out import ChatToolSettingsOut

# TODO update the JSON string below
json = "{}"
# create an instance of ChatToolSettingsOut from a JSON string
chat_tool_settings_out_instance = ChatToolSettingsOut.from_json(json)
# print the JSON string representation of the object
print(ChatToolSettingsOut.to_json())

# convert the object into a dict
chat_tool_settings_out_dict = chat_tool_settings_out_instance.to_dict()
# create an instance of ChatToolSettingsOut from a dict
chat_tool_settings_out_from_dict = ChatToolSettingsOut.from_dict(chat_tool_settings_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


