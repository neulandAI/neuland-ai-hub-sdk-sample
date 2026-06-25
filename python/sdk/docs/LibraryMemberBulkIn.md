# LibraryMemberBulkIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**members** | [**List[LibraryMemberIn]**](LibraryMemberIn.md) | Members to add to the library. | 

## Example

```python
from neuland_hub_sdk.models.library_member_bulk_in import LibraryMemberBulkIn

# TODO update the JSON string below
json = "{}"
# create an instance of LibraryMemberBulkIn from a JSON string
library_member_bulk_in_instance = LibraryMemberBulkIn.from_json(json)
# print the JSON string representation of the object
print(LibraryMemberBulkIn.to_json())

# convert the object into a dict
library_member_bulk_in_dict = library_member_bulk_in_instance.to_dict()
# create an instance of LibraryMemberBulkIn from a dict
library_member_bulk_in_from_dict = LibraryMemberBulkIn.from_dict(library_member_bulk_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


