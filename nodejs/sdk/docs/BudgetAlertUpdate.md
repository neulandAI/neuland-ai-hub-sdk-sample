# BudgetAlertUpdate

Payload for updating a budget alert. All fields are optional.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**threshold_amount** | **number** |  | [optional] [default to undefined]
**active** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { BudgetAlertUpdate } from '@neulandai/neuland-hub-sdk';

const instance: BudgetAlertUpdate = {
    name,
    threshold_amount,
    active,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
