# spec/

The contract for what the SDK exposes.

## Files

| File | Purpose |
|---|---|
| `sdk-whitelist.json` | The list of `operationId`s the public SDK exposes. **The contract.** |
| `README.md` | This file. |

## How the contract is enforced

When regenerating (see the "Regenerating the SDKs" section in the root [README.md](../README.md)):

```
Hub /openapi.json  ──fetch──►  /tmp/hub-openapi.json
                                       │
                                       │ apply spec/sdk-whitelist.json
                                       ▼
                              /tmp/hub-openapi.sdk.json
                                       │
                              ┌────────┴────────┐
                              ▼                 ▼
                        python/sdk/        nodejs/sdk/
                        (committed)         (committed)
```

`/tmp` files are temporary — fetch, filter, generate, then delete. Nothing else is committed in `spec/`.

## Adding an endpoint to the SDK

1. Find the `operationId` (e.g. `users_get_myself`) in Hub's `/openapi.json`.
2. Add it to `inverseOperationIds` in `sdk-whitelist.json`.
3. Run the regen steps from the root README.
4. Commit the diff in `python/sdk/` and `nodejs/sdk/`.

## Removing an endpoint

1. Delete its `operationId` from `sdk-whitelist.json`.
2. Run the regen steps.
3. Commit. The next SDK release no longer exposes it.

## Why no committed `openapi.json`?

The full Hub spec is always live at `<hub>/openapi.json`. Committing a snapshot would just go stale. The whitelist is the only thing that needs review — everything else is regenerated on demand.
