# neuland_hub_sdk.ApplicationMarketplace

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**application_add_tag_to_catalog**](ApplicationMarketplace.md#application_add_tag_to_catalog) | **POST** /marketplace/application/catalog/{catalog_id}/tags/{tag_id} | Attach a tag to a marketplace application
[**application_create_catalog**](ApplicationMarketplace.md#application_create_catalog) | **POST** /marketplace/application/catalog/ | Publish a marketplace application
[**application_install_from_catalog**](ApplicationMarketplace.md#application_install_from_catalog) | **POST** /marketplace/application/catalog/{catalog_id}/install | Install a marketplace application into the caller&#39;s tenant
[**application_list_catalog**](ApplicationMarketplace.md#application_list_catalog) | **GET** /marketplace/application/catalog/ | List all application catalog items — superadmin only
[**application_remove_tag_from_catalog**](ApplicationMarketplace.md#application_remove_tag_from_catalog) | **DELETE** /marketplace/application/catalog/{catalog_id}/tags/{tag_id} | Detach a tag from a marketplace application
[**application_uninstall_from_catalog**](ApplicationMarketplace.md#application_uninstall_from_catalog) | **DELETE** /marketplace/application/catalog/{catalog_id}/install | Uninstall a marketplace application for the caller
[**application_update_catalog**](ApplicationMarketplace.md#application_update_catalog) | **PATCH** /marketplace/application/catalog/{catalog_id} | Update a marketplace application&#39;s metadata
[**application_update_catalog_state**](ApplicationMarketplace.md#application_update_catalog_state) | **PATCH** /marketplace/application/catalog/{catalog_id}/state | Toggle a marketplace application&#39;s lifecycle state


# **application_add_tag_to_catalog**
> Tagging application_add_tag_to_catalog(catalog_id, tag_id, cookie_name=cookie_name)

Attach a tag to a marketplace application

Attach a tenant-scoped tag to a marketplace application catalog item.

Tags are per-tenant: the same catalog application can carry different tag
labels in different tenants, and the marketplace view surfaces only the
caller's tenant's tags on each row.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.application_marketplace import ApplicationMarketplace
from neuland_hub_sdk.models.tagging import Tagging
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
    api_instance = ApplicationMarketplace(api_client)
    catalog_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the catalog application to tag.
    tag_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Attach a tag to a marketplace application
        api_response = api_instance.application_add_tag_to_catalog(catalog_id, tag_id, cookie_name=cookie_name)
        print("The response of ApplicationMarketplace->application_add_tag_to_catalog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationMarketplace->application_add_tag_to_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalog_id** | **UUID**| Public id of the catalog application to tag. | 
 **tag_id** | **UUID**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Tagging**](Tagging.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | The tag does not belong to the caller&#39;s tenant. |  -  |
**404** | The catalog application or the tag was not found. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_create_catalog**
> object application_create_catalog(application_catalog_in, cookie_name=cookie_name)

Publish a marketplace application

Publish a new application to the marketplace catalog (superadmin only).

### Example

* Api Key Authentication (APIKeyHeader):

```python
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.application_marketplace import ApplicationMarketplace
from neuland_hub_sdk.models.application_catalog_in import ApplicationCatalogIn
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
    api_instance = ApplicationMarketplace(api_client)
    application_catalog_in = neuland_hub_sdk.ApplicationCatalogIn() # ApplicationCatalogIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Publish a marketplace application
        api_response = api_instance.application_create_catalog(application_catalog_in, cookie_name=cookie_name)
        print("The response of ApplicationMarketplace->application_create_catalog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationMarketplace->application_create_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_catalog_in** | [**ApplicationCatalogIn**](ApplicationCatalogIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Superadmin privileges required. |  -  |
**422** | Payload validation failed (e.g. name over 100 chars, duplicate name/app_url). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_install_from_catalog**
> Application application_install_from_catalog(catalog_id, cookie_name=cookie_name)

Install a marketplace application into the caller's tenant

Materialize a per-tenant application from a catalog item and grant the caller access.

Idempotent: repeat calls by the same user return the existing tenant row.
A subsequent user in the same tenant joins the existing app instead of
creating a new one.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.application_marketplace import ApplicationMarketplace
from neuland_hub_sdk.models.application import Application
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
    api_instance = ApplicationMarketplace(api_client)
    catalog_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the catalog application to install.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Install a marketplace application into the caller's tenant
        api_response = api_instance.application_install_from_catalog(catalog_id, cookie_name=cookie_name)
        print("The response of ApplicationMarketplace->application_install_from_catalog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationMarketplace->application_install_from_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalog_id** | **UUID**| Public id of the catalog application to install. | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Application**](Application.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**404** | No catalog application exists with the given id. |  -  |
**409** | Catalog application is DEPRECATED and cannot be installed. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_list_catalog**
> List[ApplicationCatalog] application_list_catalog(state=state, cookie_name=cookie_name)

List all application catalog items — superadmin only

Return every application catalog row (both ACTIVE and DEPRECATED).

The public marketplace view filters DEPRECATED items out; this endpoint
exposes them so a superadmin UI can render them with a "Deprecated" badge
and PATCH the state back to ACTIVE when needed.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.application_marketplace import ApplicationMarketplace
from neuland_hub_sdk.models.application_catalog import ApplicationCatalog
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
    api_instance = ApplicationMarketplace(api_client)
    state = neuland_hub_sdk.MarketplaceCatalogStateEnum() # MarketplaceCatalogStateEnum | Filter by state (ACTIVE / DEPRECATED). Omit for all. (optional)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # List all application catalog items — superadmin only
        api_response = api_instance.application_list_catalog(state=state, cookie_name=cookie_name)
        print("The response of ApplicationMarketplace->application_list_catalog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationMarketplace->application_list_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **state** | [**MarketplaceCatalogStateEnum**](.md)| Filter by state (ACTIVE / DEPRECATED). Omit for all. | [optional] 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[ApplicationCatalog]**](ApplicationCatalog.md)

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
**403** | Superadmin privileges required. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_remove_tag_from_catalog**
> application_remove_tag_from_catalog(catalog_id, tag_id, cookie_name=cookie_name)

Detach a tag from a marketplace application

Detach a tag from a marketplace application catalog item.

Idempotent — detaching a tag that isn't attached is a no-op 204.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.application_marketplace import ApplicationMarketplace
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
    api_instance = ApplicationMarketplace(api_client)
    catalog_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the catalog application to untag.
    tag_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Detach a tag from a marketplace application
        api_instance.application_remove_tag_from_catalog(catalog_id, tag_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling ApplicationMarketplace->application_remove_tag_from_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalog_id** | **UUID**| Public id of the catalog application to untag. | 
 **tag_id** | **UUID**|  | 
 **cookie_name** | **str**|  | [optional] 

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
**204** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | The tag does not belong to the caller&#39;s tenant. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_uninstall_from_catalog**
> application_uninstall_from_catalog(catalog_id, cookie_name=cookie_name)

Uninstall a marketplace application for the caller

Remove the caller's app membership; delete the tenant application if last member leaves.

Creatorship transfers to the next oldest remaining member when the caller
was the creator and others remain. When the last member leaves, the
tenant application row is hard-deleted (its ApplicationMember and
ApplicationGroup rows cascade with it).

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.application_marketplace import ApplicationMarketplace
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
    api_instance = ApplicationMarketplace(api_client)
    catalog_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the catalog application to uninstall.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Uninstall a marketplace application for the caller
        api_instance.application_uninstall_from_catalog(catalog_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling ApplicationMarketplace->application_uninstall_from_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalog_id** | **UUID**| Public id of the catalog application to uninstall. | 
 **cookie_name** | **str**|  | [optional] 

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
**204** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**404** | Application is not installed in this tenant, or the caller is not a member. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_update_catalog**
> ApplicationCatalog application_update_catalog(catalog_id, application_catalog_update, cookie_name=cookie_name)

Update a marketplace application's metadata

Update metadata on a marketplace application catalog item (superadmin only).

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.application_marketplace import ApplicationMarketplace
from neuland_hub_sdk.models.application_catalog import ApplicationCatalog
from neuland_hub_sdk.models.application_catalog_update import ApplicationCatalogUpdate
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
    api_instance = ApplicationMarketplace(api_client)
    catalog_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the catalog application to update.
    application_catalog_update = neuland_hub_sdk.ApplicationCatalogUpdate() # ApplicationCatalogUpdate | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update a marketplace application's metadata
        api_response = api_instance.application_update_catalog(catalog_id, application_catalog_update, cookie_name=cookie_name)
        print("The response of ApplicationMarketplace->application_update_catalog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationMarketplace->application_update_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalog_id** | **UUID**| Public id of the catalog application to update. | 
 **application_catalog_update** | [**ApplicationCatalogUpdate**](ApplicationCatalogUpdate.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**ApplicationCatalog**](ApplicationCatalog.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Superadmin privileges required. |  -  |
**404** | No catalog application exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_update_catalog_state**
> ApplicationCatalog application_update_catalog_state(catalog_id, marketplace_catalog_state_update, cookie_name=cookie_name)

Toggle a marketplace application's lifecycle state

Flip a catalog application between ACTIVE and DEPRECATED (superadmin only).

DEPRECATED items are hidden from the marketplace and reject new installs;
existing tenant installations continue to work.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.application_marketplace import ApplicationMarketplace
from neuland_hub_sdk.models.application_catalog import ApplicationCatalog
from neuland_hub_sdk.models.marketplace_catalog_state_update import MarketplaceCatalogStateUpdate
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
    api_instance = ApplicationMarketplace(api_client)
    catalog_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the catalog application to flip between states.
    marketplace_catalog_state_update = neuland_hub_sdk.MarketplaceCatalogStateUpdate() # MarketplaceCatalogStateUpdate | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Toggle a marketplace application's lifecycle state
        api_response = api_instance.application_update_catalog_state(catalog_id, marketplace_catalog_state_update, cookie_name=cookie_name)
        print("The response of ApplicationMarketplace->application_update_catalog_state:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationMarketplace->application_update_catalog_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalog_id** | **UUID**| Public id of the catalog application to flip between states. | 
 **marketplace_catalog_state_update** | [**MarketplaceCatalogStateUpdate**](MarketplaceCatalogStateUpdate.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**ApplicationCatalog**](ApplicationCatalog.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Superadmin privileges required. |  -  |
**404** | No catalog application exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

