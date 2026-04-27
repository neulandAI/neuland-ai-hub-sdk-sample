# neuland_hub_sdk.Tool

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**update_tool**](Tool.md#update_tool) | **PATCH** /tools/{tool_id} | Update Tool


# **update_tool**
> ToolOut update_tool(tool_id, tool_update, cookie_name=cookie_name)

Update Tool

Update a tool (superadmin only)

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tool_out import ToolOut
from neuland_hub_sdk.models.tool_update import ToolUpdate
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.Tool(api_client)
    tool_id = 56 # int | 
    tool_update = neuland_hub_sdk.ToolUpdate() # ToolUpdate | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Tool
        api_response = api_instance.update_tool(tool_id, tool_update, cookie_name=cookie_name)
        print("The response of Tool->update_tool:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Tool->update_tool: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tool_id** | **int**|  | 
 **tool_update** | [**ToolUpdate**](ToolUpdate.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**ToolOut**](ToolOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

