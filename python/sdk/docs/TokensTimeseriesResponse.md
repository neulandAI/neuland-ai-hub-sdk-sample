# TokensTimeseriesResponse

Response model for LLM tokens with timeseries data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_prompt_tokens** | **float** |  | 
**total_completion_tokens** | **float** |  | 
**total_requests** | **float** |  | 
**total_tokens** | **float** |  | 
**tokens_per_model** | [**List[TokensPerModel]**](TokensPerModel.md) |  | 
**timeseries_per_model** | [**List[TokenTimeseriesPerModel]**](TokenTimeseriesPerModel.md) |  | 

## Example

```python
from neuland_hub_sdk.models.tokens_timeseries_response import TokensTimeseriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TokensTimeseriesResponse from a JSON string
tokens_timeseries_response_instance = TokensTimeseriesResponse.from_json(json)
# print the JSON string representation of the object
print(TokensTimeseriesResponse.to_json())

# convert the object into a dict
tokens_timeseries_response_dict = tokens_timeseries_response_instance.to_dict()
# create an instance of TokensTimeseriesResponse from a dict
tokens_timeseries_response_from_dict = TokensTimeseriesResponse.from_dict(tokens_timeseries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


