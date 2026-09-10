# MessageTokensResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_date** | **datetime** |  | 
**end_date** | **datetime** |  | 
**message_count** | **int** |  | 
**total_tokens** | **int** |  | 
**prompt_tokens** | **int** |  | 
**completion_tokens** | **int** |  | 
**avg_tokens_per_message** | **float** |  | 

## Example

```python
from neuland_hub_sdk.models.message_tokens_response import MessageTokensResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MessageTokensResponse from a JSON string
message_tokens_response_instance = MessageTokensResponse.from_json(json)
# print the JSON string representation of the object
print(MessageTokensResponse.to_json())

# convert the object into a dict
message_tokens_response_dict = message_tokens_response_instance.to_dict()
# create an instance of MessageTokensResponse from a dict
message_tokens_response_from_dict = MessageTokensResponse.from_dict(message_tokens_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


