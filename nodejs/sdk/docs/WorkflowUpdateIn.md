# WorkflowUpdateIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**spec** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**is_enabled** | **boolean** |  | [optional] [default to true]
**timezone** | **string** |  | [optional] [default to 'UTC']

## Example

```typescript
import { WorkflowUpdateIn } from '@neulandai/neuland-hub-sdk';

const instance: WorkflowUpdateIn = {
    name,
    description,
    spec,
    is_enabled,
    timezone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
