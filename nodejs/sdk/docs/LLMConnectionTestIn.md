# LLMConnectionTestIn

In-flight model config to verify against the provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_name** | **string** | Catalog model name to target (maps to LLMCatalog.name). | [default to undefined]
**provider** | **string** | Provider backing the model. | [default to undefined]
**library** | **string** | Client library used to call the provider. | [default to undefined]
**supports_embedding** | **boolean** | Probe the model as an embedding model instead of chat. | [optional] [default to false]
**embedding_dimension** | **number** |  | [optional] [default to undefined]
**region** | **string** |  | [optional] [default to undefined]
**args** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**openai_resource** | **string** |  | [optional] [default to undefined]
**api_version** | **string** |  | [optional] [default to undefined]
**deployment_name** | **string** |  | [optional] [default to undefined]
**endpoint** | **string** |  | [optional] [default to undefined]
**api_key** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { LLMConnectionTestIn } from '@neulandai/neuland-hub-sdk';

const instance: LLMConnectionTestIn = {
    model_name,
    provider,
    library,
    supports_embedding,
    embedding_dimension,
    region,
    args,
    openai_resource,
    api_version,
    deployment_name,
    endpoint,
    api_key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
