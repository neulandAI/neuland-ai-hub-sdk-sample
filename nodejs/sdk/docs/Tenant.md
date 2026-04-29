# Tenant

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**tenantsAddLibraryToTenants**](#tenantsaddlibrarytotenants) | **POST** /tenants/{tenant_id}/libraries/{library_id} | Add Library To Tenants|
|[**tenantsCreateTenant**](#tenantscreatetenant) | **POST** /tenants/ | Create Tenant|
|[**tenantsCreateTenantConnector**](#tenantscreatetenantconnector) | **POST** /tenants/{tenant_id}/connectors/{connector_id} | Create Tenant Connector|
|[**tenantsCreateTenantTool**](#tenantscreatetenanttool) | **POST** /tenants/{tenant_id}/tools/{tool_id} | Create Tenant Tool|
|[**tenantsDeleteTenant**](#tenantsdeletetenant) | **DELETE** /tenants/{tenant_id} | Delete Tenant|
|[**tenantsDeleteTenantConnector**](#tenantsdeletetenantconnector) | **DELETE** /tenants/{tenant_id}/connectors/{connector_id} | Delete Tenant Connector|
|[**tenantsDeleteTenantModel**](#tenantsdeletetenantmodel) | **DELETE** /tenants/{tenant_id}/models/{model_id} | Delete Tenant Model|
|[**tenantsDeleteTenantModelsBulk**](#tenantsdeletetenantmodelsbulk) | **DELETE** /tenants/models/{model_id}/bulk | Delete Tenant Models Bulk|
|[**tenantsDeleteTenantTool**](#tenantsdeletetenanttool) | **DELETE** /tenants/{tenant_id}/tools/{tool_id} | Delete Tenant Tool|
|[**tenantsGetCurrentTenant**](#tenantsgetcurrenttenant) | **GET** /tenants/current | Get Current Tenant|
|[**tenantsPutTenantModel**](#tenantsputtenantmodel) | **PUT** /tenants/{tenant_id}/models/{model_id} | Put Tenant Model|
|[**tenantsPutTenantModelsBulk**](#tenantsputtenantmodelsbulk) | **PUT** /tenants/models/{model_id}/bulk | Put Tenant Models Bulk|
|[**tenantsRemoveTenantLibraryMember**](#tenantsremovetenantlibrarymember) | **DELETE** /tenants/{tenant_id}/libraries/{library_id} | Remove Tenant Library Member|
|[**tenantsUpdateCurrentTenant**](#tenantsupdatecurrenttenant) | **PATCH** /tenants/current | Update Current Tenant|
|[**tenantsUpdateTenant**](#tenantsupdatetenant) | **PATCH** /tenants/{tenant_id} | Update Tenant|

# **tenantsAddLibraryToTenants**
> any tenantsAddLibraryToTenants()

Assign library to the tenant by superadmin or to one entire tenancy by admin

### Example

```typescript
import {
    Tenant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let libraryId: number; // (default to undefined)
let tenantId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.tenantsAddLibraryToTenants(
    libraryId,
    tenantId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **libraryId** | [**number**] |  | defaults to undefined|
| **tenantId** | [**number**] |  | defaults to undefined|
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

# **tenantsCreateTenant**
> TenantOut tenantsCreateTenant(tenantIn)

Create a new tenant (platform operator or parent tenant admin)

### Example

```typescript
import {
    Tenant,
    Configuration,
    TenantIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let tenantIn: TenantIn; //
let cookieName: string; // (optional) (default to undefined)
let tenantId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.tenantsCreateTenant(
    tenantIn,
    cookieName,
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantIn** | **TenantIn**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**TenantOut**

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

# **tenantsCreateTenantConnector**
> any tenantsCreateTenantConnector()

Enable a connector for a tenant by creating TenantConnector record (superadmin or parent tenant admin)

### Example

```typescript
import {
    Tenant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let tenantId: number; // (default to undefined)
let connectorId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.tenantsCreateTenantConnector(
    tenantId,
    connectorId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**number**] |  | defaults to undefined|
| **connectorId** | [**number**] |  | defaults to undefined|
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
|**201** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantsCreateTenantTool**
> any tenantsCreateTenantTool()

Enable a tool for a tenant by creating TenantTool record (superadmin or parent tenant admin)

### Example

```typescript
import {
    Tenant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let tenantId: number; // (default to undefined)
let toolId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.tenantsCreateTenantTool(
    tenantId,
    toolId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**number**] |  | defaults to undefined|
| **toolId** | [**number**] |  | defaults to undefined|
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
|**201** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantsDeleteTenant**
> tenantsDeleteTenant()

Delete a tenant (superadmin or parent tenant admin)

### Example

```typescript
import {
    Tenant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let tenantId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.tenantsDeleteTenant(
    tenantId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**number**] |  | defaults to undefined|
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

# **tenantsDeleteTenantConnector**
> tenantsDeleteTenantConnector()

Disable a connector for a tenant by removing TenantConnector record (superadmin or parent tenant admin)

### Example

```typescript
import {
    Tenant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let tenantId: number; // (default to undefined)
let connectorId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.tenantsDeleteTenantConnector(
    tenantId,
    connectorId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**number**] |  | defaults to undefined|
| **connectorId** | [**number**] |  | defaults to undefined|
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

# **tenantsDeleteTenantModel**
> tenantsDeleteTenantModel()


### Example

```typescript
import {
    Tenant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let tenantId: number; // (default to undefined)
let modelId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.tenantsDeleteTenantModel(
    tenantId,
    modelId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**number**] |  | defaults to undefined|
| **modelId** | [**number**] |  | defaults to undefined|
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

# **tenantsDeleteTenantModelsBulk**
> tenantsDeleteTenantModelsBulk(tenantModelBulkIn)


### Example

```typescript
import {
    Tenant,
    Configuration,
    TenantModelBulkIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let modelId: number; // (default to undefined)
let tenantModelBulkIn: TenantModelBulkIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.tenantsDeleteTenantModelsBulk(
    modelId,
    tenantModelBulkIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantModelBulkIn** | **TenantModelBulkIn**|  | |
| **modelId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantsDeleteTenantTool**
> tenantsDeleteTenantTool()

Disable a tool for a tenant by removing TenantTool record (superadmin or parent tenant admin)

### Example

```typescript
import {
    Tenant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let tenantId: number; // (default to undefined)
let toolId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.tenantsDeleteTenantTool(
    tenantId,
    toolId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**number**] |  | defaults to undefined|
| **toolId** | [**number**] |  | defaults to undefined|
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

# **tenantsGetCurrentTenant**
> TenantOut tenantsGetCurrentTenant()

Get current user\'s tenant

### Example

```typescript
import {
    Tenant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.tenantsGetCurrentTenant(
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**TenantOut**

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

# **tenantsPutTenantModel**
> TenantLLM tenantsPutTenantModel()


### Example

```typescript
import {
    Tenant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let tenantId: number; // (default to undefined)
let modelId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.tenantsPutTenantModel(
    tenantId,
    modelId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**number**] |  | defaults to undefined|
| **modelId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**TenantLLM**

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

# **tenantsPutTenantModelsBulk**
> tenantsPutTenantModelsBulk(tenantModelBulkIn)


### Example

```typescript
import {
    Tenant,
    Configuration,
    TenantModelBulkIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let modelId: number; // (default to undefined)
let tenantModelBulkIn: TenantModelBulkIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.tenantsPutTenantModelsBulk(
    modelId,
    tenantModelBulkIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantModelBulkIn** | **TenantModelBulkIn**|  | |
| **modelId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantsRemoveTenantLibraryMember**
> tenantsRemoveTenantLibraryMember()

Deletes a tenant from the library

### Example

```typescript
import {
    Tenant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let libraryId: number; // (default to undefined)
let tenantId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.tenantsRemoveTenantLibraryMember(
    libraryId,
    tenantId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **libraryId** | [**number**] |  | defaults to undefined|
| **tenantId** | [**number**] |  | defaults to undefined|
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

# **tenantsUpdateCurrentTenant**
> TenantOut tenantsUpdateCurrentTenant(tenantUpdateIn)

Update current user\'s tenant (tenant admin only)

### Example

```typescript
import {
    Tenant,
    Configuration,
    TenantUpdateIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let tenantUpdateIn: TenantUpdateIn; //
let cookieName: string; // (optional) (default to undefined)
let tenantId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.tenantsUpdateCurrentTenant(
    tenantUpdateIn,
    cookieName,
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantUpdateIn** | **TenantUpdateIn**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**TenantOut**

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

# **tenantsUpdateTenant**
> TenantOut tenantsUpdateTenant(tenantUpdateIn)

Update a tenant (superadmin or parent tenant admin)

### Example

```typescript
import {
    Tenant,
    Configuration,
    TenantUpdateIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let tenantId: number; // (default to undefined)
let tenantUpdateIn: TenantUpdateIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.tenantsUpdateTenant(
    tenantId,
    tenantUpdateIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantUpdateIn** | **TenantUpdateIn**|  | |
| **tenantId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**TenantOut**

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

