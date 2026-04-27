# ChatApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**chatsAddLibraryToChat**](#chatsaddlibrarytochat) | **POST** /chats/{chat_id}/libraries/{library_id} | Add Library To Chat|
|[**chatsCancelMessage**](#chatscancelmessage) | **POST** /chats/{chat_id}/cancel | Cancel Message|
|[**chatsDeactivateDocuments**](#chatsdeactivatedocuments) | **POST** /chats/{chat_id}/inactive-documents | Deactivate Documents|
|[**chatsRemoveChat**](#chatsremovechat) | **DELETE** /chats/{chat_id} | Remove Chat|
|[**chatsRemoveInactiveDocuments**](#chatsremoveinactivedocuments) | **DELETE** /chats/{chat_id}/inactive-documents | Remove Inactive Documents|
|[**chatsRemoveLibraryFromChat**](#chatsremovelibraryfromchat) | **DELETE** /chats/{chat_id}/libraries/{library_id} | Remove Library From Chat|
|[**chatsSummerizeChat**](#chatssummerizechat) | **GET** /chats/{chat_id}/summary | Summerize Chat|
|[**chatsUpdateChat**](#chatsupdatechat) | **PATCH** /chats/{chat_id} | Update Chat|
|[**chatsUpdateChatToolSettings**](#chatsupdatechattoolsettings) | **PUT** /chats/{chat_id}/tools/{tool_id} | Update Chat Tool Settings|

# **chatsAddLibraryToChat**
> ChatLibrary chatsAddLibraryToChat()

Enables a library in a chat by creating a new association

### Example

```typescript
import {
    ChatApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ChatApi(configuration);

let chatId: number; // (default to undefined)
let libraryId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.chatsAddLibraryToChat(
    chatId,
    libraryId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatId** | [**number**] |  | defaults to undefined|
| **libraryId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ChatLibrary**

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

# **chatsCancelMessage**
> any chatsCancelMessage()


### Example

```typescript
import {
    ChatApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ChatApi(configuration);

let chatId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.chatsCancelMessage(
    chatId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**any**

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

# **chatsDeactivateDocuments**
> Array<ChatInactiveDocument> chatsDeactivateDocuments()


### Example

```typescript
import {
    ChatApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ChatApi(configuration);

let chatId: number; // (default to undefined)
let documentIds: Array<number>; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.chatsDeactivateDocuments(
    chatId,
    documentIds,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatId** | [**number**] |  | defaults to undefined|
| **documentIds** | **Array&lt;number&gt;** |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<ChatInactiveDocument>**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chatsRemoveChat**
> chatsRemoveChat()


### Example

```typescript
import {
    ChatApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ChatApi(configuration);

let chatId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.chatsRemoveChat(
    chatId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatId** | [**number**] |  | defaults to undefined|
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

# **chatsRemoveInactiveDocuments**
> BulkResult chatsRemoveInactiveDocuments()


### Example

```typescript
import {
    ChatApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ChatApi(configuration);

let chatId: number; // (default to undefined)
let documentIds: Array<number>; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.chatsRemoveInactiveDocuments(
    chatId,
    documentIds,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatId** | [**number**] |  | defaults to undefined|
| **documentIds** | **Array&lt;number&gt;** |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**BulkResult**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chatsRemoveLibraryFromChat**
> chatsRemoveLibraryFromChat()

Disables a library from a chat by removing the association

### Example

```typescript
import {
    ChatApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ChatApi(configuration);

let chatId: number; // (default to undefined)
let libraryId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.chatsRemoveLibraryFromChat(
    chatId,
    libraryId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatId** | [**number**] |  | defaults to undefined|
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

# **chatsSummerizeChat**
> string chatsSummerizeChat()


### Example

```typescript
import {
    ChatApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ChatApi(configuration);

let chatId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.chatsSummerizeChat(
    chatId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**string**

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

# **chatsUpdateChat**
> Chat chatsUpdateChat(chatIn)


### Example

```typescript
import {
    ChatApi,
    Configuration,
    ChatIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ChatApi(configuration);

let chatId: number; // (default to undefined)
let chatIn: ChatIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.chatsUpdateChat(
    chatId,
    chatIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatIn** | **ChatIn**|  | |
| **chatId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Chat**

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

# **chatsUpdateChatToolSettings**
> ChatToolSettingsOut chatsUpdateChatToolSettings(chatToolSettingsUpdate)

Update tool settings for a chat (upsert: create or update).  - Validates tool_id exists in Tool table - Validates tool is enabled for the tenant - Creates new ChatToolSettings entry if it doesn\'t exist - Updates existing entry if it exists

### Example

```typescript
import {
    ChatApi,
    Configuration,
    ChatToolSettingsUpdate
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ChatApi(configuration);

let chatId: number; // (default to undefined)
let toolId: number; // (default to undefined)
let chatToolSettingsUpdate: ChatToolSettingsUpdate; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.chatsUpdateChatToolSettings(
    chatId,
    toolId,
    chatToolSettingsUpdate,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatToolSettingsUpdate** | **ChatToolSettingsUpdate**|  | |
| **chatId** | [**number**] |  | defaults to undefined|
| **toolId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ChatToolSettingsOut**

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

