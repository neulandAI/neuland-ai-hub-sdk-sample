# Message


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** |  | [optional] 
**state_reason** | **str** |  | [optional] 
**state_changed_at** | **datetime** |  | [optional] 
**id** | **int** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**creator_user_id** | **int** |  | 
**chat_id** | **int** |  | 
**role** | **str** |  | 
**content** | **str** |  | 
**sent_user_msg** | **str** |  | 
**parent_id** | **int** |  | 
**completed** | **bool** |  | [optional] [default to False]
**error** | **str** |  | 
**hint** | **str** |  | 
**provider** | **str** |  | [optional] 
**model** | **str** |  | [optional] 
**usage** | **Dict[str, object]** |  | [optional] 
**celery_task_id** | **str** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.message import Message

# TODO update the JSON string below
json = "{}"
# create an instance of Message from a JSON string
message_instance = Message.from_json(json)
# print the JSON string representation of the object
print(Message.to_json())

# convert the object into a dict
message_dict = message_instance.to_dict()
# create an instance of Message from a dict
message_from_dict = Message.from_dict(message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


