# SharedMailbox

One connected shared mailbox — the stored claim shape AND the API response shape, so a new field is added exactly once.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | SMTP address of the shared mailbox (lower-cased). | 
**display_name** | **str** | Label shown in the UI; defaults to the directory name. | [optional] [default to '']
**added_at** | **str** |  | [optional] 
**kind** | **str** | &#39;shared&#39;: an Exchange shared mailbox, read via /users/{address}. &#39;group&#39;: a Microsoft 365 group — its mail is read via /groups/{id}/threads and sends go through the user&#39;s own mailbox with the group as sender. | [optional] [default to 'shared']
**group_id** | **str** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.shared_mailbox import SharedMailbox

# TODO update the JSON string below
json = "{}"
# create an instance of SharedMailbox from a JSON string
shared_mailbox_instance = SharedMailbox.from_json(json)
# print the JSON string representation of the object
print(SharedMailbox.to_json())

# convert the object into a dict
shared_mailbox_dict = shared_mailbox_instance.to_dict()
# create an instance of SharedMailbox from a dict
shared_mailbox_from_dict = SharedMailbox.from_dict(shared_mailbox_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


