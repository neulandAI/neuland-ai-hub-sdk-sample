# ApiKey

api key model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Primary key for api keys | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**key_id** | **string** | Public part of the key | [default to undefined]
**environment** | **string** | Environment where the key is used. | [optional] [default to undefined]
**hashed_secret** | **string** | hashed api key | [default to undefined]
**active** | **boolean** |  | [optional] [default to true]
**version** | **string** | Version of the API key for rotation purposes. | [optional] [default to 'v1']
**creator_user_id** | **number** | ID of the user who created the key. | [default to undefined]
**created_at** | **string** | Timestamp when the key was created. | [optional] [default to undefined]
**last_used_at** | **string** |  | [optional] [default to undefined]
**expires_at** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ApiKey } from 'neuland-hub-sdk';

const instance: ApiKey = {
    id,
    name,
    description,
    key_id,
    environment,
    hashed_secret,
    active,
    version,
    creator_user_id,
    created_at,
    last_used_at,
    expires_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
