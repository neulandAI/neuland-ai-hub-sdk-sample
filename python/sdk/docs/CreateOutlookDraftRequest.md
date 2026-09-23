# CreateOutlookDraftRequest

Request to materialize a chat draft as a real Outlook mailbox draft.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tool_call_id** | **str** | The ID of the tool call that generated the draft | 
**to** | [**To**](To.md) |  | [optional] 
**subject** | **str** | Email subject | [optional] [default to '']
**body** | **str** | Email body content (markdown or HTML) | [optional] [default to '']
**cc** | [**Cc**](Cc.md) |  | [optional] 
**bcc** | [**Bcc**](Bcc.md) |  | [optional] 
**attachment_ids** | **List[str]** |  | [optional] 
**mailbox** | **str** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.create_outlook_draft_request import CreateOutlookDraftRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOutlookDraftRequest from a JSON string
create_outlook_draft_request_instance = CreateOutlookDraftRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOutlookDraftRequest.to_json())

# convert the object into a dict
create_outlook_draft_request_dict = create_outlook_draft_request_instance.to_dict()
# create an instance of CreateOutlookDraftRequest from a dict
create_outlook_draft_request_from_dict = CreateOutlookDraftRequest.from_dict(create_outlook_draft_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


