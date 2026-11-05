# CustomConnector

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**customconnectorsCreateCustomConnectors**](#customconnectorscreatecustomconnectors) | **POST** /custom-connectors/ | Add one or more custom MCPs|
|[**customconnectorsCustomConnectorClientMetadata**](#customconnectorscustomconnectorclientmetadata) | **GET** /custom-connectors/oauth/client-metadata.json | The Hub\&#39;s OAuth client metadata document (CIMD)|
|[**customconnectorsDeleteCustomConnector**](#customconnectorsdeletecustomconnector) | **DELETE** /custom-connectors/{public_id} | Delete a custom MCP|
|[**customconnectorsDetectCustomConnector**](#customconnectorsdetectcustomconnector) | **POST** /custom-connectors/detect | Detect how an MCP server wants to be signed in to|
|[**customconnectorsFinishCustomConnectorSignIn**](#customconnectorsfinishcustomconnectorsignin) | **GET** /custom-connectors/oauth/callback | Finish signing in to a custom MCP|
|[**customconnectorsListCustomConnectors**](#customconnectorslistcustomconnectors) | **GET** /custom-connectors/ | List the custom MCPs I can use or manage|
|[**customconnectorsSignOutOfCustomConnector**](#customconnectorssignoutofcustomconnector) | **DELETE** /custom-connectors/{public_id}/oauth | Sign out of a custom MCP|
|[**customconnectorsStartCustomConnectorSignIn**](#customconnectorsstartcustomconnectorsignin) | **POST** /custom-connectors/{public_id}/oauth/start | Start signing in to a custom MCP|
|[**customconnectorsUpdateCustomConnector**](#customconnectorsupdatecustomconnector) | **PATCH** /custom-connectors/{public_id} | Rename or switch a custom MCP|

# **customconnectorsCreateCustomConnectors**
> Array<CustomConnectorOut> customconnectorsCreateCustomConnectors(customConnectorCreate)

Add MCP servers from a URL or a pasted JSON config.  A JSON config can declare several servers; all of them are added, so pasting a real config does not silently drop the entries after the first. The whole request is rejected if any entry is invalid. An OAuth server is checked for sign-in metadata and its client is set up here, once for all its users.

### Example

```typescript
import {
    CustomConnector,
    Configuration,
    CustomConnectorCreate
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new CustomConnector(configuration);

let customConnectorCreate: CustomConnectorCreate; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.customconnectorsCreateCustomConnectors(
    customConnectorCreate,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customConnectorCreate** | **CustomConnectorCreate**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<CustomConnectorOut>**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**422** | Malformed config, a stdio server, a non-http(s) URL, a URL that does not resolve to a public address, an OAuth setup the server rejects, or too many MCPs. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customconnectorsCustomConnectorClientMetadata**
> { [key: string]: any; } customconnectorsCustomConnectorClientMetadata()

Authorization servers that accept URL client ids fetch this to learn the Hub\'s name and redirect URI. Public by design: it holds no secret.

### Example

```typescript
import {
    CustomConnector,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new CustomConnector(configuration);

const { status, data } = await apiInstance.customconnectorsCustomConnectorClientMetadata();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**{ [key: string]: any; }**

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

# **customconnectorsDeleteCustomConnector**
> customconnectorsDeleteCustomConnector()

Deletes every user\'s sign-in with it (cascade).

### Example

```typescript
import {
    CustomConnector,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new CustomConnector(configuration);

let publicId: string; //Public id of the MCP. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.customconnectorsDeleteCustomConnector(
    publicId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **publicId** | [**string**] | Public id of the MCP. | defaults to undefined|
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

# **customconnectorsDetectCustomConnector**
> DetectOut customconnectorsDetectCustomConnector(detectIn)

Connect once without signing in. A server that lists its tools needs no sign-in; one that answers 401 is checked for OAuth metadata.

### Example

```typescript
import {
    CustomConnector,
    Configuration,
    DetectIn
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new CustomConnector(configuration);

let detectIn: DetectIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.customconnectorsDetectCustomConnector(
    detectIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **detectIn** | **DetectIn**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**DetectOut**

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

# **customconnectorsFinishCustomConnectorSignIn**
> CallbackOut customconnectorsFinishCustomConnectorSignIn()

Called by the Hub\'s callback page with the query the authorization server redirected the browser to. The state must have been issued to this same user.

### Example

```typescript
import {
    CustomConnector,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new CustomConnector(configuration);

let state: string; // (optional) (default to undefined)
let code: string; // (optional) (default to undefined)
let error: string; // (optional) (default to undefined)
let errorDescription: string; // (optional) (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.customconnectorsFinishCustomConnectorSignIn(
    state,
    code,
    error,
    errorDescription,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **state** | [**string**] |  | (optional) defaults to undefined|
| **code** | [**string**] |  | (optional) defaults to undefined|
| **error** | [**string**] |  | (optional) defaults to undefined|
| **errorDescription** | [**string**] |  | (optional) defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CallbackOut**

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

# **customconnectorsListCustomConnectors**
> Array<CustomConnectorOut> customconnectorsListCustomConnectors()


### Example

```typescript
import {
    CustomConnector,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new CustomConnector(configuration);

let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.customconnectorsListCustomConnectors(
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<CustomConnectorOut>**

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

# **customconnectorsSignOutOfCustomConnector**
> customconnectorsSignOutOfCustomConnector()

Forget the caller\'s tokens. The server\'s own session is not revoked.

### Example

```typescript
import {
    CustomConnector,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new CustomConnector(configuration);

let publicId: string; //Public id of the MCP. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.customconnectorsSignOutOfCustomConnector(
    publicId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **publicId** | [**string**] | Public id of the MCP. | defaults to undefined|
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

# **customconnectorsStartCustomConnectorSignIn**
> SignInOut customconnectorsStartCustomConnectorSignIn()

The authorization URL to send the browser to. The single-use `state` binds the callback to this user and this MCP.

### Example

```typescript
import {
    CustomConnector,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new CustomConnector(configuration);

let publicId: string; //Public id of the MCP. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.customconnectorsStartCustomConnectorSignIn(
    publicId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **publicId** | [**string**] | Public id of the MCP. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SignInOut**

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

# **customconnectorsUpdateCustomConnector**
> CustomConnectorOut customconnectorsUpdateCustomConnector(customConnectorUpdate)

`enabled` on an organisation MCP is the caller\'s own switch, so anyone who may use it may flip it. Everything else needs `_may_manage`. URL, headers and auth are not editable: re-add, so a changed endpoint is always re-validated.

### Example

```typescript
import {
    CustomConnector,
    Configuration,
    CustomConnectorUpdate
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new CustomConnector(configuration);

let publicId: string; //Public id of the MCP. (default to undefined)
let customConnectorUpdate: CustomConnectorUpdate; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.customconnectorsUpdateCustomConnector(
    publicId,
    customConnectorUpdate,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customConnectorUpdate** | **CustomConnectorUpdate**|  | |
| **publicId** | [**string**] | Public id of the MCP. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CustomConnectorOut**

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

