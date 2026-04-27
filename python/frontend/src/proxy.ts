import { NextResponse, type NextRequest } from "next/server";

import { createI18nMiddleware } from "next-international/middleware";
import Configs from "@/lib/configs";

const i18nMiddleware = createI18nMiddleware({
    locales: ["de", "en"],
    defaultLocale: "de",
    urlMappingStrategy: "rewriteDefault",
});

export function proxy(request: NextRequest) {
    const localAuthPathname = "/auth/sign-in";
    const isLocalAuthPathname = request.nextUrl.pathname.endsWith(localAuthPathname);

    if (!Configs.isLocalMode && isLocalAuthPathname) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return i18nMiddleware(request);
}

export const config = {
    // paths that's shouldn't redirect
    matcher: "/((?!api|_next|static|public|videos|favicon.ico|robots.txt|sitemap.xml).*)",
};
