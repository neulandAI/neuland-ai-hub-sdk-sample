# neuland_hub_sdk.Workflow

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workflows_create_run**](Workflow.md#workflows_create_run) | **POST** /workflows/{workflow_id}/runs | Create Run
[**workflows_create_run_stream_token**](Workflow.md#workflows_create_run_stream_token) | **POST** /workflows/{workflow_id}/runs/{run_id}/stream-token | Create Run Stream Token
[**workflows_create_workflow**](Workflow.md#workflows_create_workflow) | **POST** /workflows/ | Create Workflow
[**workflows_delete_workflow**](Workflow.md#workflows_delete_workflow) | **DELETE** /workflows/{workflow_id} | Delete Workflow
[**workflows_refine_workflow**](Workflow.md#workflows_refine_workflow) | **POST** /workflows/{workflow_id}/chat | Refine Workflow
[**workflows_stream_run_events**](Workflow.md#workflows_stream_run_events) | **POST** /workflows/{workflow_id}/runs/{run_id}/events | Stream Run Events
[**workflows_update_workflow**](Workflow.md#workflows_update_workflow) | **PATCH** /workflows/{workflow_id} | Update Workflow


# **workflows_create_run**
> RunCreateOut workflows_create_run(workflow_id, cookie_name=cookie_name)

Create Run

Trigger a manual run. Creator-only. Inserts a pending run, mints a
run-scoped stream token, and enqueues execution on the ``heavy`` queue.
Rejected with 400 once the workflow is at its non-terminal-run cap.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.run_create_out import RunCreateOut
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
    api_instance = neuland_hub_sdk.Workflow(api_client)
    workflow_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Run
        api_response = api_instance.workflows_create_run(workflow_id, cookie_name=cookie_name)
        print("The response of Workflow->workflows_create_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Workflow->workflows_create_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflow_id** | **UUID**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**RunCreateOut**](RunCreateOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflows_create_run_stream_token**
> StreamTokenOut workflows_create_run_stream_token(workflow_id, run_id, cookie_name=cookie_name)

Create Run Stream Token

Mint a fresh stream token to replay a historical run. Creator-only.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.stream_token_out import StreamTokenOut
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
    api_instance = neuland_hub_sdk.Workflow(api_client)
    workflow_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Run Stream Token
        api_response = api_instance.workflows_create_run_stream_token(workflow_id, run_id, cookie_name=cookie_name)
        print("The response of Workflow->workflows_create_run_stream_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Workflow->workflows_create_run_stream_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflow_id** | **UUID**|  | 
 **run_id** | **UUID**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**StreamTokenOut**](StreamTokenOut.md)

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

# **workflows_create_workflow**
> Workflow workflows_create_workflow(workflow_in, cookie_name=cookie_name)

Create Workflow

Create a new workflow with an empty spec. Rejected with 400 once the
tenant is at its active-workflow quota.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.workflow import Workflow
from neuland_hub_sdk.models.workflow_in import WorkflowIn
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
    api_instance = neuland_hub_sdk.Workflow(api_client)
    workflow_in = neuland_hub_sdk.WorkflowIn() # WorkflowIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Workflow
        api_response = api_instance.workflows_create_workflow(workflow_in, cookie_name=cookie_name)
        print("The response of Workflow->workflows_create_workflow:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Workflow->workflows_create_workflow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflow_in** | [**WorkflowIn**](WorkflowIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Workflow**](Workflow.md)

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

# **workflows_delete_workflow**
> workflows_delete_workflow(workflow_id, cookie_name=cookie_name)

Delete Workflow

Delete a workflow. Only its creator may delete it.

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
    api_instance = neuland_hub_sdk.Workflow(api_client)
    workflow_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Workflow
        api_instance.workflows_delete_workflow(workflow_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Workflow->workflows_delete_workflow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflow_id** | **UUID**|  | 
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

# **workflows_refine_workflow**
> WorkflowChatOut workflows_refine_workflow(workflow_id, workflow_chat_in, cookie_name=cookie_name)

Refine Workflow

Refine a workflow's spec via the main chat orchestrator. Synchronous;
only the creator may chat.

Loads the workflow's linked chat history + current spec into the same
`achat` orchestrator (authoring prompt, no tools bound), persists the user +
assistant turns, and returns the assistant's prose (spec block stripped) plus
the parsed spec (null when no ``<workflow_spec>`` block was emitted).

A workflow still unsaved after a clarifying round means the user answered and
was asked again, and the prompt's "ask at most once" rule does not reliably
hold — so asking stops deterministically from then on. A reply that emits no
spec and asks nothing is reported as an error: otherwise the caller shows
success prose over an unchanged workflow.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.workflow_chat_in import WorkflowChatIn
from neuland_hub_sdk.models.workflow_chat_out import WorkflowChatOut
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
    api_instance = neuland_hub_sdk.Workflow(api_client)
    workflow_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    workflow_chat_in = neuland_hub_sdk.WorkflowChatIn() # WorkflowChatIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Refine Workflow
        api_response = api_instance.workflows_refine_workflow(workflow_id, workflow_chat_in, cookie_name=cookie_name)
        print("The response of Workflow->workflows_refine_workflow:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Workflow->workflows_refine_workflow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflow_id** | **UUID**|  | 
 **workflow_chat_in** | [**WorkflowChatIn**](WorkflowChatIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**WorkflowChatOut**](WorkflowChatOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflows_stream_run_events**
> object workflows_stream_run_events(workflow_id, run_id)

Stream Run Events

Server-sent event stream for a run. Authed by the run-scoped stream token
in ``Authorization: Bearer <token>`` (not the standard Hub bearer), so the FE
consumes it via ``fetch`` + ``ReadableStream``. Ends with ``data: [DONE]``.

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
    api_instance = neuland_hub_sdk.Workflow(api_client)
    workflow_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Stream Run Events
        api_response = api_instance.workflows_stream_run_events(workflow_id, run_id)
        print("The response of Workflow->workflows_stream_run_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Workflow->workflows_stream_run_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflow_id** | **UUID**|  | 
 **run_id** | **UUID**|  | 

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
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflows_update_workflow**
> Workflow workflows_update_workflow(workflow_id, workflow_update_in, cookie_name=cookie_name)

Update Workflow

Update a workflow. Only its creator may update it.

Arming a disabled draft is a create as far as the quota is concerned — the
cap counts enabled rows, so without a check here a tenant at cap would
simply enable its old drafts. The lock therefore re-reads the row: a
concurrent disable would otherwise leave this request's copy claiming the
workflow is already enabled, turning the arming into an unchecked no-op.

The assistant-chat gate below only covers enable/timezone-only updates; a
spec PATCH already ran it inside `_validate_runnable_spec`.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.workflow import Workflow
from neuland_hub_sdk.models.workflow_update_in import WorkflowUpdateIn
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
    api_instance = neuland_hub_sdk.Workflow(api_client)
    workflow_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    workflow_update_in = neuland_hub_sdk.WorkflowUpdateIn() # WorkflowUpdateIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Workflow
        api_response = api_instance.workflows_update_workflow(workflow_id, workflow_update_in, cookie_name=cookie_name)
        print("The response of Workflow->workflows_update_workflow:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Workflow->workflows_update_workflow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflow_id** | **UUID**|  | 
 **workflow_update_in** | [**WorkflowUpdateIn**](WorkflowUpdateIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Workflow**](Workflow.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

