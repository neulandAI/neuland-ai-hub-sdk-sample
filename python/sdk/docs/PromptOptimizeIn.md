# PromptOptimizeIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prompt** | **str** | Prompt to optimize. | 
**temperature** | **float** | Temperature for optimization, default is 0.0 | [optional] [default to 0.0]

## Example

```python
from neuland_hub_sdk.models.prompt_optimize_in import PromptOptimizeIn

# TODO update the JSON string below
json = "{}"
# create an instance of PromptOptimizeIn from a JSON string
prompt_optimize_in_instance = PromptOptimizeIn.from_json(json)
# print the JSON string representation of the object
print(PromptOptimizeIn.to_json())

# convert the object into a dict
prompt_optimize_in_dict = prompt_optimize_in_instance.to_dict()
# create an instance of PromptOptimizeIn from a dict
prompt_optimize_in_from_dict = PromptOptimizeIn.from_dict(prompt_optimize_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


