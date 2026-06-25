# FormField

A single creator-defined input field of a form assistant.  ``name`` is the stable machine slug referenced as ``{{name}}`` in the assistant instructions; ``label`` is the display text. A missing name is derived from the label by :func:`normalize_form_fields`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**label** | **string** |  | [default to undefined]
**type** | [**FormFieldTypeEnum**](FormFieldTypeEnum.md) |  | [default to undefined]
**required** | **boolean** |  | [optional] [default to false]
**_options** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**placeholder** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { FormField } from 'neuland-hub-sdk';

const instance: FormField = {
    name,
    label,
    type,
    required,
    _options,
    placeholder,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
