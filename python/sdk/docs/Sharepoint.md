# neuland_hub_sdk.Sharepoint

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**integrations_get_item_info**](Sharepoint.md#integrations_get_item_info) | **GET** /integrations/sharepoint/drives/{drive_id}/items/{drive_item_id} | Get a drive item
[**integrations_get_user_info**](Sharepoint.md#integrations_get_user_info) | **GET** /integrations/sharepoint/me | Get current SharePoint user
[**integrations_is_connected**](Sharepoint.md#integrations_is_connected) | **GET** /integrations/sharepoint/connected | Check SharePoint connection
[**integrations_list_all_sites**](Sharepoint.md#integrations_list_all_sites) | **GET** /integrations/sharepoint/sites | List SharePoint sites
[**integrations_list_children**](Sharepoint.md#integrations_list_children) | **GET** /integrations/sharepoint/drives/{drive_id}/items/{drive_item_id}/children | List children of a drive item
[**integrations_list_drives**](Sharepoint.md#integrations_list_drives) | **GET** /integrations/sharepoint/sites/{site_id}/drives | List drives in a site


# **integrations_get_item_info**
> SharepointItemModel integrations_get_item_info(drive_id, drive_item_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)

Get a drive item

Get a single SharePoint drive item, annotated with imported counts.

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
    drive_id = 'drive_id_example' # str | Id of the drive.
    drive_item_id = 'drive_item_id_example' # str | Id of the drive item.
    chat_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this chat. (optional)
    library_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this library. (optional)
    assistant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this assistant. (optional)
    project_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this project. (optional)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Get a drive item
        api_response = api_instance.integrations_get_item_info(drive_id, drive_item_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)
        print("The response of Sharepoint->integrations_get_item_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Sharepoint->integrations_get_item_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **drive_id** | **str**| Id of the drive. | 
 **drive_item_id** | **str**| Id of the drive item. | 
 **chat_id** | **UUID**| Scope imported counts to this chat. | [optional] 
 **library_id** | **UUID**| Scope imported counts to this library. | [optional] 
 **assistant_id** | **UUID**| Scope imported counts to this assistant. | [optional] 
 **project_id** | **UUID**| Scope imported counts to this project. | [optional] 
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
**401** | Missing or invalid authentication, or no valid connector token. |  -  |
**403** | User has not consented to the required SharePoint scope. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integrations_get_user_info**
> SharepointUserModel integrations_get_user_info(cookie_name=cookie_name)

Get current SharePoint user

Return the signed-in user's SharePoint / Microsoft Graph profile.

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
        # Get current SharePoint user
        api_response = api_instance.integrations_get_user_info(cookie_name=cookie_name)
        print("The response of Sharepoint->integrations_get_user_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Sharepoint->integrations_get_user_info: %s\n" % e)
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
**401** | Missing or invalid authentication, or no valid connector token. |  -  |
**403** | User has not consented to the required SharePoint scope. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integrations_is_connected**
> bool integrations_is_connected(cookie_name=cookie_name)

Check SharePoint connection

Report whether the user has consented to the SharePoint file-read scope.

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
        # Check SharePoint connection
        api_response = api_instance.integrations_is_connected(cookie_name=cookie_name)
        print("The response of Sharepoint->integrations_is_connected:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Sharepoint->integrations_is_connected: %s\n" % e)
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
**401** | Missing or invalid authentication. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integrations_list_all_sites**
> List[SharepointSiteModel] integrations_list_all_sites(chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)

List SharePoint sites

List the SharePoint sites the user can access, with imported document counts.

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
    chat_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this chat. (optional)
    library_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this library. (optional)
    assistant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this assistant. (optional)
    project_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this project. (optional)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # List SharePoint sites
        api_response = api_instance.integrations_list_all_sites(chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)
        print("The response of Sharepoint->integrations_list_all_sites:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Sharepoint->integrations_list_all_sites: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **UUID**| Scope imported counts to this chat. | [optional] 
 **library_id** | **UUID**| Scope imported counts to this library. | [optional] 
 **assistant_id** | **UUID**| Scope imported counts to this assistant. | [optional] 
 **project_id** | **UUID**| Scope imported counts to this project. | [optional] 
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
**401** | Missing or invalid authentication, or no valid connector token. |  -  |
**403** | User has not consented to the required SharePoint scope. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integrations_list_children**
> List[SharepointItemModel] integrations_list_children(drive_id, drive_item_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, recursive=recursive, cookie_name=cookie_name)

List children of a drive item

List files and folders under a drive item, annotated with imported counts.

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
    drive_id = 'drive_id_example' # str | Id of the drive.
    drive_item_id = 'drive_item_id_example' # str | Id of the parent item; empty or 'root' for the drive root.
    chat_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this chat. (optional)
    library_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this library. (optional)
    assistant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this assistant. (optional)
    project_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this project. (optional)
    recursive = False # bool | Recurse into subfolders, returning only files. (optional) (default to False)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # List children of a drive item
        api_response = api_instance.integrations_list_children(drive_id, drive_item_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, recursive=recursive, cookie_name=cookie_name)
        print("The response of Sharepoint->integrations_list_children:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Sharepoint->integrations_list_children: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **drive_id** | **str**| Id of the drive. | 
 **drive_item_id** | **str**| Id of the parent item; empty or &#39;root&#39; for the drive root. | 
 **chat_id** | **UUID**| Scope imported counts to this chat. | [optional] 
 **library_id** | **UUID**| Scope imported counts to this library. | [optional] 
 **assistant_id** | **UUID**| Scope imported counts to this assistant. | [optional] 
 **project_id** | **UUID**| Scope imported counts to this project. | [optional] 
 **recursive** | **bool**| Recurse into subfolders, returning only files. | [optional] [default to False]
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
**401** | Missing or invalid authentication, or no valid connector token. |  -  |
**403** | User has not consented to the required SharePoint scope. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integrations_list_drives**
> List[SharepointDriveModel] integrations_list_drives(site_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)

List drives in a site

List the document libraries (drives) within a SharePoint site.

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
    site_id = 'site_id_example' # str | SharePoint site id.
    chat_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this chat. (optional)
    library_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this library. (optional)
    assistant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this assistant. (optional)
    project_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this project. (optional)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # List drives in a site
        api_response = api_instance.integrations_list_drives(site_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)
        print("The response of Sharepoint->integrations_list_drives:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Sharepoint->integrations_list_drives: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **site_id** | **str**| SharePoint site id. | 
 **chat_id** | **UUID**| Scope imported counts to this chat. | [optional] 
 **library_id** | **UUID**| Scope imported counts to this library. | [optional] 
 **assistant_id** | **UUID**| Scope imported counts to this assistant. | [optional] 
 **project_id** | **UUID**| Scope imported counts to this project. | [optional] 
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
**401** | Missing or invalid authentication, or no valid connector token. |  -  |
**403** | User has not consented to the required SharePoint scope. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

