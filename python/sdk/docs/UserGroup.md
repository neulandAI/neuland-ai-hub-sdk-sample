# UserGroup

Named group scoped to a tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | UTC timestamp when the record was created. | [optional] 
**updated_at** | **datetime** | UTC timestamp when the record was last updated. | [optional] 
**id** | **int** |  | [optional] 
**public_id** | **UUID** | Public, non-enumerable external identifier for the user group. Exposed to clients instead of the internal integer id. | [optional] 
**tenant_id** | **int** | ID of the tenant. | 
**name** | **str** | Name of the user group. | [optional] 
**description** | **str** |  | [optional] 
**source** | **str** | Where the group and its membership come from: &#39;manual&#39; (managed in the HUB) or &#39;external&#39; (synced from an identity provider). | [optional] [default to 'manual']
**external_id** | **str** |  | [optional] 
**creator_user_id** | **int** |  | 

## Example

```python
from neuland_hub_sdk.models.user_group import UserGroup

# TODO update the JSON string below
json = "{}"
# create an instance of UserGroup from a JSON string
user_group_instance = UserGroup.from_json(json)
# print the JSON string representation of the object
print(UserGroup.to_json())

# convert the object into a dict
user_group_dict = user_group_instance.to_dict()
# create an instance of UserGroup from a dict
user_group_from_dict = UserGroup.from_dict(user_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


