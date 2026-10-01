# ProjectLibrary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **string** | UTC timestamp when the record was created. | [optional] [default to undefined]
**updated_at** | **string** | UTC timestamp when the record was last updated. | [optional] [default to undefined]
**creator_user_id** | **number** | ID of the user who created the record. | [default to undefined]
**updater_user_id** | **number** |  | [optional] [default to undefined]
**project_id** | **number** | ID of the project. | [default to undefined]
**library_id** | **number** | ID of the library linked to the project. | [default to undefined]

## Example

```typescript
import { ProjectLibrary } from '@neulandai/neuland-hub-sdk';

const instance: ProjectLibrary = {
    created_at,
    updated_at,
    creator_user_id,
    updater_user_id,
    project_id,
    library_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
