# Library

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**librariesAddLibraryMembers**](#librariesaddlibrarymembers) | **POST** /libraries/{library_id}/members | Add library members|
|[**librariesDeleteLibrary**](#librariesdeletelibrary) | **DELETE** /libraries/{library_id} | Delete a library|
|[**librariesLeaveLibrary**](#librariesleavelibrary) | **DELETE** /libraries/{library_id}/remove/me | Leave a library|
|[**librariesNewLibrary**](#librariesnewlibrary) | **POST** /libraries/ | Create a library|
|[**librariesRemoveLibraryMembers**](#librariesremovelibrarymembers) | **DELETE** /libraries/{library_id}/members | Remove library members|
|[**librariesRemoveSingleMember**](#librariesremovesinglemember) | **DELETE** /libraries/{library_id}/members/{user_id} | Remove a library member|
|[**librariesUpdateLibrary**](#librariesupdatelibrary) | **PATCH** /libraries/{library_id} | Update a library|

# **librariesAddLibraryMembers**
> Array<LibraryMemberOut> librariesAddLibraryMembers(libraryMemberBulkIn)

Add one or more members to the library; owner only.

### Example

```typescript
import {
    Library,
    Configuration,
    LibraryMemberBulkIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Library(configuration);

let libraryId: string; //Public id of the library to add members to. (default to undefined)
let libraryMemberBulkIn: LibraryMemberBulkIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.librariesAddLibraryMembers(
    libraryId,
    libraryMemberBulkIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **libraryMemberBulkIn** | **LibraryMemberBulkIn**|  | |
| **libraryId** | [**string**] | Public id of the library to add members to. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<LibraryMemberOut>**

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
|**403** | Caller is not an owner of this library. |  -  |
|**404** | No library exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **librariesDeleteLibrary**
> librariesDeleteLibrary()

Delete a library; owner only.

### Example

```typescript
import {
    Library,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Library(configuration);

let libraryId: string; //Public id of the library to delete. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.librariesDeleteLibrary(
    libraryId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **libraryId** | [**string**] | Public id of the library to delete. | defaults to undefined|
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
|**403** | Caller is not an owner of this library. |  -  |
|**404** | No library exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **librariesLeaveLibrary**
> librariesLeaveLibrary()

Remove the caller from the library\'s members.

### Example

```typescript
import {
    Library,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Library(configuration);

let libraryId: string; //Public id of the library to leave. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.librariesLeaveLibrary(
    libraryId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **libraryId** | [**string**] | Public id of the library to leave. | defaults to undefined|
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
|**400** | Cannot leave while you are the sole owner of the library. |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Caller is not a member of this library. |  -  |
|**404** | No library exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **librariesNewLibrary**
> Library librariesNewLibrary(libraryIn)

Create a library owned by the caller in their tenant.

### Example

```typescript
import {
    Library,
    Configuration,
    LibraryIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Library(configuration);

let libraryIn: LibraryIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.librariesNewLibrary(
    libraryIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **libraryIn** | **LibraryIn**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Library**

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

# **librariesRemoveLibraryMembers**
> librariesRemoveLibraryMembers(libraryMemberBulkDelete)

Remove one or more members from the library; owner only.

### Example

```typescript
import {
    Library,
    Configuration,
    LibraryMemberBulkDelete
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Library(configuration);

let libraryId: string; //Public id of the library to remove members from. (default to undefined)
let libraryMemberBulkDelete: LibraryMemberBulkDelete; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.librariesRemoveLibraryMembers(
    libraryId,
    libraryMemberBulkDelete,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **libraryMemberBulkDelete** | **LibraryMemberBulkDelete**|  | |
| **libraryId** | [**string**] | Public id of the library to remove members from. | defaults to undefined|
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
|**400** | Cannot remove the sole owner of the library. |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Caller is not an owner of this library. |  -  |
|**404** | No library exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **librariesRemoveSingleMember**
> librariesRemoveSingleMember()

Remove a member from the library; owner only unless removing yourself.

### Example

```typescript
import {
    Library,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Library(configuration);

let libraryId: string; //Public id of the library. (default to undefined)
let userId: string; //Public id of the member to remove. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.librariesRemoveSingleMember(
    libraryId,
    userId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **libraryId** | [**string**] | Public id of the library. | defaults to undefined|
| **userId** | [**string**] | Public id of the member to remove. | defaults to undefined|
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
|**400** | Cannot remove the sole owner of the library. |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Caller may not remove this member. |  -  |
|**404** | No library exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **librariesUpdateLibrary**
> Library librariesUpdateLibrary(libraryUpdateIn)

Update name and/or description of an existing library.

### Example

```typescript
import {
    Library,
    Configuration,
    LibraryUpdateIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Library(configuration);

let libraryId: string; //Public id of the library to update. (default to undefined)
let libraryUpdateIn: LibraryUpdateIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.librariesUpdateLibrary(
    libraryId,
    libraryUpdateIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **libraryUpdateIn** | **LibraryUpdateIn**|  | |
| **libraryId** | [**string**] | Public id of the library to update. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Library**

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
|**403** | Caller is not a member of this library. |  -  |
|**404** | No library exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

