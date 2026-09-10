# neuland_hub_sdk.Atlassian

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**integrations_set_atlassian_cloud_id**](Atlassian.md#integrations_set_atlassian_cloud_id) | **PUT** /integrations/atlassian/{connector_id}/cloudid | Set active Atlassian cloud_id


# **integrations_set_atlassian_cloud_id**
> integrations_set_atlassian_cloud_id(connector_id, set_atlassian_cloud_id_request, cookie_name=cookie_name)

Set active Atlassian cloud_id

Set the active Atlassian cloud_id on this connector's consent.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.set_atlassian_cloud_id_request import SetAtlassianCloudIdRequest
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
    api_instance = neuland_hub_sdk.Atlassian(api_client)
    connector_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the Atlassian connector to configure.
    set_atlassian_cloud_id_request = neuland_hub_sdk.SetAtlassianCloudIdRequest() # SetAtlassianCloudIdRequest | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Set active Atlassian cloud_id
        api_instance.integrations_set_atlassian_cloud_id(connector_id, set_atlassian_cloud_id_request, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Atlassian->integrations_set_atlassian_cloud_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connector_id** | **UUID**| Public id of the Atlassian connector to configure. | 
 **set_atlassian_cloud_id_request** | [**SetAtlassianCloudIdRequest**](SetAtlassianCloudIdRequest.md)|  | 
 **cookie_name** | **str**|  | [optional] 

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
**204** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**404** | Connector is not connected for this user. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

