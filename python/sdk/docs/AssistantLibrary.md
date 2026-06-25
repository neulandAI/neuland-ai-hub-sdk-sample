# AssistantLibrary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | UTC timestamp when the record was created. | [optional] 
**updated_at** | **datetime** | UTC timestamp when the record was last updated. | [optional] 
**creator_user_id** | **int** | ID of the user who created the record. | 
**updater_user_id** | **int** |  | [optional] 
**assistant_id** | **int** | ID of the assistant. | 
**library_id** | **int** | ID of the library linked to the assistant. | 

## Example

```python
from neuland_hub_sdk.models.assistant_library import AssistantLibrary

# TODO update the JSON string below
json = "{}"
# create an instance of AssistantLibrary from a JSON string
assistant_library_instance = AssistantLibrary.from_json(json)
# print the JSON string representation of the object
print(AssistantLibrary.to_json())

# convert the object into a dict
assistant_library_dict = assistant_library_instance.to_dict()
# create an instance of AssistantLibrary from a dict
assistant_library_from_dict = AssistantLibrary.from_dict(assistant_library_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


