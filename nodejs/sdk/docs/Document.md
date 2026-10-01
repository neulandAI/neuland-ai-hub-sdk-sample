# Document

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**documentsDeleteChatDocument**](#documentsdeletechatdocument) | **DELETE** /documents/{document_id} | Delete a document|
|[**documentsDocumentUsage**](#documentsdocumentusage) | **POST** /documents/usage | Document counts and storage bytes by dimension|
|[**documentsGetFile**](#documentsgetfile) | **GET** /documents/{document_id} | Download a document|
|[**documentsGetText**](#documentsgettext) | **GET** /documents/{document_id}/text | Get a document\&#39;s extracted text|
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
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Document(configuration);

let documentId: string; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.documentsDeleteChatDocument(
    documentId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
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

# **documentsDocumentUsage**
> DocumentUsageResponse documentsDocumentUsage(documentUsageRequest)

Aggregate the tenant\'s document storage by dimension and time bucket.

### Example

```typescript
import {
    Document,
    Configuration,
    DocumentUsageRequest
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Document(configuration);

let documentUsageRequest: DocumentUsageRequest; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.documentsDocumentUsage(
    documentUsageRequest,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentUsageRequest** | **DocumentUsageRequest**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**DocumentUsageResponse**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Too many group_by dimensions, or a truncated bucketed result. |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Admin privileges required, or user-level analytics is not enabled for the tenant. |  -  |
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
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Document(configuration);

let documentId: string; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.documentsGetFile(
    documentId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
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

# **documentsGetText**
> DocumentTextOut documentsGetText()

Return the text extracted from a document by the processing pipeline.  Type-agnostic: a PDF yields its extracted text, an audio/video upload yields its transcript — both are stored in the same place by the same pipeline.

### Example

```typescript
import {
    Document,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Document(configuration);

let documentId: string; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.documentsGetText(
    documentId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**DocumentTextOut**

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
|**404** | No such document, or its text is not extracted yet. |  -  |
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
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Document(configuration);

let src: string; //Source type which the documents will be imported from (default to undefined)
let driveId: string; //Drive ID (default to undefined)
let driveItemIds: Array<string>; //Item IDs of the documents to be imported (default to undefined)
let cookieName: string; // (optional) (default to undefined)
let projectId: string; // (optional) (default to undefined)
let chatId: string; // (optional) (default to undefined)
let assistantId: string; // (optional) (default to undefined)
let messageId: string; // (optional) (default to undefined)
let libraryId: string; // (optional) (default to undefined)

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
| **projectId** | [**string**] |  | (optional) defaults to undefined|
| **chatId** | [**string**] |  | (optional) defaults to undefined|
| **assistantId** | [**string**] |  | (optional) defaults to undefined|
| **messageId** | [**string**] |  | (optional) defaults to undefined|
| **libraryId** | [**string**] |  | (optional) defaults to undefined|


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
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Document(configuration);

let documentId: string; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.documentsRetryDocument(
    documentId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
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
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Document(configuration);

let src: string; //Source type which the documents will be imported from (default to undefined)
let driveId: string; //Sharepoint drive ID (default to undefined)
let driveItemIds: Array<string>; //Sharepoint item IDs of the documents to be unimported (default to undefined)
let cookieName: string; // (optional) (default to undefined)
let projectId: string; // (optional) (default to undefined)
let chatId: string; // (optional) (default to undefined)
let assistantId: string; // (optional) (default to undefined)

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
| **projectId** | [**string**] |  | (optional) defaults to undefined|
| **chatId** | [**string**] |  | (optional) defaults to undefined|
| **assistantId** | [**string**] |  | (optional) defaults to undefined|


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
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Document(configuration);

let files: Array<File>; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)
let projectId: string; // (optional) (default to undefined)
let chatId: string; // (optional) (default to undefined)
let assistantId: string; // (optional) (default to undefined)
let messageId: string; // (optional) (default to undefined)
let libraryId: string; // (optional) (default to undefined)

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
| **projectId** | [**string**] |  | (optional) defaults to undefined|
| **chatId** | [**string**] |  | (optional) defaults to undefined|
| **assistantId** | [**string**] |  | (optional) defaults to undefined|
| **messageId** | [**string**] |  | (optional) defaults to undefined|
| **libraryId** | [**string**] |  | (optional) defaults to undefined|


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

