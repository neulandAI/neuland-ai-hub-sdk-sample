# TemplateUpdate

Partial payload for updating an email template. Every field is optional.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**subject** | **string** |  | [optional] [default to undefined]
**html_body** | **string** |  | [optional] [default to undefined]
**key** | [**EmailTemplateKey**](EmailTemplateKey.md) |  | [optional] [default to undefined]
**language** | **string** |  | [optional] [default to undefined]
**is_draft** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { TemplateUpdate } from 'neuland-hub-sdk';

const instance: TemplateUpdate = {
    name,
    subject,
    html_body,
    key,
    language,
    is_draft,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
