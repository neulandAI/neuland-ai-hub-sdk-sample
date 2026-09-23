# BudgetTopUpRequest

Payload for adding a budget top-up.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | Whole euros to add to the tenant&#39;s monthly pool. | 

## Example

```python
from neuland_hub_sdk.models.budget_top_up_request import BudgetTopUpRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BudgetTopUpRequest from a JSON string
budget_top_up_request_instance = BudgetTopUpRequest.from_json(json)
# print the JSON string representation of the object
print(BudgetTopUpRequest.to_json())

# convert the object into a dict
budget_top_up_request_dict = budget_top_up_request_instance.to_dict()
# create an instance of BudgetTopUpRequest from a dict
budget_top_up_request_from_dict = BudgetTopUpRequest.from_dict(budget_top_up_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


