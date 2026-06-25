# Alert

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**alertsCreateAlert**](#alertscreatealert) | **POST** /alerts/ | Create a budget alert|
|[**alertsDeleteAlert**](#alertsdeletealert) | **DELETE** /alerts/{alert_id} | Delete a budget alert|
|[**alertsUpdateAlert**](#alertsupdatealert) | **PATCH** /alerts/{alert_id} | Update a budget alert|

# **alertsCreateAlert**
> BudgetAlert alertsCreateAlert(budgetAlertRequest)

Create a new budget alert with threshold and current spend.

### Example

```typescript
import {
    Alert,
    Configuration,
    BudgetAlertRequest
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Alert(configuration);

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
|**401** | Missing or invalid authentication. |  -  |
|**403** | Admin privileges required. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alertsDeleteAlert**
> alertsDeleteAlert()

Delete an existing budget alert.

### Example

```typescript
import {
    Alert,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Alert(configuration);

let alertId: number; //ID of the budget alert to delete. (default to undefined)
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
| **alertId** | [**number**] | ID of the budget alert to delete. | defaults to undefined|
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
|**401** | Missing or invalid authentication. |  -  |
|**403** | Admin privileges required. |  -  |
|**404** | No budget alert exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alertsUpdateAlert**
> BudgetAlert alertsUpdateAlert(budgetAlertUpdate)

Update an existing budget alert.

### Example

```typescript
import {
    Alert,
    Configuration,
    BudgetAlertUpdate
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Alert(configuration);

let alertId: number; //ID of the budget alert to update. (default to undefined)
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
| **alertId** | [**number**] | ID of the budget alert to update. | defaults to undefined|
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
|**401** | Missing or invalid authentication. |  -  |
|**403** | Admin privileges required. |  -  |
|**404** | No budget alert exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

