# ToolAction

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**toolactionsCreateEmailDraft**](#toolactionscreateemaildraft) | **POST** /tool-actions/email/draft | Create an Outlook mailbox draft from a chat draft|
|[**toolactionsSendEmailFromDraft**](#toolactionssendemailfromdraft) | **POST** /tool-actions/email/send | Send an email from a draft|

# **toolactionsCreateEmailDraft**
> CreateOutlookDraftResponse toolactionsCreateEmailDraft(createOutlookDraftRequest)

Create (not send) a draft in the user\'s mailbox — used by the draft card\'s \"Open in Outlook\" action, which cannot pass attachments through a compose deep link. Attachment scope rules are identical to sending.

### Example

```typescript
import {
    ToolAction,
    Configuration,
    CreateOutlookDraftRequest
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ToolAction(configuration);

let createOutlookDraftRequest: CreateOutlookDraftRequest; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.toolactionsCreateEmailDraft(
    createOutlookDraftRequest,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createOutlookDraftRequest** | **CreateOutlookDraftRequest**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CreateOutlookDraftResponse**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Invalid attachments/recipients or the mail provider rejected the draft. |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **toolactionsSendEmailFromDraft**
> SendEmailResponse toolactionsSendEmailFromDraft(sendEmailRequest)

Send an email from a user-approved, tool-generated draft via Microsoft Graph.

### Example

```typescript
import {
    ToolAction,
    Configuration,
    SendEmailRequest
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ToolAction(configuration);

let sendEmailRequest: SendEmailRequest; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.toolactionsSendEmailFromDraft(
    sendEmailRequest,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendEmailRequest** | **SendEmailRequest**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SendEmailResponse**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | No recipient provided or the mail provider rejected the send. |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

