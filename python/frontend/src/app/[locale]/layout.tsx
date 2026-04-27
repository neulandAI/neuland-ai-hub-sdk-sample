import type { Metadata } from "next";

import { generalSansFont } from "@neulandai/ui-library/fonts";
import "@neulandai/ui-library/styles/components.css";
import "../globals.css";

type TRootLayoutProps = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
    title: "My AI App",
    description: "A new AI application for Neuland.ai.",
};

async function RootLayout({ children, params }: TRootLayoutProps) {
    const { locale } = await params;

    return (
        <html lang={locale} className="w-full h-full">
            <body className={`${generalSansFont.variable} w-full h-full`} suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}

export default RootLayout;
