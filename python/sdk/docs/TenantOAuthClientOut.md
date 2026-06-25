# TenantOAuthClientOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenant_id** | **int** |  | 
**oauth_client_id** | **int** |  | 
**provider_key** | [**OAuth2ProviderEnum**](OAuth2ProviderEnum.md) |  | 
**client_id** | **str** |  | 
**authorize_url** | **str** |  | 
**token_url** | **str** |  | 
**revocation_url** | **str** |  | [optional] 
**redirect_uri** | **str** |  | [optional] 
**admin_consent_url** | **str** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.tenant_o_auth_client_out import TenantOAuthClientOut

# TODO update the JSON string below
json = "{}"
# create an instance of TenantOAuthClientOut from a JSON string
tenant_o_auth_client_out_instance = TenantOAuthClientOut.from_json(json)
# print the JSON string representation of the object
print(TenantOAuthClientOut.to_json())

# convert the object into a dict
tenant_o_auth_client_out_dict = tenant_o_auth_client_out_instance.to_dict()
# create an instance of TenantOAuthClientOut from a dict
tenant_o_auth_client_out_from_dict = TenantOAuthClientOut.from_dict(tenant_o_auth_client_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


