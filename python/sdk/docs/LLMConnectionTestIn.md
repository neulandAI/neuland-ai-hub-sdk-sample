# LLMConnectionTestIn

In-flight model config to verify against the provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_name** | **str** | Catalog model name to target (maps to LLMCatalog.name). | 
**provider** | **str** | Provider backing the model. | 
**library** | **str** | Client library used to call the provider. | 
**supports_embedding** | **bool** | Probe the model as an embedding model instead of chat. | [optional] [default to False]
**embedding_dimension** | **int** |  | [optional] 
**region** | **str** |  | [optional] 
**args** | **Dict[str, object]** |  | [optional] 
**openai_resource** | **str** |  | [optional] 
**api_version** | **str** |  | [optional] 
**deployment_name** | **str** |  | [optional] 
**endpoint** | **str** |  | [optional] 
**api_key** | **str** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.llm_connection_test_in import LLMConnectionTestIn

# TODO update the JSON string below
json = "{}"
# create an instance of LLMConnectionTestIn from a JSON string
llm_connection_test_in_instance = LLMConnectionTestIn.from_json(json)
# print the JSON string representation of the object
print(LLMConnectionTestIn.to_json())

# convert the object into a dict
llm_connection_test_in_dict = llm_connection_test_in_instance.to_dict()
# create an instance of LLMConnectionTestIn from a dict
llm_connection_test_in_from_dict = LLMConnectionTestIn.from_dict(llm_connection_test_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


