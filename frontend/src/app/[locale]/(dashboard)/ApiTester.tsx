"use client";

import { useState } from "react";
import { getUserProfile, getLlmModels, createAssistant } from "@/app/actions/api-test-actions";

interface UserProfileData {
    name: string | null;
    email: string;
    first_name: string;
    last_name: string;
    admin: boolean;
    tenant_id: number;
}

interface LlmModel {
    name: string;
    provider: string;
    description: string;
    default: boolean;
    multi_modal: boolean;
    gdpr_compliant: boolean;
}

function UserProfileTabs({ data }: { data: UserProfileData }) {
    const [activeTab, setActiveTab] = useState<"json" | "ui">("ui");

    return (
        <div>
            <div className="flex gap-2 mb-4 border-b border-border">
                <button
                    onClick={() => setActiveTab("ui")}
                    className={`px-4 py-2 font-medium transition-colors ${
                        activeTab === "ui"
                            ? "text-primary border-b-2 border-primary"
                            : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                    UI View
                </button>
                <button
                    onClick={() => setActiveTab("json")}
                    className={`px-4 py-2 font-medium transition-colors ${
                        activeTab === "json"
                            ? "text-primary border-b-2 border-primary"
                            : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                    JSON View
                </button>
            </div>

            {activeTab === "json" ? (
                <div className="bg-muted rounded-lg p-4">
                    <code className="text-sm text-muted-foreground whitespace-pre-wrap break-all">
                        {JSON.stringify(data, null, 2)}
                    </code>
                </div>
            ) : (
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-muted rounded-lg p-4">
                            <p className="text-xs text-muted-foreground mb-1">Name</p>
                            <p className="text-base font-medium text-foreground">
                                {data.name || `${data.first_name} ${data.last_name}`}
                            </p>
                        </div>
                        <div className="bg-muted rounded-lg p-4">
                            <p className="text-xs text-muted-foreground mb-1">Email</p>
                            <p className="text-base font-medium text-foreground">{data.email}</p>
                        </div>
                        <div className="bg-muted rounded-lg p-4">
                            <p className="text-xs text-muted-foreground mb-1">First Name</p>
                            <p className="text-base font-medium text-foreground">{data.first_name}</p>
                        </div>
                        <div className="bg-muted rounded-lg p-4">
                            <p className="text-xs text-muted-foreground mb-1">Last Name</p>
                            <p className="text-base font-medium text-foreground">{data.last_name}</p>
                        </div>
                        <div className="bg-muted rounded-lg p-4">
                            <p className="text-xs text-muted-foreground mb-1">Role</p>
                            <p className="text-base font-medium text-foreground">
                                {data.admin ? (
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                                        Admin
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted-foreground/20 text-foreground">
                                        User
                                    </span>
                                )}
                            </p>
                        </div>
                        <div className="bg-muted rounded-lg p-4">
                            <p className="text-xs text-muted-foreground mb-1">Tenant ID</p>
                            <p className="text-base font-medium text-foreground">{data.tenant_id}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function LlmModelsTabs({ data }: { data: LlmModel[] }) {
    const [activeTab, setActiveTab] = useState<"json" | "ui">("ui");

    return (
        <div>
            <div className="flex gap-2 mb-4 border-b border-border">
                <button
                    onClick={() => setActiveTab("ui")}
                    className={`px-4 py-2 font-medium transition-colors ${
                        activeTab === "ui"
                            ? "text-primary border-b-2 border-primary"
                            : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                    UI View
                </button>
                <button
                    onClick={() => setActiveTab("json")}
                    className={`px-4 py-2 font-medium transition-colors ${
                        activeTab === "json"
                            ? "text-primary border-b-2 border-primary"
                            : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                    JSON View
                </button>
            </div>

            {activeTab === "json" ? (
                <div className="bg-muted rounded-lg p-4">
                    <code className="text-sm text-muted-foreground whitespace-pre-wrap break-all">
                        {JSON.stringify(data, null, 2)}
                    </code>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.map((model, index) => (
                        <div key={index} className="bg-muted rounded-lg p-4 space-y-3">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h4 className="text-base font-semibold text-foreground">{model.name}</h4>
                                    <p className="text-xs text-muted-foreground mt-1">{model.description}</p>
                                </div>
                                {model.default && (
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                                        Default
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted-foreground/20 text-foreground">
                                    {model.provider}
                                </span>
                                {model.multi_modal && (
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-600 dark:text-blue-400">
                                        Multi-modal
                                    </span>
                                )}
                                {model.gdpr_compliant && (
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-600 dark:text-green-400">
                                        GDPR Compliant
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

interface ApiTesterProps {
    serviceToken: string;
}

export default function ApiTester({ serviceToken }: ApiTesterProps) {
    const [userProfile, setUserProfile] = useState<any>(null);
    const [llmModels, setLlmModels] = useState<any>(null);
    const [loadingProfile, setLoadingProfile] = useState(false);
    const [loadingModels, setLoadingModels] = useState(false);
    const [errorProfile, setErrorProfile] = useState<string | null>(null);
    const [errorModels, setErrorModels] = useState<string | null>(null);

    const [assistantName, setAssistantName] = useState("");
    const [assistantDescription, setAssistantDescription] = useState("");
    const [assistantProvider, setAssistantProvider] = useState("");
    const [assistantModel, setAssistantModel] = useState("");
    const [assistantResult, setAssistantResult] = useState<any>(null);
    const [loadingAssistant, setLoadingAssistant] = useState(false);
    const [errorAssistant, setErrorAssistant] = useState<string | null>(null);

    const fetchUserProfile = async () => {
        setLoadingProfile(true);
        setErrorProfile(null);
        setUserProfile(null);
        try {
            const result = await getUserProfile(serviceToken);
            
            if (result.success) {
                setUserProfile(result.data);
            } else {
                setErrorProfile(result.error || "Unknown error");
            }
        } catch (error) {
            setErrorProfile(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        } finally {
            setLoadingProfile(false);
        }
    };

    const fetchLlmModels = async () => {
        setLoadingModels(true);
        setErrorModels(null);
        setLlmModels(null);
        try {
            const result = await getLlmModels(serviceToken);
            
            if (result.success) {
                setLlmModels(result.data);
            } else {
                setErrorModels(result.error || "Unknown error");
            }
        } catch (error) {
            setErrorModels(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        } finally {
            setLoadingModels(false);
        }
    };

    const handleCreateAssistant = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!assistantName.trim() || !assistantProvider.trim() || !assistantModel.trim()) {
            setErrorAssistant("Name, provider, and model are required");
            return;
        }

        setLoadingAssistant(true);
        setErrorAssistant(null);
        setAssistantResult(null);
        try {
            const result = await createAssistant(
                serviceToken,
                assistantName,
                assistantProvider,
                assistantModel,
                assistantDescription.trim() || undefined
            );
            
            if (result.success) {
                setAssistantResult(result.data);
                setAssistantName("");
                setAssistantDescription("");
                setAssistantProvider("");
                setAssistantModel("");
            } else {
                setErrorAssistant(result.error || "Unknown error");
            }
        } catch (error) {
            setErrorAssistant(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        } finally {
            setLoadingAssistant(false);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-8">
            <div className="flex flex-col gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-4 text-foreground">API Endpoints</h2>
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={fetchUserProfile}
                            disabled={loadingProfile}
                            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                        >
                            {loadingProfile ? "Loading..." : "Get User Profile"}
                        </button>
                        
                        <button
                            onClick={fetchLlmModels}
                            disabled={loadingModels}
                            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                        >
                            {loadingModels ? "Loading..." : "Get LLM Models"}
                        </button>
                    </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-4 text-foreground">Create Assistant</h2>
                    <form onSubmit={handleCreateAssistant} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="assistantName" className="block text-sm font-medium text-foreground mb-2">
                                    Name <span className="text-destructive">*</span>
                                </label>
                                <input
                                    id="assistantName"
                                    type="text"
                                    value={assistantName}
                                    onChange={(e) => setAssistantName(e.target.value)}
                                    placeholder="Enter assistant name"
                                    className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label htmlFor="assistantProvider" className="block text-sm font-medium text-foreground mb-2">
                                    Provider <span className="text-destructive">*</span>
                                </label>
                                <input
                                    id="assistantProvider"
                                    type="text"
                                    value={assistantProvider}
                                    onChange={(e) => setAssistantProvider(e.target.value)}
                                    placeholder="e.g., azure, openai"
                                    className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="assistantModel" className="block text-sm font-medium text-foreground mb-2">
                                Model <span className="text-destructive">*</span>
                            </label>
                            <input
                                id="assistantModel"
                                type="text"
                                value={assistantModel}
                                onChange={(e) => setAssistantModel(e.target.value)}
                                placeholder="e.g., gpt-4o, gpt-4.1"
                                className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label htmlFor="assistantDescription" className="block text-sm font-medium text-foreground mb-2">
                                Description <span className="text-muted-foreground text-xs">(optional)</span>
                            </label>
                            <textarea
                                id="assistantDescription"
                                value={assistantDescription}
                                onChange={(e) => setAssistantDescription(e.target.value)}
                                placeholder="Enter assistant description"
                                rows={3}
                                className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loadingAssistant}
                            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                        >
                            {loadingAssistant ? "Creating..." : "Create Assistant"}
                        </button>
                    </form>
                </div>

                {(userProfile || errorProfile) && (
                    <div className="bg-card border border-border rounded-lg p-6">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-base font-semibold text-foreground">User Profile</h3>
                            <button
                                onClick={() => {
                                    setUserProfile(null);
                                    setErrorProfile(null);
                                }}
                                className="px-3 py-1.5 text-sm bg-destructive/10 text-destructive hover:bg-destructive/20 rounded-lg font-medium transition-colors"
                            >
                                Clear
                            </button>
                        </div>
                        {errorProfile ? (
                            <div className="bg-destructive/10 text-destructive rounded-lg p-4">
                                <code className="text-sm whitespace-pre-wrap break-all">{errorProfile}</code>
                            </div>
                        ) : (
                            <UserProfileTabs data={userProfile} />
                        )}
                    </div>
                )}

                {(llmModels || errorModels) && (
                    <div className="bg-card border border-border rounded-lg p-6">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-base font-semibold text-foreground">LLM Models</h3>
                            <button
                                onClick={() => {
                                    setLlmModels(null);
                                    setErrorModels(null);
                                }}
                                className="px-3 py-1.5 text-sm bg-destructive/10 text-destructive hover:bg-destructive/20 rounded-lg font-medium transition-colors"
                            >
                                Clear
                            </button>
                        </div>
                        {errorModels ? (
                            <div className="bg-destructive/10 text-destructive rounded-lg p-4">
                                <code className="text-sm whitespace-pre-wrap break-all">{errorModels}</code>
                            </div>
                        ) : (
                            <LlmModelsTabs data={llmModels} />
                        )}
                    </div>
                )}

                {(assistantResult || errorAssistant) && (
                    <div className="bg-card border border-border rounded-lg p-6">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-base font-semibold text-foreground">Created Assistant</h3>
                            <button
                                onClick={() => {
                                    setAssistantResult(null);
                                    setErrorAssistant(null);
                                }}
                                className="px-3 py-1.5 text-sm bg-destructive/10 text-destructive hover:bg-destructive/20 rounded-lg font-medium transition-colors"
                            >
                                Clear
                            </button>
                        </div>
                        {errorAssistant ? (
                            <div className="bg-destructive/10 text-destructive rounded-lg p-4">
                                <code className="text-sm whitespace-pre-wrap break-all">{errorAssistant}</code>
                            </div>
                        ) : (
                            <div className="bg-muted rounded-lg p-4">
                                <code className="text-sm text-muted-foreground whitespace-pre-wrap break-all">
                                    {JSON.stringify(assistantResult, null, 2)}
                                </code>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
