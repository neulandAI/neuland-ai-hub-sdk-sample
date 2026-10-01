# ToolAction

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**toolactionsConnectSharedMailbox**](#toolactionsconnectsharedmailbox) | **POST** /tool-actions/email/shared-mailboxes | Connect a shared mailbox|
|[**toolactionsCreateEmailDraft**](#toolactionscreateemaildraft) | **POST** /tool-actions/email/draft | Create an Outlook mailbox draft from a chat draft|
|[**toolactionsDisconnectSharedMailbox**](#toolactionsdisconnectsharedmailbox) | **DELETE** /tool-actions/email/shared-mailboxes/{address} | Disconnect a shared mailbox|
|[**toolactionsListSharedMailboxes**](#toolactionslistsharedmailboxes) | **GET** /tool-actions/email/shared-mailboxes | List connected shared mailboxes|
|[**toolactionsSearchSharedMailboxes**](#toolactionssearchsharedmailboxes) | **GET** /tool-actions/email/shared-mailboxes/search | Search the directory for mailboxes to connect|
|[**toolactionsSendEmailFromDraft**](#toolactionssendemailfromdraft) | **POST** /tool-actions/email/send | Send an email from a draft|

# **toolactionsConnectSharedMailbox**
> SharedMailbox toolactionsConnectSharedMailbox(connectSharedMailboxIn)

Verify the caller can open the mailbox with their own token — or, for a Microsoft 365 group address, that they are a member — then add it to their allowlist. Idempotent: re-connecting updates the display name.

### Example

```typescript
import {
    ToolAction,
    Configuration,
    ConnectSharedMailboxIn
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ToolAction(configuration);

let connectSharedMailboxIn: ConnectSharedMailboxIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.toolactionsConnectSharedMailbox(
    connectSharedMailboxIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **connectSharedMailboxIn** | **ConnectSharedMailboxIn**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SharedMailbox**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Consent for the shared-mailbox scopes is required (detail.error &#x3D;&#x3D; \&#39;consent_required\&#39;). |  -  |
|**403** | Microsoft 365 denied access: the caller has no permission on this mailbox, or it does not exist. |  -  |
|**422** | Invalid address, or the caller\&#39;s own mailbox. |  -  |
|**503** | Microsoft Graph is throttling; retry after the Retry-After header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **toolactionsCreateEmailDraft**
> CreateOutlookDraftResponse toolactionsCreateEmailDraft(createOutlookDraftRequest)

Create (not send) a draft in the user\'s mailbox — used by the draft card\'s \"Open in Outlook\" action, which cannot pass attachments through a compose deep link. Attachment scope rules are identical to sending.

### Example

```typescript
import {
    ToolAction,
    Configuration,
    CreateOutlookDraftRequest
} from '@neulandai/neuland-hub-sdk';

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

# **toolactionsDisconnectSharedMailbox**
> toolactionsDisconnectSharedMailbox()

Remove one shared mailbox from the caller\'s allowlist. The personal consent and any other shared mailboxes are untouched.

### Example

```typescript
import {
    ToolAction,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ToolAction(configuration);

let address: string; //Address of the connected shared mailbox. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.toolactionsDisconnectSharedMailbox(
    address,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **address** | [**string**] | Address of the connected shared mailbox. | defaults to undefined|
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
|**404** | The mailbox is not connected for the caller. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **toolactionsListSharedMailboxes**
> SharedMailboxListOut toolactionsListSharedMailboxes()

Shared mailboxes the caller connected on top of their personal account.

### Example

```typescript
import {
    ToolAction,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ToolAction(configuration);

let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.toolactionsListSharedMailboxes(
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SharedMailboxListOut**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | The caller has not connected Outlook Mail. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **toolactionsSearchSharedMailboxes**
> SharedMailboxSearchOut toolactionsSearchSharedMailboxes()

Mailboxes the caller can open, found via the People API.  Graph has no \"shared mailbox\" flag and no list of mailboxes a user has been granted, so candidates come from People (the query, or the caller\'s most relevant contacts for an empty query) and each one is probed with the caller\'s token exactly like connecting does. Regular colleagues fail the probe and drop out; what remains are mailboxes the caller holds Full Access on. Already-connected ones are reported with ``connected``.  Only the already-granted read/people caps are required here, so browsing never trips re-consent — adding a mailbox does that, deliberately.

### Example

```typescript
import {
    ToolAction,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ToolAction(configuration);

let q: string; //Name or address fragment; empty returns suggestions. (optional) (default to '')
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.toolactionsSearchSharedMailboxes(
    q,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] | Name or address fragment; empty returns suggestions. | (optional) defaults to ''|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SharedMailboxSearchOut**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Consent for the shared-mailbox scopes is required (detail.error &#x3D;&#x3D; \&#39;consent_required\&#39;). |  -  |
|**502** | Microsoft Graph failed. |  -  |
|**503** | Microsoft Graph is throttling; retry after the Retry-After header. |  -  |
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
} from '@neulandai/neuland-hub-sdk';

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

