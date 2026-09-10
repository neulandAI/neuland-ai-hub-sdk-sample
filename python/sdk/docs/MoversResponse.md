# MoversResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_date** | **datetime** |  | 
**end_date** | **datetime** |  | 
**previous_start** | **datetime** |  | 
**previous_end** | **datetime** |  | 
**most_expensive_model** | [**ModelDelta**](ModelDelta.md) |  | 
**biggest_increase** | [**ModelDelta**](ModelDelta.md) |  | 
**biggest_decrease** | [**ModelDelta**](ModelDelta.md) |  | 
**per_model** | [**List[ModelDelta]**](ModelDelta.md) |  | 

## Example

```python
from neuland_hub_sdk.models.movers_response import MoversResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MoversResponse from a JSON string
movers_response_instance = MoversResponse.from_json(json)
# print the JSON string representation of the object
print(MoversResponse.to_json())

# convert the object into a dict
movers_response_dict = movers_response_instance.to_dict()
# create an instance of MoversResponse from a dict
movers_response_from_dict = MoversResponse.from_dict(movers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


