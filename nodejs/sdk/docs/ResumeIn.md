# ResumeIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decision** | **string** | How to resolve the pause: approve/reject/edit a gated tool call, or respond to answer a clarification question. | [default to undefined]
**edited_args** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**answers** | [**Array&lt;ClarificationAnswer&gt;**](ClarificationAnswer.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ResumeIn } from 'neuland-hub-sdk';

const instance: ResumeIn = {
    decision,
    edited_args,
    answers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
