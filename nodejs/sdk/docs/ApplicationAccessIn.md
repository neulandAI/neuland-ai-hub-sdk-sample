# ApplicationAccessIn

Schema for granting app access to users

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **string** | Public id of the application to grant access to. | [default to undefined]
**user_ids** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { ApplicationAccessIn } from '@neulandai/neuland-hub-sdk';

const instance: ApplicationAccessIn = {
    application_id,
    user_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
