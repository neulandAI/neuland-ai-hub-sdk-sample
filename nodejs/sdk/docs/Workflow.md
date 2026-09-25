# Workflow

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**workflowsCreateRun**](#workflowscreaterun) | **POST** /workflows/{workflow_id}/runs | Create Run|
|[**workflowsCreateRunStreamToken**](#workflowscreaterunstreamtoken) | **POST** /workflows/{workflow_id}/runs/{run_id}/stream-token | Create Run Stream Token|
|[**workflowsCreateWorkflow**](#workflowscreateworkflow) | **POST** /workflows/ | Create Workflow|
|[**workflowsDeleteWorkflow**](#workflowsdeleteworkflow) | **DELETE** /workflows/{workflow_id} | Delete Workflow|
|[**workflowsRefineWorkflow**](#workflowsrefineworkflow) | **POST** /workflows/{workflow_id}/chat | Refine Workflow|
|[**workflowsStreamRunEvents**](#workflowsstreamrunevents) | **POST** /workflows/{workflow_id}/runs/{run_id}/events | Stream Run Events|
|[**workflowsUpdateWorkflow**](#workflowsupdateworkflow) | **PATCH** /workflows/{workflow_id} | Update Workflow|

# **workflowsCreateRun**
> RunCreateOut workflowsCreateRun()

Trigger a manual run. Creator-only. Inserts a pending run, mints a run-scoped stream token, and enqueues execution on the ``heavy`` queue. Rejected with 400 once the workflow is at its non-terminal-run cap.

### Example

```typescript
import {
    Workflow,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Workflow(configuration);

let workflowId: string; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.workflowsCreateRun(
    workflowId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowId** | [**string**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**RunCreateOut**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflowsCreateRunStreamToken**
> StreamTokenOut workflowsCreateRunStreamToken()

Mint a fresh stream token to replay a historical run. Creator-only.

### Example

```typescript
import {
    Workflow,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Workflow(configuration);

let workflowId: string; // (default to undefined)
let runId: string; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.workflowsCreateRunStreamToken(
    workflowId,
    runId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowId** | [**string**] |  | defaults to undefined|
| **runId** | [**string**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**StreamTokenOut**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflowsCreateWorkflow**
> Workflow workflowsCreateWorkflow(workflowIn)

Create a new workflow with an empty spec. Rejected with 400 once the tenant is at its active-workflow quota.

### Example

```typescript
import {
    Workflow,
    Configuration,
    WorkflowIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Workflow(configuration);

let workflowIn: WorkflowIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.workflowsCreateWorkflow(
    workflowIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowIn** | **WorkflowIn**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Workflow**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflowsDeleteWorkflow**
> workflowsDeleteWorkflow()

Delete a workflow. Only its creator may delete it.

### Example

```typescript
import {
    Workflow,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Workflow(configuration);

let workflowId: string; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.workflowsDeleteWorkflow(
    workflowId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowId** | [**string**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


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
|**204** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflowsRefineWorkflow**
> WorkflowChatOut workflowsRefineWorkflow(workflowChatIn)

Refine a workflow\'s spec via the main chat orchestrator. Synchronous; only the creator may chat.  Loads the workflow\'s linked chat history + current spec into the same `achat` orchestrator (authoring prompt, no tools bound), persists the user + assistant turns, and returns the assistant\'s prose (spec block stripped) plus the parsed spec (null when no ``<workflow_spec>`` block was emitted).  A workflow still unsaved after a clarifying round means the user answered and was asked again, and the prompt\'s \"ask at most once\" rule does not reliably hold — so asking stops deterministically from then on. A reply that emits no spec and asks nothing is reported as an error: otherwise the caller shows success prose over an unchanged workflow.

### Example

```typescript
import {
    Workflow,
    Configuration,
    WorkflowChatIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Workflow(configuration);

let workflowId: string; // (default to undefined)
let workflowChatIn: WorkflowChatIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.workflowsRefineWorkflow(
    workflowId,
    workflowChatIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowChatIn** | **WorkflowChatIn**|  | |
| **workflowId** | [**string**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**WorkflowChatOut**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflowsStreamRunEvents**
> any workflowsStreamRunEvents()

Server-sent event stream for a run. Authed by the run-scoped stream token in ``Authorization: Bearer <token>`` (not the standard Hub bearer), so the FE consumes it via ``fetch`` + ``ReadableStream``. Ends with ``data: [DONE]``.

### Example

```typescript
import {
    Workflow,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Workflow(configuration);

let workflowId: string; // (default to undefined)
let runId: string; // (default to undefined)

const { status, data } = await apiInstance.workflowsStreamRunEvents(
    workflowId,
    runId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowId** | [**string**] |  | defaults to undefined|
| **runId** | [**string**] |  | defaults to undefined|


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflowsUpdateWorkflow**
> Workflow workflowsUpdateWorkflow(workflowUpdateIn)

Update a workflow. Only its creator may update it.  Arming a disabled draft is a create as far as the quota is concerned — the cap counts enabled rows, so without a check here a tenant at cap would simply enable its old drafts. The lock therefore re-reads the row: a concurrent disable would otherwise leave this request\'s copy claiming the workflow is already enabled, turning the arming into an unchecked no-op.  The assistant-chat gate below only covers enable/timezone-only updates; a spec PATCH already ran it inside `_validate_runnable_spec`.

### Example

```typescript
import {
    Workflow,
    Configuration,
    WorkflowUpdateIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Workflow(configuration);

let workflowId: string; // (default to undefined)
let workflowUpdateIn: WorkflowUpdateIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.workflowsUpdateWorkflow(
    workflowId,
    workflowUpdateIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowUpdateIn** | **WorkflowUpdateIn**|  | |
| **workflowId** | [**string**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Workflow**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

