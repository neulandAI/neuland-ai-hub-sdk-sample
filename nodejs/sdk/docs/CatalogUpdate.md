# CatalogUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**multi_modal** | **boolean** |  | [optional] [default to undefined]
**gdpr_compliant** | **boolean** |  | [optional] [default to undefined]
**embedding_dimension** | **number** |  | [optional] [default to undefined]
**supports_embedding** | **boolean** |  | [optional] [default to undefined]
**supports_transcription** | **boolean** |  | [optional] [default to undefined]
**supports_reasoning_effort** | **boolean** |  | [optional] [default to undefined]
**supports_clarification** | **boolean** |  | [optional] [default to undefined]
**auto_seed** | **boolean** |  | [optional] [default to undefined]
**tier** | [**ModelTierEnum**](ModelTierEnum.md) |  | [optional] [default to undefined]
**auto_routable** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { CatalogUpdate } from 'neuland-hub-sdk';

const instance: CatalogUpdate = {
    name,
    description,
    multi_modal,
    gdpr_compliant,
    embedding_dimension,
    supports_embedding,
    supports_transcription,
    supports_reasoning_effort,
    supports_clarification,
    auto_seed,
    tier,
    auto_routable,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
