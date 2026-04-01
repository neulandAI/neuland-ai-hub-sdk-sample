# Application

Applications available on the platform.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**id** | **int** |  | [optional] 
**name** | **str** | Name of the application. | [optional] 
**tenant_id** | **int** | ID of the tenant that owns the application. | 
**is_active** | **bool** |  | [optional] [default to True]
**is_native** | **bool** |  | [optional] [default to False]
**app_url** | **str** | Unique URL identifier for the application. | [optional] 
**native_app_id** | **int** |  | [optional] 
**description** | **str** |  | [optional] 
**version** | **str** |  | [optional] 
**avatar** | **str** |  | [optional] 
**creator_user_id** | **int** |  | 

## Example

```python
from neuland_hub_sdk.models.application import Application

# TODO update the JSON string below
json = "{}"
# create an instance of Application from a JSON string
application_instance = Application.from_json(json)
# print the JSON string representation of the object
print(Application.to_json())

# convert the object into a dict
application_dict = application_instance.to_dict()
# create an instance of Application from a dict
application_from_dict = Application.from_dict(application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


