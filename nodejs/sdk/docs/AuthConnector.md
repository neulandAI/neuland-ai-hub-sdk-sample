# AuthConnector

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authGetCredentialTemplate**](#authgetcredentialtemplate) | **GET** /auth/connectors/{connector_id}/credential/template | Get connector credential template|
|[**authInitiateAdminConsent**](#authinitiateadminconsent) | **GET** /auth/connectors/{connector_id}/consent/admin | Initiate admin connector consent|
|[**authInitiateConsent**](#authinitiateconsent) | **GET** /auth/connectors/{connector_id}/consent | Initiate connector consent|
|[**authListConnectorStatus**](#authlistconnectorstatus) | **GET** /auth/connectors/status | List connector status|
|[**authOauthCallback**](#authoauthcallback) | **GET** /auth/connectors/callback | Connector OAuth callback|
|[**authRevokeConsent**](#authrevokeconsent) | **DELETE** /auth/connectors/{connector_id}/consent | Revoke connector consent|
|[**authSetAdminCredential**](#authsetadmincredential) | **PUT** /auth/connectors/{connector_id}/credential/admin | Set the tenant-wide connector credential|
|[**authSetUserCredential**](#authsetusercredential) | **PUT** /auth/connectors/{connector_id}/credential/user | Set the caller\&#39;s connector credential|
|[**authUpdateConnector**](#authupdateconnector) | **PATCH** /auth/connectors/{connector_id} | Update a connector|
|[**authUpdateOauthClient**](#authupdateoauthclient) | **PATCH** /auth/connectors/oauth-clients/{oauth_client_id} | Update an OAuth client|

# **authGetCredentialTemplate**
> CredentialTemplateOut authGetCredentialTemplate()

The admin and/or user parts this connector needs and whether each is set. Never returns stored secret values — only which fields are present.

### Example

```typescript
import {
    AuthConnector,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AuthConnector(configuration);

let connectorId: string; //Public id of the connector whose credential is being accessed. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.authGetCredentialTemplate(
    connectorId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **connectorId** | [**string**] | Public id of the connector whose credential is being accessed. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CredentialTemplateOut**

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
|**404** | No connector or credential template exists for the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authInitiateAdminConsent**
> ConnectorConsentOut authInitiateAdminConsent()

Start the admin consent flow for connectors that require organization-wide admin consent.

### Example

```typescript
import {
    AuthConnector,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AuthConnector(configuration);

let connectorId: string; //Public id of the connector to consent to. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.authInitiateAdminConsent(
    connectorId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **connectorId** | [**string**] | Public id of the connector to consent to. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ConnectorConsentOut**

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
|**403** | Administrator privileges required. |  -  |
|**404** | No connector or OAuth client exists for the given id. |  -  |
|**503** | The OAuth provider has no admin consent URL or is misconfigured. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authInitiateConsent**
> ConnectorConsentOut authInitiateConsent()

Initiate OAuth consent flow for a connector. Returns the provider consent URL as JSON, or a 302 redirect when redirect=true.

### Example

```typescript
import {
    AuthConnector,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AuthConnector(configuration);

let connectorId: string; //Public id of the connector to consent to. (default to undefined)
let returnUrl: string; //URL to return the user to after consent. (optional) (default to undefined)
let redirect: boolean; //If true, return 302 redirect instead of JSON (optional) (default to false)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.authInitiateConsent(
    connectorId,
    returnUrl,
    redirect,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **connectorId** | [**string**] | Public id of the connector to consent to. | defaults to undefined|
| **returnUrl** | [**string**] | URL to return the user to after consent. | (optional) defaults to undefined|
| **redirect** | [**boolean**] | If true, return 302 redirect instead of JSON | (optional) defaults to false|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ConnectorConsentOut**

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
|**403** | The connector is not available to the user. |  -  |
|**404** | No connector or OAuth client exists for the given id. |  -  |
|**503** | The OAuth provider is misconfigured. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authListConnectorStatus**
> Array<ConnectorStatusOut> authListConnectorStatus()

List the connectors the user may use with their per-user consent status.

### Example

```typescript
import {
    AuthConnector,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AuthConnector(configuration);

let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.authListConnectorStatus(
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<ConnectorStatusOut>**

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
|**404** | The current user no longer exists. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authOauthCallback**
> any authOauthCallback()

Handle the provider redirect after user consent and persist the granted connector tokens.

### Example

```typescript
import {
    AuthConnector,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AuthConnector(configuration);

let state: string; //Opaque state token issued when consent was initiated. (optional) (default to undefined)
let code: string; // (optional) (default to undefined)
let error: string; // (optional) (default to undefined)
let errorDescription: string; // (optional) (default to undefined)
let errorSubcode: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.authOauthCallback(
    state,
    code,
    error,
    errorDescription,
    errorSubcode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **state** | [**string**] | Opaque state token issued when consent was initiated. | (optional) defaults to undefined|
| **code** | [**string**] |  | (optional) defaults to undefined|
| **error** | [**string**] |  | (optional) defaults to undefined|
| **errorDescription** | [**string**] |  | (optional) defaults to undefined|
| **errorSubcode** | [**string**] |  | (optional) defaults to undefined|


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**403** | The provider granted insufficient scopes for the requested capabilities. |  -  |
|**404** | No connector or OAuth client exists for the consent state. |  -  |
|**503** | Token exchange with the OAuth provider failed. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authRevokeConsent**
> authRevokeConsent()

Disconnect a connector for the caller: revoke OAuth consent for OAuth connectors, or clear the caller\'s own credential for non-OAuth ones.

### Example

```typescript
import {
    AuthConnector,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AuthConnector(configuration);

let connectorId: string; //Public id of the connector to revoke consent for. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.authRevokeConsent(
    connectorId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **connectorId** | [**string**] | Public id of the connector to revoke consent for. | defaults to undefined|
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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authSetAdminCredential**
> authSetAdminCredential(credentialIn)

Store the tenant-wide (admin) credential fields. Admin only.

### Example

```typescript
import {
    AuthConnector,
    Configuration,
    CredentialIn
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AuthConnector(configuration);

let connectorId: string; //Public id of the connector whose credential is being accessed. (default to undefined)
let credentialIn: CredentialIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.authSetAdminCredential(
    connectorId,
    credentialIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **credentialIn** | **CredentialIn**|  | |
| **connectorId** | [**string**] | Public id of the connector whose credential is being accessed. | defaults to undefined|
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
|**401** | Missing or invalid authentication. |  -  |
|**403** | Administrator privileges required. |  -  |
|**404** | No connector/template exists, or it has no admin credential fields. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authSetUserCredential**
> authSetUserCredential(credentialIn)

Store the caller\'s per-user credential fields.

### Example

```typescript
import {
    AuthConnector,
    Configuration,
    CredentialIn
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AuthConnector(configuration);

let connectorId: string; //Public id of the connector whose credential is being accessed. (default to undefined)
let credentialIn: CredentialIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.authSetUserCredential(
    connectorId,
    credentialIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **credentialIn** | **CredentialIn**|  | |
| **connectorId** | [**string**] | Public id of the connector whose credential is being accessed. | defaults to undefined|
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
|**401** | Missing or invalid authentication. |  -  |
|**404** | No connector/template exists, or it has no per-user credential fields. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authUpdateConnector**
> Connector authUpdateConnector(connectorUpdate)

Update a connector (superadmin only).

### Example

```typescript
import {
    AuthConnector,
    Configuration,
    ConnectorUpdate
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AuthConnector(configuration);

let connectorId: string; //Public id of the connector to update. (default to undefined)
let connectorUpdate: ConnectorUpdate; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.authUpdateConnector(
    connectorId,
    connectorUpdate,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **connectorUpdate** | **ConnectorUpdate**|  | |
| **connectorId** | [**string**] | Public id of the connector to update. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Connector**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Platform operator (superadmin) privileges required. |  -  |
|**404** | No connector exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authUpdateOauthClient**
> OAuthClient authUpdateOauthClient(oAuthClientUpdate)

Update an OAuth client (superadmin only).

### Example

```typescript
import {
    AuthConnector,
    Configuration,
    OAuthClientUpdate
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AuthConnector(configuration);

let oauthClientId: string; //Public id of the OAuth client to update. (default to undefined)
let oAuthClientUpdate: OAuthClientUpdate; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.authUpdateOauthClient(
    oauthClientId,
    oAuthClientUpdate,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **oAuthClientUpdate** | **OAuthClientUpdate**|  | |
| **oauthClientId** | [**string**] | Public id of the OAuth client to update. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**OAuthClient**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Platform operator (superadmin) privileges required. |  -  |
|**404** | No OAuth client exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

