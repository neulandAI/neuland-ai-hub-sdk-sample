"use client";

import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@neulandai/ui-library";
import { useRouter } from "next/navigation";

function DocsPage() {
    const router = useRouter();

    return (
        <div className="w-full min-h-screen bg-background">
            <div className="max-w-4xl mx-auto px-6 py-8">
                <div className="mb-8">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => router.push("/")}
                    >
                        <ArrowLeftIcon size={16} weight="bold" />
                    </Button>
                </div>

                <article className="space-y-12">
                    <header className="space-y-4">
                        <h1 className="text-4xl font-bold text-foreground">
                            AI Application Documentation
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Welcome to your AI application! This documentation will help you understand
                            the project structure, technologies used, and how to work with the Neuland AI Hub ecosystem.
                        </p>
                    </header>

                    <hr className="border-border" />

                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold text-foreground border-b border-border pb-2">
                            ⚠️ Important Notice
                        </h2>
                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                            <p className="text-foreground font-semibold mb-2">
                                This documentation page is intended for development purposes only.
                            </p>
                            <p className="text-muted-foreground mb-3">
                                It&apos;s recommended to remove this page before deploying to production. To remove it:
                            </p>
                            <pre className="bg-muted border border-border rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-foreground">
                                    {`# Remove the docs page\nrm -rf src/app/[locale]/docs\n\n# Or remove the entire route if you prefer\n# Just delete the docs folder from your project`}
                                </code>
                            </pre>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold text-foreground border-b border-border pb-2">
                            Technologies & Tools
                        </h2>
                        <p className="text-muted-foreground">
                            This application is built with modern web technologies:
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-3">Core Framework</h3>
                                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                                    <li><strong className="text-foreground">Next.js 16</strong> - React framework with App Router for server and client components</li>
                                    <li><strong className="text-foreground">React 19</strong> - Latest React version with improved performance and features</li>
                                    <li><strong className="text-foreground">TypeScript 5</strong> - Type-safe JavaScript for better development experience</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-3">Styling & UI</h3>
                                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                                    <li><strong className="text-foreground">Tailwind CSS 4</strong> - Utility-first CSS framework</li>
                                    <li><strong className="text-foreground">Neuland UI Library</strong> - Pre-built components designed for AI applications</li>
                                    <li><strong className="text-foreground">Phosphor Icons React</strong> - Beautiful icon library for React</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-3">State Management & Data Fetching</h3>
                                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                                    <li><strong className="text-foreground">TanStack React Query 5</strong> - Powerful data fetching and caching library</li>
                                    <li><strong className="text-foreground">Axios</strong> - Promise-based HTTP client for API calls</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-3">Internationalization</h3>
                                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                                    <li><strong className="text-foreground">next-international</strong> - Type-safe internationalization for Next.js</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-3">Development Tools</h3>
                                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                                    <li><strong className="text-foreground">ESLint</strong> - Code linting and quality checks</li>
                                    <li><strong className="text-foreground">React Compiler</strong> - Babel plugin for optimizing React components</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold text-foreground border-b border-border pb-2">
                            Project Structure
                        </h2>
                        <pre className="bg-muted border border-border rounded-lg p-4 overflow-x-auto">
                            <code className="text-sm text-muted-foreground">
                                {`src/
├── app/
│   ├── [locale]/                   # Internationalized routes
│   │   ├── (dashboard)/            # Main dashboard (protected)
│   │   │   ├── layout.tsx          # Dashboard layout with navigation
│   │   │   └── page.tsx            # Dashboard home page
│   │   ├── auth/
│   │   │   └── sign-in/            # Authentication page
│   │   │       └── page.tsx
│   │   ├── docs/                   # This documentation page
│   │   │   └── page.tsx
│   │   └── layout.tsx              # Root locale layout
│   ├── actions/                    # Server actions
│   │   └── index.ts
│   ├── globals.css                 # Global styles
│   └── favicon.ico
├── components/                     # Reusable React components
│   ├── actions.tsx                 # Action components
│   └── spinner.tsx                 # Loading spinner
├── lib/                            # Utility libraries
│   ├── auth.ts                     # Authentication utilities
│   ├── axios.ts                    # Axios instance configuration
│   ├── configs.ts                  # App configuration
│   ├── locale.client.ts            # Client-side i18n
│   ├── locale.server.ts            # Server-side i18n
│   └── mobile.server.ts            # Mobile detection
├── locales/                        # Translation files
│   ├── en.json                     # English translations
│   └── de.json                     # German translations
├── providers/                      # React context providers
│   ├── index.tsx                   # Combined providers
│   └── neuland.tsx                 # Neuland-specific provider
├── types/                          # TypeScript type definitions
│   └── locale.ts
└── proxy.ts                        # Next.js proxy for auth & i18n`}
                            </code>
                        </pre>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold text-foreground border-b border-border pb-2">
                            Authentication & Service Tokens
                        </h2>

                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-3">Why Do You Need a Service Token?</h3>
                            <p className="text-muted-foreground mb-4">
                                Service tokens are essential for secure communication between your AI application
                                and the Neuland AI Hub backend. They:
                            </p>
                            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                                <li><strong className="text-foreground">Authenticate your application</strong> to the Hub API</li>
                                <li><strong className="text-foreground">Authorize access</strong> to user data and Hub services</li>
                                <li><strong className="text-foreground">Ensure security</strong> by validating each request</li>
                                <li><strong className="text-foreground">Enable personalization</strong> by identifying the current user</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-3">Setting Up Environment Variables</h3>
                            <p className="text-muted-foreground mb-3">
                                Add the following to your <code className="text-primary bg-muted px-1.5 py-0.5 rounded text-sm">.env</code> file:
                            </p>
                            <pre className="bg-muted border border-border rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-foreground">
                                    {`NEXT_PUBLIC_API_URL=<api_url>
NEXT_PUBLIC_HUB_FRONTEND_URL=<hub_frontend_url>
NEXT_PUBLIC_AI_APP_ID=<app_id>`}
                                </code>
                            </pre>
                            <p className="text-red-500 font-semibold mt-3">
                                Never commit your environment variables to version control!
                            </p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold text-foreground border-b border-border pb-2">
                            API Calls Examples
                        </h2>

                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-3">Using the Hub API</h3>
                            <p className="text-muted-foreground mb-3">
                                All Hub API endpoints follow this pattern:
                            </p>
                            <pre className="bg-muted border border-border rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-primary">
                                    {`<hub_frontend_url>/api/hub/*`}
                                </code>
                            </pre>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-3">Example 1: Exchange Service Token</h3>
                            <p className="text-muted-foreground mb-3">
                                This is the main server action to get a service token from the Hub:
                            </p>
                            <pre className="bg-muted border border-border rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-foreground">
                                    {`// src/app/actions/index.ts
"use server";
import { cookies } from "next/headers";

export const getServiceToken = async () => {
    const appId = process.env.NEXT_PUBLIC_AI_APP_ID;

    try {
        const cookieStore = await cookies();
        const accessToken = cookieStore.get("access-token")?.value;
        const response = await fetch(
            \`\${process.env.NEXT_PUBLIC_HUB_FRONTEND_URL}/api/hub/auth/exchange/token?app_id=\${appId}\`,
            {
                method: "POST",
                headers: {
                    "Authorization": \`Bearer \${accessToken}\`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ app_id: appId }),
            }
        );

        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}`}
                                </code>
                            </pre>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-3">Example 2: Get Current User Information (Using Fetch)</h3>
                            <p className="text-muted-foreground mb-3">
                                Use the service token to fetch user data from the Hub:
                            </p>
                            <pre className="bg-muted border border-border rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-foreground">
                                    {`// src/app/actions/user.ts
"use server";

export async function getCurrentUser() {
    try {
        const cookieStore = await cookies();
        const accessToken = cookieStore.get("access-token")?.value;
        const serviceToken = cookieStore.get("service-token")?.value;

        if (!accessToken || !serviceToken) {
            throw new Error("No access token or service token available");
        }

        const response = await fetch(
            \`\${process.env.NEXT_PUBLIC_HUB_FRONTEND_URL}/api/hub/users/me\`,
            {
                method: "GET",
                headers: {
                    "Authorization": \`Bearer \${accessToken}\`,
                    "x-service-token": serviceToken,
                    "Content-Type": "application/json",
                },
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Failed to fetch user:", error);
        return null;
    }
}`}
                                </code>
                            </pre>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-3">Example 3: Client-Side Call to Internal Backend (Not Hub)</h3>
                            <p className="text-muted-foreground mb-3">
                                This example shows how to call your own internal backend API from the client side using Axios:
                            </p>
                            <pre className="bg-muted border border-border rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-foreground">
                                    {`// src/components/ChatHistory.tsx
"use client";

import Axios from "@/lib/axios";
import { useEffect, useState } from "react";

async function fetchChatHistory() {
    const response = await Axios.get(
        \`/chat/history\`
    );
    return response.data;
}

function ChatHistory() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["chat-history"],
        queryFn: () => fetchChatHistory(),
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            {history.map((chat) => (
                <div key={chat.id}>{chat.message}</div>
            ))}
        </div>
    );
}`}
                                </code>
                            </pre>
                            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mt-3">
                                <p className="text-sm text-muted-foreground">
                                    <strong className="text-foreground">Note:</strong> This is for calling your own internal backend API,
                                    separate from the Neuland AI Hub API. Make sure to set{" "}
                                    <code className="text-primary bg-muted px-1.5 py-0.5 rounded text-xs">NEXT_PUBLIC_API_URL</code>{" "}
                                    in your environment variables.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold text-foreground border-b border-border pb-2">
                            Neuland UI Library & Storybook
                        </h2>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                            <h3 className="text-xl font-bold text-foreground mb-2">Storybook URL</h3>
                            <p className="text-muted-foreground mb-3">
                                Explore all available components in the Neuland UI Library:
                            </p>
                            <a
                                href="https://storybook.neuland-ai.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline text-lg font-semibold"
                            >
                                🔗 https://storybook.neuland-ai.com/
                            </a>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-3">Accessing Storybook</h3>
                            <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
                                <li><strong className="text-foreground">Visit</strong> the Storybook URL above</li>
                                <li>
                                    <strong className="text-foreground">Sign in</strong> with your{" "}
                                    <code className="text-primary bg-muted px-1.5 py-0.5 rounded text-sm">@neuland.ai</code>{" "}
                                    email address
                                </li>
                                <li><strong className="text-foreground">Explore</strong> all available components, their props, and usage examples</li>
                                <li><strong className="text-foreground">Copy</strong> code snippets directly into your application</li>
                            </ol>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-3">Available Components</h3>
                            <p className="text-muted-foreground mb-3">The Neuland UI Library includes:</p>
                            <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
                                <li>• <strong className="text-foreground">Buttons</strong> - Various button styles and variants</li>
                                <li>• <strong className="text-foreground">Forms</strong> - Input fields, textareas, selects</li>
                                <li>• <strong className="text-foreground">Navigation</strong> - Navbars, sidebars, breadcrumbs</li>
                                <li>• <strong className="text-foreground">Cards</strong> - Content containers</li>
                                <li>• <strong className="text-foreground">Modals & Dialogs</strong> - Overlays and popups</li>
                                <li>• <strong className="text-foreground">Tables</strong> - Data tables with sorting</li>
                                <li>• <strong className="text-foreground">Notifications</strong> - Toasts and alerts</li>
                                <li>• <strong className="text-foreground">And much more!</strong></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-3">Using UI Components</h3>
                            <pre className="bg-muted border border-border rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-foreground">
                                    {`import { Button, Card, Input } from "@neulandai/ui-library";

export function MyComponent() {
    return (
        <Card>
            <h2>Create New Project</h2>
            <Input placeholder="Project name" />
            <Button variant="outline">Create</Button>
        </Card>
    );
}`}
                                </code>
                            </pre>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold text-foreground border-b border-border pb-2">
                            Internationalization
                        </h2>
                        <p className="text-muted-foreground">
                            This app supports multiple languages out of the box.
                        </p>

                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-3">Using Translations</h3>
                            <p className="text-muted-foreground mb-3">
                                <strong className="text-foreground">Server Components:</strong>
                            </p>
                            <pre className="bg-muted border border-border rounded-lg p-4 overflow-x-auto mb-4">
                                <code className="text-sm text-foreground">
                                    {`import { getTranslate } from "@/lib/locale.server";

async function MyPage() {
    const t = await getTranslate();
    return <h1>{t("welcome")}</h1>;
}`}
                                </code>
                            </pre>

                            <p className="text-muted-foreground mb-3">
                                <strong className="text-foreground">Client Components:</strong>
                            </p>
                            <pre className="bg-muted border border-border rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-foreground">
                                    {`"use client";
import { useTranslate } from "@/lib/locale.client";

function MyComponent() {
    const t = useTranslate();
    return <button>{t("submit")}</button>;
}`}
                                </code>
                            </pre>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold text-foreground border-b border-border pb-2">
                            Available Scripts
                        </h2>
                        <pre className="bg-muted border border-border rounded-lg p-4 overflow-x-auto">
                            <code className="text-sm text-foreground">
                                {`# Development server (production mode)
npm run dev

# Development server with local authentication
npm run dev:local

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint`}
                            </code>
                        </pre>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold text-foreground border-b border-border pb-2">
                            Proxy & Authentication
                        </h2>
                        <p className="text-muted-foreground mb-3">
                            The <code className="text-primary bg-muted px-1.5 py-0.5 rounded text-sm">proxy.ts</code> file handles:
                        </p>
                        <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                            <li><strong className="text-foreground">Route protection</strong> - Redirects unauthenticated users to sign-in</li>
                            <li><strong className="text-foreground">Locale detection</strong> - Automatically detects user&apos;s language preference</li>
                            <li><strong className="text-foreground">Token validation</strong> - Verifies authentication tokens</li>
                        </ul>
                        <p className="text-muted-foreground mt-3">
                            Protected routes are under the <code className="text-primary bg-muted px-1.5 py-0.5 rounded text-sm">(dashboard)</code> folder.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold text-foreground border-b border-border pb-2">
                            Best Practices
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-2">Security</h3>
                                <ul className="space-y-1 list-none text-muted-foreground">
                                    <li>✅ Never commit sensitive tokens or credentials</li>
                                    <li>✅ Always validate user input</li>
                                    <li>✅ Use server actions for sensitive operations</li>
                                    <li>✅ Implement proper error handling</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-2">Performance</h3>
                                <ul className="space-y-1 list-none text-muted-foreground">
                                    <li>✅ Use React Query for data caching</li>
                                    <li>✅ Implement loading states</li>
                                    <li>✅ Optimize images with Next.js Image component</li>
                                    <li>✅ Use server components when possible</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-2">Code Quality</h3>
                                <ul className="space-y-1 list-none text-muted-foreground">
                                    <li>✅ Follow TypeScript strict mode</li>
                                    <li>✅ Write meaningful component names</li>
                                    <li>✅ Keep components small and focused</li>
                                    <li>✅ Use proper TypeScript types</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold text-foreground border-b border-border pb-2">
                            Additional Resources
                        </h2>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>
                                • <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    Next.js Documentation
                                </a>
                            </li>
                            <li>
                                • <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    React Documentation
                                </a>
                            </li>
                            <li>
                                • <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    Tailwind CSS Documentation
                                </a>
                            </li>
                            <li>
                                • <a href="https://tanstack.com/query" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    TanStack Query Documentation
                                </a>
                            </li>
                        </ul>
                    </section>

                    <footer className="pt-8 border-t border-border">
                        <p className="text-center text-xl font-bold text-foreground">
                            Happy Coding! 🚀
                        </p>
                    </footer>
                </article>
            </div>
        </div>
    );
}

export default DocsPage;
