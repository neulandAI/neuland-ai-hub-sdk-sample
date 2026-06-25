# SsoInitOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorize_url** | **str** |  | 
**redirect_uri** | **str** |  | 
**state** | **str** |  | 

## Example

```python
from neuland_hub_sdk.models.sso_init_out import SsoInitOut

# TODO update the JSON string below
json = "{}"
# create an instance of SsoInitOut from a JSON string
sso_init_out_instance = SsoInitOut.from_json(json)
# print the JSON string representation of the object
print(SsoInitOut.to_json())

# convert the object into a dict
sso_init_out_dict = sso_init_out_instance.to_dict()
# create an instance of SsoInitOut from a dict
sso_init_out_from_dict = SsoInitOut.from_dict(sso_init_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


