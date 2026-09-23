# ApiKeyInventoryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rows** | [**List[ApiKeyInventoryRow]**](ApiKeyInventoryRow.md) | One entry per key. | 
**truncated** | **bool** | True when more keys matched than were returned. | [optional] [default to False]

## Example

```python
from neuland_hub_sdk.models.api_key_inventory_response import ApiKeyInventoryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApiKeyInventoryResponse from a JSON string
api_key_inventory_response_instance = ApiKeyInventoryResponse.from_json(json)
# print the JSON string representation of the object
print(ApiKeyInventoryResponse.to_json())

# convert the object into a dict
api_key_inventory_response_dict = api_key_inventory_response_instance.to_dict()
# create an instance of ApiKeyInventoryResponse from a dict
api_key_inventory_response_from_dict = ApiKeyInventoryResponse.from_dict(api_key_inventory_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


