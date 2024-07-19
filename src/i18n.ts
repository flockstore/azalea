import {getRequestConfig} from "next-intl/server";
import {localization} from "@/common/config/app";

/**
 * Defines next-intl server localization parameters.
 */
export default getRequestConfig(async ({locale}) => ({
    timeZone: localization.TIME_ZONE,
    messages: (await import(`./common/messages/${locale}.json`)).default
}));