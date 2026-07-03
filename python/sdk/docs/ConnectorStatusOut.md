# ConnectorStatusOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connector_id** | **int** | Unique identifier of the connector. | 
**name** | **str** | Human-readable connector name. | 
**auth_type** | [**ConnectorAuthType**](ConnectorAuthType.md) | Authentication mechanism the connector uses. | 
**connected** | **bool** | Whether the connector is fully usable for the caller (consent granted and all required config present). | 
**needs_consent** | **bool** | OAuth authorization is required before the connector can be used. | 
**needs_config** | **bool** | An admin credential template part is required but not yet set. | 
**needs_user_config** | **bool** | A per-user credential template part is required but not yet set. | 
**has_admin_config** | **bool** | The connector has an admin-managed credential part. | 
**missing_caps** | **List[Optional[str]]** | Capabilities not yet granted; empty unless consent is needed. | 

## Example

```python
from neuland_hub_sdk.models.connector_status_out import ConnectorStatusOut

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorStatusOut from a JSON string
connector_status_out_instance = ConnectorStatusOut.from_json(json)
# print the JSON string representation of the object
print(ConnectorStatusOut.to_json())

# convert the object into a dict
connector_status_out_dict = connector_status_out_instance.to_dict()
# create an instance of ConnectorStatusOut from a dict
connector_status_out_from_dict = ConnectorStatusOut.from_dict(connector_status_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


