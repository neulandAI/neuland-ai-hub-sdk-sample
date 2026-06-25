# TokensPerModel

Model for total tokens of one llm resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**llm_model** | **string** | Catalog name of the model. | [default to undefined]
**duration** | **string** | Window the totals cover. | [default to undefined]
**total_tokens_count** | **number** | Total tokens (prompt + completion) in the window. | [default to undefined]
**prompt_token_count** | **number** | Prompt tokens consumed in the window. | [default to undefined]
**completion_token_count** | **number** | Completion tokens generated in the window. | [default to undefined]
**total_requests** | **number** | Number of requests in the window. | [default to undefined]

## Example

```typescript
import { TokensPerModel } from 'neuland-hub-sdk';

const instance: TokensPerModel = {
    llm_model,
    duration,
    total_tokens_count,
    prompt_token_count,
    completion_token_count,
    total_requests,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
