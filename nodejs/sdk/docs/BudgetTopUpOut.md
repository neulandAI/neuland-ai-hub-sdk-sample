# BudgetTopUpOut

A budget top-up. Floats, matching what PostgREST serves for these rows.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_id** | **string** | Public id of the budget top-up. | [default to undefined]
**amount** | **number** | Amount added to the pool for the month it was created in. | [default to undefined]
**consumed_amount** | **number** |  | [default to undefined]
**cancelled_at** | **string** |  | [default to undefined]
**created_at** | **string** | When the top-up was added. | [default to undefined]

## Example

```typescript
import { BudgetTopUpOut } from 'neuland-hub-sdk';

const instance: BudgetTopUpOut = {
    public_id,
    amount,
    consumed_amount,
    cancelled_at,
    created_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
