# AssistantMember

Saves the members of an AI Assistant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **string** | Timestamp when the membership was created. | [optional] [default to undefined]
**assistant_id** | **number** | ID of the assistant. | [default to undefined]
**user_id** | **number** |  | [default to undefined]
**granted_via** | [**AssistantMemberGrantedViaEnum**](AssistantMemberGrantedViaEnum.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AssistantMember } from 'neuland-hub-sdk';

const instance: AssistantMember = {
    created_at,
    assistant_id,
    user_id,
    granted_via,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
