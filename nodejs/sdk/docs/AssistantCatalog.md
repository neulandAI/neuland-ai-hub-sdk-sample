# AssistantCatalog

Marketplace catalog for Assistants (operator-owned: outlives its superadmin creator).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **string** | UTC timestamp when the record was created. | [optional] [default to undefined]
**updated_at** | **string** | UTC timestamp when the record was last updated. | [optional] [default to undefined]
**creator_user_id** | **number** |  | [optional] [default to undefined]
**updater_user_id** | **number** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**public_id** | **string** | Public, non-enumerable external identifier for the assistant catalog item. Exposed to clients instead of the internal integer id. | [optional] [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**avatar** | **string** |  | [optional] [default to undefined]
**instructions** | **string** |  | [optional] [default to undefined]
**llm_catalog_id** | **number** |  | [optional] [default to undefined]
**temperature** | **number** |  | [optional] [default to undefined]
**similarity_top_k** | **number** |  | [optional] [default to undefined]
**version** | **string** |  | [optional] [default to undefined]
**state** | [**MarketplaceCatalogStateEnum**](MarketplaceCatalogStateEnum.md) |  | [optional] [default to undefined]
**predefined_prompts** | **Array&lt;any&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { AssistantCatalog } from 'neuland-hub-sdk';

const instance: AssistantCatalog = {
    created_at,
    updated_at,
    creator_user_id,
    updater_user_id,
    id,
    public_id,
    name,
    description,
    avatar,
    instructions,
    llm_catalog_id,
    temperature,
    similarity_top_k,
    version,
    state,
    predefined_prompts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
