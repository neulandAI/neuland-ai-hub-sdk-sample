# CustomConnectorUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**enabled** | **bool** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.custom_connector_update import CustomConnectorUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of CustomConnectorUpdate from a JSON string
custom_connector_update_instance = CustomConnectorUpdate.from_json(json)
# print the JSON string representation of the object
print(CustomConnectorUpdate.to_json())

# convert the object into a dict
custom_connector_update_dict = custom_connector_update_instance.to_dict()
# create an instance of CustomConnectorUpdate from a dict
custom_connector_update_from_dict = CustomConnectorUpdate.from_dict(custom_connector_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


