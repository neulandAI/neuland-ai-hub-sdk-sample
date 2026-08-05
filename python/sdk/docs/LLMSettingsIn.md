# LLMSettingsIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**llm_catalog_id** | **UUID** | Public id of the catalog model these settings configure. | 
**provider** | **str** | Provider backing the model. | 
**library** | **str** | Client library used to call the provider. | 
**max_tokens** | **int** | Maximum tokens allowed per request for this model. | 
**cost_prompt_tokens** | [**CostPromptTokens**](CostPromptTokens.md) |  | 
**cost_completion_tokens** | [**CostCompletionTokens**](CostCompletionTokens.md) |  | 
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
from neuland_hub_sdk.models.llm_settings_in import LLMSettingsIn

# TODO update the JSON string below
json = "{}"
# create an instance of LLMSettingsIn from a JSON string
llm_settings_in_instance = LLMSettingsIn.from_json(json)
# print the JSON string representation of the object
print(LLMSettingsIn.to_json())

# convert the object into a dict
llm_settings_in_dict = llm_settings_in_instance.to_dict()
# create an instance of LLMSettingsIn from a dict
llm_settings_in_from_dict = LLMSettingsIn.from_dict(llm_settings_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


