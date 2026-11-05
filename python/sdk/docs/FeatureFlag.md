# neuland_hub_sdk.FeatureFlag

All URIs are relative to *https://api.your-domain.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**feature_clear_tenant_feature_flag**](FeatureFlag.md#feature_clear_tenant_feature_flag) | **DELETE** /feature/flags/tenants/{tenant_id}/{flag_key} | Clear a tenant&#39;s feature-flag override
[**feature_list_tenant_feature_flags**](FeatureFlag.md#feature_list_tenant_feature_flags) | **GET** /feature/flags/tenants/{tenant_id} | List effective feature flags for a tenant
[**feature_set_tenant_feature_flag**](FeatureFlag.md#feature_set_tenant_feature_flag) | **PUT** /feature/flags/tenants/{tenant_id}/{flag_key} | Set a tenant&#39;s feature-flag override


# **feature_clear_tenant_feature_flag**
> FeatureFlagOut feature_clear_tenant_feature_flag(tenant_id, flag_key, cookie_name=cookie_name)

Clear a tenant's feature-flag override

Remove a tenant override so the flag reverts to its catalog default.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.feature_flag import FeatureFlag
from neuland_hub_sdk.models.feature_flag_out import FeatureFlagOut
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
    api_instance = FeatureFlag(api_client)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the tenant.
    flag_key = 'flag_key_example' # str | Catalog key of the feature flag.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Clear a tenant's feature-flag override
        api_response = api_instance.feature_clear_tenant_feature_flag(tenant_id, flag_key, cookie_name=cookie_name)
        print("The response of FeatureFlag->feature_clear_tenant_feature_flag:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeatureFlag->feature_clear_tenant_feature_flag: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **UUID**| Public id of the tenant. | 
 **flag_key** | **str**| Catalog key of the feature flag. | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**FeatureFlagOut**](FeatureFlagOut.md)

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
**403** | Platform operator privileges required. |  -  |
**404** | No such tenant, or unknown feature flag. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feature_list_tenant_feature_flags**
> List[FeatureFlagOut] feature_list_tenant_feature_flags(tenant_id, cookie_name=cookie_name)

List effective feature flags for a tenant

Return every catalog flag with its effective value for the tenant.

Tenant admins (MANAGE_FEATURE_FLAGS) may read their own tenant; Operators
and parent-tenant admins may read any tenant they govern.

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.feature_flag import FeatureFlag
from neuland_hub_sdk.models.feature_flag_out import FeatureFlagOut
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
    api_instance = FeatureFlag(api_client)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the tenant.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # List effective feature flags for a tenant
        api_response = api_instance.feature_list_tenant_feature_flags(tenant_id, cookie_name=cookie_name)
        print("The response of FeatureFlag->feature_list_tenant_feature_flags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeatureFlag->feature_list_tenant_feature_flags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **UUID**| Public id of the tenant. | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[FeatureFlagOut]**](FeatureFlagOut.md)

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
**403** | Platform operator privileges required. |  -  |
**404** | No such tenant, or unknown feature flag. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feature_set_tenant_feature_flag**
> FeatureFlagOut feature_set_tenant_feature_flag(tenant_id, flag_key, feature_flag_set_in, cookie_name=cookie_name)

Set a tenant's feature-flag override

Enable or disable a feature for a tenant (upserts the override row).

### Example

* Api Key Authentication (APIKeyHeader):

```python
from uuid import UUID
import os
import neuland_hub_sdk
from neuland_hub_sdk.api.feature_flag import FeatureFlag
from neuland_hub_sdk.models.feature_flag_out import FeatureFlagOut
from neuland_hub_sdk.models.feature_flag_set_in import FeatureFlagSetIn
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
    api_instance = FeatureFlag(api_client)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Public id of the tenant.
    flag_key = 'flag_key_example' # str | Catalog key of the feature flag.
    feature_flag_set_in = neuland_hub_sdk.FeatureFlagSetIn() # FeatureFlagSetIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Set a tenant's feature-flag override
        api_response = api_instance.feature_set_tenant_feature_flag(tenant_id, flag_key, feature_flag_set_in, cookie_name=cookie_name)
        print("The response of FeatureFlag->feature_set_tenant_feature_flag:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeatureFlag->feature_set_tenant_feature_flag: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **UUID**| Public id of the tenant. | 
 **flag_key** | **str**| Catalog key of the feature flag. | 
 **feature_flag_set_in** | [**FeatureFlagSetIn**](FeatureFlagSetIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**FeatureFlagOut**](FeatureFlagOut.md)

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
**403** | Platform operator privileges required. |  -  |
**404** | No such tenant, or unknown feature flag. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

