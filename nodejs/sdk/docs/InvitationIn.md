# InvitationIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | **Array&lt;string | null&gt;** | Email addresses to invite; already-invited or existing users are skipped. | [default to undefined]
**tenant_id** | **string** |  | [optional] [default to undefined]
**project_id** | **string** |  | [optional] [default to undefined]
**admin** | **boolean** |  | [optional] [default to undefined]
**role_id** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { InvitationIn } from 'neuland-hub-sdk';

const instance: InvitationIn = {
    emails,
    tenant_id,
    project_id,
    admin,
    role_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
