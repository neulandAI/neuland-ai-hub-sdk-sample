# TenantThemeOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**slug** | **str** |  | 
**domain** | **str** |  | [optional] 
**timezone** | **str** |  | 
**locale** | **str** |  | 
**display_name** | **str** |  | [optional] 
**motto** | **str** |  | [optional] 
**logo_url** | **str** |  | [optional] 
**square_logo_url** | **str** |  | [optional] 
**favicon_url** | **str** |  | [optional] 
**chat_square_logo_url** | **str** |  | [optional] 
**primary_color** | **str** |  | [optional] 
**secondary_color** | **str** |  | [optional] 
**theme** | **str** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.tenant_theme_out import TenantThemeOut

# TODO update the JSON string below
json = "{}"
# create an instance of TenantThemeOut from a JSON string
tenant_theme_out_instance = TenantThemeOut.from_json(json)
# print the JSON string representation of the object
print(TenantThemeOut.to_json())

# convert the object into a dict
tenant_theme_out_dict = tenant_theme_out_instance.to_dict()
# create an instance of TenantThemeOut from a dict
tenant_theme_out_from_dict = TenantThemeOut.from_dict(tenant_theme_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


