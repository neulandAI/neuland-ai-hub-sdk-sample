# BodyReportsBulkAction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | 
**selected_ids** | **List[Optional[str]]** |  | [optional] [default to []]

## Example

```python
from neuland_hub_sdk.models.body_reports_bulk_action import BodyReportsBulkAction

# TODO update the JSON string below
json = "{}"
# create an instance of BodyReportsBulkAction from a JSON string
body_reports_bulk_action_instance = BodyReportsBulkAction.from_json(json)
# print the JSON string representation of the object
print(BodyReportsBulkAction.to_json())

# convert the object into a dict
body_reports_bulk_action_dict = body_reports_bulk_action_instance.to_dict()
# create an instance of BodyReportsBulkAction from a dict
body_reports_bulk_action_from_dict = BodyReportsBulkAction.from_dict(body_reports_bulk_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


