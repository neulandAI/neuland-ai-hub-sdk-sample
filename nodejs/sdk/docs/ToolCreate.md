# ToolCreate

Fields required to create a tool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Human-readable name of the tool. | [default to undefined]
**description** | **string** | Short description of what the tool does. | [default to undefined]
**prompt** | **string** |  | [optional] [default to undefined]
**category_public_id** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ToolCreate } from '@neulandai/neuland-hub-sdk';

const instance: ToolCreate = {
    name,
    description,
    prompt,
    category_public_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
