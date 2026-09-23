# CredentialPartOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**json_schema** | **{ [key: string]: any; }** | JSON Schema of this credential part; the frontend renders the input form from it. | [default to undefined]
**configured** | **boolean** | Whether this credential part has been saved. | [default to undefined]
**set_fields** | **Array&lt;string | null&gt;** | Names of the fields currently stored. Never includes the values. | [default to undefined]
**summary** | **{ [key: string]: any; }** | Non-secret view of the stored values: only fields the template marks public, nested lists included (e.g. the sqlConnector\&#39;s database names, schemas and descriptions). Never contains secrets. Empty when nothing is stored. | [optional] [default to undefined]

## Example

```typescript
import { CredentialPartOut } from 'neuland-hub-sdk';

const instance: CredentialPartOut = {
    json_schema,
    configured,
    set_fields,
    summary,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
