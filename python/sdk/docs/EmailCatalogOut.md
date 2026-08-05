# EmailCatalogOut

Static metadata for authoring custom email templates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**supported_languages** | **List[str]** | Language codes emails can be authored in. | 
**global_variables** | [**List[VariableSpec]**](VariableSpec.md) | Variables available in every email. | 
**emails** | [**List[EmailSpec]**](EmailSpec.md) | Customizable emails and their available variables. | 

## Example

```python
from neuland_hub_sdk.models.email_catalog_out import EmailCatalogOut

# TODO update the JSON string below
json = "{}"
# create an instance of EmailCatalogOut from a JSON string
email_catalog_out_instance = EmailCatalogOut.from_json(json)
# print the JSON string representation of the object
print(EmailCatalogOut.to_json())

# convert the object into a dict
email_catalog_out_dict = email_catalog_out_instance.to_dict()
# create an instance of EmailCatalogOut from a dict
email_catalog_out_from_dict = EmailCatalogOut.from_dict(email_catalog_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


