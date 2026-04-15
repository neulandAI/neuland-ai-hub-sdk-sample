# neuland_hub_sdk.AuthApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**azure_entra_callback_auth_callback_azure_entra_get**](AuthApi.md#azure_entra_callback_auth_callback_azure_entra_get) | **GET** /auth/callback/azure-entra | Azure Entra Callback
[**confirm_email_auth_confirm_email_get**](AuthApi.md#confirm_email_auth_confirm_email_get) | **GET** /auth/confirm-email | Confirm Email
[**exchange_token_auth_exchange_token_post**](AuthApi.md#exchange_token_auth_exchange_token_post) | **POST** /auth/exchange/token | Exchange Token
[**get_entra_groups_auth_entra_groups_get**](AuthApi.md#get_entra_groups_auth_entra_groups_get) | **GET** /auth/entra/groups | Get Entra Groups
[**get_entra_scopes_auth_entra_scopes_get**](AuthApi.md#get_entra_scopes_auth_entra_scopes_get) | **GET** /auth/entra/scopes | Get Entra Scopes
[**login_auth_token_post**](AuthApi.md#login_auth_token_post) | **POST** /auth/token | Login
[**logout_auth_logout_post**](AuthApi.md#logout_auth_logout_post) | **POST** /auth/logout | Logout
[**oidc_callback_auth_callback_oidc_get**](AuthApi.md#oidc_callback_auth_callback_oidc_get) | **GET** /auth/callback/oidc | Oidc Callback
[**request_password_reset_auth_request_password_reset_post**](AuthApi.md#request_password_reset_auth_request_password_reset_post) | **POST** /auth/request-password-reset | Request Password Reset
[**reset_password_auth_reset_password_post**](AuthApi.md#reset_password_auth_reset_password_post) | **POST** /auth/reset-password | Reset Password
[**reset_password_form_auth_reset_password_get**](AuthApi.md#reset_password_form_auth_reset_password_get) | **GET** /auth/reset-password | Reset Password Form
[**send_email_confirmation_auth_send_email_confirmation_post**](AuthApi.md#send_email_confirmation_auth_send_email_confirmation_post) | **POST** /auth/send-email-confirmation | Send Email Confirmation


# **azure_entra_callback_auth_callback_azure_entra_get**
> Dict[str, object] azure_entra_callback_auth_callback_azure_entra_get(code, user_agent=user_agent, x_real_ip=x_real_ip, x_forwarded_for=x_forwarded_for, x_client_ip=x_client_ip)

Azure Entra Callback

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
    api_instance = neuland_hub_sdk.AuthApi(api_client)
    code = 'code_example' # str | Authorization code from Azure Entra ID
    user_agent = 'user_agent_example' # str |  (optional)
    x_real_ip = 'x_real_ip_example' # str |  (optional)
    x_forwarded_for = 'x_forwarded_for_example' # str |  (optional)
    x_client_ip = 'x_client_ip_example' # str |  (optional)

    try:
        # Azure Entra Callback
        api_response = api_instance.azure_entra_callback_auth_callback_azure_entra_get(code, user_agent=user_agent, x_real_ip=x_real_ip, x_forwarded_for=x_forwarded_for, x_client_ip=x_client_ip)
        print("The response of AuthApi->azure_entra_callback_auth_callback_azure_entra_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->azure_entra_callback_auth_callback_azure_entra_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Authorization code from Azure Entra ID | 
 **user_agent** | **str**|  | [optional] 
 **x_real_ip** | **str**|  | [optional] 
 **x_forwarded_for** | **str**|  | [optional] 
 **x_client_ip** | **str**|  | [optional] 

### Return type

**Dict[str, object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **confirm_email_auth_confirm_email_get**
> object confirm_email_auth_confirm_email_get(token, accept=accept)

Confirm Email

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
    api_instance = neuland_hub_sdk.AuthApi(api_client)
    token = 'token_example' # str | JWT token from confirmation email
    accept = 'accept_example' # str |  (optional)

    try:
        # Confirm Email
        api_response = api_instance.confirm_email_auth_confirm_email_get(token, accept=accept)
        print("The response of AuthApi->confirm_email_auth_confirm_email_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->confirm_email_auth_confirm_email_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token from confirmation email | 
 **accept** | **str**|  | [optional] 

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
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exchange_token_auth_exchange_token_post**
> str exchange_token_auth_exchange_token_post(app_id)

Exchange Token

service token endpoint for AI applications

### Example

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

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.AuthApi(api_client)
    app_id = 56 # int | 

    try:
        # Exchange Token
        api_response = api_instance.exchange_token_auth_exchange_token_post(app_id)
        print("The response of AuthApi->exchange_token_auth_exchange_token_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->exchange_token_auth_exchange_token_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **int**|  | 

### Return type

**str**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_entra_groups_auth_entra_groups_get**
> Dict[str, ResponseGetEntraGroupsAuthEntraGroupsGetValue] get_entra_groups_auth_entra_groups_get()

Get Entra Groups

Get Azure Entra group names for current user's groups

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.response_get_entra_groups_auth_entra_groups_get_value import ResponseGetEntraGroupsAuthEntraGroupsGetValue
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

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.AuthApi(api_client)

    try:
        # Get Entra Groups
        api_response = api_instance.get_entra_groups_auth_entra_groups_get()
        print("The response of AuthApi->get_entra_groups_auth_entra_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->get_entra_groups_auth_entra_groups_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Dict[str, ResponseGetEntraGroupsAuthEntraGroupsGetValue]**](ResponseGetEntraGroupsAuthEntraGroupsGetValue.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_entra_scopes_auth_entra_scopes_get**
> List[Optional[str]] get_entra_scopes_auth_entra_scopes_get()

Get Entra Scopes

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
    api_instance = neuland_hub_sdk.AuthApi(api_client)

    try:
        # Get Entra Scopes
        api_response = api_instance.get_entra_scopes_auth_entra_scopes_get()
        print("The response of AuthApi->get_entra_scopes_auth_entra_scopes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->get_entra_scopes_auth_entra_scopes_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**List[Optional[str]]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **login_auth_token_post**
> TokenOut login_auth_token_post(username, password, user_agent=user_agent, x_real_ip=x_real_ip, x_forwarded_for=x_forwarded_for, x_client_ip=x_client_ip, session_id=session_id, grant_type=grant_type, scope=scope, client_id=client_id, client_secret=client_secret)

Login

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.models.token_out import TokenOut
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
    api_instance = neuland_hub_sdk.AuthApi(api_client)
    username = 'username_example' # str | 
    password = 'password_example' # str | 
    user_agent = 'user_agent_example' # str |  (optional)
    x_real_ip = 'x_real_ip_example' # str |  (optional)
    x_forwarded_for = 'x_forwarded_for_example' # str |  (optional)
    x_client_ip = 'x_client_ip_example' # str |  (optional)
    session_id = 56 # int |  (optional)
    grant_type = 'grant_type_example' # str |  (optional)
    scope = '' # str |  (optional) (default to '')
    client_id = 'client_id_example' # str |  (optional)
    client_secret = 'client_secret_example' # str |  (optional)

    try:
        # Login
        api_response = api_instance.login_auth_token_post(username, password, user_agent=user_agent, x_real_ip=x_real_ip, x_forwarded_for=x_forwarded_for, x_client_ip=x_client_ip, session_id=session_id, grant_type=grant_type, scope=scope, client_id=client_id, client_secret=client_secret)
        print("The response of AuthApi->login_auth_token_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->login_auth_token_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**|  | 
 **password** | **str**|  | 
 **user_agent** | **str**|  | [optional] 
 **x_real_ip** | **str**|  | [optional] 
 **x_forwarded_for** | **str**|  | [optional] 
 **x_client_ip** | **str**|  | [optional] 
 **session_id** | **int**|  | [optional] 
 **grant_type** | **str**|  | [optional] 
 **scope** | **str**|  | [optional] [default to &#39;&#39;]
 **client_id** | **str**|  | [optional] 
 **client_secret** | **str**|  | [optional] 

### Return type

[**TokenOut**](TokenOut.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logout_auth_logout_post**
> object logout_auth_logout_post()

Logout

### Example

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

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.AuthApi(api_client)

    try:
        # Logout
        api_response = api_instance.logout_auth_logout_post()
        print("The response of AuthApi->logout_auth_logout_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->logout_auth_logout_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oidc_callback_auth_callback_oidc_get**
> Dict[str, object] oidc_callback_auth_callback_oidc_get(code, user_agent=user_agent, x_real_ip=x_real_ip, x_forwarded_for=x_forwarded_for, x_client_ip=x_client_ip)

Oidc Callback

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
    api_instance = neuland_hub_sdk.AuthApi(api_client)
    code = 'code_example' # str | Authorization code from OIDC provider
    user_agent = 'user_agent_example' # str |  (optional)
    x_real_ip = 'x_real_ip_example' # str |  (optional)
    x_forwarded_for = 'x_forwarded_for_example' # str |  (optional)
    x_client_ip = 'x_client_ip_example' # str |  (optional)

    try:
        # Oidc Callback
        api_response = api_instance.oidc_callback_auth_callback_oidc_get(code, user_agent=user_agent, x_real_ip=x_real_ip, x_forwarded_for=x_forwarded_for, x_client_ip=x_client_ip)
        print("The response of AuthApi->oidc_callback_auth_callback_oidc_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->oidc_callback_auth_callback_oidc_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Authorization code from OIDC provider | 
 **user_agent** | **str**|  | [optional] 
 **x_real_ip** | **str**|  | [optional] 
 **x_forwarded_for** | **str**|  | [optional] 
 **x_client_ip** | **str**|  | [optional] 

### Return type

**Dict[str, object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **request_password_reset_auth_request_password_reset_post**
> request_password_reset_auth_request_password_reset_post(password_reset_request_in, origin=origin)

Request Password Reset

Request password reset. Always returns 200 OK to prevent user enumeration.
Sends email with reset link if user exists and origin is valid.

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.models.password_reset_request_in import PasswordResetRequestIn
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
    api_instance = neuland_hub_sdk.AuthApi(api_client)
    password_reset_request_in = neuland_hub_sdk.PasswordResetRequestIn() # PasswordResetRequestIn | 
    origin = 'origin_example' # str |  (optional)

    try:
        # Request Password Reset
        api_instance.request_password_reset_auth_request_password_reset_post(password_reset_request_in, origin=origin)
    except Exception as e:
        print("Exception when calling AuthApi->request_password_reset_auth_request_password_reset_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **password_reset_request_in** | [**PasswordResetRequestIn**](PasswordResetRequestIn.md)|  | 
 **origin** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reset_password_auth_reset_password_post**
> reset_password_auth_reset_password_post(token)

Reset Password

Complete password reset with token and new password.
Validates token, updates password, and revokes all user sessions.
Accepts both JSON (for API) and form data (for HTML fallback).

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
    api_instance = neuland_hub_sdk.AuthApi(api_client)
    token = 'token_example' # str | Password reset JWT token

    try:
        # Reset Password
        api_instance.reset_password_auth_reset_password_post(token)
    except Exception as e:
        print("Exception when calling AuthApi->reset_password_auth_reset_password_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Password reset JWT token | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reset_password_form_auth_reset_password_get**
> str reset_password_form_auth_reset_password_get(token)

Reset Password Form

Fallback HTML form for password reset when no frontend is available.
Displays a secure form with basic security measures.
Validates token before showing form.

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
    api_instance = neuland_hub_sdk.AuthApi(api_client)
    token = 'token_example' # str | Password reset JWT token

    try:
        # Reset Password Form
        api_response = api_instance.reset_password_form_auth_reset_password_get(token)
        print("The response of AuthApi->reset_password_form_auth_reset_password_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->reset_password_form_auth_reset_password_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Password reset JWT token | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_email_confirmation_auth_send_email_confirmation_post**
> send_email_confirmation_auth_send_email_confirmation_post(cookie_name=cookie_name)

Send Email Confirmation

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
    api_instance = neuland_hub_sdk.AuthApi(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Send Email Confirmation
        api_instance.send_email_confirmation_auth_send_email_confirmation_post(cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling AuthApi->send_email_confirmation_auth_send_email_confirmation_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

