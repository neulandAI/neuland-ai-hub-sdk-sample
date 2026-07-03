# CredentialIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **Dict[str, object]** | Credential field values to store, matching the part&#39;s JSON Schema. | 

## Example

```python
from neuland_hub_sdk.models.credential_in import CredentialIn

# TODO update the JSON string below
json = "{}"
# create an instance of CredentialIn from a JSON string
credential_in_instance = CredentialIn.from_json(json)
# print the JSON string representation of the object
print(CredentialIn.to_json())

# convert the object into a dict
credential_in_dict = credential_in_instance.to_dict()
# create an instance of CredentialIn from a dict
credential_in_from_dict = CredentialIn.from_dict(credential_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


