# SharepointItemModel

A file or folder item in a SharePoint drive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Drive item id. | [default to undefined]
**web_url** | **string** | URL to open the item in SharePoint. | [default to undefined]
**drive_id** | **string** | Id of the drive containing the item. | [default to undefined]
**site_id** | **string** |  | [default to undefined]
**parent_folder_id** | **string** | Id of the parent folder, or \&#39;root\&#39;. | [default to undefined]
**parent_path** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**size** | **number** |  | [default to undefined]
**last_modified_date_time** | **string** |  | [default to undefined]
**mimetype** | **string** |  | [default to undefined]
**folder** | [**SharepointFolderModel**](SharepointFolderModel.md) |  | [default to undefined]
**imported** | **boolean** |  | [optional] [default to undefined]
**imported_count** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { SharepointItemModel } from '@neulandai/neuland-hub-sdk';

const instance: SharepointItemModel = {
    id,
    web_url,
    drive_id,
    site_id,
    parent_folder_id,
    parent_path,
    name,
    description,
    size,
    last_modified_date_time,
    mimetype,
    folder,
    imported,
    imported_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
