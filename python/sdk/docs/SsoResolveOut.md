# SsoResolveOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slug** | **str** |  | 
**providers** | [**List[OAuth2ProviderEnum]**](OAuth2ProviderEnum.md) |  | 

## Example

```python
from neuland_hub_sdk.models.sso_resolve_out import SsoResolveOut

# TODO update the JSON string below
json = "{}"
# create an instance of SsoResolveOut from a JSON string
sso_resolve_out_instance = SsoResolveOut.from_json(json)
# print the JSON string representation of the object
print(SsoResolveOut.to_json())

# convert the object into a dict
sso_resolve_out_dict = sso_resolve_out_instance.to_dict()
# create an instance of SsoResolveOut from a dict
sso_resolve_out_from_dict = SsoResolveOut.from_dict(sso_resolve_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


