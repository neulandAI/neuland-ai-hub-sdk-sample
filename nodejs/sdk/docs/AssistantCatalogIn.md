# AssistantCatalogIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**avatar** | **string** |  | [optional] [default to undefined]
**instructions** | **string** |  | [optional] [default to undefined]
**llm_catalog_id** | **string** |  | [optional] [default to undefined]
**temperature** | **number** |  | [optional] [default to undefined]
**similarity_top_k** | **number** |  | [optional] [default to undefined]
**version** | **string** |  | [optional] [default to undefined]
**predefined_prompts** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { AssistantCatalogIn } from 'neuland-hub-sdk';

const instance: AssistantCatalogIn = {
    name,
    description,
    avatar,
    instructions,
    llm_catalog_id,
    temperature,
    similarity_top_k,
    version,
    predefined_prompts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
