# LibraryMemberBulkDelete


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_ids** | **List[int]** |  | 

## Example

```python
from neuland_hub_sdk.models.library_member_bulk_delete import LibraryMemberBulkDelete

# TODO update the JSON string below
json = "{}"
# create an instance of LibraryMemberBulkDelete from a JSON string
library_member_bulk_delete_instance = LibraryMemberBulkDelete.from_json(json)
# print the JSON string representation of the object
print(LibraryMemberBulkDelete.to_json())

# convert the object into a dict
library_member_bulk_delete_dict = library_member_bulk_delete_instance.to_dict()
# create an instance of LibraryMemberBulkDelete from a dict
library_member_bulk_delete_from_dict = LibraryMemberBulkDelete.from_dict(library_member_bulk_delete_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


