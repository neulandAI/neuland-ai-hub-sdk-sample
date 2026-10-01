# CustomConnector

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**customconnectorsCreateCustomConnectors**](#customconnectorscreatecustomconnectors) | **POST** /custom-connectors/ | Add one or more custom connectors|
|[**customconnectorsDeleteCustomConnector**](#customconnectorsdeletecustomconnector) | **DELETE** /custom-connectors/{public_id} | Delete a custom connector|
|[**customconnectorsListCustomConnectors**](#customconnectorslistcustomconnectors) | **GET** /custom-connectors/ | List my custom connectors|
|[**customconnectorsUpdateCustomConnector**](#customconnectorsupdatecustomconnector) | **PATCH** /custom-connectors/{public_id} | Rename or enable/disable a custom connector|

# **customconnectorsCreateCustomConnectors**
> Array<CustomConnectorOut> customconnectorsCreateCustomConnectors(customConnectorCreate)

Add MCP servers from a URL or a pasted JSON config.  A JSON config can declare several servers; all of them are added, so pasting a real config does not silently drop the entries after the first. The whole request is rejected if any entry is invalid.

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
|**422** | Malformed config, a stdio server, a non-http(s) URL, a URL that does not resolve to a public address, or too many connectors. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customconnectorsDeleteCustomConnector**
> customconnectorsDeleteCustomConnector()


### Example

```typescript
import {
    CustomConnector,
    Configuration
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new CustomConnector(configuration);

let publicId: string; //Public id of the connector. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.customconnectorsDeleteCustomConnector(
    publicId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **publicId** | [**string**] | Public id of the connector. | defaults to undefined|
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

# **customconnectorsUpdateCustomConnector**
> CustomConnectorOut customconnectorsUpdateCustomConnector(customConnectorUpdate)

URL and headers are not editable: re-add, so a changed endpoint is always re-validated.

### Example

```typescript
import {
    CustomConnector,
    Configuration,
    CustomConnectorUpdate
} from '@neulandai/neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new CustomConnector(configuration);

let publicId: string; //Public id of the connector. (default to undefined)
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
| **publicId** | [**string**] | Public id of the connector. | defaults to undefined|
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

