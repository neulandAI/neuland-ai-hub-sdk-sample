# TenantOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**created_at** | **datetime** |  | 
**creator_user_id** | **int** |  | [optional] 
**name** | **str** |  | 
**slug** | **str** |  | 
**domain** | **str** |  | [optional] 
**timezone** | **str** |  | 
**locale** | **str** |  | 
**tarif_id** | **int** |  | [optional] 
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
**state** | **str** |  | [optional] 
**upstream_tenant_id** | **str** |  | [optional] 

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


