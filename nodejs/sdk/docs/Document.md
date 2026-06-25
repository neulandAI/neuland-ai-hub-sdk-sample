# Document

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**documentsDeleteChatDocument**](#documentsdeletechatdocument) | **DELETE** /documents/{document_id} | Delete a document|
|[**documentsGetFile**](#documentsgetfile) | **GET** /documents/{document_id} | Download a document|
|[**documentsImportDocuments**](#documentsimportdocuments) | **POST** /documents/import | Import documents from a connected source|
|[**documentsRetryDocument**](#documentsretrydocument) | **POST** /documents/{document_id}/retry | Retry document processing|
|[**documentsUnimportDocuments**](#documentsunimportdocuments) | **DELETE** /documents/import | Remove imported documents|
|[**documentsUploadDocuments**](#documentsuploaddocuments) | **POST** /documents/ | Upload documents|

# **documentsDeleteChatDocument**
> documentsDeleteChatDocument()

Delete a document and its associated content.

### Example

```typescript
import {
    Document,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Document(configuration);

let documentId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.documentsDeleteChatDocument(
    documentId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**number**] |  | defaults to undefined|
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
|**403** | Caller may not access this document. |  -  |
|**404** | No document exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **documentsGetFile**
> any documentsGetFile()

Stream a document\'s content as an attachment to authorized callers.

### Example

```typescript
import {
    Document,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Document(configuration);

let documentId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.documentsGetFile(
    documentId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**number**] |  | defaults to undefined|
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
|**403** | Caller may not access this document. |  -  |
|**404** | No document exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **documentsImportDocuments**
> string documentsImportDocuments()

Import drive items from a connected source as documents; returns an import token.

### Example

```typescript
import {
    Document,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Document(configuration);

let src: string; //Source type which the documents will be imported from (default to undefined)
let driveId: string; //Drive ID (default to undefined)
let driveItemIds: Array<string>; //Item IDs of the documents to be imported (default to undefined)
let cookieName: string; // (optional) (default to undefined)
let projectId: number; // (optional) (default to undefined)
let chatId: number; // (optional) (default to undefined)
let assistantId: number; // (optional) (default to undefined)
let messageId: number; // (optional) (default to undefined)
let libraryId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.documentsImportDocuments(
    src,
    driveId,
    driveItemIds,
    cookieName,
    projectId,
    chatId,
    assistantId,
    messageId,
    libraryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **src** | [**string**] | Source type which the documents will be imported from | defaults to undefined|
| **driveId** | [**string**] | Drive ID | defaults to undefined|
| **driveItemIds** | **Array&lt;string&gt;** | Item IDs of the documents to be imported | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|
| **projectId** | [**number**] |  | (optional) defaults to undefined|
| **chatId** | [**number**] |  | (optional) defaults to undefined|
| **assistantId** | [**number**] |  | (optional) defaults to undefined|
| **messageId** | [**number**] |  | (optional) defaults to undefined|
| **libraryId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**400** | The provided source type is not supported. |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Usage limit exceeded, or caller lacks access to the target entity. |  -  |
|**404** | The referenced project, chat, assistant, or library does not exist. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **documentsRetryDocument**
> documentsRetryDocument()

Re-run processing for a previously failed or stuck document.

### Example

```typescript
import {
    Document,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Document(configuration);

let documentId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.documentsRetryDocument(
    documentId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**number**] |  | defaults to undefined|
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
|**403** | Usage limit exceeded, or caller may not access this document. |  -  |
|**404** | No document exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **documentsUnimportDocuments**
> documentsUnimportDocuments()

Delete documents previously imported from a source for the given entity.

### Example

```typescript
import {
    Document,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Document(configuration);

let src: string; //Source type which the documents will be imported from (default to undefined)
let driveId: string; //Sharepoint drive ID (default to undefined)
let driveItemIds: Array<string>; //Sharepoint item IDs of the documents to be unimported (default to undefined)
let cookieName: string; // (optional) (default to undefined)
let projectId: number; // (optional) (default to undefined)
let chatId: number; // (optional) (default to undefined)
let assistantId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.documentsUnimportDocuments(
    src,
    driveId,
    driveItemIds,
    cookieName,
    projectId,
    chatId,
    assistantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **src** | [**string**] | Source type which the documents will be imported from | defaults to undefined|
| **driveId** | [**string**] | Sharepoint drive ID | defaults to undefined|
| **driveItemIds** | **Array&lt;string&gt;** | Sharepoint item IDs of the documents to be unimported | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|
| **projectId** | [**number**] |  | (optional) defaults to undefined|
| **chatId** | [**number**] |  | (optional) defaults to undefined|
| **assistantId** | [**number**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**400** | The provided source type is not supported. |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Caller lacks access to the target entity. |  -  |
|**404** | The referenced project, chat, or assistant does not exist. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **documentsUploadDocuments**
> Array<Document> documentsUploadDocuments()

Upload files as documents and kick off async processing for the given entity.

### Example

```typescript
import {
    Document,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Document(configuration);

let files: Array<File>; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)
let projectId: number; // (optional) (default to undefined)
let chatId: number; // (optional) (default to undefined)
let assistantId: number; // (optional) (default to undefined)
let messageId: number; // (optional) (default to undefined)
let libraryId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.documentsUploadDocuments(
    files,
    cookieName,
    projectId,
    chatId,
    assistantId,
    messageId,
    libraryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **files** | **Array&lt;File&gt;** |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|
| **projectId** | [**number**] |  | (optional) defaults to undefined|
| **chatId** | [**number**] |  | (optional) defaults to undefined|
| **assistantId** | [**number**] |  | (optional) defaults to undefined|
| **messageId** | [**number**] |  | (optional) defaults to undefined|
| **libraryId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**Array<Document>**

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
|**403** | Usage limit exceeded, or caller lacks access to the target entity. |  -  |
|**404** | The referenced project, chat, assistant, or library does not exist. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

