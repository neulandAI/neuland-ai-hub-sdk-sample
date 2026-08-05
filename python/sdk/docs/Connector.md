# Connector


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | UTC timestamp when the record was created. | [optional] 
**updated_at** | **datetime** | UTC timestamp when the record was last updated. | [optional] 
**creator_user_id** | **int** |  | [optional] 
**updater_user_id** | **int** |  | [optional] 
**id** | **int** |  | [optional] 
**public_id** | **UUID** | Public, non-enumerable external identifier for the connector. Exposed to clients instead of the internal integer id. | [optional] 
**oauth_client_id** | **int** |  | [optional] 
**name** | **str** | Human-readable name of the connector. | 
**description** | **str** |  | [optional] 
**scopes** | **List[Optional[str]]** | OAuth scopes requested by this connector. | [optional] 
**caps** | **List[Optional[str]]** | Capabilities this connector provides. | [optional] 
**auto_attach** | **bool** | Whether the connector is automatically attached to new chats. | [optional] [default to False]
**auth_type** | [**ConnectorAuthType**](ConnectorAuthType.md) | Authentication mechanism the connector uses. | [optional] 

## Example

```python
from neuland_hub_sdk.models.connector import Connector

# TODO update the JSON string below
json = "{}"
# create an instance of Connector from a JSON string
connector_instance = Connector.from_json(json)
# print the JSON string representation of the object
print(Connector.to_json())

# convert the object into a dict
connector_dict = connector_instance.to_dict()
# create an instance of Connector from a dict
connector_from_dict = Connector.from_dict(connector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


