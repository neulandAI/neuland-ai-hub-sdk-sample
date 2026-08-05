# TemplateOut

Email template as returned by the API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Unique identifier of the template. | [default to undefined]
**public_id** | **string** | Public, non-enumerable external identifier of the template. | [default to undefined]
**name** | **string** |  | [default to undefined]
**subject** | **string** |  | [default to undefined]
**html_body** | **string** |  | [default to undefined]
**key** | **string** |  | [default to undefined]
**language** | **string** | Language code the template applies to. | [default to undefined]
**is_draft** | **boolean** | Whether the template is a draft rather than the published default. | [default to undefined]

## Example

```typescript
import { TemplateOut } from 'neuland-hub-sdk';

const instance: TemplateOut = {
    id,
    public_id,
    name,
    subject,
    html_body,
    key,
    language,
    is_draft,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
