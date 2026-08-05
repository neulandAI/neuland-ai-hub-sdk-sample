# TemplateIn

Payload for creating an email template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**subject** | **string** |  | [optional] [default to undefined]
**html_body** | **string** | HTML body of the email. | [default to undefined]
**key** | [**EmailTemplateKey**](EmailTemplateKey.md) |  | [optional] [default to undefined]
**language** | **string** | Language code the template applies to. | [optional] [default to 'en']
**is_draft** | **boolean** | Whether the template is a draft rather than the published default. | [optional] [default to false]

## Example

```typescript
import { TemplateIn } from 'neuland-hub-sdk';

const instance: TemplateIn = {
    name,
    subject,
    html_body,
    key,
    language,
    is_draft,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
