# CreateOutlookDraftRequest

Request to materialize a chat draft as a real Outlook mailbox draft.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tool_call_id** | **string** | The ID of the tool call that generated the draft | [default to undefined]
**to** | [**To**](To.md) |  | [optional] [default to undefined]
**subject** | **string** | Email subject | [optional] [default to '']
**body** | **string** | Email body content (markdown or HTML) | [optional] [default to '']
**cc** | [**Cc**](Cc.md) |  | [optional] [default to undefined]
**bcc** | [**Bcc**](Bcc.md) |  | [optional] [default to undefined]
**attachment_ids** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**mailbox** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateOutlookDraftRequest } from '@neulandai/neuland-hub-sdk';

const instance: CreateOutlookDraftRequest = {
    tool_call_id,
    to,
    subject,
    body,
    cc,
    bcc,
    attachment_ids,
    mailbox,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
