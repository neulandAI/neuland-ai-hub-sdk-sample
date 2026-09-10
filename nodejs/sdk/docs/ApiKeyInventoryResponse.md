# ApiKeyInventoryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rows** | [**Array&lt;ApiKeyInventoryRow&gt;**](ApiKeyInventoryRow.md) | One entry per key. | [default to undefined]
**truncated** | **boolean** | True when more keys matched than were returned. | [optional] [default to false]

## Example

```typescript
import { ApiKeyInventoryResponse } from 'neuland-hub-sdk';

const instance: ApiKeyInventoryResponse = {
    rows,
    truncated,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
