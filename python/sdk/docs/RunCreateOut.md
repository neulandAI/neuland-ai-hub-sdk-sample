# RunCreateOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**run_id** | **UUID** |  | 
**stream_token** | **str** |  | 

## Example

```python
from neuland_hub_sdk.models.run_create_out import RunCreateOut

# TODO update the JSON string below
json = "{}"
# create an instance of RunCreateOut from a JSON string
run_create_out_instance = RunCreateOut.from_json(json)
# print the JSON string representation of the object
print(RunCreateOut.to_json())

# convert the object into a dict
run_create_out_dict = run_create_out_instance.to_dict()
# create an instance of RunCreateOut from a dict
run_create_out_from_dict = RunCreateOut.from_dict(run_create_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


