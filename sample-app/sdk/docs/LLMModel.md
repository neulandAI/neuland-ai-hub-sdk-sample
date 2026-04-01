# LLMModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**provider** | **str** |  | 
**description** | **str** |  | [optional] 
**default** | **bool** |  | [optional] [default to False]
**multi_modal** | **bool** |  | [optional] 
**gdpr_compliant** | **bool** |  | [optional] [default to True]

## Example

```python
from neuland_hub_sdk.models.llm_model import LLMModel

# TODO update the JSON string below
json = "{}"
# create an instance of LLMModel from a JSON string
llm_model_instance = LLMModel.from_json(json)
# print the JSON string representation of the object
print(LLMModel.to_json())

# convert the object into a dict
llm_model_dict = llm_model_instance.to_dict()
# create an instance of LLMModel from a dict
llm_model_from_dict = LLMModel.from_dict(llm_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


