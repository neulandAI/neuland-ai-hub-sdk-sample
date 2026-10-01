# GroupAppAccessIn

Schema for granting app access to a group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **string** | Public id of the application to grant access to. | [default to undefined]
**group_ids** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { GroupAppAccessIn } from '@neulandai/neuland-hub-sdk';

const instance: GroupAppAccessIn = {
    application_id,
    group_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
