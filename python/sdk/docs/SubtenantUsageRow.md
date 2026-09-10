# SubtenantUsageRow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost** | **float** | Total cost. | 
**total_tokens** | **int** | Total tokens. | 
**prompt_tokens** | **int** | Prompt tokens. | 
**completion_tokens** | **int** | Completion tokens. | 
**requests** | **int** | Number of usage records. | 
**tenant_id** | **int** | Tenant id. | 
**tenant_name** | **str** | Tenant name. | 
**is_self** | **bool** | Whether this row is the requesting (parent) tenant. | 

## Example

```python
from neuland_hub_sdk.models.subtenant_usage_row import SubtenantUsageRow

# TODO update the JSON string below
json = "{}"
# create an instance of SubtenantUsageRow from a JSON string
subtenant_usage_row_instance = SubtenantUsageRow.from_json(json)
# print the JSON string representation of the object
print(SubtenantUsageRow.to_json())

# convert the object into a dict
subtenant_usage_row_dict = subtenant_usage_row_instance.to_dict()
# create an instance of SubtenantUsageRow from a dict
subtenant_usage_row_from_dict = SubtenantUsageRow.from_dict(subtenant_usage_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


