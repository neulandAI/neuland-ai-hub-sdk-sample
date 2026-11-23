# MyAssistantMembershipOut

The caller\'s own access to one assistant: a direct membership row, or `GROUP` when only a group grants it, with the caller\'s conversion flag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assistant_id** | **number** | Internal id of the assistant (deprecated; use assistant_public_id). | [default to undefined]
**assistant_public_id** | **string** | Public id of the assistant. | [default to undefined]
**granted_via** | **string** | INVITED or DISCOVERED for a direct membership, GROUP for group-only access. | [default to undefined]
**is_tool** | **boolean** | Whether the caller has converted the assistant into a tool. | [default to undefined]

## Example

```typescript
import { MyAssistantMembershipOut } from '@neulandai/neuland-hub-sdk';

const instance: MyAssistantMembershipOut = {
    assistant_id,
    assistant_public_id,
    granted_via,
    is_tool,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
