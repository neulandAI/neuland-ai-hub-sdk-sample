# Assistant

Represents an AI Assistant partially compatible with the OpenAI Assistant API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **string** |  | [optional] [default to undefined]
**state_reason** | **string** |  | [optional] [default to undefined]
**state_changed_at** | **string** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**tenant_id** | **number** |  | [default to undefined]
**created_at** | **string** |  | [optional] [default to undefined]
**creator_user_id** | **number** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**avatar** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**instructions** | **string** |  | [optional] [default to undefined]
**llm_catalog_id** | **number** |  | [optional] [default to undefined]
**temperature** | **number** |  | [optional] [default to undefined]
**similarity_top_k** | **number** |  | [optional] [default to undefined]
**pre_defined** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { Assistant } from 'neuland-hub-sdk';

const instance: Assistant = {
    state,
    state_reason,
    state_changed_at,
    id,
    tenant_id,
    created_at,
    creator_user_id,
    name,
    avatar,
    description,
    instructions,
    llm_catalog_id,
    temperature,
    similarity_top_k,
    pre_defined,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
