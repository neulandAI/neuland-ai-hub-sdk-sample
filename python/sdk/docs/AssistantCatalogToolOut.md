# AssistantCatalogToolOut

A catalog-tool attachment, identifying the catalog and tool by public id.  `assistant_catalog_id`/`tool_id` (int) are kept alongside the public ids (dual-key — both are returned permanently); external clients should reference `assistant_catalog_public_id`/`tool_public_id`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assistant_catalog_id** | **int** | Internal id of the catalog item (deprecated; use assistant_catalog_public_id). | 
**assistant_catalog_public_id** | **UUID** | Public id of the catalog item. | 
**tool_id** | **int** | Internal id of the tool (deprecated; use tool_public_id). | 
**tool_public_id** | **UUID** | Public id of the tool. | 

## Example

```python
from neuland_hub_sdk.models.assistant_catalog_tool_out import AssistantCatalogToolOut

# TODO update the JSON string below
json = "{}"
# create an instance of AssistantCatalogToolOut from a JSON string
assistant_catalog_tool_out_instance = AssistantCatalogToolOut.from_json(json)
# print the JSON string representation of the object
print(AssistantCatalogToolOut.to_json())

# convert the object into a dict
assistant_catalog_tool_out_dict = assistant_catalog_tool_out_instance.to_dict()
# create an instance of AssistantCatalogToolOut from a dict
assistant_catalog_tool_out_from_dict = AssistantCatalogToolOut.from_dict(assistant_catalog_tool_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


