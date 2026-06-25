# ApplicationIn

Schema for creating an application

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Display name of the application. | 
**is_active** | **bool** | Whether the application is active and available to users. | [optional] [default to True]
**tenant_id** | **int** | ID of the tenant the application belongs to. | 
**app_url** | **str** |  | [optional] 
**is_native** | **bool** |  | [optional] 
**native_app_id** | **int** |  | [optional] 
**description** | **str** |  | [optional] 
**version** | **str** |  | [optional] 
**avatar** | **str** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.application_in import ApplicationIn

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationIn from a JSON string
application_in_instance = ApplicationIn.from_json(json)
# print the JSON string representation of the object
print(ApplicationIn.to_json())

# convert the object into a dict
application_in_dict = application_in_instance.to_dict()
# create an instance of ApplicationIn from a dict
application_in_from_dict = ApplicationIn.from_dict(application_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


