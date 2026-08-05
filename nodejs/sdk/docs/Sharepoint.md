# Sharepoint

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**integrationsGetItemInfo**](#integrationsgetiteminfo) | **GET** /integrations/sharepoint/drives/{drive_id}/items/{drive_item_id} | Get a drive item|
|[**integrationsGetUserInfo**](#integrationsgetuserinfo) | **GET** /integrations/sharepoint/me | Get current SharePoint user|
|[**integrationsIsConnected**](#integrationsisconnected) | **GET** /integrations/sharepoint/connected | Check SharePoint connection|
|[**integrationsListAllSites**](#integrationslistallsites) | **GET** /integrations/sharepoint/sites | List SharePoint sites|
|[**integrationsListChildren**](#integrationslistchildren) | **GET** /integrations/sharepoint/drives/{drive_id}/items/{drive_item_id}/children | List children of a drive item|
|[**integrationsListDrives**](#integrationslistdrives) | **GET** /integrations/sharepoint/sites/{site_id}/drives | List drives in a site|

# **integrationsGetItemInfo**
> SharepointItemModel integrationsGetItemInfo()

Get a single SharePoint drive item, annotated with imported counts.

### Example

```typescript
import {
    Sharepoint,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Sharepoint(configuration);

let driveId: string; //Id of the drive. (default to undefined)
let driveItemId: string; //Id of the drive item. (default to undefined)
let chatId: string; //Scope imported counts to this chat. (optional) (default to undefined)
let libraryId: string; //Scope imported counts to this library. (optional) (default to undefined)
let assistantId: string; //Scope imported counts to this assistant. (optional) (default to undefined)
let projectId: string; //Scope imported counts to this project. (optional) (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.integrationsGetItemInfo(
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
| **chatId** | [**string**] | Scope imported counts to this chat. | (optional) defaults to undefined|
| **libraryId** | [**string**] | Scope imported counts to this library. | (optional) defaults to undefined|
| **assistantId** | [**string**] | Scope imported counts to this assistant. | (optional) defaults to undefined|
| **projectId** | [**string**] | Scope imported counts to this project. | (optional) defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SharepointItemModel**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication, or no valid connector token. |  -  |
|**403** | User has not consented to the required SharePoint scope. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integrationsGetUserInfo**
> SharepointUserModel integrationsGetUserInfo()

Return the signed-in user\'s SharePoint / Microsoft Graph profile.

### Example

```typescript
import {
    Sharepoint,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Sharepoint(configuration);

let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.integrationsGetUserInfo(
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SharepointUserModel**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication, or no valid connector token. |  -  |
|**403** | User has not consented to the required SharePoint scope. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integrationsIsConnected**
> boolean integrationsIsConnected()

Report whether the user has consented to the SharePoint file-read scope.

### Example

```typescript
import {
    Sharepoint,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Sharepoint(configuration);

let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.integrationsIsConnected(
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

# **integrationsListAllSites**
> Array<SharepointSiteModel> integrationsListAllSites()

List the SharePoint sites the user can access, with imported document counts.

### Example

```typescript
import {
    Sharepoint,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Sharepoint(configuration);

let chatId: string; //Scope imported counts to this chat. (optional) (default to undefined)
let libraryId: string; //Scope imported counts to this library. (optional) (default to undefined)
let assistantId: string; //Scope imported counts to this assistant. (optional) (default to undefined)
let projectId: string; //Scope imported counts to this project. (optional) (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.integrationsListAllSites(
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

**Array<SharepointSiteModel>**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication, or no valid connector token. |  -  |
|**403** | User has not consented to the required SharePoint scope. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integrationsListChildren**
> Array<SharepointItemModel> integrationsListChildren()

List files and folders under a drive item, annotated with imported counts.

### Example

```typescript
import {
    Sharepoint,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Sharepoint(configuration);

let driveId: string; //Id of the drive. (default to undefined)
let driveItemId: string; //Id of the parent item; empty or \'root\' for the drive root. (default to undefined)
let chatId: string; //Scope imported counts to this chat. (optional) (default to undefined)
let libraryId: string; //Scope imported counts to this library. (optional) (default to undefined)
let assistantId: string; //Scope imported counts to this assistant. (optional) (default to undefined)
let projectId: string; //Scope imported counts to this project. (optional) (default to undefined)
let recursive: boolean; //Recurse into subfolders, returning only files. (optional) (default to false)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.integrationsListChildren(
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
| **chatId** | [**string**] | Scope imported counts to this chat. | (optional) defaults to undefined|
| **libraryId** | [**string**] | Scope imported counts to this library. | (optional) defaults to undefined|
| **assistantId** | [**string**] | Scope imported counts to this assistant. | (optional) defaults to undefined|
| **projectId** | [**string**] | Scope imported counts to this project. | (optional) defaults to undefined|
| **recursive** | [**boolean**] | Recurse into subfolders, returning only files. | (optional) defaults to false|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<SharepointItemModel>**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication, or no valid connector token. |  -  |
|**403** | User has not consented to the required SharePoint scope. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integrationsListDrives**
> Array<SharepointDriveModel> integrationsListDrives()

List the document libraries (drives) within a SharePoint site.

### Example

```typescript
import {
    Sharepoint,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Sharepoint(configuration);

let siteId: string; //SharePoint site id. (default to undefined)
let chatId: string; //Scope imported counts to this chat. (optional) (default to undefined)
let libraryId: string; //Scope imported counts to this library. (optional) (default to undefined)
let assistantId: string; //Scope imported counts to this assistant. (optional) (default to undefined)
let projectId: string; //Scope imported counts to this project. (optional) (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.integrationsListDrives(
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
| **siteId** | [**string**] | SharePoint site id. | defaults to undefined|
| **chatId** | [**string**] | Scope imported counts to this chat. | (optional) defaults to undefined|
| **libraryId** | [**string**] | Scope imported counts to this library. | (optional) defaults to undefined|
| **assistantId** | [**string**] | Scope imported counts to this assistant. | (optional) defaults to undefined|
| **projectId** | [**string**] | Scope imported counts to this project. | (optional) defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<SharepointDriveModel>**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication, or no valid connector token. |  -  |
|**403** | User has not consented to the required SharePoint scope. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

