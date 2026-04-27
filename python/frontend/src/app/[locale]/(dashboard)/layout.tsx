import Providers from "@/providers";

import { getIsMobile } from "@/lib/mobile.server";

import { TLocale } from "@/types/locale";
import dynamic from "next/dynamic";
import Configs from "@/lib/configs";

const Actions = dynamic(() => import(/* webpackChunkName: "components/actions" */ "@/components/actions"));

type TDashboardLayoutProps = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

async function DashboardLayout({ children, params }: TDashboardLayoutProps) {
    const { locale } = await params;

    const isMobile = await getIsMobile();

    return (
        <Providers isMobile={isMobile} locale={locale as TLocale}>
            {children}

            {Configs.isLocalMode && <Actions />}
        </Providers>
    );
}

export default DashboardLayout;
