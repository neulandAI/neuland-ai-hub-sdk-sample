# CredentialTemplateOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connector_id** | **int** | Unique identifier of the connector. | 
**name** | **str** | Human-readable connector name. | 
**auth_type** | [**ConnectorAuthType**](ConnectorAuthType.md) | Authentication mechanism the connector uses. | 
**is_admin** | **bool** | Whether the caller is allowed to edit the admin credential part. | 
**admin** | [**CredentialPartOut**](CredentialPartOut.md) |  | [optional] 
**user** | [**CredentialPartOut**](CredentialPartOut.md) |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.credential_template_out import CredentialTemplateOut

# TODO update the JSON string below
json = "{}"
# create an instance of CredentialTemplateOut from a JSON string
credential_template_out_instance = CredentialTemplateOut.from_json(json)
# print the JSON string representation of the object
print(CredentialTemplateOut.to_json())

# convert the object into a dict
credential_template_out_dict = credential_template_out_instance.to_dict()
# create an instance of CredentialTemplateOut from a dict
credential_template_out_from_dict = CredentialTemplateOut.from_dict(credential_template_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


