# WorkflowIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to '']
**spec** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**chat_id** | **number** |  | [optional] [default to undefined]
**timezone** | **string** |  | [optional] [default to 'UTC']
**is_enabled** | **boolean** |  | [optional] [default to true]

## Example

```typescript
import { WorkflowIn } from '@neulandai/neuland-hub-sdk';

const instance: WorkflowIn = {
    name,
    description,
    spec,
    chat_id,
    timezone,
    is_enabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
