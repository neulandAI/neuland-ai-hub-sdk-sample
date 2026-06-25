# RatingIn

Request body for creating or updating a rating.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rateable_type** | [**RateableTypeEnum**](RateableTypeEnum.md) |  | [default to undefined]
**rateable_id** | **number** |  | [default to undefined]
**value** | **number** |  | [default to undefined]
**comment** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { RatingIn } from 'neuland-hub-sdk';

const instance: RatingIn = {
    rateable_type,
    rateable_id,
    value,
    comment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
