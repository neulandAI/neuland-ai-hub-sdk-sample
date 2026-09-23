# neuland_hub_sdk.ToolAction

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**toolactions_connect_shared_mailbox**](ToolAction.md#toolactions_connect_shared_mailbox) | **POST** /tool-actions/email/shared-mailboxes | Connect a shared mailbox
[**toolactions_create_email_draft**](ToolAction.md#toolactions_create_email_draft) | **POST** /tool-actions/email/draft | Create an Outlook mailbox draft from a chat draft
[**toolactions_disconnect_shared_mailbox**](ToolAction.md#toolactions_disconnect_shared_mailbox) | **DELETE** /tool-actions/email/shared-mailboxes/{address} | Disconnect a shared mailbox
[**toolactions_list_shared_mailboxes**](ToolAction.md#toolactions_list_shared_mailboxes) | **GET** /tool-actions/email/shared-mailboxes | List connected shared mailboxes
[**toolactions_search_shared_mailboxes**](ToolAction.md#toolactions_search_shared_mailboxes) | **GET** /tool-actions/email/shared-mailboxes/search | Search the directory for mailboxes to connect
[**toolactions_send_email_from_draft**](ToolAction.md#toolactions_send_email_from_draft) | **POST** /tool-actions/email/send | Send an email from a draft


# **toolactions_connect_shared_mailbox**
> SharedMailbox toolactions_connect_shared_mailbox(connect_shared_mailbox_in, cookie_name=cookie_name)

Connect a shared mailbox

Verify the caller can open the mailbox with their own token — or, for a
Microsoft 365 group address, that they are a member — then add it to their
allowlist. Idempotent: re-connecting updates the display name.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.connect_shared_mailbox_in import ConnectSharedMailboxIn
from neuland_hub_sdk.models.shared_mailbox import SharedMailbox
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
    api_instance = neuland_hub_sdk.ToolAction(api_client)
    connect_shared_mailbox_in = neuland_hub_sdk.ConnectSharedMailboxIn() # ConnectSharedMailboxIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Connect a shared mailbox
        api_response = api_instance.toolactions_connect_shared_mailbox(connect_shared_mailbox_in, cookie_name=cookie_name)
        print("The response of ToolAction->toolactions_connect_shared_mailbox:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ToolAction->toolactions_connect_shared_mailbox: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connect_shared_mailbox_in** | [**ConnectSharedMailboxIn**](ConnectSharedMailboxIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**SharedMailbox**](SharedMailbox.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Consent for the shared-mailbox scopes is required (detail.error &#x3D;&#x3D; &#39;consent_required&#39;). |  -  |
**403** | Microsoft 365 denied access: the caller has no permission on this mailbox, or it does not exist. |  -  |
**422** | Invalid address, or the caller&#39;s own mailbox. |  -  |
**503** | Microsoft Graph is throttling; retry after the Retry-After header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **toolactions_create_email_draft**
> CreateOutlookDraftResponse toolactions_create_email_draft(create_outlook_draft_request, cookie_name=cookie_name)

Create an Outlook mailbox draft from a chat draft

Create (not send) a draft in the user's mailbox — used by the draft
card's "Open in Outlook" action, which cannot pass attachments through a
compose deep link. Attachment scope rules are identical to sending.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.create_outlook_draft_request import CreateOutlookDraftRequest
from neuland_hub_sdk.models.create_outlook_draft_response import CreateOutlookDraftResponse
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
    api_instance = neuland_hub_sdk.ToolAction(api_client)
    create_outlook_draft_request = neuland_hub_sdk.CreateOutlookDraftRequest() # CreateOutlookDraftRequest | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create an Outlook mailbox draft from a chat draft
        api_response = api_instance.toolactions_create_email_draft(create_outlook_draft_request, cookie_name=cookie_name)
        print("The response of ToolAction->toolactions_create_email_draft:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ToolAction->toolactions_create_email_draft: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_outlook_draft_request** | [**CreateOutlookDraftRequest**](CreateOutlookDraftRequest.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**CreateOutlookDraftResponse**](CreateOutlookDraftResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | Invalid attachments/recipients or the mail provider rejected the draft. |  -  |
**401** | Missing or invalid authentication. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **toolactions_disconnect_shared_mailbox**
> toolactions_disconnect_shared_mailbox(address, cookie_name=cookie_name)

Disconnect a shared mailbox

Remove one shared mailbox from the caller's allowlist. The personal
consent and any other shared mailboxes are untouched.

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
    api_instance = neuland_hub_sdk.ToolAction(api_client)
    address = 'address_example' # str | Address of the connected shared mailbox.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Disconnect a shared mailbox
        api_instance.toolactions_disconnect_shared_mailbox(address, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling ToolAction->toolactions_disconnect_shared_mailbox: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **str**| Address of the connected shared mailbox. | 
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
**404** | The mailbox is not connected for the caller. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **toolactions_list_shared_mailboxes**
> SharedMailboxListOut toolactions_list_shared_mailboxes(cookie_name=cookie_name)

List connected shared mailboxes

Shared mailboxes the caller connected on top of their personal account.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.shared_mailbox_list_out import SharedMailboxListOut
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
    api_instance = neuland_hub_sdk.ToolAction(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # List connected shared mailboxes
        api_response = api_instance.toolactions_list_shared_mailboxes(cookie_name=cookie_name)
        print("The response of ToolAction->toolactions_list_shared_mailboxes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ToolAction->toolactions_list_shared_mailboxes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cookie_name** | **str**|  | [optional] 

### Return type

[**SharedMailboxListOut**](SharedMailboxListOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**404** | The caller has not connected Outlook Mail. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **toolactions_search_shared_mailboxes**
> SharedMailboxSearchOut toolactions_search_shared_mailboxes(q=q, cookie_name=cookie_name)

Search the directory for mailboxes to connect

Mailboxes the caller can open, found via the People API.

Graph has no "shared mailbox" flag and no list of mailboxes a user has
been granted, so candidates come from People (the query, or the caller's
most relevant contacts for an empty query) and each one is probed with
the caller's token exactly like connecting does. Regular colleagues fail
the probe and drop out; what remains are mailboxes the caller holds
Full Access on. Already-connected ones are reported with ``connected``.

Only the already-granted read/people caps are required here, so browsing
never trips re-consent — adding a mailbox does that, deliberately.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.shared_mailbox_search_out import SharedMailboxSearchOut
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
    api_instance = neuland_hub_sdk.ToolAction(api_client)
    q = '' # str | Name or address fragment; empty returns suggestions. (optional) (default to '')
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Search the directory for mailboxes to connect
        api_response = api_instance.toolactions_search_shared_mailboxes(q=q, cookie_name=cookie_name)
        print("The response of ToolAction->toolactions_search_shared_mailboxes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ToolAction->toolactions_search_shared_mailboxes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| Name or address fragment; empty returns suggestions. | [optional] [default to &#39;&#39;]
 **cookie_name** | **str**|  | [optional] 

### Return type

[**SharedMailboxSearchOut**](SharedMailboxSearchOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Consent for the shared-mailbox scopes is required (detail.error &#x3D;&#x3D; &#39;consent_required&#39;). |  -  |
**502** | Microsoft Graph failed. |  -  |
**503** | Microsoft Graph is throttling; retry after the Retry-After header. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **toolactions_send_email_from_draft**
> SendEmailResponse toolactions_send_email_from_draft(send_email_request, cookie_name=cookie_name)

Send an email from a draft

Send an email from a user-approved, tool-generated draft via Microsoft Graph.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.send_email_request import SendEmailRequest
from neuland_hub_sdk.models.send_email_response import SendEmailResponse
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
    api_instance = neuland_hub_sdk.ToolAction(api_client)
    send_email_request = neuland_hub_sdk.SendEmailRequest() # SendEmailRequest | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Send an email from a draft
        api_response = api_instance.toolactions_send_email_from_draft(send_email_request, cookie_name=cookie_name)
        print("The response of ToolAction->toolactions_send_email_from_draft:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ToolAction->toolactions_send_email_from_draft: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **send_email_request** | [**SendEmailRequest**](SendEmailRequest.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**SendEmailResponse**](SendEmailResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | No recipient provided or the mail provider rejected the send. |  -  |
**401** | Missing or invalid authentication. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

