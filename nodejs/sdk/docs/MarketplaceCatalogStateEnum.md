# MarketplaceCatalogStateEnum

Lifecycle state shared by every marketplace catalog table.  Kept intentionally minimal: catalog rows are soft-deleted by flipping to DEPRECATED, not hard-deleted, so tenant installs referencing them survive.

## Enum

* `ACTIVE` (value: `'ACTIVE'`)

* `DEPRECATED` (value: `'DEPRECATED'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
