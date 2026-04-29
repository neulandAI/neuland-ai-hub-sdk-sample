# Sharepoint

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**integrationsGetItemInfo**](#integrationsgetiteminfo) | **GET** /integrations/sharepoint/drives/{drive_id}/items/{drive_item_id} | Get Item Info|
|[**integrationsGetUserInfo**](#integrationsgetuserinfo) | **GET** /integrations/sharepoint/me | Get User Info|
|[**integrationsIsConnected**](#integrationsisconnected) | **GET** /integrations/sharepoint/connected | Is Connected|
|[**integrationsListAllSites**](#integrationslistallsites) | **GET** /integrations/sharepoint/sites | List All Sites|
|[**integrationsListChildren**](#integrationslistchildren) | **GET** /integrations/sharepoint/drives/{drive_id}/items/{drive_item_id}/children | List Children|
|[**integrationsListDrives**](#integrationslistdrives) | **GET** /integrations/sharepoint/sites/{site_id}/drives | List Drives|

# **integrationsGetItemInfo**
> SharepointItemModel integrationsGetItemInfo()


### Example

```typescript
import {
    Sharepoint,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Sharepoint(configuration);

let driveId: string; // (default to undefined)
let driveItemId: string; // (default to undefined)
let chatId: number; // (optional) (default to undefined)
let libraryId: number; // (optional) (default to undefined)
let assistantId: number; // (optional) (default to undefined)
let projectId: number; // (optional) (default to undefined)
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
| **driveId** | [**string**] |  | defaults to undefined|
| **driveItemId** | [**string**] |  | defaults to undefined|
| **chatId** | [**number**] |  | (optional) defaults to undefined|
| **libraryId** | [**number**] |  | (optional) defaults to undefined|
| **assistantId** | [**number**] |  | (optional) defaults to undefined|
| **projectId** | [**number**] |  | (optional) defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SharepointItemModel**

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

# **integrationsGetUserInfo**
> SharepointUserModel integrationsGetUserInfo()


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

# **integrationsIsConnected**
> boolean integrationsIsConnected()


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

# **integrationsListAllSites**
> Array<SharepointSiteModel> integrationsListAllSites()


### Example

```typescript
import {
    Sharepoint,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Sharepoint(configuration);

let chatId: number; // (optional) (default to undefined)
let libraryId: number; // (optional) (default to undefined)
let assistantId: number; // (optional) (default to undefined)
let projectId: number; // (optional) (default to undefined)
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
| **chatId** | [**number**] |  | (optional) defaults to undefined|
| **libraryId** | [**number**] |  | (optional) defaults to undefined|
| **assistantId** | [**number**] |  | (optional) defaults to undefined|
| **projectId** | [**number**] |  | (optional) defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<SharepointSiteModel>**

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

# **integrationsListChildren**
> Array<SharepointItemModel> integrationsListChildren()


### Example

```typescript
import {
    Sharepoint,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Sharepoint(configuration);

let driveId: string; // (default to undefined)
let driveItemId: string; // (default to undefined)
let chatId: number; // (optional) (default to undefined)
let libraryId: number; // (optional) (default to undefined)
let assistantId: number; // (optional) (default to undefined)
let projectId: number; // (optional) (default to undefined)
let recursive: boolean; // (optional) (default to false)
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
| **driveId** | [**string**] |  | defaults to undefined|
| **driveItemId** | [**string**] |  | defaults to undefined|
| **chatId** | [**number**] |  | (optional) defaults to undefined|
| **libraryId** | [**number**] |  | (optional) defaults to undefined|
| **assistantId** | [**number**] |  | (optional) defaults to undefined|
| **projectId** | [**number**] |  | (optional) defaults to undefined|
| **recursive** | [**boolean**] |  | (optional) defaults to false|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<SharepointItemModel>**

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

# **integrationsListDrives**
> Array<SharepointDriveModel> integrationsListDrives()


### Example

```typescript
import {
    Sharepoint,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Sharepoint(configuration);

let siteId: string; // (default to undefined)
let chatId: number; // (optional) (default to undefined)
let libraryId: number; // (optional) (default to undefined)
let assistantId: number; // (optional) (default to undefined)
let projectId: number; // (optional) (default to undefined)
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
| **siteId** | [**string**] |  | defaults to undefined|
| **chatId** | [**number**] |  | (optional) defaults to undefined|
| **libraryId** | [**number**] |  | (optional) defaults to undefined|
| **assistantId** | [**number**] |  | (optional) defaults to undefined|
| **projectId** | [**number**] |  | (optional) defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<SharepointDriveModel>**

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

