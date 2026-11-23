# AgentUsageMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost** | **number** | Total cost. | [default to undefined]
**total_tokens** | **number** | Total tokens. | [default to undefined]
**prompt_tokens** | **number** | Prompt tokens. | [default to undefined]
**completion_tokens** | **number** | Completion tokens. | [default to undefined]
**requests** | **number** | Number of usage records. | [default to undefined]
**cached_prompt_tokens** | **number** | Prompt tokens read from the provider cache. | [optional] [default to 0]
**cache_creation_tokens** | **number** | Prompt tokens written to the provider cache. | [optional] [default to 0]
**reasoning_tokens** | **number** | Reasoning tokens, already included in completion_tokens. | [optional] [default to 0]
**sessions** | **number** | Distinct chats with usage in the window. | [default to undefined]
**users** | **number** | Distinct users with usage in the window. | [default to undefined]
**playground_sessions** | **number** | Of the sessions, those in an agent\&#39;s playground (test chats). | [default to undefined]
**playground_tokens** | **number** | Of the tokens, those spent in playground test chats. | [default to undefined]
**playground_requests** | **number** | Of the requests, those made in playground test chats. | [default to undefined]
**playground_cost** | **number** | Of the cost, the part spent in playground test chats. | [default to undefined]

## Example

```typescript
import { AgentUsageMetrics } from '@neulandai/neuland-hub-sdk';

const instance: AgentUsageMetrics = {
    cost,
    total_tokens,
    prompt_tokens,
    completion_tokens,
    requests,
    cached_prompt_tokens,
    cache_creation_tokens,
    reasoning_tokens,
    sessions,
    users,
    playground_sessions,
    playground_tokens,
    playground_requests,
    playground_cost,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
