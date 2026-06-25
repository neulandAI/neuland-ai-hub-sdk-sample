# OneDrive

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**onedriveCapabilities**](#onedrivecapabilities) | **GET** /integrations/onedrive/capabilities | Get data source capabilities|
|[**onedriveGetItemInfo**](#onedrivegetiteminfo) | **GET** /integrations/onedrive/drives/{drive_id}/items/{drive_item_id} | Get a drive item|
|[**onedriveGetUserInfo**](#onedrivegetuserinfo) | **GET** /integrations/onedrive/me | Get current data source user|
|[**onedriveIsConnected**](#onedriveisconnected) | **GET** /integrations/onedrive/connected | Check data source connection|
|[**onedriveListChildren**](#onedrivelistchildren) | **GET** /integrations/onedrive/drives/{drive_id}/items/{drive_item_id}/children | List children of a drive item|
|[**onedriveListDrives**](#onedrivelistdrives) | **GET** /integrations/onedrive/sites/{site_id}/drives | List drives in a site|
|[**onedriveListRoots**](#onedrivelistroots) | **GET** /integrations/onedrive/roots | List top-level browse entries|

# **onedriveCapabilities**
> DataSourceCapabilities onedriveCapabilities()

Return the browse-hierarchy metadata for this data source.

### Example

```typescript
import {
    OneDrive,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new OneDrive(configuration);

let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.onedriveCapabilities(
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**DataSourceCapabilities**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **onedriveGetItemInfo**
> DataSourceItemModel onedriveGetItemInfo()

Get a single data source drive item, annotated with imported counts.

### Example

```typescript
import {
    OneDrive,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new OneDrive(configuration);

let driveId: string; //Id of the drive. (default to undefined)
let driveItemId: string; //Id of the drive item. (default to undefined)
let chatId: number; //Scope imported counts to this chat. (optional) (default to undefined)
let libraryId: number; //Scope imported counts to this library. (optional) (default to undefined)
let assistantId: number; //Scope imported counts to this assistant. (optional) (default to undefined)
let projectId: number; //Scope imported counts to this project. (optional) (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.onedriveGetItemInfo(
    driveId,
    driveItemId,
    chatId,
    libraryId,
    assistantId,
    projectId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **driveId** | [**string**] | Id of the drive. | defaults to undefined|
| **driveItemId** | [**string**] | Id of the drive item. | defaults to undefined|
| **chatId** | [**number**] | Scope imported counts to this chat. | (optional) defaults to undefined|
| **libraryId** | [**number**] | Scope imported counts to this library. | (optional) defaults to undefined|
| **assistantId** | [**number**] | Scope imported counts to this assistant. | (optional) defaults to undefined|
| **projectId** | [**number**] | Scope imported counts to this project. | (optional) defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**DataSourceItemModel**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication, or no valid connector token. |  -  |
|**403** | User has not consented to the required scope. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **onedriveGetUserInfo**
> DataSourceUserModel onedriveGetUserInfo()

Return the signed-in user\'s profile on this data source.

### Example

```typescript
import {
    OneDrive,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new OneDrive(configuration);

let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.onedriveGetUserInfo(
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**DataSourceUserModel**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication, or no valid connector token. |  -  |
|**403** | User has not consented to the required scope. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **onedriveIsConnected**
> boolean onedriveIsConnected()

Report whether the user has consented to this source\'s browse scopes.

### Example

```typescript
import {
    OneDrive,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new OneDrive(configuration);

let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.onedriveIsConnected(
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**boolean**

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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **onedriveListChildren**
> Array<DataSourceItemModel> onedriveListChildren()

List files and folders under a drive item, annotated with imported counts.

### Example

```typescript
import {
    OneDrive,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new OneDrive(configuration);

let driveId: string; //Id of the drive. (default to undefined)
let driveItemId: string; //Id of the parent item; empty or \'root\' for the drive root. (default to undefined)
let chatId: number; //Scope imported counts to this chat. (optional) (default to undefined)
let libraryId: number; //Scope imported counts to this library. (optional) (default to undefined)
let assistantId: number; //Scope imported counts to this assistant. (optional) (default to undefined)
let projectId: number; //Scope imported counts to this project. (optional) (default to undefined)
let recursive: boolean; //Recurse into subfolders, returning only files. (optional) (default to false)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.onedriveListChildren(
    driveId,
    driveItemId,
    chatId,
    libraryId,
    assistantId,
    projectId,
    recursive,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **driveId** | [**string**] | Id of the drive. | defaults to undefined|
| **driveItemId** | [**string**] | Id of the parent item; empty or \&#39;root\&#39; for the drive root. | defaults to undefined|
| **chatId** | [**number**] | Scope imported counts to this chat. | (optional) defaults to undefined|
| **libraryId** | [**number**] | Scope imported counts to this library. | (optional) defaults to undefined|
| **assistantId** | [**number**] | Scope imported counts to this assistant. | (optional) defaults to undefined|
| **projectId** | [**number**] | Scope imported counts to this project. | (optional) defaults to undefined|
| **recursive** | [**boolean**] | Recurse into subfolders, returning only files. | (optional) defaults to false|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<DataSourceItemModel>**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication, or no valid connector token. |  -  |
|**403** | User has not consented to the required scope. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **onedriveListDrives**
> Array<DataSourceDriveModel> onedriveListDrives()

List the drives under a site (or the user\'s drives for drive-rooted sources).

### Example

```typescript
import {
    OneDrive,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new OneDrive(configuration);

let siteId: string; //Id of the site to list drives for. (default to undefined)
let chatId: number; //Scope imported counts to this chat. (optional) (default to undefined)
let libraryId: number; //Scope imported counts to this library. (optional) (default to undefined)
let assistantId: number; //Scope imported counts to this assistant. (optional) (default to undefined)
let projectId: number; //Scope imported counts to this project. (optional) (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.onedriveListDrives(
    siteId,
    chatId,
    libraryId,
    assistantId,
    projectId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Id of the site to list drives for. | defaults to undefined|
| **chatId** | [**number**] | Scope imported counts to this chat. | (optional) defaults to undefined|
| **libraryId** | [**number**] | Scope imported counts to this library. | (optional) defaults to undefined|
| **assistantId** | [**number**] | Scope imported counts to this assistant. | (optional) defaults to undefined|
| **projectId** | [**number**] | Scope imported counts to this project. | (optional) defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<DataSourceDriveModel>**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication, or no valid connector token. |  -  |
|**403** | User has not consented to the required scope. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **onedriveListRoots**
> ResponseOnedriveListRoots onedriveListRoots()

List the source\'s top-level browse entries (sites or drives) with imported counts.

### Example

```typescript
import {
    OneDrive,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new OneDrive(configuration);

let chatId: number; //Scope imported counts to this chat. (optional) (default to undefined)
let libraryId: number; //Scope imported counts to this library. (optional) (default to undefined)
let assistantId: number; //Scope imported counts to this assistant. (optional) (default to undefined)
let projectId: number; //Scope imported counts to this project. (optional) (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.onedriveListRoots(
    chatId,
    libraryId,
    assistantId,
    projectId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatId** | [**number**] | Scope imported counts to this chat. | (optional) defaults to undefined|
| **libraryId** | [**number**] | Scope imported counts to this library. | (optional) defaults to undefined|
| **assistantId** | [**number**] | Scope imported counts to this assistant. | (optional) defaults to undefined|
| **projectId** | [**number**] | Scope imported counts to this project. | (optional) defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ResponseOnedriveListRoots**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication, or no valid connector token. |  -  |
|**403** | User has not consented to the required scope. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

