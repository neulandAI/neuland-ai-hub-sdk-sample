# EmailCatalogOut

Static metadata for authoring custom email templates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**supported_languages** | **Array&lt;string&gt;** | Language codes emails can be authored in. | [default to undefined]
**global_variables** | [**Array&lt;VariableSpec&gt;**](VariableSpec.md) | Variables available in every email. | [default to undefined]
**emails** | [**Array&lt;EmailSpec&gt;**](EmailSpec.md) | Customizable emails and their available variables. | [default to undefined]

## Example

```typescript
import { EmailCatalogOut } from 'neuland-hub-sdk';

const instance: EmailCatalogOut = {
    supported_languages,
    global_variables,
    emails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
