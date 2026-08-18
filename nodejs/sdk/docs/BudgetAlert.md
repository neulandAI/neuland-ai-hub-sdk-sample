# BudgetAlert

Saves the budget alerts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [default to undefined]
**public_id** | **string** | Public, non-enumerable external identifier for the budget alert. Exposed to clients instead of the internal integer id. | [optional] [default to undefined]
**tenant_id** | **number** | ID of the tenant the budget alert belongs to. | [default to undefined]
**name** | **string** | Name of the alert. | [optional] [default to undefined]
**threshold_amount** | **number** | Budget threshold, for notification. | [optional] [default to 0]
**current_spend** | **string** | Total Spent. In decimal to have more accuracy | [optional] [default to '0.000000']
**triggered** | **boolean** | If the alert is triggered or not | [optional] [default to false]
**active** | **boolean** | If the alert is enabled | [optional] [default to true]
**created_at** | **string** | Timestamp when the alert was created. | [optional] [default to undefined]
**updated_at** | **string** | Timestamp when alert was updated. | [optional] [default to undefined]
**created_user_id** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { BudgetAlert } from 'neuland-hub-sdk';

const instance: BudgetAlert = {
    id,
    public_id,
    tenant_id,
    name,
    threshold_amount,
    current_spend,
    triggered,
    active,
    created_at,
    updated_at,
    created_user_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
