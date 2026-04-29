# Project

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**projectsAddLibraryToProject**](#projectsaddlibrarytoproject) | **POST** /projects/{project_id}/libraries/{library_id} | Add Library To Project|
|[**projectsAddMembers**](#projectsaddmembers) | **POST** /projects/{project_id}/members | Add Members|
|[**projectsCreateProject**](#projectscreateproject) | **POST** /projects/ | Create Project|
|[**projectsDeleteMember**](#projectsdeletemember) | **DELETE** /projects/{project_id}/members/{user_id} | Delete Member|
|[**projectsDeleteMembers**](#projectsdeletemembers) | **DELETE** /projects/{project_id}/members | Delete Members|
|[**projectsDeleteProject**](#projectsdeleteproject) | **DELETE** /projects/{project_id} | Delete Project|
|[**projectsIsProjectNameFree**](#projectsisprojectnamefree) | **GET** /projects/available | Is Project Name Free|
|[**projectsLeaveProject**](#projectsleaveproject) | **DELETE** /projects/{project_id}/remove/me | Leave Project|
|[**projectsRemoveLibraryFromProject**](#projectsremovelibraryfromproject) | **DELETE** /projects/{project_id}/libraries/{library_id} | Remove Library From Project|
|[**projectsUpdateProject**](#projectsupdateproject) | **PATCH** /projects/{project_id} | Update Project|

# **projectsAddLibraryToProject**
> ProjectLibrary projectsAddLibraryToProject()

Enables a library for a project by creating an association

### Example

```typescript
import {
    Project,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Project(configuration);

let projectId: number; // (default to undefined)
let libraryId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.projectsAddLibraryToProject(
    projectId,
    libraryId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
| **libraryId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ProjectLibrary**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projectsAddMembers**
> Array<ProjectMember> projectsAddMembers(projectMemberBulkIn)


### Example

```typescript
import {
    Project,
    Configuration,
    ProjectMemberBulkIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Project(configuration);

let projectId: number; // (default to undefined)
let projectMemberBulkIn: ProjectMemberBulkIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.projectsAddMembers(
    projectId,
    projectMemberBulkIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectMemberBulkIn** | **ProjectMemberBulkIn**|  | |
| **projectId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<ProjectMember>**

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

# **projectsCreateProject**
> Project projectsCreateProject(projectIn)


### Example

```typescript
import {
    Project,
    Configuration,
    ProjectIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Project(configuration);

let projectIn: ProjectIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.projectsCreateProject(
    projectIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectIn** | **ProjectIn**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Project**

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

# **projectsDeleteMember**
> projectsDeleteMember()


### Example

```typescript
import {
    Project,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Project(configuration);

let projectId: number; // (default to undefined)
let userId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.projectsDeleteMember(
    projectId,
    userId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
| **userId** | [**number**] |  | defaults to undefined|
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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projectsDeleteMembers**
> projectsDeleteMembers(projectMemberBulkDelete)


### Example

```typescript
import {
    Project,
    Configuration,
    ProjectMemberBulkDelete
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Project(configuration);

let projectId: number; // (default to undefined)
let projectMemberBulkDelete: ProjectMemberBulkDelete; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.projectsDeleteMembers(
    projectId,
    projectMemberBulkDelete,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectMemberBulkDelete** | **ProjectMemberBulkDelete**|  | |
| **projectId** | [**number**] |  | defaults to undefined|
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

# **projectsDeleteProject**
> projectsDeleteProject()


### Example

```typescript
import {
    Project,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Project(configuration);

let projectId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.projectsDeleteProject(
    projectId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projectsIsProjectNameFree**
> boolean projectsIsProjectNameFree()


### Example

```typescript
import {
    Project,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Project(configuration);

let name: string; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.projectsIsProjectNameFree(
    name,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] |  | defaults to undefined|
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

# **projectsLeaveProject**
> projectsLeaveProject()

user can leave the project by themselves.

### Example

```typescript
import {
    Project,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Project(configuration);

let projectId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.projectsLeaveProject(
    projectId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projectsRemoveLibraryFromProject**
> projectsRemoveLibraryFromProject()

Disables a library for a project by deleting the association

### Example

```typescript
import {
    Project,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Project(configuration);

let projectId: number; // (default to undefined)
let libraryId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.projectsRemoveLibraryFromProject(
    projectId,
    libraryId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
| **libraryId** | [**number**] |  | defaults to undefined|
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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projectsUpdateProject**
> Project projectsUpdateProject(projectIn)


### Example

```typescript
import {
    Project,
    Configuration,
    ProjectIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Project(configuration);

let projectId: number; // (default to undefined)
let projectIn: ProjectIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.projectsUpdateProject(
    projectId,
    projectIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectIn** | **ProjectIn**|  | |
| **projectId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Project**

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

