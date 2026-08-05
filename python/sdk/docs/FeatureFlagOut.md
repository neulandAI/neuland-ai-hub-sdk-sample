# FeatureFlagOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Catalog key of the feature flag. | 
**description** | **str** | What the flag controls. | 
**enabled** | **bool** | Effective value for the tenant (override if set, else default). | 
**default** | **bool** | Catalog default applied when the tenant has no override. | 
**overridden** | **bool** | Whether an explicit per-tenant override row exists. | 

## Example

```python
from neuland_hub_sdk.models.feature_flag_out import FeatureFlagOut

# TODO update the JSON string below
json = "{}"
# create an instance of FeatureFlagOut from a JSON string
feature_flag_out_instance = FeatureFlagOut.from_json(json)
# print the JSON string representation of the object
print(FeatureFlagOut.to_json())

# convert the object into a dict
feature_flag_out_dict = feature_flag_out_instance.to_dict()
# create an instance of FeatureFlagOut from a dict
feature_flag_out_from_dict = FeatureFlagOut.from_dict(feature_flag_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


