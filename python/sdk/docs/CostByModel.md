# CostByModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider** | **str** | Provider of the model. | 
**model** | **str** | Catalog name of the model. | 
**total_cost** | **float** | Total cost for this model. | 
**total_tokens** | **int** | Total tokens for this model. | 
**prompt_tokens** | **int** | Prompt tokens for this model. | 
**completion_tokens** | **int** | Completion tokens for this model. | 
**record_count** | **int** | Number of usage records for this model. | 

## Example

```python
from neuland_hub_sdk.models.cost_by_model import CostByModel

# TODO update the JSON string below
json = "{}"
# create an instance of CostByModel from a JSON string
cost_by_model_instance = CostByModel.from_json(json)
# print the JSON string representation of the object
print(CostByModel.to_json())

# convert the object into a dict
cost_by_model_dict = cost_by_model_instance.to_dict()
# create an instance of CostByModel from a dict
cost_by_model_from_dict = CostByModel.from_dict(cost_by_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


