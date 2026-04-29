# Message

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**messagesRephraseMessage**](#messagesrephrasemessage) | **GET** /messages/{message_id}/rephrase | Rephrase Message|
|[**messagesTranslateMessage**](#messagestranslatemessage) | **GET** /messages/{message_id}/translate | Translate Message|

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

