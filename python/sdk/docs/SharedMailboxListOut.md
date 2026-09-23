# SharedMailboxListOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mailboxes** | [**List[SharedMailbox]**](SharedMailbox.md) | Shared mailboxes the caller has connected, oldest first. | 

## Example

```python
from neuland_hub_sdk.models.shared_mailbox_list_out import SharedMailboxListOut

# TODO update the JSON string below
json = "{}"
# create an instance of SharedMailboxListOut from a JSON string
shared_mailbox_list_out_instance = SharedMailboxListOut.from_json(json)
# print the JSON string representation of the object
print(SharedMailboxListOut.to_json())

# convert the object into a dict
shared_mailbox_list_out_dict = shared_mailbox_list_out_instance.to_dict()
# create an instance of SharedMailboxListOut from a dict
shared_mailbox_list_out_from_dict = SharedMailboxListOut.from_dict(shared_mailbox_list_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


