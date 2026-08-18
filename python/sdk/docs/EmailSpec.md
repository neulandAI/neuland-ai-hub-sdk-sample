# EmailSpec

Catalog entry describing one customizable system email.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | [**EmailTemplateKey**](EmailTemplateKey.md) | System email identifier. | 
**label** | **str** | Human-readable name of the email. | 
**description** | **str** | When this email is sent. | 
**variables** | [**List[VariableSpec]**](VariableSpec.md) | Variables available to this email, on top of the global set. | 

## Example

```python
from neuland_hub_sdk.models.email_spec import EmailSpec

# TODO update the JSON string below
json = "{}"
# create an instance of EmailSpec from a JSON string
email_spec_instance = EmailSpec.from_json(json)
# print the JSON string representation of the object
print(EmailSpec.to_json())

# convert the object into a dict
email_spec_dict = email_spec_instance.to_dict()
# create an instance of EmailSpec from a dict
email_spec_from_dict = EmailSpec.from_dict(email_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


