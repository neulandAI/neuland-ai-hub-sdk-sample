# Invitation

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**invitationsAcceptInvitationComplete**](#invitationsacceptinvitationcomplete) | **POST** /invitations/accept | Accept an invitation|
|[**invitationsAcceptInvitationForm**](#invitationsacceptinvitationform) | **GET** /invitations/accept | Render the invitation acceptance form|
|[**invitationsCreateInvitations**](#invitationscreateinvitations) | **POST** /invitations/ | Create invitations|
|[**invitationsResendInvitation**](#invitationsresendinvitation) | **POST** /invitations/{invitation_id}/resend | Resend an invitation|
|[**invitationsRevokeInvitation**](#invitationsrevokeinvitation) | **POST** /invitations/{invitation_id}/revoke | Revoke an invitation|

# **invitationsAcceptInvitationComplete**
> any invitationsAcceptInvitationComplete()

Complete invitation acceptance and create the user account.

### Example

```typescript
import {
    Invitation,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Invitation(configuration);

let token: string; //Invitation JWT token from the invitation email. (default to undefined)

const { status, data } = await apiInstance.invitationsAcceptInvitationComplete(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Invitation JWT token from the invitation email. | defaults to undefined|


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**401** | The invitation token is invalid, expired, or the invitation was revoked. |  -  |
|**404** | The invitation referenced by the token no longer exists. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **invitationsAcceptInvitationForm**
> string invitationsAcceptInvitationForm()

Render the fallback HTML form for accepting an invitation; token errors are shown inline in the form.

### Example

```typescript
import {
    Invitation,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Invitation(configuration);

let token: string; //Invitation JWT token from the invitation email. (default to undefined)

const { status, data } = await apiInstance.invitationsAcceptInvitationForm(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Invitation JWT token from the invitation email. | defaults to undefined|


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **invitationsCreateInvitations**
> Array<InvitationOut> invitationsCreateInvitations(invitationIn)

Invite the given email addresses, skipping ones already invited or registered.

### Example

```typescript
import {
    Invitation,
    Configuration,
    InvitationIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Invitation(configuration);

let invitationIn: InvitationIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.invitationsCreateInvitations(
    invitationIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **invitationIn** | **InvitationIn**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<InvitationOut>**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Tenant admin or project owner privileges required. |  -  |
|**404** | The target tenant or project does not exist. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **invitationsResendInvitation**
> InvitationOut invitationsResendInvitation()

Resend the invitation email for a pending invitation.

### Example

```typescript
import {
    Invitation,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Invitation(configuration);

let invitationId: string; //Public id of the invitation to resend. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.invitationsResendInvitation(
    invitationId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **invitationId** | [**string**] | Public id of the invitation to resend. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**InvitationOut**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Tenant admin privileges required. |  -  |
|**404** | No invitation exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **invitationsRevokeInvitation**
> invitationsRevokeInvitation()

Revoke a pending invitation so its token can no longer be used.

### Example

```typescript
import {
    Invitation,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Invitation(configuration);

let invitationId: string; //Public id of the invitation to revoke. (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.invitationsRevokeInvitation(
    invitationId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **invitationId** | [**string**] | Public id of the invitation to revoke. | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | Tenant admin privileges required. |  -  |
|**404** | No invitation exists with the given id. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

