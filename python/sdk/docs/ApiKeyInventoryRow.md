# ApiKeyInventoryRow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_id** | **str** | Public key identifier; the value /llm/usage filters on. | 
**name** | **str** |  | 
**active** | **bool** | Whether the key is currently active. | 
**created_at** | **datetime** | When the key was created. | 
**expires_at** | **datetime** |  | 
**last_used_at** | **datetime** |  | 
**days_idle** | **int** |  | 
**idle** | **bool** | True when unused for more than 30 days. | 
**expiring_soon** | **bool** | True when the key expires within 30 days. | 

## Example

```python
from neuland_hub_sdk.models.api_key_inventory_row import ApiKeyInventoryRow

# TODO update the JSON string below
json = "{}"
# create an instance of ApiKeyInventoryRow from a JSON string
api_key_inventory_row_instance = ApiKeyInventoryRow.from_json(json)
# print the JSON string representation of the object
print(ApiKeyInventoryRow.to_json())

# convert the object into a dict
api_key_inventory_row_dict = api_key_inventory_row_instance.to_dict()
# create an instance of ApiKeyInventoryRow from a dict
api_key_inventory_row_from_dict = ApiKeyInventoryRow.from_dict(api_key_inventory_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


