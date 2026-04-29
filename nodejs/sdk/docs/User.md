# User

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usersGetMyself**](#usersgetmyself) | **GET** /users/me | Get Myself|

# **usersGetMyself**
> UserOut usersGetMyself()


### Example

```typescript
import {
    User,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new User(configuration);

let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.usersGetMyself(
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**UserOut**

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

