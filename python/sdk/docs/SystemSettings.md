# SystemSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | UTC timestamp when the record was created. | [optional] 
**updated_at** | **datetime** | UTC timestamp when the record was last updated. | [optional] 
**id** | **int** |  | [optional] 
**maintenance_enabled** | **bool** | Whether maintenance mode is currently enabled. | [optional] [default to False]
**tracing_enabled** | **bool** | Whether observability tracing is enabled system-wide. | [optional] [default to True]
**inbound_guardrail_llm_settings_id** | **int** |  | [optional] 
**outbound_guardrail_llm_settings_id** | **int** |  | [optional] 
**title_llm_settings_id** | **int** |  | [optional] 
**embedding_llm_settings_id** | **int** |  | [optional] 
**transcription_llm_settings_id** | **int** |  | [optional] 
**maintenance_start_at** | **datetime** |  | [optional] 
**maintenance_end_at** | **datetime** |  | [optional] 
**maintenance_message** | **str** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.system_settings import SystemSettings

# TODO update the JSON string below
json = "{}"
# create an instance of SystemSettings from a JSON string
system_settings_instance = SystemSettings.from_json(json)
# print the JSON string representation of the object
print(SystemSettings.to_json())

# convert the object into a dict
system_settings_dict = system_settings_instance.to_dict()
# create an instance of SystemSettings from a dict
system_settings_from_dict = SystemSettings.from_dict(system_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


