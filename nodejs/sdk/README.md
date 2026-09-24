## neuland-hub-sdk@1.0.4

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install neuland-hub-sdk@1.0.4 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Alert* | [**alertsBudgetForecast**](docs/Alert.md#alertsbudgetforecast) | **GET** /alerts/budgets/forecast | Forecast the tenant\&#39;s month-end spend from its current run rate
*Alert* | [**alertsBudgetSummary**](docs/Alert.md#alertsbudgetsummary) | **GET** /alerts/budgets/summary | Get the tenant\&#39;s current-month budget summary
*Alert* | [**alertsCancelTopUp**](docs/Alert.md#alertscanceltopup) | **POST** /alerts/budgets/top-ups/{top_up_id}/cancel | Cancel a budget top-up
*Alert* | [**alertsCreateAlert**](docs/Alert.md#alertscreatealert) | **POST** /alerts/ | Create a budget alert
*Alert* | [**alertsCreateTopUp**](docs/Alert.md#alertscreatetopup) | **POST** /alerts/budgets/top-ups | Add a budget top-up for the current month
*Alert* | [**alertsDeleteAlert**](docs/Alert.md#alertsdeletealert) | **DELETE** /alerts/{alert_id} | Delete a budget alert
*Alert* | [**alertsUpdateAlert**](docs/Alert.md#alertsupdatealert) | **PATCH** /alerts/{alert_id} | Update a budget alert
*ApiKey* | [**apiCreateKey**](docs/ApiKey.md#apicreatekey) | **POST** /api/key/ | Create an API key
*ApiKey* | [**apiRevokeApiKey**](docs/ApiKey.md#apirevokeapikey) | **PATCH** /api/key/revoke/{api_key_id} | Revoke an API key
*Application* | [**applicationsCreateApp**](docs/Application.md#applicationscreateapp) | **POST** /applications/ | Create an application
*Application* | [**applicationsDeleteApp**](docs/Application.md#applicationsdeleteapp) | **DELETE** /applications/{app_id} | Delete an application
*Application* | [**applicationsUpdateApp**](docs/Application.md#applicationsupdateapp) | **PATCH** /applications/{app_id} | Update an application
*Application* | [**applicationsUpdateGroupMembership**](docs/Application.md#applicationsupdategroupmembership) | **PUT** /applications/group/access | Set application access for a user group
*Application* | [**applicationsUpdateUserMembership**](docs/Application.md#applicationsupdateusermembership) | **PUT** /applications/user/access | Set application access for users
*ApplicationMarketplace* | [**applicationAddTagToCatalog**](docs/ApplicationMarketplace.md#applicationaddtagtocatalog) | **POST** /marketplace/application/catalog/{catalog_id}/tags/{tag_id} | Attach a tag to a marketplace application
*ApplicationMarketplace* | [**applicationCreateCatalog**](docs/ApplicationMarketplace.md#applicationcreatecatalog) | **POST** /marketplace/application/catalog/ | Publish a marketplace application
*ApplicationMarketplace* | [**applicationInstallFromCatalog**](docs/ApplicationMarketplace.md#applicationinstallfromcatalog) | **POST** /marketplace/application/catalog/{catalog_id}/install | Install a marketplace application into the caller\&#39;s tenant
*ApplicationMarketplace* | [**applicationListCatalog**](docs/ApplicationMarketplace.md#applicationlistcatalog) | **GET** /marketplace/application/catalog/ | List all application catalog items — superadmin only
*ApplicationMarketplace* | [**applicationRemoveTagFromCatalog**](docs/ApplicationMarketplace.md#applicationremovetagfromcatalog) | **DELETE** /marketplace/application/catalog/{catalog_id}/tags/{tag_id} | Detach a tag from a marketplace application
*ApplicationMarketplace* | [**applicationUninstallFromCatalog**](docs/ApplicationMarketplace.md#applicationuninstallfromcatalog) | **DELETE** /marketplace/application/catalog/{catalog_id}/install | Uninstall a marketplace application for the caller
*ApplicationMarketplace* | [**applicationUpdateCatalog**](docs/ApplicationMarketplace.md#applicationupdatecatalog) | **PATCH** /marketplace/application/catalog/{catalog_id} | Update a marketplace application\&#39;s metadata
*ApplicationMarketplace* | [**applicationUpdateCatalogState**](docs/ApplicationMarketplace.md#applicationupdatecatalogstate) | **PATCH** /marketplace/application/catalog/{catalog_id}/state | Toggle a marketplace application\&#39;s lifecycle state
*Assistant* | [**assistantsAddLibraryToAssistant**](docs/Assistant.md#assistantsaddlibrarytoassistant) | **POST** /assistants/{assistant_id}/libraries/{library_id} | Add a library to an assistant
*Assistant* | [**assistantsAddMembers**](docs/Assistant.md#assistantsaddmembers) | **POST** /assistants/{assistant_id}/members | Add members to an assistant
*Assistant* | [**assistantsAddTagToAssistant**](docs/Assistant.md#assistantsaddtagtoassistant) | **POST** /assistants/{assistant_id}/tags/{tag_id} | Add a tag to an assistant
*Assistant* | [**assistantsAddToolToAssistant**](docs/Assistant.md#assistantsaddtooltoassistant) | **POST** /assistants/{assistant_id}/tools/{tool_id} | Add a tool to an assistant
*Assistant* | [**assistantsConvertAssistantToTool**](docs/Assistant.md#assistantsconvertassistanttotool) | **POST** /assistants/{assistant_id}/tool | Make an assistant consultable from your own chats
*Assistant* | [**assistantsCreateAssistant**](docs/Assistant.md#assistantscreateassistant) | **POST** /assistants/ | Create an assistant
*Assistant* | [**assistantsDeleteAssistant**](docs/Assistant.md#assistantsdeleteassistant) | **DELETE** /assistants/{assistant_id} | Delete an assistant
*Assistant* | [**assistantsDeleteMembers**](docs/Assistant.md#assistantsdeletemembers) | **DELETE** /assistants/{assistant_id}/members | Remove members from an assistant
*Assistant* | [**assistantsJoinAssistant**](docs/Assistant.md#assistantsjoinassistant) | **POST** /assistants/{assistant_id}/membership | Join a community assistant
*Assistant* | [**assistantsLeaveAssitant**](docs/Assistant.md#assistantsleaveassitant) | **DELETE** /assistants/{assistant_id}/remove/me | Leave an assistant
*Assistant* | [**assistantsRemoveAssistantAsTool**](docs/Assistant.md#assistantsremoveassistantastool) | **DELETE** /assistants/{assistant_id}/tool | Stop the assistant being consultable from your chats
*Assistant* | [**assistantsRemoveLibraryFromAssistant**](docs/Assistant.md#assistantsremovelibraryfromassistant) | **DELETE** /assistants/{assistant_id}/libraries/{library_id} | Remove a library from an assistant
*Assistant* | [**assistantsRemoveMember**](docs/Assistant.md#assistantsremovemember) | **DELETE** /assistants/{assistant_id}/members/{user_id} | Remove a single member
*Assistant* | [**assistantsRemoveTagFromAssistant**](docs/Assistant.md#assistantsremovetagfromassistant) | **DELETE** /assistants/{assistant_id}/tags/{tag_id} | Remove a tag from an assistant
*Assistant* | [**assistantsRemoveToolFromAssistant**](docs/Assistant.md#assistantsremovetoolfromassistant) | **DELETE** /assistants/{assistant_id}/tools/{tool_id} | Remove a tool from an assistant
*Assistant* | [**assistantsRestoreAssistantVersion**](docs/Assistant.md#assistantsrestoreassistantversion) | **POST** /assistants/{assistant_id}/versions/{version}/restore | Restore an assistant version
*Assistant* | [**assistantsSubmitAssistant**](docs/Assistant.md#assistantssubmitassistant) | **POST** /assistants/submit | Create an assistant with attachments
*Assistant* | [**assistantsUpdateAssistant**](docs/Assistant.md#assistantsupdateassistant) | **PATCH** /assistants/{assistant_id} | Update an assistant
*Assistant* | [**assistantsUpdateAssistantGroups**](docs/Assistant.md#assistantsupdateassistantgroups) | **PUT** /assistants/{assistant_id}/groups | Set assistant group access
*Assistant* | [**assistantsUpdateAssistantVisibility**](docs/Assistant.md#assistantsupdateassistantvisibility) | **PATCH** /assistants/{assistant_id}/visibility | Set assistant visibility
*AssistantMarketplace* | [**assistantListCatalog**](docs/AssistantMarketplace.md#assistantlistcatalog) | **GET** /marketplace/assistant/catalog/ | List all assistant catalog items — superadmin only
*AssistantMarketplace* | [**marketplaceAddTagToCatalog**](docs/AssistantMarketplace.md#marketplaceaddtagtocatalog) | **POST** /marketplace/assistant/catalog/{catalog_id}/tags/{tag_id} | Add Tag To Catalog
*AssistantMarketplace* | [**marketplaceAttachTool**](docs/AssistantMarketplace.md#marketplaceattachtool) | **POST** /marketplace/assistant/catalog/{catalog_id}/tools/{tool_id} | Attach Tool
*AssistantMarketplace* | [**marketplaceCreateCatalog**](docs/AssistantMarketplace.md#marketplacecreatecatalog) | **POST** /marketplace/assistant/catalog/ | Create Catalog
*AssistantMarketplace* | [**marketplaceDetachTool**](docs/AssistantMarketplace.md#marketplacedetachtool) | **DELETE** /marketplace/assistant/catalog/{catalog_id}/tools/{tool_id} | Detach Tool
*AssistantMarketplace* | [**marketplaceInstallFromCatalog**](docs/AssistantMarketplace.md#marketplaceinstallfromcatalog) | **POST** /marketplace/assistant/catalog/{catalog_id}/install | Install From Catalog
*AssistantMarketplace* | [**marketplaceListTools**](docs/AssistantMarketplace.md#marketplacelisttools) | **GET** /marketplace/assistant/catalog/{catalog_id}/tools | List Tools
*AssistantMarketplace* | [**marketplaceRemoveTagFromCatalog**](docs/AssistantMarketplace.md#marketplaceremovetagfromcatalog) | **DELETE** /marketplace/assistant/catalog/{catalog_id}/tags/{tag_id} | Remove Tag From Catalog
*AssistantMarketplace* | [**marketplaceUninstallFromCatalog**](docs/AssistantMarketplace.md#marketplaceuninstallfromcatalog) | **DELETE** /marketplace/assistant/catalog/{catalog_id}/install | Uninstall From Catalog
*AssistantMarketplace* | [**marketplaceUpdateCatalog**](docs/AssistantMarketplace.md#marketplaceupdatecatalog) | **PATCH** /marketplace/assistant/catalog/{catalog_id} | Update Catalog
*AssistantMarketplace* | [**marketplaceUpdateCatalogState**](docs/AssistantMarketplace.md#marketplaceupdatecatalogstate) | **PATCH** /marketplace/assistant/catalog/{catalog_id}/state | Update Catalog State
*Atlassian* | [**integrationsSetAtlassianCloudId**](docs/Atlassian.md#integrationssetatlassiancloudid) | **PUT** /integrations/atlassian/{connector_id}/cloudid | Set active Atlassian cloud_id
*Auth* | [**authConfirmEmail**](docs/Auth.md#authconfirmemail) | **GET** /auth/confirm-email | Confirm an email address
*Auth* | [**authExchangeToken**](docs/Auth.md#authexchangetoken) | **POST** /auth/exchange/token | Exchange for a service token
*Auth* | [**authGetEntraGroups**](docs/Auth.md#authgetentragroups) | **GET** /auth/entra/groups | Get Entra group names
*Auth* | [**authGetEntraScopes**](docs/Auth.md#authgetentrascopes) | **GET** /auth/entra/scopes | List Entra scopes
*Auth* | [**authLogin**](docs/Auth.md#authlogin) | **POST** /auth/token | Log in
*Auth* | [**authLogout**](docs/Auth.md#authlogout) | **POST** /auth/logout | Log out
*Auth* | [**authRequestPasswordReset**](docs/Auth.md#authrequestpasswordreset) | **POST** /auth/request-password-reset | Request a password reset
*Auth* | [**authResetPassword**](docs/Auth.md#authresetpassword) | **POST** /auth/reset-password | Complete a password reset
*Auth* | [**authResetPasswordForm**](docs/Auth.md#authresetpasswordform) | **GET** /auth/reset-password | Password reset HTML form
*Auth* | [**authSearchEntraGroups**](docs/Auth.md#authsearchentragroups) | **GET** /auth/entra/groups/search | Search Entra directory groups
*Auth* | [**authSendEmailConfirmation**](docs/Auth.md#authsendemailconfirmation) | **POST** /auth/send-email-confirmation | Send an email confirmation
*Auth* | [**authSsoExchange**](docs/Auth.md#authssoexchange) | **POST** /auth/sso/{slug}/{provider}/exchange | Complete an SSO login
*Auth* | [**authSsoInit**](docs/Auth.md#authssoinit) | **GET** /auth/sso/{slug}/{provider}/init | Start an SSO login
*Auth* | [**authSsoResolve**](docs/Auth.md#authssoresolve) | **GET** /auth/sso/resolve | Resolve SSO providers for an email
*AuthConnector* | [**authGetCredentialTemplate**](docs/AuthConnector.md#authgetcredentialtemplate) | **GET** /auth/connectors/{connector_id}/credential/template | Get connector credential template
*AuthConnector* | [**authInitiateAdminConsent**](docs/AuthConnector.md#authinitiateadminconsent) | **GET** /auth/connectors/{connector_id}/consent/admin | Initiate admin connector consent
*AuthConnector* | [**authInitiateConsent**](docs/AuthConnector.md#authinitiateconsent) | **GET** /auth/connectors/{connector_id}/consent | Initiate connector consent
*AuthConnector* | [**authListConnectorStatus**](docs/AuthConnector.md#authlistconnectorstatus) | **GET** /auth/connectors/status | List connector status
*AuthConnector* | [**authOauthCallback**](docs/AuthConnector.md#authoauthcallback) | **GET** /auth/connectors/callback | Connector OAuth callback
*AuthConnector* | [**authRevokeConsent**](docs/AuthConnector.md#authrevokeconsent) | **DELETE** /auth/connectors/{connector_id}/consent | Revoke connector consent
*AuthConnector* | [**authSetAdminCredential**](docs/AuthConnector.md#authsetadmincredential) | **PUT** /auth/connectors/{connector_id}/credential/admin | Set the tenant-wide connector credential
*AuthConnector* | [**authSetUserCredential**](docs/AuthConnector.md#authsetusercredential) | **PUT** /auth/connectors/{connector_id}/credential/user | Set the caller\&#39;s connector credential
*AuthConnector* | [**authUpdateConnector**](docs/AuthConnector.md#authupdateconnector) | **PATCH** /auth/connectors/{connector_id} | Update a connector
*AuthConnector* | [**authUpdateOauthClient**](docs/AuthConnector.md#authupdateoauthclient) | **PATCH** /auth/connectors/oauth-clients/{oauth_client_id} | Update an OAuth client
*Category* | [**categoriesListCategories**](docs/Category.md#categorieslistcategories) | **GET** /categories/ | List categories
*Chat* | [**chatsAddLibraryToChat**](docs/Chat.md#chatsaddlibrarytochat) | **POST** /chats/{chat_id}/libraries/{library_id} | Add a library to a chat
*Chat* | [**chatsCancelMessage**](docs/Chat.md#chatscancelmessage) | **POST** /chats/{chat_id}/cancel | Cancel in-progress generation
*Chat* | [**chatsDeactivateDocuments**](docs/Chat.md#chatsdeactivatedocuments) | **POST** /chats/{chat_id}/inactive-documents | Deactivate documents in a chat
*Chat* | [**chatsListChatMessageTurns**](docs/Chat.md#chatslistchatmessageturns) | **GET** /chats/{chat_id}/turns | List message turns for a chat
*Chat* | [**chatsRemoveChat**](docs/Chat.md#chatsremovechat) | **DELETE** /chats/{chat_id} | Delete a chat
*Chat* | [**chatsRemoveInactiveDocuments**](docs/Chat.md#chatsremoveinactivedocuments) | **DELETE** /chats/{chat_id}/inactive-documents | Reactivate documents in a chat
*Chat* | [**chatsRemoveLibraryFromChat**](docs/Chat.md#chatsremovelibraryfromchat) | **DELETE** /chats/{chat_id}/libraries/{library_id} | Remove a library from a chat
*Chat* | [**chatsSummerizeChat**](docs/Chat.md#chatssummerizechat) | **GET** /chats/{chat_id}/summary | Summarize a chat
*Chat* | [**chatsUpdateChat**](docs/Chat.md#chatsupdatechat) | **PATCH** /chats/{chat_id} | Update a chat
*CustomConnector* | [**customconnectorsCreateCustomConnectors**](docs/CustomConnector.md#customconnectorscreatecustomconnectors) | **POST** /custom-connectors/ | Add one or more custom connectors
*CustomConnector* | [**customconnectorsDeleteCustomConnector**](docs/CustomConnector.md#customconnectorsdeletecustomconnector) | **DELETE** /custom-connectors/{public_id} | Delete a custom connector
*CustomConnector* | [**customconnectorsListCustomConnectors**](docs/CustomConnector.md#customconnectorslistcustomconnectors) | **GET** /custom-connectors/ | List my custom connectors
*CustomConnector* | [**customconnectorsUpdateCustomConnector**](docs/CustomConnector.md#customconnectorsupdatecustomconnector) | **PATCH** /custom-connectors/{public_id} | Rename or enable/disable a custom connector
*Default* | [**postPostCheck**](docs/Default.md#postpostcheck) | **POST** /post | Post Check
*Default* | [**rootRoot**](docs/Default.md#rootroot) | **GET** / | Root
*Default* | [**statStat**](docs/Default.md#statstat) | **GET** /stat | Stat
*Default* | [**themeGetTheme**](docs/Default.md#themegettheme) | **GET** /theme | Get Theme
*Default* | [**versionVersion**](docs/Default.md#versionversion) | **GET** /version | Version
*Document* | [**documentsDeleteChatDocument**](docs/Document.md#documentsdeletechatdocument) | **DELETE** /documents/{document_id} | Delete a document
*Document* | [**documentsDocumentUsage**](docs/Document.md#documentsdocumentusage) | **POST** /documents/usage | Document counts and storage bytes by dimension
*Document* | [**documentsGetFile**](docs/Document.md#documentsgetfile) | **GET** /documents/{document_id} | Download a document
*Document* | [**documentsGetText**](docs/Document.md#documentsgettext) | **GET** /documents/{document_id}/text | Get a document\&#39;s extracted text
*Document* | [**documentsImportDocuments**](docs/Document.md#documentsimportdocuments) | **POST** /documents/import | Import documents from a connected source
*Document* | [**documentsRetryDocument**](docs/Document.md#documentsretrydocument) | **POST** /documents/{document_id}/retry | Retry document processing
*Document* | [**documentsUnimportDocuments**](docs/Document.md#documentsunimportdocuments) | **DELETE** /documents/import | Remove imported documents
*Document* | [**documentsUploadDocuments**](docs/Document.md#documentsuploaddocuments) | **POST** /documents/ | Upload documents
*Dropbox* | [**dropboxCapabilities**](docs/Dropbox.md#dropboxcapabilities) | **GET** /integrations/dropbox/capabilities | Get data source capabilities
*Dropbox* | [**dropboxGetItemInfo**](docs/Dropbox.md#dropboxgetiteminfo) | **GET** /integrations/dropbox/drives/{drive_id}/items/{drive_item_id} | Get a drive item
*Dropbox* | [**dropboxGetUserInfo**](docs/Dropbox.md#dropboxgetuserinfo) | **GET** /integrations/dropbox/me | Get connected user profile
*Dropbox* | [**dropboxIsConnected**](docs/Dropbox.md#dropboxisconnected) | **GET** /integrations/dropbox/connected | Check connection status
*Dropbox* | [**dropboxListChildren**](docs/Dropbox.md#dropboxlistchildren) | **GET** /integrations/dropbox/drives/{drive_id}/items/{drive_item_id}/children | List children of a drive item
*Dropbox* | [**dropboxListDrives**](docs/Dropbox.md#dropboxlistdrives) | **GET** /integrations/dropbox/sites/{site_id}/drives | List drives in a site
*Dropbox* | [**dropboxListRoots**](docs/Dropbox.md#dropboxlistroots) | **GET** /integrations/dropbox/roots | List top-level browse entries
*FeatureFlag* | [**featureClearTenantFeatureFlag**](docs/FeatureFlag.md#featurecleartenantfeatureflag) | **DELETE** /feature/flags/tenants/{tenant_id}/{flag_key} | Clear a tenant\&#39;s feature-flag override
*FeatureFlag* | [**featureListTenantFeatureFlags**](docs/FeatureFlag.md#featurelisttenantfeatureflags) | **GET** /feature/flags/tenants/{tenant_id} | List effective feature flags for a tenant
*FeatureFlag* | [**featureSetTenantFeatureFlag**](docs/FeatureFlag.md#featuresettenantfeatureflag) | **PUT** /feature/flags/tenants/{tenant_id}/{flag_key} | Set a tenant\&#39;s feature-flag override
*File* | [**filesDownloadFile**](docs/File.md#filesdownloadfile) | **GET** /files/{file_id} | Download a file
*File* | [**filesPresignedFileUrl**](docs/File.md#filespresignedfileurl) | **GET** /files/{file_id}/url | Get a short-lived direct download URL for a file
*GoogleDrive* | [**googledriveCapabilities**](docs/GoogleDrive.md#googledrivecapabilities) | **GET** /integrations/googledrive/capabilities | Get data source capabilities
*GoogleDrive* | [**googledriveGetItemInfo**](docs/GoogleDrive.md#googledrivegetiteminfo) | **GET** /integrations/googledrive/drives/{drive_id}/items/{drive_item_id} | Get a drive item
*GoogleDrive* | [**googledriveGetUserInfo**](docs/GoogleDrive.md#googledrivegetuserinfo) | **GET** /integrations/googledrive/me | Get connected user profile
*GoogleDrive* | [**googledriveIsConnected**](docs/GoogleDrive.md#googledriveisconnected) | **GET** /integrations/googledrive/connected | Check connection status
*GoogleDrive* | [**googledriveListChildren**](docs/GoogleDrive.md#googledrivelistchildren) | **GET** /integrations/googledrive/drives/{drive_id}/items/{drive_item_id}/children | List children of a drive item
*GoogleDrive* | [**googledriveListDrives**](docs/GoogleDrive.md#googledrivelistdrives) | **GET** /integrations/googledrive/sites/{site_id}/drives | List drives in a site
*GoogleDrive* | [**googledriveListRoots**](docs/GoogleDrive.md#googledrivelistroots) | **GET** /integrations/googledrive/roots | List top-level browse entries
*Invitation* | [**invitationsAcceptInvitationComplete**](docs/Invitation.md#invitationsacceptinvitationcomplete) | **POST** /invitations/accept | Accept an invitation
*Invitation* | [**invitationsAcceptInvitationForm**](docs/Invitation.md#invitationsacceptinvitationform) | **GET** /invitations/accept | Render the invitation acceptance form
*Invitation* | [**invitationsCreateInvitations**](docs/Invitation.md#invitationscreateinvitations) | **POST** /invitations/ | Create invitations
*Invitation* | [**invitationsResendInvitation**](docs/Invitation.md#invitationsresendinvitation) | **POST** /invitations/{invitation_id}/resend | Resend an invitation
*Invitation* | [**invitationsRevokeInvitation**](docs/Invitation.md#invitationsrevokeinvitation) | **POST** /invitations/{invitation_id}/revoke | Revoke an invitation
*Library* | [**librariesAddLibraryMembers**](docs/Library.md#librariesaddlibrarymembers) | **POST** /libraries/{library_id}/members | Add library members
*Library* | [**librariesDeleteLibrary**](docs/Library.md#librariesdeletelibrary) | **DELETE** /libraries/{library_id} | Delete a library
*Library* | [**librariesLeaveLibrary**](docs/Library.md#librariesleavelibrary) | **DELETE** /libraries/{library_id}/remove/me | Leave a library
*Library* | [**librariesNewLibrary**](docs/Library.md#librariesnewlibrary) | **POST** /libraries/ | Create a library
*Library* | [**librariesRemoveLibraryMembers**](docs/Library.md#librariesremovelibrarymembers) | **DELETE** /libraries/{library_id}/members | Remove library members
*Library* | [**librariesRemoveSingleMember**](docs/Library.md#librariesremovesinglemember) | **DELETE** /libraries/{library_id}/members/{user_id} | Remove a library member
*Library* | [**librariesUpdateLibrary**](docs/Library.md#librariesupdatelibrary) | **PATCH** /libraries/{library_id} | Update a library
*Llm* | [**llmApiKeyInventory**](docs/Llm.md#llmapikeyinventory) | **POST** /llm/usage/api/keys | API key inventory with idleness and expiry flags
*Llm* | [**llmCostMovers**](docs/Llm.md#llmcostmovers) | **POST** /llm/insights/movers | Biggest cost movers and the most-expensive model vs the prior period
*Llm* | [**llmGetCost**](docs/Llm.md#llmgetcost) | **POST** /llm/cost | [Deprecated] LLM cost metrics — superseded by POST /llm/usage
*Llm* | [**llmGetUsageCosts**](docs/Llm.md#llmgetusagecosts) | **POST** /llm/services/cost | [Deprecated] External service usage costs — superseded by POST /llm/usage
*Llm* | [**llmLlmTotalTokens**](docs/Llm.md#llmllmtotaltokens) | **POST** /llm/tokens | [Deprecated] Token usage metrics — superseded by POST /llm/usage
*Llm* | [**llmMessageTokens**](docs/Llm.md#llmmessagetokens) | **POST** /llm/usage/messages | Token usage aggregated across messages (avg tokens per message)
*Llm* | [**llmSubtenantUsage**](docs/Llm.md#llmsubtenantusage) | **POST** /llm/usage/subtenants | Usage rolled up across a parent tenant and its direct children
*Llm* | [**llmUsageQuery**](docs/Llm.md#llmusagequery) | **POST** /llm/usage | Unified usage aggregation (cost/tokens/requests by dimension)
*Llm* | [**llmUtilization**](docs/Llm.md#llmutilization) | **POST** /llm/insights/utilization | Idle assistants and license utilization
*LlmCatalog* | [**llmCreateCatalog**](docs/LlmCatalog.md#llmcreatecatalog) | **POST** /llm/catalog | Create a catalog entry
*LlmCatalog* | [**llmDeleteCatalog**](docs/LlmCatalog.md#llmdeletecatalog) | **DELETE** /llm/catalog/{catalog_id} | Delete a catalog entry
*LlmCatalog* | [**llmUpdateCatalog**](docs/LlmCatalog.md#llmupdatecatalog) | **PATCH** /llm/catalog/{catalog_id} | Update a catalog entry
*LlmSetting* | [**llmCreateLlmSettings**](docs/LlmSetting.md#llmcreatellmsettings) | **POST** /llm/settings | Create LLM settings
*LlmSetting* | [**llmDeleteLlmSettings**](docs/LlmSetting.md#llmdeletellmsettings) | **DELETE** /llm/settings/{settings_id} | Delete LLM settings
*LlmSetting* | [**llmTestLlmConnection**](docs/LlmSetting.md#llmtestllmconnection) | **POST** /llm/settings/test | Test an LLM connection
*LlmSetting* | [**llmTestTranscriptionConnection**](docs/LlmSetting.md#llmtesttranscriptionconnection) | **POST** /llm/settings/test/transcription | Test a transcription connection with an audio file
*LlmSetting* | [**llmUpdateLlmSettings**](docs/LlmSetting.md#llmupdatellmsettings) | **PATCH** /llm/settings/{settings_id} | Update LLM settings
*Message* | [**messagesContinueMessage**](docs/Message.md#messagescontinuemessage) | **POST** /messages/{message_id}/continue | Continue a truncated assistant message
*Message* | [**messagesConvertMessage**](docs/Message.md#messagesconvertmessage) | **GET** /messages/{message_id}/convert | Convert a message to a document
*Message* | [**messagesCreateMessage**](docs/Message.md#messagescreatemessage) | **POST** /messages/ | Create a message
*Message* | [**messagesGetMessage**](docs/Message.md#messagesgetmessage) | **GET** /messages/{message_id} | Get a message
*Message* | [**messagesGetMessageTurn**](docs/Message.md#messagesgetmessageturn) | **GET** /messages/{message_id}/turn | Get all step-messages for a turn
*Message* | [**messagesRephraseMessage**](docs/Message.md#messagesrephrasemessage) | **GET** /messages/{message_id}/rephrase | Rephrase a message
*Message* | [**messagesResumeMessage**](docs/Message.md#messagesresumemessage) | **POST** /messages/{message_id}/hil | Resume a turn awaiting approval or user input
*Message* | [**messagesSubmitMessage**](docs/Message.md#messagessubmitmessage) | **POST** /messages/submit | Submit a message with attachments
*Message* | [**messagesTranslateMessage**](docs/Message.md#messagestranslatemessage) | **GET** /messages/{message_id}/translate | Translate a message
*Nextcloud* | [**nextcloudCapabilities**](docs/Nextcloud.md#nextcloudcapabilities) | **GET** /integrations/nextcloud/capabilities | Get data source capabilities
*Nextcloud* | [**nextcloudGetItemInfo**](docs/Nextcloud.md#nextcloudgetiteminfo) | **GET** /integrations/nextcloud/drives/{drive_id}/items/{drive_item_id} | Get a drive item
*Nextcloud* | [**nextcloudGetUserInfo**](docs/Nextcloud.md#nextcloudgetuserinfo) | **GET** /integrations/nextcloud/me | Get connected user profile
*Nextcloud* | [**nextcloudIsConnected**](docs/Nextcloud.md#nextcloudisconnected) | **GET** /integrations/nextcloud/connected | Check connection status
*Nextcloud* | [**nextcloudListChildren**](docs/Nextcloud.md#nextcloudlistchildren) | **GET** /integrations/nextcloud/drives/{drive_id}/items/{drive_item_id}/children | List children of a drive item
*Nextcloud* | [**nextcloudListDrives**](docs/Nextcloud.md#nextcloudlistdrives) | **GET** /integrations/nextcloud/sites/{site_id}/drives | List drives in a site
*Nextcloud* | [**nextcloudListRoots**](docs/Nextcloud.md#nextcloudlistroots) | **GET** /integrations/nextcloud/roots | List top-level browse entries
*OneDrive* | [**onedriveCapabilities**](docs/OneDrive.md#onedrivecapabilities) | **GET** /integrations/onedrive/capabilities | Get data source capabilities
*OneDrive* | [**onedriveGetItemInfo**](docs/OneDrive.md#onedrivegetiteminfo) | **GET** /integrations/onedrive/drives/{drive_id}/items/{drive_item_id} | Get a drive item
*OneDrive* | [**onedriveGetUserInfo**](docs/OneDrive.md#onedrivegetuserinfo) | **GET** /integrations/onedrive/me | Get connected user profile
*OneDrive* | [**onedriveIsConnected**](docs/OneDrive.md#onedriveisconnected) | **GET** /integrations/onedrive/connected | Check connection status
*OneDrive* | [**onedriveListChildren**](docs/OneDrive.md#onedrivelistchildren) | **GET** /integrations/onedrive/drives/{drive_id}/items/{drive_item_id}/children | List children of a drive item
*OneDrive* | [**onedriveListDrives**](docs/OneDrive.md#onedrivelistdrives) | **GET** /integrations/onedrive/sites/{site_id}/drives | List drives in a site
*OneDrive* | [**onedriveListRoots**](docs/OneDrive.md#onedrivelistroots) | **GET** /integrations/onedrive/roots | List top-level browse entries
*Project* | [**projectsAddLibraryToProject**](docs/Project.md#projectsaddlibrarytoproject) | **POST** /projects/{project_id}/libraries/{library_id} | Add a library to a project
*Project* | [**projectsAddMembers**](docs/Project.md#projectsaddmembers) | **POST** /projects/{project_id}/members | Add members to a project
*Project* | [**projectsCreateProject**](docs/Project.md#projectscreateproject) | **POST** /projects/ | Create a project
*Project* | [**projectsDeleteMember**](docs/Project.md#projectsdeletemember) | **DELETE** /projects/{project_id}/members/{user_id} | Remove a member from a project
*Project* | [**projectsDeleteMembers**](docs/Project.md#projectsdeletemembers) | **DELETE** /projects/{project_id}/members | Remove members from a project
*Project* | [**projectsDeleteProject**](docs/Project.md#projectsdeleteproject) | **DELETE** /projects/{project_id} | Delete a project
*Project* | [**projectsIsProjectNameFree**](docs/Project.md#projectsisprojectnamefree) | **GET** /projects/available | Check if a project name is free
*Project* | [**projectsLeaveProject**](docs/Project.md#projectsleaveproject) | **DELETE** /projects/{project_id}/remove/me | Leave a project
*Project* | [**projectsRemoveLibraryFromProject**](docs/Project.md#projectsremovelibraryfromproject) | **DELETE** /projects/{project_id}/libraries/{library_id} | Remove a library from a project
*Project* | [**projectsUpdateProject**](docs/Project.md#projectsupdateproject) | **PATCH** /projects/{project_id} | Update a project
*Prompt* | [**promptsCreatePrompt**](docs/Prompt.md#promptscreateprompt) | **POST** /prompts/ | Create a prompt
*Prompt* | [**promptsDeletePrompt**](docs/Prompt.md#promptsdeleteprompt) | **DELETE** /prompts/{prompt_id} | Delete a prompt
*Prompt* | [**promptsOptimizePrompt**](docs/Prompt.md#promptsoptimizeprompt) | **POST** /prompts/optimize | Optimize a prompt
*Prompt* | [**promptsUpdatePrompt**](docs/Prompt.md#promptsupdateprompt) | **PATCH** /prompts/{prompt_id} | Update a prompt
*Query* | [**queryQuery**](docs/Query.md#queryquery) | **GET** /query/{path} | Proxy a PostgREST query
*Query* | [**queryQueryRpc**](docs/Query.md#queryqueryrpc) | **GET** /query/rpc/{path} | Proxy a PostgREST RPC call
*Rating* | [**ratingsRemove**](docs/Rating.md#ratingsremove) | **DELETE** /ratings/{rateable_type}/{rateable_id} | Delete a rating
*Rating* | [**ratingsUpsert**](docs/Rating.md#ratingsupsert) | **POST** /ratings/ | Upsert a rating
*ResourceAccess* | [**accessGetUserAccess**](docs/ResourceAccess.md#accessgetuseraccess) | **GET** /access/user/{user_id} | Effective access for a user, and where it comes from
*ResourceAccess* | [**accessRevokeUserGrant**](docs/ResourceAccess.md#accessrevokeusergrant) | **DELETE** /access/user/{user_id}/grants/{kind}/{item_id} | Revoke one direct grant from a user
*ResourceAccess* | [**accessSetUserGrants**](docs/ResourceAccess.md#accesssetusergrants) | **PUT** /access/user/{user_id}/grants/{kind} | Set a user\&#39;s direct grants for one kind
*Role* | [**rolesAssignRoleToGroup**](docs/Role.md#rolesassignroletogroup) | **POST** /roles/{role_id}/groups/{group_id} | Assign a role to a group
*Role* | [**rolesAssignRoleToUser**](docs/Role.md#rolesassignroletouser) | **POST** /roles/{role_id}/users/{user_id} | Assign a role to a user
*Role* | [**rolesCreateRole**](docs/Role.md#rolescreaterole) | **POST** /roles/ | Create a custom role
*Role* | [**rolesDeleteRole**](docs/Role.md#rolesdeleterole) | **DELETE** /roles/{role_id} | Delete a role
*Role* | [**rolesSetDefaultRole**](docs/Role.md#rolessetdefaultrole) | **PUT** /roles/{role_id}/default | Set a role as the tenant default
*Role* | [**rolesUnassignRoleFromGroup**](docs/Role.md#rolesunassignrolefromgroup) | **DELETE** /roles/{role_id}/groups/{group_id} | Unassign a role from a group
*Role* | [**rolesUnassignRoleFromUser**](docs/Role.md#rolesunassignrolefromuser) | **DELETE** /roles/{role_id}/users/{user_id} | Unassign a role from a user
*Role* | [**rolesUpdateRole**](docs/Role.md#rolesupdaterole) | **PATCH** /roles/{role_id} | Update a role
*Settings* | [**settingsCurrent**](docs/Settings.md#settingscurrent) | **GET** /settings/current | Get current tenant settings
*Settings* | [**settingsUpdateCurrentSettings**](docs/Settings.md#settingsupdatecurrentsettings) | **PATCH** /settings/current | Update current tenant settings
*Settings* | [**settingsUpdateSettings**](docs/Settings.md#settingsupdatesettings) | **PATCH** /settings/{settings_id} | Update settings by id
*Sharepoint* | [**integrationsGetItemInfo**](docs/Sharepoint.md#integrationsgetiteminfo) | **GET** /integrations/sharepoint/drives/{drive_id}/items/{drive_item_id} | Get a drive item
*Sharepoint* | [**integrationsGetUserInfo**](docs/Sharepoint.md#integrationsgetuserinfo) | **GET** /integrations/sharepoint/me | Get current SharePoint user
*Sharepoint* | [**integrationsIsConnected**](docs/Sharepoint.md#integrationsisconnected) | **GET** /integrations/sharepoint/connected | Check SharePoint connection
*Sharepoint* | [**integrationsListAllSites**](docs/Sharepoint.md#integrationslistallsites) | **GET** /integrations/sharepoint/sites | List SharePoint sites
*Sharepoint* | [**integrationsListChildren**](docs/Sharepoint.md#integrationslistchildren) | **GET** /integrations/sharepoint/drives/{drive_id}/items/{drive_item_id}/children | List children of a drive item
*Sharepoint* | [**integrationsListDrives**](docs/Sharepoint.md#integrationslistdrives) | **GET** /integrations/sharepoint/sites/{site_id}/drives | List drives in a site
*SharepointV1* | [**sharepointv1Capabilities**](docs/SharepointV1.md#sharepointv1capabilities) | **GET** /integrations/sharepoint/v1/capabilities | Get data source capabilities
*SharepointV1* | [**sharepointv1GetItemInfo**](docs/SharepointV1.md#sharepointv1getiteminfo) | **GET** /integrations/sharepoint/v1/drives/{drive_id}/items/{drive_item_id} | Get a drive item
*SharepointV1* | [**sharepointv1GetUserInfo**](docs/SharepointV1.md#sharepointv1getuserinfo) | **GET** /integrations/sharepoint/v1/me | Get connected user profile
*SharepointV1* | [**sharepointv1IsConnected**](docs/SharepointV1.md#sharepointv1isconnected) | **GET** /integrations/sharepoint/v1/connected | Check connection status
*SharepointV1* | [**sharepointv1ListChildren**](docs/SharepointV1.md#sharepointv1listchildren) | **GET** /integrations/sharepoint/v1/drives/{drive_id}/items/{drive_item_id}/children | List children of a drive item
*SharepointV1* | [**sharepointv1ListDrives**](docs/SharepointV1.md#sharepointv1listdrives) | **GET** /integrations/sharepoint/v1/sites/{site_id}/drives | List drives in a site
*SharepointV1* | [**sharepointv1ListRoots**](docs/SharepointV1.md#sharepointv1listroots) | **GET** /integrations/sharepoint/v1/roots | List top-level browse entries
*Storage* | [**storageDownloadFile**](docs/Storage.md#storagedownloadfile) | **GET** /storage/{path} | Download a file by signed token
*System* | [**systemReadSystemSettings**](docs/System.md#systemreadsystemsettings) | **GET** /system/settings | Read system settings
*System* | [**systemUpdateSystemSettings**](docs/System.md#systemupdatesystemsettings) | **PATCH** /system/settings | Update system settings
*Tag* | [**tagsDeleteTag**](docs/Tag.md#tagsdeletetag) | **DELETE** /tags/{tag_id} | Delete a tag
*Tag* | [**tagsNewTag**](docs/Tag.md#tagsnewtag) | **POST** /tags/ | Create a tag
*Tag* | [**tagsUpdateTag**](docs/Tag.md#tagsupdatetag) | **PATCH** /tags/{tag_id} | Rename a tag
*Tarif* | [**tarifsCreateTarif**](docs/Tarif.md#tarifscreatetarif) | **POST** /tarifs/ | Create a tarif plan
*Tarif* | [**tarifsDeleteTarif**](docs/Tarif.md#tarifsdeletetarif) | **DELETE** /tarifs/{tarif_id} | Delete a tarif plan
*Tarif* | [**tarifsUpdateTarif**](docs/Tarif.md#tarifsupdatetarif) | **PATCH** /tarifs/{tarif_id} | Update a tarif plan
*Template* | [**templatesCreate**](docs/Template.md#templatescreate) | **POST** /templates/ | Create an email template
*Template* | [**templatesDelete**](docs/Template.md#templatesdelete) | **DELETE** /templates/{template_id} | Delete an email template
*Template* | [**templatesGetEmailCatalog**](docs/Template.md#templatesgetemailcatalog) | **GET** /templates/email-catalog | List customizable emails and their variables
*Template* | [**templatesUpdate**](docs/Template.md#templatesupdate) | **PATCH** /templates/{template_id} | Update an email template
*Tenant* | [**tenantsAddLibraryToTenants**](docs/Tenant.md#tenantsaddlibrarytotenants) | **POST** /tenants/{tenant_id}/libraries/{library_id} | Assign a library to a tenant
*Tenant* | [**tenantsCreateTenant**](docs/Tenant.md#tenantscreatetenant) | **POST** /tenants/ | Create a tenant
*Tenant* | [**tenantsCreateTenantConnector**](docs/Tenant.md#tenantscreatetenantconnector) | **POST** /tenants/{tenant_id}/connectors/{connector_id} | Enable a connector for a tenant
*Tenant* | [**tenantsCreateTenantOauthClient**](docs/Tenant.md#tenantscreatetenantoauthclient) | **POST** /tenants/{tenant_id}/oauth-clients/{oauth_client_id} | Create a per-tenant OAuth client config
*Tenant* | [**tenantsCreateTenantTool**](docs/Tenant.md#tenantscreatetenanttool) | **POST** /tenants/{tenant_id}/tools/{tool_id} | Enable a tool for a tenant
*Tenant* | [**tenantsDeleteTenant**](docs/Tenant.md#tenantsdeletetenant) | **DELETE** /tenants/{tenant_id} | Delete a tenant
*Tenant* | [**tenantsDeleteTenantConnector**](docs/Tenant.md#tenantsdeletetenantconnector) | **DELETE** /tenants/{tenant_id}/connectors/{connector_id} | Disable a connector for a tenant
*Tenant* | [**tenantsDeleteTenantModel**](docs/Tenant.md#tenantsdeletetenantmodel) | **DELETE** /tenants/{tenant_id}/models/{model_id} | Disable a model for a tenant
*Tenant* | [**tenantsDeleteTenantModelsBulk**](docs/Tenant.md#tenantsdeletetenantmodelsbulk) | **DELETE** /tenants/models/{model_id}/bulk | Disable a model for multiple tenants
*Tenant* | [**tenantsDeleteTenantOauthClient**](docs/Tenant.md#tenantsdeletetenantoauthclient) | **DELETE** /tenants/{tenant_id}/oauth-clients/{oauth_client_id} | Delete a per-tenant OAuth client config
*Tenant* | [**tenantsDeleteTenantTool**](docs/Tenant.md#tenantsdeletetenanttool) | **DELETE** /tenants/{tenant_id}/tools/{tool_id} | Disable a tool for a tenant
*Tenant* | [**tenantsGetCurrentTenant**](docs/Tenant.md#tenantsgetcurrenttenant) | **GET** /tenants/current | Get current tenant
*Tenant* | [**tenantsPutTenantModel**](docs/Tenant.md#tenantsputtenantmodel) | **PUT** /tenants/{tenant_id}/models/{model_id} | Enable a model for a tenant
*Tenant* | [**tenantsPutTenantModelsBulk**](docs/Tenant.md#tenantsputtenantmodelsbulk) | **PUT** /tenants/models/{model_id}/bulk | Enable a model for multiple tenants
*Tenant* | [**tenantsRemoveTenantLibraryMember**](docs/Tenant.md#tenantsremovetenantlibrarymember) | **DELETE** /tenants/{tenant_id}/libraries/{library_id} | Unassign a library from a tenant
*Tenant* | [**tenantsUpdateCurrentTenant**](docs/Tenant.md#tenantsupdatecurrenttenant) | **PATCH** /tenants/current | Update current tenant
*Tenant* | [**tenantsUpdateTenant**](docs/Tenant.md#tenantsupdatetenant) | **PATCH** /tenants/{tenant_id} | Update a tenant
*Tenant* | [**tenantsUpdateTenantOauthClient**](docs/Tenant.md#tenantsupdatetenantoauthclient) | **PATCH** /tenants/{tenant_id}/oauth-clients/{oauth_client_id} | Update a per-tenant OAuth client config
*Tenant* | [**tenantsUpdateTenantOauthSecret**](docs/Tenant.md#tenantsupdatetenantoauthsecret) | **PUT** /tenants/{tenant_id}/oauth-clients/{oauth_client_id}/secret | Set a per-tenant OAuth client secret
*Tool* | [**toolsCreateTool**](docs/Tool.md#toolscreatetool) | **POST** /tools/ | Create a tool
*Tool* | [**toolsDeleteTool**](docs/Tool.md#toolsdeletetool) | **DELETE** /tools/{tool_id} | Delete a tool
*Tool* | [**toolsUpdateTool**](docs/Tool.md#toolsupdatetool) | **PATCH** /tools/{tool_id} | Update a tool
*ToolAction* | [**toolactionsConnectSharedMailbox**](docs/ToolAction.md#toolactionsconnectsharedmailbox) | **POST** /tool-actions/email/shared-mailboxes | Connect a shared mailbox
*ToolAction* | [**toolactionsCreateEmailDraft**](docs/ToolAction.md#toolactionscreateemaildraft) | **POST** /tool-actions/email/draft | Create an Outlook mailbox draft from a chat draft
*ToolAction* | [**toolactionsDisconnectSharedMailbox**](docs/ToolAction.md#toolactionsdisconnectsharedmailbox) | **DELETE** /tool-actions/email/shared-mailboxes/{address} | Disconnect a shared mailbox
*ToolAction* | [**toolactionsListSharedMailboxes**](docs/ToolAction.md#toolactionslistsharedmailboxes) | **GET** /tool-actions/email/shared-mailboxes | List connected shared mailboxes
*ToolAction* | [**toolactionsSearchSharedMailboxes**](docs/ToolAction.md#toolactionssearchsharedmailboxes) | **GET** /tool-actions/email/shared-mailboxes/search | Search the directory for mailboxes to connect
*ToolAction* | [**toolactionsSendEmailFromDraft**](docs/ToolAction.md#toolactionssendemailfromdraft) | **POST** /tool-actions/email/send | Send an email from a draft
*Transcription* | [**transcriptionsCreateTranscription**](docs/Transcription.md#transcriptionscreatetranscription) | **POST** /transcriptions/ | Transcribe an audio file
*Transcription* | [**transcriptionsTranscriptionCallback**](docs/Transcription.md#transcriptionstranscriptioncallback) | **POST** /transcriptions/callback | Receive an async transcription callback
*User* | [**usersActivateUser**](docs/User.md#usersactivateuser) | **POST** /users/{user_id}/activate | Activate a user
*User* | [**usersCreateGroup**](docs/User.md#userscreategroup) | **POST** /users/groups | Create a user group
*User* | [**usersCreateUser**](docs/User.md#userscreateuser) | **POST** /users/ | Create a user
*User* | [**usersDeactivateUser**](docs/User.md#usersdeactivateuser) | **POST** /users/{user_id}/deactivate | Deactivate a user
*User* | [**usersDeleteGroup**](docs/User.md#usersdeletegroup) | **DELETE** /users/groups/{group_id} | Delete a user group
*User* | [**usersDeleteUser**](docs/User.md#usersdeleteuser) | **DELETE** /users/{user_id} | Delete a user
*User* | [**usersGetMyself**](docs/User.md#usersgetmyself) | **GET** /users/me | Get current user
*User* | [**usersResetPassword**](docs/User.md#usersresetpassword) | **POST** /users/passwd | Change own password
*User* | [**usersSyncExternalGroup**](docs/User.md#userssyncexternalgroup) | **POST** /users/groups/{group_id}/sync | Sync an external group\&#39;s members
*User* | [**usersUpdateGroup**](docs/User.md#usersupdategroup) | **PATCH** /users/groups/{group_id} | Update a user group
*User* | [**usersUpdateUser**](docs/User.md#usersupdateuser) | **PATCH** /users/{user_id} | Update a user
*User* | [**usersUpsertMembers**](docs/User.md#usersupsertmembers) | **PUT** /users/members/{group_id} | Set user group members
*User* | [**usersUpsertMyPreferences**](docs/User.md#usersupsertmypreferences) | **PATCH** /users/me/preferences | Update own preferences
*Workflow* | [**workflowsCreateRun**](docs/Workflow.md#workflowscreaterun) | **POST** /workflows/{workflow_id}/runs | Create Run
*Workflow* | [**workflowsCreateRunStreamToken**](docs/Workflow.md#workflowscreaterunstreamtoken) | **POST** /workflows/{workflow_id}/runs/{run_id}/stream-token | Create Run Stream Token
*Workflow* | [**workflowsCreateWorkflow**](docs/Workflow.md#workflowscreateworkflow) | **POST** /workflows/ | Create Workflow
*Workflow* | [**workflowsDeleteWorkflow**](docs/Workflow.md#workflowsdeleteworkflow) | **DELETE** /workflows/{workflow_id} | Delete Workflow
*Workflow* | [**workflowsRefineWorkflow**](docs/Workflow.md#workflowsrefineworkflow) | **POST** /workflows/{workflow_id}/chat | Refine Workflow
*Workflow* | [**workflowsStreamRunEvents**](docs/Workflow.md#workflowsstreamrunevents) | **POST** /workflows/{workflow_id}/runs/{run_id}/events | Stream Run Events
*Workflow* | [**workflowsUpdateWorkflow**](docs/Workflow.md#workflowsupdateworkflow) | **PATCH** /workflows/{workflow_id} | Update Workflow


### Documentation For Models

 - [AccessItemOut](docs/AccessItemOut.md)
 - [AccessKind](docs/AccessKind.md)
 - [ApiKeyCreateRequest](docs/ApiKeyCreateRequest.md)
 - [ApiKeyCreateResponse](docs/ApiKeyCreateResponse.md)
 - [ApiKeyInventoryRequest](docs/ApiKeyInventoryRequest.md)
 - [ApiKeyInventoryResponse](docs/ApiKeyInventoryResponse.md)
 - [ApiKeyInventoryRow](docs/ApiKeyInventoryRow.md)
 - [Application](docs/Application.md)
 - [ApplicationAccessIn](docs/ApplicationAccessIn.md)
 - [ApplicationCatalog](docs/ApplicationCatalog.md)
 - [ApplicationCatalogIn](docs/ApplicationCatalogIn.md)
 - [ApplicationCatalogUpdate](docs/ApplicationCatalogUpdate.md)
 - [ApplicationGroupOut](docs/ApplicationGroupOut.md)
 - [ApplicationIn](docs/ApplicationIn.md)
 - [ApplicationMemberOut](docs/ApplicationMemberOut.md)
 - [Assistant](docs/Assistant.md)
 - [AssistantCatalog](docs/AssistantCatalog.md)
 - [AssistantCatalogIn](docs/AssistantCatalogIn.md)
 - [AssistantCatalogToolOut](docs/AssistantCatalogToolOut.md)
 - [AssistantCatalogUpdate](docs/AssistantCatalogUpdate.md)
 - [AssistantGroupOut](docs/AssistantGroupOut.md)
 - [AssistantGroupsIn](docs/AssistantGroupsIn.md)
 - [AssistantIn](docs/AssistantIn.md)
 - [AssistantInputTypeEnum](docs/AssistantInputTypeEnum.md)
 - [AssistantLibrary](docs/AssistantLibrary.md)
 - [AssistantMemberGrantedViaEnum](docs/AssistantMemberGrantedViaEnum.md)
 - [AssistantMemberOut](docs/AssistantMemberOut.md)
 - [AssistantMembersIn](docs/AssistantMembersIn.md)
 - [AssistantTool](docs/AssistantTool.md)
 - [AssistantVisibilityEnum](docs/AssistantVisibilityEnum.md)
 - [AssistantVisibilityUpdate](docs/AssistantVisibilityUpdate.md)
 - [Bcc](docs/Bcc.md)
 - [BudgetAlert](docs/BudgetAlert.md)
 - [BudgetAlertRequest](docs/BudgetAlertRequest.md)
 - [BudgetAlertUpdate](docs/BudgetAlertUpdate.md)
 - [BudgetForecast](docs/BudgetForecast.md)
 - [BudgetSummary](docs/BudgetSummary.md)
 - [BudgetTopUpOut](docs/BudgetTopUpOut.md)
 - [BudgetTopUpRequest](docs/BudgetTopUpRequest.md)
 - [BulkResult](docs/BulkResult.md)
 - [CatalogIn](docs/CatalogIn.md)
 - [CatalogUpdate](docs/CatalogUpdate.md)
 - [CategoryOut](docs/CategoryOut.md)
 - [Cc](docs/Cc.md)
 - [Chat](docs/Chat.md)
 - [ChatIn](docs/ChatIn.md)
 - [ChatInactiveDocumentOut](docs/ChatInactiveDocumentOut.md)
 - [ChatLibrary](docs/ChatLibrary.md)
 - [ClarificationAnswer](docs/ClarificationAnswer.md)
 - [ConnectSharedMailboxIn](docs/ConnectSharedMailboxIn.md)
 - [Connector](docs/Connector.md)
 - [ConnectorAuthType](docs/ConnectorAuthType.md)
 - [ConnectorConsentOut](docs/ConnectorConsentOut.md)
 - [ConnectorOut](docs/ConnectorOut.md)
 - [ConnectorStatusOut](docs/ConnectorStatusOut.md)
 - [ConnectorUpdate](docs/ConnectorUpdate.md)
 - [CostAudioPerMinute](docs/CostAudioPerMinute.md)
 - [CostByModel](docs/CostByModel.md)
 - [CostBySource](docs/CostBySource.md)
 - [CostCacheCreationTokens](docs/CostCacheCreationTokens.md)
 - [CostCacheCreationTokensAboveTier](docs/CostCacheCreationTokensAboveTier.md)
 - [CostCachedTokens](docs/CostCachedTokens.md)
 - [CostCachedTokensAboveTier](docs/CostCachedTokensAboveTier.md)
 - [CostCompletionTokens](docs/CostCompletionTokens.md)
 - [CostCompletionTokens1](docs/CostCompletionTokens1.md)
 - [CostCompletionTokensAboveTier](docs/CostCompletionTokensAboveTier.md)
 - [CostPromptTokens](docs/CostPromptTokens.md)
 - [CostPromptTokens1](docs/CostPromptTokens1.md)
 - [CostPromptTokensAboveTier](docs/CostPromptTokensAboveTier.md)
 - [CostTimeseriesPoint](docs/CostTimeseriesPoint.md)
 - [CreateOutlookDraftRequest](docs/CreateOutlookDraftRequest.md)
 - [CreateOutlookDraftResponse](docs/CreateOutlookDraftResponse.md)
 - [CredentialIn](docs/CredentialIn.md)
 - [CredentialPartOut](docs/CredentialPartOut.md)
 - [CredentialTemplateOut](docs/CredentialTemplateOut.md)
 - [CustomConnectorCreate](docs/CustomConnectorCreate.md)
 - [CustomConnectorOut](docs/CustomConnectorOut.md)
 - [CustomConnectorUpdate](docs/CustomConnectorUpdate.md)
 - [DataSourceCapabilities](docs/DataSourceCapabilities.md)
 - [DataSourceDriveModel](docs/DataSourceDriveModel.md)
 - [DataSourceFolderModel](docs/DataSourceFolderModel.md)
 - [DataSourceItemModel](docs/DataSourceItemModel.md)
 - [DataSourceSiteModel](docs/DataSourceSiteModel.md)
 - [DataSourceUserModel](docs/DataSourceUserModel.md)
 - [DateWindowRequest](docs/DateWindowRequest.md)
 - [DirectFileUrl](docs/DirectFileUrl.md)
 - [Document](docs/Document.md)
 - [DocumentMetrics](docs/DocumentMetrics.md)
 - [DocumentTextOut](docs/DocumentTextOut.md)
 - [DocumentUsageRequest](docs/DocumentUsageRequest.md)
 - [DocumentUsageResponse](docs/DocumentUsageResponse.md)
 - [DocumentUsageRow](docs/DocumentUsageRow.md)
 - [EmailCatalogOut](docs/EmailCatalogOut.md)
 - [EmailSpec](docs/EmailSpec.md)
 - [EmailTemplateKey](docs/EmailTemplateKey.md)
 - [Example](docs/Example.md)
 - [FeatureFlagOut](docs/FeatureFlagOut.md)
 - [FeatureFlagSetIn](docs/FeatureFlagSetIn.md)
 - [FormField](docs/FormField.md)
 - [FormFieldTypeEnum](docs/FormFieldTypeEnum.md)
 - [GroupAppAccessIn](docs/GroupAppAccessIn.md)
 - [GroupIn](docs/GroupIn.md)
 - [GroupSyncOut](docs/GroupSyncOut.md)
 - [HTTPValidationError](docs/HTTPValidationError.md)
 - [IdleAssistant](docs/IdleAssistant.md)
 - [InvitationIn](docs/InvitationIn.md)
 - [InvitationOut](docs/InvitationOut.md)
 - [LLMConnectionTestIn](docs/LLMConnectionTestIn.md)
 - [LLMConnectionTestOut](docs/LLMConnectionTestOut.md)
 - [LLMSettingsIn](docs/LLMSettingsIn.md)
 - [LLMSettingsUpdate](docs/LLMSettingsUpdate.md)
 - [Library](docs/Library.md)
 - [LibraryIn](docs/LibraryIn.md)
 - [LibraryMemberBulkDelete](docs/LibraryMemberBulkDelete.md)
 - [LibraryMemberBulkIn](docs/LibraryMemberBulkIn.md)
 - [LibraryMemberIn](docs/LibraryMemberIn.md)
 - [LibraryMemberOut](docs/LibraryMemberOut.md)
 - [LibraryUpdateIn](docs/LibraryUpdateIn.md)
 - [LicenseUtilization](docs/LicenseUtilization.md)
 - [LocationInner](docs/LocationInner.md)
 - [MarketplaceCatalogStateEnum](docs/MarketplaceCatalogStateEnum.md)
 - [MarketplaceCatalogStateUpdate](docs/MarketplaceCatalogStateUpdate.md)
 - [MessageDetailOut](docs/MessageDetailOut.md)
 - [MessageFileOut](docs/MessageFileOut.md)
 - [MessageIn](docs/MessageIn.md)
 - [MessageSubmitOut](docs/MessageSubmitOut.md)
 - [MessageTokensResponse](docs/MessageTokensResponse.md)
 - [MessageTurnOut](docs/MessageTurnOut.md)
 - [ModelDelta](docs/ModelDelta.md)
 - [ModelTierEnum](docs/ModelTierEnum.md)
 - [MoversResponse](docs/MoversResponse.md)
 - [NeulandAssistantsTaggingOut](docs/NeulandAssistantsTaggingOut.md)
 - [NeulandMarketplaceAssistantSchemasTaggingOut](docs/NeulandMarketplaceAssistantSchemasTaggingOut.md)
 - [OAuth2ProviderEnum](docs/OAuth2ProviderEnum.md)
 - [OAuthClient](docs/OAuthClient.md)
 - [OAuthClientUpdate](docs/OAuthClientUpdate.md)
 - [OutputFormat](docs/OutputFormat.md)
 - [PasswordResetIn](docs/PasswordResetIn.md)
 - [PasswordResetRequestIn](docs/PasswordResetRequestIn.md)
 - [PlanStatus](docs/PlanStatus.md)
 - [Project](docs/Project.md)
 - [ProjectIn](docs/ProjectIn.md)
 - [ProjectLibrary](docs/ProjectLibrary.md)
 - [ProjectMember](docs/ProjectMember.md)
 - [ProjectMemberBulkDelete](docs/ProjectMemberBulkDelete.md)
 - [ProjectMemberBulkIn](docs/ProjectMemberBulkIn.md)
 - [ProjectMemberIn](docs/ProjectMemberIn.md)
 - [Prompt](docs/Prompt.md)
 - [PromptIn](docs/PromptIn.md)
 - [PromptOptimizeIn](docs/PromptOptimizeIn.md)
 - [PromptOptimizeOut](docs/PromptOptimizeOut.md)
 - [RateableTypeEnum](docs/RateableTypeEnum.md)
 - [Rating](docs/Rating.md)
 - [RatingIn](docs/RatingIn.md)
 - [ReasoningEffortEnum](docs/ReasoningEffortEnum.md)
 - [RephraseStyleEnum](docs/RephraseStyleEnum.md)
 - [ResponseAuthGetEntraGroupsValue](docs/ResponseAuthGetEntraGroupsValue.md)
 - [ResponseDropboxListRoots](docs/ResponseDropboxListRoots.md)
 - [ResponseGoogledriveListRoots](docs/ResponseGoogledriveListRoots.md)
 - [ResponseNextcloudListRoots](docs/ResponseNextcloudListRoots.md)
 - [ResponseOnedriveListRoots](docs/ResponseOnedriveListRoots.md)
 - [ResponseSharepointv1ListRoots](docs/ResponseSharepointv1ListRoots.md)
 - [ResumeIn](docs/ResumeIn.md)
 - [Role](docs/Role.md)
 - [RoleIn](docs/RoleIn.md)
 - [RoleUpdateIn](docs/RoleUpdateIn.md)
 - [RunCreateOut](docs/RunCreateOut.md)
 - [SecretUpdateIn](docs/SecretUpdateIn.md)
 - [SendEmailRequest](docs/SendEmailRequest.md)
 - [SendEmailResponse](docs/SendEmailResponse.md)
 - [SetAtlassianCloudIdRequest](docs/SetAtlassianCloudIdRequest.md)
 - [Settings](docs/Settings.md)
 - [SettingsIn](docs/SettingsIn.md)
 - [SharedMailbox](docs/SharedMailbox.md)
 - [SharedMailboxCandidateOut](docs/SharedMailboxCandidateOut.md)
 - [SharedMailboxListOut](docs/SharedMailboxListOut.md)
 - [SharedMailboxSearchOut](docs/SharedMailboxSearchOut.md)
 - [SharepointDriveModel](docs/SharepointDriveModel.md)
 - [SharepointFolderModel](docs/SharepointFolderModel.md)
 - [SharepointItemModel](docs/SharepointItemModel.md)
 - [SharepointSiteModel](docs/SharepointSiteModel.md)
 - [SharepointUserModel](docs/SharepointUserModel.md)
 - [SsoExchangeIn](docs/SsoExchangeIn.md)
 - [SsoInitOut](docs/SsoInitOut.md)
 - [SsoResolveOut](docs/SsoResolveOut.md)
 - [StreamTokenOut](docs/StreamTokenOut.md)
 - [SubtenantUsageResponse](docs/SubtenantUsageResponse.md)
 - [SubtenantUsageRow](docs/SubtenantUsageRow.md)
 - [SystemSettings](docs/SystemSettings.md)
 - [SystemSettingsUpdate](docs/SystemSettingsUpdate.md)
 - [Tag](docs/Tag.md)
 - [TagIn](docs/TagIn.md)
 - [TaggableTypeEnum](docs/TaggableTypeEnum.md)
 - [Tagging](docs/Tagging.md)
 - [Tarif](docs/Tarif.md)
 - [TarifIn](docs/TarifIn.md)
 - [TarifStatusEnum](docs/TarifStatusEnum.md)
 - [TemplateIn](docs/TemplateIn.md)
 - [TemplateOut](docs/TemplateOut.md)
 - [TemplateUpdate](docs/TemplateUpdate.md)
 - [TenantIn](docs/TenantIn.md)
 - [TenantLLM](docs/TenantLLM.md)
 - [TenantModelBulkIn](docs/TenantModelBulkIn.md)
 - [TenantModelIn](docs/TenantModelIn.md)
 - [TenantOAuthClientIn](docs/TenantOAuthClientIn.md)
 - [TenantOAuthClientOut](docs/TenantOAuthClientOut.md)
 - [TenantOAuthClientUpdate](docs/TenantOAuthClientUpdate.md)
 - [TenantOut](docs/TenantOut.md)
 - [TenantThemeOut](docs/TenantThemeOut.md)
 - [TenantUpdateIn](docs/TenantUpdateIn.md)
 - [ThemeModeEnum](docs/ThemeModeEnum.md)
 - [TimeseriesPoint](docs/TimeseriesPoint.md)
 - [TimeseriesResponse](docs/TimeseriesResponse.md)
 - [To](docs/To.md)
 - [To1](docs/To1.md)
 - [TokenOut](docs/TokenOut.md)
 - [TokenTimeseriesPerModel](docs/TokenTimeseriesPerModel.md)
 - [TokenTimeseriesPoint](docs/TokenTimeseriesPoint.md)
 - [TokensPerModel](docs/TokensPerModel.md)
 - [TokensTimeseriesResponse](docs/TokensTimeseriesResponse.md)
 - [ToolCallOut](docs/ToolCallOut.md)
 - [ToolCallProgressStepOut](docs/ToolCallProgressStepOut.md)
 - [ToolCreate](docs/ToolCreate.md)
 - [ToolOut](docs/ToolOut.md)
 - [ToolUpdate](docs/ToolUpdate.md)
 - [TranscriptionOut](docs/TranscriptionOut.md)
 - [TranscriptionSegment](docs/TranscriptionSegment.md)
 - [Translation](docs/Translation.md)
 - [UsageCostRequest](docs/UsageCostRequest.md)
 - [UsageCostResponse](docs/UsageCostResponse.md)
 - [UsageMetrics](docs/UsageMetrics.md)
 - [UsageQueryRequest](docs/UsageQueryRequest.md)
 - [UsageQueryResponse](docs/UsageQueryResponse.md)
 - [UsageRequest](docs/UsageRequest.md)
 - [UsageRow](docs/UsageRow.md)
 - [UserAccessOut](docs/UserAccessOut.md)
 - [UserGrantIn](docs/UserGrantIn.md)
 - [UserGrantOut](docs/UserGrantOut.md)
 - [UserGroup](docs/UserGroup.md)
 - [UserGroupMember](docs/UserGroupMember.md)
 - [UserGroupSource](docs/UserGroupSource.md)
 - [UserIn](docs/UserIn.md)
 - [UserMeOut](docs/UserMeOut.md)
 - [UserOut](docs/UserOut.md)
 - [UserPreferenceOut](docs/UserPreferenceOut.md)
 - [UserPreferenceUpdateIn](docs/UserPreferenceUpdateIn.md)
 - [UserUpdateIn](docs/UserUpdateIn.md)
 - [UtilizationRequest](docs/UtilizationRequest.md)
 - [UtilizationResponse](docs/UtilizationResponse.md)
 - [ValidationError](docs/ValidationError.md)
 - [VariableSpec](docs/VariableSpec.md)
 - [Workflow](docs/Workflow.md)
 - [WorkflowChatIn](docs/WorkflowChatIn.md)
 - [WorkflowChatOut](docs/WorkflowChatOut.md)
 - [WorkflowIn](docs/WorkflowIn.md)
 - [WorkflowUpdateIn](docs/WorkflowUpdateIn.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="OAuth2PasswordBearer"></a>
### OAuth2PasswordBearer

- **Type**: OAuth
- **Flow**: password
- **Authorization URL**: 
- **Scopes**: N/A

<a id="APIKeyHeader"></a>
### APIKeyHeader

- **Type**: API key
- **API key parameter name**: X-API-KEY
- **Location**: HTTP header

