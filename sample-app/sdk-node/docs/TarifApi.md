# TarifApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**tarifsCreateTarif**](#tarifscreatetarif) | **POST** /tarifs/ | Create Tarif|
|[**tarifsDeleteTarif**](#tarifsdeletetarif) | **DELETE** /tarifs/{tarif_id} | Delete Tarif|
|[**tarifsUpdateTarif**](#tarifsupdatetarif) | **PATCH** /tarifs/{tarif_id} | Update Tarif|

# **tarifsCreateTarif**
> Tarif tarifsCreateTarif(tarifIn)

Create a new tarif plan.

### Example

```typescript
import {
    TarifApi,
    Configuration,
    TarifIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new TarifApi(configuration);

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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tarifsDeleteTarif**
> tarifsDeleteTarif()

Delete a tarif plan.

### Example

```typescript
import {
    TarifApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new TarifApi(configuration);

let tarifId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.tarifsDeleteTarif(
    tarifId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tarifId** | [**number**] |  | defaults to undefined|
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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tarifsUpdateTarif**
> Tarif tarifsUpdateTarif(tarifIn)

Update an existing tarif plan.

### Example

```typescript
import {
    TarifApi,
    Configuration,
    TarifIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new TarifApi(configuration);

let tarifId: number; // (default to undefined)
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
| **tarifId** | [**number**] |  | defaults to undefined|
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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

