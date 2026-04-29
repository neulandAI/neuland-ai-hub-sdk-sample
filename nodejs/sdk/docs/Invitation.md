# Invitation

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**invitationsCreateInvitations**](#invitationscreateinvitations) | **POST** /invitations/ | Create Invitations|
|[**invitationsResendInvitation**](#invitationsresendinvitation) | **POST** /invitations/{invitation_id}/resend | Resend Invitation|
|[**invitationsRevokeInvitation**](#invitationsrevokeinvitation) | **POST** /invitations/{invitation_id}/revoke | Revoke Invitation|

# **invitationsCreateInvitations**
> Array<InvitationOut> invitationsCreateInvitations(invitationIn)


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

# **invitationsResendInvitation**
> InvitationOut invitationsResendInvitation()

Resend invitation email with a new token.

### Example

```typescript
import {
    Invitation,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Invitation(configuration);

let invitationId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.invitationsResendInvitation(
    invitationId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **invitationId** | [**number**] |  | defaults to undefined|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**InvitationOut**

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

# **invitationsRevokeInvitation**
> invitationsRevokeInvitation()


### Example

```typescript
import {
    Invitation,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Invitation(configuration);

let invitationId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.invitationsRevokeInvitation(
    invitationId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **invitationId** | [**number**] |  | defaults to undefined|
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

