TypeScript/JavaScript client for the **Neuland AI Hub API**: chat, retrieval-augmented document Q&A, assistants, and the surrounding workspace and integration features.

Every request is authenticated with an **API key** sent in the `X-API-KEY`
header. Create one in the Hub under **Settings → API Keys**.

Full guides, quickstart and API reference: https://docs.neuland-hub.ai

## neuland-hub-sdk@1.0.6

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

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install neuland-hub-sdk@1.0.6 --save
```


### Documentation for API Endpoints

All URIs are relative to *https://api.your-domain.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Alert* | [**alertsBudgetForecast**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Alert.md#alertsbudgetforecast) | **GET** /alerts/budgets/forecast | Forecast the tenant\&#39;s month-end spend from its current run rate
*Alert* | [**alertsBudgetSummary**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Alert.md#alertsbudgetsummary) | **GET** /alerts/budgets/summary | Get the tenant\&#39;s current-month budget summary
*Alert* | [**alertsCancelTopUp**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Alert.md#alertscanceltopup) | **POST** /alerts/budgets/top-ups/{top_up_id}/cancel | Cancel a budget top-up
*Alert* | [**alertsCreateAlert**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Alert.md#alertscreatealert) | **POST** /alerts/ | Create a budget alert
*Alert* | [**alertsCreateTopUp**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Alert.md#alertscreatetopup) | **POST** /alerts/budgets/top-ups | Add a budget top-up for the current month
*Alert* | [**alertsDeleteAlert**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Alert.md#alertsdeletealert) | **DELETE** /alerts/{alert_id} | Delete a budget alert
*Alert* | [**alertsUpdateAlert**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Alert.md#alertsupdatealert) | **PATCH** /alerts/{alert_id} | Update a budget alert
*ApiKey* | [**apiCreateKey**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ApiKey.md#apicreatekey) | **POST** /api/key/ | Create an API key
*ApiKey* | [**apiRevokeApiKey**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ApiKey.md#apirevokeapikey) | **PATCH** /api/key/revoke/{api_key_id} | Revoke an API key
*Application* | [**applicationsCreateApp**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Application.md#applicationscreateapp) | **POST** /applications/ | Create an application
*Application* | [**applicationsDeleteApp**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Application.md#applicationsdeleteapp) | **DELETE** /applications/{app_id} | Delete an application
*Application* | [**applicationsUpdateApp**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Application.md#applicationsupdateapp) | **PATCH** /applications/{app_id} | Update an application
*Application* | [**applicationsUpdateGroupMembership**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Application.md#applicationsupdategroupmembership) | **PUT** /applications/group/access | Set application access for a user group
*Application* | [**applicationsUpdateUserMembership**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Application.md#applicationsupdateusermembership) | **PUT** /applications/user/access | Set application access for users
*ApplicationMarketplace* | [**applicationAddTagToCatalog**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ApplicationMarketplace.md#applicationaddtagtocatalog) | **POST** /marketplace/application/catalog/{catalog_id}/tags/{tag_id} | Attach a tag to a marketplace application
*ApplicationMarketplace* | [**applicationCreateCatalog**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ApplicationMarketplace.md#applicationcreatecatalog) | **POST** /marketplace/application/catalog/ | Publish a marketplace application
*ApplicationMarketplace* | [**applicationInstallFromCatalog**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ApplicationMarketplace.md#applicationinstallfromcatalog) | **POST** /marketplace/application/catalog/{catalog_id}/install | Install a marketplace application into the caller\&#39;s tenant
*ApplicationMarketplace* | [**applicationListCatalog**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ApplicationMarketplace.md#applicationlistcatalog) | **GET** /marketplace/application/catalog/ | List all application catalog items — superadmin only
*ApplicationMarketplace* | [**applicationRemoveTagFromCatalog**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ApplicationMarketplace.md#applicationremovetagfromcatalog) | **DELETE** /marketplace/application/catalog/{catalog_id}/tags/{tag_id} | Detach a tag from a marketplace application
*ApplicationMarketplace* | [**applicationUninstallFromCatalog**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ApplicationMarketplace.md#applicationuninstallfromcatalog) | **DELETE** /marketplace/application/catalog/{catalog_id}/install | Uninstall a marketplace application for the caller
*ApplicationMarketplace* | [**applicationUpdateCatalog**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ApplicationMarketplace.md#applicationupdatecatalog) | **PATCH** /marketplace/application/catalog/{catalog_id} | Update a marketplace application\&#39;s metadata
*ApplicationMarketplace* | [**applicationUpdateCatalogState**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ApplicationMarketplace.md#applicationupdatecatalogstate) | **PATCH** /marketplace/application/catalog/{catalog_id}/state | Toggle a marketplace application\&#39;s lifecycle state
*Assistant* | [**assistantsAddLibraryToAssistant**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Assistant.md#assistantsaddlibrarytoassistant) | **POST** /assistants/{assistant_id}/libraries/{library_id} | Add a library to an assistant
*Assistant* | [**assistantsAddMembers**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Assistant.md#assistantsaddmembers) | **POST** /assistants/{assistant_id}/members | Add members to an assistant
*Assistant* | [**assistantsAddTagToAssistant**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Assistant.md#assistantsaddtagtoassistant) | **POST** /assistants/{assistant_id}/tags/{tag_id} | Add a tag to an assistant
*Assistant* | [**assistantsAddToolToAssistant**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Assistant.md#assistantsaddtooltoassistant) | **POST** /assistants/{assistant_id}/tools/{tool_id} | Add a tool to an assistant
*Assistant* | [**assistantsConvertAssistantToTool**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Assistant.md#assistantsconvertassistanttotool) | **POST** /assistants/{assistant_id}/tool | Make an assistant consultable from your own chats
*Assistant* | [**assistantsCreateAssistant**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Assistant.md#assistantscreateassistant) | **POST** /assistants/ | Create an assistant
*Assistant* | [**assistantsDeleteAssistant**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Assistant.md#assistantsdeleteassistant) | **DELETE** /assistants/{assistant_id} | Delete an assistant
*Assistant* | [**assistantsDeleteMembers**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Assistant.md#assistantsdeletemembers) | **DELETE** /assistants/{assistant_id}/members | Remove members from an assistant
*Assistant* | [**assistantsJoinAssistant**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Assistant.md#assistantsjoinassistant) | **POST** /assistants/{assistant_id}/membership | Join a community assistant
*Assistant* | [**assistantsLeaveAssitant**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Assistant.md#assistantsleaveassitant) | **DELETE** /assistants/{assistant_id}/remove/me | Leave an assistant
*Assistant* | [**assistantsRemoveAssistantAsTool**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Assistant.md#assistantsremoveassistantastool) | **DELETE** /assistants/{assistant_id}/tool | Stop the assistant being consultable from your chats
*Assistant* | [**assistantsRemoveLibraryFromAssistant**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Assistant.md#assistantsremovelibraryfromassistant) | **DELETE** /assistants/{assistant_id}/libraries/{library_id} | Remove a library from an assistant
*Assistant* | [**assistantsRemoveMember**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Assistant.md#assistantsremovemember) | **DELETE** /assistants/{assistant_id}/members/{user_id} | Remove a single member
*Assistant* | [**assistantsRemoveTagFromAssistant**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Assistant.md#assistantsremovetagfromassistant) | **DELETE** /assistants/{assistant_id}/tags/{tag_id} | Remove a tag from an assistant
*Assistant* | [**assistantsRemoveToolFromAssistant**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Assistant.md#assistantsremovetoolfromassistant) | **DELETE** /assistants/{assistant_id}/tools/{tool_id} | Remove a tool from an assistant
*Assistant* | [**assistantsRestoreAssistantVersion**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Assistant.md#assistantsrestoreassistantversion) | **POST** /assistants/{assistant_id}/versions/{version}/restore | Restore an assistant version
*Assistant* | [**assistantsSubmitAssistant**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Assistant.md#assistantssubmitassistant) | **POST** /assistants/submit | Create an assistant with attachments
*Assistant* | [**assistantsUpdateAssistant**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Assistant.md#assistantsupdateassistant) | **PATCH** /assistants/{assistant_id} | Update an assistant
*Assistant* | [**assistantsUpdateAssistantGroups**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Assistant.md#assistantsupdateassistantgroups) | **PUT** /assistants/{assistant_id}/groups | Set assistant group access
*Assistant* | [**assistantsUpdateAssistantVisibility**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Assistant.md#assistantsupdateassistantvisibility) | **PATCH** /assistants/{assistant_id}/visibility | Set assistant visibility
*AssistantMarketplace* | [**assistantListCatalog**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AssistantMarketplace.md#assistantlistcatalog) | **GET** /marketplace/assistant/catalog/ | List all assistant catalog items — superadmin only
*AssistantMarketplace* | [**marketplaceAddTagToCatalog**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AssistantMarketplace.md#marketplaceaddtagtocatalog) | **POST** /marketplace/assistant/catalog/{catalog_id}/tags/{tag_id} | Add Tag To Catalog
*AssistantMarketplace* | [**marketplaceAttachTool**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AssistantMarketplace.md#marketplaceattachtool) | **POST** /marketplace/assistant/catalog/{catalog_id}/tools/{tool_id} | Attach Tool
*AssistantMarketplace* | [**marketplaceCreateCatalog**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AssistantMarketplace.md#marketplacecreatecatalog) | **POST** /marketplace/assistant/catalog/ | Create Catalog
*AssistantMarketplace* | [**marketplaceDetachTool**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AssistantMarketplace.md#marketplacedetachtool) | **DELETE** /marketplace/assistant/catalog/{catalog_id}/tools/{tool_id} | Detach Tool
*AssistantMarketplace* | [**marketplaceInstallFromCatalog**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AssistantMarketplace.md#marketplaceinstallfromcatalog) | **POST** /marketplace/assistant/catalog/{catalog_id}/install | Install From Catalog
*AssistantMarketplace* | [**marketplaceListTools**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AssistantMarketplace.md#marketplacelisttools) | **GET** /marketplace/assistant/catalog/{catalog_id}/tools | List Tools
*AssistantMarketplace* | [**marketplaceRemoveTagFromCatalog**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AssistantMarketplace.md#marketplaceremovetagfromcatalog) | **DELETE** /marketplace/assistant/catalog/{catalog_id}/tags/{tag_id} | Remove Tag From Catalog
*AssistantMarketplace* | [**marketplaceUninstallFromCatalog**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AssistantMarketplace.md#marketplaceuninstallfromcatalog) | **DELETE** /marketplace/assistant/catalog/{catalog_id}/install | Uninstall From Catalog
*AssistantMarketplace* | [**marketplaceUpdateCatalog**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AssistantMarketplace.md#marketplaceupdatecatalog) | **PATCH** /marketplace/assistant/catalog/{catalog_id} | Update Catalog
*AssistantMarketplace* | [**marketplaceUpdateCatalogState**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AssistantMarketplace.md#marketplaceupdatecatalogstate) | **PATCH** /marketplace/assistant/catalog/{catalog_id}/state | Update Catalog State
*Atlassian* | [**integrationsSetAtlassianCloudId**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Atlassian.md#integrationssetatlassiancloudid) | **PUT** /integrations/atlassian/{connector_id}/cloudid | Set active Atlassian cloud_id
*Auth* | [**authConfirmEmail**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Auth.md#authconfirmemail) | **GET** /auth/confirm-email | Confirm an email address
*Auth* | [**authExchangeToken**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Auth.md#authexchangetoken) | **POST** /auth/exchange/token | Exchange for a service token
*Auth* | [**authGetEntraGroups**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Auth.md#authgetentragroups) | **GET** /auth/entra/groups | Get Entra group names
*Auth* | [**authGetEntraScopes**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Auth.md#authgetentrascopes) | **GET** /auth/entra/scopes | List Entra scopes
*Auth* | [**authLogin**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Auth.md#authlogin) | **POST** /auth/token | Log in
*Auth* | [**authLogout**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Auth.md#authlogout) | **POST** /auth/logout | Log out
*Auth* | [**authRequestPasswordReset**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Auth.md#authrequestpasswordreset) | **POST** /auth/request-password-reset | Request a password reset
*Auth* | [**authResetPassword**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Auth.md#authresetpassword) | **POST** /auth/reset-password | Complete a password reset
*Auth* | [**authResetPasswordForm**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Auth.md#authresetpasswordform) | **GET** /auth/reset-password | Password reset HTML form
*Auth* | [**authSearchEntraGroups**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Auth.md#authsearchentragroups) | **GET** /auth/entra/groups/search | Search Entra directory groups
*Auth* | [**authSendEmailConfirmation**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Auth.md#authsendemailconfirmation) | **POST** /auth/send-email-confirmation | Send an email confirmation
*Auth* | [**authSsoExchange**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Auth.md#authssoexchange) | **POST** /auth/sso/{slug}/{provider}/exchange | Complete an SSO login
*Auth* | [**authSsoInit**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Auth.md#authssoinit) | **GET** /auth/sso/{slug}/{provider}/init | Start an SSO login
*Auth* | [**authSsoResolve**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Auth.md#authssoresolve) | **GET** /auth/sso/resolve | Resolve SSO providers for an email
*AuthConnector* | [**authGetCredentialTemplate**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AuthConnector.md#authgetcredentialtemplate) | **GET** /auth/connectors/{connector_id}/credential/template | Get connector credential template
*AuthConnector* | [**authInitiateAdminConsent**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AuthConnector.md#authinitiateadminconsent) | **GET** /auth/connectors/{connector_id}/consent/admin | Initiate admin connector consent
*AuthConnector* | [**authInitiateConsent**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AuthConnector.md#authinitiateconsent) | **GET** /auth/connectors/{connector_id}/consent | Initiate connector consent
*AuthConnector* | [**authListConnectorStatus**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AuthConnector.md#authlistconnectorstatus) | **GET** /auth/connectors/status | List connector status
*AuthConnector* | [**authOauthCallback**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AuthConnector.md#authoauthcallback) | **GET** /auth/connectors/callback | Connector OAuth callback
*AuthConnector* | [**authRevokeConsent**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AuthConnector.md#authrevokeconsent) | **DELETE** /auth/connectors/{connector_id}/consent | Revoke connector consent
*AuthConnector* | [**authSetAdminCredential**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AuthConnector.md#authsetadmincredential) | **PUT** /auth/connectors/{connector_id}/credential/admin | Set the tenant-wide connector credential
*AuthConnector* | [**authSetUserCredential**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AuthConnector.md#authsetusercredential) | **PUT** /auth/connectors/{connector_id}/credential/user | Set the caller\&#39;s connector credential
*AuthConnector* | [**authUpdateConnector**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AuthConnector.md#authupdateconnector) | **PATCH** /auth/connectors/{connector_id} | Update a connector
*AuthConnector* | [**authUpdateOauthClient**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AuthConnector.md#authupdateoauthclient) | **PATCH** /auth/connectors/oauth-clients/{oauth_client_id} | Update an OAuth client
*Category* | [**categoriesListCategories**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Category.md#categorieslistcategories) | **GET** /categories/ | List categories
*Chat* | [**chatsAddLibraryToChat**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Chat.md#chatsaddlibrarytochat) | **POST** /chats/{chat_id}/libraries/{library_id} | Add a library to a chat
*Chat* | [**chatsCancelMessage**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Chat.md#chatscancelmessage) | **POST** /chats/{chat_id}/cancel | Cancel in-progress generation
*Chat* | [**chatsDeactivateDocuments**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Chat.md#chatsdeactivatedocuments) | **POST** /chats/{chat_id}/inactive-documents | Deactivate documents in a chat
*Chat* | [**chatsListChatMessageTurns**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Chat.md#chatslistchatmessageturns) | **GET** /chats/{chat_id}/turns | List message turns for a chat
*Chat* | [**chatsRemoveChat**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Chat.md#chatsremovechat) | **DELETE** /chats/{chat_id} | Delete a chat
*Chat* | [**chatsRemoveInactiveDocuments**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Chat.md#chatsremoveinactivedocuments) | **DELETE** /chats/{chat_id}/inactive-documents | Reactivate documents in a chat
*Chat* | [**chatsRemoveLibraryFromChat**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Chat.md#chatsremovelibraryfromchat) | **DELETE** /chats/{chat_id}/libraries/{library_id} | Remove a library from a chat
*Chat* | [**chatsSummerizeChat**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Chat.md#chatssummerizechat) | **GET** /chats/{chat_id}/summary | Summarize a chat
*Chat* | [**chatsUpdateChat**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Chat.md#chatsupdatechat) | **PATCH** /chats/{chat_id} | Update a chat
*CustomConnector* | [**customconnectorsCreateCustomConnectors**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CustomConnector.md#customconnectorscreatecustomconnectors) | **POST** /custom-connectors/ | Add one or more custom connectors
*CustomConnector* | [**customconnectorsDeleteCustomConnector**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CustomConnector.md#customconnectorsdeletecustomconnector) | **DELETE** /custom-connectors/{public_id} | Delete a custom connector
*CustomConnector* | [**customconnectorsListCustomConnectors**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CustomConnector.md#customconnectorslistcustomconnectors) | **GET** /custom-connectors/ | List my custom connectors
*CustomConnector* | [**customconnectorsUpdateCustomConnector**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CustomConnector.md#customconnectorsupdatecustomconnector) | **PATCH** /custom-connectors/{public_id} | Rename or enable/disable a custom connector
*Default* | [**postPostCheck**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Default.md#postpostcheck) | **POST** /post | Post Check
*Default* | [**rootRoot**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Default.md#rootroot) | **GET** / | Root
*Default* | [**statStat**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Default.md#statstat) | **GET** /stat | Stat
*Default* | [**themeGetTheme**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Default.md#themegettheme) | **GET** /theme | Get Theme
*Default* | [**versionVersion**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Default.md#versionversion) | **GET** /version | Version
*Document* | [**documentsDeleteChatDocument**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Document.md#documentsdeletechatdocument) | **DELETE** /documents/{document_id} | Delete a document
*Document* | [**documentsDocumentUsage**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Document.md#documentsdocumentusage) | **POST** /documents/usage | Document counts and storage bytes by dimension
*Document* | [**documentsGetFile**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Document.md#documentsgetfile) | **GET** /documents/{document_id} | Download a document
*Document* | [**documentsGetText**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Document.md#documentsgettext) | **GET** /documents/{document_id}/text | Get a document\&#39;s extracted text
*Document* | [**documentsImportDocuments**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Document.md#documentsimportdocuments) | **POST** /documents/import | Import documents from a connected source
*Document* | [**documentsRetryDocument**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Document.md#documentsretrydocument) | **POST** /documents/{document_id}/retry | Retry document processing
*Document* | [**documentsUnimportDocuments**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Document.md#documentsunimportdocuments) | **DELETE** /documents/import | Remove imported documents
*Document* | [**documentsUploadDocuments**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Document.md#documentsuploaddocuments) | **POST** /documents/ | Upload documents
*Dropbox* | [**dropboxCapabilities**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Dropbox.md#dropboxcapabilities) | **GET** /integrations/dropbox/capabilities | Get data source capabilities
*Dropbox* | [**dropboxGetItemInfo**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Dropbox.md#dropboxgetiteminfo) | **GET** /integrations/dropbox/drives/{drive_id}/items/{drive_item_id} | Get a drive item
*Dropbox* | [**dropboxGetUserInfo**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Dropbox.md#dropboxgetuserinfo) | **GET** /integrations/dropbox/me | Get connected user profile
*Dropbox* | [**dropboxIsConnected**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Dropbox.md#dropboxisconnected) | **GET** /integrations/dropbox/connected | Check connection status
*Dropbox* | [**dropboxListChildren**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Dropbox.md#dropboxlistchildren) | **GET** /integrations/dropbox/drives/{drive_id}/items/{drive_item_id}/children | List children of a drive item
*Dropbox* | [**dropboxListDrives**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Dropbox.md#dropboxlistdrives) | **GET** /integrations/dropbox/sites/{site_id}/drives | List drives in a site
*Dropbox* | [**dropboxListRoots**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Dropbox.md#dropboxlistroots) | **GET** /integrations/dropbox/roots | List top-level browse entries
*FeatureFlag* | [**featureClearTenantFeatureFlag**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/FeatureFlag.md#featurecleartenantfeatureflag) | **DELETE** /feature/flags/tenants/{tenant_id}/{flag_key} | Clear a tenant\&#39;s feature-flag override
*FeatureFlag* | [**featureListTenantFeatureFlags**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/FeatureFlag.md#featurelisttenantfeatureflags) | **GET** /feature/flags/tenants/{tenant_id} | List effective feature flags for a tenant
*FeatureFlag* | [**featureSetTenantFeatureFlag**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/FeatureFlag.md#featuresettenantfeatureflag) | **PUT** /feature/flags/tenants/{tenant_id}/{flag_key} | Set a tenant\&#39;s feature-flag override
*File* | [**filesDownloadFile**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/File.md#filesdownloadfile) | **GET** /files/{file_id} | Download a file
*File* | [**filesPresignedFileUrl**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/File.md#filespresignedfileurl) | **GET** /files/{file_id}/url | Get a short-lived direct download URL for a file
*GoogleDrive* | [**googledriveCapabilities**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/GoogleDrive.md#googledrivecapabilities) | **GET** /integrations/googledrive/capabilities | Get data source capabilities
*GoogleDrive* | [**googledriveGetItemInfo**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/GoogleDrive.md#googledrivegetiteminfo) | **GET** /integrations/googledrive/drives/{drive_id}/items/{drive_item_id} | Get a drive item
*GoogleDrive* | [**googledriveGetUserInfo**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/GoogleDrive.md#googledrivegetuserinfo) | **GET** /integrations/googledrive/me | Get connected user profile
*GoogleDrive* | [**googledriveIsConnected**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/GoogleDrive.md#googledriveisconnected) | **GET** /integrations/googledrive/connected | Check connection status
*GoogleDrive* | [**googledriveListChildren**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/GoogleDrive.md#googledrivelistchildren) | **GET** /integrations/googledrive/drives/{drive_id}/items/{drive_item_id}/children | List children of a drive item
*GoogleDrive* | [**googledriveListDrives**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/GoogleDrive.md#googledrivelistdrives) | **GET** /integrations/googledrive/sites/{site_id}/drives | List drives in a site
*GoogleDrive* | [**googledriveListRoots**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/GoogleDrive.md#googledrivelistroots) | **GET** /integrations/googledrive/roots | List top-level browse entries
*Invitation* | [**invitationsAcceptInvitationComplete**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Invitation.md#invitationsacceptinvitationcomplete) | **POST** /invitations/accept | Accept an invitation
*Invitation* | [**invitationsAcceptInvitationForm**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Invitation.md#invitationsacceptinvitationform) | **GET** /invitations/accept | Render the invitation acceptance form
*Invitation* | [**invitationsCreateInvitations**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Invitation.md#invitationscreateinvitations) | **POST** /invitations/ | Create invitations
*Invitation* | [**invitationsResendInvitation**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Invitation.md#invitationsresendinvitation) | **POST** /invitations/{invitation_id}/resend | Resend an invitation
*Invitation* | [**invitationsRevokeInvitation**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Invitation.md#invitationsrevokeinvitation) | **POST** /invitations/{invitation_id}/revoke | Revoke an invitation
*Library* | [**librariesAddLibraryMembers**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Library.md#librariesaddlibrarymembers) | **POST** /libraries/{library_id}/members | Add library members
*Library* | [**librariesDeleteLibrary**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Library.md#librariesdeletelibrary) | **DELETE** /libraries/{library_id} | Delete a library
*Library* | [**librariesLeaveLibrary**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Library.md#librariesleavelibrary) | **DELETE** /libraries/{library_id}/remove/me | Leave a library
*Library* | [**librariesNewLibrary**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Library.md#librariesnewlibrary) | **POST** /libraries/ | Create a library
*Library* | [**librariesRemoveLibraryMembers**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Library.md#librariesremovelibrarymembers) | **DELETE** /libraries/{library_id}/members | Remove library members
*Library* | [**librariesRemoveSingleMember**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Library.md#librariesremovesinglemember) | **DELETE** /libraries/{library_id}/members/{user_id} | Remove a library member
*Library* | [**librariesUpdateLibrary**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Library.md#librariesupdatelibrary) | **PATCH** /libraries/{library_id} | Update a library
*Llm* | [**llmApiKeyInventory**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Llm.md#llmapikeyinventory) | **POST** /llm/usage/api/keys | API key inventory with idleness and expiry flags
*Llm* | [**llmCostMovers**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Llm.md#llmcostmovers) | **POST** /llm/insights/movers | Biggest cost movers and the most-expensive model vs the prior period
*Llm* | [**llmGetCost**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Llm.md#llmgetcost) | **POST** /llm/cost | [Deprecated] LLM cost metrics — superseded by POST /llm/usage
*Llm* | [**llmGetUsageCosts**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Llm.md#llmgetusagecosts) | **POST** /llm/services/cost | [Deprecated] External service usage costs — superseded by POST /llm/usage
*Llm* | [**llmLlmTotalTokens**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Llm.md#llmllmtotaltokens) | **POST** /llm/tokens | [Deprecated] Token usage metrics — superseded by POST /llm/usage
*Llm* | [**llmMessageTokens**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Llm.md#llmmessagetokens) | **POST** /llm/usage/messages | Token usage aggregated across messages (avg tokens per message)
*Llm* | [**llmSubtenantUsage**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Llm.md#llmsubtenantusage) | **POST** /llm/usage/subtenants | Usage rolled up across a parent tenant and its direct children
*Llm* | [**llmUsageQuery**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Llm.md#llmusagequery) | **POST** /llm/usage | Unified usage aggregation (cost/tokens/requests by dimension)
*Llm* | [**llmUtilization**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Llm.md#llmutilization) | **POST** /llm/insights/utilization | Idle assistants and license utilization
*LlmCatalog* | [**llmCreateCatalog**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/LlmCatalog.md#llmcreatecatalog) | **POST** /llm/catalog | Create a catalog entry
*LlmCatalog* | [**llmDeleteCatalog**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/LlmCatalog.md#llmdeletecatalog) | **DELETE** /llm/catalog/{catalog_id} | Delete a catalog entry
*LlmCatalog* | [**llmUpdateCatalog**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/LlmCatalog.md#llmupdatecatalog) | **PATCH** /llm/catalog/{catalog_id} | Update a catalog entry
*LlmSetting* | [**llmCreateLlmSettings**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/LlmSetting.md#llmcreatellmsettings) | **POST** /llm/settings | Create LLM settings
*LlmSetting* | [**llmDeleteLlmSettings**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/LlmSetting.md#llmdeletellmsettings) | **DELETE** /llm/settings/{settings_id} | Delete LLM settings
*LlmSetting* | [**llmTestLlmConnection**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/LlmSetting.md#llmtestllmconnection) | **POST** /llm/settings/test | Test an LLM connection
*LlmSetting* | [**llmTestTranscriptionConnection**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/LlmSetting.md#llmtesttranscriptionconnection) | **POST** /llm/settings/test/transcription | Test a transcription connection with an audio file
*LlmSetting* | [**llmUpdateLlmSettings**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/LlmSetting.md#llmupdatellmsettings) | **PATCH** /llm/settings/{settings_id} | Update LLM settings
*Message* | [**messagesContinueMessage**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Message.md#messagescontinuemessage) | **POST** /messages/{message_id}/continue | Continue a truncated assistant message
*Message* | [**messagesConvertMessage**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Message.md#messagesconvertmessage) | **GET** /messages/{message_id}/convert | Convert a message to a document
*Message* | [**messagesCreateMessage**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Message.md#messagescreatemessage) | **POST** /messages/ | Create a message
*Message* | [**messagesGetMessage**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Message.md#messagesgetmessage) | **GET** /messages/{message_id} | Get a message
*Message* | [**messagesGetMessageTurn**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Message.md#messagesgetmessageturn) | **GET** /messages/{message_id}/turn | Get all step-messages for a turn
*Message* | [**messagesRephraseMessage**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Message.md#messagesrephrasemessage) | **GET** /messages/{message_id}/rephrase | Rephrase a message
*Message* | [**messagesResumeMessage**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Message.md#messagesresumemessage) | **POST** /messages/{message_id}/hil | Resume a turn awaiting approval or user input
*Message* | [**messagesSubmitMessage**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Message.md#messagessubmitmessage) | **POST** /messages/submit | Submit a message with attachments
*Message* | [**messagesTranslateMessage**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Message.md#messagestranslatemessage) | **GET** /messages/{message_id}/translate | Translate a message
*Nextcloud* | [**nextcloudCapabilities**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Nextcloud.md#nextcloudcapabilities) | **GET** /integrations/nextcloud/capabilities | Get data source capabilities
*Nextcloud* | [**nextcloudGetItemInfo**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Nextcloud.md#nextcloudgetiteminfo) | **GET** /integrations/nextcloud/drives/{drive_id}/items/{drive_item_id} | Get a drive item
*Nextcloud* | [**nextcloudGetUserInfo**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Nextcloud.md#nextcloudgetuserinfo) | **GET** /integrations/nextcloud/me | Get connected user profile
*Nextcloud* | [**nextcloudIsConnected**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Nextcloud.md#nextcloudisconnected) | **GET** /integrations/nextcloud/connected | Check connection status
*Nextcloud* | [**nextcloudListChildren**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Nextcloud.md#nextcloudlistchildren) | **GET** /integrations/nextcloud/drives/{drive_id}/items/{drive_item_id}/children | List children of a drive item
*Nextcloud* | [**nextcloudListDrives**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Nextcloud.md#nextcloudlistdrives) | **GET** /integrations/nextcloud/sites/{site_id}/drives | List drives in a site
*Nextcloud* | [**nextcloudListRoots**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Nextcloud.md#nextcloudlistroots) | **GET** /integrations/nextcloud/roots | List top-level browse entries
*OneDrive* | [**onedriveCapabilities**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/OneDrive.md#onedrivecapabilities) | **GET** /integrations/onedrive/capabilities | Get data source capabilities
*OneDrive* | [**onedriveGetItemInfo**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/OneDrive.md#onedrivegetiteminfo) | **GET** /integrations/onedrive/drives/{drive_id}/items/{drive_item_id} | Get a drive item
*OneDrive* | [**onedriveGetUserInfo**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/OneDrive.md#onedrivegetuserinfo) | **GET** /integrations/onedrive/me | Get connected user profile
*OneDrive* | [**onedriveIsConnected**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/OneDrive.md#onedriveisconnected) | **GET** /integrations/onedrive/connected | Check connection status
*OneDrive* | [**onedriveListChildren**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/OneDrive.md#onedrivelistchildren) | **GET** /integrations/onedrive/drives/{drive_id}/items/{drive_item_id}/children | List children of a drive item
*OneDrive* | [**onedriveListDrives**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/OneDrive.md#onedrivelistdrives) | **GET** /integrations/onedrive/sites/{site_id}/drives | List drives in a site
*OneDrive* | [**onedriveListRoots**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/OneDrive.md#onedrivelistroots) | **GET** /integrations/onedrive/roots | List top-level browse entries
*Project* | [**projectsAddLibraryToProject**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Project.md#projectsaddlibrarytoproject) | **POST** /projects/{project_id}/libraries/{library_id} | Add a library to a project
*Project* | [**projectsAddMembers**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Project.md#projectsaddmembers) | **POST** /projects/{project_id}/members | Add members to a project
*Project* | [**projectsCreateProject**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Project.md#projectscreateproject) | **POST** /projects/ | Create a project
*Project* | [**projectsDeleteMember**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Project.md#projectsdeletemember) | **DELETE** /projects/{project_id}/members/{user_id} | Remove a member from a project
*Project* | [**projectsDeleteMembers**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Project.md#projectsdeletemembers) | **DELETE** /projects/{project_id}/members | Remove members from a project
*Project* | [**projectsDeleteProject**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Project.md#projectsdeleteproject) | **DELETE** /projects/{project_id} | Delete a project
*Project* | [**projectsIsProjectNameFree**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Project.md#projectsisprojectnamefree) | **GET** /projects/available | Check if a project name is free
*Project* | [**projectsLeaveProject**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Project.md#projectsleaveproject) | **DELETE** /projects/{project_id}/remove/me | Leave a project
*Project* | [**projectsRemoveLibraryFromProject**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Project.md#projectsremovelibraryfromproject) | **DELETE** /projects/{project_id}/libraries/{library_id} | Remove a library from a project
*Project* | [**projectsUpdateProject**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Project.md#projectsupdateproject) | **PATCH** /projects/{project_id} | Update a project
*Prompt* | [**promptsCreatePrompt**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Prompt.md#promptscreateprompt) | **POST** /prompts/ | Create a prompt
*Prompt* | [**promptsDeletePrompt**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Prompt.md#promptsdeleteprompt) | **DELETE** /prompts/{prompt_id} | Delete a prompt
*Prompt* | [**promptsOptimizePrompt**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Prompt.md#promptsoptimizeprompt) | **POST** /prompts/optimize | Optimize a prompt
*Prompt* | [**promptsUpdatePrompt**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Prompt.md#promptsupdateprompt) | **PATCH** /prompts/{prompt_id} | Update a prompt
*Query* | [**queryQuery**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Query.md#queryquery) | **GET** /query/{path} | Proxy a PostgREST query
*Query* | [**queryQueryRpc**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Query.md#queryqueryrpc) | **GET** /query/rpc/{path} | Proxy a PostgREST RPC call
*Rating* | [**ratingsRemove**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Rating.md#ratingsremove) | **DELETE** /ratings/{rateable_type}/{rateable_id} | Delete a rating
*Rating* | [**ratingsUpsert**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Rating.md#ratingsupsert) | **POST** /ratings/ | Upsert a rating
*ResourceAccess* | [**accessGetUserAccess**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ResourceAccess.md#accessgetuseraccess) | **GET** /access/user/{user_id} | Effective access for a user, and where it comes from
*ResourceAccess* | [**accessRevokeUserGrant**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ResourceAccess.md#accessrevokeusergrant) | **DELETE** /access/user/{user_id}/grants/{kind}/{item_id} | Revoke one direct grant from a user
*ResourceAccess* | [**accessSetUserGrants**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ResourceAccess.md#accesssetusergrants) | **PUT** /access/user/{user_id}/grants/{kind} | Set a user\&#39;s direct grants for one kind
*Role* | [**rolesAssignRoleToGroup**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Role.md#rolesassignroletogroup) | **POST** /roles/{role_id}/groups/{group_id} | Assign a role to a group
*Role* | [**rolesAssignRoleToUser**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Role.md#rolesassignroletouser) | **POST** /roles/{role_id}/users/{user_id} | Assign a role to a user
*Role* | [**rolesCreateRole**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Role.md#rolescreaterole) | **POST** /roles/ | Create a custom role
*Role* | [**rolesDeleteRole**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Role.md#rolesdeleterole) | **DELETE** /roles/{role_id} | Delete a role
*Role* | [**rolesSetDefaultRole**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Role.md#rolessetdefaultrole) | **PUT** /roles/{role_id}/default | Set a role as the tenant default
*Role* | [**rolesUnassignRoleFromGroup**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Role.md#rolesunassignrolefromgroup) | **DELETE** /roles/{role_id}/groups/{group_id} | Unassign a role from a group
*Role* | [**rolesUnassignRoleFromUser**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Role.md#rolesunassignrolefromuser) | **DELETE** /roles/{role_id}/users/{user_id} | Unassign a role from a user
*Role* | [**rolesUpdateRole**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Role.md#rolesupdaterole) | **PATCH** /roles/{role_id} | Update a role
*Settings* | [**settingsCurrent**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Settings.md#settingscurrent) | **GET** /settings/current | Get current tenant settings
*Settings* | [**settingsUpdateCurrentSettings**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Settings.md#settingsupdatecurrentsettings) | **PATCH** /settings/current | Update current tenant settings
*Settings* | [**settingsUpdateSettings**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Settings.md#settingsupdatesettings) | **PATCH** /settings/{settings_id} | Update settings by id
*Sharepoint* | [**integrationsGetItemInfo**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Sharepoint.md#integrationsgetiteminfo) | **GET** /integrations/sharepoint/drives/{drive_id}/items/{drive_item_id} | Get a drive item
*Sharepoint* | [**integrationsGetUserInfo**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Sharepoint.md#integrationsgetuserinfo) | **GET** /integrations/sharepoint/me | Get current SharePoint user
*Sharepoint* | [**integrationsIsConnected**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Sharepoint.md#integrationsisconnected) | **GET** /integrations/sharepoint/connected | Check SharePoint connection
*Sharepoint* | [**integrationsListAllSites**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Sharepoint.md#integrationslistallsites) | **GET** /integrations/sharepoint/sites | List SharePoint sites
*Sharepoint* | [**integrationsListChildren**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Sharepoint.md#integrationslistchildren) | **GET** /integrations/sharepoint/drives/{drive_id}/items/{drive_item_id}/children | List children of a drive item
*Sharepoint* | [**integrationsListDrives**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Sharepoint.md#integrationslistdrives) | **GET** /integrations/sharepoint/sites/{site_id}/drives | List drives in a site
*SharepointV1* | [**sharepointv1Capabilities**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SharepointV1.md#sharepointv1capabilities) | **GET** /integrations/sharepoint/v1/capabilities | Get data source capabilities
*SharepointV1* | [**sharepointv1GetItemInfo**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SharepointV1.md#sharepointv1getiteminfo) | **GET** /integrations/sharepoint/v1/drives/{drive_id}/items/{drive_item_id} | Get a drive item
*SharepointV1* | [**sharepointv1GetUserInfo**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SharepointV1.md#sharepointv1getuserinfo) | **GET** /integrations/sharepoint/v1/me | Get connected user profile
*SharepointV1* | [**sharepointv1IsConnected**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SharepointV1.md#sharepointv1isconnected) | **GET** /integrations/sharepoint/v1/connected | Check connection status
*SharepointV1* | [**sharepointv1ListChildren**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SharepointV1.md#sharepointv1listchildren) | **GET** /integrations/sharepoint/v1/drives/{drive_id}/items/{drive_item_id}/children | List children of a drive item
*SharepointV1* | [**sharepointv1ListDrives**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SharepointV1.md#sharepointv1listdrives) | **GET** /integrations/sharepoint/v1/sites/{site_id}/drives | List drives in a site
*SharepointV1* | [**sharepointv1ListRoots**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SharepointV1.md#sharepointv1listroots) | **GET** /integrations/sharepoint/v1/roots | List top-level browse entries
*Storage* | [**storageDownloadFile**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Storage.md#storagedownloadfile) | **GET** /storage/{path} | Download a file by signed token
*System* | [**systemReadSystemSettings**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/System.md#systemreadsystemsettings) | **GET** /system/settings | Read system settings
*System* | [**systemUpdateSystemSettings**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/System.md#systemupdatesystemsettings) | **PATCH** /system/settings | Update system settings
*Tag* | [**tagsDeleteTag**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tag.md#tagsdeletetag) | **DELETE** /tags/{tag_id} | Delete a tag
*Tag* | [**tagsNewTag**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tag.md#tagsnewtag) | **POST** /tags/ | Create a tag
*Tag* | [**tagsUpdateTag**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tag.md#tagsupdatetag) | **PATCH** /tags/{tag_id} | Rename a tag
*Tarif* | [**tarifsCreateTarif**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tarif.md#tarifscreatetarif) | **POST** /tarifs/ | Create a tarif plan
*Tarif* | [**tarifsDeleteTarif**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tarif.md#tarifsdeletetarif) | **DELETE** /tarifs/{tarif_id} | Delete a tarif plan
*Tarif* | [**tarifsUpdateTarif**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tarif.md#tarifsupdatetarif) | **PATCH** /tarifs/{tarif_id} | Update a tarif plan
*Template* | [**templatesCreate**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Template.md#templatescreate) | **POST** /templates/ | Create an email template
*Template* | [**templatesDelete**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Template.md#templatesdelete) | **DELETE** /templates/{template_id} | Delete an email template
*Template* | [**templatesGetEmailCatalog**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Template.md#templatesgetemailcatalog) | **GET** /templates/email-catalog | List customizable emails and their variables
*Template* | [**templatesUpdate**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Template.md#templatesupdate) | **PATCH** /templates/{template_id} | Update an email template
*Tenant* | [**tenantsAddLibraryToTenants**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tenant.md#tenantsaddlibrarytotenants) | **POST** /tenants/{tenant_id}/libraries/{library_id} | Assign a library to a tenant
*Tenant* | [**tenantsCreateTenant**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tenant.md#tenantscreatetenant) | **POST** /tenants/ | Create a tenant
*Tenant* | [**tenantsCreateTenantConnector**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tenant.md#tenantscreatetenantconnector) | **POST** /tenants/{tenant_id}/connectors/{connector_id} | Enable a connector for a tenant
*Tenant* | [**tenantsCreateTenantOauthClient**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tenant.md#tenantscreatetenantoauthclient) | **POST** /tenants/{tenant_id}/oauth-clients/{oauth_client_id} | Create a per-tenant OAuth client config
*Tenant* | [**tenantsCreateTenantTool**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tenant.md#tenantscreatetenanttool) | **POST** /tenants/{tenant_id}/tools/{tool_id} | Enable a tool for a tenant
*Tenant* | [**tenantsDeleteTenant**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tenant.md#tenantsdeletetenant) | **DELETE** /tenants/{tenant_id} | Delete a tenant
*Tenant* | [**tenantsDeleteTenantConnector**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tenant.md#tenantsdeletetenantconnector) | **DELETE** /tenants/{tenant_id}/connectors/{connector_id} | Disable a connector for a tenant
*Tenant* | [**tenantsDeleteTenantModel**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tenant.md#tenantsdeletetenantmodel) | **DELETE** /tenants/{tenant_id}/models/{model_id} | Disable a model for a tenant
*Tenant* | [**tenantsDeleteTenantModelsBulk**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tenant.md#tenantsdeletetenantmodelsbulk) | **DELETE** /tenants/models/{model_id}/bulk | Disable a model for multiple tenants
*Tenant* | [**tenantsDeleteTenantOauthClient**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tenant.md#tenantsdeletetenantoauthclient) | **DELETE** /tenants/{tenant_id}/oauth-clients/{oauth_client_id} | Delete a per-tenant OAuth client config
*Tenant* | [**tenantsDeleteTenantTool**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tenant.md#tenantsdeletetenanttool) | **DELETE** /tenants/{tenant_id}/tools/{tool_id} | Disable a tool for a tenant
*Tenant* | [**tenantsGetCurrentTenant**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tenant.md#tenantsgetcurrenttenant) | **GET** /tenants/current | Get current tenant
*Tenant* | [**tenantsPutTenantModel**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tenant.md#tenantsputtenantmodel) | **PUT** /tenants/{tenant_id}/models/{model_id} | Enable a model for a tenant
*Tenant* | [**tenantsPutTenantModelsBulk**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tenant.md#tenantsputtenantmodelsbulk) | **PUT** /tenants/models/{model_id}/bulk | Enable a model for multiple tenants
*Tenant* | [**tenantsRemoveTenantLibraryMember**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tenant.md#tenantsremovetenantlibrarymember) | **DELETE** /tenants/{tenant_id}/libraries/{library_id} | Unassign a library from a tenant
*Tenant* | [**tenantsUpdateCurrentTenant**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tenant.md#tenantsupdatecurrenttenant) | **PATCH** /tenants/current | Update current tenant
*Tenant* | [**tenantsUpdateTenant**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tenant.md#tenantsupdatetenant) | **PATCH** /tenants/{tenant_id} | Update a tenant
*Tenant* | [**tenantsUpdateTenantOauthClient**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tenant.md#tenantsupdatetenantoauthclient) | **PATCH** /tenants/{tenant_id}/oauth-clients/{oauth_client_id} | Update a per-tenant OAuth client config
*Tenant* | [**tenantsUpdateTenantOauthSecret**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tenant.md#tenantsupdatetenantoauthsecret) | **PUT** /tenants/{tenant_id}/oauth-clients/{oauth_client_id}/secret | Set a per-tenant OAuth client secret
*Tool* | [**toolsCreateTool**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tool.md#toolscreatetool) | **POST** /tools/ | Create a tool
*Tool* | [**toolsDeleteTool**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tool.md#toolsdeletetool) | **DELETE** /tools/{tool_id} | Delete a tool
*Tool* | [**toolsUpdateTool**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tool.md#toolsupdatetool) | **PATCH** /tools/{tool_id} | Update a tool
*ToolAction* | [**toolactionsConnectSharedMailbox**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ToolAction.md#toolactionsconnectsharedmailbox) | **POST** /tool-actions/email/shared-mailboxes | Connect a shared mailbox
*ToolAction* | [**toolactionsCreateEmailDraft**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ToolAction.md#toolactionscreateemaildraft) | **POST** /tool-actions/email/draft | Create an Outlook mailbox draft from a chat draft
*ToolAction* | [**toolactionsDisconnectSharedMailbox**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ToolAction.md#toolactionsdisconnectsharedmailbox) | **DELETE** /tool-actions/email/shared-mailboxes/{address} | Disconnect a shared mailbox
*ToolAction* | [**toolactionsListSharedMailboxes**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ToolAction.md#toolactionslistsharedmailboxes) | **GET** /tool-actions/email/shared-mailboxes | List connected shared mailboxes
*ToolAction* | [**toolactionsSearchSharedMailboxes**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ToolAction.md#toolactionssearchsharedmailboxes) | **GET** /tool-actions/email/shared-mailboxes/search | Search the directory for mailboxes to connect
*ToolAction* | [**toolactionsSendEmailFromDraft**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ToolAction.md#toolactionssendemailfromdraft) | **POST** /tool-actions/email/send | Send an email from a draft
*Transcription* | [**transcriptionsCreateTranscription**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Transcription.md#transcriptionscreatetranscription) | **POST** /transcriptions/ | Transcribe an audio file
*Transcription* | [**transcriptionsTranscriptionCallback**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Transcription.md#transcriptionstranscriptioncallback) | **POST** /transcriptions/callback | Receive an async transcription callback
*User* | [**usersActivateUser**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/User.md#usersactivateuser) | **POST** /users/{user_id}/activate | Activate a user
*User* | [**usersCreateGroup**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/User.md#userscreategroup) | **POST** /users/groups | Create a user group
*User* | [**usersCreateUser**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/User.md#userscreateuser) | **POST** /users/ | Create a user
*User* | [**usersDeactivateUser**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/User.md#usersdeactivateuser) | **POST** /users/{user_id}/deactivate | Deactivate a user
*User* | [**usersDeleteGroup**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/User.md#usersdeletegroup) | **DELETE** /users/groups/{group_id} | Delete a user group
*User* | [**usersDeleteUser**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/User.md#usersdeleteuser) | **DELETE** /users/{user_id} | Delete a user
*User* | [**usersGetMyself**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/User.md#usersgetmyself) | **GET** /users/me | Get current user
*User* | [**usersResetPassword**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/User.md#usersresetpassword) | **POST** /users/passwd | Change own password
*User* | [**usersSyncExternalGroup**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/User.md#userssyncexternalgroup) | **POST** /users/groups/{group_id}/sync | Sync an external group\&#39;s members
*User* | [**usersUpdateGroup**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/User.md#usersupdategroup) | **PATCH** /users/groups/{group_id} | Update a user group
*User* | [**usersUpdateUser**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/User.md#usersupdateuser) | **PATCH** /users/{user_id} | Update a user
*User* | [**usersUpsertMembers**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/User.md#usersupsertmembers) | **PUT** /users/members/{group_id} | Set user group members
*User* | [**usersUpsertMyPreferences**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/User.md#usersupsertmypreferences) | **PATCH** /users/me/preferences | Update own preferences
*Workflow* | [**workflowsCreateRun**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Workflow.md#workflowscreaterun) | **POST** /workflows/{workflow_id}/runs | Create Run
*Workflow* | [**workflowsCreateRunStreamToken**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Workflow.md#workflowscreaterunstreamtoken) | **POST** /workflows/{workflow_id}/runs/{run_id}/stream-token | Create Run Stream Token
*Workflow* | [**workflowsCreateWorkflow**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Workflow.md#workflowscreateworkflow) | **POST** /workflows/ | Create Workflow
*Workflow* | [**workflowsDeleteWorkflow**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Workflow.md#workflowsdeleteworkflow) | **DELETE** /workflows/{workflow_id} | Delete Workflow
*Workflow* | [**workflowsRefineWorkflow**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Workflow.md#workflowsrefineworkflow) | **POST** /workflows/{workflow_id}/chat | Refine Workflow
*Workflow* | [**workflowsStreamRunEvents**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Workflow.md#workflowsstreamrunevents) | **POST** /workflows/{workflow_id}/runs/{run_id}/events | Stream Run Events
*Workflow* | [**workflowsUpdateWorkflow**](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Workflow.md#workflowsupdateworkflow) | **PATCH** /workflows/{workflow_id} | Update Workflow


### Documentation For Models

 - [AccessItemOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AccessItemOut.md)
 - [AccessKind](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AccessKind.md)
 - [ApiKeyCreateRequest](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ApiKeyCreateRequest.md)
 - [ApiKeyCreateResponse](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ApiKeyCreateResponse.md)
 - [ApiKeyInventoryRequest](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ApiKeyInventoryRequest.md)
 - [ApiKeyInventoryResponse](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ApiKeyInventoryResponse.md)
 - [ApiKeyInventoryRow](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ApiKeyInventoryRow.md)
 - [Application](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Application.md)
 - [ApplicationAccessIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ApplicationAccessIn.md)
 - [ApplicationCatalog](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ApplicationCatalog.md)
 - [ApplicationCatalogIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ApplicationCatalogIn.md)
 - [ApplicationCatalogUpdate](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ApplicationCatalogUpdate.md)
 - [ApplicationGroupOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ApplicationGroupOut.md)
 - [ApplicationIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ApplicationIn.md)
 - [ApplicationMemberOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ApplicationMemberOut.md)
 - [Assistant](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Assistant.md)
 - [AssistantCatalog](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AssistantCatalog.md)
 - [AssistantCatalogIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AssistantCatalogIn.md)
 - [AssistantCatalogToolOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AssistantCatalogToolOut.md)
 - [AssistantCatalogUpdate](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AssistantCatalogUpdate.md)
 - [AssistantGroupOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AssistantGroupOut.md)
 - [AssistantGroupsIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AssistantGroupsIn.md)
 - [AssistantIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AssistantIn.md)
 - [AssistantInputTypeEnum](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AssistantInputTypeEnum.md)
 - [AssistantLibrary](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AssistantLibrary.md)
 - [AssistantMemberGrantedViaEnum](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AssistantMemberGrantedViaEnum.md)
 - [AssistantMemberOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AssistantMemberOut.md)
 - [AssistantMembersIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AssistantMembersIn.md)
 - [AssistantTool](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AssistantTool.md)
 - [AssistantVisibilityEnum](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AssistantVisibilityEnum.md)
 - [AssistantVisibilityUpdate](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/AssistantVisibilityUpdate.md)
 - [Bcc](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Bcc.md)
 - [BudgetAlert](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/BudgetAlert.md)
 - [BudgetAlertRequest](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/BudgetAlertRequest.md)
 - [BudgetAlertUpdate](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/BudgetAlertUpdate.md)
 - [BudgetForecast](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/BudgetForecast.md)
 - [BudgetSummary](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/BudgetSummary.md)
 - [BudgetTopUpOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/BudgetTopUpOut.md)
 - [BudgetTopUpRequest](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/BudgetTopUpRequest.md)
 - [BulkResult](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/BulkResult.md)
 - [CatalogIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CatalogIn.md)
 - [CatalogUpdate](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CatalogUpdate.md)
 - [CategoryOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CategoryOut.md)
 - [Cc](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Cc.md)
 - [Chat](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Chat.md)
 - [ChatIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ChatIn.md)
 - [ChatInactiveDocumentOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ChatInactiveDocumentOut.md)
 - [ChatLibrary](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ChatLibrary.md)
 - [ClarificationAnswer](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ClarificationAnswer.md)
 - [ConnectSharedMailboxIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ConnectSharedMailboxIn.md)
 - [Connector](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Connector.md)
 - [ConnectorAuthType](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ConnectorAuthType.md)
 - [ConnectorConsentOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ConnectorConsentOut.md)
 - [ConnectorOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ConnectorOut.md)
 - [ConnectorStatusOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ConnectorStatusOut.md)
 - [ConnectorUpdate](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ConnectorUpdate.md)
 - [CostAudioPerMinute](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CostAudioPerMinute.md)
 - [CostByModel](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CostByModel.md)
 - [CostBySource](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CostBySource.md)
 - [CostCacheCreationTokens](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CostCacheCreationTokens.md)
 - [CostCacheCreationTokensAboveTier](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CostCacheCreationTokensAboveTier.md)
 - [CostCachedTokens](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CostCachedTokens.md)
 - [CostCachedTokensAboveTier](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CostCachedTokensAboveTier.md)
 - [CostCompletionTokens](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CostCompletionTokens.md)
 - [CostCompletionTokens1](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CostCompletionTokens1.md)
 - [CostCompletionTokensAboveTier](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CostCompletionTokensAboveTier.md)
 - [CostPromptTokens](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CostPromptTokens.md)
 - [CostPromptTokens1](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CostPromptTokens1.md)
 - [CostPromptTokensAboveTier](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CostPromptTokensAboveTier.md)
 - [CostTimeseriesPoint](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CostTimeseriesPoint.md)
 - [CreateOutlookDraftRequest](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CreateOutlookDraftRequest.md)
 - [CreateOutlookDraftResponse](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CreateOutlookDraftResponse.md)
 - [CredentialIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CredentialIn.md)
 - [CredentialPartOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CredentialPartOut.md)
 - [CredentialTemplateOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CredentialTemplateOut.md)
 - [CustomConnectorCreate](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CustomConnectorCreate.md)
 - [CustomConnectorOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CustomConnectorOut.md)
 - [CustomConnectorUpdate](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/CustomConnectorUpdate.md)
 - [DataSourceCapabilities](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/DataSourceCapabilities.md)
 - [DataSourceDriveModel](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/DataSourceDriveModel.md)
 - [DataSourceFolderModel](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/DataSourceFolderModel.md)
 - [DataSourceItemModel](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/DataSourceItemModel.md)
 - [DataSourceSiteModel](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/DataSourceSiteModel.md)
 - [DataSourceUserModel](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/DataSourceUserModel.md)
 - [DateWindowRequest](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/DateWindowRequest.md)
 - [DirectFileUrl](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/DirectFileUrl.md)
 - [Document](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Document.md)
 - [DocumentMetrics](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/DocumentMetrics.md)
 - [DocumentTextOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/DocumentTextOut.md)
 - [DocumentUsageRequest](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/DocumentUsageRequest.md)
 - [DocumentUsageResponse](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/DocumentUsageResponse.md)
 - [DocumentUsageRow](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/DocumentUsageRow.md)
 - [EmailCatalogOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/EmailCatalogOut.md)
 - [EmailSpec](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/EmailSpec.md)
 - [EmailTemplateKey](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/EmailTemplateKey.md)
 - [Example](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Example.md)
 - [FeatureFlagOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/FeatureFlagOut.md)
 - [FeatureFlagSetIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/FeatureFlagSetIn.md)
 - [FormField](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/FormField.md)
 - [FormFieldTypeEnum](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/FormFieldTypeEnum.md)
 - [GroupAppAccessIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/GroupAppAccessIn.md)
 - [GroupIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/GroupIn.md)
 - [GroupSyncOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/GroupSyncOut.md)
 - [HTTPValidationError](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/HTTPValidationError.md)
 - [IdleAssistant](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/IdleAssistant.md)
 - [InvitationIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/InvitationIn.md)
 - [InvitationOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/InvitationOut.md)
 - [LLMConnectionTestIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/LLMConnectionTestIn.md)
 - [LLMConnectionTestOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/LLMConnectionTestOut.md)
 - [LLMSettingsIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/LLMSettingsIn.md)
 - [LLMSettingsUpdate](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/LLMSettingsUpdate.md)
 - [Library](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Library.md)
 - [LibraryIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/LibraryIn.md)
 - [LibraryMemberBulkDelete](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/LibraryMemberBulkDelete.md)
 - [LibraryMemberBulkIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/LibraryMemberBulkIn.md)
 - [LibraryMemberIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/LibraryMemberIn.md)
 - [LibraryMemberOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/LibraryMemberOut.md)
 - [LibraryUpdateIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/LibraryUpdateIn.md)
 - [LicenseUtilization](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/LicenseUtilization.md)
 - [LocationInner](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/LocationInner.md)
 - [MarketplaceCatalogStateEnum](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/MarketplaceCatalogStateEnum.md)
 - [MarketplaceCatalogStateUpdate](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/MarketplaceCatalogStateUpdate.md)
 - [MessageDetailOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/MessageDetailOut.md)
 - [MessageFileOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/MessageFileOut.md)
 - [MessageIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/MessageIn.md)
 - [MessageSubmitOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/MessageSubmitOut.md)
 - [MessageTokensResponse](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/MessageTokensResponse.md)
 - [MessageTurnOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/MessageTurnOut.md)
 - [ModelDelta](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ModelDelta.md)
 - [ModelTierEnum](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ModelTierEnum.md)
 - [MoversResponse](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/MoversResponse.md)
 - [NeulandAssistantsTaggingOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/NeulandAssistantsTaggingOut.md)
 - [NeulandMarketplaceAssistantSchemasTaggingOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/NeulandMarketplaceAssistantSchemasTaggingOut.md)
 - [OAuth2ProviderEnum](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/OAuth2ProviderEnum.md)
 - [OAuthClient](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/OAuthClient.md)
 - [OAuthClientUpdate](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/OAuthClientUpdate.md)
 - [OutputFormat](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/OutputFormat.md)
 - [PasswordResetIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/PasswordResetIn.md)
 - [PasswordResetRequestIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/PasswordResetRequestIn.md)
 - [PlanStatus](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/PlanStatus.md)
 - [Project](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Project.md)
 - [ProjectIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ProjectIn.md)
 - [ProjectLibrary](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ProjectLibrary.md)
 - [ProjectMember](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ProjectMember.md)
 - [ProjectMemberBulkDelete](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ProjectMemberBulkDelete.md)
 - [ProjectMemberBulkIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ProjectMemberBulkIn.md)
 - [ProjectMemberIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ProjectMemberIn.md)
 - [Prompt](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Prompt.md)
 - [PromptIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/PromptIn.md)
 - [PromptOptimizeIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/PromptOptimizeIn.md)
 - [PromptOptimizeOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/PromptOptimizeOut.md)
 - [RateableTypeEnum](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/RateableTypeEnum.md)
 - [Rating](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Rating.md)
 - [RatingIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/RatingIn.md)
 - [ReasoningEffortEnum](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ReasoningEffortEnum.md)
 - [RephraseStyleEnum](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/RephraseStyleEnum.md)
 - [ResponseAuthGetEntraGroupsValue](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ResponseAuthGetEntraGroupsValue.md)
 - [ResponseDropboxListRoots](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ResponseDropboxListRoots.md)
 - [ResponseGoogledriveListRoots](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ResponseGoogledriveListRoots.md)
 - [ResponseNextcloudListRoots](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ResponseNextcloudListRoots.md)
 - [ResponseOnedriveListRoots](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ResponseOnedriveListRoots.md)
 - [ResponseSharepointv1ListRoots](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ResponseSharepointv1ListRoots.md)
 - [ResumeIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ResumeIn.md)
 - [Role](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Role.md)
 - [RoleIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/RoleIn.md)
 - [RoleUpdateIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/RoleUpdateIn.md)
 - [RunCreateOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/RunCreateOut.md)
 - [SecretUpdateIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SecretUpdateIn.md)
 - [SendEmailRequest](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SendEmailRequest.md)
 - [SendEmailResponse](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SendEmailResponse.md)
 - [SetAtlassianCloudIdRequest](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SetAtlassianCloudIdRequest.md)
 - [Settings](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Settings.md)
 - [SettingsIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SettingsIn.md)
 - [SharedMailbox](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SharedMailbox.md)
 - [SharedMailboxCandidateOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SharedMailboxCandidateOut.md)
 - [SharedMailboxListOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SharedMailboxListOut.md)
 - [SharedMailboxSearchOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SharedMailboxSearchOut.md)
 - [SharepointDriveModel](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SharepointDriveModel.md)
 - [SharepointFolderModel](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SharepointFolderModel.md)
 - [SharepointItemModel](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SharepointItemModel.md)
 - [SharepointSiteModel](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SharepointSiteModel.md)
 - [SharepointUserModel](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SharepointUserModel.md)
 - [SsoExchangeIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SsoExchangeIn.md)
 - [SsoInitOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SsoInitOut.md)
 - [SsoResolveOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SsoResolveOut.md)
 - [StreamTokenOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/StreamTokenOut.md)
 - [SubtenantUsageResponse](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SubtenantUsageResponse.md)
 - [SubtenantUsageRow](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SubtenantUsageRow.md)
 - [SystemSettings](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SystemSettings.md)
 - [SystemSettingsUpdate](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/SystemSettingsUpdate.md)
 - [Tag](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tag.md)
 - [TagIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/TagIn.md)
 - [TaggableTypeEnum](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/TaggableTypeEnum.md)
 - [Tagging](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tagging.md)
 - [Tarif](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Tarif.md)
 - [TarifIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/TarifIn.md)
 - [TarifStatusEnum](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/TarifStatusEnum.md)
 - [TemplateIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/TemplateIn.md)
 - [TemplateOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/TemplateOut.md)
 - [TemplateUpdate](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/TemplateUpdate.md)
 - [TenantIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/TenantIn.md)
 - [TenantLLM](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/TenantLLM.md)
 - [TenantModelBulkIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/TenantModelBulkIn.md)
 - [TenantModelIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/TenantModelIn.md)
 - [TenantOAuthClientIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/TenantOAuthClientIn.md)
 - [TenantOAuthClientOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/TenantOAuthClientOut.md)
 - [TenantOAuthClientUpdate](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/TenantOAuthClientUpdate.md)
 - [TenantOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/TenantOut.md)
 - [TenantThemeOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/TenantThemeOut.md)
 - [TenantUpdateIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/TenantUpdateIn.md)
 - [ThemeModeEnum](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ThemeModeEnum.md)
 - [TimeseriesPoint](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/TimeseriesPoint.md)
 - [TimeseriesResponse](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/TimeseriesResponse.md)
 - [To](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/To.md)
 - [To1](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/To1.md)
 - [TokenOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/TokenOut.md)
 - [TokenTimeseriesPerModel](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/TokenTimeseriesPerModel.md)
 - [TokenTimeseriesPoint](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/TokenTimeseriesPoint.md)
 - [TokensPerModel](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/TokensPerModel.md)
 - [TokensTimeseriesResponse](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/TokensTimeseriesResponse.md)
 - [ToolCallOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ToolCallOut.md)
 - [ToolCallProgressStepOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ToolCallProgressStepOut.md)
 - [ToolCreate](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ToolCreate.md)
 - [ToolOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ToolOut.md)
 - [ToolUpdate](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ToolUpdate.md)
 - [TranscriptionOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/TranscriptionOut.md)
 - [TranscriptionSegment](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/TranscriptionSegment.md)
 - [Translation](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Translation.md)
 - [UsageCostRequest](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/UsageCostRequest.md)
 - [UsageCostResponse](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/UsageCostResponse.md)
 - [UsageMetrics](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/UsageMetrics.md)
 - [UsageQueryRequest](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/UsageQueryRequest.md)
 - [UsageQueryResponse](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/UsageQueryResponse.md)
 - [UsageRequest](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/UsageRequest.md)
 - [UsageRow](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/UsageRow.md)
 - [UserAccessOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/UserAccessOut.md)
 - [UserGrantIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/UserGrantIn.md)
 - [UserGrantOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/UserGrantOut.md)
 - [UserGroup](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/UserGroup.md)
 - [UserGroupMember](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/UserGroupMember.md)
 - [UserGroupSource](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/UserGroupSource.md)
 - [UserIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/UserIn.md)
 - [UserMeOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/UserMeOut.md)
 - [UserOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/UserOut.md)
 - [UserPreferenceOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/UserPreferenceOut.md)
 - [UserPreferenceUpdateIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/UserPreferenceUpdateIn.md)
 - [UserUpdateIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/UserUpdateIn.md)
 - [UtilizationRequest](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/UtilizationRequest.md)
 - [UtilizationResponse](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/UtilizationResponse.md)
 - [ValidationError](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/ValidationError.md)
 - [VariableSpec](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/VariableSpec.md)
 - [Workflow](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/Workflow.md)
 - [WorkflowChatIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/WorkflowChatIn.md)
 - [WorkflowChatOut](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/WorkflowChatOut.md)
 - [WorkflowIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/WorkflowIn.md)
 - [WorkflowUpdateIn](https://github.com/neulandAI/neuland-ai-hub-sdk-sample/blob/dev/nodejs/sdk/docs/WorkflowUpdateIn.md)


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

