# SharedMailboxCandidateOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** |  | [default to undefined]
**display_name** | **string** |  | [default to undefined]
**connected** | **boolean** | Whether the caller has already connected this mailbox. | [default to undefined]
**kind** | **string** | \&#39;shared\&#39; &#x3D; Exchange shared mailbox the caller can open; \&#39;group\&#39; &#x3D; Microsoft 365 group the caller is a member of. | [optional] [default to KindEnum_shared]

## Example

```typescript
import { SharedMailboxCandidateOut } from 'neuland-hub-sdk';

const instance: SharedMailboxCandidateOut = {
    address,
    display_name,
    connected,
    kind,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
