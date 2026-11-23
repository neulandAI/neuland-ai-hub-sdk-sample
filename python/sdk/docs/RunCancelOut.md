# RunCancelOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**run_id** | **UUID** |  | 
**status** | **str** |  | 

## Example

```python
from neuland_hub_sdk.models.run_cancel_out import RunCancelOut

# TODO update the JSON string below
json = "{}"
# create an instance of RunCancelOut from a JSON string
run_cancel_out_instance = RunCancelOut.from_json(json)
# print the JSON string representation of the object
print(RunCancelOut.to_json())

# convert the object into a dict
run_cancel_out_dict = run_cancel_out_instance.to_dict()
# create an instance of RunCancelOut from a dict
run_cancel_out_from_dict = RunCancelOut.from_dict(run_cancel_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


