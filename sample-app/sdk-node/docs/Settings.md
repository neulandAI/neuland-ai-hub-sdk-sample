# Settings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [default to undefined]
**tenant_id** | **number** |  | [default to undefined]
**default_llm_catalog_id** | **number** |  | [optional] [default to undefined]
**created_at** | **string** |  | [optional] [default to undefined]
**guardrails_enabled** | **boolean** |  | [optional] [default to false]
**sharepoint_enabled** | **boolean** |  | [default to undefined]
**inbound_guardrail** | **string** |  | [optional] [default to undefined]
**outbound_guardrail** | **string** |  | [optional] [default to undefined]
**system_prompt** | **string** |  | [optional] [default to undefined]
**inserted_by** | **string** |  | [default to undefined]
**errlog_webhook_url** | **string** |  | [optional] [default to undefined]
**default_language** | **string** |  | [optional] [default to 'en']
**require_email_confirmation** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { Settings } from 'neuland-hub-sdk';

const instance: Settings = {
    id,
    tenant_id,
    default_llm_catalog_id,
    created_at,
    guardrails_enabled,
    sharepoint_enabled,
    inbound_guardrail,
    outbound_guardrail,
    system_prompt,
    inserted_by,
    errlog_webhook_url,
    default_language,
    require_email_confirmation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
