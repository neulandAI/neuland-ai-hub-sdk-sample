# neuland_hub_sdk.OneDrive

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**onedrive_capabilities**](OneDrive.md#onedrive_capabilities) | **GET** /integrations/onedrive/capabilities | Get data source capabilities
[**onedrive_get_item_info**](OneDrive.md#onedrive_get_item_info) | **GET** /integrations/onedrive/drives/{drive_id}/items/{drive_item_id} | Get a drive item
[**onedrive_get_user_info**](OneDrive.md#onedrive_get_user_info) | **GET** /integrations/onedrive/me | Get current data source user
[**onedrive_is_connected**](OneDrive.md#onedrive_is_connected) | **GET** /integrations/onedrive/connected | Check data source connection
[**onedrive_list_children**](OneDrive.md#onedrive_list_children) | **GET** /integrations/onedrive/drives/{drive_id}/items/{drive_item_id}/children | List children of a drive item
[**onedrive_list_drives**](OneDrive.md#onedrive_list_drives) | **GET** /integrations/onedrive/sites/{site_id}/drives | List drives in a site
[**onedrive_list_roots**](OneDrive.md#onedrive_list_roots) | **GET** /integrations/onedrive/roots | List top-level browse entries


# **onedrive_capabilities**
> DataSourceCapabilities onedrive_capabilities(cookie_name=cookie_name)

Get data source capabilities

Return the browse-hierarchy metadata for this data source.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.data_source_capabilities import DataSourceCapabilities
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
    api_instance = neuland_hub_sdk.OneDrive(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Get data source capabilities
        api_response = api_instance.onedrive_capabilities(cookie_name=cookie_name)
        print("The response of OneDrive->onedrive_capabilities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OneDrive->onedrive_capabilities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cookie_name** | **str**|  | [optional] 

### Return type

[**DataSourceCapabilities**](DataSourceCapabilities.md)

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

# **onedrive_get_item_info**
> DataSourceItemModel onedrive_get_item_info(drive_id, drive_item_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)

Get a drive item

Get a single data source drive item, annotated with imported counts.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.data_source_item_model import DataSourceItemModel
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
    api_instance = neuland_hub_sdk.OneDrive(api_client)
    drive_id = 'drive_id_example' # str | Id of the drive.
    drive_item_id = 'drive_item_id_example' # str | Id of the drive item.
    chat_id = 56 # int | Scope imported counts to this chat. (optional)
    library_id = 56 # int | Scope imported counts to this library. (optional)
    assistant_id = 56 # int | Scope imported counts to this assistant. (optional)
    project_id = 56 # int | Scope imported counts to this project. (optional)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Get a drive item
        api_response = api_instance.onedrive_get_item_info(drive_id, drive_item_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)
        print("The response of OneDrive->onedrive_get_item_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OneDrive->onedrive_get_item_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **drive_id** | **str**| Id of the drive. | 
 **drive_item_id** | **str**| Id of the drive item. | 
 **chat_id** | **int**| Scope imported counts to this chat. | [optional] 
 **library_id** | **int**| Scope imported counts to this library. | [optional] 
 **assistant_id** | **int**| Scope imported counts to this assistant. | [optional] 
 **project_id** | **int**| Scope imported counts to this project. | [optional] 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**DataSourceItemModel**](DataSourceItemModel.md)

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
**403** | User has not consented to the required scope. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **onedrive_get_user_info**
> DataSourceUserModel onedrive_get_user_info(cookie_name=cookie_name)

Get current data source user

Return the signed-in user's profile on this data source.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.data_source_user_model import DataSourceUserModel
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
    api_instance = neuland_hub_sdk.OneDrive(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Get current data source user
        api_response = api_instance.onedrive_get_user_info(cookie_name=cookie_name)
        print("The response of OneDrive->onedrive_get_user_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OneDrive->onedrive_get_user_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cookie_name** | **str**|  | [optional] 

### Return type

[**DataSourceUserModel**](DataSourceUserModel.md)

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
**403** | User has not consented to the required scope. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **onedrive_is_connected**
> bool onedrive_is_connected(cookie_name=cookie_name)

Check data source connection

Report whether the user has consented to this source's browse scopes.

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
    api_instance = neuland_hub_sdk.OneDrive(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Check data source connection
        api_response = api_instance.onedrive_is_connected(cookie_name=cookie_name)
        print("The response of OneDrive->onedrive_is_connected:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OneDrive->onedrive_is_connected: %s\n" % e)
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

# **onedrive_list_children**
> List[DataSourceItemModel] onedrive_list_children(drive_id, drive_item_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, recursive=recursive, cookie_name=cookie_name)

List children of a drive item

List files and folders under a drive item, annotated with imported counts.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.data_source_item_model import DataSourceItemModel
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
    api_instance = neuland_hub_sdk.OneDrive(api_client)
    drive_id = 'drive_id_example' # str | Id of the drive.
    drive_item_id = 'drive_item_id_example' # str | Id of the parent item; empty or 'root' for the drive root.
    chat_id = 56 # int | Scope imported counts to this chat. (optional)
    library_id = 56 # int | Scope imported counts to this library. (optional)
    assistant_id = 56 # int | Scope imported counts to this assistant. (optional)
    project_id = 56 # int | Scope imported counts to this project. (optional)
    recursive = False # bool | Recurse into subfolders, returning only files. (optional) (default to False)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # List children of a drive item
        api_response = api_instance.onedrive_list_children(drive_id, drive_item_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, recursive=recursive, cookie_name=cookie_name)
        print("The response of OneDrive->onedrive_list_children:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OneDrive->onedrive_list_children: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **drive_id** | **str**| Id of the drive. | 
 **drive_item_id** | **str**| Id of the parent item; empty or &#39;root&#39; for the drive root. | 
 **chat_id** | **int**| Scope imported counts to this chat. | [optional] 
 **library_id** | **int**| Scope imported counts to this library. | [optional] 
 **assistant_id** | **int**| Scope imported counts to this assistant. | [optional] 
 **project_id** | **int**| Scope imported counts to this project. | [optional] 
 **recursive** | **bool**| Recurse into subfolders, returning only files. | [optional] [default to False]
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[DataSourceItemModel]**](DataSourceItemModel.md)

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
**403** | User has not consented to the required scope. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **onedrive_list_drives**
> List[DataSourceDriveModel] onedrive_list_drives(site_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)

List drives in a site

List the drives under a site (or the user's drives for drive-rooted sources).

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.data_source_drive_model import DataSourceDriveModel
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
    api_instance = neuland_hub_sdk.OneDrive(api_client)
    site_id = 'site_id_example' # str | Id of the site to list drives for.
    chat_id = 56 # int | Scope imported counts to this chat. (optional)
    library_id = 56 # int | Scope imported counts to this library. (optional)
    assistant_id = 56 # int | Scope imported counts to this assistant. (optional)
    project_id = 56 # int | Scope imported counts to this project. (optional)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # List drives in a site
        api_response = api_instance.onedrive_list_drives(site_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)
        print("The response of OneDrive->onedrive_list_drives:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OneDrive->onedrive_list_drives: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **site_id** | **str**| Id of the site to list drives for. | 
 **chat_id** | **int**| Scope imported counts to this chat. | [optional] 
 **library_id** | **int**| Scope imported counts to this library. | [optional] 
 **assistant_id** | **int**| Scope imported counts to this assistant. | [optional] 
 **project_id** | **int**| Scope imported counts to this project. | [optional] 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[DataSourceDriveModel]**](DataSourceDriveModel.md)

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
**403** | User has not consented to the required scope. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **onedrive_list_roots**
> ResponseOnedriveListRoots onedrive_list_roots(chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)

List top-level browse entries

List the source's top-level browse entries (sites or drives) with imported counts.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.response_onedrive_list_roots import ResponseOnedriveListRoots
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
    api_instance = neuland_hub_sdk.OneDrive(api_client)
    chat_id = 56 # int | Scope imported counts to this chat. (optional)
    library_id = 56 # int | Scope imported counts to this library. (optional)
    assistant_id = 56 # int | Scope imported counts to this assistant. (optional)
    project_id = 56 # int | Scope imported counts to this project. (optional)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # List top-level browse entries
        api_response = api_instance.onedrive_list_roots(chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)
        print("The response of OneDrive->onedrive_list_roots:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OneDrive->onedrive_list_roots: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **int**| Scope imported counts to this chat. | [optional] 
 **library_id** | **int**| Scope imported counts to this library. | [optional] 
 **assistant_id** | **int**| Scope imported counts to this assistant. | [optional] 
 **project_id** | **int**| Scope imported counts to this project. | [optional] 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**ResponseOnedriveListRoots**](ResponseOnedriveListRoots.md)

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
**403** | User has not consented to the required scope. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

