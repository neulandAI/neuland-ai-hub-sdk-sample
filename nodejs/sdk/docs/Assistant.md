# Assistant

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**assistantsAddLibraryToAssistant**](#assistantsaddlibrarytoassistant) | **POST** /assistants/{assistant_id}/libraries/{library_id} | Add Library To Assistant|
|[**assistantsAddMembers**](#assistantsaddmembers) | **POST** /assistants/{assistant_id}/members | Add Members|
|[**assistantsAddToolToAssistant**](#assistantsaddtooltoassistant) | **POST** /assistants/{assistant_id}/tools/{tool_id} | Add Tool To Assistant|
|[**assistantsCreateAssistant**](#assistantscreateassistant) | **POST** /assistants/ | Create Assistant|
|[**assistantsDeleteAssistant**](#assistantsdeleteassistant) | **DELETE** /assistants/{assistant_id} | Delete Assistant|
|[**assistantsDeleteMembers**](#assistantsdeletemembers) | **DELETE** /assistants/{assistant_id}/members | Delete Members|
|[**assistantsLeaveAssitant**](#assistantsleaveassitant) | **DELETE** /assistants/{assistant_id}/remove/me | Leave Assitant|
|[**assistantsRemoveLibraryFromAssistant**](#assistantsremovelibraryfromassistant) | **DELETE** /assistants/{assistant_id}/libraries/{library_id} | Remove Library From Assistant|
|[**assistantsRemoveMember**](#assistantsremovemember) | **DELETE** /assistants/{assistant_id}/members/{user_id} | Remove Member|
|[**assistantsRemoveToolFromAssistant**](#assistantsremovetoolfromassistant) | **DELETE** /assistants/{assistant_id}/tools/{tool_id} | Remove Tool From Assistant|
|[**assistantsSubmitAssistant**](#assistantssubmitassistant) | **POST** /assistants/submit | Submit Assistant|
|[**assistantsUpdateAssistant**](#assistantsupdateassistant) | **PATCH** /assistants/{assistant_id} | Update Assistant|

# **assistantsAddLibraryToAssistant**
> AssistantLibrary assistantsAddLibraryToAssistant()

Enables a library for a assistant by creating a new association

### Example

```typescript
import {
    Assistant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: number; // (default to undefined)
let libraryId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.assistantsAddLibraryToAssistant(
    assistantId,
    libraryId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assistantId** | [**number**] |  | defaults to undefined|
| **libraryId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**AssistantLibrary**

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

# **assistantsAddMembers**
> Array<AssistantMember> assistantsAddMembers(assistantMembersIn)


### Example

```typescript
import {
    Assistant,
    Configuration,
    AssistantMembersIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: number; // (default to undefined)
let assistantMembersIn: AssistantMembersIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.assistantsAddMembers(
    assistantId,
    assistantMembersIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assistantMembersIn** | **AssistantMembersIn**|  | |
| **assistantId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<AssistantMember>**

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

# **assistantsAddToolToAssistant**
> AssistantTool assistantsAddToolToAssistant()


### Example

```typescript
import {
    Assistant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: number; // (default to undefined)
let toolId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.assistantsAddToolToAssistant(
    assistantId,
    toolId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assistantId** | [**number**] |  | defaults to undefined|
| **toolId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**AssistantTool**

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

# **assistantsCreateAssistant**
> Assistant assistantsCreateAssistant(assistantIn)


### Example

```typescript
import {
    Assistant,
    Configuration,
    AssistantIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantIn: AssistantIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.assistantsCreateAssistant(
    assistantIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assistantIn** | **AssistantIn**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Assistant**

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

# **assistantsDeleteAssistant**
> assistantsDeleteAssistant()


### Example

```typescript
import {
    Assistant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.assistantsDeleteAssistant(
    assistantId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assistantId** | [**number**] |  | defaults to undefined|
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

# **assistantsDeleteMembers**
> assistantsDeleteMembers(assistantMembersIn)


### Example

```typescript
import {
    Assistant,
    Configuration,
    AssistantMembersIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: number; // (default to undefined)
let assistantMembersIn: AssistantMembersIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.assistantsDeleteMembers(
    assistantId,
    assistantMembersIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assistantMembersIn** | **AssistantMembersIn**|  | |
| **assistantId** | [**number**] |  | defaults to undefined|
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

# **assistantsLeaveAssitant**
> assistantsLeaveAssitant()

user can leave the assistant by themselves.

### Example

```typescript
import {
    Assistant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.assistantsLeaveAssitant(
    assistantId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assistantId** | [**number**] |  | defaults to undefined|
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

# **assistantsRemoveLibraryFromAssistant**
> assistantsRemoveLibraryFromAssistant()

Disables a library from an assistant by removing the association

### Example

```typescript
import {
    Assistant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: number; // (default to undefined)
let libraryId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.assistantsRemoveLibraryFromAssistant(
    assistantId,
    libraryId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assistantId** | [**number**] |  | defaults to undefined|
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

# **assistantsRemoveMember**
> assistantsRemoveMember()


### Example

```typescript
import {
    Assistant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: number; // (default to undefined)
let userId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.assistantsRemoveMember(
    assistantId,
    userId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assistantId** | [**number**] |  | defaults to undefined|
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

# **assistantsRemoveToolFromAssistant**
> assistantsRemoveToolFromAssistant()


### Example

```typescript
import {
    Assistant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: number; // (default to undefined)
let toolId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.assistantsRemoveToolFromAssistant(
    assistantId,
    toolId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assistantId** | [**number**] |  | defaults to undefined|
| **toolId** | [**number**] |  | defaults to undefined|
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

# **assistantsSubmitAssistant**
> Assistant assistantsSubmitAssistant()


### Example

```typescript
import {
    Assistant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let name: string; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)
let model: string; // (optional) (default to undefined)
let description: string; // (optional) (default to undefined)
let avatar: string; // (optional) (default to undefined)
let instructions: string; // (optional) (default to undefined)
let temperature: number; // (optional) (default to undefined)
let similarityTopK: number; // (optional) (default to undefined)
let files: Array<File>; // (optional) (default to undefined)

const { status, data } = await apiInstance.assistantsSubmitAssistant(
    name,
    cookieName,
    model,
    description,
    avatar,
    instructions,
    temperature,
    similarityTopK,
    files
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|
| **model** | [**string**] |  | (optional) defaults to undefined|
| **description** | [**string**] |  | (optional) defaults to undefined|
| **avatar** | [**string**] |  | (optional) defaults to undefined|
| **instructions** | [**string**] |  | (optional) defaults to undefined|
| **temperature** | [**number**] |  | (optional) defaults to undefined|
| **similarityTopK** | [**number**] |  | (optional) defaults to undefined|
| **files** | **Array&lt;File&gt;** |  | (optional) defaults to undefined|


### Return type

**Assistant**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistantsUpdateAssistant**
> Assistant assistantsUpdateAssistant(assistantIn)


### Example

```typescript
import {
    Assistant,
    Configuration,
    AssistantIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: number; // (default to undefined)
let assistantIn: AssistantIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.assistantsUpdateAssistant(
    assistantId,
    assistantIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assistantIn** | **AssistantIn**|  | |
| **assistantId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Assistant**

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

