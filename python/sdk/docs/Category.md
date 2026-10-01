# neuland_hub_sdk.Category

All URIs are relative to *https://api.your-domain.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**categories_list_categories**](Category.md#categories_list_categories) | **GET** /categories/ | List categories


# **categories_list_categories**
> List[CategoryOut] categories_list_categories(cookie_name=cookie_name)

List categories

List the active category taxonomy, ordered by sort_order then name.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.category import Category
from neuland_hub_sdk.models.category_out import CategoryOut
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Your Hub API URL
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "https://api.your-domain.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = Category(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # List categories
        api_response = api_instance.categories_list_categories(cookie_name=cookie_name)
        print("The response of Category->categories_list_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Category->categories_list_categories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[CategoryOut]**](CategoryOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Missing or invalid authentication. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

