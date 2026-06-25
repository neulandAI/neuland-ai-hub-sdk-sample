# TarifIn

Model for creating or updating a tarif.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name for the tarif to be created. Max 100 characters. | 
**price** | **float** | The price of the tarif. This field is required. | 
**hard_limit** | **float** | The hard limit to restrict the user. | 
**licenses** | **int** |  | [optional] 
**monthly_limit_per_license** | **float** |  | [optional] 
**soft_limit_fraction** | **float** |  | [optional] 
**status** | [**TarifStatusEnum**](TarifStatusEnum.md) |  | [optional] 
**expires_at** | **date** |  | [optional] 
**description** | **str** |  | [optional] 
**is_unlimited** | **bool** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.tarif_in import TarifIn

# TODO update the JSON string below
json = "{}"
# create an instance of TarifIn from a JSON string
tarif_in_instance = TarifIn.from_json(json)
# print the JSON string representation of the object
print(TarifIn.to_json())

# convert the object into a dict
tarif_in_dict = tarif_in_instance.to_dict()
# create an instance of TarifIn from a dict
tarif_in_from_dict = TarifIn.from_dict(tarif_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


