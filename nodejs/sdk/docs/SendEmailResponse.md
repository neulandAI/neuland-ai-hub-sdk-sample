# SendEmailResponse

Response from sending an email.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** | Whether the email was sent successfully. | [default to undefined]
**message** | **string** | Human-readable result message. | [default to undefined]
**recipients** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**from_mailbox** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { SendEmailResponse } from '@neulandai/neuland-hub-sdk';

const instance: SendEmailResponse = {
    success,
    message,
    recipients,
    from_mailbox,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
