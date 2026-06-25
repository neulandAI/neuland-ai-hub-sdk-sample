# UsageCostResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_date** | **datetime** | Start of the aggregation window. | 
**end_date** | **datetime** | End of the aggregation window. | 
**total_cost** | **float** | Total cost across the window. | 
**total_tokens** | **int** | Total tokens across the window. | 
**total_prompt_tokens** | **int** | Total prompt tokens across the window. | 
**total_completion_tokens** | **int** | Total completion tokens across the window. | 
**total_cached_tokens** | **int** | Total cached prompt tokens across the window. | 
**record_count** | **int** | Total number of usage records. | 
**by_source** | [**List[CostBySource]**](CostBySource.md) | Cost breakdown grouped by source. | 
**by_model** | [**List[CostByModel]**](CostByModel.md) | Cost breakdown grouped by provider and model. | 
**timeseries** | [**List[CostTimeseriesPoint]**](CostTimeseriesPoint.md) | Daily cost timeseries across the window. | 

## Example

```python
from neuland_hub_sdk.models.usage_cost_response import UsageCostResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UsageCostResponse from a JSON string
usage_cost_response_instance = UsageCostResponse.from_json(json)
# print the JSON string representation of the object
print(UsageCostResponse.to_json())

# convert the object into a dict
usage_cost_response_dict = usage_cost_response_instance.to_dict()
# create an instance of UsageCostResponse from a dict
usage_cost_response_from_dict = UsageCostResponse.from_dict(usage_cost_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


