# BudgetAlertUpdate

ALert update model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**threshold_amount** | **float** |  | [optional] 
**active** | **bool** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.budget_alert_update import BudgetAlertUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of BudgetAlertUpdate from a JSON string
budget_alert_update_instance = BudgetAlertUpdate.from_json(json)
# print the JSON string representation of the object
print(BudgetAlertUpdate.to_json())

# convert the object into a dict
budget_alert_update_dict = budget_alert_update_instance.to_dict()
# create an instance of BudgetAlertUpdate from a dict
budget_alert_update_from_dict = BudgetAlertUpdate.from_dict(budget_alert_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


