# Chat

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**chatsAddLibraryToChat**](#chatsaddlibrarytochat) | **POST** /chats/{chat_id}/libraries/{library_id} | Add a library to a chat|
|[**chatsCancelMessage**](#chatscancelmessage) | **POST** /chats/{chat_id}/cancel | Cancel in-progress generation|
|[**chatsDeactivateDocuments**](#chatsdeactivatedocuments) | **POST** /chats/{chat_id}/inactive-documents | Deactivate documents in a chat|
|[**chatsRemoveChat**](#chatsremovechat) | **DELETE** /chats/{chat_id} | Delete a chat|
|[**chatsRemoveInactiveDocuments**](#chatsremoveinactivedocuments) | **DELETE** /chats/{chat_id}/inactive-documents | Reactivate documents in a chat|
|[**chatsRemoveLibraryFromChat**](#chatsremovelibraryfromchat) | **DELETE** /chats/{chat_id}/libraries/{library_id} | Remove a library from a chat|
|[**chatsSummerizeChat**](#chatssummerizechat) | **GET** /chats/{chat_id}/summary | Summarize a chat|
|[**chatsUpdateChat**](#chatsupdatechat) | **PATCH** /chats/{chat_id} | Update a chat|
|[**chatsUpdateChatToolSettings**](#chatsupdatechattoolsettings) | **PUT** /chats/{chat_id}/tools/{tool_id} | Set a chat tool setting|

# **chatsAddLibraryToChat**
> ChatLibrary chatsAddLibraryToChat()

Enables a library in a chat by creating a new association

### Example

```typescript
import {
    Chat,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Chat(configuration);

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

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | No access to the chat or the library. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chatsCancelMessage**
> any chatsCancelMessage()

Cancel any pending or streaming message generation in the chat.

### Example

```typescript
import {
    Chat,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Chat(configuration);

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

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | No access to this chat. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chatsDeactivateDocuments**
> Array<ChatInactiveDocument> chatsDeactivateDocuments()

Exclude the given documents from the chat\'s retrieval context.

### Example

```typescript
import {
    Chat,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Chat(configuration);

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

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | No access to this chat. |  -  |
|**404** | Chat or one of the documents does not exist. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chatsRemoveChat**
> chatsRemoveChat()

Delete a chat and its messages.

### Example

```typescript
import {
    Chat,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Chat(configuration);

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

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | No access to this chat. |  -  |
|**404** | No chat exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chatsRemoveInactiveDocuments**
> BulkResult chatsRemoveInactiveDocuments()

Re-include previously deactivated documents in the chat\'s retrieval context.

### Example

```typescript
import {
    Chat,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Chat(configuration);

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

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | No access to this chat. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chatsRemoveLibraryFromChat**
> chatsRemoveLibraryFromChat()

Disables a library from a chat by removing the association

### Example

```typescript
import {
    Chat,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Chat(configuration);

let chatId: number; // (default to undefined)
let libraryId: number; //ID of the library to disable. (default to undefined)
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
| **libraryId** | [**number**] | ID of the library to disable. | defaults to undefined|
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
|**403** | No access to this chat. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chatsSummerizeChat**
> string chatsSummerizeChat()

Generate a short LLM summary of the chat\'s recent conversation.

### Example

```typescript
import {
    Chat,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Chat(configuration);

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

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | No access to the chat, or usage budget exceeded. |  -  |
|**404** | Chat or owning user does not exist. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chatsUpdateChat**
> Chat chatsUpdateChat(chatIn)

Update settings of an existing chat (name, model, temperature, etc.).

### Example

```typescript
import {
    Chat,
    Configuration,
    ChatIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Chat(configuration);

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

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | No access to this chat. |  -  |
|**404** | No chat exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chatsUpdateChatToolSettings**
> ChatToolSettingsOut chatsUpdateChatToolSettings(chatToolSettingsUpdate)

Enable or disable a tool for a chat, creating the setting if needed.

### Example

```typescript
import {
    Chat,
    Configuration,
    ChatToolSettingsUpdate
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Chat(configuration);

let chatId: number; // (default to undefined)
let toolId: number; //ID of the tool to configure. (default to undefined)
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
| **toolId** | [**number**] | ID of the tool to configure. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ChatToolSettingsOut**

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
|**403** | No access to the chat, or the tool is not enabled for the tenant. |  -  |
|**404** | Chat, tool, or owning user does not exist. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

