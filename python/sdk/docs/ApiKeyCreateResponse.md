# ApiKeyCreateResponse

Returned once when an API key is created.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The full secret token, in the form &#x60;ak.&lt;key_id&gt;.&lt;secret&gt;&#x60;. **Shown only once at creation** — store it securely; it cannot be retrieved again. | 
**key_id** | **str** | Public identifier of the key. Safe to log and reference. | 
**expires_at** | **datetime** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.api_key_create_response import ApiKeyCreateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApiKeyCreateResponse from a JSON string
api_key_create_response_instance = ApiKeyCreateResponse.from_json(json)
# print the JSON string representation of the object
print(ApiKeyCreateResponse.to_json())

# convert the object into a dict
api_key_create_response_dict = api_key_create_response_instance.to_dict()
# create an instance of ApiKeyCreateResponse from a dict
api_key_create_response_from_dict = ApiKeyCreateResponse.from_dict(api_key_create_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


