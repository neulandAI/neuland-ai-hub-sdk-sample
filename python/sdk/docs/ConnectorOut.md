# ConnectorOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Unique identifier of the connector. | 
**name** | **str** | Human-readable connector name. | 
**provider** | **str** | OAuth provider key backing the connector. | 
**caps** | **List[str]** | Capabilities the connector requests. | 
**scopes** | **List[str]** | OAuth scopes requested from the provider. | 

## Example

```python
from neuland_hub_sdk.models.connector_out import ConnectorOut

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorOut from a JSON string
connector_out_instance = ConnectorOut.from_json(json)
# print the JSON string representation of the object
print(ConnectorOut.to_json())

# convert the object into a dict
connector_out_dict = connector_out_instance.to_dict()
# create an instance of ConnectorOut from a dict
connector_out_from_dict = ConnectorOut.from_dict(connector_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


