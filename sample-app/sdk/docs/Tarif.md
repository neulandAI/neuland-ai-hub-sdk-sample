# Tarif

Model for creating or updating a tarif.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Primary key for the tarif record. | [optional] 
**name** | **str** | Name for the tarif to be created. Max 100 characters. | 
**price** | **float** | The price of the tarif. This field is required. | 
**hard_limit** | **float** |  | [optional] 
**is_unlimited** | **bool** | Bypass usage checks if True. | [optional] [default to False]
**description** | **str** |  | [optional] 
**status** | [**TarifStatusEnum**](TarifStatusEnum.md) | active &#x3D; offered; retired &#x3D; not for new signups. | [optional] 
**is_default** | **bool** |  | [optional] [default to False]
**creator_user_id** | **int** |  | 
**created_at** | **datetime** | Timestamp when the tarif was created. | [optional] 
**updated_at** | **datetime** | Timestamp when the tarif was last updated. | [optional] 

## Example

```python
from neuland_hub_sdk.models.tarif import Tarif

# TODO update the JSON string below
json = "{}"
# create an instance of Tarif from a JSON string
tarif_instance = Tarif.from_json(json)
# print the JSON string representation of the object
print(Tarif.to_json())

# convert the object into a dict
tarif_dict = tarif_instance.to_dict()
# create an instance of Tarif from a dict
tarif_from_dict = Tarif.from_dict(tarif_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


