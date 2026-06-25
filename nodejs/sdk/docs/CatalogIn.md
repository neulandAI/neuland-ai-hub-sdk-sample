# CatalogIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Unique catalog name identifying the model. | [default to undefined]
**description** | **string** |  | [default to undefined]
**multi_modal** | **boolean** | Whether the model accepts non-text inputs such as images. | [default to undefined]
**gdpr_compliant** | **boolean** | Whether the model may be used for GDPR-compliant workloads. | [default to undefined]
**embedding_dimension** | **number** |  | [optional] [default to undefined]
**supports_embedding** | **boolean** | Whether the model can generate embeddings. | [optional] [default to false]
**supports_transcription** | **boolean** | Whether the model can transcribe audio. | [optional] [default to false]
**auto_seed** | **boolean** | Whether to auto-create default settings for this catalog entry on seed. | [optional] [default to false]

## Example

```typescript
import { CatalogIn } from 'neuland-hub-sdk';

const instance: CatalogIn = {
    name,
    description,
    multi_modal,
    gdpr_compliant,
    embedding_dimension,
    supports_embedding,
    supports_transcription,
    auto_seed,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
