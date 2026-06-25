# CostByModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider** | **string** | Provider of the model. | [default to undefined]
**model** | **string** | Catalog name of the model. | [default to undefined]
**total_cost** | **number** | Total cost for this model. | [default to undefined]
**total_tokens** | **number** | Total tokens for this model. | [default to undefined]
**prompt_tokens** | **number** | Prompt tokens for this model. | [default to undefined]
**completion_tokens** | **number** | Completion tokens for this model. | [default to undefined]
**record_count** | **number** | Number of usage records for this model. | [default to undefined]

## Example

```typescript
import { CostByModel } from 'neuland-hub-sdk';

const instance: CostByModel = {
    provider,
    model,
    total_cost,
    total_tokens,
    prompt_tokens,
    completion_tokens,
    record_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
