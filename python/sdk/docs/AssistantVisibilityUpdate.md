# AssistantVisibilityUpdate

Request body for updating assistant visibility.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**visibility** | [**AssistantVisibilityEnum**](AssistantVisibilityEnum.md) |  | 

## Example

```python
from neuland_hub_sdk.models.assistant_visibility_update import AssistantVisibilityUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of AssistantVisibilityUpdate from a JSON string
assistant_visibility_update_instance = AssistantVisibilityUpdate.from_json(json)
# print the JSON string representation of the object
print(AssistantVisibilityUpdate.to_json())

# convert the object into a dict
assistant_visibility_update_dict = assistant_visibility_update_instance.to_dict()
# create an instance of AssistantVisibilityUpdate from a dict
assistant_visibility_update_from_dict = AssistantVisibilityUpdate.from_dict(assistant_visibility_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


