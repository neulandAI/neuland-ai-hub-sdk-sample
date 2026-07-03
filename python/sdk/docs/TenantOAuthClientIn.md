# TenantOAuthClientIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | OAuth client identifier issued by the provider. | 
**authorize_url** | **str** | Provider authorization endpoint URL. | 
**token_url** | **str** | Provider token endpoint URL. | 
**revocation_url** | **str** |  | [optional] 
**redirect_uri** | **str** |  | [optional] 
**admin_consent_url** | **str** |  | [optional] 
**secret** | **str** | OAuth client secret issued by the provider. Write-only. | 

## Example

```python
from neuland_hub_sdk.models.tenant_o_auth_client_in import TenantOAuthClientIn

# TODO update the JSON string below
json = "{}"
# create an instance of TenantOAuthClientIn from a JSON string
tenant_o_auth_client_in_instance = TenantOAuthClientIn.from_json(json)
# print the JSON string representation of the object
print(TenantOAuthClientIn.to_json())

# convert the object into a dict
tenant_o_auth_client_in_dict = tenant_o_auth_client_in_instance.to_dict()
# create an instance of TenantOAuthClientIn from a dict
tenant_o_auth_client_in_from_dict = TenantOAuthClientIn.from_dict(tenant_o_auth_client_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


