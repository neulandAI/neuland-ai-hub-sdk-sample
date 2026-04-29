# Document

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**documentsDeleteChatDocument**](#documentsdeletechatdocument) | **DELETE** /documents/{document_id} | Delete Chat Document|
|[**documentsGetFile**](#documentsgetfile) | **GET** /documents/{document_id} | Get File|
|[**documentsImportDocuments**](#documentsimportdocuments) | **POST** /documents/import | Import Documents|
|[**documentsRetryDocument**](#documentsretrydocument) | **POST** /documents/{document_id}/retry | Retry Document|
|[**documentsUnimportDocuments**](#documentsunimportdocuments) | **DELETE** /documents/import | Unimport Documents|
|[**documentsUploadDocuments**](#documentsuploaddocuments) | **POST** /documents/ | Upload Documents|

# **documentsDeleteChatDocument**
> documentsDeleteChatDocument()


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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **documentsGetFile**
> any documentsGetFile()


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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **documentsImportDocuments**
> string documentsImportDocuments()


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
let driveItemIds: Array<string>; //Sharepoint item IDs of the documents to be imported (default to undefined)
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
| **driveId** | [**string**] | Sharepoint drive ID | defaults to undefined|
| **driveItemIds** | **Array&lt;string&gt;** | Sharepoint item IDs of the documents to be imported | defaults to undefined|
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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **documentsRetryDocument**
> documentsRetryDocument()


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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **documentsUnimportDocuments**
> documentsUnimportDocuments()


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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **documentsUploadDocuments**
> Array<Document> documentsUploadDocuments()


### Example

```typescript
import {
    Document,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Document(configuration);

let files: Array<string>; // (default to undefined)
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
| **files** | **Array&lt;string&gt;** |  | defaults to undefined|
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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

