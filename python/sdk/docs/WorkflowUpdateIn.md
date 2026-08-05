# WorkflowUpdateIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**spec** | **Dict[str, object]** |  | [optional] 
**is_enabled** | **bool** |  | [optional] [default to True]
**timezone** | **str** |  | [optional] [default to 'UTC']

## Example

```python
from neuland_hub_sdk.models.workflow_update_in import WorkflowUpdateIn

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowUpdateIn from a JSON string
workflow_update_in_instance = WorkflowUpdateIn.from_json(json)
# print the JSON string representation of the object
print(WorkflowUpdateIn.to_json())

# convert the object into a dict
workflow_update_in_dict = workflow_update_in_instance.to_dict()
# create an instance of WorkflowUpdateIn from a dict
workflow_update_in_from_dict = WorkflowUpdateIn.from_dict(workflow_update_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


