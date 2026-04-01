# neuland_hub_sdk.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accept_invitation_complete_invitations_accept_post**](DefaultApi.md#accept_invitation_complete_invitations_accept_post) | **POST** /invitations/accept | Accept Invitation Complete
[**accept_invitation_form_invitations_accept_get**](DefaultApi.md#accept_invitation_form_invitations_accept_get) | **GET** /invitations/accept | Accept Invitation Form
[**activate_user_users_user_id_activate_post**](DefaultApi.md#activate_user_users_user_id_activate_post) | **POST** /users/{user_id}/activate | Activate User
[**add_library_member_libraries_library_id_members_post**](DefaultApi.md#add_library_member_libraries_library_id_members_post) | **POST** /libraries/{library_id}/members | Add Library Member
[**add_library_to_assistant_assistants_assistant_id_libraries_library_id_post**](DefaultApi.md#add_library_to_assistant_assistants_assistant_id_libraries_library_id_post) | **POST** /assistants/{assistant_id}/libraries/{library_id} | Add Library To Assistant
[**add_library_to_chat_chats_chat_id_libraries_library_id_post**](DefaultApi.md#add_library_to_chat_chats_chat_id_libraries_library_id_post) | **POST** /chats/{chat_id}/libraries/{library_id} | Add Library To Chat
[**add_library_to_project_projects_project_id_libraries_library_id_post**](DefaultApi.md#add_library_to_project_projects_project_id_libraries_library_id_post) | **POST** /projects/{project_id}/libraries/{library_id} | Add Library To Project
[**add_library_to_tenants_tenants_tenant_id_libraries_library_id_post**](DefaultApi.md#add_library_to_tenants_tenants_tenant_id_libraries_library_id_post) | **POST** /tenants/{tenant_id}/libraries/{library_id} | Add Library To Tenants
[**add_tool_to_assistant_assistants_assistant_id_tools_tool_id_post**](DefaultApi.md#add_tool_to_assistant_assistants_assistant_id_tools_tool_id_post) | **POST** /assistants/{assistant_id}/tools/{tool_id} | Add Tool To Assistant
[**admin_document_detail_admin_documents_document_id_get**](DefaultApi.md#admin_document_detail_admin_documents_document_id_get) | **GET** /admin/documents/{document_id} | Admin Document Detail
[**admin_embedding_admin_embedding_get**](DefaultApi.md#admin_embedding_admin_embedding_get) | **GET** /admin/embedding | Admin Embedding
[**admin_files_admin_files_get**](DefaultApi.md#admin_files_admin_files_get) | **GET** /admin/files | Admin Files
[**admin_health_live_admin_health_live_get**](DefaultApi.md#admin_health_live_admin_health_live_get) | **GET** /admin/health-live | Admin Health Live
[**admin_llm_admin_llm_get**](DefaultApi.md#admin_llm_admin_llm_get) | **GET** /admin/llm | Admin Llm
[**admin_login_admin_login_post**](DefaultApi.md#admin_login_admin_login_post) | **POST** /admin/login | Admin Login
[**admin_login_page_admin_login_get**](DefaultApi.md#admin_login_page_admin_login_get) | **GET** /admin/login | Admin Login Page
[**admin_logout_get**](DefaultApi.md#admin_logout_get) | **GET** /admin/logout | Admin Logout
[**admin_logout_post**](DefaultApi.md#admin_logout_post) | **POST** /admin/logout | Admin Logout
[**admin_maintenance_admin_maintenance_get**](DefaultApi.md#admin_maintenance_admin_maintenance_get) | **GET** /admin/maintenance | Admin Maintenance
[**admin_overview_admin_overview_get**](DefaultApi.md#admin_overview_admin_overview_get) | **GET** /admin/overview | Admin Overview
[**admin_pipeline_documents_admin_pipeline_documents_get**](DefaultApi.md#admin_pipeline_documents_admin_pipeline_documents_get) | **GET** /admin/pipeline/documents | Admin Pipeline Documents
[**admin_pipeline_stages_admin_pipeline_stages_get**](DefaultApi.md#admin_pipeline_stages_admin_pipeline_stages_get) | **GET** /admin/pipeline/stages | Admin Pipeline Stages
[**admin_post_admin_post_get**](DefaultApi.md#admin_post_admin_post_get) | **GET** /admin/post | Admin Post
[**admin_postgres_admin_postgres_get**](DefaultApi.md#admin_postgres_admin_postgres_get) | **GET** /admin/postgres | Admin Postgres
[**admin_queues_admin_queues_get**](DefaultApi.md#admin_queues_admin_queues_get) | **GET** /admin/queues | Admin Queues
[**admin_report_detail_admin_reports_report_id_get**](DefaultApi.md#admin_report_detail_admin_reports_report_id_get) | **GET** /admin/reports/{report_id} | Admin Report Detail
[**admin_reports_admin_reports_get**](DefaultApi.md#admin_reports_admin_reports_get) | **GET** /admin/reports | Admin Reports
[**admin_root_admin_get**](DefaultApi.md#admin_root_admin_get) | **GET** /admin | Admin Root
[**admin_security_admin_security_get**](DefaultApi.md#admin_security_admin_security_get) | **GET** /admin/security | Admin Security
[**admin_tasks_metrics_admin_metrics_get**](DefaultApi.md#admin_tasks_metrics_admin_metrics_get) | **GET** /admin/metrics | Admin Tasks Metrics
[**admin_tool_call_detail_admin_tool_calls_tool_call_id_get**](DefaultApi.md#admin_tool_call_detail_admin_tool_calls_tool_call_id_get) | **GET** /admin/tool-calls/{tool_call_id} | Admin Tool Call Detail
[**admin_tool_detail_admin_tools_tool_id_get**](DefaultApi.md#admin_tool_detail_admin_tools_tool_id_get) | **GET** /admin/tools/{tool_id} | Admin Tool Detail
[**admin_trace_detail_admin_traces_trace_id_get**](DefaultApi.md#admin_trace_detail_admin_traces_trace_id_get) | **GET** /admin/traces/{trace_id} | Admin Trace Detail
[**admin_trace_lookup_admin_trace_get**](DefaultApi.md#admin_trace_lookup_admin_trace_get) | **GET** /admin/trace | Admin Trace Lookup
[**admin_traces_admin_traces_get**](DefaultApi.md#admin_traces_admin_traces_get) | **GET** /admin/traces | Admin Traces
[**admin_worker_detail_admin_workers_worker_name_get**](DefaultApi.md#admin_worker_detail_admin_workers_worker_name_get) | **GET** /admin/workers/{worker_name} | Admin Worker Detail
[**admin_workers_admin_workers_get**](DefaultApi.md#admin_workers_admin_workers_get) | **GET** /admin/workers | Admin Workers
[**azure_entra_callback_auth_callback_azure_entra_get**](DefaultApi.md#azure_entra_callback_auth_callback_azure_entra_get) | **GET** /auth/callback/azure-entra | Azure Entra Callback
[**cancel_message_chats_chat_id_cancel_post**](DefaultApi.md#cancel_message_chats_chat_id_cancel_post) | **POST** /chats/{chat_id}/cancel | Cancel Message
[**chat_trace_admin_chat_chat_id_get**](DefaultApi.md#chat_trace_admin_chat_chat_id_get) | **GET** /admin/chat/{chat_id} | Chat Trace
[**confirm_email_auth_confirm_email_get**](DefaultApi.md#confirm_email_auth_confirm_email_get) | **GET** /auth/confirm-email | Confirm Email
[**convert_message_messages_message_id_convert_get**](DefaultApi.md#convert_message_messages_message_id_convert_get) | **GET** /messages/{message_id}/convert | Convert Message
[**create_alert_alerts_post**](DefaultApi.md#create_alert_alerts_post) | **POST** /alerts/ | Create Alert
[**create_app_applications_post**](DefaultApi.md#create_app_applications_post) | **POST** /applications/ | Create App
[**create_assistant_assistants_post**](DefaultApi.md#create_assistant_assistants_post) | **POST** /assistants/ | Create Assistant
[**create_group_users_groups_post**](DefaultApi.md#create_group_users_groups_post) | **POST** /users/groups | Create Group
[**create_invitations_invitations_post**](DefaultApi.md#create_invitations_invitations_post) | **POST** /invitations/ | Create Invitations
[**create_key_api_key_post**](DefaultApi.md#create_key_api_key_post) | **POST** /api/key/ | Create Key
[**create_llm_model_llm_admin_models_post**](DefaultApi.md#create_llm_model_llm_admin_models_post) | **POST** /llm-admin/models | Create Llm Model
[**create_member_assistants_assistant_id_members_user_id_post**](DefaultApi.md#create_member_assistants_assistant_id_members_user_id_post) | **POST** /assistants/{assistant_id}/members/{user_id} | Create Member
[**create_member_projects_project_id_members_post**](DefaultApi.md#create_member_projects_project_id_members_post) | **POST** /projects/{project_id}/members | Create Member
[**create_message_messages_post**](DefaultApi.md#create_message_messages_post) | **POST** /messages/ | Create Message
[**create_project_projects_post**](DefaultApi.md#create_project_projects_post) | **POST** /projects/ | Create Project
[**create_prompt_prompts_post**](DefaultApi.md#create_prompt_prompts_post) | **POST** /prompts/ | Create Prompt
[**create_tarif_tarifs_post**](DefaultApi.md#create_tarif_tarifs_post) | **POST** /tarifs/ | Create Tarif
[**create_templates_post**](DefaultApi.md#create_templates_post) | **POST** /templates/ | Create
[**create_tenant_connector_tenants_tenant_id_connectors_connector_id_post**](DefaultApi.md#create_tenant_connector_tenants_tenant_id_connectors_connector_id_post) | **POST** /tenants/{tenant_id}/connectors/{connector_id} | Create Tenant Connector
[**create_tenant_tenants_post**](DefaultApi.md#create_tenant_tenants_post) | **POST** /tenants/ | Create Tenant
[**create_tenant_tool_tenants_tenant_id_tools_tool_id_post**](DefaultApi.md#create_tenant_tool_tenants_tenant_id_tools_tool_id_post) | **POST** /tenants/{tenant_id}/tools/{tool_id} | Create Tenant Tool
[**create_user_users_post**](DefaultApi.md#create_user_users_post) | **POST** /users/ | Create User
[**current_settings_current_get**](DefaultApi.md#current_settings_current_get) | **GET** /settings/current | Current
[**deactivate_documents_chats_chat_id_inactive_documents_post**](DefaultApi.md#deactivate_documents_chats_chat_id_inactive_documents_post) | **POST** /chats/{chat_id}/inactive-documents | Deactivate Documents
[**deactivate_user_users_user_id_deactivate_post**](DefaultApi.md#deactivate_user_users_user_id_deactivate_post) | **POST** /users/{user_id}/deactivate | Deactivate User
[**delete_alert_alerts_alert_id_delete**](DefaultApi.md#delete_alert_alerts_alert_id_delete) | **DELETE** /alerts/{alert_id} | Delete Alert
[**delete_app_applications_app_id_delete**](DefaultApi.md#delete_app_applications_app_id_delete) | **DELETE** /applications/{app_id} | Delete App
[**delete_assistant_assistants_assistant_id_delete**](DefaultApi.md#delete_assistant_assistants_assistant_id_delete) | **DELETE** /assistants/{assistant_id} | Delete Assistant
[**delete_chat_document_documents_document_id_delete**](DefaultApi.md#delete_chat_document_documents_document_id_delete) | **DELETE** /documents/{document_id} | Delete Chat Document
[**delete_group_users_groups_group_id_delete**](DefaultApi.md#delete_group_users_groups_group_id_delete) | **DELETE** /users/groups/{group_id} | Delete Group
[**delete_library_libraries_library_id_delete**](DefaultApi.md#delete_library_libraries_library_id_delete) | **DELETE** /libraries/{library_id} | Delete Library
[**delete_llm_model_llm_admin_models_model_id_delete**](DefaultApi.md#delete_llm_model_llm_admin_models_model_id_delete) | **DELETE** /llm-admin/models/{model_id} | Delete Llm Model
[**delete_member_assistants_assistant_id_members_user_id_delete**](DefaultApi.md#delete_member_assistants_assistant_id_members_user_id_delete) | **DELETE** /assistants/{assistant_id}/members/{user_id} | Delete Member
[**delete_member_projects_project_id_members_user_id_delete**](DefaultApi.md#delete_member_projects_project_id_members_user_id_delete) | **DELETE** /projects/{project_id}/members/{user_id} | Delete Member
[**delete_project_projects_project_id_delete**](DefaultApi.md#delete_project_projects_project_id_delete) | **DELETE** /projects/{project_id} | Delete Project
[**delete_prompt_prompts_prompt_id_delete**](DefaultApi.md#delete_prompt_prompts_prompt_id_delete) | **DELETE** /prompts/{prompt_id} | Delete Prompt
[**delete_tarif_tarifs_tarif_id_delete**](DefaultApi.md#delete_tarif_tarifs_tarif_id_delete) | **DELETE** /tarifs/{tarif_id} | Delete Tarif
[**delete_templates_template_id_delete**](DefaultApi.md#delete_templates_template_id_delete) | **DELETE** /templates/{template_id} | Delete
[**delete_tenant_connector_tenants_tenant_id_connectors_connector_id_delete**](DefaultApi.md#delete_tenant_connector_tenants_tenant_id_connectors_connector_id_delete) | **DELETE** /tenants/{tenant_id}/connectors/{connector_id} | Delete Tenant Connector
[**delete_tenant_tenants_tenant_id_delete**](DefaultApi.md#delete_tenant_tenants_tenant_id_delete) | **DELETE** /tenants/{tenant_id} | Delete Tenant
[**delete_tenant_tool_tenants_tenant_id_tools_tool_id_delete**](DefaultApi.md#delete_tenant_tool_tenants_tenant_id_tools_tool_id_delete) | **DELETE** /tenants/{tenant_id}/tools/{tool_id} | Delete Tenant Tool
[**delete_user_users_user_id_delete**](DefaultApi.md#delete_user_users_user_id_delete) | **DELETE** /users/{user_id} | Delete User
[**download_file_files_file_id_get**](DefaultApi.md#download_file_files_file_id_get) | **GET** /files/{file_id} | Download File
[**download_file_storage_path_get**](DefaultApi.md#download_file_storage_path_get) | **GET** /storage/{path} | Download File
[**exchange_token_auth_exchange_token_post**](DefaultApi.md#exchange_token_auth_exchange_token_post) | **POST** /auth/exchange/token | Exchange Token
[**get_cost_llm_cost_post**](DefaultApi.md#get_cost_llm_cost_post) | **POST** /llm/cost | Get Cost
[**get_current_tenant_tenants_current_get**](DefaultApi.md#get_current_tenant_tenants_current_get) | **GET** /tenants/current | Get Current Tenant
[**get_entra_groups_auth_entra_groups_get**](DefaultApi.md#get_entra_groups_auth_entra_groups_get) | **GET** /auth/entra/groups | Get Entra Groups
[**get_entra_scopes_auth_entra_scopes_get**](DefaultApi.md#get_entra_scopes_auth_entra_scopes_get) | **GET** /auth/entra/scopes | Get Entra Scopes
[**get_file_documents_document_id_get**](DefaultApi.md#get_file_documents_document_id_get) | **GET** /documents/{document_id} | Get File
[**get_item_info_integrations_sharepoint_drives_drive_id_items_drive_item_id_get**](DefaultApi.md#get_item_info_integrations_sharepoint_drives_drive_id_items_drive_item_id_get) | **GET** /integrations/sharepoint/drives/{drive_id}/items/{drive_item_id} | Get Item Info
[**get_myself_users_me_get**](DefaultApi.md#get_myself_users_me_get) | **GET** /users/me | Get Myself
[**get_supported_languages_simple_chat_languages_get**](DefaultApi.md#get_supported_languages_simple_chat_languages_get) | **GET** /simple_chat/languages | Get Supported Languages
[**get_theme_theme_get**](DefaultApi.md#get_theme_theme_get) | **GET** /theme | Get Theme
[**get_usage_costs_llm_services_cost_post**](DefaultApi.md#get_usage_costs_llm_services_cost_post) | **POST** /llm/services/cost | Get Usage Costs
[**get_user_info_integrations_sharepoint_me_get**](DefaultApi.md#get_user_info_integrations_sharepoint_me_get) | **GET** /integrations/sharepoint/me | Get User Info
[**grant_tenant_model_access_llm_admin_tenants_tenant_id_models_model_id_post**](DefaultApi.md#grant_tenant_model_access_llm_admin_tenants_tenant_id_models_model_id_post) | **POST** /llm-admin/tenants/{tenant_id}/models/{model_id} | Grant Tenant Model Access
[**import_documents_documents_import_post**](DefaultApi.md#import_documents_documents_import_post) | **POST** /documents/import | Import Documents
[**initiate_consent_auth_connectors_connector_id_consent_get**](DefaultApi.md#initiate_consent_auth_connectors_connector_id_consent_get) | **GET** /auth/connectors/{connector_id}/consent | Initiate Consent
[**is_connected_integrations_sharepoint_connected_get**](DefaultApi.md#is_connected_integrations_sharepoint_connected_get) | **GET** /integrations/sharepoint/connected | Is Connected
[**is_project_name_free_projects_available_get**](DefaultApi.md#is_project_name_free_projects_available_get) | **GET** /projects/available | Is Project Name Free
[**leave_assitant_assistants_assistant_id_remove_me_delete**](DefaultApi.md#leave_assitant_assistants_assistant_id_remove_me_delete) | **DELETE** /assistants/{assistant_id}/remove/me | Leave Assitant
[**leave_project_projects_project_id_remove_me_delete**](DefaultApi.md#leave_project_projects_project_id_remove_me_delete) | **DELETE** /projects/{project_id}/remove/me | Leave Project
[**list_all_sites_integrations_sharepoint_sites_get**](DefaultApi.md#list_all_sites_integrations_sharepoint_sites_get) | **GET** /integrations/sharepoint/sites | List All Sites
[**list_available_models_settings_models_get**](DefaultApi.md#list_available_models_settings_models_get) | **GET** /settings/models | List Available Models
[**list_children_integrations_sharepoint_drives_drive_id_items_drive_item_id_children_get**](DefaultApi.md#list_children_integrations_sharepoint_drives_drive_id_items_drive_item_id_children_get) | **GET** /integrations/sharepoint/drives/{drive_id}/items/{drive_item_id}/children | List Children
[**list_connector_status_auth_connectors_status_get**](DefaultApi.md#list_connector_status_auth_connectors_status_get) | **GET** /auth/connectors/status | List Connector Status
[**list_drives_integrations_sharepoint_sites_site_id_drives_get**](DefaultApi.md#list_drives_integrations_sharepoint_sites_site_id_drives_get) | **GET** /integrations/sharepoint/sites/{site_id}/drives | List Drives
[**llm_total_tokens_llm_tokens_post**](DefaultApi.md#llm_total_tokens_llm_tokens_post) | **POST** /llm/tokens | Llm Total Tokens
[**login_auth_token_post**](DefaultApi.md#login_auth_token_post) | **POST** /auth/token | Login
[**logout_auth_logout_post**](DefaultApi.md#logout_auth_logout_post) | **POST** /auth/logout | Logout
[**message_trace_admin_message_message_id_get**](DefaultApi.md#message_trace_admin_message_message_id_get) | **GET** /admin/message/{message_id} | Message Trace
[**new_library_libraries_post**](DefaultApi.md#new_library_libraries_post) | **POST** /libraries/ | New Library
[**oauth_callback_auth_connectors_callback_get**](DefaultApi.md#oauth_callback_auth_connectors_callback_get) | **GET** /auth/connectors/callback | Oauth Callback
[**post_check_post_post**](DefaultApi.md#post_check_post_post) | **POST** /post | Post Check
[**query_query_path_get**](DefaultApi.md#query_query_path_get) | **GET** /query/{path} | Query
[**query_rpc_query_rpc_path_get**](DefaultApi.md#query_rpc_query_rpc_path_get) | **GET** /query/rpc/{path} | Query Rpc
[**remove_chat_chats_chat_id_delete**](DefaultApi.md#remove_chat_chats_chat_id_delete) | **DELETE** /chats/{chat_id} | Remove Chat
[**remove_inactive_documents_chats_chat_id_inactive_documents_delete**](DefaultApi.md#remove_inactive_documents_chats_chat_id_inactive_documents_delete) | **DELETE** /chats/{chat_id}/inactive-documents | Remove Inactive Documents
[**remove_library_from_assistant_assistants_assistant_id_libraries_library_id_delete**](DefaultApi.md#remove_library_from_assistant_assistants_assistant_id_libraries_library_id_delete) | **DELETE** /assistants/{assistant_id}/libraries/{library_id} | Remove Library From Assistant
[**remove_library_from_chat_chats_chat_id_libraries_library_id_delete**](DefaultApi.md#remove_library_from_chat_chats_chat_id_libraries_library_id_delete) | **DELETE** /chats/{chat_id}/libraries/{library_id} | Remove Library From Chat
[**remove_library_from_project_projects_project_id_libraries_library_id_delete**](DefaultApi.md#remove_library_from_project_projects_project_id_libraries_library_id_delete) | **DELETE** /projects/{project_id}/libraries/{library_id} | Remove Library From Project
[**remove_library_member_libraries_library_id_members_member_id_delete**](DefaultApi.md#remove_library_member_libraries_library_id_members_member_id_delete) | **DELETE** /libraries/{library_id}/members/{member_id} | Remove Library Member
[**remove_tenant_library_member_tenants_tenant_id_libraries_library_id_delete**](DefaultApi.md#remove_tenant_library_member_tenants_tenant_id_libraries_library_id_delete) | **DELETE** /tenants/{tenant_id}/libraries/{library_id} | Remove Tenant Library Member
[**remove_tool_from_assistant_assistants_assistant_id_tools_tool_id_delete**](DefaultApi.md#remove_tool_from_assistant_assistants_assistant_id_tools_tool_id_delete) | **DELETE** /assistants/{assistant_id}/tools/{tool_id} | Remove Tool From Assistant
[**rephrase_message_messages_message_id_rephrase_get**](DefaultApi.md#rephrase_message_messages_message_id_rephrase_get) | **GET** /messages/{message_id}/rephrase | Rephrase Message
[**reports_bulk_action_admin_reports_bulk_post**](DefaultApi.md#reports_bulk_action_admin_reports_bulk_post) | **POST** /admin/reports/bulk | Reports Bulk Action
[**request_password_reset_auth_request_password_reset_post**](DefaultApi.md#request_password_reset_auth_request_password_reset_post) | **POST** /auth/request-password-reset | Request Password Reset
[**resend_invitation_invitations_invitation_id_resend_post**](DefaultApi.md#resend_invitation_invitations_invitation_id_resend_post) | **POST** /invitations/{invitation_id}/resend | Resend Invitation
[**reset_password_auth_reset_password_post**](DefaultApi.md#reset_password_auth_reset_password_post) | **POST** /auth/reset-password | Reset Password
[**reset_password_form_auth_reset_password_get**](DefaultApi.md#reset_password_form_auth_reset_password_get) | **GET** /auth/reset-password | Reset Password Form
[**reset_password_users_passwd_post**](DefaultApi.md#reset_password_users_passwd_post) | **POST** /users/passwd | Reset Password
[**retry_document_documents_document_id_retry_post**](DefaultApi.md#retry_document_documents_document_id_retry_post) | **POST** /documents/{document_id}/retry | Retry Document
[**revoke_api_key_api_key_revoke_api_key_id_patch**](DefaultApi.md#revoke_api_key_api_key_revoke_api_key_id_patch) | **PATCH** /api/key/revoke/{api_key_id} | Revoke Api Key
[**revoke_consent_auth_connectors_connector_id_consent_delete**](DefaultApi.md#revoke_consent_auth_connectors_connector_id_consent_delete) | **DELETE** /auth/connectors/{connector_id}/consent | Revoke Consent
[**revoke_invitation_invitations_invitation_id_revoke_post**](DefaultApi.md#revoke_invitation_invitations_invitation_id_revoke_post) | **POST** /invitations/{invitation_id}/revoke | Revoke Invitation
[**revoke_tenant_model_access_llm_admin_tenants_tenant_id_models_model_id_delete**](DefaultApi.md#revoke_tenant_model_access_llm_admin_tenants_tenant_id_models_model_id_delete) | **DELETE** /llm-admin/tenants/{tenant_id}/models/{model_id} | Revoke Tenant Model Access
[**root_get**](DefaultApi.md#root_get) | **GET** / | Root
[**send_email_confirmation_auth_send_email_confirmation_post**](DefaultApi.md#send_email_confirmation_auth_send_email_confirmation_post) | **POST** /auth/send-email-confirmation | Send Email Confirmation
[**simple_chat_simple_chat_post**](DefaultApi.md#simple_chat_simple_chat_post) | **POST** /simple_chat/ | Simple Chat
[**stat_stat_get**](DefaultApi.md#stat_stat_get) | **GET** /stat | Stat
[**submit_assistant_assistants_submit_post**](DefaultApi.md#submit_assistant_assistants_submit_post) | **POST** /assistants/submit | Submit Assistant
[**submit_message_messages_submit_post**](DefaultApi.md#submit_message_messages_submit_post) | **POST** /messages/submit | Submit Message
[**summerize_chat_chats_chat_id_summary_get**](DefaultApi.md#summerize_chat_chats_chat_id_summary_get) | **GET** /chats/{chat_id}/summary | Summerize Chat
[**translate_message_messages_message_id_translate_get**](DefaultApi.md#translate_message_messages_message_id_translate_get) | **GET** /messages/{message_id}/translate | Translate Message
[**unimport_documents_documents_import_delete**](DefaultApi.md#unimport_documents_documents_import_delete) | **DELETE** /documents/import | Unimport Documents
[**update_alert_alerts_alert_id_patch**](DefaultApi.md#update_alert_alerts_alert_id_patch) | **PATCH** /alerts/{alert_id} | Update Alert
[**update_app_applications_app_id_patch**](DefaultApi.md#update_app_applications_app_id_patch) | **PATCH** /applications/{app_id} | Update App
[**update_assistant_assistants_assistant_id_patch**](DefaultApi.md#update_assistant_assistants_assistant_id_patch) | **PATCH** /assistants/{assistant_id} | Update Assistant
[**update_chat_chats_chat_id_patch**](DefaultApi.md#update_chat_chats_chat_id_patch) | **PATCH** /chats/{chat_id} | Update Chat
[**update_chat_tool_settings_chats_chat_id_tools_tool_id_put**](DefaultApi.md#update_chat_tool_settings_chats_chat_id_tools_tool_id_put) | **PUT** /chats/{chat_id}/tools/{tool_id} | Update Chat Tool Settings
[**update_connector_auth_connectors_connector_id_patch**](DefaultApi.md#update_connector_auth_connectors_connector_id_patch) | **PATCH** /auth/connectors/{connector_id} | Update Connector
[**update_current_settings_settings_current_patch**](DefaultApi.md#update_current_settings_settings_current_patch) | **PATCH** /settings/current | Update Current Settings
[**update_current_tenant_tenants_current_patch**](DefaultApi.md#update_current_tenant_tenants_current_patch) | **PATCH** /tenants/current | Update Current Tenant
[**update_group_membership_applications_group_access_put**](DefaultApi.md#update_group_membership_applications_group_access_put) | **PUT** /applications/group/access | Update Group Membership
[**update_group_users_groups_group_id_patch**](DefaultApi.md#update_group_users_groups_group_id_patch) | **PATCH** /users/groups/{group_id} | Update Group
[**update_library_libraries_library_id_patch**](DefaultApi.md#update_library_libraries_library_id_patch) | **PATCH** /libraries/{library_id} | Update Library
[**update_llm_model_llm_admin_models_model_id_patch**](DefaultApi.md#update_llm_model_llm_admin_models_model_id_patch) | **PATCH** /llm-admin/models/{model_id} | Update Llm Model
[**update_oauth_client_auth_connectors_oauth_clients_oauth_client_id_patch**](DefaultApi.md#update_oauth_client_auth_connectors_oauth_clients_oauth_client_id_patch) | **PATCH** /auth/connectors/oauth-clients/{oauth_client_id} | Update Oauth Client
[**update_project_projects_project_id_patch**](DefaultApi.md#update_project_projects_project_id_patch) | **PATCH** /projects/{project_id} | Update Project
[**update_prompt_prompts_prompt_id_patch**](DefaultApi.md#update_prompt_prompts_prompt_id_patch) | **PATCH** /prompts/{prompt_id} | Update Prompt
[**update_settings_settings_settings_id_patch**](DefaultApi.md#update_settings_settings_settings_id_patch) | **PATCH** /settings/{settings_id} | Update Settings
[**update_system_settings_admin_system_settings_update_post**](DefaultApi.md#update_system_settings_admin_system_settings_update_post) | **POST** /admin/system-settings/update | Update System Settings
[**update_tarif_tarifs_tarif_id_patch**](DefaultApi.md#update_tarif_tarifs_tarif_id_patch) | **PATCH** /tarifs/{tarif_id} | Update Tarif
[**update_templates_template_id_patch**](DefaultApi.md#update_templates_template_id_patch) | **PATCH** /templates/{template_id} | Update
[**update_tenant_tenants_tenant_id_patch**](DefaultApi.md#update_tenant_tenants_tenant_id_patch) | **PATCH** /tenants/{tenant_id} | Update Tenant
[**update_tool_tools_tool_id_patch**](DefaultApi.md#update_tool_tools_tool_id_patch) | **PATCH** /tools/{tool_id} | Update Tool
[**update_user_membership_applications_user_access_put**](DefaultApi.md#update_user_membership_applications_user_access_put) | **PUT** /applications/user/access | Update User Membership
[**update_user_users_user_id_patch**](DefaultApi.md#update_user_users_user_id_patch) | **PATCH** /users/{user_id} | Update User
[**upload_documents_documents_post**](DefaultApi.md#upload_documents_documents_post) | **POST** /documents/ | Upload Documents
[**upsert_members_users_members_group_id_put**](DefaultApi.md#upsert_members_users_members_group_id_put) | **PUT** /users/members/{group_id} | Upsert Members
[**upsert_my_preferences_users_me_preferences_patch**](DefaultApi.md#upsert_my_preferences_users_me_preferences_patch) | **PATCH** /users/me/preferences | Upsert My Preferences
[**version_version_get**](DefaultApi.md#version_version_get) | **GET** /version | Version


# **accept_invitation_complete_invitations_accept_post**
> object accept_invitation_complete_invitations_accept_post(token)

Accept Invitation Complete

Complete invitation acceptance and create user account.

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    token = 'token_example' # str | Invitation JWT token

    try:
        # Accept Invitation Complete
        api_response = api_instance.accept_invitation_complete_invitations_accept_post(token)
        print("The response of DefaultApi->accept_invitation_complete_invitations_accept_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->accept_invitation_complete_invitations_accept_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Invitation JWT token | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accept_invitation_form_invitations_accept_get**
> str accept_invitation_form_invitations_accept_get(token)

Accept Invitation Form

Fallback HTML form for accepting invitation when no frontend is available.

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    token = 'token_example' # str | Invitation JWT token

    try:
        # Accept Invitation Form
        api_response = api_instance.accept_invitation_form_invitations_accept_get(token)
        print("The response of DefaultApi->accept_invitation_form_invitations_accept_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->accept_invitation_form_invitations_accept_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Invitation JWT token | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **activate_user_users_user_id_activate_post**
> UserOut activate_user_users_user_id_activate_post(user_id, cookie_name=cookie_name, tenant_id=tenant_id)

Activate User

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.user_out import UserOut
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    user_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Activate User
        api_response = api_instance.activate_user_users_user_id_activate_post(user_id, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of DefaultApi->activate_user_users_user_id_activate_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->activate_user_users_user_id_activate_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

[**UserOut**](UserOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_library_member_libraries_library_id_members_post**
> LibraryMember add_library_member_libraries_library_id_members_post(library_id, library_member_in, cookie_name=cookie_name)

Add Library Member

Adds a new member to the library

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.library_member import LibraryMember
from neuland_hub_sdk.models.library_member_in import LibraryMemberIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    library_id = 56 # int | 
    library_member_in = neuland_hub_sdk.LibraryMemberIn() # LibraryMemberIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Add Library Member
        api_response = api_instance.add_library_member_libraries_library_id_members_post(library_id, library_member_in, cookie_name=cookie_name)
        print("The response of DefaultApi->add_library_member_libraries_library_id_members_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->add_library_member_libraries_library_id_members_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_id** | **int**|  | 
 **library_member_in** | [**LibraryMemberIn**](LibraryMemberIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**LibraryMember**](LibraryMember.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_library_to_assistant_assistants_assistant_id_libraries_library_id_post**
> AssistantLibrary add_library_to_assistant_assistants_assistant_id_libraries_library_id_post(assistant_id, library_id, cookie_name=cookie_name)

Add Library To Assistant

Enables a library for a assistant by creating a new association

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.assistant_library import AssistantLibrary
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    assistant_id = 56 # int | 
    library_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Add Library To Assistant
        api_response = api_instance.add_library_to_assistant_assistants_assistant_id_libraries_library_id_post(assistant_id, library_id, cookie_name=cookie_name)
        print("The response of DefaultApi->add_library_to_assistant_assistants_assistant_id_libraries_library_id_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->add_library_to_assistant_assistants_assistant_id_libraries_library_id_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
 **library_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**AssistantLibrary**](AssistantLibrary.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_library_to_chat_chats_chat_id_libraries_library_id_post**
> ChatLibrary add_library_to_chat_chats_chat_id_libraries_library_id_post(chat_id, library_id, cookie_name=cookie_name)

Add Library To Chat

Enables a library in a chat by creating a new association

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.chat_library import ChatLibrary
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    chat_id = 56 # int | 
    library_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Add Library To Chat
        api_response = api_instance.add_library_to_chat_chats_chat_id_libraries_library_id_post(chat_id, library_id, cookie_name=cookie_name)
        print("The response of DefaultApi->add_library_to_chat_chats_chat_id_libraries_library_id_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->add_library_to_chat_chats_chat_id_libraries_library_id_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **int**|  | 
 **library_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**ChatLibrary**](ChatLibrary.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_library_to_project_projects_project_id_libraries_library_id_post**
> ProjectLibrary add_library_to_project_projects_project_id_libraries_library_id_post(project_id, library_id, cookie_name=cookie_name)

Add Library To Project

Enables a library for a project by creating an association

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.project_library import ProjectLibrary
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    project_id = 56 # int | 
    library_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Add Library To Project
        api_response = api_instance.add_library_to_project_projects_project_id_libraries_library_id_post(project_id, library_id, cookie_name=cookie_name)
        print("The response of DefaultApi->add_library_to_project_projects_project_id_libraries_library_id_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->add_library_to_project_projects_project_id_libraries_library_id_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **int**|  | 
 **library_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**ProjectLibrary**](ProjectLibrary.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_library_to_tenants_tenants_tenant_id_libraries_library_id_post**
> object add_library_to_tenants_tenants_tenant_id_libraries_library_id_post(library_id, tenant_id, cookie_name=cookie_name)

Add Library To Tenants

Assign library to the tenant by superadmin or to one entire tenancy by admin

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    library_id = 56 # int | 
    tenant_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Add Library To Tenants
        api_response = api_instance.add_library_to_tenants_tenants_tenant_id_libraries_library_id_post(library_id, tenant_id, cookie_name=cookie_name)
        print("The response of DefaultApi->add_library_to_tenants_tenants_tenant_id_libraries_library_id_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->add_library_to_tenants_tenants_tenant_id_libraries_library_id_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_id** | **int**|  | 
 **tenant_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_tool_to_assistant_assistants_assistant_id_tools_tool_id_post**
> AssistantTool add_tool_to_assistant_assistants_assistant_id_tools_tool_id_post(assistant_id, tool_id, cookie_name=cookie_name)

Add Tool To Assistant

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.assistant_tool import AssistantTool
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    assistant_id = 56 # int | 
    tool_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Add Tool To Assistant
        api_response = api_instance.add_tool_to_assistant_assistants_assistant_id_tools_tool_id_post(assistant_id, tool_id, cookie_name=cookie_name)
        print("The response of DefaultApi->add_tool_to_assistant_assistants_assistant_id_tools_tool_id_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->add_tool_to_assistant_assistants_assistant_id_tools_tool_id_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
 **tool_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**AssistantTool**](AssistantTool.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_document_detail_admin_documents_document_id_get**
> str admin_document_detail_admin_documents_document_id_get(document_id)

Admin Document Detail

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    document_id = 56 # int | 

    try:
        # Admin Document Detail
        api_response = api_instance.admin_document_detail_admin_documents_document_id_get(document_id)
        print("The response of DefaultApi->admin_document_detail_admin_documents_document_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_document_detail_admin_documents_document_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **int**|  | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_embedding_admin_embedding_get**
> str admin_embedding_admin_embedding_get()

Admin Embedding

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)

    try:
        # Admin Embedding
        api_response = api_instance.admin_embedding_admin_embedding_get()
        print("The response of DefaultApi->admin_embedding_admin_embedding_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_embedding_admin_embedding_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_files_admin_files_get**
> str admin_files_admin_files_get()

Admin Files

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)

    try:
        # Admin Files
        api_response = api_instance.admin_files_admin_files_get()
        print("The response of DefaultApi->admin_files_admin_files_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_files_admin_files_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_health_live_admin_health_live_get**
> str admin_health_live_admin_health_live_get()

Admin Health Live

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)

    try:
        # Admin Health Live
        api_response = api_instance.admin_health_live_admin_health_live_get()
        print("The response of DefaultApi->admin_health_live_admin_health_live_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_health_live_admin_health_live_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_llm_admin_llm_get**
> str admin_llm_admin_llm_get()

Admin Llm

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)

    try:
        # Admin Llm
        api_response = api_instance.admin_llm_admin_llm_get()
        print("The response of DefaultApi->admin_llm_admin_llm_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_llm_admin_llm_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_login_admin_login_post**
> object admin_login_admin_login_post(username, password)

Admin Login

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    username = 'username_example' # str | 
    password = 'password_example' # str | 

    try:
        # Admin Login
        api_response = api_instance.admin_login_admin_login_post(username, password)
        print("The response of DefaultApi->admin_login_admin_login_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_login_admin_login_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**|  | 
 **password** | **str**|  | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_login_page_admin_login_get**
> str admin_login_page_admin_login_get()

Admin Login Page

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)

    try:
        # Admin Login Page
        api_response = api_instance.admin_login_page_admin_login_get()
        print("The response of DefaultApi->admin_login_page_admin_login_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_login_page_admin_login_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_logout_get**
> object admin_logout_get(admin_token=admin_token)

Admin Logout

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    admin_token = 'admin_token_example' # str |  (optional)

    try:
        # Admin Logout
        api_response = api_instance.admin_logout_get(admin_token=admin_token)
        print("The response of DefaultApi->admin_logout_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_logout_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **admin_token** | **str**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_logout_post**
> object admin_logout_post(admin_token=admin_token)

Admin Logout

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    admin_token = 'admin_token_example' # str |  (optional)

    try:
        # Admin Logout
        api_response = api_instance.admin_logout_post(admin_token=admin_token)
        print("The response of DefaultApi->admin_logout_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_logout_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **admin_token** | **str**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_maintenance_admin_maintenance_get**
> str admin_maintenance_admin_maintenance_get(page=page, ipp=ipp, q=q, sort=sort, order=order)

Admin Maintenance

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    page = 1 # int |  (optional) (default to 1)
    ipp = 25 # int |  (optional) (default to 25)
    q = '' # str |  (optional) (default to '')
    sort = '' # str |  (optional) (default to '')
    order = '' # str |  (optional) (default to '')

    try:
        # Admin Maintenance
        api_response = api_instance.admin_maintenance_admin_maintenance_get(page=page, ipp=ipp, q=q, sort=sort, order=order)
        print("The response of DefaultApi->admin_maintenance_admin_maintenance_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_maintenance_admin_maintenance_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**|  | [optional] [default to 1]
 **ipp** | **int**|  | [optional] [default to 25]
 **q** | **str**|  | [optional] [default to &#39;&#39;]
 **sort** | **str**|  | [optional] [default to &#39;&#39;]
 **order** | **str**|  | [optional] [default to &#39;&#39;]

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_overview_admin_overview_get**
> str admin_overview_admin_overview_get()

Admin Overview

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)

    try:
        # Admin Overview
        api_response = api_instance.admin_overview_admin_overview_get()
        print("The response of DefaultApi->admin_overview_admin_overview_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_overview_admin_overview_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_pipeline_documents_admin_pipeline_documents_get**
> str admin_pipeline_documents_admin_pipeline_documents_get(state=state, stage=stage, user_id=user_id, library_id=library_id, active_only=active_only, failed_only=failed_only, page=page, ipp=ipp, q=q, sort=sort, order=order)

Admin Pipeline Documents

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    state = '' # str |  (optional) (default to '')
    stage = '' # str |  (optional) (default to '')
    user_id = 56 # int |  (optional)
    library_id = 56 # int |  (optional)
    active_only = '' # str |  (optional) (default to '')
    failed_only = '' # str |  (optional) (default to '')
    page = 1 # int |  (optional) (default to 1)
    ipp = 25 # int |  (optional) (default to 25)
    q = '' # str |  (optional) (default to '')
    sort = '' # str |  (optional) (default to '')
    order = '' # str |  (optional) (default to '')

    try:
        # Admin Pipeline Documents
        api_response = api_instance.admin_pipeline_documents_admin_pipeline_documents_get(state=state, stage=stage, user_id=user_id, library_id=library_id, active_only=active_only, failed_only=failed_only, page=page, ipp=ipp, q=q, sort=sort, order=order)
        print("The response of DefaultApi->admin_pipeline_documents_admin_pipeline_documents_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_pipeline_documents_admin_pipeline_documents_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **state** | **str**|  | [optional] [default to &#39;&#39;]
 **stage** | **str**|  | [optional] [default to &#39;&#39;]
 **user_id** | **int**|  | [optional] 
 **library_id** | **int**|  | [optional] 
 **active_only** | **str**|  | [optional] [default to &#39;&#39;]
 **failed_only** | **str**|  | [optional] [default to &#39;&#39;]
 **page** | **int**|  | [optional] [default to 1]
 **ipp** | **int**|  | [optional] [default to 25]
 **q** | **str**|  | [optional] [default to &#39;&#39;]
 **sort** | **str**|  | [optional] [default to &#39;&#39;]
 **order** | **str**|  | [optional] [default to &#39;&#39;]

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_pipeline_stages_admin_pipeline_stages_get**
> str admin_pipeline_stages_admin_pipeline_stages_get(page=page, ipp=ipp, q=q, sort=sort, order=order)

Admin Pipeline Stages

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    page = 1 # int |  (optional) (default to 1)
    ipp = 25 # int |  (optional) (default to 25)
    q = '' # str |  (optional) (default to '')
    sort = '' # str |  (optional) (default to '')
    order = '' # str |  (optional) (default to '')

    try:
        # Admin Pipeline Stages
        api_response = api_instance.admin_pipeline_stages_admin_pipeline_stages_get(page=page, ipp=ipp, q=q, sort=sort, order=order)
        print("The response of DefaultApi->admin_pipeline_stages_admin_pipeline_stages_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_pipeline_stages_admin_pipeline_stages_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**|  | [optional] [default to 1]
 **ipp** | **int**|  | [optional] [default to 25]
 **q** | **str**|  | [optional] [default to &#39;&#39;]
 **sort** | **str**|  | [optional] [default to &#39;&#39;]
 **order** | **str**|  | [optional] [default to &#39;&#39;]

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_post_admin_post_get**
> str admin_post_admin_post_get()

Admin Post

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)

    try:
        # Admin Post
        api_response = api_instance.admin_post_admin_post_get()
        print("The response of DefaultApi->admin_post_admin_post_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_post_admin_post_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_postgres_admin_postgres_get**
> str admin_postgres_admin_postgres_get()

Admin Postgres

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)

    try:
        # Admin Postgres
        api_response = api_instance.admin_postgres_admin_postgres_get()
        print("The response of DefaultApi->admin_postgres_admin_postgres_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_postgres_admin_postgres_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_queues_admin_queues_get**
> str admin_queues_admin_queues_get()

Admin Queues

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)

    try:
        # Admin Queues
        api_response = api_instance.admin_queues_admin_queues_get()
        print("The response of DefaultApi->admin_queues_admin_queues_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_queues_admin_queues_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_report_detail_admin_reports_report_id_get**
> str admin_report_detail_admin_reports_report_id_get(report_id)

Admin Report Detail

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    report_id = 'report_id_example' # str | 

    try:
        # Admin Report Detail
        api_response = api_instance.admin_report_detail_admin_reports_report_id_get(report_id)
        print("The response of DefaultApi->admin_report_detail_admin_reports_report_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_report_detail_admin_reports_report_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **report_id** | **str**|  | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_reports_admin_reports_get**
> str admin_reports_admin_reports_get(page=page, ipp=ipp, q=q, sort=sort, order=order)

Admin Reports

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    page = 1 # int |  (optional) (default to 1)
    ipp = 25 # int |  (optional) (default to 25)
    q = '' # str |  (optional) (default to '')
    sort = '' # str |  (optional) (default to '')
    order = '' # str |  (optional) (default to '')

    try:
        # Admin Reports
        api_response = api_instance.admin_reports_admin_reports_get(page=page, ipp=ipp, q=q, sort=sort, order=order)
        print("The response of DefaultApi->admin_reports_admin_reports_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_reports_admin_reports_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**|  | [optional] [default to 1]
 **ipp** | **int**|  | [optional] [default to 25]
 **q** | **str**|  | [optional] [default to &#39;&#39;]
 **sort** | **str**|  | [optional] [default to &#39;&#39;]
 **order** | **str**|  | [optional] [default to &#39;&#39;]

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_root_admin_get**
> str admin_root_admin_get()

Admin Root

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)

    try:
        # Admin Root
        api_response = api_instance.admin_root_admin_get()
        print("The response of DefaultApi->admin_root_admin_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_root_admin_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_security_admin_security_get**
> str admin_security_admin_security_get()

Admin Security

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)

    try:
        # Admin Security
        api_response = api_instance.admin_security_admin_security_get()
        print("The response of DefaultApi->admin_security_admin_security_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_security_admin_security_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_tasks_metrics_admin_metrics_get**
> str admin_tasks_metrics_admin_metrics_get(page=page, ipp=ipp, q=q, sort=sort, order=order)

Admin Tasks Metrics

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    page = 1 # int |  (optional) (default to 1)
    ipp = 25 # int |  (optional) (default to 25)
    q = '' # str |  (optional) (default to '')
    sort = '' # str |  (optional) (default to '')
    order = '' # str |  (optional) (default to '')

    try:
        # Admin Tasks Metrics
        api_response = api_instance.admin_tasks_metrics_admin_metrics_get(page=page, ipp=ipp, q=q, sort=sort, order=order)
        print("The response of DefaultApi->admin_tasks_metrics_admin_metrics_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_tasks_metrics_admin_metrics_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**|  | [optional] [default to 1]
 **ipp** | **int**|  | [optional] [default to 25]
 **q** | **str**|  | [optional] [default to &#39;&#39;]
 **sort** | **str**|  | [optional] [default to &#39;&#39;]
 **order** | **str**|  | [optional] [default to &#39;&#39;]

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_tool_call_detail_admin_tool_calls_tool_call_id_get**
> str admin_tool_call_detail_admin_tool_calls_tool_call_id_get(tool_call_id)

Admin Tool Call Detail

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    tool_call_id = 56 # int | 

    try:
        # Admin Tool Call Detail
        api_response = api_instance.admin_tool_call_detail_admin_tool_calls_tool_call_id_get(tool_call_id)
        print("The response of DefaultApi->admin_tool_call_detail_admin_tool_calls_tool_call_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_tool_call_detail_admin_tool_calls_tool_call_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tool_call_id** | **int**|  | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_tool_detail_admin_tools_tool_id_get**
> str admin_tool_detail_admin_tools_tool_id_get(tool_id)

Admin Tool Detail

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    tool_id = 56 # int | 

    try:
        # Admin Tool Detail
        api_response = api_instance.admin_tool_detail_admin_tools_tool_id_get(tool_id)
        print("The response of DefaultApi->admin_tool_detail_admin_tools_tool_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_tool_detail_admin_tools_tool_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tool_id** | **int**|  | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_trace_detail_admin_traces_trace_id_get**
> str admin_trace_detail_admin_traces_trace_id_get(trace_id)

Admin Trace Detail

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    trace_id = 56 # int | 

    try:
        # Admin Trace Detail
        api_response = api_instance.admin_trace_detail_admin_traces_trace_id_get(trace_id)
        print("The response of DefaultApi->admin_trace_detail_admin_traces_trace_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_trace_detail_admin_traces_trace_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trace_id** | **int**|  | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_trace_lookup_admin_trace_get**
> str admin_trace_lookup_admin_trace_get(chat_id=chat_id, message_id=message_id)

Admin Trace Lookup

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    chat_id = 56 # int |  (optional)
    message_id = 56 # int |  (optional)

    try:
        # Admin Trace Lookup
        api_response = api_instance.admin_trace_lookup_admin_trace_get(chat_id=chat_id, message_id=message_id)
        print("The response of DefaultApi->admin_trace_lookup_admin_trace_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_trace_lookup_admin_trace_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **int**|  | [optional] 
 **message_id** | **int**|  | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_traces_admin_traces_get**
> str admin_traces_admin_traces_get(page=page, ipp=ipp, q=q, kind=kind, stale_only=stale_only, correlation_id=correlation_id, sort=sort, order=order)

Admin Traces

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    page = 1 # int |  (optional) (default to 1)
    ipp = 25 # int |  (optional) (default to 25)
    q = '' # str |  (optional) (default to '')
    kind = '' # str |  (optional) (default to '')
    stale_only = '' # str |  (optional) (default to '')
    correlation_id = '' # str |  (optional) (default to '')
    sort = '' # str |  (optional) (default to '')
    order = '' # str |  (optional) (default to '')

    try:
        # Admin Traces
        api_response = api_instance.admin_traces_admin_traces_get(page=page, ipp=ipp, q=q, kind=kind, stale_only=stale_only, correlation_id=correlation_id, sort=sort, order=order)
        print("The response of DefaultApi->admin_traces_admin_traces_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_traces_admin_traces_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**|  | [optional] [default to 1]
 **ipp** | **int**|  | [optional] [default to 25]
 **q** | **str**|  | [optional] [default to &#39;&#39;]
 **kind** | **str**|  | [optional] [default to &#39;&#39;]
 **stale_only** | **str**|  | [optional] [default to &#39;&#39;]
 **correlation_id** | **str**|  | [optional] [default to &#39;&#39;]
 **sort** | **str**|  | [optional] [default to &#39;&#39;]
 **order** | **str**|  | [optional] [default to &#39;&#39;]

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_worker_detail_admin_workers_worker_name_get**
> str admin_worker_detail_admin_workers_worker_name_get(worker_name)

Admin Worker Detail

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    worker_name = 'worker_name_example' # str | 

    try:
        # Admin Worker Detail
        api_response = api_instance.admin_worker_detail_admin_workers_worker_name_get(worker_name)
        print("The response of DefaultApi->admin_worker_detail_admin_workers_worker_name_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_worker_detail_admin_workers_worker_name_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **worker_name** | **str**|  | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_workers_admin_workers_get**
> str admin_workers_admin_workers_get()

Admin Workers

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)

    try:
        # Admin Workers
        api_response = api_instance.admin_workers_admin_workers_get()
        print("The response of DefaultApi->admin_workers_admin_workers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->admin_workers_admin_workers_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **azure_entra_callback_auth_callback_azure_entra_get**
> Dict[str, object] azure_entra_callback_auth_callback_azure_entra_get(code, user_agent=user_agent, x_real_ip=x_real_ip, x_forwarded_for=x_forwarded_for, x_client_ip=x_client_ip)

Azure Entra Callback

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    code = 'code_example' # str | Authorization code from Azure Entra ID
    user_agent = 'user_agent_example' # str |  (optional)
    x_real_ip = 'x_real_ip_example' # str |  (optional)
    x_forwarded_for = 'x_forwarded_for_example' # str |  (optional)
    x_client_ip = 'x_client_ip_example' # str |  (optional)

    try:
        # Azure Entra Callback
        api_response = api_instance.azure_entra_callback_auth_callback_azure_entra_get(code, user_agent=user_agent, x_real_ip=x_real_ip, x_forwarded_for=x_forwarded_for, x_client_ip=x_client_ip)
        print("The response of DefaultApi->azure_entra_callback_auth_callback_azure_entra_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->azure_entra_callback_auth_callback_azure_entra_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Authorization code from Azure Entra ID | 
 **user_agent** | **str**|  | [optional] 
 **x_real_ip** | **str**|  | [optional] 
 **x_forwarded_for** | **str**|  | [optional] 
 **x_client_ip** | **str**|  | [optional] 

### Return type

**Dict[str, object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancel_message_chats_chat_id_cancel_post**
> object cancel_message_chats_chat_id_cancel_post(chat_id, cookie_name=cookie_name)

Cancel Message

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    chat_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Cancel Message
        api_response = api_instance.cancel_message_chats_chat_id_cancel_post(chat_id, cookie_name=cookie_name)
        print("The response of DefaultApi->cancel_message_chats_chat_id_cancel_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->cancel_message_chats_chat_id_cancel_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chat_trace_admin_chat_chat_id_get**
> str chat_trace_admin_chat_chat_id_get(chat_id)

Chat Trace

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    chat_id = 56 # int | 

    try:
        # Chat Trace
        api_response = api_instance.chat_trace_admin_chat_chat_id_get(chat_id)
        print("The response of DefaultApi->chat_trace_admin_chat_chat_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->chat_trace_admin_chat_chat_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **int**|  | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **confirm_email_auth_confirm_email_get**
> object confirm_email_auth_confirm_email_get(token, accept=accept)

Confirm Email

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    token = 'token_example' # str | JWT token from confirmation email
    accept = 'accept_example' # str |  (optional)

    try:
        # Confirm Email
        api_response = api_instance.confirm_email_auth_confirm_email_get(token, accept=accept)
        print("The response of DefaultApi->confirm_email_auth_confirm_email_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->confirm_email_auth_confirm_email_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token from confirmation email | 
 **accept** | **str**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **convert_message_messages_message_id_convert_get**
> object convert_message_messages_message_id_convert_get(message_id, format, cookie_name=cookie_name)

Convert Message

Convert a message to various document formats.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    message_id = 56 # int | 
    format = neuland_hub_sdk.OutputFormat() # OutputFormat | Output format
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Convert Message
        api_response = api_instance.convert_message_messages_message_id_convert_get(message_id, format, cookie_name=cookie_name)
        print("The response of DefaultApi->convert_message_messages_message_id_convert_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->convert_message_messages_message_id_convert_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message_id** | **int**|  | 
 **format** | [**OutputFormat**](.md)| Output format | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_alert_alerts_post**
> BudgetAlert create_alert_alerts_post(budget_alert_request, cookie_name=cookie_name, tenant_id=tenant_id)

Create Alert

Create a new budget alert with threshold and current spend.
Only Admins can do it.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.budget_alert import BudgetAlert
from neuland_hub_sdk.models.budget_alert_request import BudgetAlertRequest
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    budget_alert_request = neuland_hub_sdk.BudgetAlertRequest() # BudgetAlertRequest | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Create Alert
        api_response = api_instance.create_alert_alerts_post(budget_alert_request, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of DefaultApi->create_alert_alerts_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_alert_alerts_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budget_alert_request** | [**BudgetAlertRequest**](BudgetAlertRequest.md)|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

[**BudgetAlert**](BudgetAlert.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_app_applications_post**
> object create_app_applications_post(application_in, cookie_name=cookie_name)

Create App

Create a new application

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.application_in import ApplicationIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    application_in = neuland_hub_sdk.ApplicationIn() # ApplicationIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create App
        api_response = api_instance.create_app_applications_post(application_in, cookie_name=cookie_name)
        print("The response of DefaultApi->create_app_applications_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_app_applications_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_in** | [**ApplicationIn**](ApplicationIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_assistant_assistants_post**
> Assistant create_assistant_assistants_post(assistant_in, cookie_name=cookie_name)

Create Assistant

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.assistant import Assistant
from neuland_hub_sdk.models.assistant_in import AssistantIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    assistant_in = neuland_hub_sdk.AssistantIn() # AssistantIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Assistant
        api_response = api_instance.create_assistant_assistants_post(assistant_in, cookie_name=cookie_name)
        print("The response of DefaultApi->create_assistant_assistants_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_assistant_assistants_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_in** | [**AssistantIn**](AssistantIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Assistant**](Assistant.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_group_users_groups_post**
> UserGroup create_group_users_groups_post(group_in, cookie_name=cookie_name, tenant_id=tenant_id)

Create Group

Create a new user group

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.group_in import GroupIn
from neuland_hub_sdk.models.user_group import UserGroup
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    group_in = neuland_hub_sdk.GroupIn() # GroupIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Create Group
        api_response = api_instance.create_group_users_groups_post(group_in, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of DefaultApi->create_group_users_groups_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_group_users_groups_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_in** | [**GroupIn**](GroupIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_invitations_invitations_post**
> List[InvitationOut] create_invitations_invitations_post(invitation_in, cookie_name=cookie_name)

Create Invitations

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.invitation_in import InvitationIn
from neuland_hub_sdk.models.invitation_out import InvitationOut
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    invitation_in = neuland_hub_sdk.InvitationIn() # InvitationIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Invitations
        api_response = api_instance.create_invitations_invitations_post(invitation_in, cookie_name=cookie_name)
        print("The response of DefaultApi->create_invitations_invitations_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_invitations_invitations_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invitation_in** | [**InvitationIn**](InvitationIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[InvitationOut]**](InvitationOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_key_api_key_post**
> ApiKeyCreateResponse create_key_api_key_post(cookie_name=cookie_name, api_key_create_request=api_key_create_request)

Create Key

create key endpoint

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.api_key_create_request import ApiKeyCreateRequest
from neuland_hub_sdk.models.api_key_create_response import ApiKeyCreateResponse
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)
    api_key_create_request = neuland_hub_sdk.ApiKeyCreateRequest() # ApiKeyCreateRequest |  (optional)

    try:
        # Create Key
        api_response = api_instance.create_key_api_key_post(cookie_name=cookie_name, api_key_create_request=api_key_create_request)
        print("The response of DefaultApi->create_key_api_key_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_key_api_key_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cookie_name** | **str**|  | [optional] 
 **api_key_create_request** | [**ApiKeyCreateRequest**](ApiKeyCreateRequest.md)|  | [optional] 

### Return type

[**ApiKeyCreateResponse**](ApiKeyCreateResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_llm_model_llm_admin_models_post**
> LLMSettingsOut create_llm_model_llm_admin_models_post(llm_settings_in, cookie_name=cookie_name)

Create Llm Model

Create a new LLM model entry (superadmin only).

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.llm_settings_in import LLMSettingsIn
from neuland_hub_sdk.models.llm_settings_out import LLMSettingsOut
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    llm_settings_in = neuland_hub_sdk.LLMSettingsIn() # LLMSettingsIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Llm Model
        api_response = api_instance.create_llm_model_llm_admin_models_post(llm_settings_in, cookie_name=cookie_name)
        print("The response of DefaultApi->create_llm_model_llm_admin_models_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_llm_model_llm_admin_models_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **llm_settings_in** | [**LLMSettingsIn**](LLMSettingsIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**LLMSettingsOut**](LLMSettingsOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_member_assistants_assistant_id_members_user_id_post**
> AssistantMember create_member_assistants_assistant_id_members_user_id_post(assistant_id, user_id, cookie_name=cookie_name)

Create Member

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.assistant_member import AssistantMember
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    assistant_id = 56 # int | 
    user_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Member
        api_response = api_instance.create_member_assistants_assistant_id_members_user_id_post(assistant_id, user_id, cookie_name=cookie_name)
        print("The response of DefaultApi->create_member_assistants_assistant_id_members_user_id_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_member_assistants_assistant_id_members_user_id_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
 **user_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**AssistantMember**](AssistantMember.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_member_projects_project_id_members_post**
> ProjectMember create_member_projects_project_id_members_post(project_id, project_member_in, cookie_name=cookie_name)

Create Member

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.project_member import ProjectMember
from neuland_hub_sdk.models.project_member_in import ProjectMemberIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    project_id = 56 # int | 
    project_member_in = neuland_hub_sdk.ProjectMemberIn() # ProjectMemberIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Member
        api_response = api_instance.create_member_projects_project_id_members_post(project_id, project_member_in, cookie_name=cookie_name)
        print("The response of DefaultApi->create_member_projects_project_id_members_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_member_projects_project_id_members_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **int**|  | 
 **project_member_in** | [**ProjectMemberIn**](ProjectMemberIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**ProjectMember**](ProjectMember.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_message_messages_post**
> Message create_message_messages_post(message_in, cookie_name=cookie_name)

Create Message

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.message import Message
from neuland_hub_sdk.models.message_in import MessageIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    message_in = neuland_hub_sdk.MessageIn() # MessageIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Message
        api_response = api_instance.create_message_messages_post(message_in, cookie_name=cookie_name)
        print("The response of DefaultApi->create_message_messages_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_message_messages_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message_in** | [**MessageIn**](MessageIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Message**](Message.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_project_projects_post**
> Project create_project_projects_post(project_in, cookie_name=cookie_name)

Create Project

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.project import Project
from neuland_hub_sdk.models.project_in import ProjectIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    project_in = neuland_hub_sdk.ProjectIn() # ProjectIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Project
        api_response = api_instance.create_project_projects_post(project_in, cookie_name=cookie_name)
        print("The response of DefaultApi->create_project_projects_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_project_projects_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_in** | [**ProjectIn**](ProjectIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_prompt_prompts_post**
> Prompt create_prompt_prompts_post(prompt_in, cookie_name=cookie_name)

Create Prompt

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.prompt import Prompt
from neuland_hub_sdk.models.prompt_in import PromptIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    prompt_in = neuland_hub_sdk.PromptIn() # PromptIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Prompt
        api_response = api_instance.create_prompt_prompts_post(prompt_in, cookie_name=cookie_name)
        print("The response of DefaultApi->create_prompt_prompts_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_prompt_prompts_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prompt_in** | [**PromptIn**](PromptIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Prompt**](Prompt.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_tarif_tarifs_post**
> Tarif create_tarif_tarifs_post(tarif_in, cookie_name=cookie_name)

Create Tarif

Create a new tarif plan.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tarif import Tarif
from neuland_hub_sdk.models.tarif_in import TarifIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    tarif_in = neuland_hub_sdk.TarifIn() # TarifIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Tarif
        api_response = api_instance.create_tarif_tarifs_post(tarif_in, cookie_name=cookie_name)
        print("The response of DefaultApi->create_tarif_tarifs_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_tarif_tarifs_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tarif_in** | [**TarifIn**](TarifIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Tarif**](Tarif.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_templates_post**
> TemplateOut create_templates_post(template_in, tenant_id=tenant_id, cookie_name=cookie_name)

Create

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.template_in import TemplateIn
from neuland_hub_sdk.models.template_out import TemplateOut
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    template_in = neuland_hub_sdk.TemplateIn() # TemplateIn | 
    tenant_id = 56 # int |  (optional)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create
        api_response = api_instance.create_templates_post(template_in, tenant_id=tenant_id, cookie_name=cookie_name)
        print("The response of DefaultApi->create_templates_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_templates_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_in** | [**TemplateIn**](TemplateIn.md)|  | 
 **tenant_id** | **int**|  | [optional] 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**TemplateOut**](TemplateOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_tenant_connector_tenants_tenant_id_connectors_connector_id_post**
> object create_tenant_connector_tenants_tenant_id_connectors_connector_id_post(tenant_id, connector_id, cookie_name=cookie_name)

Create Tenant Connector

Enable a connector for a tenant by creating TenantConnector record (superadmin only)

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    tenant_id = 56 # int | 
    connector_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Tenant Connector
        api_response = api_instance.create_tenant_connector_tenants_tenant_id_connectors_connector_id_post(tenant_id, connector_id, cookie_name=cookie_name)
        print("The response of DefaultApi->create_tenant_connector_tenants_tenant_id_connectors_connector_id_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_tenant_connector_tenants_tenant_id_connectors_connector_id_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **int**|  | 
 **connector_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_tenant_tenants_post**
> TenantOut create_tenant_tenants_post(tenant_in, cookie_name=cookie_name)

Create Tenant

Create a new tenant (superadmin only)

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tenant_in import TenantIn
from neuland_hub_sdk.models.tenant_out import TenantOut
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    tenant_in = neuland_hub_sdk.TenantIn() # TenantIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Tenant
        api_response = api_instance.create_tenant_tenants_post(tenant_in, cookie_name=cookie_name)
        print("The response of DefaultApi->create_tenant_tenants_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_tenant_tenants_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_in** | [**TenantIn**](TenantIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**TenantOut**](TenantOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_tenant_tool_tenants_tenant_id_tools_tool_id_post**
> object create_tenant_tool_tenants_tenant_id_tools_tool_id_post(tenant_id, tool_id, cookie_name=cookie_name)

Create Tenant Tool

Enable a tool for a tenant by creating TenantTool record (superadmin only)

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    tenant_id = 56 # int | 
    tool_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Create Tenant Tool
        api_response = api_instance.create_tenant_tool_tenants_tenant_id_tools_tool_id_post(tenant_id, tool_id, cookie_name=cookie_name)
        print("The response of DefaultApi->create_tenant_tool_tenants_tenant_id_tools_tool_id_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_tenant_tool_tenants_tenant_id_tools_tool_id_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **int**|  | 
 **tool_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_user_users_post**
> UserOut create_user_users_post(user_in, cookie_name=cookie_name, tenant_id=tenant_id)

Create User

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.user_in import UserIn
from neuland_hub_sdk.models.user_out import UserOut
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    user_in = neuland_hub_sdk.UserIn() # UserIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Create User
        api_response = api_instance.create_user_users_post(user_in, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of DefaultApi->create_user_users_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_user_users_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_in** | [**UserIn**](UserIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

[**UserOut**](UserOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **current_settings_current_get**
> Settings current_settings_current_get(cookie_name=cookie_name)

Current

Get settings for current user's tenant

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.settings import Settings
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Current
        api_response = api_instance.current_settings_current_get(cookie_name=cookie_name)
        print("The response of DefaultApi->current_settings_current_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->current_settings_current_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Settings**](Settings.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deactivate_documents_chats_chat_id_inactive_documents_post**
> List[ChatInactiveDocument] deactivate_documents_chats_chat_id_inactive_documents_post(chat_id, document_ids, cookie_name=cookie_name)

Deactivate Documents

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.chat_inactive_document import ChatInactiveDocument
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    chat_id = 56 # int | 
    document_ids = [56] # List[int] | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Deactivate Documents
        api_response = api_instance.deactivate_documents_chats_chat_id_inactive_documents_post(chat_id, document_ids, cookie_name=cookie_name)
        print("The response of DefaultApi->deactivate_documents_chats_chat_id_inactive_documents_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->deactivate_documents_chats_chat_id_inactive_documents_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **int**|  | 
 **document_ids** | [**List[int]**](int.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[ChatInactiveDocument]**](ChatInactiveDocument.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deactivate_user_users_user_id_deactivate_post**
> UserOut deactivate_user_users_user_id_deactivate_post(user_id, cookie_name=cookie_name, tenant_id=tenant_id)

Deactivate User

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.user_out import UserOut
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    user_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Deactivate User
        api_response = api_instance.deactivate_user_users_user_id_deactivate_post(user_id, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of DefaultApi->deactivate_user_users_user_id_deactivate_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->deactivate_user_users_user_id_deactivate_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

[**UserOut**](UserOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_alert_alerts_alert_id_delete**
> delete_alert_alerts_alert_id_delete(alert_id, cookie_name=cookie_name, tenant_id=tenant_id)

Delete Alert

Delete exisiting budget alert

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    alert_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Delete Alert
        api_instance.delete_alert_alerts_alert_id_delete(alert_id, cookie_name=cookie_name, tenant_id=tenant_id)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_alert_alerts_alert_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alert_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_app_applications_app_id_delete**
> delete_app_applications_app_id_delete(app_id, cookie_name=cookie_name)

Delete App

Delete an application

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    app_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete App
        api_instance.delete_app_applications_app_id_delete(app_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_app_applications_app_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_assistant_assistants_assistant_id_delete**
> delete_assistant_assistants_assistant_id_delete(assistant_id, cookie_name=cookie_name)

Delete Assistant

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    assistant_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Assistant
        api_instance.delete_assistant_assistants_assistant_id_delete(assistant_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_assistant_assistants_assistant_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_chat_document_documents_document_id_delete**
> delete_chat_document_documents_document_id_delete(document_id, cookie_name=cookie_name)

Delete Chat Document

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    document_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Chat Document
        api_instance.delete_chat_document_documents_document_id_delete(document_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_chat_document_documents_document_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_group_users_groups_group_id_delete**
> delete_group_users_groups_group_id_delete(group_id, cookie_name=cookie_name, tenant_id=tenant_id)

Delete Group

Delete a user group

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    group_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Delete Group
        api_instance.delete_group_users_groups_group_id_delete(group_id, cookie_name=cookie_name, tenant_id=tenant_id)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_group_users_groups_group_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_library_libraries_library_id_delete**
> delete_library_libraries_library_id_delete(library_id, cookie_name=cookie_name)

Delete Library

Delete a library

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    library_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Library
        api_instance.delete_library_libraries_library_id_delete(library_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_library_libraries_library_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_llm_model_llm_admin_models_model_id_delete**
> delete_llm_model_llm_admin_models_model_id_delete(model_id, cookie_name=cookie_name)

Delete Llm Model

Delete an LLM model entry (superadmin only).

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    model_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Llm Model
        api_instance.delete_llm_model_llm_admin_models_model_id_delete(model_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_llm_model_llm_admin_models_model_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_member_assistants_assistant_id_members_user_id_delete**
> delete_member_assistants_assistant_id_members_user_id_delete(assistant_id, user_id, cookie_name=cookie_name)

Delete Member

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    assistant_id = 56 # int | 
    user_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Member
        api_instance.delete_member_assistants_assistant_id_members_user_id_delete(assistant_id, user_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_member_assistants_assistant_id_members_user_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
 **user_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_member_projects_project_id_members_user_id_delete**
> delete_member_projects_project_id_members_user_id_delete(project_id, user_id, cookie_name=cookie_name)

Delete Member

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    project_id = 56 # int | 
    user_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Member
        api_instance.delete_member_projects_project_id_members_user_id_delete(project_id, user_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_member_projects_project_id_members_user_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **int**|  | 
 **user_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_project_projects_project_id_delete**
> delete_project_projects_project_id_delete(project_id, cookie_name=cookie_name)

Delete Project

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    project_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Project
        api_instance.delete_project_projects_project_id_delete(project_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_project_projects_project_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_prompt_prompts_prompt_id_delete**
> delete_prompt_prompts_prompt_id_delete(prompt_id, cookie_name=cookie_name)

Delete Prompt

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    prompt_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Prompt
        api_instance.delete_prompt_prompts_prompt_id_delete(prompt_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_prompt_prompts_prompt_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prompt_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_tarif_tarifs_tarif_id_delete**
> delete_tarif_tarifs_tarif_id_delete(tarif_id, cookie_name=cookie_name)

Delete Tarif

Delete a tarif plan.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    tarif_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Tarif
        api_instance.delete_tarif_tarifs_tarif_id_delete(tarif_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_tarif_tarifs_tarif_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tarif_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_templates_template_id_delete**
> delete_templates_template_id_delete(template_id, tenant_id=tenant_id, cookie_name=cookie_name)

Delete

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    template_id = 56 # int | 
    tenant_id = 56 # int |  (optional)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete
        api_instance.delete_templates_template_id_delete(template_id, tenant_id=tenant_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_templates_template_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **int**|  | 
 **tenant_id** | **int**|  | [optional] 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_tenant_connector_tenants_tenant_id_connectors_connector_id_delete**
> delete_tenant_connector_tenants_tenant_id_connectors_connector_id_delete(tenant_id, connector_id, cookie_name=cookie_name)

Delete Tenant Connector

Disable a connector for a tenant by removing TenantConnector record (superadmin only)

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    tenant_id = 56 # int | 
    connector_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Tenant Connector
        api_instance.delete_tenant_connector_tenants_tenant_id_connectors_connector_id_delete(tenant_id, connector_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_tenant_connector_tenants_tenant_id_connectors_connector_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **int**|  | 
 **connector_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_tenant_tenants_tenant_id_delete**
> delete_tenant_tenants_tenant_id_delete(tenant_id, cookie_name=cookie_name)

Delete Tenant

Delete a tenant (superadmin only)

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    tenant_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Tenant
        api_instance.delete_tenant_tenants_tenant_id_delete(tenant_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_tenant_tenants_tenant_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_tenant_tool_tenants_tenant_id_tools_tool_id_delete**
> delete_tenant_tool_tenants_tenant_id_tools_tool_id_delete(tenant_id, tool_id, cookie_name=cookie_name)

Delete Tenant Tool

Disable a tool for a tenant by removing TenantTool record (superadmin only)

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    tenant_id = 56 # int | 
    tool_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Delete Tenant Tool
        api_instance.delete_tenant_tool_tenants_tenant_id_tools_tool_id_delete(tenant_id, tool_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_tenant_tool_tenants_tenant_id_tools_tool_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **int**|  | 
 **tool_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_user_users_user_id_delete**
> delete_user_users_user_id_delete(user_id, cookie_name=cookie_name, tenant_id=tenant_id)

Delete User

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    user_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Delete User
        api_instance.delete_user_users_user_id_delete(user_id, cookie_name=cookie_name, tenant_id=tenant_id)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_user_users_user_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **download_file_files_file_id_get**
> object download_file_files_file_id_get(file_id, cookie_name=cookie_name)

Download File

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    file_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Download File
        api_response = api_instance.download_file_files_file_id_get(file_id, cookie_name=cookie_name)
        print("The response of DefaultApi->download_file_files_file_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->download_file_files_file_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **download_file_storage_path_get**
> object download_file_storage_path_get(path, token)

Download File

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    path = 'path_example' # str | File path
    token = 'token_example' # str | Download token

    try:
        # Download File
        api_response = api_instance.download_file_storage_path_get(path, token)
        print("The response of DefaultApi->download_file_storage_path_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->download_file_storage_path_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| File path | 
 **token** | **str**| Download token | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exchange_token_auth_exchange_token_post**
> str exchange_token_auth_exchange_token_post(app_id)

Exchange Token

service token endpoint for AI applications

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    app_id = 56 # int | 

    try:
        # Exchange Token
        api_response = api_instance.exchange_token_auth_exchange_token_post(app_id)
        print("The response of DefaultApi->exchange_token_auth_exchange_token_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->exchange_token_auth_exchange_token_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **int**|  | 

### Return type

**str**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_cost_llm_cost_post**
> TimeseriesResponse get_cost_llm_cost_post(usage_request, cookie_name=cookie_name, tenant_id=tenant_id)

Get Cost

Returns:
- Total cost of current month (all models)
- Timeseries cost per model for requested granularity

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.timeseries_response import TimeseriesResponse
from neuland_hub_sdk.models.usage_request import UsageRequest
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    usage_request = neuland_hub_sdk.UsageRequest() # UsageRequest | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Get Cost
        api_response = api_instance.get_cost_llm_cost_post(usage_request, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of DefaultApi->get_cost_llm_cost_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_cost_llm_cost_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usage_request** | [**UsageRequest**](UsageRequest.md)|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

[**TimeseriesResponse**](TimeseriesResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_current_tenant_tenants_current_get**
> TenantOut get_current_tenant_tenants_current_get(cookie_name=cookie_name)

Get Current Tenant

Get current user's tenant

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tenant_out import TenantOut
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Get Current Tenant
        api_response = api_instance.get_current_tenant_tenants_current_get(cookie_name=cookie_name)
        print("The response of DefaultApi->get_current_tenant_tenants_current_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_current_tenant_tenants_current_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cookie_name** | **str**|  | [optional] 

### Return type

[**TenantOut**](TenantOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_entra_groups_auth_entra_groups_get**
> Dict[str, ResponseGetEntraGroupsAuthEntraGroupsGetValue] get_entra_groups_auth_entra_groups_get()

Get Entra Groups

Get Azure Entra group names for current user's groups

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.response_get_entra_groups_auth_entra_groups_get_value import ResponseGetEntraGroupsAuthEntraGroupsGetValue
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)

    try:
        # Get Entra Groups
        api_response = api_instance.get_entra_groups_auth_entra_groups_get()
        print("The response of DefaultApi->get_entra_groups_auth_entra_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_entra_groups_auth_entra_groups_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Dict[str, ResponseGetEntraGroupsAuthEntraGroupsGetValue]**](ResponseGetEntraGroupsAuthEntraGroupsGetValue.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_entra_scopes_auth_entra_scopes_get**
> List[Optional[str]] get_entra_scopes_auth_entra_scopes_get()

Get Entra Scopes

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)

    try:
        # Get Entra Scopes
        api_response = api_instance.get_entra_scopes_auth_entra_scopes_get()
        print("The response of DefaultApi->get_entra_scopes_auth_entra_scopes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_entra_scopes_auth_entra_scopes_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**List[Optional[str]]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_file_documents_document_id_get**
> object get_file_documents_document_id_get(document_id, cookie_name=cookie_name)

Get File

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    document_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Get File
        api_response = api_instance.get_file_documents_document_id_get(document_id, cookie_name=cookie_name)
        print("The response of DefaultApi->get_file_documents_document_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_file_documents_document_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_item_info_integrations_sharepoint_drives_drive_id_items_drive_item_id_get**
> SharepointItemModel get_item_info_integrations_sharepoint_drives_drive_id_items_drive_item_id_get(drive_id, drive_item_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)

Get Item Info

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.sharepoint_item_model import SharepointItemModel
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    drive_id = 'drive_id_example' # str | 
    drive_item_id = 'drive_item_id_example' # str | 
    chat_id = 56 # int |  (optional)
    library_id = 56 # int |  (optional)
    assistant_id = 56 # int |  (optional)
    project_id = 56 # int |  (optional)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Get Item Info
        api_response = api_instance.get_item_info_integrations_sharepoint_drives_drive_id_items_drive_item_id_get(drive_id, drive_item_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)
        print("The response of DefaultApi->get_item_info_integrations_sharepoint_drives_drive_id_items_drive_item_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_item_info_integrations_sharepoint_drives_drive_id_items_drive_item_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **drive_id** | **str**|  | 
 **drive_item_id** | **str**|  | 
 **chat_id** | **int**|  | [optional] 
 **library_id** | **int**|  | [optional] 
 **assistant_id** | **int**|  | [optional] 
 **project_id** | **int**|  | [optional] 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**SharepointItemModel**](SharepointItemModel.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_myself_users_me_get**
> UserOut get_myself_users_me_get(cookie_name=cookie_name)

Get Myself

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.user_out import UserOut
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Get Myself
        api_response = api_instance.get_myself_users_me_get(cookie_name=cookie_name)
        print("The response of DefaultApi->get_myself_users_me_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_myself_users_me_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cookie_name** | **str**|  | [optional] 

### Return type

[**UserOut**](UserOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_supported_languages_simple_chat_languages_get**
> object get_supported_languages_simple_chat_languages_get(cookie_name=cookie_name)

Get Supported Languages

Get list of supported languages for the help system.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Get Supported Languages
        api_response = api_instance.get_supported_languages_simple_chat_languages_get(cookie_name=cookie_name)
        print("The response of DefaultApi->get_supported_languages_simple_chat_languages_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_supported_languages_simple_chat_languages_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cookie_name** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_theme_theme_get**
> TenantThemeOut get_theme_theme_get(origin=origin)

Get Theme

Get the icon for a tenant

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tenant_theme_out import TenantThemeOut
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    origin = 'origin_example' # str |  (optional)

    try:
        # Get Theme
        api_response = api_instance.get_theme_theme_get(origin=origin)
        print("The response of DefaultApi->get_theme_theme_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_theme_theme_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **origin** | **str**|  | [optional] 

### Return type

[**TenantThemeOut**](TenantThemeOut.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_usage_costs_llm_services_cost_post**
> UsageCostResponse get_usage_costs_llm_services_cost_post(usage_cost_request, cookie_name=cookie_name, tenant_id=tenant_id)

Get Usage Costs

Get aggregated usage costs from the database.

Returns cost data aggregated by source, model, and time period.
Supports filtering by date range, source type, model, and provider.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.usage_cost_request import UsageCostRequest
from neuland_hub_sdk.models.usage_cost_response import UsageCostResponse
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    usage_cost_request = neuland_hub_sdk.UsageCostRequest() # UsageCostRequest | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Get Usage Costs
        api_response = api_instance.get_usage_costs_llm_services_cost_post(usage_cost_request, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of DefaultApi->get_usage_costs_llm_services_cost_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_usage_costs_llm_services_cost_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usage_cost_request** | [**UsageCostRequest**](UsageCostRequest.md)|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

[**UsageCostResponse**](UsageCostResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_info_integrations_sharepoint_me_get**
> SharepointUserModel get_user_info_integrations_sharepoint_me_get(cookie_name=cookie_name)

Get User Info

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.sharepoint_user_model import SharepointUserModel
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Get User Info
        api_response = api_instance.get_user_info_integrations_sharepoint_me_get(cookie_name=cookie_name)
        print("The response of DefaultApi->get_user_info_integrations_sharepoint_me_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_user_info_integrations_sharepoint_me_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cookie_name** | **str**|  | [optional] 

### Return type

[**SharepointUserModel**](SharepointUserModel.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grant_tenant_model_access_llm_admin_tenants_tenant_id_models_model_id_post**
> TenantLLMOut grant_tenant_model_access_llm_admin_tenants_tenant_id_models_model_id_post(tenant_id, model_id, cookie_name=cookie_name)

Grant Tenant Model Access

Grant a tenant access to an LLM model (superadmin only). Idempotent.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tenant_llm_out import TenantLLMOut
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    tenant_id = 56 # int | 
    model_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Grant Tenant Model Access
        api_response = api_instance.grant_tenant_model_access_llm_admin_tenants_tenant_id_models_model_id_post(tenant_id, model_id, cookie_name=cookie_name)
        print("The response of DefaultApi->grant_tenant_model_access_llm_admin_tenants_tenant_id_models_model_id_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->grant_tenant_model_access_llm_admin_tenants_tenant_id_models_model_id_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **int**|  | 
 **model_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**TenantLLMOut**](TenantLLMOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **import_documents_documents_import_post**
> UUID import_documents_documents_import_post(src, drive_id, drive_item_ids, cookie_name=cookie_name, project_id=project_id, chat_id=chat_id, assistant_id=assistant_id, message_id=message_id, library_id=library_id)

Import Documents

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    src = 'src_example' # str | Source type which the documents will be imported from
    drive_id = 'drive_id_example' # str | Sharepoint drive ID
    drive_item_ids = ['drive_item_ids_example'] # List[str] | Sharepoint item IDs of the documents to be imported
    cookie_name = 'cookie_name_example' # str |  (optional)
    project_id = 56 # int |  (optional)
    chat_id = 56 # int |  (optional)
    assistant_id = 56 # int |  (optional)
    message_id = 56 # int |  (optional)
    library_id = 56 # int |  (optional)

    try:
        # Import Documents
        api_response = api_instance.import_documents_documents_import_post(src, drive_id, drive_item_ids, cookie_name=cookie_name, project_id=project_id, chat_id=chat_id, assistant_id=assistant_id, message_id=message_id, library_id=library_id)
        print("The response of DefaultApi->import_documents_documents_import_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->import_documents_documents_import_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **src** | **str**| Source type which the documents will be imported from | 
 **drive_id** | **str**| Sharepoint drive ID | 
 **drive_item_ids** | [**List[str]**](str.md)| Sharepoint item IDs of the documents to be imported | 
 **cookie_name** | **str**|  | [optional] 
 **project_id** | **int**|  | [optional] 
 **chat_id** | **int**|  | [optional] 
 **assistant_id** | **int**|  | [optional] 
 **message_id** | **int**|  | [optional] 
 **library_id** | **int**|  | [optional] 

### Return type

**UUID**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initiate_consent_auth_connectors_connector_id_consent_get**
> ConnectorConsentOut initiate_consent_auth_connectors_connector_id_consent_get(connector_id, return_url=return_url, redirect=redirect, cookie_name=cookie_name)

Initiate Consent

Initiate OAuth consent flow for a specific connector.

Returns redirect URL to OAuth provider's consent page.
If redirect=true, returns HTTP 302 redirect response.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.connector_consent_out import ConnectorConsentOut
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    connector_id = 56 # int | 
    return_url = 'return_url_example' # str |  (optional)
    redirect = False # bool | If true, return 302 redirect instead of JSON (optional) (default to False)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Initiate Consent
        api_response = api_instance.initiate_consent_auth_connectors_connector_id_consent_get(connector_id, return_url=return_url, redirect=redirect, cookie_name=cookie_name)
        print("The response of DefaultApi->initiate_consent_auth_connectors_connector_id_consent_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->initiate_consent_auth_connectors_connector_id_consent_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connector_id** | **int**|  | 
 **return_url** | **str**|  | [optional] 
 **redirect** | **bool**| If true, return 302 redirect instead of JSON | [optional] [default to False]
 **cookie_name** | **str**|  | [optional] 

### Return type

[**ConnectorConsentOut**](ConnectorConsentOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **is_connected_integrations_sharepoint_connected_get**
> bool is_connected_integrations_sharepoint_connected_get(cookie_name=cookie_name)

Is Connected

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Is Connected
        api_response = api_instance.is_connected_integrations_sharepoint_connected_get(cookie_name=cookie_name)
        print("The response of DefaultApi->is_connected_integrations_sharepoint_connected_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->is_connected_integrations_sharepoint_connected_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cookie_name** | **str**|  | [optional] 

### Return type

**bool**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **is_project_name_free_projects_available_get**
> bool is_project_name_free_projects_available_get(name, cookie_name=cookie_name)

Is Project Name Free

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    name = 'name_example' # str | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Is Project Name Free
        api_response = api_instance.is_project_name_free_projects_available_get(name, cookie_name=cookie_name)
        print("The response of DefaultApi->is_project_name_free_projects_available_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->is_project_name_free_projects_available_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**bool**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **leave_assitant_assistants_assistant_id_remove_me_delete**
> leave_assitant_assistants_assistant_id_remove_me_delete(assistant_id, cookie_name=cookie_name)

Leave Assitant

user can leave the assistant by themselves.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    assistant_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Leave Assitant
        api_instance.leave_assitant_assistants_assistant_id_remove_me_delete(assistant_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->leave_assitant_assistants_assistant_id_remove_me_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **leave_project_projects_project_id_remove_me_delete**
> leave_project_projects_project_id_remove_me_delete(project_id, cookie_name=cookie_name)

Leave Project

user can leave the project by themselves.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    project_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Leave Project
        api_instance.leave_project_projects_project_id_remove_me_delete(project_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->leave_project_projects_project_id_remove_me_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_all_sites_integrations_sharepoint_sites_get**
> List[SharepointSiteModel] list_all_sites_integrations_sharepoint_sites_get(chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)

List All Sites

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.sharepoint_site_model import SharepointSiteModel
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    chat_id = 56 # int |  (optional)
    library_id = 56 # int |  (optional)
    assistant_id = 56 # int |  (optional)
    project_id = 56 # int |  (optional)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # List All Sites
        api_response = api_instance.list_all_sites_integrations_sharepoint_sites_get(chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)
        print("The response of DefaultApi->list_all_sites_integrations_sharepoint_sites_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_all_sites_integrations_sharepoint_sites_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **int**|  | [optional] 
 **library_id** | **int**|  | [optional] 
 **assistant_id** | **int**|  | [optional] 
 **project_id** | **int**|  | [optional] 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[SharepointSiteModel]**](SharepointSiteModel.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_available_models_settings_models_get**
> List[LLMModel] list_available_models_settings_models_get(cookie_name=cookie_name)

List Available Models

Get available LLM models for current tenant.

Returns:
- Standard Azure models from NLND_LLM_PROVIDERS (always available)
- Plus additional models from tenant_llms table (if configured)

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.llm_model import LLMModel
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # List Available Models
        api_response = api_instance.list_available_models_settings_models_get(cookie_name=cookie_name)
        print("The response of DefaultApi->list_available_models_settings_models_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_available_models_settings_models_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[LLMModel]**](LLMModel.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_children_integrations_sharepoint_drives_drive_id_items_drive_item_id_children_get**
> List[SharepointItemModel] list_children_integrations_sharepoint_drives_drive_id_items_drive_item_id_children_get(drive_id, drive_item_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, recursive=recursive, cookie_name=cookie_name)

List Children

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.sharepoint_item_model import SharepointItemModel
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    drive_id = 'drive_id_example' # str | 
    drive_item_id = 'drive_item_id_example' # str | 
    chat_id = 56 # int |  (optional)
    library_id = 56 # int |  (optional)
    assistant_id = 56 # int |  (optional)
    project_id = 56 # int |  (optional)
    recursive = False # bool |  (optional) (default to False)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # List Children
        api_response = api_instance.list_children_integrations_sharepoint_drives_drive_id_items_drive_item_id_children_get(drive_id, drive_item_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, recursive=recursive, cookie_name=cookie_name)
        print("The response of DefaultApi->list_children_integrations_sharepoint_drives_drive_id_items_drive_item_id_children_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_children_integrations_sharepoint_drives_drive_id_items_drive_item_id_children_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **drive_id** | **str**|  | 
 **drive_item_id** | **str**|  | 
 **chat_id** | **int**|  | [optional] 
 **library_id** | **int**|  | [optional] 
 **assistant_id** | **int**|  | [optional] 
 **project_id** | **int**|  | [optional] 
 **recursive** | **bool**|  | [optional] [default to False]
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[SharepointItemModel]**](SharepointItemModel.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_connector_status_auth_connectors_status_get**
> List[ConnectorStatusOut] list_connector_status_auth_connectors_status_get(cookie_name=cookie_name)

List Connector Status

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.connector_status_out import ConnectorStatusOut
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # List Connector Status
        api_response = api_instance.list_connector_status_auth_connectors_status_get(cookie_name=cookie_name)
        print("The response of DefaultApi->list_connector_status_auth_connectors_status_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_connector_status_auth_connectors_status_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[ConnectorStatusOut]**](ConnectorStatusOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_drives_integrations_sharepoint_sites_site_id_drives_get**
> List[SharepointDriveModel] list_drives_integrations_sharepoint_sites_site_id_drives_get(site_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)

List Drives

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.sharepoint_drive_model import SharepointDriveModel
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    site_id = 'site_id_example' # str | 
    chat_id = 56 # int |  (optional)
    library_id = 56 # int |  (optional)
    assistant_id = 56 # int |  (optional)
    project_id = 56 # int |  (optional)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # List Drives
        api_response = api_instance.list_drives_integrations_sharepoint_sites_site_id_drives_get(site_id, chat_id=chat_id, library_id=library_id, assistant_id=assistant_id, project_id=project_id, cookie_name=cookie_name)
        print("The response of DefaultApi->list_drives_integrations_sharepoint_sites_site_id_drives_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_drives_integrations_sharepoint_sites_site_id_drives_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **site_id** | **str**|  | 
 **chat_id** | **int**|  | [optional] 
 **library_id** | **int**|  | [optional] 
 **assistant_id** | **int**|  | [optional] 
 **project_id** | **int**|  | [optional] 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**List[SharepointDriveModel]**](SharepointDriveModel.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **llm_total_tokens_llm_tokens_post**
> TokensTimeseriesResponse llm_total_tokens_llm_tokens_post(usage_request, cookie_name=cookie_name, tenant_id=tenant_id)

Llm Total Tokens

Return the total cost and tokens used in llms.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tokens_timeseries_response import TokensTimeseriesResponse
from neuland_hub_sdk.models.usage_request import UsageRequest
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    usage_request = neuland_hub_sdk.UsageRequest() # UsageRequest | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Llm Total Tokens
        api_response = api_instance.llm_total_tokens_llm_tokens_post(usage_request, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of DefaultApi->llm_total_tokens_llm_tokens_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->llm_total_tokens_llm_tokens_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usage_request** | [**UsageRequest**](UsageRequest.md)|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

[**TokensTimeseriesResponse**](TokensTimeseriesResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **login_auth_token_post**
> TokenOut login_auth_token_post(username, password, user_agent=user_agent, x_real_ip=x_real_ip, x_forwarded_for=x_forwarded_for, x_client_ip=x_client_ip, session_id=session_id, grant_type=grant_type, scope=scope, client_id=client_id, client_secret=client_secret)

Login

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.models.token_out import TokenOut
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    username = 'username_example' # str | 
    password = 'password_example' # str | 
    user_agent = 'user_agent_example' # str |  (optional)
    x_real_ip = 'x_real_ip_example' # str |  (optional)
    x_forwarded_for = 'x_forwarded_for_example' # str |  (optional)
    x_client_ip = 'x_client_ip_example' # str |  (optional)
    session_id = 56 # int |  (optional)
    grant_type = 'grant_type_example' # str |  (optional)
    scope = '' # str |  (optional) (default to '')
    client_id = 'client_id_example' # str |  (optional)
    client_secret = 'client_secret_example' # str |  (optional)

    try:
        # Login
        api_response = api_instance.login_auth_token_post(username, password, user_agent=user_agent, x_real_ip=x_real_ip, x_forwarded_for=x_forwarded_for, x_client_ip=x_client_ip, session_id=session_id, grant_type=grant_type, scope=scope, client_id=client_id, client_secret=client_secret)
        print("The response of DefaultApi->login_auth_token_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->login_auth_token_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**|  | 
 **password** | **str**|  | 
 **user_agent** | **str**|  | [optional] 
 **x_real_ip** | **str**|  | [optional] 
 **x_forwarded_for** | **str**|  | [optional] 
 **x_client_ip** | **str**|  | [optional] 
 **session_id** | **int**|  | [optional] 
 **grant_type** | **str**|  | [optional] 
 **scope** | **str**|  | [optional] [default to &#39;&#39;]
 **client_id** | **str**|  | [optional] 
 **client_secret** | **str**|  | [optional] 

### Return type

[**TokenOut**](TokenOut.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logout_auth_logout_post**
> object logout_auth_logout_post()

Logout

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)

    try:
        # Logout
        api_response = api_instance.logout_auth_logout_post()
        print("The response of DefaultApi->logout_auth_logout_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->logout_auth_logout_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **message_trace_admin_message_message_id_get**
> str message_trace_admin_message_message_id_get(message_id)

Message Trace

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    message_id = 56 # int | 

    try:
        # Message Trace
        api_response = api_instance.message_trace_admin_message_message_id_get(message_id)
        print("The response of DefaultApi->message_trace_admin_message_message_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->message_trace_admin_message_message_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message_id** | **int**|  | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **new_library_libraries_post**
> Library new_library_libraries_post(library_in, cookie_name=cookie_name)

New Library

Create a new library

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.library import Library
from neuland_hub_sdk.models.library_in import LibraryIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    library_in = neuland_hub_sdk.LibraryIn() # LibraryIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # New Library
        api_response = api_instance.new_library_libraries_post(library_in, cookie_name=cookie_name)
        print("The response of DefaultApi->new_library_libraries_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->new_library_libraries_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_in** | [**LibraryIn**](LibraryIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Library**](Library.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauth_callback_auth_connectors_callback_get**
> object oauth_callback_auth_connectors_callback_get(state, code=code, error=error, error_description=error_description, error_subcode=error_subcode)

Oauth Callback

Generic OAuth callback from provider after user consent.

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    state = 'state_example' # str | 
    code = 'code_example' # str |  (optional)
    error = 'error_example' # str |  (optional)
    error_description = 'error_description_example' # str |  (optional)
    error_subcode = 'error_subcode_example' # str |  (optional)

    try:
        # Oauth Callback
        api_response = api_instance.oauth_callback_auth_connectors_callback_get(state, code=code, error=error, error_description=error_description, error_subcode=error_subcode)
        print("The response of DefaultApi->oauth_callback_auth_connectors_callback_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->oauth_callback_auth_connectors_callback_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **state** | **str**|  | 
 **code** | **str**|  | [optional] 
 **error** | **str**|  | [optional] 
 **error_description** | **str**|  | [optional] 
 **error_subcode** | **str**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_check_post_post**
> object post_check_post_post()

Post Check

Power-On Self-Test (POST) endpoint.
Runs comprehensive health checks for all configured services and returns results.

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)

    try:
        # Post Check
        api_response = api_instance.post_check_post_post()
        print("The response of DefaultApi->post_check_post_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->post_check_post_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_query_path_get**
> object query_query_path_get(path, cookie_name=cookie_name)

Query

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    path = 'path_example' # str | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Query
        api_response = api_instance.query_query_path_get(path, cookie_name=cookie_name)
        print("The response of DefaultApi->query_query_path_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->query_query_path_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_rpc_query_rpc_path_get**
> object query_rpc_query_rpc_path_get(path, cookie_name=cookie_name)

Query Rpc

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    path = 'path_example' # str | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Query Rpc
        api_response = api_instance.query_rpc_query_rpc_path_get(path, cookie_name=cookie_name)
        print("The response of DefaultApi->query_rpc_query_rpc_path_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->query_rpc_query_rpc_path_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_chat_chats_chat_id_delete**
> remove_chat_chats_chat_id_delete(chat_id, cookie_name=cookie_name)

Remove Chat

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    chat_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove Chat
        api_instance.remove_chat_chats_chat_id_delete(chat_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->remove_chat_chats_chat_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_inactive_documents_chats_chat_id_inactive_documents_delete**
> BulkResult remove_inactive_documents_chats_chat_id_inactive_documents_delete(chat_id, document_ids, cookie_name=cookie_name)

Remove Inactive Documents

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.bulk_result import BulkResult
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    chat_id = 56 # int | 
    document_ids = [56] # List[int] | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove Inactive Documents
        api_response = api_instance.remove_inactive_documents_chats_chat_id_inactive_documents_delete(chat_id, document_ids, cookie_name=cookie_name)
        print("The response of DefaultApi->remove_inactive_documents_chats_chat_id_inactive_documents_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->remove_inactive_documents_chats_chat_id_inactive_documents_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **int**|  | 
 **document_ids** | [**List[int]**](int.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**BulkResult**](BulkResult.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_library_from_assistant_assistants_assistant_id_libraries_library_id_delete**
> remove_library_from_assistant_assistants_assistant_id_libraries_library_id_delete(assistant_id, library_id, cookie_name=cookie_name)

Remove Library From Assistant

Disables a library from an assistant by removing the association

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    assistant_id = 56 # int | 
    library_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove Library From Assistant
        api_instance.remove_library_from_assistant_assistants_assistant_id_libraries_library_id_delete(assistant_id, library_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->remove_library_from_assistant_assistants_assistant_id_libraries_library_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
 **library_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_library_from_chat_chats_chat_id_libraries_library_id_delete**
> remove_library_from_chat_chats_chat_id_libraries_library_id_delete(chat_id, library_id, cookie_name=cookie_name)

Remove Library From Chat

Disables a library from a chat by removing the association

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    chat_id = 56 # int | 
    library_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove Library From Chat
        api_instance.remove_library_from_chat_chats_chat_id_libraries_library_id_delete(chat_id, library_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->remove_library_from_chat_chats_chat_id_libraries_library_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **int**|  | 
 **library_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_library_from_project_projects_project_id_libraries_library_id_delete**
> remove_library_from_project_projects_project_id_libraries_library_id_delete(project_id, library_id, cookie_name=cookie_name)

Remove Library From Project

Disables a library for a project by deleting the association

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    project_id = 56 # int | 
    library_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove Library From Project
        api_instance.remove_library_from_project_projects_project_id_libraries_library_id_delete(project_id, library_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->remove_library_from_project_projects_project_id_libraries_library_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **int**|  | 
 **library_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_library_member_libraries_library_id_members_member_id_delete**
> remove_library_member_libraries_library_id_members_member_id_delete(library_id, member_id, cookie_name=cookie_name)

Remove Library Member

Deletes a member from the library

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    library_id = 56 # int | 
    member_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove Library Member
        api_instance.remove_library_member_libraries_library_id_members_member_id_delete(library_id, member_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->remove_library_member_libraries_library_id_members_member_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_id** | **int**|  | 
 **member_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_tenant_library_member_tenants_tenant_id_libraries_library_id_delete**
> remove_tenant_library_member_tenants_tenant_id_libraries_library_id_delete(library_id, tenant_id, cookie_name=cookie_name)

Remove Tenant Library Member

Deletes a tenant from the library

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    library_id = 56 # int | 
    tenant_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove Tenant Library Member
        api_instance.remove_tenant_library_member_tenants_tenant_id_libraries_library_id_delete(library_id, tenant_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->remove_tenant_library_member_tenants_tenant_id_libraries_library_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_id** | **int**|  | 
 **tenant_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_tool_from_assistant_assistants_assistant_id_tools_tool_id_delete**
> remove_tool_from_assistant_assistants_assistant_id_tools_tool_id_delete(assistant_id, tool_id, cookie_name=cookie_name)

Remove Tool From Assistant

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    assistant_id = 56 # int | 
    tool_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Remove Tool From Assistant
        api_instance.remove_tool_from_assistant_assistants_assistant_id_tools_tool_id_delete(assistant_id, tool_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->remove_tool_from_assistant_assistants_assistant_id_tools_tool_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
 **tool_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rephrase_message_messages_message_id_rephrase_get**
> Translation rephrase_message_messages_message_id_rephrase_get(message_id, style, cookie_name=cookie_name)

Rephrase Message

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.translation import Translation
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    message_id = 56 # int | 
    style = neuland_hub_sdk.RephraseStyleEnum() # RephraseStyleEnum | Style of rephrasing: 'same' (same length), 'short' (shorter), or 'long' (longer)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Rephrase Message
        api_response = api_instance.rephrase_message_messages_message_id_rephrase_get(message_id, style, cookie_name=cookie_name)
        print("The response of DefaultApi->rephrase_message_messages_message_id_rephrase_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->rephrase_message_messages_message_id_rephrase_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message_id** | **int**|  | 
 **style** | [**RephraseStyleEnum**](.md)| Style of rephrasing: &#39;same&#39; (same length), &#39;short&#39; (shorter), or &#39;long&#39; (longer) | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Translation**](Translation.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reports_bulk_action_admin_reports_bulk_post**
> str reports_bulk_action_admin_reports_bulk_post(action, selected_ids=selected_ids)

Reports Bulk Action

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    action = 'action_example' # str | 
    selected_ids = ['selected_ids_example'] # List[str] |  (optional)

    try:
        # Reports Bulk Action
        api_response = api_instance.reports_bulk_action_admin_reports_bulk_post(action, selected_ids=selected_ids)
        print("The response of DefaultApi->reports_bulk_action_admin_reports_bulk_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->reports_bulk_action_admin_reports_bulk_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **action** | **str**|  | 
 **selected_ids** | [**List[str]**](str.md)|  | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: text/html, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **request_password_reset_auth_request_password_reset_post**
> request_password_reset_auth_request_password_reset_post(password_reset_request_in, origin=origin)

Request Password Reset

Request password reset. Always returns 200 OK to prevent user enumeration.
Sends email with reset link if user exists and origin is valid.

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.models.password_reset_request_in import PasswordResetRequestIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    password_reset_request_in = neuland_hub_sdk.PasswordResetRequestIn() # PasswordResetRequestIn | 
    origin = 'origin_example' # str |  (optional)

    try:
        # Request Password Reset
        api_instance.request_password_reset_auth_request_password_reset_post(password_reset_request_in, origin=origin)
    except Exception as e:
        print("Exception when calling DefaultApi->request_password_reset_auth_request_password_reset_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **password_reset_request_in** | [**PasswordResetRequestIn**](PasswordResetRequestIn.md)|  | 
 **origin** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resend_invitation_invitations_invitation_id_resend_post**
> InvitationOut resend_invitation_invitations_invitation_id_resend_post(invitation_id, cookie_name=cookie_name)

Resend Invitation

Resend invitation email with a new token.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.invitation_out import InvitationOut
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    invitation_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Resend Invitation
        api_response = api_instance.resend_invitation_invitations_invitation_id_resend_post(invitation_id, cookie_name=cookie_name)
        print("The response of DefaultApi->resend_invitation_invitations_invitation_id_resend_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->resend_invitation_invitations_invitation_id_resend_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invitation_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**InvitationOut**](InvitationOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reset_password_auth_reset_password_post**
> reset_password_auth_reset_password_post(token)

Reset Password

Complete password reset with token and new password.
Validates token, updates password, and revokes all user sessions.
Accepts both JSON (for API) and form data (for HTML fallback).

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    token = 'token_example' # str | Password reset JWT token

    try:
        # Reset Password
        api_instance.reset_password_auth_reset_password_post(token)
    except Exception as e:
        print("Exception when calling DefaultApi->reset_password_auth_reset_password_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Password reset JWT token | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reset_password_form_auth_reset_password_get**
> str reset_password_form_auth_reset_password_get(token)

Reset Password Form

Fallback HTML form for password reset when no frontend is available.
Displays a secure form with basic security measures.
Validates token before showing form.

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    token = 'token_example' # str | Password reset JWT token

    try:
        # Reset Password Form
        api_response = api_instance.reset_password_form_auth_reset_password_get(token)
        print("The response of DefaultApi->reset_password_form_auth_reset_password_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->reset_password_form_auth_reset_password_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Password reset JWT token | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reset_password_users_passwd_post**
> reset_password_users_passwd_post(password_reset_in, cookie_name=cookie_name)

Reset Password

Resets the current user password.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.password_reset_in import PasswordResetIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    password_reset_in = neuland_hub_sdk.PasswordResetIn() # PasswordResetIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Reset Password
        api_instance.reset_password_users_passwd_post(password_reset_in, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->reset_password_users_passwd_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **password_reset_in** | [**PasswordResetIn**](PasswordResetIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retry_document_documents_document_id_retry_post**
> retry_document_documents_document_id_retry_post(document_id, cookie_name=cookie_name)

Retry Document

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    document_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Retry Document
        api_instance.retry_document_documents_document_id_retry_post(document_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->retry_document_documents_document_id_retry_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revoke_api_key_api_key_revoke_api_key_id_patch**
> ApiKey revoke_api_key_api_key_revoke_api_key_id_patch(api_key_id, cookie_name=cookie_name)

Revoke Api Key

Update an existing apikey's active status

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.api_key import ApiKey
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    api_key_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Revoke Api Key
        api_response = api_instance.revoke_api_key_api_key_revoke_api_key_id_patch(api_key_id, cookie_name=cookie_name)
        print("The response of DefaultApi->revoke_api_key_api_key_revoke_api_key_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->revoke_api_key_api_key_revoke_api_key_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**ApiKey**](ApiKey.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revoke_consent_auth_connectors_connector_id_consent_delete**
> revoke_consent_auth_connectors_connector_id_consent_delete(connector_id, cookie_name=cookie_name)

Revoke Consent

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    connector_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Revoke Consent
        api_instance.revoke_consent_auth_connectors_connector_id_consent_delete(connector_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->revoke_consent_auth_connectors_connector_id_consent_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connector_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revoke_invitation_invitations_invitation_id_revoke_post**
> revoke_invitation_invitations_invitation_id_revoke_post(invitation_id, cookie_name=cookie_name)

Revoke Invitation

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    invitation_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Revoke Invitation
        api_instance.revoke_invitation_invitations_invitation_id_revoke_post(invitation_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->revoke_invitation_invitations_invitation_id_revoke_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invitation_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revoke_tenant_model_access_llm_admin_tenants_tenant_id_models_model_id_delete**
> revoke_tenant_model_access_llm_admin_tenants_tenant_id_models_model_id_delete(tenant_id, model_id, cookie_name=cookie_name)

Revoke Tenant Model Access

Revoke a tenant's access to an LLM model (superadmin only).

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    tenant_id = 56 # int | 
    model_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Revoke Tenant Model Access
        api_instance.revoke_tenant_model_access_llm_admin_tenants_tenant_id_models_model_id_delete(tenant_id, model_id, cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->revoke_tenant_model_access_llm_admin_tenants_tenant_id_models_model_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **int**|  | 
 **model_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **root_get**
> object root_get()

Root

A welcome message for the API and testing.

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)

    try:
        # Root
        api_response = api_instance.root_get()
        print("The response of DefaultApi->root_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->root_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_email_confirmation_auth_send_email_confirmation_post**
> send_email_confirmation_auth_send_email_confirmation_post(cookie_name=cookie_name)

Send Email Confirmation

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Send Email Confirmation
        api_instance.send_email_confirmation_auth_send_email_confirmation_post(cookie_name=cookie_name)
    except Exception as e:
        print("Exception when calling DefaultApi->send_email_confirmation_auth_send_email_confirmation_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cookie_name** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **simple_chat_simple_chat_post**
> SimpleMessageOut simple_chat_simple_chat_post(simple_message_in, cookie_name=cookie_name)

Simple Chat

Simple chat endpoint that handles both help requests and feedback.
Automatically detects whether the message is a help request or feedback.
Maintains conversation history for context.
Supports multiple languages (DE/EN) for help responses.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.simple_message_in import SimpleMessageIn
from neuland_hub_sdk.models.simple_message_out import SimpleMessageOut
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    simple_message_in = neuland_hub_sdk.SimpleMessageIn() # SimpleMessageIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Simple Chat
        api_response = api_instance.simple_chat_simple_chat_post(simple_message_in, cookie_name=cookie_name)
        print("The response of DefaultApi->simple_chat_simple_chat_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->simple_chat_simple_chat_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **simple_message_in** | [**SimpleMessageIn**](SimpleMessageIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**SimpleMessageOut**](SimpleMessageOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stat_stat_get**
> object stat_stat_get()

Stat

Returns application stat.

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)

    try:
        # Stat
        api_response = api_instance.stat_stat_get()
        print("The response of DefaultApi->stat_stat_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->stat_stat_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submit_assistant_assistants_submit_post**
> Assistant submit_assistant_assistants_submit_post(name, cookie_name=cookie_name, provider=provider, model=model, description=description, avatar=avatar, instructions=instructions, temperature=temperature, similarity_top_k=similarity_top_k, files=files)

Submit Assistant

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.assistant import Assistant
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    name = 'name_example' # str | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    provider = 'provider_example' # str |  (optional)
    model = 'model_example' # str |  (optional)
    description = 'description_example' # str |  (optional)
    avatar = 'avatar_example' # str |  (optional)
    instructions = 'instructions_example' # str |  (optional)
    temperature = 3.4 # float |  (optional)
    similarity_top_k = 56 # int |  (optional)
    files = ['files_example'] # List[str] |  (optional)

    try:
        # Submit Assistant
        api_response = api_instance.submit_assistant_assistants_submit_post(name, cookie_name=cookie_name, provider=provider, model=model, description=description, avatar=avatar, instructions=instructions, temperature=temperature, similarity_top_k=similarity_top_k, files=files)
        print("The response of DefaultApi->submit_assistant_assistants_submit_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->submit_assistant_assistants_submit_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**|  | 
 **cookie_name** | **str**|  | [optional] 
 **provider** | **str**|  | [optional] 
 **model** | **str**|  | [optional] 
 **description** | **str**|  | [optional] 
 **avatar** | **str**|  | [optional] 
 **instructions** | **str**|  | [optional] 
 **temperature** | **float**|  | [optional] 
 **similarity_top_k** | **int**|  | [optional] 
 **files** | [**List[str]**](str.md)|  | [optional] 

### Return type

[**Assistant**](Assistant.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submit_message_messages_submit_post**
> Message submit_message_messages_submit_post(cookie_name=cookie_name, content=content, project_id=project_id, chat_id=chat_id, document_ids=document_ids, updated_at=updated_at, files=files, chat_temperature=chat_temperature, chat_similarity_top_k=chat_similarity_top_k, chat_system_prompt=chat_system_prompt, assistant_id=assistant_id, model=model, provider=provider, tool_ids=tool_ids, private=private, library_id=library_id)

Submit Message

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.message import Message
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    cookie_name = 'cookie_name_example' # str |  (optional)
    content = 'content_example' # str |  (optional)
    project_id = 56 # int |  (optional)
    chat_id = 56 # int |  (optional)
    document_ids = [56] # List[int] |  (optional)
    updated_at = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    files = ['files_example'] # List[str] |  (optional)
    chat_temperature = 3.4 # float |  (optional)
    chat_similarity_top_k = 56 # int |  (optional)
    chat_system_prompt = 'chat_system_prompt_example' # str |  (optional)
    assistant_id = 56 # int |  (optional)
    model = 'model_example' # str |  (optional)
    provider = 'provider_example' # str |  (optional)
    tool_ids = [56] # List[int] |  (optional)
    private = False # bool |  (optional) (default to False)
    library_id = 56 # int |  (optional)

    try:
        # Submit Message
        api_response = api_instance.submit_message_messages_submit_post(cookie_name=cookie_name, content=content, project_id=project_id, chat_id=chat_id, document_ids=document_ids, updated_at=updated_at, files=files, chat_temperature=chat_temperature, chat_similarity_top_k=chat_similarity_top_k, chat_system_prompt=chat_system_prompt, assistant_id=assistant_id, model=model, provider=provider, tool_ids=tool_ids, private=private, library_id=library_id)
        print("The response of DefaultApi->submit_message_messages_submit_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->submit_message_messages_submit_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cookie_name** | **str**|  | [optional] 
 **content** | **str**|  | [optional] 
 **project_id** | **int**|  | [optional] 
 **chat_id** | **int**|  | [optional] 
 **document_ids** | [**List[int]**](int.md)|  | [optional] 
 **updated_at** | **datetime**|  | [optional] 
 **files** | [**List[str]**](str.md)|  | [optional] 
 **chat_temperature** | **float**|  | [optional] 
 **chat_similarity_top_k** | **int**|  | [optional] 
 **chat_system_prompt** | **str**|  | [optional] 
 **assistant_id** | **int**|  | [optional] 
 **model** | **str**|  | [optional] 
 **provider** | **str**|  | [optional] 
 **tool_ids** | [**List[int]**](int.md)|  | [optional] 
 **private** | **bool**|  | [optional] [default to False]
 **library_id** | **int**|  | [optional] 

### Return type

[**Message**](Message.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **summerize_chat_chats_chat_id_summary_get**
> str summerize_chat_chats_chat_id_summary_get(chat_id, cookie_name=cookie_name)

Summerize Chat

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    chat_id = 56 # int | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Summerize Chat
        api_response = api_instance.summerize_chat_chats_chat_id_summary_get(chat_id, cookie_name=cookie_name)
        print("The response of DefaultApi->summerize_chat_chats_chat_id_summary_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->summerize_chat_chats_chat_id_summary_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **int**|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

**str**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **translate_message_messages_message_id_translate_get**
> Translation translate_message_messages_message_id_translate_get(message_id, lang, cookie_name=cookie_name)

Translate Message

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.translation import Translation
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    message_id = 56 # int | 
    lang = 'lang_example' # str | Target language. Preferably RFC 5646 format.
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Translate Message
        api_response = api_instance.translate_message_messages_message_id_translate_get(message_id, lang, cookie_name=cookie_name)
        print("The response of DefaultApi->translate_message_messages_message_id_translate_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->translate_message_messages_message_id_translate_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message_id** | **int**|  | 
 **lang** | **str**| Target language. Preferably RFC 5646 format. | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Translation**](Translation.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unimport_documents_documents_import_delete**
> unimport_documents_documents_import_delete(src, drive_id, drive_item_ids, cookie_name=cookie_name, project_id=project_id, chat_id=chat_id, assistant_id=assistant_id)

Unimport Documents

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    src = 'src_example' # str | Source type which the documents will be imported from
    drive_id = 'drive_id_example' # str | Sharepoint drive ID
    drive_item_ids = ['drive_item_ids_example'] # List[str] | Sharepoint item IDs of the documents to be unimported
    cookie_name = 'cookie_name_example' # str |  (optional)
    project_id = 56 # int |  (optional)
    chat_id = 56 # int |  (optional)
    assistant_id = 56 # int |  (optional)

    try:
        # Unimport Documents
        api_instance.unimport_documents_documents_import_delete(src, drive_id, drive_item_ids, cookie_name=cookie_name, project_id=project_id, chat_id=chat_id, assistant_id=assistant_id)
    except Exception as e:
        print("Exception when calling DefaultApi->unimport_documents_documents_import_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **src** | **str**| Source type which the documents will be imported from | 
 **drive_id** | **str**| Sharepoint drive ID | 
 **drive_item_ids** | [**List[str]**](str.md)| Sharepoint item IDs of the documents to be unimported | 
 **cookie_name** | **str**|  | [optional] 
 **project_id** | **int**|  | [optional] 
 **chat_id** | **int**|  | [optional] 
 **assistant_id** | **int**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_alert_alerts_alert_id_patch**
> BudgetAlert update_alert_alerts_alert_id_patch(alert_id, budget_alert_update, cookie_name=cookie_name, tenant_id=tenant_id)

Update Alert

Updates a existing budget alert.
Only Admins can do it.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.budget_alert import BudgetAlert
from neuland_hub_sdk.models.budget_alert_update import BudgetAlertUpdate
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    alert_id = 56 # int | 
    budget_alert_update = neuland_hub_sdk.BudgetAlertUpdate() # BudgetAlertUpdate | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Update Alert
        api_response = api_instance.update_alert_alerts_alert_id_patch(alert_id, budget_alert_update, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of DefaultApi->update_alert_alerts_alert_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_alert_alerts_alert_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alert_id** | **int**|  | 
 **budget_alert_update** | [**BudgetAlertUpdate**](BudgetAlertUpdate.md)|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

[**BudgetAlert**](BudgetAlert.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_app_applications_app_id_patch**
> Application update_app_applications_app_id_patch(app_id, application_in, cookie_name=cookie_name)

Update App

Update an existing application

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.application import Application
from neuland_hub_sdk.models.application_in import ApplicationIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    app_id = 56 # int | 
    application_in = neuland_hub_sdk.ApplicationIn() # ApplicationIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update App
        api_response = api_instance.update_app_applications_app_id_patch(app_id, application_in, cookie_name=cookie_name)
        print("The response of DefaultApi->update_app_applications_app_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_app_applications_app_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **int**|  | 
 **application_in** | [**ApplicationIn**](ApplicationIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Application**](Application.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_assistant_assistants_assistant_id_patch**
> Assistant update_assistant_assistants_assistant_id_patch(assistant_id, assistant_in, cookie_name=cookie_name)

Update Assistant

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.assistant import Assistant
from neuland_hub_sdk.models.assistant_in import AssistantIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    assistant_id = 56 # int | 
    assistant_in = neuland_hub_sdk.AssistantIn() # AssistantIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Assistant
        api_response = api_instance.update_assistant_assistants_assistant_id_patch(assistant_id, assistant_in, cookie_name=cookie_name)
        print("The response of DefaultApi->update_assistant_assistants_assistant_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_assistant_assistants_assistant_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistant_id** | **int**|  | 
 **assistant_in** | [**AssistantIn**](AssistantIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Assistant**](Assistant.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_chat_chats_chat_id_patch**
> Chat update_chat_chats_chat_id_patch(chat_id, chat_in, cookie_name=cookie_name)

Update Chat

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.chat import Chat
from neuland_hub_sdk.models.chat_in import ChatIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    chat_id = 56 # int | 
    chat_in = neuland_hub_sdk.ChatIn() # ChatIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Chat
        api_response = api_instance.update_chat_chats_chat_id_patch(chat_id, chat_in, cookie_name=cookie_name)
        print("The response of DefaultApi->update_chat_chats_chat_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_chat_chats_chat_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **int**|  | 
 **chat_in** | [**ChatIn**](ChatIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Chat**](Chat.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_chat_tool_settings_chats_chat_id_tools_tool_id_put**
> ChatToolSettingsOut update_chat_tool_settings_chats_chat_id_tools_tool_id_put(chat_id, tool_id, chat_tool_settings_update, cookie_name=cookie_name)

Update Chat Tool Settings

Update tool settings for a chat (upsert: create or update).

- Validates tool_id exists in Tool table
- Validates tool is enabled for the tenant
- Creates new ChatToolSettings entry if it doesn't exist
- Updates existing entry if it exists

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.chat_tool_settings_out import ChatToolSettingsOut
from neuland_hub_sdk.models.chat_tool_settings_update import ChatToolSettingsUpdate
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    chat_id = 56 # int | 
    tool_id = 56 # int | 
    chat_tool_settings_update = neuland_hub_sdk.ChatToolSettingsUpdate() # ChatToolSettingsUpdate | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Chat Tool Settings
        api_response = api_instance.update_chat_tool_settings_chats_chat_id_tools_tool_id_put(chat_id, tool_id, chat_tool_settings_update, cookie_name=cookie_name)
        print("The response of DefaultApi->update_chat_tool_settings_chats_chat_id_tools_tool_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_chat_tool_settings_chats_chat_id_tools_tool_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_id** | **int**|  | 
 **tool_id** | **int**|  | 
 **chat_tool_settings_update** | [**ChatToolSettingsUpdate**](ChatToolSettingsUpdate.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**ChatToolSettingsOut**](ChatToolSettingsOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_connector_auth_connectors_connector_id_patch**
> Connector update_connector_auth_connectors_connector_id_patch(connector_id, connector_update, cookie_name=cookie_name)

Update Connector

Update a connector (superadmin only).

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.connector import Connector
from neuland_hub_sdk.models.connector_update import ConnectorUpdate
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    connector_id = 56 # int | 
    connector_update = neuland_hub_sdk.ConnectorUpdate() # ConnectorUpdate | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Connector
        api_response = api_instance.update_connector_auth_connectors_connector_id_patch(connector_id, connector_update, cookie_name=cookie_name)
        print("The response of DefaultApi->update_connector_auth_connectors_connector_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_connector_auth_connectors_connector_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connector_id** | **int**|  | 
 **connector_update** | [**ConnectorUpdate**](ConnectorUpdate.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Connector**](Connector.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_current_settings_settings_current_patch**
> Settings update_current_settings_settings_current_patch(settings_in, cookie_name=cookie_name, tenant_id=tenant_id)

Update Current Settings

Update settings for current user's tenant (tenant admin only)

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.settings import Settings
from neuland_hub_sdk.models.settings_in import SettingsIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    settings_in = neuland_hub_sdk.SettingsIn() # SettingsIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Update Current Settings
        api_response = api_instance.update_current_settings_settings_current_patch(settings_in, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of DefaultApi->update_current_settings_settings_current_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_current_settings_settings_current_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settings_in** | [**SettingsIn**](SettingsIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

[**Settings**](Settings.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_current_tenant_tenants_current_patch**
> TenantOut update_current_tenant_tenants_current_patch(tenant_update_in, cookie_name=cookie_name, tenant_id=tenant_id)

Update Current Tenant

Update current user's tenant (tenant admin only)

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tenant_out import TenantOut
from neuland_hub_sdk.models.tenant_update_in import TenantUpdateIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    tenant_update_in = neuland_hub_sdk.TenantUpdateIn() # TenantUpdateIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Update Current Tenant
        api_response = api_instance.update_current_tenant_tenants_current_patch(tenant_update_in, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of DefaultApi->update_current_tenant_tenants_current_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_current_tenant_tenants_current_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_update_in** | [**TenantUpdateIn**](TenantUpdateIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

[**TenantOut**](TenantOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_group_membership_applications_group_access_put**
> List[ApplicationGroup] update_group_membership_applications_group_access_put(group_app_access_in, cookie_name=cookie_name, tenant_id=tenant_id)

Update Group Membership

Grant or update app access for a user group

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.application_group import ApplicationGroup
from neuland_hub_sdk.models.group_app_access_in import GroupAppAccessIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    group_app_access_in = neuland_hub_sdk.GroupAppAccessIn() # GroupAppAccessIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Update Group Membership
        api_response = api_instance.update_group_membership_applications_group_access_put(group_app_access_in, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of DefaultApi->update_group_membership_applications_group_access_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_group_membership_applications_group_access_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_app_access_in** | [**GroupAppAccessIn**](GroupAppAccessIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

[**List[ApplicationGroup]**](ApplicationGroup.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_group_users_groups_group_id_patch**
> UserGroup update_group_users_groups_group_id_patch(group_id, group_in, cookie_name=cookie_name, tenant_id=tenant_id)

Update Group

Update an existing user group

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.group_in import GroupIn
from neuland_hub_sdk.models.user_group import UserGroup
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    group_id = 56 # int | 
    group_in = neuland_hub_sdk.GroupIn() # GroupIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Update Group
        api_response = api_instance.update_group_users_groups_group_id_patch(group_id, group_in, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of DefaultApi->update_group_users_groups_group_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_group_users_groups_group_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **int**|  | 
 **group_in** | [**GroupIn**](GroupIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_library_libraries_library_id_patch**
> Library update_library_libraries_library_id_patch(library_id, library_update_in, cookie_name=cookie_name)

Update Library

Update an existing library

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.library import Library
from neuland_hub_sdk.models.library_update_in import LibraryUpdateIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    library_id = 56 # int | 
    library_update_in = neuland_hub_sdk.LibraryUpdateIn() # LibraryUpdateIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Library
        api_response = api_instance.update_library_libraries_library_id_patch(library_id, library_update_in, cookie_name=cookie_name)
        print("The response of DefaultApi->update_library_libraries_library_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_library_libraries_library_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_id** | **int**|  | 
 **library_update_in** | [**LibraryUpdateIn**](LibraryUpdateIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Library**](Library.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_llm_model_llm_admin_models_model_id_patch**
> LLMSettingsOut update_llm_model_llm_admin_models_model_id_patch(model_id, llm_settings_update, cookie_name=cookie_name)

Update Llm Model

Update an LLM model entry (superadmin only).

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.llm_settings_out import LLMSettingsOut
from neuland_hub_sdk.models.llm_settings_update import LLMSettingsUpdate
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    model_id = 56 # int | 
    llm_settings_update = neuland_hub_sdk.LLMSettingsUpdate() # LLMSettingsUpdate | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Llm Model
        api_response = api_instance.update_llm_model_llm_admin_models_model_id_patch(model_id, llm_settings_update, cookie_name=cookie_name)
        print("The response of DefaultApi->update_llm_model_llm_admin_models_model_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_llm_model_llm_admin_models_model_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**|  | 
 **llm_settings_update** | [**LLMSettingsUpdate**](LLMSettingsUpdate.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**LLMSettingsOut**](LLMSettingsOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_oauth_client_auth_connectors_oauth_clients_oauth_client_id_patch**
> OAuthClient update_oauth_client_auth_connectors_oauth_clients_oauth_client_id_patch(oauth_client_id, o_auth_client_update, cookie_name=cookie_name)

Update Oauth Client

Update an OAuth client (superadmin only).

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.o_auth_client import OAuthClient
from neuland_hub_sdk.models.o_auth_client_update import OAuthClientUpdate
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    oauth_client_id = 56 # int | 
    o_auth_client_update = neuland_hub_sdk.OAuthClientUpdate() # OAuthClientUpdate | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Oauth Client
        api_response = api_instance.update_oauth_client_auth_connectors_oauth_clients_oauth_client_id_patch(oauth_client_id, o_auth_client_update, cookie_name=cookie_name)
        print("The response of DefaultApi->update_oauth_client_auth_connectors_oauth_clients_oauth_client_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_oauth_client_auth_connectors_oauth_clients_oauth_client_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauth_client_id** | **int**|  | 
 **o_auth_client_update** | [**OAuthClientUpdate**](OAuthClientUpdate.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**OAuthClient**](OAuthClient.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_project_projects_project_id_patch**
> Project update_project_projects_project_id_patch(project_id, project_in, cookie_name=cookie_name)

Update Project

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.project import Project
from neuland_hub_sdk.models.project_in import ProjectIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    project_id = 56 # int | 
    project_in = neuland_hub_sdk.ProjectIn() # ProjectIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Project
        api_response = api_instance.update_project_projects_project_id_patch(project_id, project_in, cookie_name=cookie_name)
        print("The response of DefaultApi->update_project_projects_project_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_project_projects_project_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **int**|  | 
 **project_in** | [**ProjectIn**](ProjectIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_prompt_prompts_prompt_id_patch**
> Prompt update_prompt_prompts_prompt_id_patch(prompt_id, prompt_in, cookie_name=cookie_name)

Update Prompt

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.prompt import Prompt
from neuland_hub_sdk.models.prompt_in import PromptIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    prompt_id = 56 # int | 
    prompt_in = neuland_hub_sdk.PromptIn() # PromptIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Prompt
        api_response = api_instance.update_prompt_prompts_prompt_id_patch(prompt_id, prompt_in, cookie_name=cookie_name)
        print("The response of DefaultApi->update_prompt_prompts_prompt_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_prompt_prompts_prompt_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prompt_id** | **int**|  | 
 **prompt_in** | [**PromptIn**](PromptIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Prompt**](Prompt.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_settings_settings_settings_id_patch**
> Settings update_settings_settings_settings_id_patch(settings_id, settings_in, cookie_name=cookie_name, tenant_id=tenant_id)

Update Settings

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.settings import Settings
from neuland_hub_sdk.models.settings_in import SettingsIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    settings_id = 56 # int | 
    settings_in = neuland_hub_sdk.SettingsIn() # SettingsIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Update Settings
        api_response = api_instance.update_settings_settings_settings_id_patch(settings_id, settings_in, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of DefaultApi->update_settings_settings_settings_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_settings_settings_settings_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settings_id** | **int**|  | 
 **settings_in** | [**SettingsIn**](SettingsIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

[**Settings**](Settings.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_system_settings_admin_system_settings_update_post**
> object update_system_settings_admin_system_settings_update_post()

Update System Settings

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)

    try:
        # Update System Settings
        api_response = api_instance.update_system_settings_admin_system_settings_update_post()
        print("The response of DefaultApi->update_system_settings_admin_system_settings_update_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_system_settings_admin_system_settings_update_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_tarif_tarifs_tarif_id_patch**
> Tarif update_tarif_tarifs_tarif_id_patch(tarif_id, tarif_in, cookie_name=cookie_name)

Update Tarif

Update an existing tarif plan.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tarif import Tarif
from neuland_hub_sdk.models.tarif_in import TarifIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    tarif_id = 56 # int | 
    tarif_in = neuland_hub_sdk.TarifIn() # TarifIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Tarif
        api_response = api_instance.update_tarif_tarifs_tarif_id_patch(tarif_id, tarif_in, cookie_name=cookie_name)
        print("The response of DefaultApi->update_tarif_tarifs_tarif_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_tarif_tarifs_tarif_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tarif_id** | **int**|  | 
 **tarif_in** | [**TarifIn**](TarifIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**Tarif**](Tarif.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_templates_template_id_patch**
> TemplateOut update_templates_template_id_patch(template_id, template_in, tenant_id=tenant_id, cookie_name=cookie_name)

Update

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.template_in import TemplateIn
from neuland_hub_sdk.models.template_out import TemplateOut
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    template_id = 56 # int | 
    template_in = neuland_hub_sdk.TemplateIn() # TemplateIn | 
    tenant_id = 56 # int |  (optional)
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update
        api_response = api_instance.update_templates_template_id_patch(template_id, template_in, tenant_id=tenant_id, cookie_name=cookie_name)
        print("The response of DefaultApi->update_templates_template_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_templates_template_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **int**|  | 
 **template_in** | [**TemplateIn**](TemplateIn.md)|  | 
 **tenant_id** | **int**|  | [optional] 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**TemplateOut**](TemplateOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_tenant_tenants_tenant_id_patch**
> TenantOut update_tenant_tenants_tenant_id_patch(tenant_id, tenant_update_in, cookie_name=cookie_name)

Update Tenant

Update a tenant (superadmin only)

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tenant_out import TenantOut
from neuland_hub_sdk.models.tenant_update_in import TenantUpdateIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    tenant_id = 56 # int | 
    tenant_update_in = neuland_hub_sdk.TenantUpdateIn() # TenantUpdateIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Tenant
        api_response = api_instance.update_tenant_tenants_tenant_id_patch(tenant_id, tenant_update_in, cookie_name=cookie_name)
        print("The response of DefaultApi->update_tenant_tenants_tenant_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_tenant_tenants_tenant_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **int**|  | 
 **tenant_update_in** | [**TenantUpdateIn**](TenantUpdateIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**TenantOut**](TenantOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_tool_tools_tool_id_patch**
> ToolOut update_tool_tools_tool_id_patch(tool_id, tool_update, cookie_name=cookie_name)

Update Tool

Update a tool (superadmin only)

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.tool_out import ToolOut
from neuland_hub_sdk.models.tool_update import ToolUpdate
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    tool_id = 56 # int | 
    tool_update = neuland_hub_sdk.ToolUpdate() # ToolUpdate | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update Tool
        api_response = api_instance.update_tool_tools_tool_id_patch(tool_id, tool_update, cookie_name=cookie_name)
        print("The response of DefaultApi->update_tool_tools_tool_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_tool_tools_tool_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tool_id** | **int**|  | 
 **tool_update** | [**ToolUpdate**](ToolUpdate.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**ToolOut**](ToolOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_user_membership_applications_user_access_put**
> List[ApplicationMember] update_user_membership_applications_user_access_put(application_access_in, cookie_name=cookie_name, tenant_id=tenant_id)

Update User Membership

Grant or update app access for list of users

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.application_access_in import ApplicationAccessIn
from neuland_hub_sdk.models.application_member import ApplicationMember
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    application_access_in = neuland_hub_sdk.ApplicationAccessIn() # ApplicationAccessIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Update User Membership
        api_response = api_instance.update_user_membership_applications_user_access_put(application_access_in, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of DefaultApi->update_user_membership_applications_user_access_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_user_membership_applications_user_access_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_access_in** | [**ApplicationAccessIn**](ApplicationAccessIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

[**List[ApplicationMember]**](ApplicationMember.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_user_users_user_id_patch**
> UserOut update_user_users_user_id_patch(user_id, user_update_in, cookie_name=cookie_name)

Update User

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.user_out import UserOut
from neuland_hub_sdk.models.user_update_in import UserUpdateIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    user_id = 56 # int | 
    user_update_in = neuland_hub_sdk.UserUpdateIn() # UserUpdateIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Update User
        api_response = api_instance.update_user_users_user_id_patch(user_id, user_update_in, cookie_name=cookie_name)
        print("The response of DefaultApi->update_user_users_user_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_user_users_user_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**|  | 
 **user_update_in** | [**UserUpdateIn**](UserUpdateIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**UserOut**](UserOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_documents_documents_post**
> List[Document] upload_documents_documents_post(files, cookie_name=cookie_name, project_id=project_id, chat_id=chat_id, assistant_id=assistant_id, message_id=message_id, library_id=library_id)

Upload Documents

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.document import Document
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    files = ['files_example'] # List[str] | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    project_id = 56 # int |  (optional)
    chat_id = 56 # int |  (optional)
    assistant_id = 56 # int |  (optional)
    message_id = 56 # int |  (optional)
    library_id = 56 # int |  (optional)

    try:
        # Upload Documents
        api_response = api_instance.upload_documents_documents_post(files, cookie_name=cookie_name, project_id=project_id, chat_id=chat_id, assistant_id=assistant_id, message_id=message_id, library_id=library_id)
        print("The response of DefaultApi->upload_documents_documents_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->upload_documents_documents_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **files** | [**List[str]**](str.md)|  | 
 **cookie_name** | **str**|  | [optional] 
 **project_id** | **int**|  | [optional] 
 **chat_id** | **int**|  | [optional] 
 **assistant_id** | **int**|  | [optional] 
 **message_id** | **int**|  | [optional] 
 **library_id** | **int**|  | [optional] 

### Return type

[**List[Document]**](Document.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upsert_members_users_members_group_id_put**
> List[UserGroupMember] upsert_members_users_members_group_id_put(group_id, request_body, cookie_name=cookie_name, tenant_id=tenant_id)

Upsert Members

Synchronize group members — add new ones and remove missing ones.

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.user_group_member import UserGroupMember
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    group_id = 56 # int | 
    request_body = [56] # List[Optional[int]] | 
    cookie_name = 'cookie_name_example' # str |  (optional)
    tenant_id = 56 # int |  (optional)

    try:
        # Upsert Members
        api_response = api_instance.upsert_members_users_members_group_id_put(group_id, request_body, cookie_name=cookie_name, tenant_id=tenant_id)
        print("The response of DefaultApi->upsert_members_users_members_group_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->upsert_members_users_members_group_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **int**|  | 
 **request_body** | [**List[Optional[int]]**](int.md)|  | 
 **cookie_name** | **str**|  | [optional] 
 **tenant_id** | **int**|  | [optional] 

### Return type

[**List[UserGroupMember]**](UserGroupMember.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upsert_my_preferences_users_me_preferences_patch**
> UserPreferenceOut upsert_my_preferences_users_me_preferences_patch(user_preference_update_in, cookie_name=cookie_name)

Upsert My Preferences

### Example

* Api Key Authentication (APIKeyHeader):
* OAuth Authentication (OAuth2PasswordBearer):

```python
import neuland_hub_sdk
from neuland_hub_sdk.models.user_preference_out import UserPreferenceOut
from neuland_hub_sdk.models.user_preference_update_in import UserPreferenceUpdateIn
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)
    user_preference_update_in = neuland_hub_sdk.UserPreferenceUpdateIn() # UserPreferenceUpdateIn | 
    cookie_name = 'cookie_name_example' # str |  (optional)

    try:
        # Upsert My Preferences
        api_response = api_instance.upsert_my_preferences_users_me_preferences_patch(user_preference_update_in, cookie_name=cookie_name)
        print("The response of DefaultApi->upsert_my_preferences_users_me_preferences_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->upsert_my_preferences_users_me_preferences_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_preference_update_in** | [**UserPreferenceUpdateIn**](UserPreferenceUpdateIn.md)|  | 
 **cookie_name** | **str**|  | [optional] 

### Return type

[**UserPreferenceOut**](UserPreferenceOut.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **version_version_get**
> object version_version_get()

Version

Returns version information about the deployed application.

### Example


```python
import neuland_hub_sdk
from neuland_hub_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = neuland_hub_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with neuland_hub_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = neuland_hub_sdk.DefaultApi(api_client)

    try:
        # Version
        api_response = api_instance.version_version_get()
        print("The response of DefaultApi->version_version_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->version_version_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

