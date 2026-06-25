# SetAtlassianCloudIdRequest

Payload selecting the active Atlassian site (cloud_id) for a connector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_id** | **str** | ID of the Atlassian site to make active. Must be one of the sites the user consented to (stored in &#x60;atlassian_sites&#x60;). | 

## Example

```python
from neuland_hub_sdk.models.set_atlassian_cloud_id_request import SetAtlassianCloudIdRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetAtlassianCloudIdRequest from a JSON string
set_atlassian_cloud_id_request_instance = SetAtlassianCloudIdRequest.from_json(json)
# print the JSON string representation of the object
print(SetAtlassianCloudIdRequest.to_json())

# convert the object into a dict
set_atlassian_cloud_id_request_dict = set_atlassian_cloud_id_request_instance.to_dict()
# create an instance of SetAtlassianCloudIdRequest from a dict
set_atlassian_cloud_id_request_from_dict = SetAtlassianCloudIdRequest.from_dict(set_atlassian_cloud_id_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


