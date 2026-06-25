# SystemSettingsUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maintenance_enabled** | **bool** |  | [optional] 
**tracing_enabled** | **bool** |  | [optional] 
**inbound_guardrail_llm_settings_id** | **int** |  | [optional] 
**outbound_guardrail_llm_settings_id** | **int** |  | [optional] 
**embedding_llm_settings_id** | **int** |  | [optional] 
**maintenance_start_at** | **datetime** |  | [optional] 
**maintenance_end_at** | **datetime** |  | [optional] 
**maintenance_message** | **str** |  | [optional] 
**reason** | **str** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.system_settings_update import SystemSettingsUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of SystemSettingsUpdate from a JSON string
system_settings_update_instance = SystemSettingsUpdate.from_json(json)
# print the JSON string representation of the object
print(SystemSettingsUpdate.to_json())

# convert the object into a dict
system_settings_update_dict = system_settings_update_instance.to_dict()
# create an instance of SystemSettingsUpdate from a dict
system_settings_update_from_dict = SystemSettingsUpdate.from_dict(system_settings_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


