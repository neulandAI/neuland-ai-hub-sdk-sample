# neuland_hub_sdk.Dropbox

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dropbox_capabilities**](Dropbox.md#dropbox_capabilities) | **GET** /integrations/dropbox/capabilities | Get data source capabilities
[**dropbox_get_item_info**](Dropbox.md#dropbox_get_item_info) | **GET** /integrations/dropbox/drives/{drive_id}/items/{drive_item_id} | Get a drive item
[**dropbox_get_user_info**](Dropbox.md#dropbox_get_user_info) | **GET** /integrations/dropbox/me | Get connected user profile
[**dropbox_is_connected**](Dropbox.md#dropbox_is_connected) | **GET** /integrations/dropbox/connected | Check connection status
[**dropbox_list_children**](Dropbox.md#dropbox_list_children) | **GET** /integrations/dropbox/drives/{drive_id}/items/{drive_item_id}/children | List children of a drive item
[**dropbox_list_drives**](Dropbox.md#dropbox_list_drives) | **GET** /integrations/dropbox/sites/{site_id}/drives | List drives in a site
[**dropbox_list_roots**](Dropbox.md#dropbox_list_roots) | **GET** /integrations/dropbox/roots | List top-level browse entries


# **dropbox_capabilities**
> DataSourceCapabilities dropbox_capabilities(cookie_name=cookie_name)

Get data source capabilities

Return the browse-hierarchy metadata (root kind, depth) for this source.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.dropbox import Dropbox
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


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = Dropbox(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Get data source capabilities
        api_response = api_instance.dropbox_capabilities(cookie_name=cookie_name)
        print("The response of Dropbox->dropbox_capabilities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Dropbox->dropbox_capabilities: %s\n" % e)
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

# **dropbox_get_item_info**
> DataSourceItemModel dropbox_get_item_info(drive_id, drive_item_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)

Get a drive item

Fetch a single drive item's metadata, with imported flag/count.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.dropbox import Dropbox
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


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = Dropbox(api_client)
    drive_id = 'drive_id_example' # str | Id of the drive.
    drive_item_id = 'drive_item_id_example' # str | Id of the item.
    chat_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this chat. (optional)
    library_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this library. (optional)
    assistant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this assistant. (optional)
    project_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this project. (optional)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Get a drive item
        api_response = api_instance.dropbox_get_item_info(drive_id, drive_item_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)
        print("The response of Dropbox->dropbox_get_item_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Dropbox->dropbox_get_item_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **drive_id** | **str**| Id of the drive. | 
 **drive_item_id** | **str**| Id of the item. | 
 **chat_id** | **UUID**| Scope imported counts to this chat. | [optional] 
 **library_id** | **UUID**| Scope imported counts to this library. | [optional] 
 **assistant_id** | **UUID**| Scope imported counts to this assistant. | [optional] 
 **project_id** | **UUID**| Scope imported counts to this project. | [optional] 
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
**401** | Missing authentication or connector consent required. |  -  |
**403** | Connector token lacks the required permissions. |  -  |
**404** | No drive or item exists with the given ids. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dropbox_get_user_info**
> DataSourceUserModel dropbox_get_user_info(cookie_name=cookie_name)

Get connected user profile

Return the current user's profile on the data source.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.dropbox import Dropbox
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


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = Dropbox(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Get connected user profile
        api_response = api_instance.dropbox_get_user_info(cookie_name=cookie_name)
        print("The response of Dropbox->dropbox_get_user_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Dropbox->dropbox_get_user_info: %s\n" % e)
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
**401** | Missing authentication or connector consent required. |  -  |
**403** | Connector token lacks the required permissions. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dropbox_is_connected**
> bool dropbox_is_connected(cookie_name=cookie_name)

Check connection status

Report whether the current user has granted consent to browse this source.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.dropbox import Dropbox
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


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = Dropbox(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Check connection status
        api_response = api_instance.dropbox_is_connected(cookie_name=cookie_name)
        print("The response of Dropbox->dropbox_is_connected:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Dropbox->dropbox_is_connected: %s\n" % e)
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

# **dropbox_list_children**
> List[DataSourceItemModel] dropbox_list_children(drive_id, drive_item_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, recursive=recursive, cookie_name=cookie_name)

List children of a drive item

List the immediate children of a drive item, with imported flags/counts.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.dropbox import Dropbox
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


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = Dropbox(api_client)
    drive_id = 'drive_id_example' # str | Id of the drive.
    drive_item_id = 'drive_item_id_example' # str | Id of the folder item, or 'root'.
    chat_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this chat. (optional)
    library_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this library. (optional)
    assistant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this assistant. (optional)
    project_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this project. (optional)
    recursive = False # bool | Recurse into subfolders and return all descendant files. (optional) (default to False)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # List children of a drive item
        api_response = api_instance.dropbox_list_children(drive_id, drive_item_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, recursive=recursive, cookie_name=cookie_name)
        print("The response of Dropbox->dropbox_list_children:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Dropbox->dropbox_list_children: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **drive_id** | **str**| Id of the drive. | 
 **drive_item_id** | **str**| Id of the folder item, or &#39;root&#39;. | 
 **chat_id** | **UUID**| Scope imported counts to this chat. | [optional] 
 **library_id** | **UUID**| Scope imported counts to this library. | [optional] 
 **assistant_id** | **UUID**| Scope imported counts to this assistant. | [optional] 
 **project_id** | **UUID**| Scope imported counts to this project. | [optional] 
 **recursive** | **bool**| Recurse into subfolders and return all descendant files. | [optional] [default to False]
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
**401** | Missing authentication or connector consent required. |  -  |
**403** | Connector token lacks the required permissions. |  -  |
**404** | No drive or item exists with the given ids. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dropbox_list_drives**
> List[DataSourceDriveModel] dropbox_list_drives(site_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)

List drives in a site

List drives under a site, with imported counts per drive.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.dropbox import Dropbox
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


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = Dropbox(api_client)
    site_id = 'site_id_example' # str | Id of the site to list drives for.
    chat_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this chat. (optional)
    library_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this library. (optional)
    assistant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this assistant. (optional)
    project_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this project. (optional)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # List drives in a site
        api_response = api_instance.dropbox_list_drives(site_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)
        print("The response of Dropbox->dropbox_list_drives:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Dropbox->dropbox_list_drives: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **site_id** | **str**| Id of the site to list drives for. | 
 **chat_id** | **UUID**| Scope imported counts to this chat. | [optional] 
 **library_id** | **UUID**| Scope imported counts to this library. | [optional] 
 **assistant_id** | **UUID**| Scope imported counts to this assistant. | [optional] 
 **project_id** | **UUID**| Scope imported counts to this project. | [optional] 
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
**401** | Missing authentication or connector consent required. |  -  |
**403** | Connector token lacks the required permissions. |  -  |
**404** | No site exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dropbox_list_roots**
> ResponseDropboxListRoots dropbox_list_roots(chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)

List top-level browse entries

List the top-level browse entries (sites or drives), with imported counts.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.dropbox import Dropbox
from neuland_hub_sdk.models.response_dropbox_list_roots import ResponseDropboxListRoots
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


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = Dropbox(api_client)
    chat_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this chat. (optional)
    library_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this library. (optional)
    assistant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this assistant. (optional)
    project_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope imported counts to this project. (optional)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # List top-level browse entries
        api_response = api_instance.dropbox_list_roots(chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)
        print("The response of Dropbox->dropbox_list_roots:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Dropbox->dropbox_list_roots: %s\n" % e)
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

[**ResponseDropboxListRoots**](ResponseDropboxListRoots.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Missing authentication or connector consent required. |  -  |
**403** | Connector token lacks the required permissions. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

