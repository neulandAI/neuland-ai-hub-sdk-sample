# RoleIn

A new role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Display name of the role. | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**permissions** | **Array&lt;string&gt;** | Permission keys the role grants. | [optional] [default to undefined]
**tenant_id** | **string** |  | [optional] [default to undefined]
**all_models** | **boolean** | Whether the role grants every model the tenant enables. | [optional] [default to true]
**all_tools** | **boolean** | Whether the role grants every tool the tenant enables. | [optional] [default to true]
**all_connectors** | **boolean** | Whether the role grants every connector the tenant enables. | [optional] [default to true]
**models** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**tools** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**connectors** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { RoleIn } from 'neuland-hub-sdk';

const instance: RoleIn = {
    name,
    description,
    permissions,
    tenant_id,
    all_models,
    all_tools,
    all_connectors,
    models,
    tools,
    connectors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
