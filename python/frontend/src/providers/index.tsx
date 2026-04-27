"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { I18nProviderClient } from "@/lib/locale.client";
import { createContext, useContext, useMemo } from "react";
import { Toaster } from "@neulandai/ui-library";
import { TLocale } from "@/types/locale";
import { NeulandConfigContextProvider } from "@neulandai/ui-library/providers";
import NeulandProvider from "@/providers/neuland";

const AppContext = createContext<{
    isMobile: boolean;
} | null>(null);

type TProvidersProps = {
    isMobile: boolean;
    locale: TLocale;
    children: React.ReactNode;
};

function Providers({ isMobile, locale, children }: TProvidersProps) {
    const queryClient = new QueryClient();

    const result = useMemo(() => ({ isMobile }), [isMobile]);

    return (
        <I18nProviderClient locale={locale}>
            <QueryClientProvider client={queryClient}>
                <AppContext.Provider value={result}>
                    <NeulandConfigContextProvider>
                        <NeulandProvider locale={locale}>{children}</NeulandProvider>
                        <Toaster />
                    </NeulandConfigContextProvider>
                </AppContext.Provider>
            </QueryClientProvider>
        </I18nProviderClient>
    );
}

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error("useAppContext must be used within a AppContextProvider");
    }

    return context;
};

export default Providers;
