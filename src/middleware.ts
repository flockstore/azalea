import createMiddleware from "next-intl/middleware";
import {createSharedPathnamesNavigation} from "next-intl/navigation";
import {localization} from "@/config/app";

/**
 * Creates a middleware with next-intl localization.
 */
export default createMiddleware({
    locales: localization.LOCALES,
    defaultLocale: localization.DEFAULT
});

/**
 * Defines some components and hooks which apply locale prefixing.
 */
export const {Link, redirect, usePathname, useRouter} =
    createSharedPathnamesNavigation({locales: localization.LOCALES, localePrefix: "always"});

/**
 * Middleware matcher of locales.
 */
export const config = {
    matcher: ["/", "/(es|en)/:path*"]
};