# AuthConnector

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authInitiateAdminConsent**](#authinitiateadminconsent) | **GET** /auth/connectors/{connector_id}/consent/admin | Initiate admin connector consent|
|[**authInitiateConsent**](#authinitiateconsent) | **GET** /auth/connectors/{connector_id}/consent | Initiate connector consent|
|[**authListConnectorStatus**](#authlistconnectorstatus) | **GET** /auth/connectors/status | List connector status|
|[**authOauthCallback**](#authoauthcallback) | **GET** /auth/connectors/callback | Connector OAuth callback|
|[**authRevokeConsent**](#authrevokeconsent) | **DELETE** /auth/connectors/{connector_id}/consent | Revoke connector consent|
|[**authUpdateConnector**](#authupdateconnector) | **PATCH** /auth/connectors/{connector_id} | Update a connector|
|[**authUpdateOauthClient**](#authupdateoauthclient) | **PATCH** /auth/connectors/oauth-clients/{oauth_client_id} | Update an OAuth client|

# **authInitiateAdminConsent**
> ConnectorConsentOut authInitiateAdminConsent()

Start the admin consent flow for connectors that require organization-wide admin consent.

### Example

```typescript
import {
    AuthConnector,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AuthConnector(configuration);

let connectorId: number; //ID of the connector to consent to. (default to undefined)
let tenantId: number; // (optional) (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.authInitiateAdminConsent(
    connectorId,
    tenantId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **connectorId** | [**number**] | ID of the connector to consent to. | defaults to undefined|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|
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

Start the OAuth consent flow for a connector, returning (or redirecting to) the provider URL.

### Example

```typescript
import {
    AuthConnector,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AuthConnector(configuration);

let connectorId: number; //ID of the connector to consent to. (default to undefined)
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
| **connectorId** | [**number**] | ID of the connector to consent to. | defaults to undefined|
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
|**404** | No connector or OAuth client exists for the given id. |  -  |
|**503** | The OAuth provider is misconfigured. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authListConnectorStatus**
> Array<ConnectorStatusOut> authListConnectorStatus()

List connectors available to the user\'s tenant with their per-user consent status.

### Example

```typescript
import {
    AuthConnector,
    Configuration
} from 'neuland-hub-sdk';

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
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AuthConnector(configuration);

let state: string; //Opaque state token issued when consent was initiated. (default to undefined)
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
| **state** | [**string**] | Opaque state token issued when consent was initiated. | defaults to undefined|
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

Delete the current user\'s stored consent for a connector, if any exists.

### Example

```typescript
import {
    AuthConnector,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AuthConnector(configuration);

let connectorId: number; //ID of the connector to revoke consent for. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.authRevokeConsent(
    connectorId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **connectorId** | [**number**] | ID of the connector to revoke consent for. | defaults to undefined|
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

# **authUpdateConnector**
> Connector authUpdateConnector(connectorUpdate)

Update a connector (superadmin only).

### Example

```typescript
import {
    AuthConnector,
    Configuration,
    ConnectorUpdate
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AuthConnector(configuration);

let connectorId: number; //ID of the connector to update. (default to undefined)
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
| **connectorId** | [**number**] | ID of the connector to update. | defaults to undefined|
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
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AuthConnector(configuration);

let oauthClientId: number; //ID of the OAuth client to update. (default to undefined)
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
| **oauthClientId** | [**number**] | ID of the OAuth client to update. | defaults to undefined|
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

