# Alert

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**alertsBudgetForecast**](#alertsbudgetforecast) | **GET** /alerts/budgets/forecast | Forecast the tenant\&#39;s month-end spend from its current run rate|
|[**alertsBudgetSummary**](#alertsbudgetsummary) | **GET** /alerts/budgets/summary | Get the tenant\&#39;s current-month budget summary|
|[**alertsCancelTopUp**](#alertscanceltopup) | **POST** /alerts/budgets/top-ups/{top_up_id}/cancel | Cancel a budget top-up|
|[**alertsCreateAlert**](#alertscreatealert) | **POST** /alerts/ | Create a budget alert|
|[**alertsCreateTopUp**](#alertscreatetopup) | **POST** /alerts/budgets/top-ups | Add a budget top-up for the current month|
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

# **alertsCancelTopUp**
> BudgetTopUpOut alertsCancelTopUp()

Stop a top-up adding headroom, keeping what it has already covered.

### Example

```typescript
import {
    Alert,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Alert(configuration);

let topUpId: string; //Public id of the budget top-up to cancel. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.alertsCancelTopUp(
    topUpId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **topUpId** | [**string**] | Public id of the budget top-up to cancel. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**BudgetTopUpOut**

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
|**403** | Admin privileges required, or the top-up belongs to another tenant. |  -  |
|**404** | No budget top-up exists with the given id. |  -  |
|**422** | The top-up is already cancelled. |  -  |

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

# **alertsCreateTopUp**
> BudgetTopUpOut alertsCreateTopUp(budgetTopUpRequest)

Raise the tenant\'s pool budget for the current calendar month.

### Example

```typescript
import {
    Alert,
    Configuration,
    BudgetTopUpRequest
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Alert(configuration);

let budgetTopUpRequest: BudgetTopUpRequest; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.alertsCreateTopUp(
    budgetTopUpRequest,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **budgetTopUpRequest** | **BudgetTopUpRequest**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**BudgetTopUpOut**

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
|**422** | The tenant\&#39;s plan has no monthly pool to raise. |  -  |

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

