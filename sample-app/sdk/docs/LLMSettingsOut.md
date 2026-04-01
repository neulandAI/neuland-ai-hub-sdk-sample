# LLMSettingsOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**provider** | **str** |  | 
**model** | **str** |  | 
**library** | **str** |  | 
**description** | **str** |  | 
**max_tokens** | **int** |  | 
**multi_modal** | **bool** |  | 
**gdpr_compliant** | **bool** |  | 
**cost_prompt_tokens** | **str** |  | 
**cost_completion_tokens** | **str** |  | 
**args** | **Dict[str, object]** |  | 
**openai_resource** | **str** |  | 

## Example

```python
from neuland_hub_sdk.models.llm_settings_out import LLMSettingsOut

# TODO update the JSON string below
json = "{}"
# create an instance of LLMSettingsOut from a JSON string
llm_settings_out_instance = LLMSettingsOut.from_json(json)
# print the JSON string representation of the object
print(LLMSettingsOut.to_json())

# convert the object into a dict
llm_settings_out_dict = llm_settings_out_instance.to_dict()
# create an instance of LLMSettingsOut from a dict
llm_settings_out_from_dict = LLMSettingsOut.from_dict(llm_settings_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


