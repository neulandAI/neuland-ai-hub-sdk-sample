# AssistantMarketplace

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**assistantListCatalog**](#assistantlistcatalog) | **GET** /marketplace/assistant/catalog/ | List all assistant catalog items — superadmin only|
|[**marketplaceAddTagToCatalog**](#marketplaceaddtagtocatalog) | **POST** /marketplace/assistant/catalog/{catalog_id}/tags/{tag_id} | Add Tag To Catalog|
|[**marketplaceAttachTool**](#marketplaceattachtool) | **POST** /marketplace/assistant/catalog/{catalog_id}/tools/{tool_id} | Attach Tool|
|[**marketplaceCreateCatalog**](#marketplacecreatecatalog) | **POST** /marketplace/assistant/catalog/ | Create Catalog|
|[**marketplaceDetachTool**](#marketplacedetachtool) | **DELETE** /marketplace/assistant/catalog/{catalog_id}/tools/{tool_id} | Detach Tool|
|[**marketplaceInstallFromCatalog**](#marketplaceinstallfromcatalog) | **POST** /marketplace/assistant/catalog/{catalog_id}/install | Install From Catalog|
|[**marketplaceListTools**](#marketplacelisttools) | **GET** /marketplace/assistant/catalog/{catalog_id}/tools | List Tools|
|[**marketplaceRemoveTagFromCatalog**](#marketplaceremovetagfromcatalog) | **DELETE** /marketplace/assistant/catalog/{catalog_id}/tags/{tag_id} | Remove Tag From Catalog|
|[**marketplaceUninstallFromCatalog**](#marketplaceuninstallfromcatalog) | **DELETE** /marketplace/assistant/catalog/{catalog_id}/install | Uninstall From Catalog|
|[**marketplaceUpdateCatalog**](#marketplaceupdatecatalog) | **PATCH** /marketplace/assistant/catalog/{catalog_id} | Update Catalog|
|[**marketplaceUpdateCatalogState**](#marketplaceupdatecatalogstate) | **PATCH** /marketplace/assistant/catalog/{catalog_id}/state | Update Catalog State|

# **assistantListCatalog**
> Array<AssistantCatalog> assistantListCatalog()

Return every assistant catalog row (both ACTIVE and DEPRECATED).  The public marketplace view filters DEPRECATED items out; this endpoint exposes them so a superadmin UI can render them with a \"Deprecated\" badge and PATCH the state back to ACTIVE when needed.

### Example

```typescript
import {
    AssistantMarketplace,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AssistantMarketplace(configuration);

let state: MarketplaceCatalogStateEnum; //Filter by state (ACTIVE / DEPRECATED). Omit for all. (optional) (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.assistantListCatalog(
    state,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **state** | **MarketplaceCatalogStateEnum** | Filter by state (ACTIVE / DEPRECATED). Omit for all. | (optional) defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<AssistantCatalog>**

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

# **marketplaceAddTagToCatalog**
> NeulandMarketplaceAssistantSchemasTaggingOut marketplaceAddTagToCatalog()

attach a tag (tenant-scoped) to a marketplace catalog item.

### Example

```typescript
import {
    AssistantMarketplace,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AssistantMarketplace(configuration);

let catalogId: string; // (default to undefined)
let tagId: string; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.marketplaceAddTagToCatalog(
    catalogId,
    tagId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **catalogId** | [**string**] |  | defaults to undefined|
| **tagId** | [**string**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**NeulandMarketplaceAssistantSchemasTaggingOut**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marketplaceAttachTool**
> AssistantCatalogToolOut marketplaceAttachTool()

attach a tool to an assistant catalog item.

### Example

```typescript
import {
    AssistantMarketplace,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AssistantMarketplace(configuration);

let catalogId: string; // (default to undefined)
let toolId: string; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.marketplaceAttachTool(
    catalogId,
    toolId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **catalogId** | [**string**] |  | defaults to undefined|
| **toolId** | [**string**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**AssistantCatalogToolOut**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marketplaceCreateCatalog**
> any marketplaceCreateCatalog(assistantCatalogIn)

create a new assistant catalog item.

### Example

```typescript
import {
    AssistantMarketplace,
    Configuration,
    AssistantCatalogIn
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AssistantMarketplace(configuration);

let assistantCatalogIn: AssistantCatalogIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.marketplaceCreateCatalog(
    assistantCatalogIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assistantCatalogIn** | **AssistantCatalogIn**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**any**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marketplaceDetachTool**
> marketplaceDetachTool()

detach a tool from an assistant catalog item.

### Example

```typescript
import {
    AssistantMarketplace,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AssistantMarketplace(configuration);

let catalogId: string; // (default to undefined)
let toolId: string; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.marketplaceDetachTool(
    catalogId,
    toolId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **catalogId** | [**string**] |  | defaults to undefined|
| **toolId** | [**string**] |  | defaults to undefined|
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

# **marketplaceInstallFromCatalog**
> Assistant marketplaceInstallFromCatalog()

install a marketplace catalog item into the caller\'s tenant and join as a member.

### Example

```typescript
import {
    AssistantMarketplace,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AssistantMarketplace(configuration);

let catalogId: string; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.marketplaceInstallFromCatalog(
    catalogId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **catalogId** | [**string**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Assistant**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marketplaceListTools**
> Array<AssistantCatalogToolOut> marketplaceListTools()

list the tools currently attached to an assistant catalog item.

### Example

```typescript
import {
    AssistantMarketplace,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AssistantMarketplace(configuration);

let catalogId: string; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.marketplaceListTools(
    catalogId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **catalogId** | [**string**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<AssistantCatalogToolOut>**

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

# **marketplaceRemoveTagFromCatalog**
> marketplaceRemoveTagFromCatalog()

detach a tag from a marketplace catalog item.

### Example

```typescript
import {
    AssistantMarketplace,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AssistantMarketplace(configuration);

let catalogId: string; // (default to undefined)
let tagId: string; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.marketplaceRemoveTagFromCatalog(
    catalogId,
    tagId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **catalogId** | [**string**] |  | defaults to undefined|
| **tagId** | [**string**] |  | defaults to undefined|
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

# **marketplaceUninstallFromCatalog**
> marketplaceUninstallFromCatalog()

remove caller\'s membership; delete the materialized assistant if last member leaves.

### Example

```typescript
import {
    AssistantMarketplace,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AssistantMarketplace(configuration);

let catalogId: string; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.marketplaceUninstallFromCatalog(
    catalogId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **catalogId** | [**string**] |  | defaults to undefined|
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

# **marketplaceUpdateCatalog**
> AssistantCatalog marketplaceUpdateCatalog(assistantCatalogUpdate)

update an existing assistant catalog item.

### Example

```typescript
import {
    AssistantMarketplace,
    Configuration,
    AssistantCatalogUpdate
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AssistantMarketplace(configuration);

let catalogId: string; // (default to undefined)
let assistantCatalogUpdate: AssistantCatalogUpdate; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.marketplaceUpdateCatalog(
    catalogId,
    assistantCatalogUpdate,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assistantCatalogUpdate** | **AssistantCatalogUpdate**|  | |
| **catalogId** | [**string**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**AssistantCatalog**

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

# **marketplaceUpdateCatalogState**
> AssistantCatalog marketplaceUpdateCatalogState(marketplaceCatalogStateUpdate)

update the state of an existing assistant catalog item.

### Example

```typescript
import {
    AssistantMarketplace,
    Configuration,
    MarketplaceCatalogStateUpdate
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AssistantMarketplace(configuration);

let catalogId: string; // (default to undefined)
let marketplaceCatalogStateUpdate: MarketplaceCatalogStateUpdate; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.marketplaceUpdateCatalogState(
    catalogId,
    marketplaceCatalogStateUpdate,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **marketplaceCatalogStateUpdate** | **MarketplaceCatalogStateUpdate**|  | |
| **catalogId** | [**string**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**AssistantCatalog**

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

