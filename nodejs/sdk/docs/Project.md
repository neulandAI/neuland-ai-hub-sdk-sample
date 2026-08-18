# Project

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**projectsAddLibraryToProject**](#projectsaddlibrarytoproject) | **POST** /projects/{project_id}/libraries/{library_id} | Add a library to a project|
|[**projectsAddMembers**](#projectsaddmembers) | **POST** /projects/{project_id}/members | Add members to a project|
|[**projectsCreateProject**](#projectscreateproject) | **POST** /projects/ | Create a project|
|[**projectsDeleteMember**](#projectsdeletemember) | **DELETE** /projects/{project_id}/members/{user_id} | Remove a member from a project|
|[**projectsDeleteMembers**](#projectsdeletemembers) | **DELETE** /projects/{project_id}/members | Remove members from a project|
|[**projectsDeleteProject**](#projectsdeleteproject) | **DELETE** /projects/{project_id} | Delete a project|
|[**projectsIsProjectNameFree**](#projectsisprojectnamefree) | **GET** /projects/available | Check if a project name is free|
|[**projectsLeaveProject**](#projectsleaveproject) | **DELETE** /projects/{project_id}/remove/me | Leave a project|
|[**projectsRemoveLibraryFromProject**](#projectsremovelibraryfromproject) | **DELETE** /projects/{project_id}/libraries/{library_id} | Remove a library from a project|
|[**projectsUpdateProject**](#projectsupdateproject) | **PATCH** /projects/{project_id} | Update a project|

# **projectsAddLibraryToProject**
> ProjectLibrary projectsAddLibraryToProject()

Enable a library for a project by creating an association.

### Example

```typescript
import {
    Project,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Project(configuration);

let projectId: string; //Public id of the project. (default to undefined)
let libraryId: string; //Public id of the library to enable. (default to undefined)
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
| **projectId** | [**string**] | Public id of the project. | defaults to undefined|
| **libraryId** | [**string**] | Public id of the library to enable. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ProjectLibrary**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Current user lacks access to the library or the project. |  -  |
|**404** | Library or project not found. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projectsAddMembers**
> Array<ProjectMember> projectsAddMembers(projectMemberBulkIn)

Add one or more members to a project (project owner only).

### Example

```typescript
import {
    Project,
    Configuration,
    ProjectMemberBulkIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Project(configuration);

let projectId: string; //Public id of the project to add members to. (default to undefined)
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
| **projectId** | [**string**] | Public id of the project to add members to. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<ProjectMember>**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Current user is not an owner of the project. |  -  |
|**404** | No project exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projectsCreateProject**
> Project projectsCreateProject(projectIn)

Create a project and add the current user as its owner.

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

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projectsDeleteMember**
> projectsDeleteMember()

Remove a single member from a project (project owner only).

### Example

```typescript
import {
    Project,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Project(configuration);

let projectId: string; //Public id of the project to remove the member from. (default to undefined)
let userId: string; //Public id of the user to remove. (default to undefined)
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
| **projectId** | [**string**] | Public id of the project to remove the member from. | defaults to undefined|
| **userId** | [**string**] | Public id of the user to remove. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Current user is not an owner of the project. |  -  |
|**404** | Project not found, or the user is not a member of it. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projectsDeleteMembers**
> projectsDeleteMembers(projectMemberBulkDelete)

Remove multiple members from a project (project owner only).

### Example

```typescript
import {
    Project,
    Configuration,
    ProjectMemberBulkDelete
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Project(configuration);

let projectId: string; //Public id of the project to remove members from. (default to undefined)
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
| **projectId** | [**string**] | Public id of the project to remove members from. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Current user is not an owner of the project. |  -  |
|**404** | Project not found, or a user is not a member of it. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projectsDeleteProject**
> projectsDeleteProject()

Permanently delete a project (project owner only).

### Example

```typescript
import {
    Project,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Project(configuration);

let projectId: string; //Public id of the project to delete. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.projectsDeleteProject(
    projectId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] | Public id of the project to delete. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Current user is not an owner of the project. |  -  |
|**404** | No project exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projectsIsProjectNameFree**
> boolean projectsIsProjectNameFree()

Return true if no project already uses the given name.

### Example

```typescript
import {
    Project,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Project(configuration);

let name: string; //Project name to check for availability. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.projectsIsProjectNameFree(
    name,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Project name to check for availability. | defaults to undefined|
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

# **projectsLeaveProject**
> projectsLeaveProject()

Remove the current user from a project they belong to.

### Example

```typescript
import {
    Project,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Project(configuration);

let projectId: string; //Public id of the project to leave. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.projectsLeaveProject(
    projectId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] | Public id of the project to leave. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Current user is not a member of the project. |  -  |
|**404** | Project not found, or the user is not a member of it. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projectsRemoveLibraryFromProject**
> projectsRemoveLibraryFromProject()

Disable a library for a project by deleting the association.

### Example

```typescript
import {
    Project,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Project(configuration);

let projectId: string; //Public id of the project. (default to undefined)
let libraryId: string; //Public id of the library to disable. (default to undefined)
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
| **projectId** | [**string**] | Public id of the project. | defaults to undefined|
| **libraryId** | [**string**] | Public id of the library to disable. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Current user is not a member of the project. |  -  |
|**404** | No project exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projectsUpdateProject**
> Project projectsUpdateProject(projectIn)

Update an existing project\'s fields (project owner only).

### Example

```typescript
import {
    Project,
    Configuration,
    ProjectIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Project(configuration);

let projectId: string; //Public id of the project to update. (default to undefined)
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
| **projectId** | [**string**] | Public id of the project to update. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Project**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Current user is not an owner of the project. |  -  |
|**404** | No project exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

