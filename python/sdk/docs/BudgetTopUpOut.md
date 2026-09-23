# BudgetTopUpOut

A budget top-up. Floats, matching what PostgREST serves for these rows.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_id** | **UUID** | Public id of the budget top-up. | 
**amount** | **float** | Amount added to the pool for the month it was created in. | 
**consumed_amount** | **float** |  | 
**cancelled_at** | **datetime** |  | 
**created_at** | **datetime** | When the top-up was added. | 

## Example

```python
from neuland_hub_sdk.models.budget_top_up_out import BudgetTopUpOut

# TODO update the JSON string below
json = "{}"
# create an instance of BudgetTopUpOut from a JSON string
budget_top_up_out_instance = BudgetTopUpOut.from_json(json)
# print the JSON string representation of the object
print(BudgetTopUpOut.to_json())

# convert the object into a dict
budget_top_up_out_dict = budget_top_up_out_instance.to_dict()
# create an instance of BudgetTopUpOut from a dict
budget_top_up_out_from_dict = BudgetTopUpOut.from_dict(budget_top_up_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


