# TemplateOut

Email template as returned by the API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Unique identifier of the template. | 
**name** | **str** |  | 
**text_body** | **str** | Plain-text body of the email. | 
**html_body** | **str** |  | 

## Example

```python
from neuland_hub_sdk.models.template_out import TemplateOut

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateOut from a JSON string
template_out_instance = TemplateOut.from_json(json)
# print the JSON string representation of the object
print(TemplateOut.to_json())

# convert the object into a dict
template_out_dict = template_out_instance.to_dict()
# create an instance of TemplateOut from a dict
template_out_from_dict = TemplateOut.from_dict(template_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


