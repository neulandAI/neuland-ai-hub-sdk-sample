# neuland_hub_sdk.InvitationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accept_invitation_complete_invitations_accept_post**](InvitationsApi.md#accept_invitation_complete_invitations_accept_post) | **POST** /invitations/accept | Accept Invitation Complete
[**accept_invitation_form_invitations_accept_get**](InvitationsApi.md#accept_invitation_form_invitations_accept_get) | **GET** /invitations/accept | Accept Invitation Form
[**create_invitations_invitations_post**](InvitationsApi.md#create_invitations_invitations_post) | **POST** /invitations/ | Create Invitations
[**resend_invitation_invitations_invitation_id_resend_post**](InvitationsApi.md#resend_invitation_invitations_invitation_id_resend_post) | **POST** /invitations/{invitation_id}/resend | Resend Invitation
[**revoke_invitation_invitations_invitation_id_revoke_post**](InvitationsApi.md#revoke_invitation_invitations_invitation_id_revoke_post) | **POST** /invitations/{invitation_id}/revoke | Revoke Invitation


# **accept_invitation_complete_invitations_accept_post**
> object accept_invitation_complete_invitations_accept_post(token)

Accept Invitation Complete

Complete invitation acceptance and create user account.

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
    api_instance = neuland_hub_sdk.InvitationsApi(api_client)
    token = 'token_example' # str | Invitation JWT token

    try:
        # Accept Invitation Complete
        api_response = api_instance.accept_invitation_complete_invitations_accept_post(token)
        print("The response of InvitationsApi->accept_invitation_complete_invitations_accept_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvitationsApi->accept_invitation_complete_invitations_accept_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Invitation JWT token | 

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
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accept_invitation_form_invitations_accept_get**
> str accept_invitation_form_invitations_accept_get(token)

Accept Invitation Form

Fallback HTML form for accepting invitation when no frontend is available.

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
    api_instance = neuland_hub_sdk.InvitationsApi(api_client)
    token = 'token_example' # str | Invitation JWT token

    try:
        # Accept Invitation Form
        api_response = api_instance.accept_invitation_form_invitations_accept_get(token)
        print("The response of InvitationsApi->accept_invitation_form_invitations_accept_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvitationsApi->accept_invitation_form_invitations_accept_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Invitation JWT token | 

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

# **create_invitations_invitations_post**
> List[InvitationOut] create_invitations_invitations_post(invitation_in, cookie_name=cookie_name)

Create Invitations

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.invitation_in import InvitationIn
from neuland_hub_sdk.models.invitation_out import InvitationOut
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
    api_instance = neuland_hub_sdk.InvitationsApi(api_client)
    invitation_in = neuland_hub_sdk.InvitationIn() # InvitationIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Invitations
        api_response = api_instance.create_invitations_invitations_post(invitation_in, cookie_name=cookie_name)
        print("The response of InvitationsApi->create_invitations_invitations_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvitationsApi->create_invitations_invitations_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invitation_in** | [**InvitationIn**](InvitationIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[InvitationOut]**](InvitationOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resend_invitation_invitations_invitation_id_resend_post**
> InvitationOut resend_invitation_invitations_invitation_id_resend_post(invitation_id, cookie_name=cookie_name)

Resend Invitation

Resend invitation email with a new token.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.invitation_out import InvitationOut
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
    api_instance = neuland_hub_sdk.InvitationsApi(api_client)
    invitation_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Resend Invitation
        api_response = api_instance.resend_invitation_invitations_invitation_id_resend_post(invitation_id, cookie_name=cookie_name)
        print("The response of InvitationsApi->resend_invitation_invitations_invitation_id_resend_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvitationsApi->resend_invitation_invitations_invitation_id_resend_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invitation_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**InvitationOut**](InvitationOut.md)

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

# **revoke_invitation_invitations_invitation_id_revoke_post**
> revoke_invitation_invitations_invitation_id_revoke_post(invitation_id, cookie_name=cookie_name)

Revoke Invitation

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
    api_instance = neuland_hub_sdk.InvitationsApi(api_client)
    invitation_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Revoke Invitation
        api_instance.revoke_invitation_invitations_invitation_id_revoke_post(invitation_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling InvitationsApi->revoke_invitation_invitations_invitation_id_revoke_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invitation_id** | **int**|  | 
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

