# UsageQueryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_date** | **datetime** | Start of the window. | 
**end_date** | **datetime** | End of the window. | 
**bucket** | **str** |  | 
**group_by** | **List[str]** | Dimensions the rows are grouped by. | 
**totals** | [**UsageMetrics**](UsageMetrics.md) | Window totals, counted once per record (no group fan-out). | 
**rows** | [**List[UsageRow]**](UsageRow.md) | One entry per group (and time bucket). | 
**truncated** | **bool** | True when more rows matched than were returned (capped at MAX_USAGE_ROWS) — narrow the window or dimensions for a complete set. | [optional] [default to False]

## Example

```python
from neuland_hub_sdk.models.usage_query_response import UsageQueryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UsageQueryResponse from a JSON string
usage_query_response_instance = UsageQueryResponse.from_json(json)
# print the JSON string representation of the object
print(UsageQueryResponse.to_json())

# convert the object into a dict
usage_query_response_dict = usage_query_response_instance.to_dict()
# create an instance of UsageQueryResponse from a dict
usage_query_response_from_dict = UsageQueryResponse.from_dict(usage_query_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


