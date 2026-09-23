# ConnectSharedMailboxIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | SMTP address of the shared mailbox to connect. | 
**display_name** | **str** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.connect_shared_mailbox_in import ConnectSharedMailboxIn

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectSharedMailboxIn from a JSON string
connect_shared_mailbox_in_instance = ConnectSharedMailboxIn.from_json(json)
# print the JSON string representation of the object
print(ConnectSharedMailboxIn.to_json())

# convert the object into a dict
connect_shared_mailbox_in_dict = connect_shared_mailbox_in_instance.to_dict()
# create an instance of ConnectSharedMailboxIn from a dict
connect_shared_mailbox_in_from_dict = ConnectSharedMailboxIn.from_dict(connect_shared_mailbox_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


