# Application

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**applicationsCreateApp**](#applicationscreateapp) | **POST** /applications/ | Create an application|
|[**applicationsDeleteApp**](#applicationsdeleteapp) | **DELETE** /applications/{app_id} | Delete an application|
|[**applicationsUpdateApp**](#applicationsupdateapp) | **PATCH** /applications/{app_id} | Update an application|
|[**applicationsUpdateGroupMembership**](#applicationsupdategroupmembership) | **PUT** /applications/group/access | Set application access for a user group|
|[**applicationsUpdateUserMembership**](#applicationsupdateusermembership) | **PUT** /applications/user/access | Set application access for users|

# **applicationsCreateApp**
> any applicationsCreateApp(applicationIn)

Create a new application (superadmin only).

### Example

```typescript
import {
    Application,
    Configuration,
    ApplicationIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Application(configuration);

let applicationIn: ApplicationIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.applicationsCreateApp(
    applicationIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicationIn** | **ApplicationIn**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**any**

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
|**403** | Superadmin privileges required. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationsDeleteApp**
> applicationsDeleteApp()

Delete an application (superadmin only).

### Example

```typescript
import {
    Application,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Application(configuration);

let appId: number; //ID of the application to delete. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.applicationsDeleteApp(
    appId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appId** | [**number**] | ID of the application to delete. | defaults to undefined|
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
|**403** | Superadmin privileges required. |  -  |
|**404** | No application exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationsUpdateApp**
> Application applicationsUpdateApp(applicationIn)

Update an existing application (superadmin only).

### Example

```typescript
import {
    Application,
    Configuration,
    ApplicationIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Application(configuration);

let appId: number; //ID of the application to update. (default to undefined)
let applicationIn: ApplicationIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.applicationsUpdateApp(
    appId,
    applicationIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicationIn** | **ApplicationIn**|  | |
| **appId** | [**number**] | ID of the application to update. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Application**

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
|**403** | Superadmin privileges required. |  -  |
|**404** | No application exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationsUpdateGroupMembership**
> Array<ApplicationGroup> applicationsUpdateGroupMembership(groupAppAccessIn)

Grant or update application access for a user group (tenant admin only).

### Example

```typescript
import {
    Application,
    Configuration,
    GroupAppAccessIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Application(configuration);

let groupAppAccessIn: GroupAppAccessIn; //
let cookieName: string; // (optional) (default to undefined)
let tenantId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.applicationsUpdateGroupMembership(
    groupAppAccessIn,
    cookieName,
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupAppAccessIn** | **GroupAppAccessIn**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**Array<ApplicationGroup>**

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
|**403** | Tenant admin privileges required. |  -  |
|**404** | Application not found, or one or more groups not found. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationsUpdateUserMembership**
> Array<ApplicationMember> applicationsUpdateUserMembership(applicationAccessIn)

Grant or update application access for a list of users (tenant admin only).

### Example

```typescript
import {
    Application,
    Configuration,
    ApplicationAccessIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Application(configuration);

let applicationAccessIn: ApplicationAccessIn; //
let cookieName: string; // (optional) (default to undefined)
let tenantId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.applicationsUpdateUserMembership(
    applicationAccessIn,
    cookieName,
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicationAccessIn** | **ApplicationAccessIn**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**Array<ApplicationMember>**

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
|**403** | Tenant admin privileges required. |  -  |
|**404** | No application exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

