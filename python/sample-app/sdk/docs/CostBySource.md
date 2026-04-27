# CostBySource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **str** |  | 
**total_cost** | **float** |  | 
**total_tokens** | **int** |  | 
**prompt_tokens** | **int** |  | 
**completion_tokens** | **int** |  | 
**record_count** | **int** |  | 

## Example

```python
from neuland_hub_sdk.models.cost_by_source import CostBySource

# TODO update the JSON string below
json = "{}"
# create an instance of CostBySource from a JSON string
cost_by_source_instance = CostBySource.from_json(json)
# print the JSON string representation of the object
print(CostBySource.to_json())

# convert the object into a dict
cost_by_source_dict = cost_by_source_instance.to_dict()
# create an instance of CostBySource from a dict
cost_by_source_from_dict = CostBySource.from_dict(cost_by_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


