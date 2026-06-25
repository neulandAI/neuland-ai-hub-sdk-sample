# GroupIn

Schema for creating a user group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Display name of the user group. | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**source** | [**UserGroupSource**](UserGroupSource.md) |  | [optional] [default to undefined]
**external_id** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GroupIn } from 'neuland-hub-sdk';

const instance: GroupIn = {
    name,
    description,
    source,
    external_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
