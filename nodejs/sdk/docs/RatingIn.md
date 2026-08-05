# RatingIn

Request body for creating or updating a rating.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rateable_type** | [**RateableTypeEnum**](RateableTypeEnum.md) | Kind of resource being rated. | [default to undefined]
**rateable_id** | **string** | Public id of the resource being rated. | [default to undefined]
**value** | **number** | Rating score, from 1 (worst) to 5 (best). | [default to undefined]
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
