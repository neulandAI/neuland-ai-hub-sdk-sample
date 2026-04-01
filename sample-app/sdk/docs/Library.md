# Library

Library definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**creator_user_id** | **int** |  | 
**updater_user_id** | **int** |  | [optional] 
**id** | **int** |  | [optional] 
**tenant_id** | **int** |  | 
**name** | **str** |  | 
**description** | **str** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.library import Library

# TODO update the JSON string below
json = "{}"
# create an instance of Library from a JSON string
library_instance = Library.from_json(json)
# print the JSON string representation of the object
print(Library.to_json())

# convert the object into a dict
library_dict = library_instance.to_dict()
# create an instance of Library from a dict
library_from_dict = Library.from_dict(library_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


