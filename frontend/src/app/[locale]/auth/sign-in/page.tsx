"use client";

import { getServiceToken } from "@/app/actions";
import { setAuthToken } from "@/lib/auth";
import { Button, Input } from "@neulandai/ui-library";
import { SpinnerGapIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function SignInPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [accessToken, setAccessToken] = useState("");

    const router = useRouter();

    const handleAuthorize = async () => {
        setError(null);
        setIsLoading(true);
        setAuthToken({ service_token: "", access_token: accessToken });

        try {
            const serviceToken = await getServiceToken();

            if (typeof serviceToken !== "string" || !serviceToken) {
                setError("Invalid service token. Please try again.");
                return;
            }

            setAuthToken({ service_token: serviceToken, access_token: accessToken });
            router.push("/");
        } catch {
            setError("Failed to authorize. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-4 bg-background rounded-lg shadow-sm border border-border flex flex-col gap-5">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-xl font-bold">Sign In</h1>
                    <p className="text-sm text-muted-foreground">Paste your access token here to continue</p>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-3 [&>div]:w-full">
                    <Input
                        type="text"
                        placeholder="Access Token"
                        className="h-10"
                        value={accessToken}
                        onChange={(event) => setAccessToken(event.target.value)}
                    />

                    {!!error && <p className="w-full text-sm text-destructive">{error}</p>}

                    <Button className="w-full" disabled={!accessToken || isLoading} onClick={handleAuthorize}>
                        {isLoading && <SpinnerGapIcon size={16} weight="bold" className="animate-spin" />} Authorize
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;
