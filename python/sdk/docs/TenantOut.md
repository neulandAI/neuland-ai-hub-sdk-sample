# TenantOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Unique identifier of the tenant. | 
**created_at** | **datetime** | UTC timestamp when the tenant was created. | 
**creator_user_id** | **int** |  | [optional] 
**name** | **str** | Internal name of the tenant. | 
**slug** | **str** | URL-safe unique identifier for the tenant. | 
**domain** | **str** |  | [optional] 
**parent_tenant_id** | **int** |  | [optional] 
**subtenants_enabled** | **bool** | Whether this tenant may create child tenants. | 
**timezone** | **str** | Default IANA timezone for the tenant. | 
**locale** | **str** | Default locale for the tenant. | 
**tarif_id** | **int** |  | [optional] 
**max_users** | **int** |  | [optional] 
**max_projects** | **int** |  | [optional] 
**licenses** | **int** |  | [optional] 
**display_name** | **str** |  | [optional] 
**motto** | **str** |  | [optional] 
**logo_url** | **str** |  | [optional] 
**square_logo_url** | **str** |  | [optional] 
**favicon_url** | **str** |  | [optional] 
**chat_square_logo_url** | **str** |  | [optional] 
**primary_color** | **str** |  | [optional] 
**secondary_color** | **str** |  | [optional] 
**theme** | **str** |  | [optional] 
**storage_limit_gb** | **int** |  | [optional] 
**api_rate_limit** | **int** |  | [optional] 
**state** | **str** |  | [optional] 
**upstream_tenant_id** | **str** |  | [optional] 
**upstream_oidc_issuer** | **str** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.tenant_out import TenantOut

# TODO update the JSON string below
json = "{}"
# create an instance of TenantOut from a JSON string
tenant_out_instance = TenantOut.from_json(json)
# print the JSON string representation of the object
print(TenantOut.to_json())

# convert the object into a dict
tenant_out_dict = tenant_out_instance.to_dict()
# create an instance of TenantOut from a dict
tenant_out_from_dict = TenantOut.from_dict(tenant_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


