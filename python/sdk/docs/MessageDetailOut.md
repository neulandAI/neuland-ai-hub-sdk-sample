# MessageDetailOut

Composed message state — the recovery contract for dropped SSE streams.  See backend/docs/streaming-architecture.md §6 requirement 4.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | ID of the message. | 
**public_id** | **UUID** | Public, non-enumerable external id of the message. | 
**chat_id** | **UUID** | Public id of the chat the message belongs to. | 
**parent_id** | **UUID** |  | 
**role** | **str** | Role of the message author. | 
**content** | **str** | Text content of the message. | 
**state** | **str** |  | 
**state_reason** | **str** |  | [optional] 
**error** | **str** |  | 
**hint** | **str** |  | 
**created_at** | **datetime** | When the message was created. | 
**updated_at** | **datetime** | When the message was last updated. | 
**usage** | **Dict[str, object]** |  | 
**tool_calls** | [**List[ToolCallOut]**](ToolCallOut.md) | Tool calls made while generating the message. | 
**files** | [**List[MessageFileOut]**](MessageFileOut.md) | Files attached to the message. | 
**interrupt** | **Dict[str, object]** |  | [optional] 
**reasoning** | **List[Optional[Dict[str, object]]]** |  | [optional] 
**turn_step_index** | **int** |  | [optional] 
**is_final_step** | **bool** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.message_detail_out import MessageDetailOut

# TODO update the JSON string below
json = "{}"
# create an instance of MessageDetailOut from a JSON string
message_detail_out_instance = MessageDetailOut.from_json(json)
# print the JSON string representation of the object
print(MessageDetailOut.to_json())

# convert the object into a dict
message_detail_out_dict = message_detail_out_instance.to_dict()
# create an instance of MessageDetailOut from a dict
message_detail_out_from_dict = MessageDetailOut.from_dict(message_detail_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


