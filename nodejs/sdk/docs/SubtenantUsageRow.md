# SubtenantUsageRow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost** | **number** | Total cost. | [default to undefined]
**total_tokens** | **number** | Total tokens. | [default to undefined]
**prompt_tokens** | **number** | Prompt tokens. | [default to undefined]
**completion_tokens** | **number** | Completion tokens. | [default to undefined]
**requests** | **number** | Number of usage records. | [default to undefined]
**tenant_id** | **number** | Tenant id. | [default to undefined]
**tenant_name** | **string** | Tenant name. | [default to undefined]
**is_self** | **boolean** | Whether this row is the requesting (parent) tenant. | [default to undefined]

## Example

```typescript
import { SubtenantUsageRow } from '@neulandai/neuland-hub-sdk';

const instance: SubtenantUsageRow = {
    cost,
    total_tokens,
    prompt_tokens,
    completion_tokens,
    requests,
    tenant_id,
    tenant_name,
    is_self,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
