# LLMSettingsUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**llm_catalog_id** | **UUID** |  | [optional] 
**provider** | **str** |  | [optional] 
**library** | **str** |  | [optional] 
**max_tokens** | **int** |  | [optional] 
**cost_prompt_tokens** | [**CostPromptTokens1**](CostPromptTokens1.md) |  | [optional] 
**cost_completion_tokens** | [**CostCompletionTokens1**](CostCompletionTokens1.md) |  | [optional] 
**cost_cached_tokens** | [**CostCachedTokens**](CostCachedTokens.md) |  | [optional] 
**cost_audio_per_minute** | [**CostAudioPerMinute**](CostAudioPerMinute.md) |  | [optional] 
**region** | **str** |  | [optional] 
**args** | **Dict[str, object]** |  | [optional] 
**openai_resource** | **str** |  | [optional] 
**api_version** | **str** |  | [optional] 
**deployment_name** | **str** |  | [optional] 
**endpoint** | **str** |  | [optional] 
**api_key** | **str** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.llm_settings_update import LLMSettingsUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of LLMSettingsUpdate from a JSON string
llm_settings_update_instance = LLMSettingsUpdate.from_json(json)
# print the JSON string representation of the object
print(LLMSettingsUpdate.to_json())

# convert the object into a dict
llm_settings_update_dict = llm_settings_update_instance.to_dict()
# create an instance of LLMSettingsUpdate from a dict
llm_settings_update_from_dict = LLMSettingsUpdate.from_dict(llm_settings_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


