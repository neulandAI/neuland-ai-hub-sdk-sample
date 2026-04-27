# Tarif

Model for creating or updating a tarif.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Primary key for the tarif record. | [optional] [default to undefined]
**name** | **string** | Name for the tarif to be created. Max 100 characters. | [default to undefined]
**price** | **number** | The price of the tarif. This field is required. | [default to undefined]
**hard_limit** | **number** |  | [optional] [default to undefined]
**is_unlimited** | **boolean** | Bypass usage checks if True. | [optional] [default to false]
**description** | **string** |  | [optional] [default to undefined]
**status** | [**TarifStatusEnum**](TarifStatusEnum.md) | active &#x3D; offered; retired &#x3D; not for new signups. | [optional] [default to undefined]
**is_default** | **boolean** |  | [optional] [default to false]
**creator_user_id** | **number** |  | [default to undefined]
**created_at** | **string** | Timestamp when the tarif was created. | [optional] [default to undefined]
**updated_at** | **string** | Timestamp when the tarif was last updated. | [optional] [default to undefined]

## Example

```typescript
import { Tarif } from 'neuland-hub-sdk';

const instance: Tarif = {
    id,
    name,
    price,
    hard_limit,
    is_unlimited,
    description,
    status,
    is_default,
    creator_user_id,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
