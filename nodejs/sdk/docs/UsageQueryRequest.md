# UsageQueryRequest

Request for the unified usage aggregation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_start** | **string** | Inclusive start of the window. | [default to undefined]
**date_end** | **string** | Inclusive end of the window. | [default to undefined]
**bucket** | **string** |  | [optional] [default to undefined]
**group_by** | **Array&lt;string&gt;** | Categorical dimensions to break the totals down by. \&#39;user\&#39; and \&#39;group\&#39; require the tenant\&#39;s user-level-analytics opt-in. | [optional] [default to undefined]
**source** | **string** |  | [optional] [default to undefined]
**model** | **string** |  | [optional] [default to undefined]
**provider** | **string** |  | [optional] [default to undefined]
**assistant_id** | **number** |  | [optional] [default to undefined]
**project_id** | **number** |  | [optional] [default to undefined]
**limit** | **number** |  | [optional] [default to undefined]
**offset** | **number** | Row offset, for paginating rankings. | [optional] [default to 0]

## Example

```typescript
import { UsageQueryRequest } from 'neuland-hub-sdk';

const instance: UsageQueryRequest = {
    date_start,
    date_end,
    bucket,
    group_by,
    source,
    model,
    provider,
    assistant_id,
    project_id,
    limit,
    offset,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
