# GroupSyncOut

Result of an on-demand external-group membership sync.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**directory_member_count** | **number** | Number of members found in the external directory group. | [default to undefined]
**synced_member_count** | **number** | Number of members successfully synced into the group. | [default to undefined]
**unprovisioned_member_count** | **number** | Number of directory members with no matching provisioned user. | [default to undefined]

## Example

```typescript
import { GroupSyncOut } from '@neulandai/neuland-hub-sdk';

const instance: GroupSyncOut = {
    directory_member_count,
    synced_member_count,
    unprovisioned_member_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
