# BulkResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Number of rows affected. | 
**ids** | **List[int]** | IDs that were targeted by the operation. | 

## Example

```python
from neuland_hub_sdk.models.bulk_result import BulkResult

# TODO update the JSON string below
json = "{}"
# create an instance of BulkResult from a JSON string
bulk_result_instance = BulkResult.from_json(json)
# print the JSON string representation of the object
print(BulkResult.to_json())

# convert the object into a dict
bulk_result_dict = bulk_result_instance.to_dict()
# create an instance of BulkResult from a dict
bulk_result_from_dict = BulkResult.from_dict(bulk_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


