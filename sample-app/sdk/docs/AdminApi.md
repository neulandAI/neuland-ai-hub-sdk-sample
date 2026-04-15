# neuland_hub_sdk.AdminApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_document_detail_admin_documents_document_id_get**](AdminApi.md#admin_document_detail_admin_documents_document_id_get) | **GET** /admin/documents/{document_id} | Admin Document Detail
[**admin_embedding_admin_embedding_get**](AdminApi.md#admin_embedding_admin_embedding_get) | **GET** /admin/embedding | Admin Embedding
[**admin_files_admin_files_get**](AdminApi.md#admin_files_admin_files_get) | **GET** /admin/files | Admin Files
[**admin_health_live_admin_health_live_get**](AdminApi.md#admin_health_live_admin_health_live_get) | **GET** /admin/health-live | Admin Health Live
[**admin_llm_admin_llm_get**](AdminApi.md#admin_llm_admin_llm_get) | **GET** /admin/llm | Admin Llm
[**admin_login_admin_login_post**](AdminApi.md#admin_login_admin_login_post) | **POST** /admin/login | Admin Login
[**admin_login_page_admin_login_get**](AdminApi.md#admin_login_page_admin_login_get) | **GET** /admin/login | Admin Login Page
[**admin_logout_get**](AdminApi.md#admin_logout_get) | **GET** /admin/logout | Admin Logout
[**admin_logout_post**](AdminApi.md#admin_logout_post) | **POST** /admin/logout | Admin Logout
[**admin_maintenance_admin_maintenance_get**](AdminApi.md#admin_maintenance_admin_maintenance_get) | **GET** /admin/maintenance | Admin Maintenance
[**admin_overview_admin_overview_get**](AdminApi.md#admin_overview_admin_overview_get) | **GET** /admin/overview | Admin Overview
[**admin_pipeline_documents_admin_pipeline_documents_get**](AdminApi.md#admin_pipeline_documents_admin_pipeline_documents_get) | **GET** /admin/pipeline/documents | Admin Pipeline Documents
[**admin_pipeline_stages_admin_pipeline_stages_get**](AdminApi.md#admin_pipeline_stages_admin_pipeline_stages_get) | **GET** /admin/pipeline/stages | Admin Pipeline Stages
[**admin_post_admin_post_get**](AdminApi.md#admin_post_admin_post_get) | **GET** /admin/post | Admin Post
[**admin_postgres_admin_postgres_get**](AdminApi.md#admin_postgres_admin_postgres_get) | **GET** /admin/postgres | Admin Postgres
[**admin_queues_admin_queues_get**](AdminApi.md#admin_queues_admin_queues_get) | **GET** /admin/queues | Admin Queues
[**admin_report_detail_admin_reports_report_id_get**](AdminApi.md#admin_report_detail_admin_reports_report_id_get) | **GET** /admin/reports/{report_id} | Admin Report Detail
[**admin_reports_admin_reports_get**](AdminApi.md#admin_reports_admin_reports_get) | **GET** /admin/reports | Admin Reports
[**admin_root_admin_get**](AdminApi.md#admin_root_admin_get) | **GET** /admin | Admin Root
[**admin_security_admin_security_get**](AdminApi.md#admin_security_admin_security_get) | **GET** /admin/security | Admin Security
[**admin_tasks_metrics_admin_metrics_get**](AdminApi.md#admin_tasks_metrics_admin_metrics_get) | **GET** /admin/metrics | Admin Tasks Metrics
[**admin_tool_call_detail_admin_tool_calls_tool_call_id_get**](AdminApi.md#admin_tool_call_detail_admin_tool_calls_tool_call_id_get) | **GET** /admin/tool-calls/{tool_call_id} | Admin Tool Call Detail
[**admin_tool_detail_admin_tools_tool_id_get**](AdminApi.md#admin_tool_detail_admin_tools_tool_id_get) | **GET** /admin/tools/{tool_id} | Admin Tool Detail
[**admin_trace_detail_admin_traces_trace_id_get**](AdminApi.md#admin_trace_detail_admin_traces_trace_id_get) | **GET** /admin/traces/{trace_id} | Admin Trace Detail
[**admin_trace_lookup_admin_trace_get**](AdminApi.md#admin_trace_lookup_admin_trace_get) | **GET** /admin/trace | Admin Trace Lookup
[**admin_traces_admin_traces_get**](AdminApi.md#admin_traces_admin_traces_get) | **GET** /admin/traces | Admin Traces
[**admin_worker_detail_admin_workers_worker_name_get**](AdminApi.md#admin_worker_detail_admin_workers_worker_name_get) | **GET** /admin/workers/{worker_name} | Admin Worker Detail
[**admin_workers_admin_workers_get**](AdminApi.md#admin_workers_admin_workers_get) | **GET** /admin/workers | Admin Workers
[**chat_trace_admin_chat_chat_id_get**](AdminApi.md#chat_trace_admin_chat_chat_id_get) | **GET** /admin/chat/{chat_id} | Chat Trace
[**message_trace_admin_message_message_id_get**](AdminApi.md#message_trace_admin_message_message_id_get) | **GET** /admin/message/{message_id} | Message Trace
[**reports_bulk_action_admin_reports_bulk_post**](AdminApi.md#reports_bulk_action_admin_reports_bulk_post) | **POST** /admin/reports/bulk | Reports Bulk Action
[**update_system_settings_admin_system_settings_update_post**](AdminApi.md#update_system_settings_admin_system_settings_update_post) | **POST** /admin/system-settings/update | Update System Settings


# **admin_document_detail_admin_documents_document_id_get**
> str admin_document_detail_admin_documents_document_id_get(document_id)

Admin Document Detail

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)
    document_id = 56 # int | 

    try:
        # Admin Document Detail
        api_response = api_instance.admin_document_detail_admin_documents_document_id_get(document_id)
        print("The response of AdminApi->admin_document_detail_admin_documents_document_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_document_detail_admin_documents_document_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **int**|  | 

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

# **admin_embedding_admin_embedding_get**
> str admin_embedding_admin_embedding_get()

Admin Embedding

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)

    try:
        # Admin Embedding
        api_response = api_instance.admin_embedding_admin_embedding_get()
        print("The response of AdminApi->admin_embedding_admin_embedding_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_embedding_admin_embedding_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_files_admin_files_get**
> str admin_files_admin_files_get()

Admin Files

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)

    try:
        # Admin Files
        api_response = api_instance.admin_files_admin_files_get()
        print("The response of AdminApi->admin_files_admin_files_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_files_admin_files_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_health_live_admin_health_live_get**
> str admin_health_live_admin_health_live_get()

Admin Health Live

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)

    try:
        # Admin Health Live
        api_response = api_instance.admin_health_live_admin_health_live_get()
        print("The response of AdminApi->admin_health_live_admin_health_live_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_health_live_admin_health_live_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_llm_admin_llm_get**
> str admin_llm_admin_llm_get()

Admin Llm

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)

    try:
        # Admin Llm
        api_response = api_instance.admin_llm_admin_llm_get()
        print("The response of AdminApi->admin_llm_admin_llm_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_llm_admin_llm_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_login_admin_login_post**
> object admin_login_admin_login_post(username, password)

Admin Login

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)
    username = 'username_example' # str | 
    password = 'password_example' # str | 

    try:
        # Admin Login
        api_response = api_instance.admin_login_admin_login_post(username, password)
        print("The response of AdminApi->admin_login_admin_login_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_login_admin_login_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**|  | 
 **password** | **str**|  | 

### Return type

**object**

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

# **admin_login_page_admin_login_get**
> str admin_login_page_admin_login_get()

Admin Login Page

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)

    try:
        # Admin Login Page
        api_response = api_instance.admin_login_page_admin_login_get()
        print("The response of AdminApi->admin_login_page_admin_login_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_login_page_admin_login_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_logout_get**
> object admin_logout_get(admin_token=admin_token)

Admin Logout

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)
    admin_token = 'admin_token_example' # str |  (optional)

    try:
        # Admin Logout
        api_response = api_instance.admin_logout_get(admin_token=admin_token)
        print("The response of AdminApi->admin_logout_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_logout_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **admin_token** | **str**|  | [optional] 

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

# **admin_logout_post**
> object admin_logout_post(admin_token=admin_token)

Admin Logout

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)
    admin_token = 'admin_token_example' # str |  (optional)

    try:
        # Admin Logout
        api_response = api_instance.admin_logout_post(admin_token=admin_token)
        print("The response of AdminApi->admin_logout_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_logout_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **admin_token** | **str**|  | [optional] 

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

# **admin_maintenance_admin_maintenance_get**
> str admin_maintenance_admin_maintenance_get(page=page, ipp=ipp, q=q, sort=sort, order=order)

Admin Maintenance

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)
    page = 1 # int |  (optional) (default to 1)
    ipp = 25 # int |  (optional) (default to 25)
    q = '' # str |  (optional) (default to '')
    sort = '' # str |  (optional) (default to '')
    order = '' # str |  (optional) (default to '')

    try:
        # Admin Maintenance
        api_response = api_instance.admin_maintenance_admin_maintenance_get(page=page, ipp=ipp, q=q, sort=sort, order=order)
        print("The response of AdminApi->admin_maintenance_admin_maintenance_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_maintenance_admin_maintenance_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**|  | [optional] [default to 1]
 **ipp** | **int**|  | [optional] [default to 25]
 **q** | **str**|  | [optional] [default to &#39;&#39;]
 **sort** | **str**|  | [optional] [default to &#39;&#39;]
 **order** | **str**|  | [optional] [default to &#39;&#39;]

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

# **admin_overview_admin_overview_get**
> str admin_overview_admin_overview_get()

Admin Overview

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)

    try:
        # Admin Overview
        api_response = api_instance.admin_overview_admin_overview_get()
        print("The response of AdminApi->admin_overview_admin_overview_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_overview_admin_overview_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_pipeline_documents_admin_pipeline_documents_get**
> str admin_pipeline_documents_admin_pipeline_documents_get(state=state, stage=stage, chat_id=chat_id, user_id=user_id, library_id=library_id, active_only=active_only, failed_only=failed_only, page=page, ipp=ipp, q=q, sort=sort, order=order)

Admin Pipeline Documents

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)
    state = '' # str |  (optional) (default to '')
    stage = '' # str |  (optional) (default to '')
    chat_id = 56 # int |  (optional)
    user_id = 56 # int |  (optional)
    library_id = 56 # int |  (optional)
    active_only = '' # str |  (optional) (default to '')
    failed_only = '' # str |  (optional) (default to '')
    page = 1 # int |  (optional) (default to 1)
    ipp = 25 # int |  (optional) (default to 25)
    q = '' # str |  (optional) (default to '')
    sort = '' # str |  (optional) (default to '')
    order = '' # str |  (optional) (default to '')

    try:
        # Admin Pipeline Documents
        api_response = api_instance.admin_pipeline_documents_admin_pipeline_documents_get(state=state, stage=stage, chat_id=chat_id, user_id=user_id, library_id=library_id, active_only=active_only, failed_only=failed_only, page=page, ipp=ipp, q=q, sort=sort, order=order)
        print("The response of AdminApi->admin_pipeline_documents_admin_pipeline_documents_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_pipeline_documents_admin_pipeline_documents_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **state** | **str**|  | [optional] [default to &#39;&#39;]
 **stage** | **str**|  | [optional] [default to &#39;&#39;]
 **chat_id** | **int**|  | [optional] 
 **user_id** | **int**|  | [optional] 
 **library_id** | **int**|  | [optional] 
 **active_only** | **str**|  | [optional] [default to &#39;&#39;]
 **failed_only** | **str**|  | [optional] [default to &#39;&#39;]
 **page** | **int**|  | [optional] [default to 1]
 **ipp** | **int**|  | [optional] [default to 25]
 **q** | **str**|  | [optional] [default to &#39;&#39;]
 **sort** | **str**|  | [optional] [default to &#39;&#39;]
 **order** | **str**|  | [optional] [default to &#39;&#39;]

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

# **admin_pipeline_stages_admin_pipeline_stages_get**
> str admin_pipeline_stages_admin_pipeline_stages_get(page=page, ipp=ipp, q=q, sort=sort, order=order)

Admin Pipeline Stages

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)
    page = 1 # int |  (optional) (default to 1)
    ipp = 25 # int |  (optional) (default to 25)
    q = '' # str |  (optional) (default to '')
    sort = '' # str |  (optional) (default to '')
    order = '' # str |  (optional) (default to '')

    try:
        # Admin Pipeline Stages
        api_response = api_instance.admin_pipeline_stages_admin_pipeline_stages_get(page=page, ipp=ipp, q=q, sort=sort, order=order)
        print("The response of AdminApi->admin_pipeline_stages_admin_pipeline_stages_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_pipeline_stages_admin_pipeline_stages_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**|  | [optional] [default to 1]
 **ipp** | **int**|  | [optional] [default to 25]
 **q** | **str**|  | [optional] [default to &#39;&#39;]
 **sort** | **str**|  | [optional] [default to &#39;&#39;]
 **order** | **str**|  | [optional] [default to &#39;&#39;]

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

# **admin_post_admin_post_get**
> str admin_post_admin_post_get()

Admin Post

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)

    try:
        # Admin Post
        api_response = api_instance.admin_post_admin_post_get()
        print("The response of AdminApi->admin_post_admin_post_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_post_admin_post_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_postgres_admin_postgres_get**
> str admin_postgres_admin_postgres_get()

Admin Postgres

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)

    try:
        # Admin Postgres
        api_response = api_instance.admin_postgres_admin_postgres_get()
        print("The response of AdminApi->admin_postgres_admin_postgres_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_postgres_admin_postgres_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_queues_admin_queues_get**
> str admin_queues_admin_queues_get()

Admin Queues

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)

    try:
        # Admin Queues
        api_response = api_instance.admin_queues_admin_queues_get()
        print("The response of AdminApi->admin_queues_admin_queues_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_queues_admin_queues_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_report_detail_admin_reports_report_id_get**
> str admin_report_detail_admin_reports_report_id_get(report_id)

Admin Report Detail

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)
    report_id = 'report_id_example' # str | 

    try:
        # Admin Report Detail
        api_response = api_instance.admin_report_detail_admin_reports_report_id_get(report_id)
        print("The response of AdminApi->admin_report_detail_admin_reports_report_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_report_detail_admin_reports_report_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **report_id** | **str**|  | 

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

# **admin_reports_admin_reports_get**
> str admin_reports_admin_reports_get(page=page, ipp=ipp, q=q, sort=sort, order=order)

Admin Reports

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)
    page = 1 # int |  (optional) (default to 1)
    ipp = 25 # int |  (optional) (default to 25)
    q = '' # str |  (optional) (default to '')
    sort = '' # str |  (optional) (default to '')
    order = '' # str |  (optional) (default to '')

    try:
        # Admin Reports
        api_response = api_instance.admin_reports_admin_reports_get(page=page, ipp=ipp, q=q, sort=sort, order=order)
        print("The response of AdminApi->admin_reports_admin_reports_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_reports_admin_reports_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**|  | [optional] [default to 1]
 **ipp** | **int**|  | [optional] [default to 25]
 **q** | **str**|  | [optional] [default to &#39;&#39;]
 **sort** | **str**|  | [optional] [default to &#39;&#39;]
 **order** | **str**|  | [optional] [default to &#39;&#39;]

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

# **admin_root_admin_get**
> str admin_root_admin_get()

Admin Root

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)

    try:
        # Admin Root
        api_response = api_instance.admin_root_admin_get()
        print("The response of AdminApi->admin_root_admin_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_root_admin_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_security_admin_security_get**
> str admin_security_admin_security_get()

Admin Security

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)

    try:
        # Admin Security
        api_response = api_instance.admin_security_admin_security_get()
        print("The response of AdminApi->admin_security_admin_security_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_security_admin_security_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_tasks_metrics_admin_metrics_get**
> str admin_tasks_metrics_admin_metrics_get(page=page, ipp=ipp, q=q, sort=sort, order=order)

Admin Tasks Metrics

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)
    page = 1 # int |  (optional) (default to 1)
    ipp = 25 # int |  (optional) (default to 25)
    q = '' # str |  (optional) (default to '')
    sort = '' # str |  (optional) (default to '')
    order = '' # str |  (optional) (default to '')

    try:
        # Admin Tasks Metrics
        api_response = api_instance.admin_tasks_metrics_admin_metrics_get(page=page, ipp=ipp, q=q, sort=sort, order=order)
        print("The response of AdminApi->admin_tasks_metrics_admin_metrics_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_tasks_metrics_admin_metrics_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**|  | [optional] [default to 1]
 **ipp** | **int**|  | [optional] [default to 25]
 **q** | **str**|  | [optional] [default to &#39;&#39;]
 **sort** | **str**|  | [optional] [default to &#39;&#39;]
 **order** | **str**|  | [optional] [default to &#39;&#39;]

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

# **admin_tool_call_detail_admin_tool_calls_tool_call_id_get**
> str admin_tool_call_detail_admin_tool_calls_tool_call_id_get(tool_call_id)

Admin Tool Call Detail

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)
    tool_call_id = 56 # int | 

    try:
        # Admin Tool Call Detail
        api_response = api_instance.admin_tool_call_detail_admin_tool_calls_tool_call_id_get(tool_call_id)
        print("The response of AdminApi->admin_tool_call_detail_admin_tool_calls_tool_call_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_tool_call_detail_admin_tool_calls_tool_call_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tool_call_id** | **int**|  | 

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

# **admin_tool_detail_admin_tools_tool_id_get**
> str admin_tool_detail_admin_tools_tool_id_get(tool_id)

Admin Tool Detail

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)
    tool_id = 56 # int | 

    try:
        # Admin Tool Detail
        api_response = api_instance.admin_tool_detail_admin_tools_tool_id_get(tool_id)
        print("The response of AdminApi->admin_tool_detail_admin_tools_tool_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_tool_detail_admin_tools_tool_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tool_id** | **int**|  | 

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

# **admin_trace_detail_admin_traces_trace_id_get**
> str admin_trace_detail_admin_traces_trace_id_get(trace_id)

Admin Trace Detail

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)
    trace_id = 56 # int | 

    try:
        # Admin Trace Detail
        api_response = api_instance.admin_trace_detail_admin_traces_trace_id_get(trace_id)
        print("The response of AdminApi->admin_trace_detail_admin_traces_trace_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_trace_detail_admin_traces_trace_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trace_id** | **int**|  | 

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

# **admin_trace_lookup_admin_trace_get**
> str admin_trace_lookup_admin_trace_get(chat_id=chat_id, message_id=message_id)

Admin Trace Lookup

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)
    chat_id = 56 # int |  (optional)
    message_id = 56 # int |  (optional)

    try:
        # Admin Trace Lookup
        api_response = api_instance.admin_trace_lookup_admin_trace_get(chat_id=chat_id, message_id=message_id)
        print("The response of AdminApi->admin_trace_lookup_admin_trace_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_trace_lookup_admin_trace_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **int**|  | [optional] 
 **message_id** | **int**|  | [optional] 

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

# **admin_traces_admin_traces_get**
> str admin_traces_admin_traces_get(page=page, ipp=ipp, q=q, kind=kind, stale_only=stale_only, chats_only=chats_only, correlation_id=correlation_id, sort=sort, order=order)

Admin Traces

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)
    page = 1 # int |  (optional) (default to 1)
    ipp = 25 # int |  (optional) (default to 25)
    q = '' # str |  (optional) (default to '')
    kind = '' # str |  (optional) (default to '')
    stale_only = '' # str |  (optional) (default to '')
    chats_only = '' # str |  (optional) (default to '')
    correlation_id = '' # str |  (optional) (default to '')
    sort = '' # str |  (optional) (default to '')
    order = '' # str |  (optional) (default to '')

    try:
        # Admin Traces
        api_response = api_instance.admin_traces_admin_traces_get(page=page, ipp=ipp, q=q, kind=kind, stale_only=stale_only, chats_only=chats_only, correlation_id=correlation_id, sort=sort, order=order)
        print("The response of AdminApi->admin_traces_admin_traces_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_traces_admin_traces_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**|  | [optional] [default to 1]
 **ipp** | **int**|  | [optional] [default to 25]
 **q** | **str**|  | [optional] [default to &#39;&#39;]
 **kind** | **str**|  | [optional] [default to &#39;&#39;]
 **stale_only** | **str**|  | [optional] [default to &#39;&#39;]
 **chats_only** | **str**|  | [optional] [default to &#39;&#39;]
 **correlation_id** | **str**|  | [optional] [default to &#39;&#39;]
 **sort** | **str**|  | [optional] [default to &#39;&#39;]
 **order** | **str**|  | [optional] [default to &#39;&#39;]

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

# **admin_worker_detail_admin_workers_worker_name_get**
> str admin_worker_detail_admin_workers_worker_name_get(worker_name)

Admin Worker Detail

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)
    worker_name = 'worker_name_example' # str | 

    try:
        # Admin Worker Detail
        api_response = api_instance.admin_worker_detail_admin_workers_worker_name_get(worker_name)
        print("The response of AdminApi->admin_worker_detail_admin_workers_worker_name_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_worker_detail_admin_workers_worker_name_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **worker_name** | **str**|  | 

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

# **admin_workers_admin_workers_get**
> str admin_workers_admin_workers_get()

Admin Workers

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)

    try:
        # Admin Workers
        api_response = api_instance.admin_workers_admin_workers_get()
        print("The response of AdminApi->admin_workers_admin_workers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_workers_admin_workers_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chat_trace_admin_chat_chat_id_get**
> str chat_trace_admin_chat_chat_id_get(chat_id)

Chat Trace

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)
    chat_id = 56 # int | 

    try:
        # Chat Trace
        api_response = api_instance.chat_trace_admin_chat_chat_id_get(chat_id)
        print("The response of AdminApi->chat_trace_admin_chat_chat_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->chat_trace_admin_chat_chat_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **int**|  | 

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

# **message_trace_admin_message_message_id_get**
> str message_trace_admin_message_message_id_get(message_id)

Message Trace

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)
    message_id = 56 # int | 

    try:
        # Message Trace
        api_response = api_instance.message_trace_admin_message_message_id_get(message_id)
        print("The response of AdminApi->message_trace_admin_message_message_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->message_trace_admin_message_message_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message_id** | **int**|  | 

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

# **reports_bulk_action_admin_reports_bulk_post**
> str reports_bulk_action_admin_reports_bulk_post(action, selected_ids=selected_ids)

Reports Bulk Action

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)
    action = 'action_example' # str | 
    selected_ids = ['selected_ids_example'] # List[str] |  (optional)

    try:
        # Reports Bulk Action
        api_response = api_instance.reports_bulk_action_admin_reports_bulk_post(action, selected_ids=selected_ids)
        print("The response of AdminApi->reports_bulk_action_admin_reports_bulk_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->reports_bulk_action_admin_reports_bulk_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **action** | **str**|  | 
 **selected_ids** | [**List[str]**](str.md)|  | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: text/html, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_system_settings_admin_system_settings_update_post**
> object update_system_settings_admin_system_settings_update_post()

Update System Settings

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
    api_instance = neuland_hub_sdk.AdminApi(api_client)

    try:
        # Update System Settings
        api_response = api_instance.update_system_settings_admin_system_settings_update_post()
        print("The response of AdminApi->update_system_settings_admin_system_settings_update_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->update_system_settings_admin_system_settings_update_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

