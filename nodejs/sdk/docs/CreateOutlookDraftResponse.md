# CreateOutlookDraftResponse

Response from creating an Outlook mailbox draft.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** | Whether the draft was created. | [default to undefined]
**message** | **string** | Human-readable result message. | [default to undefined]
**web_link** | **string** |  | [optional] [default to undefined]
**draft_id** | **string** |  | [optional] [default to undefined]
**from_mailbox** | **string** |  | [optional] [default to undefined]
**from_mailbox_kind** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateOutlookDraftResponse } from 'neuland-hub-sdk';

const instance: CreateOutlookDraftResponse = {
    success,
    message,
    web_link,
    draft_id,
    from_mailbox,
    from_mailbox_kind,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
