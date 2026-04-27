# AssistantIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**model** | **str** |  | [optional] 
**avatar** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**instructions** | **str** |  | [optional] 
**temperature** | **float** |  | [optional] 
**similarity_top_k** | **float** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.assistant_in import AssistantIn

# TODO update the JSON string below
json = "{}"
# create an instance of AssistantIn from a JSON string
assistant_in_instance = AssistantIn.from_json(json)
# print the JSON string representation of the object
print(AssistantIn.to_json())

# convert the object into a dict
assistant_in_dict = assistant_in_instance.to_dict()
# create an instance of AssistantIn from a dict
assistant_in_from_dict = AssistantIn.from_dict(assistant_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


