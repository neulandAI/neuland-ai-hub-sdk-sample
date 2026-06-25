# Auth

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authConfirmEmail**](#authconfirmemail) | **GET** /auth/confirm-email | Confirm an email address|
|[**authExchangeToken**](#authexchangetoken) | **POST** /auth/exchange/token | Exchange for a service token|
|[**authGetEntraGroups**](#authgetentragroups) | **GET** /auth/entra/groups | Get Entra group names|
|[**authGetEntraScopes**](#authgetentrascopes) | **GET** /auth/entra/scopes | List Entra scopes|
|[**authLogin**](#authlogin) | **POST** /auth/token | Log in|
|[**authLogout**](#authlogout) | **POST** /auth/logout | Log out|
|[**authRequestPasswordReset**](#authrequestpasswordreset) | **POST** /auth/request-password-reset | Request a password reset|
|[**authResetPassword**](#authresetpassword) | **POST** /auth/reset-password | Complete a password reset|
|[**authResetPasswordForm**](#authresetpasswordform) | **GET** /auth/reset-password | Password reset HTML form|
|[**authSearchEntraGroups**](#authsearchentragroups) | **GET** /auth/entra/groups/search | Search Entra Groups|
|[**authSendEmailConfirmation**](#authsendemailconfirmation) | **POST** /auth/send-email-confirmation | Send an email confirmation|
|[**authSsoExchange**](#authssoexchange) | **POST** /auth/sso/{slug}/{provider}/exchange | Sso Exchange|
|[**authSsoInit**](#authssoinit) | **GET** /auth/sso/{slug}/{provider}/init | Sso Init|
|[**authSsoResolve**](#authssoresolve) | **GET** /auth/sso/resolve | Sso Resolve|

# **authConfirmEmail**
> any authConfirmEmail()

Confirm a user\'s email address (or pending email change) using a token from the email link.

### Example

```typescript
import {
    Auth,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Auth(configuration);

let token: string; //JWT token from confirmation email (default to undefined)
let accept: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.authConfirmEmail(
    token,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | JWT token from confirmation email | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to undefined|


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
|**400** | Invalid or expired confirmation link. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authExchangeToken**
> string authExchangeToken()

Exchange the caller\'s token for a service token scoped to an AI application.

### Example

```typescript
import {
    Auth,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Auth(configuration);

let appId: number; //ID of the AI application to scope the token to. (default to undefined)

const { status, data } = await apiInstance.authExchangeToken(
    appId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appId** | [**number**] | ID of the AI application to scope the token to. | defaults to undefined|


### Return type

**string**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**404** | No application exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authGetEntraGroups**
> { [key: string]: ResponseAuthGetEntraGroupsValue; } authGetEntraGroups()

Resolve Azure Entra group display names for the current user\'s groups.

### Example

```typescript
import {
    Auth,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Auth(configuration);

const { status, data } = await apiInstance.authGetEntraGroups();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**{ [key: string]: ResponseAuthGetEntraGroupsValue; }**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authGetEntraScopes**
> Array<string | null> authGetEntraScopes()

List the Azure Entra OAuth scopes the platform requests.

### Example

```typescript
import {
    Auth,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Auth(configuration);

const { status, data } = await apiInstance.authGetEntraScopes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<string | null>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authLogin**
> TokenOut authLogin()

Authenticate with username and password and return an access token.

### Example

```typescript
import {
    Auth,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Auth(configuration);

let username: string; // (default to undefined)
let password: string; // (default to undefined)
let userAgent: string; // (optional) (default to undefined)
let xRealIp: string; // (optional) (default to undefined)
let xForwardedFor: string; // (optional) (default to undefined)
let xClientIp: string; // (optional) (default to undefined)
let sessionId: number; // (optional) (default to undefined)
let grantType: string; // (optional) (default to undefined)
let scope: string; // (optional) (default to '')
let clientId: string; // (optional) (default to undefined)
let clientSecret: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.authLogin(
    username,
    password,
    userAgent,
    xRealIp,
    xForwardedFor,
    xClientIp,
    sessionId,
    grantType,
    scope,
    clientId,
    clientSecret
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **username** | [**string**] |  | defaults to undefined|
| **password** | [**string**] |  | defaults to undefined|
| **userAgent** | [**string**] |  | (optional) defaults to undefined|
| **xRealIp** | [**string**] |  | (optional) defaults to undefined|
| **xForwardedFor** | [**string**] |  | (optional) defaults to undefined|
| **xClientIp** | [**string**] |  | (optional) defaults to undefined|
| **sessionId** | [**number**] |  | (optional) defaults to undefined|
| **grantType** | [**string**] |  | (optional) defaults to undefined|
| **scope** | [**string**] |  | (optional) defaults to ''|
| **clientId** | [**string**] |  | (optional) defaults to undefined|
| **clientSecret** | [**string**] |  | (optional) defaults to undefined|


### Return type

**TokenOut**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Invalid email or password. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authLogout**
> any authLogout()

Revoke the current session so its token can no longer authenticate.

### Example

```typescript
import {
    Auth,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Auth(configuration);

const { status, data } = await apiInstance.authLogout();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**404** | Session not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authRequestPasswordReset**
> authRequestPasswordReset(passwordResetRequestIn)

Send a password reset link if the account exists; always succeeds to prevent enumeration.

### Example

```typescript
import {
    Auth,
    Configuration,
    PasswordResetRequestIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Auth(configuration);

let passwordResetRequestIn: PasswordResetRequestIn; //
let origin: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.authRequestPasswordReset(
    passwordResetRequestIn,
    origin
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **passwordResetRequestIn** | **PasswordResetRequestIn**|  | |
| **origin** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authResetPassword**
> authResetPassword()

Validate the reset token, set the new password, and revoke all of the user\'s sessions.

### Example

```typescript
import {
    Auth,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Auth(configuration);

let token: string; //Password reset JWT token (default to undefined)

const { status, data } = await apiInstance.authResetPassword(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Password reset JWT token | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authResetPasswordForm**
> string authResetPasswordForm()

Render the fallback HTML password-reset form for when no frontend is available.

### Example

```typescript
import {
    Auth,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Auth(configuration);

let token: string; //Password reset JWT token (default to undefined)

const { status, data } = await apiInstance.authResetPasswordForm(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Password reset JWT token | defaults to undefined|


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authSearchEntraGroups**
> { [key: string]: any; } authSearchEntraGroups()

Search/browse Entra directory groups (delegated) for binding to a HUB group.

### Example

```typescript
import {
    Auth,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Auth(configuration);

let q: string; //Name/description search; empty browses alphabetically (optional) (default to undefined)
let cursor: string; //Page cursor from a prior response\'s `next` (optional) (default to undefined)
let tenantId: number; // (optional) (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.authSearchEntraGroups(
    q,
    cursor,
    tenantId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] | Name/description search; empty browses alphabetically | (optional) defaults to undefined|
| **cursor** | [**string**] | Page cursor from a prior response\&#39;s &#x60;next&#x60; | (optional) defaults to undefined|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**{ [key: string]: any; }**

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

# **authSendEmailConfirmation**
> authSendEmailConfirmation()

Send a confirmation email to the current user unless their email is already verified.

### Example

```typescript
import {
    Auth,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Auth(configuration);

let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.authSendEmailConfirmation(
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **authSsoExchange**
> TokenOut authSsoExchange(ssoExchangeIn)

Exchange an IdP authorization code (with the signed state from init) for a Hub access token. Stateless: state is an HMAC-signed JWT, not a cookie.

### Example

```typescript
import {
    Auth,
    Configuration,
    SsoExchangeIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Auth(configuration);

let slug: string; // (default to undefined)
let provider: string; // (default to undefined)
let ssoExchangeIn: SsoExchangeIn; //
let userAgent: string; // (optional) (default to undefined)
let xRealIp: string; // (optional) (default to undefined)
let xForwardedFor: string; // (optional) (default to undefined)
let xClientIp: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.authSsoExchange(
    slug,
    provider,
    ssoExchangeIn,
    userAgent,
    xRealIp,
    xForwardedFor,
    xClientIp
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ssoExchangeIn** | **SsoExchangeIn**|  | |
| **slug** | [**string**] |  | defaults to undefined|
| **provider** | [**string**] |  | defaults to undefined|
| **userAgent** | [**string**] |  | (optional) defaults to undefined|
| **xRealIp** | [**string**] |  | (optional) defaults to undefined|
| **xForwardedFor** | [**string**] |  | (optional) defaults to undefined|
| **xClientIp** | [**string**] |  | (optional) defaults to undefined|


### Return type

**TokenOut**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authSsoInit**
> SsoInitOut authSsoInit()

Return the IdP authorize URL + signed state token. No cookies, no redirect. Frontend uses the response to redirect the browser to the IdP itself.

### Example

```typescript
import {
    Auth,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Auth(configuration);

let slug: string; // (default to undefined)
let provider: string; // (default to undefined)

const { status, data } = await apiInstance.authSsoInit(
    slug,
    provider
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **slug** | [**string**] |  | defaults to undefined|
| **provider** | [**string**] |  | defaults to undefined|


### Return type

**SsoInitOut**

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

# **authSsoResolve**
> SsoResolveOut authSsoResolve()

Pre-login step: resolve a tenant from its domain and return the routing slug and available SSO providers.

### Example

```typescript
import {
    Auth,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Auth(configuration);

let domain: string; // (default to undefined)

const { status, data } = await apiInstance.authSsoResolve(
    domain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] |  | defaults to undefined|


### Return type

**SsoResolveOut**

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

