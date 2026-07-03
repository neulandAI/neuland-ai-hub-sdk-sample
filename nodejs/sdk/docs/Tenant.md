# Tenant

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**tenantsAddLibraryToTenants**](#tenantsaddlibrarytotenants) | **POST** /tenants/{tenant_id}/libraries/{library_id} | Assign a library to a tenant|
|[**tenantsCreateTenant**](#tenantscreatetenant) | **POST** /tenants/ | Create a tenant|
|[**tenantsCreateTenantConnector**](#tenantscreatetenantconnector) | **POST** /tenants/{tenant_id}/connectors/{connector_id} | Enable a connector for a tenant|
|[**tenantsCreateTenantOauthClient**](#tenantscreatetenantoauthclient) | **POST** /tenants/{tenant_id}/oauth-clients/{oauth_client_id} | Create a per-tenant OAuth client config|
|[**tenantsCreateTenantTool**](#tenantscreatetenanttool) | **POST** /tenants/{tenant_id}/tools/{tool_id} | Enable a tool for a tenant|
|[**tenantsDeleteTenant**](#tenantsdeletetenant) | **DELETE** /tenants/{tenant_id} | Delete a tenant|
|[**tenantsDeleteTenantConnector**](#tenantsdeletetenantconnector) | **DELETE** /tenants/{tenant_id}/connectors/{connector_id} | Disable a connector for a tenant|
|[**tenantsDeleteTenantModel**](#tenantsdeletetenantmodel) | **DELETE** /tenants/{tenant_id}/models/{model_id} | Disable a model for a tenant|
|[**tenantsDeleteTenantModelsBulk**](#tenantsdeletetenantmodelsbulk) | **DELETE** /tenants/models/{model_id}/bulk | Disable a model for multiple tenants|
|[**tenantsDeleteTenantOauthClient**](#tenantsdeletetenantoauthclient) | **DELETE** /tenants/{tenant_id}/oauth-clients/{oauth_client_id} | Delete a per-tenant OAuth client config|
|[**tenantsDeleteTenantTool**](#tenantsdeletetenanttool) | **DELETE** /tenants/{tenant_id}/tools/{tool_id} | Disable a tool for a tenant|
|[**tenantsGetCurrentTenant**](#tenantsgetcurrenttenant) | **GET** /tenants/current | Get current tenant|
|[**tenantsPutTenantModel**](#tenantsputtenantmodel) | **PUT** /tenants/{tenant_id}/models/{model_id} | Enable a model for a tenant|
|[**tenantsPutTenantModelsBulk**](#tenantsputtenantmodelsbulk) | **PUT** /tenants/models/{model_id}/bulk | Enable a model for multiple tenants|
|[**tenantsRemoveTenantLibraryMember**](#tenantsremovetenantlibrarymember) | **DELETE** /tenants/{tenant_id}/libraries/{library_id} | Unassign a library from a tenant|
|[**tenantsUpdateCurrentTenant**](#tenantsupdatecurrenttenant) | **PATCH** /tenants/current | Update current tenant|
|[**tenantsUpdateTenant**](#tenantsupdatetenant) | **PATCH** /tenants/{tenant_id} | Update a tenant|
|[**tenantsUpdateTenantOauthClient**](#tenantsupdatetenantoauthclient) | **PATCH** /tenants/{tenant_id}/oauth-clients/{oauth_client_id} | Update a per-tenant OAuth client config|
|[**tenantsUpdateTenantOauthSecret**](#tenantsupdatetenantoauthsecret) | **PUT** /tenants/{tenant_id}/oauth-clients/{oauth_client_id}/secret | Set a per-tenant OAuth client secret|

# **tenantsAddLibraryToTenants**
> any tenantsAddLibraryToTenants()

Assign a library to a tenant (library owner who is admin of that tenant).

### Example

```typescript
import {
    Tenant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let libraryId: number; // (default to undefined)
let tenantId: number; //ID of the tenant. (default to undefined)
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
| **tenantId** | [**number**] | ID of the tenant. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**any**

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
|**403** | Library owner and tenant admin privileges required. |  -  |
|**404** | Current user not found. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantsCreateTenant**
> TenantOut tenantsCreateTenant(tenantIn)

Create a new tenant (platform operator or parent tenant admin).

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

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Tenant admin privileges required, or not permitted to create this kind of tenant. |  -  |
|**404** | Current user or parent tenant not found. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantsCreateTenantConnector**
> any tenantsCreateTenantConnector()

Enable a connector for a tenant (superadmin or parent tenant admin).

### Example

```typescript
import {
    Tenant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let tenantId: number; // (default to undefined)
let connectorId: number; //ID of the connector to enable. (default to undefined)
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
| **connectorId** | [**number**] | ID of the connector to enable. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**any**

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
|**403** | Superadmin or parent tenant admin required. |  -  |
|**404** | No connector exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantsCreateTenantOauthClient**
> TenantOAuthClientOut tenantsCreateTenantOauthClient(tenantOAuthClientIn)

Provision per-tenant SSO config and secret for a deployment-wide template.

### Example

```typescript
import {
    Tenant,
    Configuration,
    TenantOAuthClientIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let tenantId: number; //ID of the tenant to configure. (default to undefined)
let oauthClientId: number; //ID of the platform OAuth client to override. (default to undefined)
let tenantOAuthClientIn: TenantOAuthClientIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.tenantsCreateTenantOauthClient(
    tenantId,
    oauthClientId,
    tenantOAuthClientIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantOAuthClientIn** | **TenantOAuthClientIn**|  | |
| **tenantId** | [**number**] | ID of the tenant to configure. | defaults to undefined|
| **oauthClientId** | [**number**] | ID of the platform OAuth client to override. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**TenantOAuthClientOut**

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
|**404** | The tenant or platform OAuth client does not exist. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantsCreateTenantTool**
> any tenantsCreateTenantTool()

Enable a tool for a tenant (superadmin or parent tenant admin).

### Example

```typescript
import {
    Tenant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let tenantId: number; // (default to undefined)
let toolId: number; //ID of the tool to enable. (default to undefined)
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
| **toolId** | [**number**] | ID of the tool to enable. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**any**

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
|**403** | Superadmin or parent tenant admin required. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantsDeleteTenant**
> tenantsDeleteTenant()

Delete a tenant by id (superadmin or parent tenant admin).

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

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Superadmin or parent tenant admin required. |  -  |
|**404** | No tenant exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantsDeleteTenantConnector**
> tenantsDeleteTenantConnector()

Disable a connector for a tenant (superadmin or parent tenant admin).

### Example

```typescript
import {
    Tenant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let tenantId: number; // (default to undefined)
let connectorId: number; //ID of the connector to disable. (default to undefined)
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
| **connectorId** | [**number**] | ID of the connector to disable. | defaults to undefined|
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
|**403** | Superadmin or parent tenant admin required. |  -  |
|**404** | The connector is not enabled for the tenant. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantsDeleteTenantModel**
> tenantsDeleteTenantModel()

Disable an LLM catalog model for a tenant (superadmin or parent tenant admin).

### Example

```typescript
import {
    Tenant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let tenantId: number; // (default to undefined)
let modelId: number; //ID of the LLM catalog model to disable. (default to undefined)
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
| **modelId** | [**number**] | ID of the LLM catalog model to disable. | defaults to undefined|
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
|**403** | Superadmin or parent tenant admin required. |  -  |
|**404** | Tenant model association not found. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantsDeleteTenantModelsBulk**
> tenantsDeleteTenantModelsBulk(tenantModelBulkIn)

Disable an LLM catalog model for all tenants or a list of tenants (superadmin).

### Example

```typescript
import {
    Tenant,
    Configuration,
    TenantModelBulkIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let modelId: number; //ID of the LLM catalog model to disable. (default to undefined)
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
| **modelId** | [**number**] | ID of the LLM catalog model to disable. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Superadmin privileges required. |  -  |
|**404** | Catalog model not found, or a target tenant not found. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantsDeleteTenantOauthClient**
> tenantsDeleteTenantOauthClient()

Delete a per-tenant OAuth client configuration and its stored secret.

### Example

```typescript
import {
    Tenant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let tenantId: number; //ID of the tenant. (default to undefined)
let oauthClientId: number; //ID of the platform OAuth client being overridden. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.tenantsDeleteTenantOauthClient(
    tenantId,
    oauthClientId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**number**] | ID of the tenant. | defaults to undefined|
| **oauthClientId** | [**number**] | ID of the platform OAuth client being overridden. | defaults to undefined|
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
|**403** | Superadmin privileges required. |  -  |
|**404** | No per-tenant OAuth config exists for this tenant and OAuth client. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantsDeleteTenantTool**
> tenantsDeleteTenantTool()

Disable a tool for a tenant (superadmin or parent tenant admin).

### Example

```typescript
import {
    Tenant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let tenantId: number; // (default to undefined)
let toolId: number; //ID of the tool to disable. (default to undefined)
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
| **toolId** | [**number**] | ID of the tool to disable. | defaults to undefined|
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
|**403** | Superadmin or parent tenant admin required. |  -  |
|**404** | The tool is not enabled for the tenant. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantsGetCurrentTenant**
> TenantOut tenantsGetCurrentTenant()

Get the tenant the current user belongs to.

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

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantsPutTenantModel**
> TenantLLM tenantsPutTenantModel()

Enable an LLM catalog model for a tenant (superadmin or parent tenant admin).

### Example

```typescript
import {
    Tenant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let tenantId: number; // (default to undefined)
let modelId: number; //ID of the LLM catalog model to enable. (default to undefined)
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
| **modelId** | [**number**] | ID of the LLM catalog model to enable. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**TenantLLM**

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
|**403** | Superadmin or parent tenant admin required. |  -  |
|**404** | Tenant or catalog model not found. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantsPutTenantModelsBulk**
> tenantsPutTenantModelsBulk(tenantModelBulkIn)

Enable an LLM catalog model for all tenants or a list of tenants (superadmin).

### Example

```typescript
import {
    Tenant,
    Configuration,
    TenantModelBulkIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let modelId: number; //ID of the LLM catalog model to enable. (default to undefined)
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
| **modelId** | [**number**] | ID of the LLM catalog model to enable. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Superadmin privileges required. |  -  |
|**404** | Catalog model not found, or a target tenant not found. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantsRemoveTenantLibraryMember**
> tenantsRemoveTenantLibraryMember()

Remove a library assignment from a tenant (library owner who is tenant admin).

### Example

```typescript
import {
    Tenant,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let libraryId: number; // (default to undefined)
let tenantId: number; //ID of the tenant. (default to undefined)
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
| **tenantId** | [**number**] | ID of the tenant. | defaults to undefined|
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
|**403** | Library owner and tenant admin privileges required. |  -  |
|**404** | The library is not assigned to the tenant. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantsUpdateCurrentTenant**
> TenantOut tenantsUpdateCurrentTenant(tenantUpdateIn)

Update the current user\'s tenant (tenant admin; some fields superadmin-only).

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

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Tenant admin privileges required, or superadmin required to change protected fields. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantsUpdateTenant**
> TenantOut tenantsUpdateTenant(tenantUpdateIn)

Update a tenant by id (superadmin or parent tenant admin).

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

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Superadmin or parent tenant admin required; some fields require superadmin. |  -  |
|**404** | No tenant exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantsUpdateTenantOauthClient**
> TenantOAuthClientOut tenantsUpdateTenantOauthClient(tenantOAuthClientUpdate)

Update an existing per-tenant OAuth client configuration.

### Example

```typescript
import {
    Tenant,
    Configuration,
    TenantOAuthClientUpdate
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let tenantId: number; //ID of the tenant. (default to undefined)
let oauthClientId: number; //ID of the platform OAuth client being overridden. (default to undefined)
let tenantOAuthClientUpdate: TenantOAuthClientUpdate; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.tenantsUpdateTenantOauthClient(
    tenantId,
    oauthClientId,
    tenantOAuthClientUpdate,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantOAuthClientUpdate** | **TenantOAuthClientUpdate**|  | |
| **tenantId** | [**number**] | ID of the tenant. | defaults to undefined|
| **oauthClientId** | [**number**] | ID of the platform OAuth client being overridden. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**TenantOAuthClientOut**

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
|**404** | No per-tenant OAuth config exists for this tenant and OAuth client. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantsUpdateTenantOauthSecret**
> tenantsUpdateTenantOauthSecret(secretUpdateIn)

Replace the stored OAuth client secret for a per-tenant configuration.

### Example

```typescript
import {
    Tenant,
    Configuration,
    SecretUpdateIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tenant(configuration);

let tenantId: number; //ID of the tenant. (default to undefined)
let oauthClientId: number; //ID of the platform OAuth client being overridden. (default to undefined)
let secretUpdateIn: SecretUpdateIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.tenantsUpdateTenantOauthSecret(
    tenantId,
    oauthClientId,
    secretUpdateIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **secretUpdateIn** | **SecretUpdateIn**|  | |
| **tenantId** | [**number**] | ID of the tenant. | defaults to undefined|
| **oauthClientId** | [**number**] | ID of the platform OAuth client being overridden. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Superadmin privileges required. |  -  |
|**404** | No per-tenant OAuth config exists for this tenant and OAuth client. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

