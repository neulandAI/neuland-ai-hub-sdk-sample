# UserPreferenceOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Unique identifier of the preference record. | [default to undefined]
**user_id** | **number** | Identifier of the user these preferences belong to. | [default to undefined]
**theme_mode** | [**ThemeModeEnum**](ThemeModeEnum.md) |  | [optional] [default to undefined]
**lang** | **string** |  | [optional] [default to undefined]
**timezone** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { UserPreferenceOut } from 'neuland-hub-sdk';

const instance: UserPreferenceOut = {
    id,
    user_id,
    theme_mode,
    lang,
    timezone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
