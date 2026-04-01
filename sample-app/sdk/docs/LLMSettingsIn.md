# LLMSettingsIn

Create schema - all fields required, no defaults (validation only).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider** | **str** |  | 
**model** | **str** |  | 
**library** | **str** |  | 
**description** | **str** |  | 
**max_tokens** | **int** |  | 
**multi_modal** | **bool** |  | 
**gdpr_compliant** | **bool** |  | 
**cost_prompt_tokens** | [**CostPromptTokens**](CostPromptTokens.md) |  | 
**cost_completion_tokens** | [**CostCompletionTokens**](CostCompletionTokens.md) |  | 
**args** | **Dict[str, object]** |  | [optional] 
**openai_resource** | **str** |  | [optional] 

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


