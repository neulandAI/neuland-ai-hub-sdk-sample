# TemplateIn

Payload for creating or updating an email template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**text_body** | **str** | Plain-text body of the email. | 
**html_body** | **str** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.template_in import TemplateIn

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateIn from a JSON string
template_in_instance = TemplateIn.from_json(json)
# print the JSON string representation of the object
print(TemplateIn.to_json())

# convert the object into a dict
template_in_dict = template_in_instance.to_dict()
# create an instance of TemplateIn from a dict
template_in_from_dict = TemplateIn.from_dict(template_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


