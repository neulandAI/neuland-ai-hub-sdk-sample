# SendEmailResponse

Response from sending an email.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** | Whether the email was sent successfully. | [default to undefined]
**message** | **string** | Human-readable result message. | [default to undefined]
**recipients** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { SendEmailResponse } from 'neuland-hub-sdk';

const instance: SendEmailResponse = {
    success,
    message,
    recipients,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
