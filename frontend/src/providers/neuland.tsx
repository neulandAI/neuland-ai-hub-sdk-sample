"use client";

import { useChangeLocale } from "@/lib/locale.client";
import { useEffect, useState } from "react";
import Spinner from "@/components/spinner";
import { getAuthToken, setAuthToken } from "@/lib/auth";
import { Toaster } from "@neulandai/ui-library";
import { TLocale } from "@/types/locale";
import Configs from "@/lib/configs";
import { useRouter } from "next/navigation";
import { useNeulandConfigs } from "@neulandai/ui-library/providers";

let readyTimeout: NodeJS.Timeout;

type TNeulandProviderProps = {
    locale: TLocale;
    children: React.ReactNode;
};

function NeulandProvider({ locale, children }: TNeulandProviderProps) {
    const [isReady, setIsReady] = useState(false);

    const { serviceToken, accessToken, locale: receivedLocale } = useNeulandConfigs();

    const changeLocale = useChangeLocale();
    const router = useRouter();

    useEffect(() => {
        if (Configs.isLocalMode) {
            readyTimeout = setTimeout(() => {
                setIsReady(true);
            }, 1000);

            const { access_token } = getAuthToken();

            if (!access_token) {
                router.push("/auth/sign-in");
            }

            return () => {
                if (readyTimeout) {
                    clearTimeout(readyTimeout);
                }
            };
        }
    }, [router]);

    useEffect(() => {
        if (!Configs.isLocalMode && serviceToken && accessToken) {
            if (receivedLocale && receivedLocale !== locale) {
                changeLocale(receivedLocale);
            }

            setAuthToken({ service_token: serviceToken, access_token: accessToken });
            
            readyTimeout = setTimeout(() => {
                setIsReady(true);
            }, 0);

            return () => {
                if (readyTimeout) {
                    clearTimeout(readyTimeout);
                }
            };
        }
    }, [accessToken, changeLocale, locale, receivedLocale, serviceToken]);

    if (!isReady) {
        return <Spinner />;
    }

    return (
        <>
            {children}
            <Toaster />
        </>
    );
}

export default NeulandProvider;
