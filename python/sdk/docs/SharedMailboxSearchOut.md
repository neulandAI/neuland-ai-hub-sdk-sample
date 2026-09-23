# SharedMailboxSearchOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[SharedMailboxCandidateOut]**](SharedMailboxCandidateOut.md) | Mailboxes the caller can open with their own token, drawn from People-API matches for the query (or the caller&#39;s most relevant contacts for an empty query). Every entry passed the same inbox probe that connecting runs, so plain colleagues are filtered out. | 

## Example

```python
from neuland_hub_sdk.models.shared_mailbox_search_out import SharedMailboxSearchOut

# TODO update the JSON string below
json = "{}"
# create an instance of SharedMailboxSearchOut from a JSON string
shared_mailbox_search_out_instance = SharedMailboxSearchOut.from_json(json)
# print the JSON string representation of the object
print(SharedMailboxSearchOut.to_json())

# convert the object into a dict
shared_mailbox_search_out_dict = shared_mailbox_search_out_instance.to_dict()
# create an instance of SharedMailboxSearchOut from a dict
shared_mailbox_search_out_from_dict = SharedMailboxSearchOut.from_dict(shared_mailbox_search_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


