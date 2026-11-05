# ModelObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Model id to send as &#x60;model&#x60;. | 
**object** | **str** |  | [optional] [default to 'model']
**created** | **int** | Unix time the model was added to the Hub. | 
**owned_by** | **str** | Model provider. | 

## Example

```python
from neuland_hub_sdk.models.model_object import ModelObject

# TODO update the JSON string below
json = "{}"
# create an instance of ModelObject from a JSON string
model_object_instance = ModelObject.from_json(json)
# print the JSON string representation of the object
print(ModelObject.to_json())

# convert the object into a dict
model_object_dict = model_object_instance.to_dict()
# create an instance of ModelObject from a dict
model_object_from_dict = ModelObject.from_dict(model_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


