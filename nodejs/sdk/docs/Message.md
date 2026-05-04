# Message

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**messagesConvertMessage**](#messagesconvertmessage) | **GET** /messages/{message_id}/convert | Convert Message|
|[**messagesCreateMessage**](#messagescreatemessage) | **POST** /messages/ | Create Message|
|[**messagesGetMessage**](#messagesgetmessage) | **GET** /messages/{message_id} | Get Message|
|[**messagesRephraseMessage**](#messagesrephrasemessage) | **GET** /messages/{message_id}/rephrase | Rephrase Message|
|[**messagesSubmitMessage**](#messagessubmitmessage) | **POST** /messages/submit | Submit Message|
|[**messagesTranslateMessage**](#messagestranslatemessage) | **GET** /messages/{message_id}/translate | Translate Message|

# **messagesConvertMessage**
> any messagesConvertMessage()

Convert a message to various document formats.

### Example

```typescript
import {
    Message,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Message(configuration);

let messageId: number; // (default to undefined)
let format: OutputFormat; //Output format (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.messagesConvertMessage(
    messageId,
    format,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **messageId** | [**number**] |  | defaults to undefined|
| **format** | **OutputFormat** | Output format | defaults to undefined|
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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **messagesCreateMessage**
> Message messagesCreateMessage(messageIn)


### Example

```typescript
import {
    Message,
    Configuration,
    MessageIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Message(configuration);

let messageIn: MessageIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.messagesCreateMessage(
    messageIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **messageIn** | **MessageIn**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Message**

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

# **messagesGetMessage**
> Message messagesGetMessage()


### Example

```typescript
import {
    Message,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Message(configuration);

let messageId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.messagesGetMessage(
    messageId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **messageId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Message**

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

# **messagesRephraseMessage**
> Translation messagesRephraseMessage()


### Example

```typescript
import {
    Message,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Message(configuration);

let messageId: number; // (default to undefined)
let style: RephraseStyleEnum; //Style of rephrasing: \'same\' (same length), \'short\' (shorter), or \'long\' (longer) (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.messagesRephraseMessage(
    messageId,
    style,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **messageId** | [**number**] |  | defaults to undefined|
| **style** | **RephraseStyleEnum** | Style of rephrasing: \&#39;same\&#39; (same length), \&#39;short\&#39; (shorter), or \&#39;long\&#39; (longer) | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Translation**

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

# **messagesSubmitMessage**
> Message messagesSubmitMessage()


### Example

```typescript
import {
    Message,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Message(configuration);

let cookieName: string; // (optional) (default to undefined)
let content: string; // (optional) (default to undefined)
let projectId: number; // (optional) (default to undefined)
let chatId: number; // (optional) (default to undefined)
let documentIds: Array<number>; // (optional) (default to undefined)
let updatedAt: string; // (optional) (default to undefined)
let files: Array<File>; // (optional) (default to undefined)
let chatTemperature: number; // (optional) (default to undefined)
let chatSimilarityTopK: number; // (optional) (default to undefined)
let chatSystemPrompt: string; // (optional) (default to undefined)
let assistantId: number; // (optional) (default to undefined)
let model: string; // (optional) (default to undefined)
let toolIds: Array<number>; // (optional) (default to undefined)
let _private: boolean; // (optional) (default to false)
let libraryId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.messagesSubmitMessage(
    cookieName,
    content,
    projectId,
    chatId,
    documentIds,
    updatedAt,
    files,
    chatTemperature,
    chatSimilarityTopK,
    chatSystemPrompt,
    assistantId,
    model,
    toolIds,
    _private,
    libraryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|
| **content** | [**string**] |  | (optional) defaults to undefined|
| **projectId** | [**number**] |  | (optional) defaults to undefined|
| **chatId** | [**number**] |  | (optional) defaults to undefined|
| **documentIds** | **Array&lt;number&gt;** |  | (optional) defaults to undefined|
| **updatedAt** | [**string**] |  | (optional) defaults to undefined|
| **files** | **Array&lt;File&gt;** |  | (optional) defaults to undefined|
| **chatTemperature** | [**number**] |  | (optional) defaults to undefined|
| **chatSimilarityTopK** | [**number**] |  | (optional) defaults to undefined|
| **chatSystemPrompt** | [**string**] |  | (optional) defaults to undefined|
| **assistantId** | [**number**] |  | (optional) defaults to undefined|
| **model** | [**string**] |  | (optional) defaults to undefined|
| **toolIds** | **Array&lt;number&gt;** |  | (optional) defaults to undefined|
| **_private** | [**boolean**] |  | (optional) defaults to false|
| **libraryId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**Message**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **messagesTranslateMessage**
> Translation messagesTranslateMessage()


### Example

```typescript
import {
    Message,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Message(configuration);

let messageId: number; // (default to undefined)
let lang: string; //Target language. Preferably RFC 5646 format. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.messagesTranslateMessage(
    messageId,
    lang,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **messageId** | [**number**] |  | defaults to undefined|
| **lang** | [**string**] | Target language. Preferably RFC 5646 format. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Translation**

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

