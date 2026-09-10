# CatalogIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Unique catalog name identifying the model. | 
**description** | **str** |  | 
**multi_modal** | **bool** | Whether the model accepts non-text inputs such as images. | 
**gdpr_compliant** | **bool** | Whether the model may be used for GDPR-compliant workloads. | 
**embedding_dimension** | **int** |  | [optional] 
**supports_embedding** | **bool** | Whether the model can generate embeddings. | [optional] [default to False]
**supports_transcription** | **bool** | Whether the model can transcribe audio. | [optional] [default to False]
**supports_reasoning_effort** | **bool** | Whether the model accepts a &#x60;reasoning_effort&#x60; hint. Chats only offer the effort picker for models where this is true. | [optional] [default to False]
**supports_clarification** | **bool** | Whether the model reliably drives the ask_user_question clarification tool; when false it asks in plain text instead. | [optional] [default to True]
**auto_seed** | **bool** | Whether to auto-create default settings for this catalog entry on seed. | [optional] [default to False]
**tier** | [**ModelTierEnum**](ModelTierEnum.md) |  | [optional] 
**auto_routable** | **bool** | Whether the router may pick this model on its own. Turn it off for preview or specialist models that should stay hand-selectable. | [optional] [default to True]

## Example

```python
from neuland_hub_sdk.models.catalog_in import CatalogIn

# TODO update the JSON string below
json = "{}"
# create an instance of CatalogIn from a JSON string
catalog_in_instance = CatalogIn.from_json(json)
# print the JSON string representation of the object
print(CatalogIn.to_json())

# convert the object into a dict
catalog_in_dict = catalog_in_instance.to_dict()
# create an instance of CatalogIn from a dict
catalog_in_from_dict = CatalogIn.from_dict(catalog_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


