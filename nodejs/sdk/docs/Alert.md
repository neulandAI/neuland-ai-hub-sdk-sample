# Alert

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**alertsBudgetForecast**](#alertsbudgetforecast) | **GET** /alerts/budgets/forecast | Forecast the tenant\&#39;s month-end spend from its current run rate|
|[**alertsBudgetSummary**](#alertsbudgetsummary) | **GET** /alerts/budgets/summary | Get the tenant\&#39;s current-month budget summary|
|[**alertsCreateAlert**](#alertscreatealert) | **POST** /alerts/ | Create a budget alert|
|[**alertsDeleteAlert**](#alertsdeletealert) | **DELETE** /alerts/{alert_id} | Delete a budget alert|
|[**alertsUpdateAlert**](#alertsupdatealert) | **PATCH** /alerts/{alert_id} | Update a budget alert|

# **alertsBudgetForecast**
> BudgetForecast alertsBudgetForecast()

Return a run-rate projection of month-end spend (plus the summary it builds on).

### Example

```typescript
import {
    Alert,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Alert(configuration);

let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.alertsBudgetForecast(
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**BudgetForecast**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Admin privileges required. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alertsBudgetSummary**
> BudgetSummary alertsBudgetSummary()

Return current-month spend vs the tenant\'s monthly pool budget.  Replaces the three PostgREST reads the dashboard stitches client-side (tenants → tenant_tarifs → usage_costs) with a single server-computed cap.

### Example

```typescript
import {
    Alert,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Alert(configuration);

let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.alertsBudgetSummary(
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**BudgetSummary**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Admin privileges required. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

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

const { status, data } = await apiInstance.alertsCreateAlert(
    budgetAlertRequest,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **budgetAlertRequest** | **BudgetAlertRequest**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


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

let alertId: string; //Public id of the budget alert to delete. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.alertsDeleteAlert(
    alertId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **alertId** | [**string**] | Public id of the budget alert to delete. | defaults to undefined|
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

let alertId: string; //Public id of the budget alert to update. (default to undefined)
let budgetAlertUpdate: BudgetAlertUpdate; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.alertsUpdateAlert(
    alertId,
    budgetAlertUpdate,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **budgetAlertUpdate** | **BudgetAlertUpdate**|  | |
| **alertId** | [**string**] | Public id of the budget alert to update. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


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

