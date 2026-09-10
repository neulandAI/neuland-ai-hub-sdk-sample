# SendEmailRequest

Request to send an email from a tool call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tool_call_id** | **str** | The ID of the tool call that generated the draft | 
**to** | [**To1**](To1.md) |  | 
**subject** | **str** | Email subject | 
**body** | **str** | Email body content (can be markdown or HTML) | 
**cc** | [**Cc**](Cc.md) |  | [optional] 
**bcc** | [**Bcc**](Bcc.md) |  | [optional] 
**attachment_ids** | **List[str]** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.send_email_request import SendEmailRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendEmailRequest from a JSON string
send_email_request_instance = SendEmailRequest.from_json(json)
# print the JSON string representation of the object
print(SendEmailRequest.to_json())

# convert the object into a dict
send_email_request_dict = send_email_request_instance.to_dict()
# create an instance of SendEmailRequest from a dict
send_email_request_from_dict = SendEmailRequest.from_dict(send_email_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


