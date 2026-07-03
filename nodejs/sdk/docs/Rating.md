# Rating

All URIs are relative to *https://api.your-domain.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**ratingsRemove**](#ratingsremove) | **DELETE** /ratings/{rateable_type}/{rateable_id} | Delete a rating|
|[**ratingsUpsert**](#ratingsupsert) | **POST** /ratings/ | Upsert a rating|

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

let rateableType: RateableTypeEnum; //Kind of resource whose rating to delete. (default to undefined)
let rateableId: number; //ID of the resource whose rating to delete. (default to undefined)
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
| **rateableType** | **RateableTypeEnum** | Kind of resource whose rating to delete. | defaults to undefined|
| **rateableId** | [**number**] | ID of the resource whose rating to delete. | defaults to undefined|
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
|**404** | You have not rated this resource. |  -  |
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

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**401** | Missing or invalid authentication. |  -  |
|**403** | The target resource is not in your tenant. |  -  |
|**404** | The target resource does not exist. |  -  |
|**409** | The target resource cannot be rated (deprecated catalog item, or an assistant that is not community-shared or not ready). |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

