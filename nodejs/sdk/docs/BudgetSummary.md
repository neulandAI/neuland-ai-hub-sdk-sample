# BudgetSummary

Current-month spend against the tenant\'s monthly pool budget.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**period_start** | **string** | Start of the current billing month. | [default to undefined]
**current_spend** | **number** | Tenant spend so far this month. | [default to undefined]
**pool_cap** | **number** |  | [default to undefined]
**remaining** | **number** |  | [default to undefined]
**percent_used** | **number** |  | [default to undefined]
**is_unlimited** | **boolean** | Whether the active plan is unlimited. | [default to undefined]
**plan_configured** | **boolean** | Whether the tenant has a usable plan (i.e. status is not no_plan or not_configured). | [default to undefined]
**status** | [**PlanStatus**](PlanStatus.md) | Plan classification, identical to what the enforcement gate uses: no_plan, unlimited, expired, not_configured, pool, or per_user. | [default to undefined]
**expires_at** | **string** |  | [default to undefined]
**expired** | **boolean** | Whether the active plan has expired. | [default to undefined]

## Example

```typescript
import { BudgetSummary } from 'neuland-hub-sdk';

const instance: BudgetSummary = {
    period_start,
    current_spend,
    pool_cap,
    remaining,
    percent_used,
    is_unlimited,
    plan_configured,
    status,
    expires_at,
    expired,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
