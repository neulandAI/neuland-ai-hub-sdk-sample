# ApiKey

api key model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Primary key for api keys | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**key_id** | **str** | Public part of the key | 
**environment** | **str** | Environment where the key is used. | [optional] 
**hashed_secret** | **str** | hashed api key | 
**active** | **bool** |  | [optional] [default to True]
**version** | **str** | Version of the API key for rotation purposes. | [optional] [default to 'v1']
**creator_user_id** | **int** | ID of the user who created the key. | 
**created_at** | **datetime** | Timestamp when the key was created. | [optional] 
**last_used_at** | **datetime** |  | [optional] 
**expires_at** | **datetime** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.api_key import ApiKey

# TODO update the JSON string below
json = "{}"
# create an instance of ApiKey from a JSON string
api_key_instance = ApiKey.from_json(json)
# print the JSON string representation of the object
print(ApiKey.to_json())

# convert the object into a dict
api_key_dict = api_key_instance.to_dict()
# create an instance of ApiKey from a dict
api_key_from_dict = ApiKey.from_dict(api_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


