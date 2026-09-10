# DocumentUsageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_date** | **datetime** | Start of the window. | 
**end_date** | **datetime** | End of the window. | 
**bucket** | **str** |  | 
**group_by** | **List[str]** | Dimensions the rows are grouped by. | 
**totals** | [**DocumentMetrics**](DocumentMetrics.md) | Window totals, counted once. | 
**rows** | [**List[DocumentUsageRow]**](DocumentUsageRow.md) | One entry per group. | 
**truncated** | **bool** | True when more rows matched than were returned. | [optional] [default to False]

## Example

```python
from neuland_hub_sdk.models.document_usage_response import DocumentUsageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentUsageResponse from a JSON string
document_usage_response_instance = DocumentUsageResponse.from_json(json)
# print the JSON string representation of the object
print(DocumentUsageResponse.to_json())

# convert the object into a dict
document_usage_response_dict = document_usage_response_instance.to_dict()
# create an instance of DocumentUsageResponse from a dict
document_usage_response_from_dict = DocumentUsageResponse.from_dict(document_usage_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


