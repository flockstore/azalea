import {NextIntlClientProvider} from "next-intl";
import {SidebarProvider} from "@/context/sidebar/SidebarContext";
import {BreadcrumbProvider} from "@/context/breadcrumb/BreadcrumbContext";
import messages from "@/common/messages/es.json";
import {localization} from "@/common/config/app";

/**
 * next-itl decorator which load messages in storybook context.
 * @param Story to render inside.
 * @constructor
 */
export const GlobalDecorator = (Story: any) => {
    return (
        <NextIntlClientProvider locale="es" messages={messages} timeZone={localization.TIME_ZONE}>
            <SidebarProvider>
                <BreadcrumbProvider>
                    <Story/>
                </BreadcrumbProvider>
            </SidebarProvider>
        </NextIntlClientProvider>
    );
};