# ConnectorConsentOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_url** | **str** |  | 
**connector** | [**ConnectorOut**](ConnectorOut.md) |  | 

## Example

```python
from neuland_hub_sdk.models.connector_consent_out import ConnectorConsentOut

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorConsentOut from a JSON string
connector_consent_out_instance = ConnectorConsentOut.from_json(json)
# print the JSON string representation of the object
print(ConnectorConsentOut.to_json())

# convert the object into a dict
connector_consent_out_dict = connector_consent_out_instance.to_dict()
# create an instance of ConnectorConsentOut from a dict
connector_consent_out_from_dict = ConnectorConsentOut.from_dict(connector_consent_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


