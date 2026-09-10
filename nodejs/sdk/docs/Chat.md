# Chat

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**chatsAddLibraryToChat**](#chatsaddlibrarytochat) | **POST** /chats/{chat_id}/libraries/{library_id} | Add a library to a chat|
|[**chatsCancelMessage**](#chatscancelmessage) | **POST** /chats/{chat_id}/cancel | Cancel in-progress generation|
|[**chatsDeactivateDocuments**](#chatsdeactivatedocuments) | **POST** /chats/{chat_id}/inactive-documents | Deactivate documents in a chat|
|[**chatsListChatMessageTurns**](#chatslistchatmessageturns) | **GET** /chats/{chat_id}/turns | List message turns for a chat|
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

let chatId: string; //ID of the chat. (default to undefined)
let libraryId: string; //ID of the library to enable. (default to undefined)
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
| **chatId** | [**string**] | ID of the chat. | defaults to undefined|
| **libraryId** | [**string**] | ID of the library to enable. | defaults to undefined|
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

let chatId: string; //ID of the chat. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.chatsCancelMessage(
    chatId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatId** | [**string**] | ID of the chat. | defaults to undefined|
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
|**401** | Missing or invalid authentication. |  -  |
|**403** | No access to this chat. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chatsDeactivateDocuments**
> Array<ChatInactiveDocumentOut> chatsDeactivateDocuments()

Exclude the given documents from the chat\'s retrieval context.

### Example

```typescript
import {
    Chat,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Chat(configuration);

let chatId: string; //ID of the chat. (default to undefined)
let documentIds: Array<string>; // (default to undefined)
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
| **chatId** | [**string**] | ID of the chat. | defaults to undefined|
| **documentIds** | **Array&lt;string&gt;** |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<ChatInactiveDocumentOut>**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

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

# **chatsListChatMessageTurns**
> any chatsListChatMessageTurns()


### Example

```typescript
import {
    Chat,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Chat(configuration);

let chatId: string; //Public id of the chat. (default to undefined)
let limit: number; //Max turns to return (newest first). (optional) (default to 50)
let offset: number; //Number of newest turns to skip. (optional) (default to 0)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.chatsListChatMessageTurns(
    chatId,
    limit,
    offset,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatId** | [**string**] | Public id of the chat. | defaults to undefined|
| **limit** | [**number**] | Max turns to return (newest first). | (optional) defaults to 50|
| **offset** | [**number**] | Number of newest turns to skip. | (optional) defaults to 0|
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
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | No access to this chat. |  -  |
|**404** | Chat does not exist. |  -  |
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

let chatId: string; //ID of the chat to delete. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.chatsRemoveChat(
    chatId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatId** | [**string**] | ID of the chat to delete. | defaults to undefined|
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

let chatId: string; //ID of the chat. (default to undefined)
let documentIds: Array<string>; // (default to undefined)
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
| **chatId** | [**string**] | ID of the chat. | defaults to undefined|
| **documentIds** | **Array&lt;string&gt;** |  | defaults to undefined|
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

let chatId: string; //ID of the chat. (default to undefined)
let libraryId: string; //ID of the library to disable. (default to undefined)
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
| **chatId** | [**string**] | ID of the chat. | defaults to undefined|
| **libraryId** | [**string**] | ID of the library to disable. | defaults to undefined|
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

let chatId: string; //ID of the chat to summarize. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.chatsSummerizeChat(
    chatId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatId** | [**string**] | ID of the chat to summarize. | defaults to undefined|
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

let chatId: string; //ID of the chat to update. (default to undefined)
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
| **chatId** | [**string**] | ID of the chat to update. | defaults to undefined|
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

let chatId: string; //ID of the chat. (default to undefined)
let toolId: string; //Public id of the tool to configure. (default to undefined)
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
| **chatId** | [**string**] | ID of the chat. | defaults to undefined|
| **toolId** | [**string**] | Public id of the tool to configure. | defaults to undefined|
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
|**401** | Missing or invalid authentication. |  -  |
|**403** | No access to the chat, or the tool is not enabled for the tenant. |  -  |
|**404** | Chat, tool, or owning user does not exist. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

