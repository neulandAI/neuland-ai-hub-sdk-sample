# ToolAction

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**toolactionsSendEmailFromDraft**](#toolactionssendemailfromdraft) | **POST** /tool-actions/email/send | Send an email from a draft|

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

[APIKeyHeader](../README.md#APIKeyHeader)

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

