# SecretUpdateIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret** | **str** | New OAuth client secret to store. Write-only. | 

## Example

```python
from neuland_hub_sdk.models.secret_update_in import SecretUpdateIn

# TODO update the JSON string below
json = "{}"
# create an instance of SecretUpdateIn from a JSON string
secret_update_in_instance = SecretUpdateIn.from_json(json)
# print the JSON string representation of the object
print(SecretUpdateIn.to_json())

# convert the object into a dict
secret_update_in_dict = secret_update_in_instance.to_dict()
# create an instance of SecretUpdateIn from a dict
secret_update_in_from_dict = SecretUpdateIn.from_dict(secret_update_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


