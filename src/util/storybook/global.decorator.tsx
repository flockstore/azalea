import {NextIntlClientProvider} from "next-intl";
import {SessionProvider} from "next-auth/react";
import {SidebarProvider} from "@/context/sidebar/SidebarContext";
import {BreadcrumbProvider} from "@/context/breadcrumb/BreadcrumbContext";
import messages from "@/messages/es.json";
import {localization} from "@/config/app";

export const mockSession = {
    user: {
        name: "John Doe",
        email: "john.doe@example.com",
        image: "/img/avatar-holder.webp",
        organizations: ["Example Org"],
    },
    expires: "2024-12-31T23:59:59.999Z",
};

/**
 * next-itl decorator which load messages in storybook context.
 * @param Story to render inside.
 * @constructor
 */
export const GlobalDecorator = (Story: any) => {
    return (
        <NextIntlClientProvider locale="es" messages={messages} timeZone={localization.TIME_ZONE}>
            <SessionProvider>
                <SidebarProvider>
                    <BreadcrumbProvider>
                        <Story/>
                    </BreadcrumbProvider>
                </SidebarProvider>
            </SessionProvider>
        </NextIntlClientProvider>
    );
};