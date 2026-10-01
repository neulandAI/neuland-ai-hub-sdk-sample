# ResourceAccess

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**accessGetUserAccess**](#accessgetuseraccess) | **GET** /access/user/{user_id} | Effective access for a user, and where it comes from|
|[**accessRevokeUserGrant**](#accessrevokeusergrant) | **DELETE** /access/user/{user_id}/grants/{kind}/{item_id} | Revoke one direct grant from a user|
|[**accessSetUserGrants**](#accesssetusergrants) | **PUT** /access/user/{user_id}/grants/{kind} | Set a user\&#39;s direct grants for one kind|

# **accessGetUserAccess**
> UserAccessOut accessGetUserAccess()

The models, tools and connectors this user may use, each with the roles that grant it and whether it was also granted directly.

### Example

```typescript
import {
    ResourceAccess,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ResourceAccess(configuration);

let userId: string; //Public id of the user to inspect. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.accessGetUserAccess(
    userId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | Public id of the user to inspect. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**UserAccessOut**

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
|**403** | One of the three MANAGE_*_ACCESS permissions is required to inspect anyone other than yourself. |  -  |
|**404** | User not found. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accessRevokeUserGrant**
> accessRevokeUserGrant()

Revoke one direct grant. The user keeps whatever their roles grant.

### Example

```typescript
import {
    ResourceAccess,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ResourceAccess(configuration);

let userId: string; //Public id of the user. (default to undefined)
let kind: 'model' | 'tool' | 'connector'; //Which resource kind to revoke. (default to undefined)
let itemId: string; //Public id of the item to revoke. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.accessRevokeUserGrant(
    userId,
    kind,
    itemId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | Public id of the user. | defaults to undefined|
| **kind** | [**&#39;model&#39; | &#39;tool&#39; | &#39;connector&#39;**]**Array<&#39;model&#39; &#124; &#39;tool&#39; &#124; &#39;connector&#39;>** | Which resource kind to revoke. | defaults to undefined|
| **itemId** | [**string**] | Public id of the item to revoke. | defaults to undefined|
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
|**403** | The matching MANAGE_*_ACCESS permission is required. |  -  |
|**404** | User or item not found. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accessSetUserGrants**
> Array<UserGrantOut> accessSetUserGrants(userGrantIn)

Grant these items directly, on top of what the user\'s roles already give.  The complete desired set: an item left out is revoked. That returns the user to their roles\' set rather than to nothing, so unlike a role change this cannot strip anyone bare.

### Example

```typescript
import {
    ResourceAccess,
    Configuration,
    UserGrantIn
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ResourceAccess(configuration);

let userId: string; //Public id of the user to grant to. (default to undefined)
let kind: 'model' | 'tool' | 'connector'; //Which resource kind to set. (default to undefined)
let userGrantIn: UserGrantIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.accessSetUserGrants(
    userId,
    kind,
    userGrantIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userGrantIn** | **UserGrantIn**|  | |
| **userId** | [**string**] | Public id of the user to grant to. | defaults to undefined|
| **kind** | [**&#39;model&#39; | &#39;tool&#39; | &#39;connector&#39;**]**Array<&#39;model&#39; &#124; &#39;tool&#39; &#124; &#39;connector&#39;>** | Which resource kind to set. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<UserGrantOut>**

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
|**403** | The matching MANAGE_*_ACCESS permission is required, or an item is outside the caller\&#39;s own access. |  -  |
|**404** | User not found, or one or more items not found. |  -  |
|**422** | An item is not enabled for the tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

