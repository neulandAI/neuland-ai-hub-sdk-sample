# UsageCostResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_date** | **datetime** |  | 
**end_date** | **datetime** |  | 
**total_cost** | **float** |  | 
**total_tokens** | **int** |  | 
**total_prompt_tokens** | **int** |  | 
**total_completion_tokens** | **int** |  | 
**total_cached_tokens** | **int** |  | 
**record_count** | **int** |  | 
**by_source** | [**List[CostBySource]**](CostBySource.md) |  | 
**by_model** | [**List[CostByModel]**](CostByModel.md) |  | 
**timeseries** | [**List[CostTimeseriesPoint]**](CostTimeseriesPoint.md) |  | 

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


