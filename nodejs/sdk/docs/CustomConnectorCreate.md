# CustomConnectorCreate

Either `url` (with optional `name`/`headers`), or `config` — a pasted `mcpServers` JSON blob. Never both.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**url** | **string** |  | [optional] [default to undefined]
**headers** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**config** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CustomConnectorCreate } from 'neuland-hub-sdk';

const instance: CustomConnectorCreate = {
    name,
    url,
    headers,
    config,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
