# Tarif

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**tarifsCreateTarif**](#tarifscreatetarif) | **POST** /tarifs/ | Create a tarif plan|
|[**tarifsDeleteTarif**](#tarifsdeletetarif) | **DELETE** /tarifs/{tarif_id} | Delete a tarif plan|
|[**tarifsUpdateTarif**](#tarifsupdatetarif) | **PATCH** /tarifs/{tarif_id} | Update a tarif plan|

# **tarifsCreateTarif**
> Tarif tarifsCreateTarif(tarifIn)

Create a new tarif plan.

### Example

```typescript
import {
    Tarif,
    Configuration,
    TarifIn
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tarif(configuration);

let tarifIn: TarifIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.tarifsCreateTarif(
    tarifIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tarifIn** | **TarifIn**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Tarif**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Platform operator or parent tenant admin privileges required. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tarifsDeleteTarif**
> tarifsDeleteTarif()

Delete a tarif plan.

### Example

```typescript
import {
    Tarif,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tarif(configuration);

let tarifId: string; //Public id of the tarif to delete. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.tarifsDeleteTarif(
    tarifId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tarifId** | [**string**] | Public id of the tarif to delete. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Insufficient privileges, or tariff not deletable by your tenant. |  -  |
|**404** | No tarif exists with the given id. |  -  |
|**409** | Tarif is the active plan for one or more tenants and cannot be deleted. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tarifsUpdateTarif**
> Tarif tarifsUpdateTarif(tarifIn)

Update an existing tarif plan.

### Example

```typescript
import {
    Tarif,
    Configuration,
    TarifIn
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tarif(configuration);

let tarifId: string; //Public id of the tarif to update. (default to undefined)
let tarifIn: TarifIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.tarifsUpdateTarif(
    tarifId,
    tarifIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tarifIn** | **TarifIn**|  | |
| **tarifId** | [**string**] | Public id of the tarif to update. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Tarif**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Insufficient privileges, or tariff not editable by your tenant. |  -  |
|**404** | No tarif exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

