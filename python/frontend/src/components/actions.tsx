"use client";

import { ArrowUpRightIcon, FilesIcon } from "@phosphor-icons/react";
import { removeAuthToken } from "@/lib/auth";
import { Button } from "@neulandai/ui-library";
import { useRouter } from "next/navigation";

function Actions() {
    const router = useRouter();

    const handleRedirectToDocs = () => {
        router.push("/docs");
    };

    const handleLogout = () => {
        removeAuthToken();
        router.push("/auth/sign-in");
    };

    return (
        <div className="fixed bottom-4 right-4 flex gap-2">
            <Button size="icon" onClick={handleRedirectToDocs}>
                <FilesIcon size={16} weight="bold" />
            </Button>
            <Button variant="destructive" size="icon" onClick={handleLogout}>
                <ArrowUpRightIcon size={16} weight="bold" />
            </Button>
        </div>
    );
}

export default Actions;
