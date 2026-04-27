# TarifIn

Model for creating or updating a tarif.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name for the tarif to be created. Max 100 characters. | [default to undefined]
**price** | **number** | The price of the tarif. This field is required. | [default to undefined]
**hard_limit** | **number** | The hard limit to restrict the user. | [default to undefined]
**status** | [**TarifStatusEnum**](TarifStatusEnum.md) |  | [optional] [default to undefined]
**expires_at** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**is_unlimited** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { TarifIn } from 'neuland-hub-sdk';

const instance: TarifIn = {
    name,
    price,
    hard_limit,
    status,
    expires_at,
    description,
    is_unlimited,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
