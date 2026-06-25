# TimeseriesResponse

Timeseries response model for LLM costs. Contains total cost for the current month and timeseries data for each model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_cost** | **float** | Total LLM cost for the current month across all models. | 
**timeseries** | **Dict[str, List[TimeseriesPoint]]** | Cost timeseries keyed by model name. | 

## Example

```python
from neuland_hub_sdk.models.timeseries_response import TimeseriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TimeseriesResponse from a JSON string
timeseries_response_instance = TimeseriesResponse.from_json(json)
# print the JSON string representation of the object
print(TimeseriesResponse.to_json())

# convert the object into a dict
timeseries_response_dict = timeseries_response_instance.to_dict()
# create an instance of TimeseriesResponse from a dict
timeseries_response_from_dict = TimeseriesResponse.from_dict(timeseries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


