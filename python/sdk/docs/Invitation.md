# neuland_hub_sdk.Invitation

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**invitations_accept_invitation_complete**](Invitation.md#invitations_accept_invitation_complete) | **POST** /invitations/accept | Accept Invitation Complete
[**invitations_accept_invitation_form**](Invitation.md#invitations_accept_invitation_form) | **GET** /invitations/accept | Accept Invitation Form
[**invitations_create_invitations**](Invitation.md#invitations_create_invitations) | **POST** /invitations/ | Create Invitations
[**invitations_resend_invitation**](Invitation.md#invitations_resend_invitation) | **POST** /invitations/{invitation_id}/resend | Resend Invitation
[**invitations_revoke_invitation**](Invitation.md#invitations_revoke_invitation) | **POST** /invitations/{invitation_id}/revoke | Revoke Invitation


# **invitations_accept_invitation_complete**
> object invitations_accept_invitation_complete(token)

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
    api_instance = neuland_hub_sdk.Invitation(api_client)
    token = 'token_example' # str | Invitation JWT token

    try:
        # Accept Invitation Complete
        api_response = api_instance.invitations_accept_invitation_complete(token)
        print("The response of Invitation->invitations_accept_invitation_complete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Invitation->invitations_accept_invitation_complete: %s\n" % e)
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

# **invitations_accept_invitation_form**
> str invitations_accept_invitation_form(token)

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
    api_instance = neuland_hub_sdk.Invitation(api_client)
    token = 'token_example' # str | Invitation JWT token

    try:
        # Accept Invitation Form
        api_response = api_instance.invitations_accept_invitation_form(token)
        print("The response of Invitation->invitations_accept_invitation_form:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Invitation->invitations_accept_invitation_form: %s\n" % e)
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

# **invitations_create_invitations**
> List[InvitationOut] invitations_create_invitations(invitation_in, cookie_name=cookie_name)

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
    api_instance = neuland_hub_sdk.Invitation(api_client)
    invitation_in = neuland_hub_sdk.InvitationIn() # InvitationIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Invitations
        api_response = api_instance.invitations_create_invitations(invitation_in, cookie_name=cookie_name)
        print("The response of Invitation->invitations_create_invitations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Invitation->invitations_create_invitations: %s\n" % e)
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

# **invitations_resend_invitation**
> InvitationOut invitations_resend_invitation(invitation_id, cookie_name=cookie_name)

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
    api_instance = neuland_hub_sdk.Invitation(api_client)
    invitation_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Resend Invitation
        api_response = api_instance.invitations_resend_invitation(invitation_id, cookie_name=cookie_name)
        print("The response of Invitation->invitations_resend_invitation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Invitation->invitations_resend_invitation: %s\n" % e)
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

# **invitations_revoke_invitation**
> invitations_revoke_invitation(invitation_id, cookie_name=cookie_name)

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
    api_instance = neuland_hub_sdk.Invitation(api_client)
    invitation_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Revoke Invitation
        api_instance.invitations_revoke_invitation(invitation_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Invitation->invitations_revoke_invitation: %s\n" % e)
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

