# ToolOut

A tool as returned by the API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Unique identifier of the tool. | [default to undefined]
**public_id** | **string** | Public, non-enumerable external identifier of the tool. | [default to undefined]
**name** | **string** | Human-readable name of the tool. | [default to undefined]
**description** | **string** |  | [default to undefined]
**prompt** | **string** |  | [default to undefined]
**created_at** | **string** | UTC timestamp when the tool was created. | [default to undefined]
**updated_at** | **string** |  | [default to undefined]
**category** | [**CategoryOut**](CategoryOut.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ToolOut } from '@neulandai/neuland-hub-sdk';

const instance: ToolOut = {
    id,
    public_id,
    name,
    description,
    prompt,
    created_at,
    updated_at,
    category,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
