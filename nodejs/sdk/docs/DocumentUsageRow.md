# DocumentUsageRow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_count** | **number** | Documents in the window. | [default to undefined]
**pending_count** | **number** | Documents with no content row yet (upload not processed). | [default to undefined]
**stored_bytes** | **number** | Bytes actually occupied: content rows counted once, since identical uploads are deduplicated per tenant by checksum. | [default to undefined]
**attributed_bytes** | **number** | Bytes summed per document. Exceeds stored_bytes when the same file is referenced from several libraries. | [default to undefined]
**group** | [**{ [key: string]: ResponseAuthGetEntraGroupsValue; }**](ResponseAuthGetEntraGroupsValue.md) | Dimension values for this group, keyed by dimension name. | [default to undefined]
**bucket** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { DocumentUsageRow } from '@neulandai/neuland-hub-sdk';

const instance: DocumentUsageRow = {
    document_count,
    pending_count,
    stored_bytes,
    attributed_bytes,
    group,
    bucket,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
