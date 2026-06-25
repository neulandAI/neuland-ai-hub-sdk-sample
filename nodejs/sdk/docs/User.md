# User

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usersActivateUser**](#usersactivateuser) | **POST** /users/{user_id}/activate | Activate a user|
|[**usersCreateGroup**](#userscreategroup) | **POST** /users/groups | Create a user group|
|[**usersCreateUser**](#userscreateuser) | **POST** /users/ | Create a user|
|[**usersDeactivateUser**](#usersdeactivateuser) | **POST** /users/{user_id}/deactivate | Deactivate a user|
|[**usersDeleteGroup**](#usersdeletegroup) | **DELETE** /users/groups/{group_id} | Delete a user group|
|[**usersDeleteUser**](#usersdeleteuser) | **DELETE** /users/{user_id} | Delete a user|
|[**usersGetMyself**](#usersgetmyself) | **GET** /users/me | Get current user|
|[**usersResetPassword**](#usersresetpassword) | **POST** /users/passwd | Change own password|
|[**usersSyncExternalGroup**](#userssyncexternalgroup) | **POST** /users/groups/{group_id}/sync | Sync External Group|
|[**usersUpdateGroup**](#usersupdategroup) | **PATCH** /users/groups/{group_id} | Update a user group|
|[**usersUpdateUser**](#usersupdateuser) | **PATCH** /users/{user_id} | Update a user|
|[**usersUpsertMembers**](#usersupsertmembers) | **PUT** /users/members/{group_id} | Set user group members|
|[**usersUpsertMyPreferences**](#usersupsertmypreferences) | **PATCH** /users/me/preferences | Update own preferences|

# **usersActivateUser**
> UserOut usersActivateUser()

Re-activate a user so they can authenticate again.

### Example

```typescript
import {
    User,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new User(configuration);

let userId: number; //ID of the user to activate. (default to undefined)
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
| **userId** | [**number**] | ID of the user to activate. | defaults to undefined|
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
|**401** | Missing or invalid authentication. |  -  |
|**403** | Administrator privileges required for the user\&#39;s tenant. |  -  |
|**404** | No user exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersCreateGroup**
> UserGroup usersCreateGroup(groupIn)

Create a new user group

### Example

```typescript
import {
    User,
    Configuration,
    GroupIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new User(configuration);

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
|**401** | Missing or invalid authentication. |  -  |
|**403** | Administrator privileges required. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersCreateUser**
> UserOut usersCreateUser(userIn)

Create a user in the caller\'s (or specified) tenant and send a confirmation email.

### Example

```typescript
import {
    User,
    Configuration,
    UserIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new User(configuration);

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
|**401** | Missing or invalid authentication. |  -  |
|**403** | Administrator privileges required for the target tenant or flags. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersDeactivateUser**
> UserOut usersDeactivateUser()

Deactivate a user so they can no longer authenticate; you cannot deactivate yourself.

### Example

```typescript
import {
    User,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new User(configuration);

let userId: number; //ID of the user to deactivate. (default to undefined)
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
| **userId** | [**number**] | ID of the user to deactivate. | defaults to undefined|
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
|**401** | Missing or invalid authentication. |  -  |
|**403** | Administrator privileges required for the user\&#39;s tenant. |  -  |
|**404** | No user exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersDeleteGroup**
> usersDeleteGroup()

Delete a user group.

### Example

```typescript
import {
    User,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new User(configuration);

let groupId: number; //ID of the user group to delete. (default to undefined)
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
| **groupId** | [**number**] | ID of the user group to delete. | defaults to undefined|
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
|**400** | Group belongs to another tenant. |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Administrator privileges required. |  -  |
|**404** | No user group exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersDeleteUser**
> usersDeleteUser()

Delete a user; you cannot delete your own account.

### Example

```typescript
import {
    User,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new User(configuration);

let userId: number; //ID of the user to delete. (default to undefined)
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
| **userId** | [**number**] | ID of the user to delete. | defaults to undefined|
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
|**401** | Missing or invalid authentication. |  -  |
|**403** | Administrator privileges required for the user\&#39;s tenant. |  -  |
|**404** | No user exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersGetMyself**
> UserOut usersGetMyself()

Return the profile of the currently authenticated user.

### Example

```typescript
import {
    User,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new User(configuration);

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
|**401** | Missing or invalid authentication. |  -  |
|**404** | The current user no longer exists. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersResetPassword**
> usersResetPassword(passwordResetIn)

Change the current user\'s password and revoke all of their sessions.

### Example

```typescript
import {
    User,
    Configuration,
    PasswordResetIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new User(configuration);

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
|**401** | Missing or invalid authentication, or wrong current password. |  -  |
|**404** | The current user no longer exists. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersSyncExternalGroup**
> GroupSyncOut usersSyncExternalGroup()

Admin-triggered reconcile of an external group\'s membership: fetch the bound directory group\'s members from Graph (delegated) and match the HUB group to them, for users who already have a HUB account. Rejects manual groups with 409.

### Example

```typescript
import {
    User,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new User(configuration);

let groupId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)
let tenantId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.usersSyncExternalGroup(
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

**GroupSyncOut**

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

# **usersUpdateGroup**
> UserGroup usersUpdateGroup(groupIn)

Update an existing user group.

### Example

```typescript
import {
    User,
    Configuration,
    GroupIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new User(configuration);

let groupId: number; //ID of the user group to update. (default to undefined)
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
| **groupId** | [**number**] | ID of the user group to update. | defaults to undefined|
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
|**400** | Group belongs to another tenant or caller lacks admin rights. |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Administrator privileges required. |  -  |
|**404** | No user group exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersUpdateUser**
> UserOut usersUpdateUser(userUpdateIn)

Update a user\'s profile, role, tenant, or email; password changes are restricted.

### Example

```typescript
import {
    User,
    Configuration,
    UserUpdateIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new User(configuration);

let userId: number; //ID of the user to update. (default to undefined)
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
| **userId** | [**number**] | ID of the user to update. | defaults to undefined|
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
|**401** | Missing or invalid authentication. |  -  |
|**403** | Insufficient privileges to change the requested fields or tenant. |  -  |
|**404** | No user exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersUpsertMembers**
> Array<UserGroupMember> usersUpsertMembers(requestBody)

Synchronize group members — add new ones and remove missing ones.

### Example

```typescript
import {
    User,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new User(configuration);

let groupId: number; //ID of the user group to update. (default to undefined)
let requestBody: Array<number | null>; //
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
| **requestBody** | **Array<number | null>**|  | |
| **groupId** | [**number**] | ID of the user group to update. | defaults to undefined|
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
|**400** | Group belongs to another tenant. |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Administrator privileges required. |  -  |
|**404** | No user group exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersUpsertMyPreferences**
> UserPreferenceOut usersUpsertMyPreferences(userPreferenceUpdateIn)

Create or update the current user\'s UI preferences.

### Example

```typescript
import {
    User,
    Configuration,
    UserPreferenceUpdateIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new User(configuration);

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
|**401** | Missing or invalid authentication. |  -  |
|**404** | The current user no longer exists. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

