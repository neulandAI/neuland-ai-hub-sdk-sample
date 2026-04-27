# neuland_hub_sdk.Sharepoint

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_item_info**](Sharepoint.md#get_item_info) | **GET** /integrations/sharepoint/drives/{drive_id}/items/{drive_item_id} | Get Item Info
[**get_user_info**](Sharepoint.md#get_user_info) | **GET** /integrations/sharepoint/me | Get User Info
[**is_connected**](Sharepoint.md#is_connected) | **GET** /integrations/sharepoint/connected | Is Connected
[**list_all_sites**](Sharepoint.md#list_all_sites) | **GET** /integrations/sharepoint/sites | List All Sites
[**list_children**](Sharepoint.md#list_children) | **GET** /integrations/sharepoint/drives/{drive_id}/items/{drive_item_id}/children | List Children
[**list_drives**](Sharepoint.md#list_drives) | **GET** /integrations/sharepoint/sites/{site_id}/drives | List Drives


# **get_item_info**
> SharepointItemModel get_item_info(drive_id, drive_item_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)

Get Item Info

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.sharepoint_item_model import SharepointItemModel
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
    api_instance = neuland_hub_sdk.Sharepoint(api_client)
    drive_id = 'drive_id_example' # str | 
    drive_item_id = 'drive_item_id_example' # str | 
    chat_id = 56 # int |  (optional)
    library_id = 56 # int |  (optional)
    assistant_id = 56 # int |  (optional)
    project_id = 56 # int |  (optional)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Get Item Info
        api_response = api_instance.get_item_info(drive_id, drive_item_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)
        print("The response of Sharepoint->get_item_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Sharepoint->get_item_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **drive_id** | **str**|  | 
 **drive_item_id** | **str**|  | 
 **chat_id** | **int**|  | [optional] 
 **library_id** | **int**|  | [optional] 
 **assistant_id** | **int**|  | [optional] 
 **project_id** | **int**|  | [optional] 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**SharepointItemModel**](SharepointItemModel.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_info**
> SharepointUserModel get_user_info(cookie_name=cookie_name)

Get User Info

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.sharepoint_user_model import SharepointUserModel
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
    api_instance = neuland_hub_sdk.Sharepoint(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Get User Info
        api_response = api_instance.get_user_info(cookie_name=cookie_name)
        print("The response of Sharepoint->get_user_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Sharepoint->get_user_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cookie_name** | **str**|  | [optional] 

### Return type

[**SharepointUserModel**](SharepointUserModel.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **is_connected**
> bool is_connected(cookie_name=cookie_name)

Is Connected

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
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
    api_instance = neuland_hub_sdk.Sharepoint(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Is Connected
        api_response = api_instance.is_connected(cookie_name=cookie_name)
        print("The response of Sharepoint->is_connected:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Sharepoint->is_connected: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cookie_name** | **str**|  | [optional] 

### Return type

**bool**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_all_sites**
> List[SharepointSiteModel] list_all_sites(chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)

List All Sites

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.sharepoint_site_model import SharepointSiteModel
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
    api_instance = neuland_hub_sdk.Sharepoint(api_client)
    chat_id = 56 # int |  (optional)
    library_id = 56 # int |  (optional)
    assistant_id = 56 # int |  (optional)
    project_id = 56 # int |  (optional)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # List All Sites
        api_response = api_instance.list_all_sites(chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)
        print("The response of Sharepoint->list_all_sites:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Sharepoint->list_all_sites: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **int**|  | [optional] 
 **library_id** | **int**|  | [optional] 
 **assistant_id** | **int**|  | [optional] 
 **project_id** | **int**|  | [optional] 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[SharepointSiteModel]**](SharepointSiteModel.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_children**
> List[SharepointItemModel] list_children(drive_id, drive_item_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, recursive=recursive, cookie_name=cookie_name)

List Children

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.sharepoint_item_model import SharepointItemModel
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
    api_instance = neuland_hub_sdk.Sharepoint(api_client)
    drive_id = 'drive_id_example' # str | 
    drive_item_id = 'drive_item_id_example' # str | 
    chat_id = 56 # int |  (optional)
    library_id = 56 # int |  (optional)
    assistant_id = 56 # int |  (optional)
    project_id = 56 # int |  (optional)
    recursive = False # bool |  (optional) (default to False)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # List Children
        api_response = api_instance.list_children(drive_id, drive_item_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, recursive=recursive, cookie_name=cookie_name)
        print("The response of Sharepoint->list_children:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Sharepoint->list_children: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **drive_id** | **str**|  | 
 **drive_item_id** | **str**|  | 
 **chat_id** | **int**|  | [optional] 
 **library_id** | **int**|  | [optional] 
 **assistant_id** | **int**|  | [optional] 
 **project_id** | **int**|  | [optional] 
 **recursive** | **bool**|  | [optional] [default to False]
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[SharepointItemModel]**](SharepointItemModel.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_drives**
> List[SharepointDriveModel] list_drives(site_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)

List Drives

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.sharepoint_drive_model import SharepointDriveModel
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
    api_instance = neuland_hub_sdk.Sharepoint(api_client)
    site_id = 'site_id_example' # str | 
    chat_id = 56 # int |  (optional)
    library_id = 56 # int |  (optional)
    assistant_id = 56 # int |  (optional)
    project_id = 56 # int |  (optional)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # List Drives
        api_response = api_instance.list_drives(site_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)
        print("The response of Sharepoint->list_drives:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Sharepoint->list_drives: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **site_id** | **str**|  | 
 **chat_id** | **int**|  | [optional] 
 **library_id** | **int**|  | [optional] 
 **assistant_id** | **int**|  | [optional] 
 **project_id** | **int**|  | [optional] 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[SharepointDriveModel]**](SharepointDriveModel.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

