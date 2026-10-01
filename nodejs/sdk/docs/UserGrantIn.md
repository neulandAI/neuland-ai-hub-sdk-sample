# UserGrantIn

The complete set of direct grants a user should hold for one kind.  An item left out is revoked, which returns the user to what their roles grant — never to nothing, because grants only ever add.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_ids** | **Array&lt;string&gt;** | Public ids of the models, tools or connectors to grant. | [optional] [default to undefined]

## Example

```typescript
import { UserGrantIn } from '@neulandai/neuland-hub-sdk';

const instance: UserGrantIn = {
    item_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
