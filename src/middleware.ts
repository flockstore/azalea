import createMiddleware from "next-intl/middleware";
import {createSharedPathnamesNavigation} from "next-intl/navigation";
import {localization} from "@/common/config/app";
import {NextRequest} from "next/server";
import {middleware} from "@/provider/auth.provider";

/**
 * Creates a middleware with next-intl localization.
 */
const intlMiddleware = createMiddleware({
    locales: localization.LOCALES,
    defaultLocale: localization.DEFAULT,
});

/**
 * Defines some components and hooks which apply locale prefixing.
 */
export const {Link, redirect, usePathname, useRouter} =
    createSharedPathnamesNavigation({locales: localization.LOCALES, localePrefix: "always"});

const authMiddleware = middleware((req) => {
    if (!req.auth && req.nextUrl.pathname !== "/login") {
        const newUrl = new URL("/api/auth/login", req.nextUrl.origin);
        return Response.redirect(newUrl);
    }
    return intlMiddleware(req);
});

/**
 * Middleware matcher of locales.
 */
export const config = {
    matcher: ["/", "/(es|en)/:path*"]
};

const middlewareMix = (req: NextRequest, ev: any) => {
    return authMiddleware(req, ev);
};

export default middlewareMix;