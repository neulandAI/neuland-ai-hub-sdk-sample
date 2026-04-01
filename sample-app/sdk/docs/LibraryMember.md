# LibraryMember

Members for a library

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**creator_user_id** | **int** |  | 
**updater_user_id** | **int** |  | [optional] 
**library_id** | **int** |  | 
**user_id** | **int** |  | 
**role** | **str** |  | 

## Example

```python
from neuland_hub_sdk.models.library_member import LibraryMember

# TODO update the JSON string below
json = "{}"
# create an instance of LibraryMember from a JSON string
library_member_instance = LibraryMember.from_json(json)
# print the JSON string representation of the object
print(LibraryMember.to_json())

# convert the object into a dict
library_member_dict = library_member_instance.to_dict()
# create an instance of LibraryMember from a dict
library_member_from_dict = LibraryMember.from_dict(library_member_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


