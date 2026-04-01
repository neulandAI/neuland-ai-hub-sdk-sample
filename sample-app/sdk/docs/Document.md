# Document


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**creator_user_id** | **int** |  | 
**tenant_id** | **int** |  | 
**project_id** | **int** |  | 
**chat_id** | **int** |  | 
**assistant_id** | **int** |  | [optional] 
**message_id** | **int** |  | [optional] 
**library_id** | **int** |  | [optional] 
**filename** | **str** |  | 
**content_type** | **str** |  | [optional] [default to 'text/plain']
**description** | **str** |  | 
**content_id** | **int** |  | [optional] 
**src** | **str** |  | 
**url** | **str** |  | 
**sp_site_id** | **str** |  | 
**sp_drive_id** | **str** |  | 
**sp_drive_item_id** | **str** |  | 
**sp_parent_folder_id** | **str** |  | 
**sp_parent_path** | **str** |  | 
**sp_last_modified_date_time** | **datetime** |  | 
**sp_import_folder_id** | **str** |  | 
**autosync** | **bool** |  | 
**import_token** | **UUID** |  | 
**import_started_at** | **datetime** |  | 
**import_finished_at** | **datetime** |  | 
**import_error** | **str** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.document import Document

# TODO update the JSON string below
json = "{}"
# create an instance of Document from a JSON string
document_instance = Document.from_json(json)
# print the JSON string representation of the object
print(Document.to_json())

# convert the object into a dict
document_dict = document_instance.to_dict()
# create an instance of Document from a dict
document_from_dict = Document.from_dict(document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


