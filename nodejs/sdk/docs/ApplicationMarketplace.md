# ApplicationMarketplace

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**applicationAddTagToCatalog**](#applicationaddtagtocatalog) | **POST** /marketplace/application/catalog/{catalog_id}/tags/{tag_id} | Attach a tag to a marketplace application|
|[**applicationCreateCatalog**](#applicationcreatecatalog) | **POST** /marketplace/application/catalog/ | Publish a marketplace application|
|[**applicationInstallFromCatalog**](#applicationinstallfromcatalog) | **POST** /marketplace/application/catalog/{catalog_id}/install | Install a marketplace application into the caller\&#39;s tenant|
|[**applicationListCatalog**](#applicationlistcatalog) | **GET** /marketplace/application/catalog/ | List all application catalog items — superadmin only|
|[**applicationRemoveTagFromCatalog**](#applicationremovetagfromcatalog) | **DELETE** /marketplace/application/catalog/{catalog_id}/tags/{tag_id} | Detach a tag from a marketplace application|
|[**applicationUninstallFromCatalog**](#applicationuninstallfromcatalog) | **DELETE** /marketplace/application/catalog/{catalog_id}/install | Uninstall a marketplace application for the caller|
|[**applicationUpdateCatalog**](#applicationupdatecatalog) | **PATCH** /marketplace/application/catalog/{catalog_id} | Update a marketplace application\&#39;s metadata|
|[**applicationUpdateCatalogState**](#applicationupdatecatalogstate) | **PATCH** /marketplace/application/catalog/{catalog_id}/state | Toggle a marketplace application\&#39;s lifecycle state|

# **applicationAddTagToCatalog**
> Tagging applicationAddTagToCatalog()

Attach a tenant-scoped tag to a marketplace application catalog item.  Tags are per-tenant: the same catalog application can carry different tag labels in different tenants, and the marketplace view surfaces only the caller\'s tenant\'s tags on each row.

### Example

```typescript
import {
    ApplicationMarketplace,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ApplicationMarketplace(configuration);

let catalogId: string; //Public id of the catalog application to tag. (default to undefined)
let tagId: string; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.applicationAddTagToCatalog(
    catalogId,
    tagId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **catalogId** | [**string**] | Public id of the catalog application to tag. | defaults to undefined|
| **tagId** | [**string**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Tagging**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | The tag does not belong to the caller\&#39;s tenant. |  -  |
|**404** | The catalog application or the tag was not found. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationCreateCatalog**
> any applicationCreateCatalog(applicationCatalogIn)

Publish a new application to the marketplace catalog (superadmin only).

### Example

```typescript
import {
    ApplicationMarketplace,
    Configuration,
    ApplicationCatalogIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ApplicationMarketplace(configuration);

let applicationCatalogIn: ApplicationCatalogIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.applicationCreateCatalog(
    applicationCatalogIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicationCatalogIn** | **ApplicationCatalogIn**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**any**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Superadmin privileges required. |  -  |
|**422** | Payload validation failed (e.g. name over 100 chars, duplicate name/app_url). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationInstallFromCatalog**
> Application applicationInstallFromCatalog()

Materialize a per-tenant application from a catalog item and grant the caller access.  Idempotent: repeat calls by the same user return the existing tenant row. A subsequent user in the same tenant joins the existing app instead of creating a new one.

### Example

```typescript
import {
    ApplicationMarketplace,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ApplicationMarketplace(configuration);

let catalogId: string; //Public id of the catalog application to install. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.applicationInstallFromCatalog(
    catalogId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **catalogId** | [**string**] | Public id of the catalog application to install. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Application**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**404** | No catalog application exists with the given id. |  -  |
|**409** | Catalog application is DEPRECATED and cannot be installed. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationListCatalog**
> Array<ApplicationCatalog> applicationListCatalog()

Return every application catalog row (both ACTIVE and DEPRECATED).  The public marketplace view filters DEPRECATED items out; this endpoint exposes them so a superadmin UI can render them with a \"Deprecated\" badge and PATCH the state back to ACTIVE when needed.

### Example

```typescript
import {
    ApplicationMarketplace,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ApplicationMarketplace(configuration);

let state: MarketplaceCatalogStateEnum; //Filter by state (ACTIVE / DEPRECATED). Omit for all. (optional) (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.applicationListCatalog(
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

**Array<ApplicationCatalog>**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Superadmin privileges required. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationRemoveTagFromCatalog**
> applicationRemoveTagFromCatalog()

Detach a tag from a marketplace application catalog item.  Idempotent — detaching a tag that isn\'t attached is a no-op 204.

### Example

```typescript
import {
    ApplicationMarketplace,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ApplicationMarketplace(configuration);

let catalogId: string; //Public id of the catalog application to untag. (default to undefined)
let tagId: string; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.applicationRemoveTagFromCatalog(
    catalogId,
    tagId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **catalogId** | [**string**] | Public id of the catalog application to untag. | defaults to undefined|
| **tagId** | [**string**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | The tag does not belong to the caller\&#39;s tenant. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationUninstallFromCatalog**
> applicationUninstallFromCatalog()

Remove the caller\'s app membership; delete the tenant application if last member leaves.  Creatorship transfers to the next oldest remaining member when the caller was the creator and others remain. When the last member leaves, the tenant application row is hard-deleted (its ApplicationMember and ApplicationGroup rows cascade with it).

### Example

```typescript
import {
    ApplicationMarketplace,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ApplicationMarketplace(configuration);

let catalogId: string; //Public id of the catalog application to uninstall. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.applicationUninstallFromCatalog(
    catalogId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **catalogId** | [**string**] | Public id of the catalog application to uninstall. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**404** | Application is not installed in this tenant, or the caller is not a member. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationUpdateCatalog**
> ApplicationCatalog applicationUpdateCatalog(applicationCatalogUpdate)

Update metadata on a marketplace application catalog item (superadmin only).

### Example

```typescript
import {
    ApplicationMarketplace,
    Configuration,
    ApplicationCatalogUpdate
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ApplicationMarketplace(configuration);

let catalogId: string; //Public id of the catalog application to update. (default to undefined)
let applicationCatalogUpdate: ApplicationCatalogUpdate; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.applicationUpdateCatalog(
    catalogId,
    applicationCatalogUpdate,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicationCatalogUpdate** | **ApplicationCatalogUpdate**|  | |
| **catalogId** | [**string**] | Public id of the catalog application to update. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApplicationCatalog**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Superadmin privileges required. |  -  |
|**404** | No catalog application exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationUpdateCatalogState**
> ApplicationCatalog applicationUpdateCatalogState(marketplaceCatalogStateUpdate)

Flip a catalog application between ACTIVE and DEPRECATED (superadmin only).  DEPRECATED items are hidden from the marketplace and reject new installs; existing tenant installations continue to work.

### Example

```typescript
import {
    ApplicationMarketplace,
    Configuration,
    MarketplaceCatalogStateUpdate
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new ApplicationMarketplace(configuration);

let catalogId: string; //Public id of the catalog application to flip between states. (default to undefined)
let marketplaceCatalogStateUpdate: MarketplaceCatalogStateUpdate; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.applicationUpdateCatalogState(
    catalogId,
    marketplaceCatalogStateUpdate,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **marketplaceCatalogStateUpdate** | **MarketplaceCatalogStateUpdate**|  | |
| **catalogId** | [**string**] | Public id of the catalog application to flip between states. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApplicationCatalog**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Superadmin privileges required. |  -  |
|**404** | No catalog application exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

