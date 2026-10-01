# CostBySource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **string** | Usage source name. | [default to undefined]
**total_cost** | **number** | Total cost for this source. | [default to undefined]
**total_tokens** | **number** | Total tokens for this source. | [default to undefined]
**prompt_tokens** | **number** | Prompt tokens for this source. | [default to undefined]
**completion_tokens** | **number** | Completion tokens for this source. | [default to undefined]
**record_count** | **number** | Number of usage records for this source. | [default to undefined]

## Example

```typescript
import { CostBySource } from '@neulandai/neuland-hub-sdk';

const instance: CostBySource = {
    source,
    total_cost,
    total_tokens,
    prompt_tokens,
    completion_tokens,
    record_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
