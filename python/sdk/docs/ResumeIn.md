# ResumeIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decision** | **str** | How to resolve the pause: approve/reject/edit a gated tool call, or respond to answer a clarification question. | 
**edited_args** | **Dict[str, object]** |  | [optional] 
**answers** | [**List[ClarificationAnswer]**](ClarificationAnswer.md) |  | [optional] 
**model** | **str** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.resume_in import ResumeIn

# TODO update the JSON string below
json = "{}"
# create an instance of ResumeIn from a JSON string
resume_in_instance = ResumeIn.from_json(json)
# print the JSON string representation of the object
print(ResumeIn.to_json())

# convert the object into a dict
resume_in_dict = resume_in_instance.to_dict()
# create an instance of ResumeIn from a dict
resume_in_from_dict = ResumeIn.from_dict(resume_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


