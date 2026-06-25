# SharepointDriveModel

A document library (drive) within a SharePoint site.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Drive id. | [default to undefined]
**web_url** | **string** | URL to open the drive in SharePoint. | [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**root** | [**SharepointItemModel**](SharepointItemModel.md) | The drive\&#39;s root folder item. | [default to undefined]
**imported_count** | **number** | Number of imported documents from this drive in the current scope. | [optional] [default to 0]

## Example

```typescript
import { SharepointDriveModel } from 'neuland-hub-sdk';

const instance: SharepointDriveModel = {
    id,
    web_url,
    name,
    description,
    root,
    imported_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
