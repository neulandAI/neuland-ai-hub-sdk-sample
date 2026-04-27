# UserApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usersActivateUser**](#usersactivateuser) | **POST** /users/{user_id}/activate | Activate User|
|[**usersCreateGroup**](#userscreategroup) | **POST** /users/groups | Create Group|
|[**usersCreateUser**](#userscreateuser) | **POST** /users/ | Create User|
|[**usersDeactivateUser**](#usersdeactivateuser) | **POST** /users/{user_id}/deactivate | Deactivate User|
|[**usersDeleteGroup**](#usersdeletegroup) | **DELETE** /users/groups/{group_id} | Delete Group|
|[**usersDeleteUser**](#usersdeleteuser) | **DELETE** /users/{user_id} | Delete User|
|[**usersGetMyself**](#usersgetmyself) | **GET** /users/me | Get Myself|
|[**usersResetPassword**](#usersresetpassword) | **POST** /users/passwd | Reset Password|
|[**usersUpdateGroup**](#usersupdategroup) | **PATCH** /users/groups/{group_id} | Update Group|
|[**usersUpdateUser**](#usersupdateuser) | **PATCH** /users/{user_id} | Update User|
|[**usersUpsertMembers**](#usersupsertmembers) | **PUT** /users/members/{group_id} | Upsert Members|
|[**usersUpsertMyPreferences**](#usersupsertmypreferences) | **PATCH** /users/me/preferences | Upsert My Preferences|

# **usersActivateUser**
> UserOut usersActivateUser()


### Example

```typescript
import {
    UserApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let userId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)
let tenantId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.usersActivateUser(
    userId,
    cookieName,
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**UserOut**

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

# **usersCreateGroup**
> UserGroup usersCreateGroup(groupIn)

Create a new user group

### Example

```typescript
import {
    UserApi,
    Configuration,
    GroupIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let groupIn: GroupIn; //
let cookieName: string; // (optional) (default to undefined)
let tenantId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.usersCreateGroup(
    groupIn,
    cookieName,
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupIn** | **GroupIn**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**UserGroup**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersCreateUser**
> UserOut usersCreateUser(userIn)


### Example

```typescript
import {
    UserApi,
    Configuration,
    UserIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let userIn: UserIn; //
let cookieName: string; // (optional) (default to undefined)
let tenantId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.usersCreateUser(
    userIn,
    cookieName,
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userIn** | **UserIn**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**UserOut**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersDeactivateUser**
> UserOut usersDeactivateUser()


### Example

```typescript
import {
    UserApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let userId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)
let tenantId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.usersDeactivateUser(
    userId,
    cookieName,
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**UserOut**

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

# **usersDeleteGroup**
> usersDeleteGroup()

Delete a user group

### Example

```typescript
import {
    UserApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let groupId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)
let tenantId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.usersDeleteGroup(
    groupId,
    cookieName,
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**number**] |  | defaults to undefined|
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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersDeleteUser**
> usersDeleteUser()


### Example

```typescript
import {
    UserApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let userId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)
let tenantId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.usersDeleteUser(
    userId,
    cookieName,
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**number**] |  | defaults to undefined|
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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersGetMyself**
> UserOut usersGetMyself()


### Example

```typescript
import {
    UserApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.usersGetMyself(
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**UserOut**

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

# **usersResetPassword**
> usersResetPassword(passwordResetIn)

Resets the current user password.

### Example

```typescript
import {
    UserApi,
    Configuration,
    PasswordResetIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let passwordResetIn: PasswordResetIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.usersResetPassword(
    passwordResetIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **passwordResetIn** | **PasswordResetIn**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersUpdateGroup**
> UserGroup usersUpdateGroup(groupIn)

Update an existing user group

### Example

```typescript
import {
    UserApi,
    Configuration,
    GroupIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let groupId: number; // (default to undefined)
let groupIn: GroupIn; //
let cookieName: string; // (optional) (default to undefined)
let tenantId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.usersUpdateGroup(
    groupId,
    groupIn,
    cookieName,
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupIn** | **GroupIn**|  | |
| **groupId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**UserGroup**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersUpdateUser**
> UserOut usersUpdateUser(userUpdateIn)


### Example

```typescript
import {
    UserApi,
    Configuration,
    UserUpdateIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let userId: number; // (default to undefined)
let userUpdateIn: UserUpdateIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.usersUpdateUser(
    userId,
    userUpdateIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userUpdateIn** | **UserUpdateIn**|  | |
| **userId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**UserOut**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersUpsertMembers**
> Array<UserGroupMember> usersUpsertMembers(requestBody)

Synchronize group members — add new ones and remove missing ones.

### Example

```typescript
import {
    UserApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let groupId: number; // (default to undefined)
let requestBody: Array<number>; //
let cookieName: string; // (optional) (default to undefined)
let tenantId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.usersUpsertMembers(
    groupId,
    requestBody,
    cookieName,
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Array<number>**|  | |
| **groupId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**Array<UserGroupMember>**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersUpsertMyPreferences**
> UserPreferenceOut usersUpsertMyPreferences(userPreferenceUpdateIn)


### Example

```typescript
import {
    UserApi,
    Configuration,
    UserPreferenceUpdateIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let userPreferenceUpdateIn: UserPreferenceUpdateIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.usersUpsertMyPreferences(
    userPreferenceUpdateIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userPreferenceUpdateIn** | **UserPreferenceUpdateIn**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**UserPreferenceOut**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

