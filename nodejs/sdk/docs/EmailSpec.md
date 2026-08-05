# EmailSpec

Catalog entry describing one customizable system email.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | [**EmailTemplateKey**](EmailTemplateKey.md) | System email identifier. | [default to undefined]
**label** | **string** | Human-readable name of the email. | [default to undefined]
**description** | **string** | When this email is sent. | [default to undefined]
**variables** | [**Array&lt;VariableSpec&gt;**](VariableSpec.md) | Variables available to this email, on top of the global set. | [default to undefined]

## Example

```typescript
import { EmailSpec } from 'neuland-hub-sdk';

const instance: EmailSpec = {
    key,
    label,
    description,
    variables,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
