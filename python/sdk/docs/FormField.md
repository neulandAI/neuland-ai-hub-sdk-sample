# FormField

A single creator-defined input field of a form assistant.  ``name`` is the stable machine slug referenced as ``{{name}}`` in the assistant instructions; ``label`` is the display text. A missing name is derived from the label by :func:`normalize_form_fields`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**label** | **str** |  | 
**type** | [**FormFieldTypeEnum**](FormFieldTypeEnum.md) |  | 
**required** | **bool** |  | [optional] [default to False]
**options** | **List[str]** |  | [optional] 
**placeholder** | **str** |  | [optional] 
**description** | **str** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.form_field import FormField

# TODO update the JSON string below
json = "{}"
# create an instance of FormField from a JSON string
form_field_instance = FormField.from_json(json)
# print the JSON string representation of the object
print(FormField.to_json())

# convert the object into a dict
form_field_dict = form_field_instance.to_dict()
# create an instance of FormField from a dict
form_field_from_dict = FormField.from_dict(form_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


