# neuland_hub_sdk.AssistantsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_library_to_assistant_assistants_assistant_id_libraries_library_id_post**](AssistantsApi.md#add_library_to_assistant_assistants_assistant_id_libraries_library_id_post) | **POST** /assistants/{assistant_id}/libraries/{library_id} | Add Library To Assistant
[**add_members_assistants_assistant_id_members_post**](AssistantsApi.md#add_members_assistants_assistant_id_members_post) | **POST** /assistants/{assistant_id}/members | Add Members
[**add_tool_to_assistant_assistants_assistant_id_tools_tool_id_post**](AssistantsApi.md#add_tool_to_assistant_assistants_assistant_id_tools_tool_id_post) | **POST** /assistants/{assistant_id}/tools/{tool_id} | Add Tool To Assistant
[**create_assistant_assistants_post**](AssistantsApi.md#create_assistant_assistants_post) | **POST** /assistants/ | Create Assistant
[**delete_assistant_assistants_assistant_id_delete**](AssistantsApi.md#delete_assistant_assistants_assistant_id_delete) | **DELETE** /assistants/{assistant_id} | Delete Assistant
[**delete_members_assistants_assistant_id_members_delete**](AssistantsApi.md#delete_members_assistants_assistant_id_members_delete) | **DELETE** /assistants/{assistant_id}/members | Delete Members
[**leave_assitant_assistants_assistant_id_remove_me_delete**](AssistantsApi.md#leave_assitant_assistants_assistant_id_remove_me_delete) | **DELETE** /assistants/{assistant_id}/remove/me | Leave Assitant
[**remove_library_from_assistant_assistants_assistant_id_libraries_library_id_delete**](AssistantsApi.md#remove_library_from_assistant_assistants_assistant_id_libraries_library_id_delete) | **DELETE** /assistants/{assistant_id}/libraries/{library_id} | Remove Library From Assistant
[**remove_member_assistants_assistant_id_members_user_id_delete**](AssistantsApi.md#remove_member_assistants_assistant_id_members_user_id_delete) | **DELETE** /assistants/{assistant_id}/members/{user_id} | Remove Member
[**remove_tool_from_assistant_assistants_assistant_id_tools_tool_id_delete**](AssistantsApi.md#remove_tool_from_assistant_assistants_assistant_id_tools_tool_id_delete) | **DELETE** /assistants/{assistant_id}/tools/{tool_id} | Remove Tool From Assistant
[**submit_assistant_assistants_submit_post**](AssistantsApi.md#submit_assistant_assistants_submit_post) | **POST** /assistants/submit | Submit Assistant
[**update_assistant_assistants_assistant_id_patch**](AssistantsApi.md#update_assistant_assistants_assistant_id_patch) | **PATCH** /assistants/{assistant_id} | Update Assistant


# **add_library_to_assistant_assistants_assistant_id_libraries_library_id_post**
> AssistantLibrary add_library_to_assistant_assistants_assistant_id_libraries_library_id_post(assistant_id, library_id, cookie_name=cookie_name)

Add Library To Assistant

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
    api_instance = neuland_hub_sdk.AssistantsApi(api_client)
    assistant_id = 56 # int | 
    library_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Add Library To Assistant
        api_response = api_instance.add_library_to_assistant_assistants_assistant_id_libraries_library_id_post(assistant_id, library_id, cookie_name=cookie_name)
        print("The response of AssistantsApi->add_library_to_assistant_assistants_assistant_id_libraries_library_id_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssistantsApi->add_library_to_assistant_assistants_assistant_id_libraries_library_id_post: %s\n" % e)
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
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_members_assistants_assistant_id_members_post**
> List[AssistantMember] add_members_assistants_assistant_id_members_post(assistant_id, assistant_members_in, cookie_name=cookie_name)

Add Members

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
    api_instance = neuland_hub_sdk.AssistantsApi(api_client)
    assistant_id = 56 # int | 
    assistant_members_in = neuland_hub_sdk.AssistantMembersIn() # AssistantMembersIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Add Members
        api_response = api_instance.add_members_assistants_assistant_id_members_post(assistant_id, assistant_members_in, cookie_name=cookie_name)
        print("The response of AssistantsApi->add_members_assistants_assistant_id_members_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssistantsApi->add_members_assistants_assistant_id_members_post: %s\n" % e)
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
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_tool_to_assistant_assistants_assistant_id_tools_tool_id_post**
> AssistantTool add_tool_to_assistant_assistants_assistant_id_tools_tool_id_post(assistant_id, tool_id, cookie_name=cookie_name)

Add Tool To Assistant

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
    api_instance = neuland_hub_sdk.AssistantsApi(api_client)
    assistant_id = 56 # int | 
    tool_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Add Tool To Assistant
        api_response = api_instance.add_tool_to_assistant_assistants_assistant_id_tools_tool_id_post(assistant_id, tool_id, cookie_name=cookie_name)
        print("The response of AssistantsApi->add_tool_to_assistant_assistants_assistant_id_tools_tool_id_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssistantsApi->add_tool_to_assistant_assistants_assistant_id_tools_tool_id_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
 **tool_id** | **int**|  | 
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
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_assistant_assistants_post**
> Assistant create_assistant_assistants_post(assistant_in, cookie_name=cookie_name)

Create Assistant

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
    api_instance = neuland_hub_sdk.AssistantsApi(api_client)
    assistant_in = neuland_hub_sdk.AssistantIn() # AssistantIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Assistant
        api_response = api_instance.create_assistant_assistants_post(assistant_in, cookie_name=cookie_name)
        print("The response of AssistantsApi->create_assistant_assistants_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssistantsApi->create_assistant_assistants_post: %s\n" % e)
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
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_assistant_assistants_assistant_id_delete**
> delete_assistant_assistants_assistant_id_delete(assistant_id, cookie_name=cookie_name)

Delete Assistant

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
    api_instance = neuland_hub_sdk.AssistantsApi(api_client)
    assistant_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Assistant
        api_instance.delete_assistant_assistants_assistant_id_delete(assistant_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling AssistantsApi->delete_assistant_assistants_assistant_id_delete: %s\n" % e)
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
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_members_assistants_assistant_id_members_delete**
> delete_members_assistants_assistant_id_members_delete(assistant_id, assistant_members_in, cookie_name=cookie_name)

Delete Members

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
    api_instance = neuland_hub_sdk.AssistantsApi(api_client)
    assistant_id = 56 # int | 
    assistant_members_in = neuland_hub_sdk.AssistantMembersIn() # AssistantMembersIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Members
        api_instance.delete_members_assistants_assistant_id_members_delete(assistant_id, assistant_members_in, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling AssistantsApi->delete_members_assistants_assistant_id_members_delete: %s\n" % e)
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
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **leave_assitant_assistants_assistant_id_remove_me_delete**
> leave_assitant_assistants_assistant_id_remove_me_delete(assistant_id, cookie_name=cookie_name)

Leave Assitant

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
    api_instance = neuland_hub_sdk.AssistantsApi(api_client)
    assistant_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Leave Assitant
        api_instance.leave_assitant_assistants_assistant_id_remove_me_delete(assistant_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling AssistantsApi->leave_assitant_assistants_assistant_id_remove_me_delete: %s\n" % e)
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
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_library_from_assistant_assistants_assistant_id_libraries_library_id_delete**
> remove_library_from_assistant_assistants_assistant_id_libraries_library_id_delete(assistant_id, library_id, cookie_name=cookie_name)

Remove Library From Assistant

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
    api_instance = neuland_hub_sdk.AssistantsApi(api_client)
    assistant_id = 56 # int | 
    library_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove Library From Assistant
        api_instance.remove_library_from_assistant_assistants_assistant_id_libraries_library_id_delete(assistant_id, library_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling AssistantsApi->remove_library_from_assistant_assistants_assistant_id_libraries_library_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
 **library_id** | **int**|  | 
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

# **remove_member_assistants_assistant_id_members_user_id_delete**
> remove_member_assistants_assistant_id_members_user_id_delete(assistant_id, user_id, cookie_name=cookie_name)

Remove Member

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
    api_instance = neuland_hub_sdk.AssistantsApi(api_client)
    assistant_id = 56 # int | 
    user_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove Member
        api_instance.remove_member_assistants_assistant_id_members_user_id_delete(assistant_id, user_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling AssistantsApi->remove_member_assistants_assistant_id_members_user_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
 **user_id** | **int**|  | 
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

# **remove_tool_from_assistant_assistants_assistant_id_tools_tool_id_delete**
> remove_tool_from_assistant_assistants_assistant_id_tools_tool_id_delete(assistant_id, tool_id, cookie_name=cookie_name)

Remove Tool From Assistant

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
    api_instance = neuland_hub_sdk.AssistantsApi(api_client)
    assistant_id = 56 # int | 
    tool_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove Tool From Assistant
        api_instance.remove_tool_from_assistant_assistants_assistant_id_tools_tool_id_delete(assistant_id, tool_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling AssistantsApi->remove_tool_from_assistant_assistants_assistant_id_tools_tool_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
 **tool_id** | **int**|  | 
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

# **submit_assistant_assistants_submit_post**
> Assistant submit_assistant_assistants_submit_post(name, cookie_name=cookie_name, provider=provider, model=model, description=description, avatar=avatar, instructions=instructions, temperature=temperature, similarity_top_k=similarity_top_k, files=files)

Submit Assistant

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
    api_instance = neuland_hub_sdk.AssistantsApi(api_client)
    name = 'name_example' # str | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    provider = 'provider_example' # str |  (optional)
    model = 'model_example' # str |  (optional)
    description = 'description_example' # str |  (optional)
    avatar = 'avatar_example' # str |  (optional)
    instructions = 'instructions_example' # str |  (optional)
    temperature = 3.4 # float |  (optional)
    similarity_top_k = 56 # int |  (optional)
    files = ['files_example'] # List[str] |  (optional)

    try:
        # Submit Assistant
        api_response = api_instance.submit_assistant_assistants_submit_post(name, cookie_name=cookie_name, provider=provider, model=model, description=description, avatar=avatar, instructions=instructions, temperature=temperature, similarity_top_k=similarity_top_k, files=files)
        print("The response of AssistantsApi->submit_assistant_assistants_submit_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssistantsApi->submit_assistant_assistants_submit_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**|  | 
 **cookie_name** | **str**|  | [optional] 
 **provider** | **str**|  | [optional] 
 **model** | **str**|  | [optional] 
 **description** | **str**|  | [optional] 
 **avatar** | **str**|  | [optional] 
 **instructions** | **str**|  | [optional] 
 **temperature** | **float**|  | [optional] 
 **similarity_top_k** | **int**|  | [optional] 
 **files** | [**List[str]**](str.md)|  | [optional] 

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
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_assistant_assistants_assistant_id_patch**
> Assistant update_assistant_assistants_assistant_id_patch(assistant_id, assistant_in, cookie_name=cookie_name)

Update Assistant

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
    api_instance = neuland_hub_sdk.AssistantsApi(api_client)
    assistant_id = 56 # int | 
    assistant_in = neuland_hub_sdk.AssistantIn() # AssistantIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Assistant
        api_response = api_instance.update_assistant_assistants_assistant_id_patch(assistant_id, assistant_in, cookie_name=cookie_name)
        print("The response of AssistantsApi->update_assistant_assistants_assistant_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssistantsApi->update_assistant_assistants_assistant_id_patch: %s\n" % e)
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
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

