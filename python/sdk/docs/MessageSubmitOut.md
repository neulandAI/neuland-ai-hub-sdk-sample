# MessageSubmitOut

Response for the message-creating routes: the created message, dual-key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Internal id of the message (deprecated; use public_id). | 
**public_id** | **UUID** | Public, non-enumerable external id of the message. | 
**chat_id** | **int** | Internal id of the chat (deprecated; use chat_public_id). | 
**chat_public_id** | **UUID** | Public id of the chat the message belongs to. | 
**parent_id** | **int** |  | [optional] 
**creator_user_id** | **int** | Internal id of the user who created the message. | 
**role** | **str** | Role of the message author. | 
**content** | **str** | Rendered content of the message. | 
**sent_user_msg** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**state_reason** | **str** |  | [optional] 
**state_changed_at** | **datetime** |  | [optional] 
**turn_step_index** | **int** |  | [optional] 
**is_final_step** | **bool** |  | [optional] 
**completed** | **bool** | DEPRECATED. Whether processing finished. | [optional] [default to False]
**error** | **str** |  | [optional] 
**hint** | **str** |  | [optional] 
**usage** | **Dict[str, object]** |  | [optional] 
**interrupt** | **Dict[str, object]** |  | [optional] 
**llm_catalog_id** | **int** |  | [optional] 
**llm_settings_id** | **int** |  | [optional] 
**created_at** | **datetime** | When the message was created. | 
**updated_at** | **datetime** | When the message was last updated. | 

## Example

```python
from neuland_hub_sdk.models.message_submit_out import MessageSubmitOut

# TODO update the JSON string below
json = "{}"
# create an instance of MessageSubmitOut from a JSON string
message_submit_out_instance = MessageSubmitOut.from_json(json)
# print the JSON string representation of the object
print(MessageSubmitOut.to_json())

# convert the object into a dict
message_submit_out_dict = message_submit_out_instance.to_dict()
# create an instance of MessageSubmitOut from a dict
message_submit_out_from_dict = MessageSubmitOut.from_dict(message_submit_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


