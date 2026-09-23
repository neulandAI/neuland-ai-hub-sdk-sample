# SharedMailbox

One connected shared mailbox — the stored claim shape AND the API response shape, so a new field is added exactly once.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | SMTP address of the shared mailbox (lower-cased). | [default to undefined]
**display_name** | **string** | Label shown in the UI; defaults to the directory name. | [optional] [default to '']
**added_at** | **string** |  | [optional] [default to undefined]
**kind** | **string** | \&#39;shared\&#39;: an Exchange shared mailbox, read via /users/{address}. \&#39;group\&#39;: a Microsoft 365 group — its mail is read via /groups/{id}/threads and sends go through the user\&#39;s own mailbox with the group as sender. | [optional] [default to KindEnum_shared]
**group_id** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { SharedMailbox } from 'neuland-hub-sdk';

const instance: SharedMailbox = {
    address,
    display_name,
    added_at,
    kind,
    group_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
