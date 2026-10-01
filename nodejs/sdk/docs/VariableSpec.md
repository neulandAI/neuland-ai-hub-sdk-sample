# VariableSpec

A single variable an email template may reference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Placeholder name, used as {{ name }} in the body. | [default to undefined]
**required** | **boolean** | Whether the template must reference this variable. | [optional] [default to false]
**description** | **string** | What the variable renders to. | [default to undefined]
**example** | [**Example**](Example.md) |  | [optional] [default to undefined]

## Example

```typescript
import { VariableSpec } from '@neulandai/neuland-hub-sdk';

const instance: VariableSpec = {
    name,
    required,
    description,
    example,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
