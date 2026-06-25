# Rating

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**ratingsRemove**](#ratingsremove) | **DELETE** /ratings/{rateable_type}/{rateable_id} | Remove|
|[**ratingsUpsert**](#ratingsupsert) | **POST** /ratings/ | Upsert|

# **ratingsRemove**
> ratingsRemove()

Delete the caller\'s rating for the target resource.

### Example

```typescript
import {
    Rating,
    Configuration
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Rating(configuration);

let rateableType: RateableTypeEnum; // (default to undefined)
let rateableId: number; // (default to undefined)
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.ratingsRemove(
    rateableType,
    rateableId,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rateableType** | **RateableTypeEnum** |  | defaults to undefined|
| **rateableId** | [**number**] |  | defaults to undefined|
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

# **ratingsUpsert**
> Rating ratingsUpsert(ratingIn)

Upsert the caller\'s rating for the target resource.

### Example

```typescript
import {
    Rating,
    Configuration,
    RatingIn
} from 'neuland-hub-sdk';

const configuration = new Configuration();
const apiInstance = new Rating(configuration);

let ratingIn: RatingIn; //
let cookieName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.ratingsUpsert(
    ratingIn,
    cookieName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ratingIn** | **RatingIn**|  | |
| **cookieName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Rating**

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

