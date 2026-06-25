# GroupAppAccessIn

Schema for granting app access to a group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **number** | ID of the application to grant access to. | [default to undefined]
**group_ids** | **Array&lt;number&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { GroupAppAccessIn } from 'neuland-hub-sdk';

const instance: GroupAppAccessIn = {
    application_id,
    group_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
