# TemplateIn

Payload for creating or updating an email template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**text_body** | **string** | Plain-text body of the email. | [default to undefined]
**html_body** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { TemplateIn } from 'neuland-hub-sdk';

const instance: TemplateIn = {
    name,
    text_body,
    html_body,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
