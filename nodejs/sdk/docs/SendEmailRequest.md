# SendEmailRequest

Request to send an email from a tool call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tool_call_id** | **string** | The ID of the tool call that generated the draft | [default to undefined]
**to** | [**To1**](To1.md) |  | [default to undefined]
**subject** | **string** | Email subject | [default to undefined]
**body** | **string** | Email body content (can be markdown or HTML) | [default to undefined]
**cc** | [**Cc**](Cc.md) |  | [optional] [default to undefined]
**bcc** | [**Bcc**](Bcc.md) |  | [optional] [default to undefined]
**attachment_ids** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**mailbox** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { SendEmailRequest } from '@neulandai/neuland-hub-sdk';

const instance: SendEmailRequest = {
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
