# Dropbox

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**dropboxCapabilities**](#dropboxcapabilities) | **GET** /integrations/dropbox/capabilities | Get data source capabilities|
|[**dropboxGetItemInfo**](#dropboxgetiteminfo) | **GET** /integrations/dropbox/drives/{drive_id}/items/{drive_item_id} | Get a drive item|
|[**dropboxGetUserInfo**](#dropboxgetuserinfo) | **GET** /integrations/dropbox/me | Get connected user profile|
|[**dropboxIsConnected**](#dropboxisconnected) | **GET** /integrations/dropbox/connected | Check connection status|
|[**dropboxListChildren**](#dropboxlistchildren) | **GET** /integrations/dropbox/drives/{drive_id}/items/{drive_item_id}/children | List children of a drive item|
|[**dropboxListDrives**](#dropboxlistdrives) | **GET** /integrations/dropbox/sites/{site_id}/drives | List drives in a site|
|[**dropboxListRoots**](#dropboxlistroots) | **GET** /integrations/dropbox/roots | List top-level browse entries|

# **dropboxCapabilities**
> DataSourceCapabilities dropboxCapabilities()

Return the browse-hierarchy metadata (root kind, depth) for this source.

### Example

```typescript
import {
    Dropbox,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Dropbox(configuration);

let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.dropboxCapabilities(
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

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dropboxGetItemInfo**
> DataSourceItemModel dropboxGetItemInfo()

Fetch a single drive item\'s metadata, with imported flag/count.

### Example

```typescript
import {
    Dropbox,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Dropbox(configuration);

let driveId: string; //Id of the drive. (default to undefined)
let driveItemId: string; //Id of the item. (default to undefined)
let chatId: string; //Scope imported counts to this chat. (optional) (default to undefined)
let libraryId: string; //Scope imported counts to this library. (optional) (default to undefined)
let assistantId: string; //Scope imported counts to this assistant. (optional) (default to undefined)
let projectId: string; //Scope imported counts to this project. (optional) (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.dropboxGetItemInfo(
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

[APIKeyHeader](../README.md#APIKeyHeader)

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

# **dropboxGetUserInfo**
> DataSourceUserModel dropboxGetUserInfo()

Return the current user\'s profile on the data source.

### Example

```typescript
import {
    Dropbox,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Dropbox(configuration);

let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.dropboxGetUserInfo(
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

[APIKeyHeader](../README.md#APIKeyHeader)

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

# **dropboxIsConnected**
> boolean dropboxIsConnected()

Report whether the current user has granted consent to browse this source.

### Example

```typescript
import {
    Dropbox,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Dropbox(configuration);

let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.dropboxIsConnected(
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

[APIKeyHeader](../README.md#APIKeyHeader)

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

# **dropboxListChildren**
> Array<DataSourceItemModel> dropboxListChildren()

List the immediate children of a drive item, with imported flags/counts.

### Example

```typescript
import {
    Dropbox,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Dropbox(configuration);

let driveId: string; //Id of the drive. (default to undefined)
let driveItemId: string; //Id of the folder item, or \'root\'. (default to undefined)
let chatId: string; //Scope imported counts to this chat. (optional) (default to undefined)
let libraryId: string; //Scope imported counts to this library. (optional) (default to undefined)
let assistantId: string; //Scope imported counts to this assistant. (optional) (default to undefined)
let projectId: string; //Scope imported counts to this project. (optional) (default to undefined)
let recursive: boolean; //Recurse into subfolders and return all descendant files. (optional) (default to false)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.dropboxListChildren(
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

[APIKeyHeader](../README.md#APIKeyHeader)

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

# **dropboxListDrives**
> Array<DataSourceDriveModel> dropboxListDrives()

List drives under a site, with imported counts per drive.

### Example

```typescript
import {
    Dropbox,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Dropbox(configuration);

let siteId: string; //Id of the site to list drives for. (default to undefined)
let chatId: string; //Scope imported counts to this chat. (optional) (default to undefined)
let libraryId: string; //Scope imported counts to this library. (optional) (default to undefined)
let assistantId: string; //Scope imported counts to this assistant. (optional) (default to undefined)
let projectId: string; //Scope imported counts to this project. (optional) (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.dropboxListDrives(
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

[APIKeyHeader](../README.md#APIKeyHeader)

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

# **dropboxListRoots**
> ResponseDropboxListRoots dropboxListRoots()

List the top-level browse entries (sites or drives), with imported counts.

### Example

```typescript
import {
    Dropbox,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Dropbox(configuration);

let chatId: string; //Scope imported counts to this chat. (optional) (default to undefined)
let libraryId: string; //Scope imported counts to this library. (optional) (default to undefined)
let assistantId: string; //Scope imported counts to this assistant. (optional) (default to undefined)
let projectId: string; //Scope imported counts to this project. (optional) (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.dropboxListRoots(
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

**ResponseDropboxListRoots**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

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

