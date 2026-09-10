# BudgetSummary

Current-month spend against the tenant's monthly pool budget.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**period_start** | **datetime** | Start of the current billing month. | 
**current_spend** | **float** | Tenant spend so far this month. | 
**pool_cap** | **float** |  | 
**remaining** | **float** |  | 
**percent_used** | **float** |  | 
**is_unlimited** | **bool** | Whether the active plan is unlimited. | 
**plan_configured** | **bool** | Whether the tenant has a usable plan (i.e. status is not no_plan or not_configured). | 
**status** | [**PlanStatus**](PlanStatus.md) | Plan classification, identical to what the enforcement gate uses: no_plan, unlimited, expired, not_configured, pool, or per_user. | 
**expires_at** | **datetime** |  | 
**expired** | **bool** | Whether the active plan has expired. | 

## Example

```python
from neuland_hub_sdk.models.budget_summary import BudgetSummary

# TODO update the JSON string below
json = "{}"
# create an instance of BudgetSummary from a JSON string
budget_summary_instance = BudgetSummary.from_json(json)
# print the JSON string representation of the object
print(BudgetSummary.to_json())

# convert the object into a dict
budget_summary_dict = budget_summary_instance.to_dict()
# create an instance of BudgetSummary from a dict
budget_summary_from_dict = BudgetSummary.from_dict(budget_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


