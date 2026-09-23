# AssistantCatalog

Marketplace catalog for Assistants (operator-owned: outlives its superadmin creator).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | UTC timestamp when the record was created. | [optional] 
**updated_at** | **datetime** | UTC timestamp when the record was last updated. | [optional] 
**creator_user_id** | **int** |  | [optional] 
**updater_user_id** | **int** |  | [optional] 
**id** | **int** |  | [optional] 
**public_id** | **UUID** | Public, non-enumerable external identifier for the assistant catalog item. Exposed to clients instead of the internal integer id. | [optional] 
**name** | **str** |  | 
**description** | **str** |  | [optional] 
**avatar** | **str** |  | [optional] 
**instructions** | **str** |  | [optional] 
**llm_catalog_id** | **int** |  | [optional] 
**temperature** | **float** |  | [optional] 
**reasoning_effort** | **str** |  | [optional] 
**similarity_top_k** | **int** |  | [optional] 
**version** | **str** |  | [optional] 
**state** | [**MarketplaceCatalogStateEnum**](MarketplaceCatalogStateEnum.md) |  | [optional] 
**predefined_prompts** | **List[object]** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.assistant_catalog import AssistantCatalog

# TODO update the JSON string below
json = "{}"
# create an instance of AssistantCatalog from a JSON string
assistant_catalog_instance = AssistantCatalog.from_json(json)
# print the JSON string representation of the object
print(AssistantCatalog.to_json())

# convert the object into a dict
assistant_catalog_dict = assistant_catalog_instance.to_dict()
# create an instance of AssistantCatalog from a dict
assistant_catalog_from_dict = AssistantCatalog.from_dict(assistant_catalog_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


