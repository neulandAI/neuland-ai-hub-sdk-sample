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
*Alert* | [**alertsCreateAlert**](docs/Alert.md#alertscreatealert) | **POST** /alerts/ | Create Alert
*Alert* | [**alertsDeleteAlert**](docs/Alert.md#alertsdeletealert) | **DELETE** /alerts/{alert_id} | Delete Alert
*Alert* | [**alertsUpdateAlert**](docs/Alert.md#alertsupdatealert) | **PATCH** /alerts/{alert_id} | Update Alert
*ApiKey* | [**apiCreateKey**](docs/ApiKey.md#apicreatekey) | **POST** /api/key/ | Create Key
*ApiKey* | [**apiRevokeApiKey**](docs/ApiKey.md#apirevokeapikey) | **PATCH** /api/key/revoke/{api_key_id} | Revoke Api Key
*Application* | [**applicationsCreateApp**](docs/Application.md#applicationscreateapp) | **POST** /applications/ | Create App
*Application* | [**applicationsDeleteApp**](docs/Application.md#applicationsdeleteapp) | **DELETE** /applications/{app_id} | Delete App
*Application* | [**applicationsUpdateApp**](docs/Application.md#applicationsupdateapp) | **PATCH** /applications/{app_id} | Update App
*Application* | [**applicationsUpdateGroupMembership**](docs/Application.md#applicationsupdategroupmembership) | **PUT** /applications/group/access | Update Group Membership
*Application* | [**applicationsUpdateUserMembership**](docs/Application.md#applicationsupdateusermembership) | **PUT** /applications/user/access | Update User Membership
*Assistant* | [**assistantsAddLibraryToAssistant**](docs/Assistant.md#assistantsaddlibrarytoassistant) | **POST** /assistants/{assistant_id}/libraries/{library_id} | Add Library To Assistant
*Assistant* | [**assistantsAddMembers**](docs/Assistant.md#assistantsaddmembers) | **POST** /assistants/{assistant_id}/members | Add Members
*Assistant* | [**assistantsAddToolToAssistant**](docs/Assistant.md#assistantsaddtooltoassistant) | **POST** /assistants/{assistant_id}/tools/{tool_id} | Add Tool To Assistant
*Assistant* | [**assistantsCreateAssistant**](docs/Assistant.md#assistantscreateassistant) | **POST** /assistants/ | Create Assistant
*Assistant* | [**assistantsDeleteAssistant**](docs/Assistant.md#assistantsdeleteassistant) | **DELETE** /assistants/{assistant_id} | Delete Assistant
*Assistant* | [**assistantsDeleteMembers**](docs/Assistant.md#assistantsdeletemembers) | **DELETE** /assistants/{assistant_id}/members | Delete Members
*Assistant* | [**assistantsLeaveAssitant**](docs/Assistant.md#assistantsleaveassitant) | **DELETE** /assistants/{assistant_id}/remove/me | Leave Assitant
*Assistant* | [**assistantsRemoveLibraryFromAssistant**](docs/Assistant.md#assistantsremovelibraryfromassistant) | **DELETE** /assistants/{assistant_id}/libraries/{library_id} | Remove Library From Assistant
*Assistant* | [**assistantsRemoveMember**](docs/Assistant.md#assistantsremovemember) | **DELETE** /assistants/{assistant_id}/members/{user_id} | Remove Member
*Assistant* | [**assistantsRemoveToolFromAssistant**](docs/Assistant.md#assistantsremovetoolfromassistant) | **DELETE** /assistants/{assistant_id}/tools/{tool_id} | Remove Tool From Assistant
*Assistant* | [**assistantsSubmitAssistant**](docs/Assistant.md#assistantssubmitassistant) | **POST** /assistants/submit | Submit Assistant
*Assistant* | [**assistantsUpdateAssistant**](docs/Assistant.md#assistantsupdateassistant) | **PATCH** /assistants/{assistant_id} | Update Assistant
*Auth* | [**authAzureEntraCallback**](docs/Auth.md#authazureentracallback) | **GET** /auth/callback/azure-entra | Azure Entra Callback
*Auth* | [**authConfirmEmail**](docs/Auth.md#authconfirmemail) | **GET** /auth/confirm-email | Confirm Email
*Auth* | [**authExchangeToken**](docs/Auth.md#authexchangetoken) | **POST** /auth/exchange/token | Exchange Token
*Auth* | [**authGetEntraGroups**](docs/Auth.md#authgetentragroups) | **GET** /auth/entra/groups | Get Entra Groups
*Auth* | [**authGetEntraScopes**](docs/Auth.md#authgetentrascopes) | **GET** /auth/entra/scopes | Get Entra Scopes
*Auth* | [**authLogin**](docs/Auth.md#authlogin) | **POST** /auth/token | Login
*Auth* | [**authLogout**](docs/Auth.md#authlogout) | **POST** /auth/logout | Logout
*Auth* | [**authOidcCallback**](docs/Auth.md#authoidccallback) | **GET** /auth/callback/oidc | Oidc Callback
*Auth* | [**authRequestPasswordReset**](docs/Auth.md#authrequestpasswordreset) | **POST** /auth/request-password-reset | Request Password Reset
*Auth* | [**authResetPassword**](docs/Auth.md#authresetpassword) | **POST** /auth/reset-password | Reset Password
*Auth* | [**authResetPasswordForm**](docs/Auth.md#authresetpasswordform) | **GET** /auth/reset-password | Reset Password Form
*Auth* | [**authSendEmailConfirmation**](docs/Auth.md#authsendemailconfirmation) | **POST** /auth/send-email-confirmation | Send Email Confirmation
*AuthConnector* | [**authInitiateAdminConsent**](docs/AuthConnector.md#authinitiateadminconsent) | **GET** /auth/connectors/{connector_id}/consent/admin | Initiate Admin Consent
*AuthConnector* | [**authInitiateConsent**](docs/AuthConnector.md#authinitiateconsent) | **GET** /auth/connectors/{connector_id}/consent | Initiate Consent
*AuthConnector* | [**authListConnectorStatus**](docs/AuthConnector.md#authlistconnectorstatus) | **GET** /auth/connectors/status | List Connector Status
*AuthConnector* | [**authOauthCallback**](docs/AuthConnector.md#authoauthcallback) | **GET** /auth/connectors/callback | Oauth Callback
*AuthConnector* | [**authRevokeConsent**](docs/AuthConnector.md#authrevokeconsent) | **DELETE** /auth/connectors/{connector_id}/consent | Revoke Consent
*AuthConnector* | [**authUpdateConnector**](docs/AuthConnector.md#authupdateconnector) | **PATCH** /auth/connectors/{connector_id} | Update Connector
*AuthConnector* | [**authUpdateOauthClient**](docs/AuthConnector.md#authupdateoauthclient) | **PATCH** /auth/connectors/oauth-clients/{oauth_client_id} | Update Oauth Client
*Chat* | [**chatsAddLibraryToChat**](docs/Chat.md#chatsaddlibrarytochat) | **POST** /chats/{chat_id}/libraries/{library_id} | Add Library To Chat
*Chat* | [**chatsCancelMessage**](docs/Chat.md#chatscancelmessage) | **POST** /chats/{chat_id}/cancel | Cancel Message
*Chat* | [**chatsDeactivateDocuments**](docs/Chat.md#chatsdeactivatedocuments) | **POST** /chats/{chat_id}/inactive-documents | Deactivate Documents
*Chat* | [**chatsRemoveChat**](docs/Chat.md#chatsremovechat) | **DELETE** /chats/{chat_id} | Remove Chat
*Chat* | [**chatsRemoveInactiveDocuments**](docs/Chat.md#chatsremoveinactivedocuments) | **DELETE** /chats/{chat_id}/inactive-documents | Remove Inactive Documents
*Chat* | [**chatsRemoveLibraryFromChat**](docs/Chat.md#chatsremovelibraryfromchat) | **DELETE** /chats/{chat_id}/libraries/{library_id} | Remove Library From Chat
*Chat* | [**chatsSummerizeChat**](docs/Chat.md#chatssummerizechat) | **GET** /chats/{chat_id}/summary | Summerize Chat
*Chat* | [**chatsUpdateChat**](docs/Chat.md#chatsupdatechat) | **PATCH** /chats/{chat_id} | Update Chat
*Chat* | [**chatsUpdateChatToolSettings**](docs/Chat.md#chatsupdatechattoolsettings) | **PUT** /chats/{chat_id}/tools/{tool_id} | Update Chat Tool Settings
*Default* | [**postPostCheck**](docs/Default.md#postpostcheck) | **POST** /post | Post Check
*Default* | [**rootRoot**](docs/Default.md#rootroot) | **GET** / | Root
*Default* | [**statStat**](docs/Default.md#statstat) | **GET** /stat | Stat
*Default* | [**themeGetTheme**](docs/Default.md#themegettheme) | **GET** /theme | Get Theme
*Default* | [**versionVersion**](docs/Default.md#versionversion) | **GET** /version | Version
*Document* | [**documentsDeleteChatDocument**](docs/Document.md#documentsdeletechatdocument) | **DELETE** /documents/{document_id} | Delete Chat Document
*Document* | [**documentsGetFile**](docs/Document.md#documentsgetfile) | **GET** /documents/{document_id} | Get File
*Document* | [**documentsImportDocuments**](docs/Document.md#documentsimportdocuments) | **POST** /documents/import | Import Documents
*Document* | [**documentsRetryDocument**](docs/Document.md#documentsretrydocument) | **POST** /documents/{document_id}/retry | Retry Document
*Document* | [**documentsUnimportDocuments**](docs/Document.md#documentsunimportdocuments) | **DELETE** /documents/import | Unimport Documents
*Document* | [**documentsUploadDocuments**](docs/Document.md#documentsuploaddocuments) | **POST** /documents/ | Upload Documents
*File* | [**filesDownloadFile**](docs/File.md#filesdownloadfile) | **GET** /files/{file_id} | Download File
*Invitation* | [**invitationsAcceptInvitationComplete**](docs/Invitation.md#invitationsacceptinvitationcomplete) | **POST** /invitations/accept | Accept Invitation Complete
*Invitation* | [**invitationsAcceptInvitationForm**](docs/Invitation.md#invitationsacceptinvitationform) | **GET** /invitations/accept | Accept Invitation Form
*Invitation* | [**invitationsCreateInvitations**](docs/Invitation.md#invitationscreateinvitations) | **POST** /invitations/ | Create Invitations
*Invitation* | [**invitationsResendInvitation**](docs/Invitation.md#invitationsresendinvitation) | **POST** /invitations/{invitation_id}/resend | Resend Invitation
*Invitation* | [**invitationsRevokeInvitation**](docs/Invitation.md#invitationsrevokeinvitation) | **POST** /invitations/{invitation_id}/revoke | Revoke Invitation
*Library* | [**librariesAddLibraryMembers**](docs/Library.md#librariesaddlibrarymembers) | **POST** /libraries/{library_id}/members | Add Library Members
*Library* | [**librariesDeleteLibrary**](docs/Library.md#librariesdeletelibrary) | **DELETE** /libraries/{library_id} | Delete Library
*Library* | [**librariesLeaveLibrary**](docs/Library.md#librariesleavelibrary) | **DELETE** /libraries/{library_id}/remove/me | Leave Library
*Library* | [**librariesNewLibrary**](docs/Library.md#librariesnewlibrary) | **POST** /libraries/ | New Library
*Library* | [**librariesRemoveLibraryMembers**](docs/Library.md#librariesremovelibrarymembers) | **DELETE** /libraries/{library_id}/members | Remove Library Members
*Library* | [**librariesRemoveSingleMember**](docs/Library.md#librariesremovesinglemember) | **DELETE** /libraries/{library_id}/members/{user_id} | Remove Single Member
*Library* | [**librariesUpdateLibrary**](docs/Library.md#librariesupdatelibrary) | **PATCH** /libraries/{library_id} | Update Library
*Llm* | [**llmGetCost**](docs/Llm.md#llmgetcost) | **POST** /llm/cost | Get Cost
*Llm* | [**llmGetUsageCosts**](docs/Llm.md#llmgetusagecosts) | **POST** /llm/services/cost | Get Usage Costs
*Llm* | [**llmLlmTotalTokens**](docs/Llm.md#llmllmtotaltokens) | **POST** /llm/tokens | Llm Total Tokens
*LlmCatalog* | [**llmCreateCatalog**](docs/LlmCatalog.md#llmcreatecatalog) | **POST** /llm/catalog | Create Catalog
*LlmCatalog* | [**llmDeleteCatalog**](docs/LlmCatalog.md#llmdeletecatalog) | **DELETE** /llm/catalog/{catalog_id} | Delete Catalog
*LlmCatalog* | [**llmUpdateCatalog**](docs/LlmCatalog.md#llmupdatecatalog) | **PATCH** /llm/catalog/{catalog_id} | Update Catalog
*LlmSetting* | [**llmCreateLlmSettings**](docs/LlmSetting.md#llmcreatellmsettings) | **POST** /llm/settings | Create Llm Settings
*LlmSetting* | [**llmDeleteLlmSettings**](docs/LlmSetting.md#llmdeletellmsettings) | **DELETE** /llm/settings/{settings_id} | Delete Llm Settings
*LlmSetting* | [**llmUpdateLlmSettings**](docs/LlmSetting.md#llmupdatellmsettings) | **PATCH** /llm/settings/{settings_id} | Update Llm Settings
*Message* | [**messagesConvertMessage**](docs/Message.md#messagesconvertmessage) | **GET** /messages/{message_id}/convert | Convert Message
*Message* | [**messagesCreateMessage**](docs/Message.md#messagescreatemessage) | **POST** /messages/ | Create Message
*Message* | [**messagesRephraseMessage**](docs/Message.md#messagesrephrasemessage) | **GET** /messages/{message_id}/rephrase | Rephrase Message
*Message* | [**messagesSubmitMessage**](docs/Message.md#messagessubmitmessage) | **POST** /messages/submit | Submit Message
*Message* | [**messagesTranslateMessage**](docs/Message.md#messagestranslatemessage) | **GET** /messages/{message_id}/translate | Translate Message
*Project* | [**projectsAddLibraryToProject**](docs/Project.md#projectsaddlibrarytoproject) | **POST** /projects/{project_id}/libraries/{library_id} | Add Library To Project
*Project* | [**projectsAddMembers**](docs/Project.md#projectsaddmembers) | **POST** /projects/{project_id}/members | Add Members
*Project* | [**projectsCreateProject**](docs/Project.md#projectscreateproject) | **POST** /projects/ | Create Project
*Project* | [**projectsDeleteMember**](docs/Project.md#projectsdeletemember) | **DELETE** /projects/{project_id}/members/{user_id} | Delete Member
*Project* | [**projectsDeleteMembers**](docs/Project.md#projectsdeletemembers) | **DELETE** /projects/{project_id}/members | Delete Members
*Project* | [**projectsDeleteProject**](docs/Project.md#projectsdeleteproject) | **DELETE** /projects/{project_id} | Delete Project
*Project* | [**projectsIsProjectNameFree**](docs/Project.md#projectsisprojectnamefree) | **GET** /projects/available | Is Project Name Free
*Project* | [**projectsLeaveProject**](docs/Project.md#projectsleaveproject) | **DELETE** /projects/{project_id}/remove/me | Leave Project
*Project* | [**projectsRemoveLibraryFromProject**](docs/Project.md#projectsremovelibraryfromproject) | **DELETE** /projects/{project_id}/libraries/{library_id} | Remove Library From Project
*Project* | [**projectsUpdateProject**](docs/Project.md#projectsupdateproject) | **PATCH** /projects/{project_id} | Update Project
*Prompt* | [**promptsCreatePrompt**](docs/Prompt.md#promptscreateprompt) | **POST** /prompts/ | Create Prompt
*Prompt* | [**promptsDeletePrompt**](docs/Prompt.md#promptsdeleteprompt) | **DELETE** /prompts/{prompt_id} | Delete Prompt
*Prompt* | [**promptsUpdatePrompt**](docs/Prompt.md#promptsupdateprompt) | **PATCH** /prompts/{prompt_id} | Update Prompt
*Query* | [**queryQuery**](docs/Query.md#queryquery) | **GET** /query/{path} | Query
*Query* | [**queryQueryRpc**](docs/Query.md#queryqueryrpc) | **GET** /query/rpc/{path} | Query Rpc
*Settings* | [**settingsCurrent**](docs/Settings.md#settingscurrent) | **GET** /settings/current | Current
*Settings* | [**settingsUpdateCurrentSettings**](docs/Settings.md#settingsupdatecurrentsettings) | **PATCH** /settings/current | Update Current Settings
*Settings* | [**settingsUpdateSettings**](docs/Settings.md#settingsupdatesettings) | **PATCH** /settings/{settings_id} | Update Settings
*Sharepoint* | [**integrationsGetItemInfo**](docs/Sharepoint.md#integrationsgetiteminfo) | **GET** /integrations/sharepoint/drives/{drive_id}/items/{drive_item_id} | Get Item Info
*Sharepoint* | [**integrationsGetUserInfo**](docs/Sharepoint.md#integrationsgetuserinfo) | **GET** /integrations/sharepoint/me | Get User Info
*Sharepoint* | [**integrationsIsConnected**](docs/Sharepoint.md#integrationsisconnected) | **GET** /integrations/sharepoint/connected | Is Connected
*Sharepoint* | [**integrationsListAllSites**](docs/Sharepoint.md#integrationslistallsites) | **GET** /integrations/sharepoint/sites | List All Sites
*Sharepoint* | [**integrationsListChildren**](docs/Sharepoint.md#integrationslistchildren) | **GET** /integrations/sharepoint/drives/{drive_id}/items/{drive_item_id}/children | List Children
*Sharepoint* | [**integrationsListDrives**](docs/Sharepoint.md#integrationslistdrives) | **GET** /integrations/sharepoint/sites/{site_id}/drives | List Drives
*Storage* | [**storageDownloadFile**](docs/Storage.md#storagedownloadfile) | **GET** /storage/{path} | Download File
*Tarif* | [**tarifsCreateTarif**](docs/Tarif.md#tarifscreatetarif) | **POST** /tarifs/ | Create Tarif
*Tarif* | [**tarifsDeleteTarif**](docs/Tarif.md#tarifsdeletetarif) | **DELETE** /tarifs/{tarif_id} | Delete Tarif
*Tarif* | [**tarifsUpdateTarif**](docs/Tarif.md#tarifsupdatetarif) | **PATCH** /tarifs/{tarif_id} | Update Tarif
*Template* | [**templatesCreate**](docs/Template.md#templatescreate) | **POST** /templates/ | Create
*Template* | [**templatesDelete**](docs/Template.md#templatesdelete) | **DELETE** /templates/{template_id} | Delete
*Template* | [**templatesUpdate**](docs/Template.md#templatesupdate) | **PATCH** /templates/{template_id} | Update
*Tenant* | [**tenantsAddLibraryToTenants**](docs/Tenant.md#tenantsaddlibrarytotenants) | **POST** /tenants/{tenant_id}/libraries/{library_id} | Add Library To Tenants
*Tenant* | [**tenantsCreateTenant**](docs/Tenant.md#tenantscreatetenant) | **POST** /tenants/ | Create Tenant
*Tenant* | [**tenantsCreateTenantConnector**](docs/Tenant.md#tenantscreatetenantconnector) | **POST** /tenants/{tenant_id}/connectors/{connector_id} | Create Tenant Connector
*Tenant* | [**tenantsCreateTenantTool**](docs/Tenant.md#tenantscreatetenanttool) | **POST** /tenants/{tenant_id}/tools/{tool_id} | Create Tenant Tool
*Tenant* | [**tenantsDeleteTenant**](docs/Tenant.md#tenantsdeletetenant) | **DELETE** /tenants/{tenant_id} | Delete Tenant
*Tenant* | [**tenantsDeleteTenantConnector**](docs/Tenant.md#tenantsdeletetenantconnector) | **DELETE** /tenants/{tenant_id}/connectors/{connector_id} | Delete Tenant Connector
*Tenant* | [**tenantsDeleteTenantModel**](docs/Tenant.md#tenantsdeletetenantmodel) | **DELETE** /tenants/{tenant_id}/models/{model_id} | Delete Tenant Model
*Tenant* | [**tenantsDeleteTenantModelsBulk**](docs/Tenant.md#tenantsdeletetenantmodelsbulk) | **DELETE** /tenants/models/{model_id}/bulk | Delete Tenant Models Bulk
*Tenant* | [**tenantsDeleteTenantTool**](docs/Tenant.md#tenantsdeletetenanttool) | **DELETE** /tenants/{tenant_id}/tools/{tool_id} | Delete Tenant Tool
*Tenant* | [**tenantsGetCurrentTenant**](docs/Tenant.md#tenantsgetcurrenttenant) | **GET** /tenants/current | Get Current Tenant
*Tenant* | [**tenantsPutTenantModel**](docs/Tenant.md#tenantsputtenantmodel) | **PUT** /tenants/{tenant_id}/models/{model_id} | Put Tenant Model
*Tenant* | [**tenantsPutTenantModelsBulk**](docs/Tenant.md#tenantsputtenantmodelsbulk) | **PUT** /tenants/models/{model_id}/bulk | Put Tenant Models Bulk
*Tenant* | [**tenantsRemoveTenantLibraryMember**](docs/Tenant.md#tenantsremovetenantlibrarymember) | **DELETE** /tenants/{tenant_id}/libraries/{library_id} | Remove Tenant Library Member
*Tenant* | [**tenantsUpdateCurrentTenant**](docs/Tenant.md#tenantsupdatecurrenttenant) | **PATCH** /tenants/current | Update Current Tenant
*Tenant* | [**tenantsUpdateTenant**](docs/Tenant.md#tenantsupdatetenant) | **PATCH** /tenants/{tenant_id} | Update Tenant
*Tool* | [**toolsUpdateTool**](docs/Tool.md#toolsupdatetool) | **PATCH** /tools/{tool_id} | Update Tool
*ToolAction* | [**toolactionsSendEmailFromDraft**](docs/ToolAction.md#toolactionssendemailfromdraft) | **POST** /tool-actions/email/send | Send Email From Draft
*User* | [**usersActivateUser**](docs/User.md#usersactivateuser) | **POST** /users/{user_id}/activate | Activate User
*User* | [**usersCreateGroup**](docs/User.md#userscreategroup) | **POST** /users/groups | Create Group
*User* | [**usersCreateUser**](docs/User.md#userscreateuser) | **POST** /users/ | Create User
*User* | [**usersDeactivateUser**](docs/User.md#usersdeactivateuser) | **POST** /users/{user_id}/deactivate | Deactivate User
*User* | [**usersDeleteGroup**](docs/User.md#usersdeletegroup) | **DELETE** /users/groups/{group_id} | Delete Group
*User* | [**usersDeleteUser**](docs/User.md#usersdeleteuser) | **DELETE** /users/{user_id} | Delete User
*User* | [**usersGetMyself**](docs/User.md#usersgetmyself) | **GET** /users/me | Get Myself
*User* | [**usersResetPassword**](docs/User.md#usersresetpassword) | **POST** /users/passwd | Reset Password
*User* | [**usersUpdateGroup**](docs/User.md#usersupdategroup) | **PATCH** /users/groups/{group_id} | Update Group
*User* | [**usersUpdateUser**](docs/User.md#usersupdateuser) | **PATCH** /users/{user_id} | Update User
*User* | [**usersUpsertMembers**](docs/User.md#usersupsertmembers) | **PUT** /users/members/{group_id} | Upsert Members
*User* | [**usersUpsertMyPreferences**](docs/User.md#usersupsertmypreferences) | **PATCH** /users/me/preferences | Upsert My Preferences


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

