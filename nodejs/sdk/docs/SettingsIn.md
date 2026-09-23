# SettingsIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_llm_catalog_id** | **string** |  | [optional] [default to undefined]
**guardrails_enabled** | **boolean** |  | [optional] [default to undefined]
**sharepoint_enabled** | **boolean** |  | [optional] [default to undefined]
**inbound_guardrail** | **string** |  | [optional] [default to undefined]
**outbound_guardrail** | **string** |  | [optional] [default to undefined]
**welcome_email_template_id** | **string** |  | [optional] [default to undefined]
**project_member_added_email_template_id** | **string** |  | [optional] [default to undefined]
**system_prompt** | **string** |  | [optional] [default to undefined]
**system_prompt_extension** | **string** |  | [optional] [default to undefined]
**errlog_webhook_url** | **string** |  | [optional] [default to undefined]
**require_email_confirmation** | **boolean** |  | [optional] [default to undefined]
**budget_alert_enabled** | **boolean** |  | [optional] [default to undefined]
**soft_limit_warning_enabled** | **boolean** |  | [optional] [default to undefined]
**document_retention_days** | **number** |  | [optional] [default to undefined]
**default_language** | **string** |  | [optional] [default to undefined]
**user_level_analytics_enabled** | **boolean** |  | [optional] [default to undefined]
**user_analytics_reveal_names** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { SettingsIn } from 'neuland-hub-sdk';

const instance: SettingsIn = {
    default_llm_catalog_id,
    guardrails_enabled,
    sharepoint_enabled,
    inbound_guardrail,
    outbound_guardrail,
    welcome_email_template_id,
    project_member_added_email_template_id,
    system_prompt,
    system_prompt_extension,
    errlog_webhook_url,
    require_email_confirmation,
    budget_alert_enabled,
    soft_limit_warning_enabled,
    document_retention_days,
    default_language,
    user_level_analytics_enabled,
    user_analytics_reveal_names,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
