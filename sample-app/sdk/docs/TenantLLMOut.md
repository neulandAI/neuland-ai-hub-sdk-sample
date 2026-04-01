# TenantLLMOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenant_id** | **int** |  | 
**llm_settings_id** | **int** |  | 

## Example

```python
from neuland_hub_sdk.models.tenant_llm_out import TenantLLMOut

# TODO update the JSON string below
json = "{}"
# create an instance of TenantLLMOut from a JSON string
tenant_llm_out_instance = TenantLLMOut.from_json(json)
# print the JSON string representation of the object
print(TenantLLMOut.to_json())

# convert the object into a dict
tenant_llm_out_dict = tenant_llm_out_instance.to_dict()
# create an instance of TenantLLMOut from a dict
tenant_llm_out_from_dict = TenantLLMOut.from_dict(tenant_llm_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


