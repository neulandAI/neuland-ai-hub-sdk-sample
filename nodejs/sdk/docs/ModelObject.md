# ModelObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Model id to send as &#x60;model&#x60;. | [default to undefined]
**object** | **string** |  | [optional] [default to 'model']
**created** | **number** | Unix time the model was added to the Hub. | [default to undefined]
**owned_by** | **string** | Model provider. | [default to undefined]

## Example

```typescript
import { ModelObject } from '@neulandai/neuland-hub-sdk';

const instance: ModelObject = {
    id,
    object,
    created,
    owned_by,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
