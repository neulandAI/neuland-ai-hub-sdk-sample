# ModelDelta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | **str** | Model catalog name, or source for non-LLM rows. | 
**current_cost** | **float** |  | 
**previous_cost** | **float** |  | 
**delta** | **float** | current_cost - previous_cost. | 

## Example

```python
from neuland_hub_sdk.models.model_delta import ModelDelta

# TODO update the JSON string below
json = "{}"
# create an instance of ModelDelta from a JSON string
model_delta_instance = ModelDelta.from_json(json)
# print the JSON string representation of the object
print(ModelDelta.to_json())

# convert the object into a dict
model_delta_dict = model_delta_instance.to_dict()
# create an instance of ModelDelta from a dict
model_delta_from_dict = ModelDelta.from_dict(model_delta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


