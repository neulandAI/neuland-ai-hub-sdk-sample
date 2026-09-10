# DocumentUsageRow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_count** | **int** | Documents in the window. | 
**pending_count** | **int** | Documents with no content row yet (upload not processed). | 
**stored_bytes** | **int** | Bytes actually occupied: content rows counted once, since identical uploads are deduplicated per tenant by checksum. | 
**attributed_bytes** | **int** | Bytes summed per document. Exceeds stored_bytes when the same file is referenced from several libraries. | 
**group** | [**Dict[str, ResponseAuthGetEntraGroupsValue]**](ResponseAuthGetEntraGroupsValue.md) | Dimension values for this group, keyed by dimension name. | 
**bucket** | **str** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.document_usage_row import DocumentUsageRow

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentUsageRow from a JSON string
document_usage_row_instance = DocumentUsageRow.from_json(json)
# print the JSON string representation of the object
print(DocumentUsageRow.to_json())

# convert the object into a dict
document_usage_row_dict = document_usage_row_instance.to_dict()
# create an instance of DocumentUsageRow from a dict
document_usage_row_from_dict = DocumentUsageRow.from_dict(document_usage_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


