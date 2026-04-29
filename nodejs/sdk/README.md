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
*Assistant* | [**assistantsUpdateAssistant**](docs/Assistant.md#assistantsupdateassistant) | **PATCH** /assistants/{assistant_id} | Update Assistant
*Document* | [**documentsDeleteChatDocument**](docs/Document.md#documentsdeletechatdocument) | **DELETE** /documents/{document_id} | Delete Chat Document
*Document* | [**documentsImportDocuments**](docs/Document.md#documentsimportdocuments) | **POST** /documents/import | Import Documents
*Document* | [**documentsUploadDocuments**](docs/Document.md#documentsuploaddocuments) | **POST** /documents/ | Upload Documents
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
*Message* | [**messagesRephraseMessage**](docs/Message.md#messagesrephrasemessage) | **GET** /messages/{message_id}/rephrase | Rephrase Message
*Message* | [**messagesTranslateMessage**](docs/Message.md#messagestranslatemessage) | **GET** /messages/{message_id}/translate | Translate Message
*Project* | [**projectsAddLibraryToProject**](docs/Project.md#projectsaddlibrarytoproject) | **POST** /projects/{project_id}/libraries/{library_id} | Add Library To Project
*Project* | [**projectsAddMembers**](docs/Project.md#projectsaddmembers) | **POST** /projects/{project_id}/members | Add Members
*Project* | [**projectsCreateProject**](docs/Project.md#projectscreateproject) | **POST** /projects/ | Create Project
*Project* | [**projectsDeleteMember**](docs/Project.md#projectsdeletemember) | **DELETE** /projects/{project_id}/members/{user_id} | Delete Member
*Project* | [**projectsDeleteMembers**](docs/Project.md#projectsdeletemembers) | **DELETE** /projects/{project_id}/members | Delete Members
*Project* | [**projectsDeleteProject**](docs/Project.md#projectsdeleteproject) | **DELETE** /projects/{project_id} | Delete Project
*Project* | [**projectsLeaveProject**](docs/Project.md#projectsleaveproject) | **DELETE** /projects/{project_id}/remove/me | Leave Project
*Project* | [**projectsRemoveLibraryFromProject**](docs/Project.md#projectsremovelibraryfromproject) | **DELETE** /projects/{project_id}/libraries/{library_id} | Remove Library From Project
*Project* | [**projectsUpdateProject**](docs/Project.md#projectsupdateproject) | **PATCH** /projects/{project_id} | Update Project
*Prompt* | [**promptsCreatePrompt**](docs/Prompt.md#promptscreateprompt) | **POST** /prompts/ | Create Prompt
*Prompt* | [**promptsDeletePrompt**](docs/Prompt.md#promptsdeleteprompt) | **DELETE** /prompts/{prompt_id} | Delete Prompt
*Prompt* | [**promptsUpdatePrompt**](docs/Prompt.md#promptsupdateprompt) | **PATCH** /prompts/{prompt_id} | Update Prompt
*Sharepoint* | [**integrationsGetItemInfo**](docs/Sharepoint.md#integrationsgetiteminfo) | **GET** /integrations/sharepoint/drives/{drive_id}/items/{drive_item_id} | Get Item Info
*Sharepoint* | [**integrationsListAllSites**](docs/Sharepoint.md#integrationslistallsites) | **GET** /integrations/sharepoint/sites | List All Sites
*Sharepoint* | [**integrationsListChildren**](docs/Sharepoint.md#integrationslistchildren) | **GET** /integrations/sharepoint/drives/{drive_id}/items/{drive_item_id}/children | List Children
*Sharepoint* | [**integrationsListDrives**](docs/Sharepoint.md#integrationslistdrives) | **GET** /integrations/sharepoint/sites/{site_id}/drives | List Drives
*User* | [**usersGetMyself**](docs/User.md#usersgetmyself) | **GET** /users/me | Get Myself


### Documentation For Models

 - [Assistant](docs/Assistant.md)
 - [AssistantIn](docs/AssistantIn.md)
 - [AssistantLibrary](docs/AssistantLibrary.md)
 - [AssistantMember](docs/AssistantMember.md)
 - [AssistantMembersIn](docs/AssistantMembersIn.md)
 - [AssistantTool](docs/AssistantTool.md)
 - [Document](docs/Document.md)
 - [HTTPValidationError](docs/HTTPValidationError.md)
 - [InvitationIn](docs/InvitationIn.md)
 - [InvitationOut](docs/InvitationOut.md)
 - [Library](docs/Library.md)
 - [LibraryIn](docs/LibraryIn.md)
 - [LibraryMember](docs/LibraryMember.md)
 - [LibraryMemberBulkDelete](docs/LibraryMemberBulkDelete.md)
 - [LibraryMemberBulkIn](docs/LibraryMemberBulkIn.md)
 - [LibraryMemberIn](docs/LibraryMemberIn.md)
 - [LibraryUpdateIn](docs/LibraryUpdateIn.md)
 - [LocationInner](docs/LocationInner.md)
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
 - [SharepointDriveModel](docs/SharepointDriveModel.md)
 - [SharepointFolderModel](docs/SharepointFolderModel.md)
 - [SharepointItemModel](docs/SharepointItemModel.md)
 - [SharepointSiteModel](docs/SharepointSiteModel.md)
 - [Translation](docs/Translation.md)
 - [UserOut](docs/UserOut.md)
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

