# RatingIn

Request body for creating or updating a rating.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rateable_type** | [**RateableTypeEnum**](RateableTypeEnum.md) |  | 
**rateable_id** | **int** |  | 
**value** | **int** |  | 
**comment** | **str** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.rating_in import RatingIn

# TODO update the JSON string below
json = "{}"
# create an instance of RatingIn from a JSON string
rating_in_instance = RatingIn.from_json(json)
# print the JSON string representation of the object
print(RatingIn.to_json())

# convert the object into a dict
rating_in_dict = rating_in_instance.to_dict()
# create an instance of RatingIn from a dict
rating_in_from_dict = RatingIn.from_dict(rating_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


