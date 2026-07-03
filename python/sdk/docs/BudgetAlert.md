# BudgetAlert

Saves the budget alerts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**tenant_id** | **int** | ID of the tenant the budget alert belongs to. | 
**name** | **str** | Name of the alert. | [optional] 
**threshold_amount** | **float** | Budget threshold, for notification. | [optional] [default to 0]
**current_spend** | **str** | Total Spent. In decimal to have more accuracy | [optional] [default to '0.000000']
**triggered** | **bool** | If the alert is triggered or not | [optional] [default to False]
**active** | **bool** | If the alert is enabled | [optional] [default to True]
**created_at** | **datetime** | Timestamp when the alert was created. | [optional] 
**updated_at** | **datetime** | Timestamp when alert was updated. | [optional] 
**created_user_id** | **int** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.budget_alert import BudgetAlert

# TODO update the JSON string below
json = "{}"
# create an instance of BudgetAlert from a JSON string
budget_alert_instance = BudgetAlert.from_json(json)
# print the JSON string representation of the object
print(BudgetAlert.to_json())

# convert the object into a dict
budget_alert_dict = budget_alert_instance.to_dict()
# create an instance of BudgetAlert from a dict
budget_alert_from_dict = BudgetAlert.from_dict(budget_alert_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


