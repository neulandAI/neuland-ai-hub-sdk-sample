# TokensPerModel

Model for total tokens of one llm resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**llm_model** | **str** |  | 
**duration** | **str** |  | 
**total_tokens_count** | **float** |  | 
**prompt_token_count** | **float** |  | 
**completion_token_count** | **float** |  | 
**total_requests** | **float** |  | 

## Example

```python
from neuland_hub_sdk.models.tokens_per_model import TokensPerModel

# TODO update the JSON string below
json = "{}"
# create an instance of TokensPerModel from a JSON string
tokens_per_model_instance = TokensPerModel.from_json(json)
# print the JSON string representation of the object
print(TokensPerModel.to_json())

# convert the object into a dict
tokens_per_model_dict = tokens_per_model_instance.to_dict()
# create an instance of TokensPerModel from a dict
tokens_per_model_from_dict = TokensPerModel.from_dict(tokens_per_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


