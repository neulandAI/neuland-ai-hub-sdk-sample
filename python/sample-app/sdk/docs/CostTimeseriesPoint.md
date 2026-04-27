# CostTimeseriesPoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **str** |  | 
**cost** | **float** |  | 
**tokens** | **int** |  | 
**record_count** | **int** |  | 

## Example

```python
from neuland_hub_sdk.models.cost_timeseries_point import CostTimeseriesPoint

# TODO update the JSON string below
json = "{}"
# create an instance of CostTimeseriesPoint from a JSON string
cost_timeseries_point_instance = CostTimeseriesPoint.from_json(json)
# print the JSON string representation of the object
print(CostTimeseriesPoint.to_json())

# convert the object into a dict
cost_timeseries_point_dict = cost_timeseries_point_instance.to_dict()
# create an instance of CostTimeseriesPoint from a dict
cost_timeseries_point_from_dict = CostTimeseriesPoint.from_dict(cost_timeseries_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


