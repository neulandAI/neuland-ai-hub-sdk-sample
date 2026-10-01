# DocumentMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_count** | **number** | Documents in the window. | [default to undefined]
**pending_count** | **number** | Documents with no content row yet (upload not processed). | [default to undefined]
**stored_bytes** | **number** | Bytes actually occupied: content rows counted once, since identical uploads are deduplicated per tenant by checksum. | [default to undefined]
**attributed_bytes** | **number** | Bytes summed per document. Exceeds stored_bytes when the same file is referenced from several libraries. | [default to undefined]

## Example

```typescript
import { DocumentMetrics } from '@neulandai/neuland-hub-sdk';

const instance: DocumentMetrics = {
    document_count,
    pending_count,
    stored_bytes,
    attributed_bytes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
