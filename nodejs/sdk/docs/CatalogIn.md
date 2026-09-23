# CatalogIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Unique catalog name identifying the model. | [default to undefined]
**description** | **string** |  | [default to undefined]
**badge** | **string** |  | [optional] [default to undefined]
**knowledge_cutoff** | **string** |  | [optional] [default to undefined]
**multi_modal** | **boolean** | Whether the model accepts non-text inputs such as images. | [default to undefined]
**gdpr_compliant** | **boolean** | Whether the model may be used for GDPR-compliant workloads. | [default to undefined]
**embedding_dimension** | **number** |  | [optional] [default to undefined]
**supports_embedding** | **boolean** | Whether the model can generate embeddings. | [optional] [default to false]
**supports_transcription** | **boolean** | Whether the model can transcribe audio. | [optional] [default to false]
**supports_reasoning_effort** | **boolean** | Whether the model accepts a &#x60;reasoning_effort&#x60; hint. Chats only offer the effort picker for models where this is true. | [optional] [default to false]
**supports_clarification** | **boolean** | Whether the model reliably drives the ask_user_question clarification tool; when false it asks in plain text instead. | [optional] [default to true]
**auto_seed** | **boolean** | Whether to auto-create default settings for this catalog entry on seed. | [optional] [default to false]
**tier** | [**ModelTierEnum**](ModelTierEnum.md) |  | [optional] [default to undefined]
**auto_routable** | **boolean** | Whether the router may pick this model on its own. Turn it off for preview or specialist models that should stay hand-selectable. | [optional] [default to true]

## Example

```typescript
import { CatalogIn } from 'neuland-hub-sdk';

const instance: CatalogIn = {
    name,
    description,
    badge,
    knowledge_cutoff,
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
