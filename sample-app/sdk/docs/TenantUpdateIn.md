# TenantUpdateIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**domain** | **str** |  | [optional] 
**timezone** | **str** |  | [optional] 
**locale** | **str** |  | [optional] 
**tarif_id** | **int** |  | [optional] 
**tarif_expires_at** | **datetime** |  | [optional] 
**max_users** | **int** |  | [optional] 
**max_projects** | **int** |  | [optional] 
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
**upstream_tenant_id** | **str** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.tenant_update_in import TenantUpdateIn

# TODO update the JSON string below
json = "{}"
# create an instance of TenantUpdateIn from a JSON string
tenant_update_in_instance = TenantUpdateIn.from_json(json)
# print the JSON string representation of the object
print(TenantUpdateIn.to_json())

# convert the object into a dict
tenant_update_in_dict = tenant_update_in_instance.to_dict()
# create an instance of TenantUpdateIn from a dict
tenant_update_in_from_dict = TenantUpdateIn.from_dict(tenant_update_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


