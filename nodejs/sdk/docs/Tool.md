# Tool

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**toolsUpdateTool**](#toolsupdatetool) | **PATCH** /tools/{tool_id} | Update a tool|

# **toolsUpdateTool**
> ToolOut toolsUpdateTool(toolUpdate)

Update a tool\'s editable fields (superadmin only).

### Example

```typescript
import {
    Tool,
    Configuration,
    ToolUpdate
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Tool(configuration);

let toolId: number; //ID of the tool to update. (default to undefined)
let toolUpdate: ToolUpdate; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.toolsUpdateTool(
    toolId,
    toolUpdate,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **toolUpdate** | **ToolUpdate**|  | |
| **toolId** | [**number**] | ID of the tool to update. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ToolOut**

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
|**403** | Caller is not a superadmin. |  -  |
|**404** | No tool exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

