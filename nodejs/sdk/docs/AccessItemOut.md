# AccessItemOut

One item a user may use, and what put it there.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_id** | **number** | Internal id of the model, tool or connector. | [default to undefined]
**item_public_id** | **string** | Public id of the model, tool or connector. | [default to undefined]
**name** | **string** | Name of the model, tool or connector. | [default to undefined]
**roles** | **Array&lt;string | null&gt;** | Names of the user\&#39;s roles that grant this item. | [optional] [default to undefined]
**granted_directly** | **boolean** | Whether the user holds an unrevoked direct grant for it. | [optional] [default to false]
**always_available** | **boolean** | Whether the item reaches every user whatever their roles say. Only default tools do — they are bound in code for every chat — so an empty &#x60;roles&#x60; with no direct grant is expected rather than unexplained. | [optional] [default to false]

## Example

```typescript
import { AccessItemOut } from '@neulandai/neuland-hub-sdk';

const instance: AccessItemOut = {
    item_id,
    item_public_id,
    name,
    roles,
    granted_directly,
    always_available,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
