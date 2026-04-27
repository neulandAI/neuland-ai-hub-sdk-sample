# neuland_hub_sdk.Auth

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**azure_entra_callback**](Auth.md#azure_entra_callback) | **GET** /auth/callback/azure-entra | Azure Entra Callback
[**confirm_email**](Auth.md#confirm_email) | **GET** /auth/confirm-email | Confirm Email
[**exchange_token**](Auth.md#exchange_token) | **POST** /auth/exchange/token | Exchange Token
[**get_entra_groups**](Auth.md#get_entra_groups) | **GET** /auth/entra/groups | Get Entra Groups
[**get_entra_scopes**](Auth.md#get_entra_scopes) | **GET** /auth/entra/scopes | Get Entra Scopes
[**login**](Auth.md#login) | **POST** /auth/token | Login
[**logout**](Auth.md#logout) | **POST** /auth/logout | Logout
[**oidc_callback**](Auth.md#oidc_callback) | **GET** /auth/callback/oidc | Oidc Callback
[**request_password_reset**](Auth.md#request_password_reset) | **POST** /auth/request-password-reset | Request Password Reset
[**reset_password**](Auth.md#reset_password) | **POST** /auth/reset-password | Reset Password
[**reset_password_form**](Auth.md#reset_password_form) | **GET** /auth/reset-password | Reset Password Form
[**send_email_confirmation**](Auth.md#send_email_confirmation) | **POST** /auth/send-email-confirmation | Send Email Confirmation


# **azure_entra_callback**
> Dict[str, object] azure_entra_callback(code, user_agent=user_agent, x_real_ip=x_real_ip, x_forwarded_for=x_forwarded_for, x_client_ip=x_client_ip)

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
    api_instance = neuland_hub_sdk.Auth(api_client)
    code = 'code_example' # str | Authorization code from Azure Entra ID
    user_agent = 'user_agent_example' # str |  (optional)
    x_real_ip = 'x_real_ip_example' # str |  (optional)
    x_forwarded_for = 'x_forwarded_for_example' # str |  (optional)
    x_client_ip = 'x_client_ip_example' # str |  (optional)

    try:
        # Azure Entra Callback
        api_response = api_instance.azure_entra_callback(code, user_agent=user_agent, x_real_ip=x_real_ip, x_forwarded_for=x_forwarded_for, x_client_ip=x_client_ip)
        print("The response of Auth->azure_entra_callback:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Auth->azure_entra_callback: %s\n" % e)
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

# **confirm_email**
> object confirm_email(token, accept=accept)

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
    api_instance = neuland_hub_sdk.Auth(api_client)
    token = 'token_example' # str | JWT token from confirmation email
    accept = 'accept_example' # str |  (optional)

    try:
        # Confirm Email
        api_response = api_instance.confirm_email(token, accept=accept)
        print("The response of Auth->confirm_email:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Auth->confirm_email: %s\n" % e)
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

# **exchange_token**
> str exchange_token(app_id)

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
    api_instance = neuland_hub_sdk.Auth(api_client)
    app_id = 56 # int | 

    try:
        # Exchange Token
        api_response = api_instance.exchange_token(app_id)
        print("The response of Auth->exchange_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Auth->exchange_token: %s\n" % e)
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

# **get_entra_groups**
> Dict[str, ResponseAuthGetEntraGroupsValue] get_entra_groups()

Get Entra Groups

Get Azure Entra group names for current user's groups

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.response_auth_get_entra_groups_value import ResponseAuthGetEntraGroupsValue
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
    api_instance = neuland_hub_sdk.Auth(api_client)

    try:
        # Get Entra Groups
        api_response = api_instance.get_entra_groups()
        print("The response of Auth->get_entra_groups:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Auth->get_entra_groups: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Dict[str, ResponseAuthGetEntraGroupsValue]**](ResponseAuthGetEntraGroupsValue.md)

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

# **get_entra_scopes**
> List[Optional[str]] get_entra_scopes()

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
    api_instance = neuland_hub_sdk.Auth(api_client)

    try:
        # Get Entra Scopes
        api_response = api_instance.get_entra_scopes()
        print("The response of Auth->get_entra_scopes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Auth->get_entra_scopes: %s\n" % e)
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

# **login**
> TokenOut login(username, password, user_agent=user_agent, x_real_ip=x_real_ip, x_forwarded_for=x_forwarded_for, x_client_ip=x_client_ip, session_id=session_id, grant_type=grant_type, scope=scope, client_id=client_id, client_secret=client_secret)

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
    api_instance = neuland_hub_sdk.Auth(api_client)
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
        api_response = api_instance.login(username, password, user_agent=user_agent, x_real_ip=x_real_ip, x_forwarded_for=x_forwarded_for, x_client_ip=x_client_ip, session_id=session_id, grant_type=grant_type, scope=scope, client_id=client_id, client_secret=client_secret)
        print("The response of Auth->login:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Auth->login: %s\n" % e)
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

# **logout**
> object logout()

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
    api_instance = neuland_hub_sdk.Auth(api_client)

    try:
        # Logout
        api_response = api_instance.logout()
        print("The response of Auth->logout:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Auth->logout: %s\n" % e)
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

# **oidc_callback**
> Dict[str, object] oidc_callback(code, user_agent=user_agent, x_real_ip=x_real_ip, x_forwarded_for=x_forwarded_for, x_client_ip=x_client_ip)

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
    api_instance = neuland_hub_sdk.Auth(api_client)
    code = 'code_example' # str | Authorization code from OIDC provider
    user_agent = 'user_agent_example' # str |  (optional)
    x_real_ip = 'x_real_ip_example' # str |  (optional)
    x_forwarded_for = 'x_forwarded_for_example' # str |  (optional)
    x_client_ip = 'x_client_ip_example' # str |  (optional)

    try:
        # Oidc Callback
        api_response = api_instance.oidc_callback(code, user_agent=user_agent, x_real_ip=x_real_ip, x_forwarded_for=x_forwarded_for, x_client_ip=x_client_ip)
        print("The response of Auth->oidc_callback:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Auth->oidc_callback: %s\n" % e)
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

# **request_password_reset**
> request_password_reset(password_reset_request_in, origin=origin)

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
    api_instance = neuland_hub_sdk.Auth(api_client)
    password_reset_request_in = neuland_hub_sdk.PasswordResetRequestIn() # PasswordResetRequestIn | 
    origin = 'origin_example' # str |  (optional)

    try:
        # Request Password Reset
        api_instance.request_password_reset(password_reset_request_in, origin=origin)
    except Exception as e:
        print("Exception when calling Auth->request_password_reset: %s\n" % e)
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

# **reset_password**
> reset_password(token)

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
    api_instance = neuland_hub_sdk.Auth(api_client)
    token = 'token_example' # str | Password reset JWT token

    try:
        # Reset Password
        api_instance.reset_password(token)
    except Exception as e:
        print("Exception when calling Auth->reset_password: %s\n" % e)
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

# **reset_password_form**
> str reset_password_form(token)

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
    api_instance = neuland_hub_sdk.Auth(api_client)
    token = 'token_example' # str | Password reset JWT token

    try:
        # Reset Password Form
        api_response = api_instance.reset_password_form(token)
        print("The response of Auth->reset_password_form:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Auth->reset_password_form: %s\n" % e)
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

# **send_email_confirmation**
> send_email_confirmation(cookie_name=cookie_name)

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
    api_instance = neuland_hub_sdk.Auth(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Send Email Confirmation
        api_instance.send_email_confirmation(cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Auth->send_email_confirmation: %s\n" % e)
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

