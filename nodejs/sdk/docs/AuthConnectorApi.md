# AuthConnectorApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authInitiateAdminConsent**](#authinitiateadminconsent) | **GET** /auth/connectors/{connector_id}/consent/admin | Initiate Admin Consent|
|[**authInitiateConsent**](#authinitiateconsent) | **GET** /auth/connectors/{connector_id}/consent | Initiate Consent|
|[**authListConnectorStatus**](#authlistconnectorstatus) | **GET** /auth/connectors/status | List Connector Status|
|[**authOauthCallback**](#authoauthcallback) | **GET** /auth/connectors/callback | Oauth Callback|
|[**authRevokeConsent**](#authrevokeconsent) | **DELETE** /auth/connectors/{connector_id}/consent | Revoke Consent|
|[**authUpdateConnector**](#authupdateconnector) | **PATCH** /auth/connectors/{connector_id} | Update Connector|
|[**authUpdateOauthClient**](#authupdateoauthclient) | **PATCH** /auth/connectors/oauth-clients/{oauth_client_id} | Update Oauth Client|

# **authInitiateAdminConsent**
> ConnectorConsentOut authInitiateAdminConsent()

Initiate admin consent flow for a specific connector. This is used when the connector requires admin consent in addition to user consent.

### Example

```typescript
import {
    AuthConnectorApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AuthConnectorApi(configuration);

let connectorId: number; // (default to undefined)
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
| **connectorId** | [**number**] |  | defaults to undefined|
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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authInitiateConsent**
> ConnectorConsentOut authInitiateConsent()

Initiate OAuth consent flow for a specific connector.  Returns redirect URL to OAuth provider\'s consent page. If redirect=true, returns HTTP 302 redirect response.

### Example

```typescript
import {
    AuthConnectorApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AuthConnectorApi(configuration);

let connectorId: number; // (default to undefined)
let returnUrl: string; // (optional) (default to undefined)
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
| **connectorId** | [**number**] |  | defaults to undefined|
| **returnUrl** | [**string**] |  | (optional) defaults to undefined|
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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authListConnectorStatus**
> Array<ConnectorStatusOut> authListConnectorStatus()


### Example

```typescript
import {
    AuthConnectorApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AuthConnectorApi(configuration);

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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authOauthCallback**
> any authOauthCallback()

Generic OAuth callback from provider after user consent.

### Example

```typescript
import {
    AuthConnectorApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AuthConnectorApi(configuration);

let state: string; // (default to undefined)
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
| **state** | [**string**] |  | defaults to undefined|
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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authRevokeConsent**
> authRevokeConsent()


### Example

```typescript
import {
    AuthConnectorApi,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AuthConnectorApi(configuration);

let connectorId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.authRevokeConsent(
    connectorId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **authUpdateConnector**
> Connector authUpdateConnector(connectorUpdate)

Update a connector (superadmin only).

### Example

```typescript
import {
    AuthConnectorApi,
    Configuration,
    ConnectorUpdate
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AuthConnectorApi(configuration);

let connectorId: number; // (default to undefined)
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
| **connectorId** | [**number**] |  | defaults to undefined|
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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authUpdateOauthClient**
> OAuthClient authUpdateOauthClient(oAuthClientUpdate)

Update an OAuth client (superadmin only).

### Example

```typescript
import {
    AuthConnectorApi,
    Configuration,
    OAuthClientUpdate
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new AuthConnectorApi(configuration);

let oauthClientId: number; // (default to undefined)
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
| **oauthClientId** | [**number**] |  | defaults to undefined|
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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

