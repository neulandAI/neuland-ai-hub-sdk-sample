## neuland-hub-sdk@1.0.0

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
npm install neuland-hub-sdk@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Alert* | [**alertsCreateAlert**](docs/Alert.md#alertscreatealert) | **POST** /alerts/ | Create a budget alert
*Alert* | [**alertsDeleteAlert**](docs/Alert.md#alertsdeletealert) | **DELETE** /alerts/{alert_id} | Delete a budget alert
*Alert* | [**alertsUpdateAlert**](docs/Alert.md#alertsupdatealert) | **PATCH** /alerts/{alert_id} | Update a budget alert
*ApiKey* | [**apiCreateKey**](docs/ApiKey.md#apicreatekey) | **POST** /api/key/ | Create an API key
*ApiKey* | [**apiRevokeApiKey**](docs/ApiKey.md#apirevokeapikey) | **PATCH** /api/key/revoke/{api_key_id} | Revoke an API key
*Application* | [**applicationsCreateApp**](docs/Application.md#applicationscreateapp) | **POST** /applications/ | Create an application
*Application* | [**applicationsDeleteApp**](docs/Application.md#applicationsdeleteapp) | **DELETE** /applications/{app_id} | Delete an application
*Application* | [**applicationsUpdateApp**](docs/Application.md#applicationsupdateapp) | **PATCH** /applications/{app_id} | Update an application
*Application* | [**applicationsUpdateGroupMembership**](docs/Application.md#applicationsupdategroupmembership) | **PUT** /applications/group/access | Set application access for a user group
*Application* | [**applicationsUpdateUserMembership**](docs/Application.md#applicationsupdateusermembership) | **PUT** /applications/user/access | Set application access for users
*Assistant* | [**assistantsAddLibraryToAssistant**](docs/Assistant.md#assistantsaddlibrarytoassistant) | **POST** /assistants/{assistant_id}/libraries/{library_id} | Add a library to an assistant
*Assistant* | [**assistantsAddMembers**](docs/Assistant.md#assistantsaddmembers) | **POST** /assistants/{assistant_id}/members | Add members to an assistant
*Assistant* | [**assistantsAddTagToAssistant**](docs/Assistant.md#assistantsaddtagtoassistant) | **POST** /assistants/{assistant_id}/tags/{tag_id} | Add a tag to an assistant
*Assistant* | [**assistantsAddToolToAssistant**](docs/Assistant.md#assistantsaddtooltoassistant) | **POST** /assistants/{assistant_id}/tools/{tool_id} | Add a tool to an assistant
*Assistant* | [**assistantsCreateAssistant**](docs/Assistant.md#assistantscreateassistant) | **POST** /assistants/ | Create an assistant
*Assistant* | [**assistantsDeleteAssistant**](docs/Assistant.md#assistantsdeleteassistant) | **DELETE** /assistants/{assistant_id} | Delete an assistant
*Assistant* | [**assistantsDeleteMembers**](docs/Assistant.md#assistantsdeletemembers) | **DELETE** /assistants/{assistant_id}/members | Remove members from an assistant
*Assistant* | [**assistantsJoinAssistant**](docs/Assistant.md#assistantsjoinassistant) | **POST** /assistants/{assistant_id}/membership | Join Assistant
*Assistant* | [**assistantsLeaveAssitant**](docs/Assistant.md#assistantsleaveassitant) | **DELETE** /assistants/{assistant_id}/remove/me | Leave an assistant
*Assistant* | [**assistantsRemoveLibraryFromAssistant**](docs/Assistant.md#assistantsremovelibraryfromassistant) | **DELETE** /assistants/{assistant_id}/libraries/{library_id} | Remove a library from an assistant
*Assistant* | [**assistantsRemoveMember**](docs/Assistant.md#assistantsremovemember) | **DELETE** /assistants/{assistant_id}/members/{user_id} | Remove a single member
*Assistant* | [**assistantsRemoveTagFromAssistant**](docs/Assistant.md#assistantsremovetagfromassistant) | **DELETE** /assistants/{assistant_id}/tags/{tag_id} | Remove a tag from an assistant
*Assistant* | [**assistantsRemoveToolFromAssistant**](docs/Assistant.md#assistantsremovetoolfromassistant) | **DELETE** /assistants/{assistant_id}/tools/{tool_id} | Remove a tool from an assistant
*Assistant* | [**assistantsSubmitAssistant**](docs/Assistant.md#assistantssubmitassistant) | **POST** /assistants/submit | Create an assistant with attachments
*Assistant* | [**assistantsUpdateAssistant**](docs/Assistant.md#assistantsupdateassistant) | **PATCH** /assistants/{assistant_id} | Update an assistant
*Assistant* | [**assistantsUpdateAssistantGroups**](docs/Assistant.md#assistantsupdateassistantgroups) | **PUT** /assistants/{assistant_id}/groups | Update Assistant Groups
*Assistant* | [**assistantsUpdateAssistantVisibility**](docs/Assistant.md#assistantsupdateassistantvisibility) | **PATCH** /assistants/{assistant_id}/visibility | Update Assistant Visibility
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
*Auth* | [**authSearchEntraGroups**](docs/Auth.md#authsearchentragroups) | **GET** /auth/entra/groups/search | Search Entra Groups
*Auth* | [**authSendEmailConfirmation**](docs/Auth.md#authsendemailconfirmation) | **POST** /auth/send-email-confirmation | Send an email confirmation
*Auth* | [**authSsoExchange**](docs/Auth.md#authssoexchange) | **POST** /auth/sso/{slug}/{provider}/exchange | Sso Exchange
*Auth* | [**authSsoInit**](docs/Auth.md#authssoinit) | **GET** /auth/sso/{slug}/{provider}/init | Sso Init
*Auth* | [**authSsoResolve**](docs/Auth.md#authssoresolve) | **GET** /auth/sso/resolve | Sso Resolve
*AuthConnector* | [**authInitiateAdminConsent**](docs/AuthConnector.md#authinitiateadminconsent) | **GET** /auth/connectors/{connector_id}/consent/admin | Initiate admin connector consent
*AuthConnector* | [**authInitiateConsent**](docs/AuthConnector.md#authinitiateconsent) | **GET** /auth/connectors/{connector_id}/consent | Initiate connector consent
*AuthConnector* | [**authListConnectorStatus**](docs/AuthConnector.md#authlistconnectorstatus) | **GET** /auth/connectors/status | List connector status
*AuthConnector* | [**authOauthCallback**](docs/AuthConnector.md#authoauthcallback) | **GET** /auth/connectors/callback | Connector OAuth callback
*AuthConnector* | [**authRevokeConsent**](docs/AuthConnector.md#authrevokeconsent) | **DELETE** /auth/connectors/{connector_id}/consent | Revoke connector consent
*AuthConnector* | [**authUpdateConnector**](docs/AuthConnector.md#authupdateconnector) | **PATCH** /auth/connectors/{connector_id} | Update a connector
*AuthConnector* | [**authUpdateOauthClient**](docs/AuthConnector.md#authupdateoauthclient) | **PATCH** /auth/connectors/oauth-clients/{oauth_client_id} | Update an OAuth client
*Chat* | [**chatsAddLibraryToChat**](docs/Chat.md#chatsaddlibrarytochat) | **POST** /chats/{chat_id}/libraries/{library_id} | Add a library to a chat
*Chat* | [**chatsCancelMessage**](docs/Chat.md#chatscancelmessage) | **POST** /chats/{chat_id}/cancel | Cancel in-progress generation
*Chat* | [**chatsDeactivateDocuments**](docs/Chat.md#chatsdeactivatedocuments) | **POST** /chats/{chat_id}/inactive-documents | Deactivate documents in a chat
*Chat* | [**chatsRemoveChat**](docs/Chat.md#chatsremovechat) | **DELETE** /chats/{chat_id} | Delete a chat
*Chat* | [**chatsRemoveInactiveDocuments**](docs/Chat.md#chatsremoveinactivedocuments) | **DELETE** /chats/{chat_id}/inactive-documents | Reactivate documents in a chat
*Chat* | [**chatsRemoveLibraryFromChat**](docs/Chat.md#chatsremovelibraryfromchat) | **DELETE** /chats/{chat_id}/libraries/{library_id} | Remove a library from a chat
*Chat* | [**chatsSummerizeChat**](docs/Chat.md#chatssummerizechat) | **GET** /chats/{chat_id}/summary | Summarize a chat
*Chat* | [**chatsUpdateChat**](docs/Chat.md#chatsupdatechat) | **PATCH** /chats/{chat_id} | Update a chat
*Chat* | [**chatsUpdateChatToolSettings**](docs/Chat.md#chatsupdatechattoolsettings) | **PUT** /chats/{chat_id}/tools/{tool_id} | Set a chat tool setting
*Default* | [**postPostCheck**](docs/Default.md#postpostcheck) | **POST** /post | Post Check
*Default* | [**rootRoot**](docs/Default.md#rootroot) | **GET** / | Root
*Default* | [**statStat**](docs/Default.md#statstat) | **GET** /stat | Stat
*Default* | [**themeGetTheme**](docs/Default.md#themegettheme) | **GET** /theme | Get Theme
*Default* | [**versionVersion**](docs/Default.md#versionversion) | **GET** /version | Version
*Document* | [**documentsDeleteChatDocument**](docs/Document.md#documentsdeletechatdocument) | **DELETE** /documents/{document_id} | Delete a document
*Document* | [**documentsGetFile**](docs/Document.md#documentsgetfile) | **GET** /documents/{document_id} | Download a document
*Document* | [**documentsImportDocuments**](docs/Document.md#documentsimportdocuments) | **POST** /documents/import | Import documents from a connected source
*Document* | [**documentsRetryDocument**](docs/Document.md#documentsretrydocument) | **POST** /documents/{document_id}/retry | Retry document processing
*Document* | [**documentsUnimportDocuments**](docs/Document.md#documentsunimportdocuments) | **DELETE** /documents/import | Remove imported documents
*Document* | [**documentsUploadDocuments**](docs/Document.md#documentsuploaddocuments) | **POST** /documents/ | Upload documents
*File* | [**filesDownloadFile**](docs/File.md#filesdownloadfile) | **GET** /files/{file_id} | Download a file
*Invitation* | [**invitationsAcceptInvitationComplete**](docs/Invitation.md#invitationsacceptinvitationcomplete) | **POST** /invitations/accept | Accept an invitation
*Invitation* | [**invitationsAcceptInvitationForm**](docs/Invitation.md#invitationsacceptinvitationform) | **GET** /invitations/accept | Invitation acceptance HTML form
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
*Llm* | [**llmGetCost**](docs/Llm.md#llmgetcost) | **POST** /llm/cost | Get LLM cost metrics
*Llm* | [**llmGetUsageCosts**](docs/Llm.md#llmgetusagecosts) | **POST** /llm/services/cost | Get external service usage costs
*Llm* | [**llmLlmTotalTokens**](docs/Llm.md#llmllmtotaltokens) | **POST** /llm/tokens | Get token usage metrics
*LlmCatalog* | [**llmCreateCatalog**](docs/LlmCatalog.md#llmcreatecatalog) | **POST** /llm/catalog | Create a catalog entry
*LlmCatalog* | [**llmDeleteCatalog**](docs/LlmCatalog.md#llmdeletecatalog) | **DELETE** /llm/catalog/{catalog_id} | Delete a catalog entry
*LlmCatalog* | [**llmUpdateCatalog**](docs/LlmCatalog.md#llmupdatecatalog) | **PATCH** /llm/catalog/{catalog_id} | Update a catalog entry
*LlmSetting* | [**llmCreateLlmSettings**](docs/LlmSetting.md#llmcreatellmsettings) | **POST** /llm/settings | Create LLM settings
*LlmSetting* | [**llmDeleteLlmSettings**](docs/LlmSetting.md#llmdeletellmsettings) | **DELETE** /llm/settings/{settings_id} | Delete LLM settings
*LlmSetting* | [**llmUpdateLlmSettings**](docs/LlmSetting.md#llmupdatellmsettings) | **PATCH** /llm/settings/{settings_id} | Update LLM settings
*Message* | [**messagesConvertMessage**](docs/Message.md#messagesconvertmessage) | **GET** /messages/{message_id}/convert | Convert a message to a document
*Message* | [**messagesCreateMessage**](docs/Message.md#messagescreatemessage) | **POST** /messages/ | Create a message
*Message* | [**messagesGetMessage**](docs/Message.md#messagesgetmessage) | **GET** /messages/{message_id} | Get a message
*Message* | [**messagesRephraseMessage**](docs/Message.md#messagesrephrasemessage) | **GET** /messages/{message_id}/rephrase | Rephrase a message
*Message* | [**messagesSubmitMessage**](docs/Message.md#messagessubmitmessage) | **POST** /messages/submit | Submit a message with attachments
*Message* | [**messagesTranslateMessage**](docs/Message.md#messagestranslatemessage) | **GET** /messages/{message_id}/translate | Translate a message
*OneDrive* | [**onedriveCapabilities**](docs/OneDrive.md#onedrivecapabilities) | **GET** /integrations/onedrive/capabilities | Get data source capabilities
*OneDrive* | [**onedriveGetItemInfo**](docs/OneDrive.md#onedrivegetiteminfo) | **GET** /integrations/onedrive/drives/{drive_id}/items/{drive_item_id} | Get a drive item
*OneDrive* | [**onedriveGetUserInfo**](docs/OneDrive.md#onedrivegetuserinfo) | **GET** /integrations/onedrive/me | Get current data source user
*OneDrive* | [**onedriveIsConnected**](docs/OneDrive.md#onedriveisconnected) | **GET** /integrations/onedrive/connected | Check data source connection
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
*Rating* | [**ratingsRemove**](docs/Rating.md#ratingsremove) | **DELETE** /ratings/{rateable_type}/{rateable_id} | Remove
*Rating* | [**ratingsUpsert**](docs/Rating.md#ratingsupsert) | **POST** /ratings/ | Upsert
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
*SharepointV1* | [**sharepointv1GetUserInfo**](docs/SharepointV1.md#sharepointv1getuserinfo) | **GET** /integrations/sharepoint/v1/me | Get current data source user
*SharepointV1* | [**sharepointv1IsConnected**](docs/SharepointV1.md#sharepointv1isconnected) | **GET** /integrations/sharepoint/v1/connected | Check data source connection
*SharepointV1* | [**sharepointv1ListChildren**](docs/SharepointV1.md#sharepointv1listchildren) | **GET** /integrations/sharepoint/v1/drives/{drive_id}/items/{drive_item_id}/children | List children of a drive item
*SharepointV1* | [**sharepointv1ListDrives**](docs/SharepointV1.md#sharepointv1listdrives) | **GET** /integrations/sharepoint/v1/sites/{site_id}/drives | List drives in a site
*SharepointV1* | [**sharepointv1ListRoots**](docs/SharepointV1.md#sharepointv1listroots) | **GET** /integrations/sharepoint/v1/roots | List top-level browse entries
*Storage* | [**storageDownloadFile**](docs/Storage.md#storagedownloadfile) | **GET** /storage/{path} | Download a file by signed token
*System* | [**systemReadSystemSettings**](docs/System.md#systemreadsystemsettings) | **GET** /system/settings | Read System Settings
*System* | [**systemUpdateSystemSettings**](docs/System.md#systemupdatesystemsettings) | **PATCH** /system/settings | Update System Settings
*Tag* | [**tagsDeleteTag**](docs/Tag.md#tagsdeletetag) | **DELETE** /tags/{tag_id} | Delete a tag
*Tag* | [**tagsNewTag**](docs/Tag.md#tagsnewtag) | **POST** /tags/ | Create a tag
*Tag* | [**tagsUpdateTag**](docs/Tag.md#tagsupdatetag) | **PATCH** /tags/{tag_id} | Rename a tag
*Tarif* | [**tarifsCreateTarif**](docs/Tarif.md#tarifscreatetarif) | **POST** /tarifs/ | Create a tarif plan
*Tarif* | [**tarifsDeleteTarif**](docs/Tarif.md#tarifsdeletetarif) | **DELETE** /tarifs/{tarif_id} | Delete a tarif plan
*Tarif* | [**tarifsUpdateTarif**](docs/Tarif.md#tarifsupdatetarif) | **PATCH** /tarifs/{tarif_id} | Update a tarif plan
*Template* | [**templatesCreate**](docs/Template.md#templatescreate) | **POST** /templates/ | Create an email template
*Template* | [**templatesDelete**](docs/Template.md#templatesdelete) | **DELETE** /templates/{template_id} | Delete an email template
*Template* | [**templatesUpdate**](docs/Template.md#templatesupdate) | **PATCH** /templates/{template_id} | Update an email template
*Tenant* | [**tenantsAddLibraryToTenants**](docs/Tenant.md#tenantsaddlibrarytotenants) | **POST** /tenants/{tenant_id}/libraries/{library_id} | Assign a library to a tenant
*Tenant* | [**tenantsCreateTenant**](docs/Tenant.md#tenantscreatetenant) | **POST** /tenants/ | Create a tenant
*Tenant* | [**tenantsCreateTenantConnector**](docs/Tenant.md#tenantscreatetenantconnector) | **POST** /tenants/{tenant_id}/connectors/{connector_id} | Enable a connector for a tenant
*Tenant* | [**tenantsCreateTenantOauthClient**](docs/Tenant.md#tenantscreatetenantoauthclient) | **POST** /tenants/{tenant_id}/oauth-clients/{oauth_client_id} | Create Tenant Oauth Client
*Tenant* | [**tenantsCreateTenantTool**](docs/Tenant.md#tenantscreatetenanttool) | **POST** /tenants/{tenant_id}/tools/{tool_id} | Enable a tool for a tenant
*Tenant* | [**tenantsDeleteTenant**](docs/Tenant.md#tenantsdeletetenant) | **DELETE** /tenants/{tenant_id} | Delete a tenant
*Tenant* | [**tenantsDeleteTenantConnector**](docs/Tenant.md#tenantsdeletetenantconnector) | **DELETE** /tenants/{tenant_id}/connectors/{connector_id} | Disable a connector for a tenant
*Tenant* | [**tenantsDeleteTenantModel**](docs/Tenant.md#tenantsdeletetenantmodel) | **DELETE** /tenants/{tenant_id}/models/{model_id} | Disable a model for a tenant
*Tenant* | [**tenantsDeleteTenantModelsBulk**](docs/Tenant.md#tenantsdeletetenantmodelsbulk) | **DELETE** /tenants/models/{model_id}/bulk | Disable a model for multiple tenants
*Tenant* | [**tenantsDeleteTenantOauthClient**](docs/Tenant.md#tenantsdeletetenantoauthclient) | **DELETE** /tenants/{tenant_id}/oauth-clients/{oauth_client_id} | Delete Tenant Oauth Client
*Tenant* | [**tenantsDeleteTenantTool**](docs/Tenant.md#tenantsdeletetenanttool) | **DELETE** /tenants/{tenant_id}/tools/{tool_id} | Disable a tool for a tenant
*Tenant* | [**tenantsGetCurrentTenant**](docs/Tenant.md#tenantsgetcurrenttenant) | **GET** /tenants/current | Get current tenant
*Tenant* | [**tenantsPutTenantModel**](docs/Tenant.md#tenantsputtenantmodel) | **PUT** /tenants/{tenant_id}/models/{model_id} | Enable a model for a tenant
*Tenant* | [**tenantsPutTenantModelsBulk**](docs/Tenant.md#tenantsputtenantmodelsbulk) | **PUT** /tenants/models/{model_id}/bulk | Enable a model for multiple tenants
*Tenant* | [**tenantsRemoveTenantLibraryMember**](docs/Tenant.md#tenantsremovetenantlibrarymember) | **DELETE** /tenants/{tenant_id}/libraries/{library_id} | Unassign a library from a tenant
*Tenant* | [**tenantsUpdateCurrentTenant**](docs/Tenant.md#tenantsupdatecurrenttenant) | **PATCH** /tenants/current | Update current tenant
*Tenant* | [**tenantsUpdateTenant**](docs/Tenant.md#tenantsupdatetenant) | **PATCH** /tenants/{tenant_id} | Update a tenant
*Tenant* | [**tenantsUpdateTenantOauthClient**](docs/Tenant.md#tenantsupdatetenantoauthclient) | **PATCH** /tenants/{tenant_id}/oauth-clients/{oauth_client_id} | Update Tenant Oauth Client
*Tenant* | [**tenantsUpdateTenantOauthSecret**](docs/Tenant.md#tenantsupdatetenantoauthsecret) | **PUT** /tenants/{tenant_id}/oauth-clients/{oauth_client_id}/secret | Update Tenant Oauth Secret
*Tool* | [**toolsUpdateTool**](docs/Tool.md#toolsupdatetool) | **PATCH** /tools/{tool_id} | Update a tool
*ToolAction* | [**toolactionsSendEmailFromDraft**](docs/ToolAction.md#toolactionssendemailfromdraft) | **POST** /tool-actions/email/send | Send an email from a draft
*Transcription* | [**transcriptionsCreateTranscription**](docs/Transcription.md#transcriptionscreatetranscription) | **POST** /transcriptions/ | Transcribe an audio file
*User* | [**usersActivateUser**](docs/User.md#usersactivateuser) | **POST** /users/{user_id}/activate | Activate a user
*User* | [**usersCreateGroup**](docs/User.md#userscreategroup) | **POST** /users/groups | Create a user group
*User* | [**usersCreateUser**](docs/User.md#userscreateuser) | **POST** /users/ | Create a user
*User* | [**usersDeactivateUser**](docs/User.md#usersdeactivateuser) | **POST** /users/{user_id}/deactivate | Deactivate a user
*User* | [**usersDeleteGroup**](docs/User.md#usersdeletegroup) | **DELETE** /users/groups/{group_id} | Delete a user group
*User* | [**usersDeleteUser**](docs/User.md#usersdeleteuser) | **DELETE** /users/{user_id} | Delete a user
*User* | [**usersGetMyself**](docs/User.md#usersgetmyself) | **GET** /users/me | Get current user
*User* | [**usersResetPassword**](docs/User.md#usersresetpassword) | **POST** /users/passwd | Change own password
*User* | [**usersSyncExternalGroup**](docs/User.md#userssyncexternalgroup) | **POST** /users/groups/{group_id}/sync | Sync External Group
*User* | [**usersUpdateGroup**](docs/User.md#usersupdategroup) | **PATCH** /users/groups/{group_id} | Update a user group
*User* | [**usersUpdateUser**](docs/User.md#usersupdateuser) | **PATCH** /users/{user_id} | Update a user
*User* | [**usersUpsertMembers**](docs/User.md#usersupsertmembers) | **PUT** /users/members/{group_id} | Set user group members
*User* | [**usersUpsertMyPreferences**](docs/User.md#usersupsertmypreferences) | **PATCH** /users/me/preferences | Update own preferences


### Documentation For Models

 - [ApiKey](docs/ApiKey.md)
 - [ApiKeyCreateRequest](docs/ApiKeyCreateRequest.md)
 - [ApiKeyCreateResponse](docs/ApiKeyCreateResponse.md)
 - [Application](docs/Application.md)
 - [ApplicationAccessIn](docs/ApplicationAccessIn.md)
 - [ApplicationGroup](docs/ApplicationGroup.md)
 - [ApplicationIn](docs/ApplicationIn.md)
 - [ApplicationMember](docs/ApplicationMember.md)
 - [Assistant](docs/Assistant.md)
 - [AssistantGroup](docs/AssistantGroup.md)
 - [AssistantGroupsIn](docs/AssistantGroupsIn.md)
 - [AssistantIn](docs/AssistantIn.md)
 - [AssistantInputTypeEnum](docs/AssistantInputTypeEnum.md)
 - [AssistantLibrary](docs/AssistantLibrary.md)
 - [AssistantMember](docs/AssistantMember.md)
 - [AssistantMemberGrantedViaEnum](docs/AssistantMemberGrantedViaEnum.md)
 - [AssistantMembersIn](docs/AssistantMembersIn.md)
 - [AssistantTool](docs/AssistantTool.md)
 - [AssistantVisibilityEnum](docs/AssistantVisibilityEnum.md)
 - [AssistantVisibilityUpdate](docs/AssistantVisibilityUpdate.md)
 - [Bcc](docs/Bcc.md)
 - [BudgetAlert](docs/BudgetAlert.md)
 - [BudgetAlertRequest](docs/BudgetAlertRequest.md)
 - [BudgetAlertUpdate](docs/BudgetAlertUpdate.md)
 - [BulkResult](docs/BulkResult.md)
 - [CatalogIn](docs/CatalogIn.md)
 - [CatalogUpdate](docs/CatalogUpdate.md)
 - [Cc](docs/Cc.md)
 - [Chat](docs/Chat.md)
 - [ChatIn](docs/ChatIn.md)
 - [ChatInactiveDocument](docs/ChatInactiveDocument.md)
 - [ChatLibrary](docs/ChatLibrary.md)
 - [ChatToolSettingsOut](docs/ChatToolSettingsOut.md)
 - [ChatToolSettingsUpdate](docs/ChatToolSettingsUpdate.md)
 - [Connector](docs/Connector.md)
 - [ConnectorConsentOut](docs/ConnectorConsentOut.md)
 - [ConnectorOut](docs/ConnectorOut.md)
 - [ConnectorStatusOut](docs/ConnectorStatusOut.md)
 - [ConnectorUpdate](docs/ConnectorUpdate.md)
 - [CostByModel](docs/CostByModel.md)
 - [CostBySource](docs/CostBySource.md)
 - [CostCompletionTokens](docs/CostCompletionTokens.md)
 - [CostCompletionTokens1](docs/CostCompletionTokens1.md)
 - [CostPromptTokens](docs/CostPromptTokens.md)
 - [CostPromptTokens1](docs/CostPromptTokens1.md)
 - [CostTimeseriesPoint](docs/CostTimeseriesPoint.md)
 - [DataSourceCapabilities](docs/DataSourceCapabilities.md)
 - [DataSourceDriveModel](docs/DataSourceDriveModel.md)
 - [DataSourceFolderModel](docs/DataSourceFolderModel.md)
 - [DataSourceItemModel](docs/DataSourceItemModel.md)
 - [DataSourceSiteModel](docs/DataSourceSiteModel.md)
 - [DataSourceUserModel](docs/DataSourceUserModel.md)
 - [Document](docs/Document.md)
 - [FormField](docs/FormField.md)
 - [FormFieldTypeEnum](docs/FormFieldTypeEnum.md)
 - [GroupAppAccessIn](docs/GroupAppAccessIn.md)
 - [GroupIn](docs/GroupIn.md)
 - [GroupSyncOut](docs/GroupSyncOut.md)
 - [HTTPValidationError](docs/HTTPValidationError.md)
 - [InvitationIn](docs/InvitationIn.md)
 - [InvitationOut](docs/InvitationOut.md)
 - [LLMSettingsIn](docs/LLMSettingsIn.md)
 - [LLMSettingsUpdate](docs/LLMSettingsUpdate.md)
 - [Library](docs/Library.md)
 - [LibraryIn](docs/LibraryIn.md)
 - [LibraryMember](docs/LibraryMember.md)
 - [LibraryMemberBulkDelete](docs/LibraryMemberBulkDelete.md)
 - [LibraryMemberBulkIn](docs/LibraryMemberBulkIn.md)
 - [LibraryMemberIn](docs/LibraryMemberIn.md)
 - [LibraryUpdateIn](docs/LibraryUpdateIn.md)
 - [LocationInner](docs/LocationInner.md)
 - [Message](docs/Message.md)
 - [MessageDetailOut](docs/MessageDetailOut.md)
 - [MessageFileOut](docs/MessageFileOut.md)
 - [MessageIn](docs/MessageIn.md)
 - [OAuth2ProviderEnum](docs/OAuth2ProviderEnum.md)
 - [OAuthClient](docs/OAuthClient.md)
 - [OAuthClientUpdate](docs/OAuthClientUpdate.md)
 - [OutputFormat](docs/OutputFormat.md)
 - [PasswordResetIn](docs/PasswordResetIn.md)
 - [PasswordResetRequestIn](docs/PasswordResetRequestIn.md)
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
 - [RephraseStyleEnum](docs/RephraseStyleEnum.md)
 - [ResponseAuthGetEntraGroupsValue](docs/ResponseAuthGetEntraGroupsValue.md)
 - [ResponseOnedriveListRoots](docs/ResponseOnedriveListRoots.md)
 - [ResponseSharepointv1ListRoots](docs/ResponseSharepointv1ListRoots.md)
 - [SecretUpdateIn](docs/SecretUpdateIn.md)
 - [SendEmailRequest](docs/SendEmailRequest.md)
 - [SendEmailResponse](docs/SendEmailResponse.md)
 - [SetAtlassianCloudIdRequest](docs/SetAtlassianCloudIdRequest.md)
 - [Settings](docs/Settings.md)
 - [SettingsIn](docs/SettingsIn.md)
 - [SharepointDriveModel](docs/SharepointDriveModel.md)
 - [SharepointFolderModel](docs/SharepointFolderModel.md)
 - [SharepointItemModel](docs/SharepointItemModel.md)
 - [SharepointSiteModel](docs/SharepointSiteModel.md)
 - [SharepointUserModel](docs/SharepointUserModel.md)
 - [SsoExchangeIn](docs/SsoExchangeIn.md)
 - [SsoInitOut](docs/SsoInitOut.md)
 - [SsoResolveOut](docs/SsoResolveOut.md)
 - [SystemSettings](docs/SystemSettings.md)
 - [SystemSettingsUpdate](docs/SystemSettingsUpdate.md)
 - [Tag](docs/Tag.md)
 - [TagIn](docs/TagIn.md)
 - [Tagging](docs/Tagging.md)
 - [Tarif](docs/Tarif.md)
 - [TarifIn](docs/TarifIn.md)
 - [TarifStatusEnum](docs/TarifStatusEnum.md)
 - [TemplateIn](docs/TemplateIn.md)
 - [TemplateOut](docs/TemplateOut.md)
 - [TenantIn](docs/TenantIn.md)
 - [TenantLLM](docs/TenantLLM.md)
 - [TenantModelBulkIn](docs/TenantModelBulkIn.md)
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
 - [TokenOut](docs/TokenOut.md)
 - [TokenTimeseriesPerModel](docs/TokenTimeseriesPerModel.md)
 - [TokenTimeseriesPoint](docs/TokenTimeseriesPoint.md)
 - [TokensPerModel](docs/TokensPerModel.md)
 - [TokensTimeseriesResponse](docs/TokensTimeseriesResponse.md)
 - [ToolCallOut](docs/ToolCallOut.md)
 - [ToolCallProgressStepOut](docs/ToolCallProgressStepOut.md)
 - [ToolOut](docs/ToolOut.md)
 - [ToolUpdate](docs/ToolUpdate.md)
 - [TranscriptionOut](docs/TranscriptionOut.md)
 - [Translation](docs/Translation.md)
 - [UsageCostRequest](docs/UsageCostRequest.md)
 - [UsageCostResponse](docs/UsageCostResponse.md)
 - [UsageRequest](docs/UsageRequest.md)
 - [UserGroup](docs/UserGroup.md)
 - [UserGroupMember](docs/UserGroupMember.md)
 - [UserGroupSource](docs/UserGroupSource.md)
 - [UserIn](docs/UserIn.md)
 - [UserOut](docs/UserOut.md)
 - [UserPreferenceOut](docs/UserPreferenceOut.md)
 - [UserPreferenceUpdateIn](docs/UserPreferenceUpdateIn.md)
 - [UserUpdateIn](docs/UserUpdateIn.md)
 - [ValidationError](docs/ValidationError.md)


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

