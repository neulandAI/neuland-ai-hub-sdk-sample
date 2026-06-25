# SetAtlassianCloudIdRequest

Payload selecting the active Atlassian site (cloud_id) for a connector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_id** | **string** | ID of the Atlassian site to make active. Must be one of the sites the user consented to (stored in &#x60;atlassian_sites&#x60;). | [default to undefined]

## Example

```typescript
import { SetAtlassianCloudIdRequest } from 'neuland-hub-sdk';

const instance: SetAtlassianCloudIdRequest = {
    cloud_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
