# AlertApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**alertsCreateAlert**](#alertscreatealert) | **POST** /alerts/ | Create Alert|
|[**alertsDeleteAlert**](#alertsdeletealert) | **DELETE** /alerts/{alert_id} | Delete Alert|
|[**alertsUpdateAlert**](#alertsupdatealert) | **PATCH** /alerts/{alert_id} | Update Alert|

# **alertsCreateAlert**
> BudgetAlert alertsCreateAlert(budgetAlertRequest)

Create a new budget alert with threshold and current spend. Only Admins can do it.

### Example

```typescript
import {
    AlertApi,
    Configuration,
    BudgetAlertRequest
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AlertApi(configuration);

let budgetAlertRequest: BudgetAlertRequest; //
let cookieName: string; // (optional) (default to undefined)
let tenantId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.alertsCreateAlert(
    budgetAlertRequest,
    cookieName,
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **budgetAlertRequest** | **BudgetAlertRequest**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**BudgetAlert**

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

# **alertsDeleteAlert**
> alertsDeleteAlert()

Delete exisiting budget alert

### Example

```typescript
import {
    AlertApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AlertApi(configuration);

let alertId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)
let tenantId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.alertsDeleteAlert(
    alertId,
    cookieName,
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **alertId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|


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

# **alertsUpdateAlert**
> BudgetAlert alertsUpdateAlert(budgetAlertUpdate)

Updates a existing budget alert. Only Admins can do it.

### Example

```typescript
import {
    AlertApi,
    Configuration,
    BudgetAlertUpdate
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AlertApi(configuration);

let alertId: number; // (default to undefined)
let budgetAlertUpdate: BudgetAlertUpdate; //
let cookieName: string; // (optional) (default to undefined)
let tenantId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.alertsUpdateAlert(
    alertId,
    budgetAlertUpdate,
    cookieName,
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **budgetAlertUpdate** | **BudgetAlertUpdate**|  | |
| **alertId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**BudgetAlert**

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

