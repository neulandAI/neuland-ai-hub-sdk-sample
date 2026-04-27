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
*AlertApi* | [**alertsCreateAlert**](docs/AlertApi.md#alertscreatealert) | **POST** /alerts/ | Create Alert
*AlertApi* | [**alertsDeleteAlert**](docs/AlertApi.md#alertsdeletealert) | **DELETE** /alerts/{alert_id} | Delete Alert
*AlertApi* | [**alertsUpdateAlert**](docs/AlertApi.md#alertsupdatealert) | **PATCH** /alerts/{alert_id} | Update Alert
*ApiKeyApi* | [**apiCreateKey**](docs/ApiKeyApi.md#apicreatekey) | **POST** /api/key/ | Create Key
*ApiKeyApi* | [**apiRevokeApiKey**](docs/ApiKeyApi.md#apirevokeapikey) | **PATCH** /api/key/revoke/{api_key_id} | Revoke Api Key
*ApplicationApi* | [**applicationsCreateApp**](docs/ApplicationApi.md#applicationscreateapp) | **POST** /applications/ | Create App
*ApplicationApi* | [**applicationsDeleteApp**](docs/ApplicationApi.md#applicationsdeleteapp) | **DELETE** /applications/{app_id} | Delete App
*ApplicationApi* | [**applicationsUpdateApp**](docs/ApplicationApi.md#applicationsupdateapp) | **PATCH** /applications/{app_id} | Update App
*ApplicationApi* | [**applicationsUpdateGroupMembership**](docs/ApplicationApi.md#applicationsupdategroupmembership) | **PUT** /applications/group/access | Update Group Membership
*ApplicationApi* | [**applicationsUpdateUserMembership**](docs/ApplicationApi.md#applicationsupdateusermembership) | **PUT** /applications/user/access | Update User Membership
*AssistantApi* | [**assistantsAddLibraryToAssistant**](docs/AssistantApi.md#assistantsaddlibrarytoassistant) | **POST** /assistants/{assistant_id}/libraries/{library_id} | Add Library To Assistant
*AssistantApi* | [**assistantsAddMembers**](docs/AssistantApi.md#assistantsaddmembers) | **POST** /assistants/{assistant_id}/members | Add Members
*AssistantApi* | [**assistantsAddToolToAssistant**](docs/AssistantApi.md#assistantsaddtooltoassistant) | **POST** /assistants/{assistant_id}/tools/{tool_id} | Add Tool To Assistant
*AssistantApi* | [**assistantsCreateAssistant**](docs/AssistantApi.md#assistantscreateassistant) | **POST** /assistants/ | Create Assistant
*AssistantApi* | [**assistantsDeleteAssistant**](docs/AssistantApi.md#assistantsdeleteassistant) | **DELETE** /assistants/{assistant_id} | Delete Assistant
*AssistantApi* | [**assistantsDeleteMembers**](docs/AssistantApi.md#assistantsdeletemembers) | **DELETE** /assistants/{assistant_id}/members | Delete Members
*AssistantApi* | [**assistantsLeaveAssitant**](docs/AssistantApi.md#assistantsleaveassitant) | **DELETE** /assistants/{assistant_id}/remove/me | Leave Assitant
*AssistantApi* | [**assistantsRemoveLibraryFromAssistant**](docs/AssistantApi.md#assistantsremovelibraryfromassistant) | **DELETE** /assistants/{assistant_id}/libraries/{library_id} | Remove Library From Assistant
*AssistantApi* | [**assistantsRemoveMember**](docs/AssistantApi.md#assistantsremovemember) | **DELETE** /assistants/{assistant_id}/members/{user_id} | Remove Member
*AssistantApi* | [**assistantsRemoveToolFromAssistant**](docs/AssistantApi.md#assistantsremovetoolfromassistant) | **DELETE** /assistants/{assistant_id}/tools/{tool_id} | Remove Tool From Assistant
*AssistantApi* | [**assistantsSubmitAssistant**](docs/AssistantApi.md#assistantssubmitassistant) | **POST** /assistants/submit | Submit Assistant
*AssistantApi* | [**assistantsUpdateAssistant**](docs/AssistantApi.md#assistantsupdateassistant) | **PATCH** /assistants/{assistant_id} | Update Assistant
*AuthApi* | [**authAzureEntraCallback**](docs/AuthApi.md#authazureentracallback) | **GET** /auth/callback/azure-entra | Azure Entra Callback
*AuthApi* | [**authConfirmEmail**](docs/AuthApi.md#authconfirmemail) | **GET** /auth/confirm-email | Confirm Email
*AuthApi* | [**authExchangeToken**](docs/AuthApi.md#authexchangetoken) | **POST** /auth/exchange/token | Exchange Token
*AuthApi* | [**authGetEntraGroups**](docs/AuthApi.md#authgetentragroups) | **GET** /auth/entra/groups | Get Entra Groups
*AuthApi* | [**authGetEntraScopes**](docs/AuthApi.md#authgetentrascopes) | **GET** /auth/entra/scopes | Get Entra Scopes
*AuthApi* | [**authLogin**](docs/AuthApi.md#authlogin) | **POST** /auth/token | Login
*AuthApi* | [**authLogout**](docs/AuthApi.md#authlogout) | **POST** /auth/logout | Logout
*AuthApi* | [**authOidcCallback**](docs/AuthApi.md#authoidccallback) | **GET** /auth/callback/oidc | Oidc Callback
*AuthApi* | [**authRequestPasswordReset**](docs/AuthApi.md#authrequestpasswordreset) | **POST** /auth/request-password-reset | Request Password Reset
*AuthApi* | [**authResetPassword**](docs/AuthApi.md#authresetpassword) | **POST** /auth/reset-password | Reset Password
*AuthApi* | [**authResetPasswordForm**](docs/AuthApi.md#authresetpasswordform) | **GET** /auth/reset-password | Reset Password Form
*AuthApi* | [**authSendEmailConfirmation**](docs/AuthApi.md#authsendemailconfirmation) | **POST** /auth/send-email-confirmation | Send Email Confirmation
*AuthConnectorApi* | [**authInitiateAdminConsent**](docs/AuthConnectorApi.md#authinitiateadminconsent) | **GET** /auth/connectors/{connector_id}/consent/admin | Initiate Admin Consent
*AuthConnectorApi* | [**authInitiateConsent**](docs/AuthConnectorApi.md#authinitiateconsent) | **GET** /auth/connectors/{connector_id}/consent | Initiate Consent
*AuthConnectorApi* | [**authListConnectorStatus**](docs/AuthConnectorApi.md#authlistconnectorstatus) | **GET** /auth/connectors/status | List Connector Status
*AuthConnectorApi* | [**authOauthCallback**](docs/AuthConnectorApi.md#authoauthcallback) | **GET** /auth/connectors/callback | Oauth Callback
*AuthConnectorApi* | [**authRevokeConsent**](docs/AuthConnectorApi.md#authrevokeconsent) | **DELETE** /auth/connectors/{connector_id}/consent | Revoke Consent
*AuthConnectorApi* | [**authUpdateConnector**](docs/AuthConnectorApi.md#authupdateconnector) | **PATCH** /auth/connectors/{connector_id} | Update Connector
*AuthConnectorApi* | [**authUpdateOauthClient**](docs/AuthConnectorApi.md#authupdateoauthclient) | **PATCH** /auth/connectors/oauth-clients/{oauth_client_id} | Update Oauth Client
*ChatApi* | [**chatsAddLibraryToChat**](docs/ChatApi.md#chatsaddlibrarytochat) | **POST** /chats/{chat_id}/libraries/{library_id} | Add Library To Chat
*ChatApi* | [**chatsCancelMessage**](docs/ChatApi.md#chatscancelmessage) | **POST** /chats/{chat_id}/cancel | Cancel Message
*ChatApi* | [**chatsDeactivateDocuments**](docs/ChatApi.md#chatsdeactivatedocuments) | **POST** /chats/{chat_id}/inactive-documents | Deactivate Documents
*ChatApi* | [**chatsRemoveChat**](docs/ChatApi.md#chatsremovechat) | **DELETE** /chats/{chat_id} | Remove Chat
*ChatApi* | [**chatsRemoveInactiveDocuments**](docs/ChatApi.md#chatsremoveinactivedocuments) | **DELETE** /chats/{chat_id}/inactive-documents | Remove Inactive Documents
*ChatApi* | [**chatsRemoveLibraryFromChat**](docs/ChatApi.md#chatsremovelibraryfromchat) | **DELETE** /chats/{chat_id}/libraries/{library_id} | Remove Library From Chat
*ChatApi* | [**chatsSummerizeChat**](docs/ChatApi.md#chatssummerizechat) | **GET** /chats/{chat_id}/summary | Summerize Chat
*ChatApi* | [**chatsUpdateChat**](docs/ChatApi.md#chatsupdatechat) | **PATCH** /chats/{chat_id} | Update Chat
*ChatApi* | [**chatsUpdateChatToolSettings**](docs/ChatApi.md#chatsupdatechattoolsettings) | **PUT** /chats/{chat_id}/tools/{tool_id} | Update Chat Tool Settings
*DefaultApi* | [**postPostCheck**](docs/DefaultApi.md#postpostcheck) | **POST** /post | Post Check
*DefaultApi* | [**rootRoot**](docs/DefaultApi.md#rootroot) | **GET** / | Root
*DefaultApi* | [**statStat**](docs/DefaultApi.md#statstat) | **GET** /stat | Stat
*DefaultApi* | [**themeGetTheme**](docs/DefaultApi.md#themegettheme) | **GET** /theme | Get Theme
*DefaultApi* | [**versionVersion**](docs/DefaultApi.md#versionversion) | **GET** /version | Version
*DocumentApi* | [**documentsDeleteChatDocument**](docs/DocumentApi.md#documentsdeletechatdocument) | **DELETE** /documents/{document_id} | Delete Chat Document
*DocumentApi* | [**documentsGetFile**](docs/DocumentApi.md#documentsgetfile) | **GET** /documents/{document_id} | Get File
*DocumentApi* | [**documentsImportDocuments**](docs/DocumentApi.md#documentsimportdocuments) | **POST** /documents/import | Import Documents
*DocumentApi* | [**documentsRetryDocument**](docs/DocumentApi.md#documentsretrydocument) | **POST** /documents/{document_id}/retry | Retry Document
*DocumentApi* | [**documentsUnimportDocuments**](docs/DocumentApi.md#documentsunimportdocuments) | **DELETE** /documents/import | Unimport Documents
*DocumentApi* | [**documentsUploadDocuments**](docs/DocumentApi.md#documentsuploaddocuments) | **POST** /documents/ | Upload Documents
*FileApi* | [**filesDownloadFile**](docs/FileApi.md#filesdownloadfile) | **GET** /files/{file_id} | Download File
*InvitationApi* | [**invitationsAcceptInvitationComplete**](docs/InvitationApi.md#invitationsacceptinvitationcomplete) | **POST** /invitations/accept | Accept Invitation Complete
*InvitationApi* | [**invitationsAcceptInvitationForm**](docs/InvitationApi.md#invitationsacceptinvitationform) | **GET** /invitations/accept | Accept Invitation Form
*InvitationApi* | [**invitationsCreateInvitations**](docs/InvitationApi.md#invitationscreateinvitations) | **POST** /invitations/ | Create Invitations
*InvitationApi* | [**invitationsResendInvitation**](docs/InvitationApi.md#invitationsresendinvitation) | **POST** /invitations/{invitation_id}/resend | Resend Invitation
*InvitationApi* | [**invitationsRevokeInvitation**](docs/InvitationApi.md#invitationsrevokeinvitation) | **POST** /invitations/{invitation_id}/revoke | Revoke Invitation
*LibraryApi* | [**librariesAddLibraryMembers**](docs/LibraryApi.md#librariesaddlibrarymembers) | **POST** /libraries/{library_id}/members | Add Library Members
*LibraryApi* | [**librariesDeleteLibrary**](docs/LibraryApi.md#librariesdeletelibrary) | **DELETE** /libraries/{library_id} | Delete Library
*LibraryApi* | [**librariesLeaveLibrary**](docs/LibraryApi.md#librariesleavelibrary) | **DELETE** /libraries/{library_id}/remove/me | Leave Library
*LibraryApi* | [**librariesNewLibrary**](docs/LibraryApi.md#librariesnewlibrary) | **POST** /libraries/ | New Library
*LibraryApi* | [**librariesRemoveLibraryMembers**](docs/LibraryApi.md#librariesremovelibrarymembers) | **DELETE** /libraries/{library_id}/members | Remove Library Members
*LibraryApi* | [**librariesRemoveSingleMember**](docs/LibraryApi.md#librariesremovesinglemember) | **DELETE** /libraries/{library_id}/members/{user_id} | Remove Single Member
*LibraryApi* | [**librariesUpdateLibrary**](docs/LibraryApi.md#librariesupdatelibrary) | **PATCH** /libraries/{library_id} | Update Library
*LlmApi* | [**llmGetCost**](docs/LlmApi.md#llmgetcost) | **POST** /llm/cost | Get Cost
*LlmApi* | [**llmGetUsageCosts**](docs/LlmApi.md#llmgetusagecosts) | **POST** /llm/services/cost | Get Usage Costs
*LlmApi* | [**llmLlmTotalTokens**](docs/LlmApi.md#llmllmtotaltokens) | **POST** /llm/tokens | Llm Total Tokens
*LlmCatalogApi* | [**llmCreateCatalog**](docs/LlmCatalogApi.md#llmcreatecatalog) | **POST** /llm/catalog | Create Catalog
*LlmCatalogApi* | [**llmDeleteCatalog**](docs/LlmCatalogApi.md#llmdeletecatalog) | **DELETE** /llm/catalog/{catalog_id} | Delete Catalog
*LlmCatalogApi* | [**llmUpdateCatalog**](docs/LlmCatalogApi.md#llmupdatecatalog) | **PATCH** /llm/catalog/{catalog_id} | Update Catalog
*LlmSettingApi* | [**llmCreateLlmSettings**](docs/LlmSettingApi.md#llmcreatellmsettings) | **POST** /llm/settings | Create Llm Settings
*LlmSettingApi* | [**llmDeleteLlmSettings**](docs/LlmSettingApi.md#llmdeletellmsettings) | **DELETE** /llm/settings/{settings_id} | Delete Llm Settings
*LlmSettingApi* | [**llmUpdateLlmSettings**](docs/LlmSettingApi.md#llmupdatellmsettings) | **PATCH** /llm/settings/{settings_id} | Update Llm Settings
*MessageApi* | [**messagesConvertMessage**](docs/MessageApi.md#messagesconvertmessage) | **GET** /messages/{message_id}/convert | Convert Message
*MessageApi* | [**messagesCreateMessage**](docs/MessageApi.md#messagescreatemessage) | **POST** /messages/ | Create Message
*MessageApi* | [**messagesRephraseMessage**](docs/MessageApi.md#messagesrephrasemessage) | **GET** /messages/{message_id}/rephrase | Rephrase Message
*MessageApi* | [**messagesSubmitMessage**](docs/MessageApi.md#messagessubmitmessage) | **POST** /messages/submit | Submit Message
*MessageApi* | [**messagesTranslateMessage**](docs/MessageApi.md#messagestranslatemessage) | **GET** /messages/{message_id}/translate | Translate Message
*ProjectApi* | [**projectsAddLibraryToProject**](docs/ProjectApi.md#projectsaddlibrarytoproject) | **POST** /projects/{project_id}/libraries/{library_id} | Add Library To Project
*ProjectApi* | [**projectsAddMembers**](docs/ProjectApi.md#projectsaddmembers) | **POST** /projects/{project_id}/members | Add Members
*ProjectApi* | [**projectsCreateProject**](docs/ProjectApi.md#projectscreateproject) | **POST** /projects/ | Create Project
*ProjectApi* | [**projectsDeleteMember**](docs/ProjectApi.md#projectsdeletemember) | **DELETE** /projects/{project_id}/members/{user_id} | Delete Member
*ProjectApi* | [**projectsDeleteMembers**](docs/ProjectApi.md#projectsdeletemembers) | **DELETE** /projects/{project_id}/members | Delete Members
*ProjectApi* | [**projectsDeleteProject**](docs/ProjectApi.md#projectsdeleteproject) | **DELETE** /projects/{project_id} | Delete Project
*ProjectApi* | [**projectsIsProjectNameFree**](docs/ProjectApi.md#projectsisprojectnamefree) | **GET** /projects/available | Is Project Name Free
*ProjectApi* | [**projectsLeaveProject**](docs/ProjectApi.md#projectsleaveproject) | **DELETE** /projects/{project_id}/remove/me | Leave Project
*ProjectApi* | [**projectsRemoveLibraryFromProject**](docs/ProjectApi.md#projectsremovelibraryfromproject) | **DELETE** /projects/{project_id}/libraries/{library_id} | Remove Library From Project
*ProjectApi* | [**projectsUpdateProject**](docs/ProjectApi.md#projectsupdateproject) | **PATCH** /projects/{project_id} | Update Project
*PromptApi* | [**promptsCreatePrompt**](docs/PromptApi.md#promptscreateprompt) | **POST** /prompts/ | Create Prompt
*PromptApi* | [**promptsDeletePrompt**](docs/PromptApi.md#promptsdeleteprompt) | **DELETE** /prompts/{prompt_id} | Delete Prompt
*PromptApi* | [**promptsUpdatePrompt**](docs/PromptApi.md#promptsupdateprompt) | **PATCH** /prompts/{prompt_id} | Update Prompt
*QueryApi* | [**queryQuery**](docs/QueryApi.md#queryquery) | **GET** /query/{path} | Query
*QueryApi* | [**queryQueryRpc**](docs/QueryApi.md#queryqueryrpc) | **GET** /query/rpc/{path} | Query Rpc
*SettingsApi* | [**settingsCurrent**](docs/SettingsApi.md#settingscurrent) | **GET** /settings/current | Current
*SettingsApi* | [**settingsUpdateCurrentSettings**](docs/SettingsApi.md#settingsupdatecurrentsettings) | **PATCH** /settings/current | Update Current Settings
*SettingsApi* | [**settingsUpdateSettings**](docs/SettingsApi.md#settingsupdatesettings) | **PATCH** /settings/{settings_id} | Update Settings
*SharepointApi* | [**integrationsGetItemInfo**](docs/SharepointApi.md#integrationsgetiteminfo) | **GET** /integrations/sharepoint/drives/{drive_id}/items/{drive_item_id} | Get Item Info
*SharepointApi* | [**integrationsGetUserInfo**](docs/SharepointApi.md#integrationsgetuserinfo) | **GET** /integrations/sharepoint/me | Get User Info
*SharepointApi* | [**integrationsIsConnected**](docs/SharepointApi.md#integrationsisconnected) | **GET** /integrations/sharepoint/connected | Is Connected
*SharepointApi* | [**integrationsListAllSites**](docs/SharepointApi.md#integrationslistallsites) | **GET** /integrations/sharepoint/sites | List All Sites
*SharepointApi* | [**integrationsListChildren**](docs/SharepointApi.md#integrationslistchildren) | **GET** /integrations/sharepoint/drives/{drive_id}/items/{drive_item_id}/children | List Children
*SharepointApi* | [**integrationsListDrives**](docs/SharepointApi.md#integrationslistdrives) | **GET** /integrations/sharepoint/sites/{site_id}/drives | List Drives
*StorageApi* | [**storageDownloadFile**](docs/StorageApi.md#storagedownloadfile) | **GET** /storage/{path} | Download File
*TarifApi* | [**tarifsCreateTarif**](docs/TarifApi.md#tarifscreatetarif) | **POST** /tarifs/ | Create Tarif
*TarifApi* | [**tarifsDeleteTarif**](docs/TarifApi.md#tarifsdeletetarif) | **DELETE** /tarifs/{tarif_id} | Delete Tarif
*TarifApi* | [**tarifsUpdateTarif**](docs/TarifApi.md#tarifsupdatetarif) | **PATCH** /tarifs/{tarif_id} | Update Tarif
*TemplateApi* | [**templatesCreate**](docs/TemplateApi.md#templatescreate) | **POST** /templates/ | Create
*TemplateApi* | [**templatesDelete**](docs/TemplateApi.md#templatesdelete) | **DELETE** /templates/{template_id} | Delete
*TemplateApi* | [**templatesUpdate**](docs/TemplateApi.md#templatesupdate) | **PATCH** /templates/{template_id} | Update
*TenantApi* | [**tenantsAddLibraryToTenants**](docs/TenantApi.md#tenantsaddlibrarytotenants) | **POST** /tenants/{tenant_id}/libraries/{library_id} | Add Library To Tenants
*TenantApi* | [**tenantsCreateTenant**](docs/TenantApi.md#tenantscreatetenant) | **POST** /tenants/ | Create Tenant
*TenantApi* | [**tenantsCreateTenantConnector**](docs/TenantApi.md#tenantscreatetenantconnector) | **POST** /tenants/{tenant_id}/connectors/{connector_id} | Create Tenant Connector
*TenantApi* | [**tenantsCreateTenantTool**](docs/TenantApi.md#tenantscreatetenanttool) | **POST** /tenants/{tenant_id}/tools/{tool_id} | Create Tenant Tool
*TenantApi* | [**tenantsDeleteTenant**](docs/TenantApi.md#tenantsdeletetenant) | **DELETE** /tenants/{tenant_id} | Delete Tenant
*TenantApi* | [**tenantsDeleteTenantConnector**](docs/TenantApi.md#tenantsdeletetenantconnector) | **DELETE** /tenants/{tenant_id}/connectors/{connector_id} | Delete Tenant Connector
*TenantApi* | [**tenantsDeleteTenantModel**](docs/TenantApi.md#tenantsdeletetenantmodel) | **DELETE** /tenants/{tenant_id}/models/{model_id} | Delete Tenant Model
*TenantApi* | [**tenantsDeleteTenantModelsBulk**](docs/TenantApi.md#tenantsdeletetenantmodelsbulk) | **DELETE** /tenants/models/{model_id}/bulk | Delete Tenant Models Bulk
*TenantApi* | [**tenantsDeleteTenantTool**](docs/TenantApi.md#tenantsdeletetenanttool) | **DELETE** /tenants/{tenant_id}/tools/{tool_id} | Delete Tenant Tool
*TenantApi* | [**tenantsGetCurrentTenant**](docs/TenantApi.md#tenantsgetcurrenttenant) | **GET** /tenants/current | Get Current Tenant
*TenantApi* | [**tenantsPutTenantModel**](docs/TenantApi.md#tenantsputtenantmodel) | **PUT** /tenants/{tenant_id}/models/{model_id} | Put Tenant Model
*TenantApi* | [**tenantsPutTenantModelsBulk**](docs/TenantApi.md#tenantsputtenantmodelsbulk) | **PUT** /tenants/models/{model_id}/bulk | Put Tenant Models Bulk
*TenantApi* | [**tenantsRemoveTenantLibraryMember**](docs/TenantApi.md#tenantsremovetenantlibrarymember) | **DELETE** /tenants/{tenant_id}/libraries/{library_id} | Remove Tenant Library Member
*TenantApi* | [**tenantsUpdateCurrentTenant**](docs/TenantApi.md#tenantsupdatecurrenttenant) | **PATCH** /tenants/current | Update Current Tenant
*TenantApi* | [**tenantsUpdateTenant**](docs/TenantApi.md#tenantsupdatetenant) | **PATCH** /tenants/{tenant_id} | Update Tenant
*ToolApi* | [**toolsUpdateTool**](docs/ToolApi.md#toolsupdatetool) | **PATCH** /tools/{tool_id} | Update Tool
*ToolActionApi* | [**toolactionsSendEmailFromDraft**](docs/ToolActionApi.md#toolactionssendemailfromdraft) | **POST** /tool-actions/email/send | Send Email From Draft
*UserApi* | [**usersActivateUser**](docs/UserApi.md#usersactivateuser) | **POST** /users/{user_id}/activate | Activate User
*UserApi* | [**usersCreateGroup**](docs/UserApi.md#userscreategroup) | **POST** /users/groups | Create Group
*UserApi* | [**usersCreateUser**](docs/UserApi.md#userscreateuser) | **POST** /users/ | Create User
*UserApi* | [**usersDeactivateUser**](docs/UserApi.md#usersdeactivateuser) | **POST** /users/{user_id}/deactivate | Deactivate User
*UserApi* | [**usersDeleteGroup**](docs/UserApi.md#usersdeletegroup) | **DELETE** /users/groups/{group_id} | Delete Group
*UserApi* | [**usersDeleteUser**](docs/UserApi.md#usersdeleteuser) | **DELETE** /users/{user_id} | Delete User
*UserApi* | [**usersGetMyself**](docs/UserApi.md#usersgetmyself) | **GET** /users/me | Get Myself
*UserApi* | [**usersResetPassword**](docs/UserApi.md#usersresetpassword) | **POST** /users/passwd | Reset Password
*UserApi* | [**usersUpdateGroup**](docs/UserApi.md#usersupdategroup) | **PATCH** /users/groups/{group_id} | Update Group
*UserApi* | [**usersUpdateUser**](docs/UserApi.md#usersupdateuser) | **PATCH** /users/{user_id} | Update User
*UserApi* | [**usersUpsertMembers**](docs/UserApi.md#usersupsertmembers) | **PUT** /users/members/{group_id} | Upsert Members
*UserApi* | [**usersUpsertMyPreferences**](docs/UserApi.md#usersupsertmypreferences) | **PATCH** /users/me/preferences | Upsert My Preferences


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
 - [AssistantIn](docs/AssistantIn.md)
 - [AssistantLibrary](docs/AssistantLibrary.md)
 - [AssistantMember](docs/AssistantMember.md)
 - [AssistantMembersIn](docs/AssistantMembersIn.md)
 - [AssistantTool](docs/AssistantTool.md)
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
 - [Document](docs/Document.md)
 - [GroupAppAccessIn](docs/GroupAppAccessIn.md)
 - [GroupIn](docs/GroupIn.md)
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
 - [RephraseStyleEnum](docs/RephraseStyleEnum.md)
 - [ResponseAuthGetEntraGroupsValue](docs/ResponseAuthGetEntraGroupsValue.md)
 - [SendEmailRequest](docs/SendEmailRequest.md)
 - [SendEmailResponse](docs/SendEmailResponse.md)
 - [Settings](docs/Settings.md)
 - [SettingsIn](docs/SettingsIn.md)
 - [SharepointDriveModel](docs/SharepointDriveModel.md)
 - [SharepointFolderModel](docs/SharepointFolderModel.md)
 - [SharepointItemModel](docs/SharepointItemModel.md)
 - [SharepointSiteModel](docs/SharepointSiteModel.md)
 - [SharepointUserModel](docs/SharepointUserModel.md)
 - [Tarif](docs/Tarif.md)
 - [TarifIn](docs/TarifIn.md)
 - [TarifStatusEnum](docs/TarifStatusEnum.md)
 - [TemplateIn](docs/TemplateIn.md)
 - [TemplateOut](docs/TemplateOut.md)
 - [TenantIn](docs/TenantIn.md)
 - [TenantLLM](docs/TenantLLM.md)
 - [TenantModelBulkIn](docs/TenantModelBulkIn.md)
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
 - [ToolOut](docs/ToolOut.md)
 - [ToolUpdate](docs/ToolUpdate.md)
 - [Translation](docs/Translation.md)
 - [UsageCostRequest](docs/UsageCostRequest.md)
 - [UsageCostResponse](docs/UsageCostResponse.md)
 - [UsageRequest](docs/UsageRequest.md)
 - [UserGroup](docs/UserGroup.md)
 - [UserGroupMember](docs/UserGroupMember.md)
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

