# Connector


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**creator_user_id** | **int** |  | [optional] 
**updater_user_id** | **int** |  | [optional] 
**id** | **int** |  | [optional] 
**oauth_client_id** | **int** |  | 
**name** | **str** |  | 
**description** | **str** |  | [optional] 
**scopes** | **List[str]** |  | [optional] 
**caps** | **List[str]** |  | [optional] 
**auto_attach** | **bool** |  | [optional] [default to False]

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


