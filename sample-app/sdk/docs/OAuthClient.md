# OAuthClient


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**creator_user_id** | **int** |  | [optional] 
**updater_user_id** | **int** |  | [optional] 
**id** | **int** |  | [optional] 
**name** | **str** |  | 
**provider_key** | [**OAuth2ProviderEnum**](OAuth2ProviderEnum.md) |  | 
**client_id** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**icon_url** | **str** |  | [optional] 
**authorize_url** | **str** |  | 
**token_url** | **str** |  | 
**logout_url** | **str** |  | [optional] 
**redirect_uri** | **str** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.o_auth_client import OAuthClient

# TODO update the JSON string below
json = "{}"
# create an instance of OAuthClient from a JSON string
o_auth_client_instance = OAuthClient.from_json(json)
# print the JSON string representation of the object
print(OAuthClient.to_json())

# convert the object into a dict
o_auth_client_dict = o_auth_client_instance.to_dict()
# create an instance of OAuthClient from a dict
o_auth_client_from_dict = OAuthClient.from_dict(o_auth_client_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


