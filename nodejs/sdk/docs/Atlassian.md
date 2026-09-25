# Atlassian

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**integrationsSetAtlassianCloudId**](#integrationssetatlassiancloudid) | **PUT** /integrations/atlassian/{connector_id}/cloudid | Set active Atlassian cloud_id|

# **integrationsSetAtlassianCloudId**
> integrationsSetAtlassianCloudId(setAtlassianCloudIdRequest)

Set the active Atlassian cloud_id on this connector\'s consent.

### Example

```typescript
import {
    Atlassian,
    Configuration,
    SetAtlassianCloudIdRequest
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Atlassian(configuration);

let connectorId: string; //Public id of the Atlassian connector to configure. (default to undefined)
let setAtlassianCloudIdRequest: SetAtlassianCloudIdRequest; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.integrationsSetAtlassianCloudId(
    connectorId,
    setAtlassianCloudIdRequest,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setAtlassianCloudIdRequest** | **SetAtlassianCloudIdRequest**|  | |
| **connectorId** | [**string**] | Public id of the Atlassian connector to configure. | defaults to undefined|
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
|**404** | Connector is not connected for this user. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

