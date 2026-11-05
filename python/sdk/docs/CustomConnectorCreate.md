# CustomConnectorCreate

Either `url` (with optional `name`/`headers` and auth settings), or `config` — a pasted `mcpServers` JSON blob of fixed-header servers. Never both.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**url** | **str** |  | [optional] 
**headers** | **Dict[str, str]** |  | [optional] 
**config** | **str** |  | [optional] 
**auth_mode** | **str** |  | [optional] [default to 'none']
**oauth_client_mode** | **str** |  | [optional] 
**oauth_client_id** | **str** |  | [optional] 
**oauth_client_secret** | **str** |  | [optional] 
**organization** | **bool** | Add for the organisation instead of yourself (needs &#x60;MANAGE_CONNECTORS&#x60; and &#x60;MANAGE_CONNECTOR_ACCESS&#x60;). | [optional] [default to False]
**all_users** | **bool** |  | [optional] [default to False]
**role_ids** | **List[UUID]** | Roles to grant an organisation MCP to (also needs &#x60;MANAGE_ROLES&#x60;); further roles and single users can be given it later in the role editor and the user access settings. | [optional] 

## Example

```python
from neuland_hub_sdk.models.custom_connector_create import CustomConnectorCreate

# TODO update the JSON string below
json = "{}"
# create an instance of CustomConnectorCreate from a JSON string
custom_connector_create_instance = CustomConnectorCreate.from_json(json)
# print the JSON string representation of the object
print(CustomConnectorCreate.to_json())

# convert the object into a dict
custom_connector_create_dict = custom_connector_create_instance.to_dict()
# create an instance of CustomConnectorCreate from a dict
custom_connector_create_from_dict = CustomConnectorCreate.from_dict(custom_connector_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


