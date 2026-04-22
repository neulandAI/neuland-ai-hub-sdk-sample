# neuland_hub_sdk.AuthConnector

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**initiate_admin_consent**](AuthConnector.md#initiate_admin_consent) | **GET** /auth/connectors/{connector_id}/consent/admin | Initiate Admin Consent
[**initiate_consent**](AuthConnector.md#initiate_consent) | **GET** /auth/connectors/{connector_id}/consent | Initiate Consent
[**list_connector_status**](AuthConnector.md#list_connector_status) | **GET** /auth/connectors/status | List Connector Status
[**oauth_callback**](AuthConnector.md#oauth_callback) | **GET** /auth/connectors/callback | Oauth Callback
[**revoke_consent**](AuthConnector.md#revoke_consent) | **DELETE** /auth/connectors/{connector_id}/consent | Revoke Consent
[**update_connector**](AuthConnector.md#update_connector) | **PATCH** /auth/connectors/{connector_id} | Update Connector
[**update_oauth_client**](AuthConnector.md#update_oauth_client) | **PATCH** /auth/connectors/oauth-clients/{oauth_client_id} | Update Oauth Client


# **initiate_admin_consent**
> ConnectorConsentOut initiate_admin_consent(connector_id, tenant_id=tenant_id, cookie_name=cookie_name)

Initiate Admin Consent

Initiate admin consent flow for a specific connector. This is used
when the connector requires admin consent in addition to user consent.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.connector_consent_out import ConnectorConsentOut
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
    api_instance = neuland_hub_sdk.AuthConnector(api_client)
    connector_id = 56 # int | 
    tenant_id = 56 # int |  (optional)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Initiate Admin Consent
        api_response = api_instance.initiate_admin_consent(connector_id, tenant_id=tenant_id, cookie_name=cookie_name)
        print("The response of AuthConnector->initiate_admin_consent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthConnector->initiate_admin_consent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connector_id** | **int**|  | 
 **tenant_id** | **int**|  | [optional] 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**ConnectorConsentOut**](ConnectorConsentOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Not authenticated |  -  |
**403** | Insufficient permissions |  -  |
**404** | Resource not found |  -  |
**422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initiate_consent**
> ConnectorConsentOut initiate_consent(connector_id, return_url=return_url, redirect=redirect, cookie_name=cookie_name)

Initiate Consent

Initiate OAuth consent flow for a specific connector.

Returns redirect URL to OAuth provider's consent page.
If redirect=true, returns HTTP 302 redirect response.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.connector_consent_out import ConnectorConsentOut
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
    api_instance = neuland_hub_sdk.AuthConnector(api_client)
    connector_id = 56 # int | 
    return_url = 'return_url_example' # str |  (optional)
    redirect = False # bool | If true, return 302 redirect instead of JSON (optional) (default to False)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Initiate Consent
        api_response = api_instance.initiate_consent(connector_id, return_url=return_url, redirect=redirect, cookie_name=cookie_name)
        print("The response of AuthConnector->initiate_consent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthConnector->initiate_consent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connector_id** | **int**|  | 
 **return_url** | **str**|  | [optional] 
 **redirect** | **bool**| If true, return 302 redirect instead of JSON | [optional] [default to False]
 **cookie_name** | **str**|  | [optional] 

### Return type

[**ConnectorConsentOut**](ConnectorConsentOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Not authenticated |  -  |
**403** | Insufficient permissions |  -  |
**404** | Resource not found |  -  |
**422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_connector_status**
> List[ConnectorStatusOut] list_connector_status(cookie_name=cookie_name)

List Connector Status

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.connector_status_out import ConnectorStatusOut
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
    api_instance = neuland_hub_sdk.AuthConnector(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # List Connector Status
        api_response = api_instance.list_connector_status(cookie_name=cookie_name)
        print("The response of AuthConnector->list_connector_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthConnector->list_connector_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[ConnectorStatusOut]**](ConnectorStatusOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Not authenticated |  -  |
**403** | Insufficient permissions |  -  |
**404** | Resource not found |  -  |
**422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauth_callback**
> object oauth_callback(state, code=code, error=error, error_description=error_description, error_subcode=error_subcode)

Oauth Callback

Generic OAuth callback from provider after user consent.

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.AuthConnector(api_client)
    state = 'state_example' # str | 
    code = 'code_example' # str |  (optional)
    error = 'error_example' # str |  (optional)
    error_description = 'error_description_example' # str |  (optional)
    error_subcode = 'error_subcode_example' # str |  (optional)

    try:
        # Oauth Callback
        api_response = api_instance.oauth_callback(state, code=code, error=error, error_description=error_description, error_subcode=error_subcode)
        print("The response of AuthConnector->oauth_callback:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthConnector->oauth_callback: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **state** | **str**|  | 
 **code** | **str**|  | [optional] 
 **error** | **str**|  | [optional] 
 **error_description** | **str**|  | [optional] 
 **error_subcode** | **str**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Not authenticated |  -  |
**403** | Insufficient permissions |  -  |
**404** | Resource not found |  -  |
**422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revoke_consent**
> revoke_consent(connector_id, cookie_name=cookie_name)

Revoke Consent

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
    api_instance = neuland_hub_sdk.AuthConnector(api_client)
    connector_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Revoke Consent
        api_instance.revoke_consent(connector_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling AuthConnector->revoke_consent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connector_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**401** | Not authenticated |  -  |
**403** | Insufficient permissions |  -  |
**404** | Resource not found |  -  |
**422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_connector**
> Connector update_connector(connector_id, connector_update, cookie_name=cookie_name)

Update Connector

Update a connector (superadmin only).

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.connector import Connector
from neuland_hub_sdk.models.connector_update import ConnectorUpdate
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
    api_instance = neuland_hub_sdk.AuthConnector(api_client)
    connector_id = 56 # int | 
    connector_update = neuland_hub_sdk.ConnectorUpdate() # ConnectorUpdate | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Connector
        api_response = api_instance.update_connector(connector_id, connector_update, cookie_name=cookie_name)
        print("The response of AuthConnector->update_connector:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthConnector->update_connector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connector_id** | **int**|  | 
 **connector_update** | [**ConnectorUpdate**](ConnectorUpdate.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Connector**](Connector.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Not authenticated |  -  |
**403** | Insufficient permissions |  -  |
**404** | Resource not found |  -  |
**422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_oauth_client**
> OAuthClient update_oauth_client(oauth_client_id, o_auth_client_update, cookie_name=cookie_name)

Update Oauth Client

Update an OAuth client (superadmin only).

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.o_auth_client import OAuthClient
from neuland_hub_sdk.models.o_auth_client_update import OAuthClientUpdate
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
    api_instance = neuland_hub_sdk.AuthConnector(api_client)
    oauth_client_id = 56 # int | 
    o_auth_client_update = neuland_hub_sdk.OAuthClientUpdate() # OAuthClientUpdate | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Oauth Client
        api_response = api_instance.update_oauth_client(oauth_client_id, o_auth_client_update, cookie_name=cookie_name)
        print("The response of AuthConnector->update_oauth_client:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthConnector->update_oauth_client: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauth_client_id** | **int**|  | 
 **o_auth_client_update** | [**OAuthClientUpdate**](OAuthClientUpdate.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**OAuthClient**](OAuthClient.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Not authenticated |  -  |
**403** | Insufficient permissions |  -  |
**404** | Resource not found |  -  |
**422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

