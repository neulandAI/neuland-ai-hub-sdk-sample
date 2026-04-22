# TariffIn

Model for creating or updating a tarif.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name for the tarif to be created. Max 100 characters. | 
**price** | **float** | The price of the tarif. This field is required. | 
**hard_limit** | **float** | The hard limit to restrict the user. | 
**status** | [**TariffStatusEnum**](TariffStatusEnum.md) |  | [optional] 
**expires_at** | **date** |  | [optional] 
**description** | **str** |  | [optional] 
**is_unlimited** | **bool** |  | [optional] 

## Example

```python
from neuland_hub_sdk.models.tariff_in import TariffIn

# TODO update the JSON string below
json = "{}"
# create an instance of TariffIn from a JSON string
tariff_in_instance = TariffIn.from_json(json)
# print the JSON string representation of the object
print(TariffIn.to_json())

# convert the object into a dict
tariff_in_dict = tariff_in_instance.to_dict()
# create an instance of TariffIn from a dict
tariff_in_from_dict = TariffIn.from_dict(tariff_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


