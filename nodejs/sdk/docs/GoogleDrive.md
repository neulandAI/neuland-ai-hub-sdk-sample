# GoogleDrive

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**googledriveCapabilities**](#googledrivecapabilities) | **GET** /integrations/googledrive/capabilities | Get data source capabilities|
|[**googledriveGetItemInfo**](#googledrivegetiteminfo) | **GET** /integrations/googledrive/drives/{drive_id}/items/{drive_item_id} | Get a drive item|
|[**googledriveGetUserInfo**](#googledrivegetuserinfo) | **GET** /integrations/googledrive/me | Get connected user profile|
|[**googledriveIsConnected**](#googledriveisconnected) | **GET** /integrations/googledrive/connected | Check connection status|
|[**googledriveListChildren**](#googledrivelistchildren) | **GET** /integrations/googledrive/drives/{drive_id}/items/{drive_item_id}/children | List children of a drive item|
|[**googledriveListDrives**](#googledrivelistdrives) | **GET** /integrations/googledrive/sites/{site_id}/drives | List drives in a site|
|[**googledriveListRoots**](#googledrivelistroots) | **GET** /integrations/googledrive/roots | List top-level browse entries|

# **googledriveCapabilities**
> DataSourceCapabilities googledriveCapabilities()

Return the browse-hierarchy metadata (root kind, depth) for this source.

### Example

```typescript
import {
    GoogleDrive,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new GoogleDrive(configuration);

let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.googledriveCapabilities(
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

# **googledriveGetItemInfo**
> DataSourceItemModel googledriveGetItemInfo()

Fetch a single drive item\'s metadata, with imported flag/count.

### Example

```typescript
import {
    GoogleDrive,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new GoogleDrive(configuration);

let driveId: string; //Id of the drive. (default to undefined)
let driveItemId: string; //Id of the item. (default to undefined)
let chatId: string; //Scope imported counts to this chat. (optional) (default to undefined)
let libraryId: string; //Scope imported counts to this library. (optional) (default to undefined)
let assistantId: string; //Scope imported counts to this assistant. (optional) (default to undefined)
let projectId: string; //Scope imported counts to this project. (optional) (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.googledriveGetItemInfo(
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
| **driveItemId** | [**string**] | Id of the item. | defaults to undefined|
| **chatId** | [**string**] | Scope imported counts to this chat. | (optional) defaults to undefined|
| **libraryId** | [**string**] | Scope imported counts to this library. | (optional) defaults to undefined|
| **assistantId** | [**string**] | Scope imported counts to this assistant. | (optional) defaults to undefined|
| **projectId** | [**string**] | Scope imported counts to this project. | (optional) defaults to undefined|
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
|**401** | Missing authentication or connector consent required. |  -  |
|**403** | Connector token lacks the required permissions. |  -  |
|**404** | No drive or item exists with the given ids. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **googledriveGetUserInfo**
> DataSourceUserModel googledriveGetUserInfo()

Return the current user\'s profile on the data source.

### Example

```typescript
import {
    GoogleDrive,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new GoogleDrive(configuration);

let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.googledriveGetUserInfo(
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
|**401** | Missing authentication or connector consent required. |  -  |
|**403** | Connector token lacks the required permissions. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **googledriveIsConnected**
> boolean googledriveIsConnected()

Report whether the current user has granted consent to browse this source.

### Example

```typescript
import {
    GoogleDrive,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new GoogleDrive(configuration);

let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.googledriveIsConnected(
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

# **googledriveListChildren**
> Array<DataSourceItemModel> googledriveListChildren()

List the immediate children of a drive item, with imported flags/counts.

### Example

```typescript
import {
    GoogleDrive,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new GoogleDrive(configuration);

let driveId: string; //Id of the drive. (default to undefined)
let driveItemId: string; //Id of the folder item, or \'root\'. (default to undefined)
let chatId: string; //Scope imported counts to this chat. (optional) (default to undefined)
let libraryId: string; //Scope imported counts to this library. (optional) (default to undefined)
let assistantId: string; //Scope imported counts to this assistant. (optional) (default to undefined)
let projectId: string; //Scope imported counts to this project. (optional) (default to undefined)
let recursive: boolean; //Recurse into subfolders and return all descendant files. (optional) (default to false)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.googledriveListChildren(
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
| **driveItemId** | [**string**] | Id of the folder item, or \&#39;root\&#39;. | defaults to undefined|
| **chatId** | [**string**] | Scope imported counts to this chat. | (optional) defaults to undefined|
| **libraryId** | [**string**] | Scope imported counts to this library. | (optional) defaults to undefined|
| **assistantId** | [**string**] | Scope imported counts to this assistant. | (optional) defaults to undefined|
| **projectId** | [**string**] | Scope imported counts to this project. | (optional) defaults to undefined|
| **recursive** | [**boolean**] | Recurse into subfolders and return all descendant files. | (optional) defaults to false|
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
|**401** | Missing authentication or connector consent required. |  -  |
|**403** | Connector token lacks the required permissions. |  -  |
|**404** | No drive or item exists with the given ids. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **googledriveListDrives**
> Array<DataSourceDriveModel> googledriveListDrives()

List drives under a site, with imported counts per drive.

### Example

```typescript
import {
    GoogleDrive,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new GoogleDrive(configuration);

let siteId: string; //Id of the site to list drives for. (default to undefined)
let chatId: string; //Scope imported counts to this chat. (optional) (default to undefined)
let libraryId: string; //Scope imported counts to this library. (optional) (default to undefined)
let assistantId: string; //Scope imported counts to this assistant. (optional) (default to undefined)
let projectId: string; //Scope imported counts to this project. (optional) (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.googledriveListDrives(
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
| **chatId** | [**string**] | Scope imported counts to this chat. | (optional) defaults to undefined|
| **libraryId** | [**string**] | Scope imported counts to this library. | (optional) defaults to undefined|
| **assistantId** | [**string**] | Scope imported counts to this assistant. | (optional) defaults to undefined|
| **projectId** | [**string**] | Scope imported counts to this project. | (optional) defaults to undefined|
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
|**401** | Missing authentication or connector consent required. |  -  |
|**403** | Connector token lacks the required permissions. |  -  |
|**404** | No site exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **googledriveListRoots**
> ResponseGoogledriveListRoots googledriveListRoots()

List the top-level browse entries (sites or drives), with imported counts.

### Example

```typescript
import {
    GoogleDrive,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new GoogleDrive(configuration);

let chatId: string; //Scope imported counts to this chat. (optional) (default to undefined)
let libraryId: string; //Scope imported counts to this library. (optional) (default to undefined)
let assistantId: string; //Scope imported counts to this assistant. (optional) (default to undefined)
let projectId: string; //Scope imported counts to this project. (optional) (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.googledriveListRoots(
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
| **chatId** | [**string**] | Scope imported counts to this chat. | (optional) defaults to undefined|
| **libraryId** | [**string**] | Scope imported counts to this library. | (optional) defaults to undefined|
| **assistantId** | [**string**] | Scope imported counts to this assistant. | (optional) defaults to undefined|
| **projectId** | [**string**] | Scope imported counts to this project. | (optional) defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ResponseGoogledriveListRoots**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing authentication or connector consent required. |  -  |
|**403** | Connector token lacks the required permissions. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

