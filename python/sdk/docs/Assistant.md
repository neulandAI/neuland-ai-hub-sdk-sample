# neuland_hub_sdk.Assistant

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assistants_add_library_to_assistant**](Assistant.md#assistants_add_library_to_assistant) | **POST** /assistants/{assistant_id}/libraries/{library_id} | Add a library to an assistant
[**assistants_add_members**](Assistant.md#assistants_add_members) | **POST** /assistants/{assistant_id}/members | Add members to an assistant
[**assistants_add_tag_to_assistant**](Assistant.md#assistants_add_tag_to_assistant) | **POST** /assistants/{assistant_id}/tags/{tag_id} | Add a tag to an assistant
[**assistants_add_tool_to_assistant**](Assistant.md#assistants_add_tool_to_assistant) | **POST** /assistants/{assistant_id}/tools/{tool_id} | Add a tool to an assistant
[**assistants_create_assistant**](Assistant.md#assistants_create_assistant) | **POST** /assistants/ | Create an assistant
[**assistants_delete_assistant**](Assistant.md#assistants_delete_assistant) | **DELETE** /assistants/{assistant_id} | Delete an assistant
[**assistants_delete_members**](Assistant.md#assistants_delete_members) | **DELETE** /assistants/{assistant_id}/members | Remove members from an assistant
[**assistants_join_assistant**](Assistant.md#assistants_join_assistant) | **POST** /assistants/{assistant_id}/membership | Join Assistant
[**assistants_leave_assitant**](Assistant.md#assistants_leave_assitant) | **DELETE** /assistants/{assistant_id}/remove/me | Leave an assistant
[**assistants_remove_library_from_assistant**](Assistant.md#assistants_remove_library_from_assistant) | **DELETE** /assistants/{assistant_id}/libraries/{library_id} | Remove a library from an assistant
[**assistants_remove_member**](Assistant.md#assistants_remove_member) | **DELETE** /assistants/{assistant_id}/members/{user_id} | Remove a single member
[**assistants_remove_tag_from_assistant**](Assistant.md#assistants_remove_tag_from_assistant) | **DELETE** /assistants/{assistant_id}/tags/{tag_id} | Remove a tag from an assistant
[**assistants_remove_tool_from_assistant**](Assistant.md#assistants_remove_tool_from_assistant) | **DELETE** /assistants/{assistant_id}/tools/{tool_id} | Remove a tool from an assistant
[**assistants_submit_assistant**](Assistant.md#assistants_submit_assistant) | **POST** /assistants/submit | Create an assistant with attachments
[**assistants_update_assistant**](Assistant.md#assistants_update_assistant) | **PATCH** /assistants/{assistant_id} | Update an assistant
[**assistants_update_assistant_groups**](Assistant.md#assistants_update_assistant_groups) | **PUT** /assistants/{assistant_id}/groups | Update Assistant Groups
[**assistants_update_assistant_visibility**](Assistant.md#assistants_update_assistant_visibility) | **PATCH** /assistants/{assistant_id}/visibility | Update Assistant Visibility


# **assistants_add_library_to_assistant**
> AssistantLibrary assistants_add_library_to_assistant(assistant_id, library_id, cookie_name=cookie_name)

Add a library to an assistant

Enables a library for a assistant by creating a new association

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.assistant_library import AssistantLibrary
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
    api_instance = neuland_hub_sdk.Assistant(api_client)
    assistant_id = 56 # int | 
    library_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Add a library to an assistant
        api_response = api_instance.assistants_add_library_to_assistant(assistant_id, library_id, cookie_name=cookie_name)
        print("The response of Assistant->assistants_add_library_to_assistant:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Assistant->assistants_add_library_to_assistant: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
 **library_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**AssistantLibrary**](AssistantLibrary.md)

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
**403** | No access to the library, or not the creator of the assistant. |  -  |
**404** | Assistant or library does not exist. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistants_add_members**
> List[AssistantMember] assistants_add_members(assistant_id, assistant_members_in, cookie_name=cookie_name)

Add members to an assistant

Idempotent on re-add. A pre-existing DISCOVERED (self-joined) row is
promoted to INVITED so it survives a later TENANT->PRIVATE downgrade.

Race-safe via ON CONFLICT DO UPDATE. ASSISTANT_MEMBER_ADDED fires only for
rows that didn't exist before this call — promoting a self-joiner from
DISCOVERED to INVITED is a bookkeeping change, not a new grant.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.assistant_member import AssistantMember
from neuland_hub_sdk.models.assistant_members_in import AssistantMembersIn
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
    api_instance = neuland_hub_sdk.Assistant(api_client)
    assistant_id = 56 # int | 
    assistant_members_in = neuland_hub_sdk.AssistantMembersIn() # AssistantMembersIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Add members to an assistant
        api_response = api_instance.assistants_add_members(assistant_id, assistant_members_in, cookie_name=cookie_name)
        print("The response of Assistant->assistants_add_members:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Assistant->assistants_add_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
 **assistant_members_in** | [**AssistantMembersIn**](AssistantMembersIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[AssistantMember]**](AssistantMember.md)

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
**403** | Not the creator of this assistant. |  -  |
**404** | No assistant exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistants_add_tag_to_assistant**
> Tagging assistants_add_tag_to_assistant(assistant_id, tag_id, cookie_name=cookie_name)

Add a tag to an assistant

Attach a tag to an assistant.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
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

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.Assistant(api_client)
    assistant_id = 56 # int | 
    tag_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Add a tag to an assistant
        api_response = api_instance.assistants_add_tag_to_assistant(assistant_id, tag_id, cookie_name=cookie_name)
        print("The response of Assistant->assistants_add_tag_to_assistant:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Assistant->assistants_add_tag_to_assistant: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
 **tag_id** | **int**|  | 
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
**403** | No access to the tag, or not the creator of the assistant. |  -  |
**404** | Assistant or tag does not exist. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistants_add_tool_to_assistant**
> AssistantTool assistants_add_tool_to_assistant(assistant_id, tool_id, cookie_name=cookie_name)

Add a tool to an assistant

Enable a tenant tool for the assistant.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.assistant_tool import AssistantTool
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
    api_instance = neuland_hub_sdk.Assistant(api_client)
    assistant_id = 56 # int | 
    tool_id = 56 # int | ID of the tool to enable.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Add a tool to an assistant
        api_response = api_instance.assistants_add_tool_to_assistant(assistant_id, tool_id, cookie_name=cookie_name)
        print("The response of Assistant->assistants_add_tool_to_assistant:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Assistant->assistants_add_tool_to_assistant: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
 **tool_id** | **int**| ID of the tool to enable. | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**AssistantTool**](AssistantTool.md)

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
**403** | Not the creator, or the tool is not enabled for the tenant. |  -  |
**404** | Assistant, owning user, or tool does not exist. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistants_create_assistant**
> Assistant assistants_create_assistant(assistant_in, cookie_name=cookie_name)

Create an assistant

Create an assistant from a JSON payload.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.assistant import Assistant
from neuland_hub_sdk.models.assistant_in import AssistantIn
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
    api_instance = neuland_hub_sdk.Assistant(api_client)
    assistant_in = neuland_hub_sdk.AssistantIn() # AssistantIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create an assistant
        api_response = api_instance.assistants_create_assistant(assistant_in, cookie_name=cookie_name)
        print("The response of Assistant->assistants_create_assistant:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Assistant->assistants_create_assistant: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_in** | [**AssistantIn**](AssistantIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Assistant**](Assistant.md)

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
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistants_delete_assistant**
> assistants_delete_assistant(assistant_id, cookie_name=cookie_name)

Delete an assistant

Delete an assistant and orphan its associated chats.

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
    api_instance = neuland_hub_sdk.Assistant(api_client)
    assistant_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete an assistant
        api_instance.assistants_delete_assistant(assistant_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Assistant->assistants_delete_assistant: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
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
**403** | Not the creator of this assistant. |  -  |
**404** | No assistant exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistants_delete_members**
> assistants_delete_members(assistant_id, assistant_members_in, cookie_name=cookie_name)

Remove members from an assistant

Remove one or more users from the assistant's membership.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.assistant_members_in import AssistantMembersIn
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
    api_instance = neuland_hub_sdk.Assistant(api_client)
    assistant_id = 56 # int | 
    assistant_members_in = neuland_hub_sdk.AssistantMembersIn() # AssistantMembersIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove members from an assistant
        api_instance.assistants_delete_members(assistant_id, assistant_members_in, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Assistant->assistants_delete_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
 **assistant_members_in** | [**AssistantMembersIn**](AssistantMembersIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**400** | One or more given users are not members of the assistant. |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Not the creator of this assistant. |  -  |
**404** | No assistant exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistants_join_assistant**
> AssistantMember assistants_join_assistant(assistant_id, cookie_name=cookie_name)

Join Assistant

self-add to a tenant-shared community assistant.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.assistant_member import AssistantMember
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
    api_instance = neuland_hub_sdk.Assistant(api_client)
    assistant_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Join Assistant
        api_response = api_instance.assistants_join_assistant(assistant_id, cookie_name=cookie_name)
        print("The response of Assistant->assistants_join_assistant:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Assistant->assistants_join_assistant: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**AssistantMember**](AssistantMember.md)

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

# **assistants_leave_assitant**
> assistants_leave_assitant(assistant_id, cookie_name=cookie_name)

Leave an assistant

user can leave the assistant by themselves.

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
    api_instance = neuland_hub_sdk.Assistant(api_client)
    assistant_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Leave an assistant
        api_instance.assistants_leave_assitant(assistant_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Assistant->assistants_leave_assitant: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
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
**403** | Not a member, or you are the owner and cannot leave. |  -  |
**404** | Assistant does not exist, or you are not a member. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistants_remove_library_from_assistant**
> assistants_remove_library_from_assistant(assistant_id, library_id, cookie_name=cookie_name)

Remove a library from an assistant

Disables a library from an assistant by removing the association

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
    api_instance = neuland_hub_sdk.Assistant(api_client)
    assistant_id = 56 # int | 
    library_id = 56 # int | ID of the library to disable.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove a library from an assistant
        api_instance.assistants_remove_library_from_assistant(assistant_id, library_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Assistant->assistants_remove_library_from_assistant: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
 **library_id** | **int**| ID of the library to disable. | 
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
**403** | Not the creator of this assistant. |  -  |
**404** | No assistant exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistants_remove_member**
> assistants_remove_member(assistant_id, user_id, cookie_name=cookie_name)

Remove a single member

Remove a specific user from the assistant's membership.

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
    api_instance = neuland_hub_sdk.Assistant(api_client)
    assistant_id = 56 # int | 
    user_id = 56 # int | ID of the member to remove.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove a single member
        api_instance.assistants_remove_member(assistant_id, user_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Assistant->assistants_remove_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
 **user_id** | **int**| ID of the member to remove. | 
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
**403** | Not the creator, or attempting to remove yourself as owner. |  -  |
**404** | Assistant does not exist, or the user is not a member. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistants_remove_tag_from_assistant**
> assistants_remove_tag_from_assistant(assistant_id, tag_id, cookie_name=cookie_name)

Remove a tag from an assistant

Detach a tag from an assistant.

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
    api_instance = neuland_hub_sdk.Assistant(api_client)
    assistant_id = 56 # int | 
    tag_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove a tag from an assistant
        api_instance.assistants_remove_tag_from_assistant(assistant_id, tag_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Assistant->assistants_remove_tag_from_assistant: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
 **tag_id** | **int**|  | 
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
**403** | No access to the tag, or not the creator of the assistant. |  -  |
**404** | Assistant or tag does not exist. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistants_remove_tool_from_assistant**
> assistants_remove_tool_from_assistant(assistant_id, tool_id, cookie_name=cookie_name)

Remove a tool from an assistant

Disable a tool for the assistant by removing the association.

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
    api_instance = neuland_hub_sdk.Assistant(api_client)
    assistant_id = 56 # int | 
    tool_id = 56 # int | ID of the tool to disable.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove a tool from an assistant
        api_instance.assistants_remove_tool_from_assistant(assistant_id, tool_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling Assistant->assistants_remove_tool_from_assistant: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
 **tool_id** | **int**| ID of the tool to disable. | 
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
**403** | Not the creator of this assistant. |  -  |
**404** | No assistant exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistants_submit_assistant**
> Assistant assistants_submit_assistant(name, cookie_name=cookie_name, model=model, description=description, description_show_in_chat=description_show_in_chat, predefined_prompts=predefined_prompts, avatar=avatar, instructions=instructions, temperature=temperature, similarity_top_k=similarity_top_k, input_type=input_type, form_fields=form_fields, files=files)

Create an assistant with attachments

Create an assistant via multipart form, with optional knowledge-file uploads.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.assistant import Assistant
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
    api_instance = neuland_hub_sdk.Assistant(api_client)
    name = 'name_example' # str | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    model = 'model_example' # str |  (optional)
    description = 'description_example' # str |  (optional)
    description_show_in_chat = False # bool |  (optional) (default to False)
    predefined_prompts = 'predefined_prompts_example' # str |  (optional)
    avatar = 'avatar_example' # str |  (optional)
    instructions = 'instructions_example' # str |  (optional)
    temperature = 3.4 # float |  (optional)
    similarity_top_k = 56 # int |  (optional)
    input_type = neuland_hub_sdk.AssistantInputTypeEnum() # AssistantInputTypeEnum |  (optional)
    form_fields = 'form_fields_example' # str |  (optional)
    files = None # List[bytes] |  (optional)

    try:
        # Create an assistant with attachments
        api_response = api_instance.assistants_submit_assistant(name, cookie_name=cookie_name, model=model, description=description, description_show_in_chat=description_show_in_chat, predefined_prompts=predefined_prompts, avatar=avatar, instructions=instructions, temperature=temperature, similarity_top_k=similarity_top_k, input_type=input_type, form_fields=form_fields, files=files)
        print("The response of Assistant->assistants_submit_assistant:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Assistant->assistants_submit_assistant: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**|  | 
 **cookie_name** | **str**|  | [optional] 
 **model** | **str**|  | [optional] 
 **description** | **str**|  | [optional] 
 **description_show_in_chat** | **bool**|  | [optional] [default to False]
 **predefined_prompts** | **str**|  | [optional] 
 **avatar** | **str**|  | [optional] 
 **instructions** | **str**|  | [optional] 
 **temperature** | **float**|  | [optional] 
 **similarity_top_k** | **int**|  | [optional] 
 **input_type** | [**AssistantInputTypeEnum**](AssistantInputTypeEnum.md)|  | [optional] 
 **form_fields** | **str**|  | [optional] 
 **files** | **List[bytes]**|  | [optional] 

### Return type

[**Assistant**](Assistant.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**403** | Usage budget exceeded. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistants_update_assistant**
> Assistant assistants_update_assistant(assistant_id, assistant_in, cookie_name=cookie_name)

Update an assistant

Update an assistant's configuration.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.assistant import Assistant
from neuland_hub_sdk.models.assistant_in import AssistantIn
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
    api_instance = neuland_hub_sdk.Assistant(api_client)
    assistant_id = 56 # int | 
    assistant_in = neuland_hub_sdk.AssistantIn() # AssistantIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update an assistant
        api_response = api_instance.assistants_update_assistant(assistant_id, assistant_in, cookie_name=cookie_name)
        print("The response of Assistant->assistants_update_assistant:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Assistant->assistants_update_assistant: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
 **assistant_in** | [**AssistantIn**](AssistantIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Assistant**](Assistant.md)

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
**403** | Not the creator of this assistant. |  -  |
**404** | No assistant exists with the given id. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assistants_update_assistant_groups**
> List[AssistantGroup] assistants_update_assistant_groups(assistant_id, assistant_groups_in, cookie_name=cookie_name)

Update Assistant Groups

Grant or update assistant access for user groups (replaces the current set).

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.assistant_group import AssistantGroup
from neuland_hub_sdk.models.assistant_groups_in import AssistantGroupsIn
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
    api_instance = neuland_hub_sdk.Assistant(api_client)
    assistant_id = 56 # int | 
    assistant_groups_in = neuland_hub_sdk.AssistantGroupsIn() # AssistantGroupsIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Assistant Groups
        api_response = api_instance.assistants_update_assistant_groups(assistant_id, assistant_groups_in, cookie_name=cookie_name)
        print("The response of Assistant->assistants_update_assistant_groups:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Assistant->assistants_update_assistant_groups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
 **assistant_groups_in** | [**AssistantGroupsIn**](AssistantGroupsIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[AssistantGroup]**](AssistantGroup.md)

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

# **assistants_update_assistant_visibility**
> Assistant assistants_update_assistant_visibility(assistant_id, assistant_visibility_update, cookie_name=cookie_name)

Update Assistant Visibility

creator-only visibility toggle. on TENANT -> PRIVATE, revokes marketplace-added members.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.assistant import Assistant
from neuland_hub_sdk.models.assistant_visibility_update import AssistantVisibilityUpdate
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
    api_instance = neuland_hub_sdk.Assistant(api_client)
    assistant_id = 56 # int | 
    assistant_visibility_update = neuland_hub_sdk.AssistantVisibilityUpdate() # AssistantVisibilityUpdate | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Assistant Visibility
        api_response = api_instance.assistants_update_assistant_visibility(assistant_id, assistant_visibility_update, cookie_name=cookie_name)
        print("The response of Assistant->assistants_update_assistant_visibility:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Assistant->assistants_update_assistant_visibility: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
 **assistant_visibility_update** | [**AssistantVisibilityUpdate**](AssistantVisibilityUpdate.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Assistant**](Assistant.md)

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

