# UserAccessOut

A user\'s effective access across all three kinds, with provenance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **number** |  | [default to undefined]
**user_public_id** | **string** |  | [default to undefined]
**tenant_id** | **number** |  | [default to undefined]
**models** | [**Array&lt;AccessItemOut&gt;**](AccessItemOut.md) |  | [optional] [default to undefined]
**tools** | [**Array&lt;AccessItemOut&gt;**](AccessItemOut.md) |  | [optional] [default to undefined]
**connectors** | [**Array&lt;AccessItemOut&gt;**](AccessItemOut.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UserAccessOut } from '@neulandai/neuland-hub-sdk';

const instance: UserAccessOut = {
    user_id,
    user_public_id,
    tenant_id,
    models,
    tools,
    connectors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
