# LibraryApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**librariesAddLibraryMembers**](#librariesaddlibrarymembers) | **POST** /libraries/{library_id}/members | Add Library Members|
|[**librariesDeleteLibrary**](#librariesdeletelibrary) | **DELETE** /libraries/{library_id} | Delete Library|
|[**librariesLeaveLibrary**](#librariesleavelibrary) | **DELETE** /libraries/{library_id}/remove/me | Leave Library|
|[**librariesNewLibrary**](#librariesnewlibrary) | **POST** /libraries/ | New Library|
|[**librariesRemoveLibraryMembers**](#librariesremovelibrarymembers) | **DELETE** /libraries/{library_id}/members | Remove Library Members|
|[**librariesRemoveSingleMember**](#librariesremovesinglemember) | **DELETE** /libraries/{library_id}/members/{user_id} | Remove Single Member|
|[**librariesUpdateLibrary**](#librariesupdatelibrary) | **PATCH** /libraries/{library_id} | Update Library|

# **librariesAddLibraryMembers**
> Array<LibraryMember> librariesAddLibraryMembers(libraryMemberBulkIn)

Adds a new member to the library

### Example

```typescript
import {
    LibraryApi,
    Configuration,
    LibraryMemberBulkIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new LibraryApi(configuration);

let libraryId: number; // (default to undefined)
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
| **libraryId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<LibraryMember>**

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

# **librariesDeleteLibrary**
> librariesDeleteLibrary()

Delete a library

### Example

```typescript
import {
    LibraryApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new LibraryApi(configuration);

let libraryId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.librariesDeleteLibrary(
    libraryId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **librariesLeaveLibrary**
> librariesLeaveLibrary()


### Example

```typescript
import {
    LibraryApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new LibraryApi(configuration);

let libraryId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.librariesLeaveLibrary(
    libraryId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **librariesNewLibrary**
> Library librariesNewLibrary(libraryIn)

Create a new library

### Example

```typescript
import {
    LibraryApi,
    Configuration,
    LibraryIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new LibraryApi(configuration);

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

# **librariesRemoveLibraryMembers**
> librariesRemoveLibraryMembers(libraryMemberBulkDelete)

Deletes a member from the library

### Example

```typescript
import {
    LibraryApi,
    Configuration,
    LibraryMemberBulkDelete
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new LibraryApi(configuration);

let libraryId: number; // (default to undefined)
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
| **libraryId** | [**number**] |  | defaults to undefined|
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

# **librariesRemoveSingleMember**
> librariesRemoveSingleMember()


### Example

```typescript
import {
    LibraryApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new LibraryApi(configuration);

let libraryId: number; // (default to undefined)
let userId: number; // (default to undefined)
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
| **libraryId** | [**number**] |  | defaults to undefined|
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

# **librariesUpdateLibrary**
> Library librariesUpdateLibrary(libraryUpdateIn)

Update an existing library

### Example

```typescript
import {
    LibraryApi,
    Configuration,
    LibraryUpdateIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new LibraryApi(configuration);

let libraryId: number; // (default to undefined)
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
| **libraryId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Library**

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

