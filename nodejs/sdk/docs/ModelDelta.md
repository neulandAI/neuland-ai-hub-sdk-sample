# ModelDelta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | **string** | Model catalog name, or source for non-LLM rows. | [default to undefined]
**current_cost** | **number** |  | [default to undefined]
**previous_cost** | **number** |  | [default to undefined]
**delta** | **number** | current_cost - previous_cost. | [default to undefined]

## Example

```typescript
import { ModelDelta } from 'neuland-hub-sdk';

const instance: ModelDelta = {
    model,
    current_cost,
    previous_cost,
    delta,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
