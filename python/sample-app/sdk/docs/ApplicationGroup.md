# ApplicationGroup

Group-level access for an application, scoped to tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenant_id** | **int** | ID of the tenant. | 
**group_id** | **int** |  ID of the user group. | 
**app_id** | **int** | ID of the application. | 
**granted_by** | **int** |  | 
**created_at** | **datetime** | Timestamp when the user group was created. | [optional] 

## Example

```python
from neuland_hub_sdk.models.application_group import ApplicationGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGroup from a JSON string
application_group_instance = ApplicationGroup.from_json(json)
# print the JSON string representation of the object
print(ApplicationGroup.to_json())

# convert the object into a dict
application_group_dict = application_group_instance.to_dict()
# create an instance of ApplicationGroup from a dict
application_group_from_dict = ApplicationGroup.from_dict(application_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


