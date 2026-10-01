# Assistant

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**assistantsAddLibraryToAssistant**](#assistantsaddlibrarytoassistant) | **POST** /assistants/{assistant_id}/libraries/{library_id} | Add a library to an assistant|
|[**assistantsAddMembers**](#assistantsaddmembers) | **POST** /assistants/{assistant_id}/members | Add members to an assistant|
|[**assistantsAddTagToAssistant**](#assistantsaddtagtoassistant) | **POST** /assistants/{assistant_id}/tags/{tag_id} | Add a tag to an assistant|
|[**assistantsAddToolToAssistant**](#assistantsaddtooltoassistant) | **POST** /assistants/{assistant_id}/tools/{tool_id} | Add a tool to an assistant|
|[**assistantsConvertAssistantToTool**](#assistantsconvertassistanttotool) | **POST** /assistants/{assistant_id}/tool | Make an assistant consultable from your own chats|
|[**assistantsCreateAssistant**](#assistantscreateassistant) | **POST** /assistants/ | Create an assistant|
|[**assistantsDeleteAssistant**](#assistantsdeleteassistant) | **DELETE** /assistants/{assistant_id} | Delete an assistant|
|[**assistantsDeleteMembers**](#assistantsdeletemembers) | **DELETE** /assistants/{assistant_id}/members | Remove members from an assistant|
|[**assistantsJoinAssistant**](#assistantsjoinassistant) | **POST** /assistants/{assistant_id}/membership | Join a community assistant|
|[**assistantsLeaveAssitant**](#assistantsleaveassitant) | **DELETE** /assistants/{assistant_id}/remove/me | Leave an assistant|
|[**assistantsRemoveAssistantAsTool**](#assistantsremoveassistantastool) | **DELETE** /assistants/{assistant_id}/tool | Stop the assistant being consultable from your chats|
|[**assistantsRemoveLibraryFromAssistant**](#assistantsremovelibraryfromassistant) | **DELETE** /assistants/{assistant_id}/libraries/{library_id} | Remove a library from an assistant|
|[**assistantsRemoveMember**](#assistantsremovemember) | **DELETE** /assistants/{assistant_id}/members/{user_id} | Remove a single member|
|[**assistantsRemoveTagFromAssistant**](#assistantsremovetagfromassistant) | **DELETE** /assistants/{assistant_id}/tags/{tag_id} | Remove a tag from an assistant|
|[**assistantsRemoveToolFromAssistant**](#assistantsremovetoolfromassistant) | **DELETE** /assistants/{assistant_id}/tools/{tool_id} | Remove a tool from an assistant|
|[**assistantsRestoreAssistantVersion**](#assistantsrestoreassistantversion) | **POST** /assistants/{assistant_id}/versions/{version}/restore | Restore an assistant version|
|[**assistantsSubmitAssistant**](#assistantssubmitassistant) | **POST** /assistants/submit | Create an assistant with attachments|
|[**assistantsUpdateAssistant**](#assistantsupdateassistant) | **PATCH** /assistants/{assistant_id} | Update an assistant|
|[**assistantsUpdateAssistantGroups**](#assistantsupdateassistantgroups) | **PUT** /assistants/{assistant_id}/groups | Set assistant group access|
|[**assistantsUpdateAssistantVisibility**](#assistantsupdateassistantvisibility) | **PATCH** /assistants/{assistant_id}/visibility | Set assistant visibility|

# **assistantsAddLibraryToAssistant**
> AssistantLibrary assistantsAddLibraryToAssistant()

Enables a library for a assistant by creating a new association

### Example

```typescript
import {
    Assistant,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: string; //Public id of the assistant. (default to undefined)
let libraryId: string; //Public id of the library to enable. (default to undefined)
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
| **assistantId** | [**string**] | Public id of the assistant. | defaults to undefined|
| **libraryId** | [**string**] | Public id of the library to enable. | defaults to undefined|
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
|**401** | Missing or invalid authentication. |  -  |
|**403** | No access to the library, or not the creator of the assistant. |  -  |
|**404** | Assistant or library does not exist. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistantsAddMembers**
> Array<AssistantMemberOut> assistantsAddMembers(assistantMembersIn)

Idempotent on re-add. A pre-existing DISCOVERED (self-joined) row is promoted to INVITED so it survives a later TENANT->PRIVATE downgrade.  Race-safe via ON CONFLICT DO UPDATE. ASSISTANT_MEMBER_ADDED fires only for rows that didn\'t exist before this call — promoting a self-joiner from DISCOVERED to INVITED is a bookkeeping change, not a new grant.

### Example

```typescript
import {
    Assistant,
    Configuration,
    AssistantMembersIn
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: string; //Public id of the assistant. (default to undefined)
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
| **assistantId** | [**string**] | Public id of the assistant. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<AssistantMemberOut>**

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
|**403** | Not the creator of this assistant. |  -  |
|**404** | No assistant exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistantsAddTagToAssistant**
> NeulandAssistantsTaggingOut assistantsAddTagToAssistant()

Attach a tag to an assistant.

### Example

```typescript
import {
    Assistant,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: string; //Public id of the assistant. (default to undefined)
let tagId: string; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.assistantsAddTagToAssistant(
    assistantId,
    tagId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assistantId** | [**string**] | Public id of the assistant. | defaults to undefined|
| **tagId** | [**string**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**NeulandAssistantsTaggingOut**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | No access to the tag, or not the creator of the assistant. |  -  |
|**404** | Assistant or tag does not exist. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistantsAddToolToAssistant**
> AssistantTool assistantsAddToolToAssistant()

Enable a tenant tool for the assistant.

### Example

```typescript
import {
    Assistant,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: string; //Public id of the assistant. (default to undefined)
let toolId: string; //Public id of the tool to enable. (default to undefined)
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
| **assistantId** | [**string**] | Public id of the assistant. | defaults to undefined|
| **toolId** | [**string**] | Public id of the tool to enable. | defaults to undefined|
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
|**401** | Missing or invalid authentication. |  -  |
|**403** | Not the creator, or the tool is not enabled for the tenant, or it is not available to the caller. |  -  |
|**404** | Assistant, owning user, or tool does not exist. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistantsConvertAssistantToTool**
> Assistant assistantsConvertAssistantToTool()

Make the assistant consultable in every chat of the calling user.  Anyone the assistant is shared with may convert it, creator or not, a marketplace-installed copy included: the flag is set on the caller\'s own row, so it changes nothing for the other users it is shared with, and a catalog-sourced row is never itself written.  Pure flag flip: `is_tool` alone makes the assistant consultable via the `consult_assistant` meta-tool (see `neuland.llm.tools.builtins.consult_assistant`, which also derives the handle). Nothing is written to the global `tools` registry — per-user rows do not belong in a platform table. Form-input assistants convert too: consulting one takes the form\'s values as tool arguments and renders the instruction template server-side.

### Example

```typescript
import {
    Assistant,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: string; //Public id of the assistant. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.assistantsConvertAssistantToTool(
    assistantId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assistantId** | [**string**] | Public id of the assistant. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Assistant**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | No direct access. |  -  |
|**404** | No assistant exists with the given id. |  -  |
|**409** | The assistant is already consultable. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistantsCreateAssistant**
> Assistant assistantsCreateAssistant(assistantIn)

Create an assistant from a JSON payload.

### Example

```typescript
import {
    Assistant,
    Configuration,
    AssistantIn
} from '@neulandai/neuland-hub-sdk';

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
|**401** | Missing or invalid authentication. |  -  |
|**403** | The model is not available to the author. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistantsDeleteAssistant**
> assistantsDeleteAssistant()

Delete an assistant and orphan its associated chats.

### Example

```typescript
import {
    Assistant,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: string; //Public id of the assistant to delete. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.assistantsDeleteAssistant(
    assistantId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assistantId** | [**string**] | Public id of the assistant to delete. | defaults to undefined|
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
|**403** | Not the creator of this assistant. |  -  |
|**404** | No assistant exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistantsDeleteMembers**
> assistantsDeleteMembers(assistantMembersIn)

Remove one or more users from the assistant\'s membership.

### Example

```typescript
import {
    Assistant,
    Configuration,
    AssistantMembersIn
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: string; //Public id of the assistant. (default to undefined)
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
| **assistantId** | [**string**] | Public id of the assistant. | defaults to undefined|
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
|**400** | One or more given users are not members of the assistant. |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Not the creator of this assistant. |  -  |
|**404** | No assistant exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistantsJoinAssistant**
> AssistantMemberOut assistantsJoinAssistant()

self-add to a tenant-shared community assistant.

### Example

```typescript
import {
    Assistant,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: string; //Public id of the assistant to join. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.assistantsJoinAssistant(
    assistantId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assistantId** | [**string**] | Public id of the assistant to join. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**AssistantMemberOut**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Assistant is not in your tenant. |  -  |
|**404** | No assistant exists with the given id. |  -  |
|**409** | Assistant is not tenant-shared, is catalog-sourced, is owned by you, or is not ready for community access. |  -  |
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
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: string; //Public id of the assistant to leave. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.assistantsLeaveAssitant(
    assistantId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assistantId** | [**string**] | Public id of the assistant to leave. | defaults to undefined|
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
|**403** | Not a member, or you are the owner and cannot leave. |  -  |
|**404** | Assistant does not exist, or you are not a member. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistantsRemoveAssistantAsTool**
> assistantsRemoveAssistantAsTool()

Clear the caller\'s own `is_tool` flag; the assistant stops being consultable from their chats at once (every consultability query keys on that flag). Other users\' conversions are untouched.

### Example

```typescript
import {
    Assistant,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: string; //Public id of the assistant. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.assistantsRemoveAssistantAsTool(
    assistantId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assistantId** | [**string**] | Public id of the assistant. | defaults to undefined|
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
|**403** | No direct access. |  -  |
|**404** | No such assistant, or you have not converted it. |  -  |
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
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: string; //Public id of the assistant. (default to undefined)
let libraryId: string; //Public id of the library to disable. (default to undefined)
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
| **assistantId** | [**string**] | Public id of the assistant. | defaults to undefined|
| **libraryId** | [**string**] | Public id of the library to disable. | defaults to undefined|
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
|**403** | Not the creator of this assistant. |  -  |
|**404** | No assistant exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistantsRemoveMember**
> assistantsRemoveMember()

Remove a specific user from the assistant\'s membership.

### Example

```typescript
import {
    Assistant,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: string; //Public id of the assistant. (default to undefined)
let userId: string; //Public id of the member to remove. (default to undefined)
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
| **assistantId** | [**string**] | Public id of the assistant. | defaults to undefined|
| **userId** | [**string**] | Public id of the member to remove. | defaults to undefined|
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
|**403** | Not the creator, or attempting to remove yourself as owner. |  -  |
|**404** | Assistant does not exist, or the user is not a member. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistantsRemoveTagFromAssistant**
> assistantsRemoveTagFromAssistant()

Detach a tag from an assistant.

### Example

```typescript
import {
    Assistant,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: string; //Public id of the assistant. (default to undefined)
let tagId: string; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.assistantsRemoveTagFromAssistant(
    assistantId,
    tagId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assistantId** | [**string**] | Public id of the assistant. | defaults to undefined|
| **tagId** | [**string**] |  | defaults to undefined|
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
|**403** | No access to the tag, or not the creator of the assistant. |  -  |
|**404** | Assistant or tag does not exist. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistantsRemoveToolFromAssistant**
> assistantsRemoveToolFromAssistant()

Disable a tool for the assistant by removing the association.

### Example

```typescript
import {
    Assistant,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: string; //Public id of the assistant. (default to undefined)
let toolId: string; //Public id of the tool to disable. (default to undefined)
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
| **assistantId** | [**string**] | Public id of the assistant. | defaults to undefined|
| **toolId** | [**string**] | Public id of the tool to disable. | defaults to undefined|
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
|**403** | Not the creator of this assistant. |  -  |
|**404** | No assistant exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistantsRestoreAssistantVersion**
> Assistant assistantsRestoreAssistantVersion()

Copy a version snapshot onto the live assistant and append a new version.  Restoring a version identical to the live config is a no-op: nothing is written and no version is appended, mirroring update semantics.

### Example

```typescript
import {
    Assistant,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: string; //Public id of the assistant to restore. (default to undefined)
let version: number; //Version number to restore. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.assistantsRestoreAssistantVersion(
    assistantId,
    version,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assistantId** | [**string**] | Public id of the assistant to restore. | defaults to undefined|
| **version** | [**number**] | Version number to restore. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Assistant**

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
|**403** | Not the creator of this assistant. |  -  |
|**404** | No assistant or version exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistantsSubmitAssistant**
> Assistant assistantsSubmitAssistant()

Create an assistant via multipart form, with optional knowledge-file uploads.

### Example

```typescript
import {
    Assistant,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let name: string; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)
let model: string; // (optional) (default to undefined)
let description: string; // (optional) (default to undefined)
let descriptionShowInChat: boolean; // (optional) (default to false)
let predefinedPrompts: string; // (optional) (default to undefined)
let avatar: string; // (optional) (default to undefined)
let instructions: string; // (optional) (default to undefined)
let temperature: number; // (optional) (default to undefined)
let reasoningEffort: ReasoningEffortEnum; // (optional) (default to undefined)
let similarityTopK: number; // (optional) (default to undefined)
let inputType: AssistantInputTypeEnum; // (optional) (default to undefined)
let formFields: string; // (optional) (default to undefined)
let files: Array<File>; // (optional) (default to undefined)

const { status, data } = await apiInstance.assistantsSubmitAssistant(
    name,
    cookieName,
    model,
    description,
    descriptionShowInChat,
    predefinedPrompts,
    avatar,
    instructions,
    temperature,
    reasoningEffort,
    similarityTopK,
    inputType,
    formFields,
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
| **descriptionShowInChat** | [**boolean**] |  | (optional) defaults to false|
| **predefinedPrompts** | [**string**] |  | (optional) defaults to undefined|
| **avatar** | [**string**] |  | (optional) defaults to undefined|
| **instructions** | [**string**] |  | (optional) defaults to undefined|
| **temperature** | [**number**] |  | (optional) defaults to undefined|
| **reasoningEffort** | **ReasoningEffortEnum** |  | (optional) defaults to undefined|
| **similarityTopK** | [**number**] |  | (optional) defaults to undefined|
| **inputType** | **AssistantInputTypeEnum** |  | (optional) defaults to undefined|
| **formFields** | [**string**] |  | (optional) defaults to undefined|
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
|**401** | Missing or invalid authentication. |  -  |
|**403** | Usage budget exceeded, or the model is not available to the author. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistantsUpdateAssistant**
> Assistant assistantsUpdateAssistant(assistantIn)

Update an assistant\'s configuration.

### Example

```typescript
import {
    Assistant,
    Configuration,
    AssistantIn
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: string; //Public id of the assistant to update. (default to undefined)
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
| **assistantId** | [**string**] | Public id of the assistant to update. | defaults to undefined|
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
|**401** | Missing or invalid authentication. |  -  |
|**403** | Not the creator, or the model is not available to the caller. |  -  |
|**404** | No assistant exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistantsUpdateAssistantGroups**
> Array<AssistantGroupOut> assistantsUpdateAssistantGroups(assistantGroupsIn)

Grant or update assistant access for user groups (replaces the current set).

### Example

```typescript
import {
    Assistant,
    Configuration,
    AssistantGroupsIn
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: string; //Public id of the assistant. (default to undefined)
let assistantGroupsIn: AssistantGroupsIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.assistantsUpdateAssistantGroups(
    assistantId,
    assistantGroupsIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assistantGroupsIn** | **AssistantGroupsIn**|  | |
| **assistantId** | [**string**] | Public id of the assistant. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<AssistantGroupOut>**

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
|**403** | Not the creator of this assistant. |  -  |
|**404** | Assistant does not exist, or one or more groups not found. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistantsUpdateAssistantVisibility**
> Assistant assistantsUpdateAssistantVisibility(assistantVisibilityUpdate)

creator-only visibility toggle. on TENANT -> PRIVATE, revokes marketplace-added members.

### Example

```typescript
import {
    Assistant,
    Configuration,
    AssistantVisibilityUpdate
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Assistant(configuration);

let assistantId: string; //Public id of the assistant. (default to undefined)
let assistantVisibilityUpdate: AssistantVisibilityUpdate; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.assistantsUpdateAssistantVisibility(
    assistantId,
    assistantVisibilityUpdate,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assistantVisibilityUpdate** | **AssistantVisibilityUpdate**|  | |
| **assistantId** | [**string**] | Public id of the assistant. | defaults to undefined|
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
|**401** | Missing or invalid authentication. |  -  |
|**403** | Only the creator can change visibility. |  -  |
|**404** | No assistant exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

