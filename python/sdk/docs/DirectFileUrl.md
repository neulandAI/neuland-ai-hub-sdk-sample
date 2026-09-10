# DirectFileUrl


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** |  | 
**expires_in** | **int** | Lifetime of &#x60;url&#x60; in seconds. | 

## Example

```python
from neuland_hub_sdk.models.direct_file_url import DirectFileUrl

# TODO update the JSON string below
json = "{}"
# create an instance of DirectFileUrl from a JSON string
direct_file_url_instance = DirectFileUrl.from_json(json)
# print the JSON string representation of the object
print(DirectFileUrl.to_json())

# convert the object into a dict
direct_file_url_dict = direct_file_url_instance.to_dict()
# create an instance of DirectFileUrl from a dict
direct_file_url_from_dict = DirectFileUrl.from_dict(direct_file_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


