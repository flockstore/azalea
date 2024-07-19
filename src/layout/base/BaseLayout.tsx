import {NextIntlClientProvider} from "next-intl";
import React from "react";
import {MantineProvider} from "@mantine/core";
import {mantineTheme} from "@/common/style/theme";
import "@mantine/notifications/styles.css";
import ProviderLayout from "@/layout/provider/ProviderLayout";
import {Notifications} from "@mantine/notifications";
import {auth, signOut} from "@/provider/auth.provider";

/**
 * Defines the component props.
 */
export interface BaseLayoutProps {
    children?: React.ReactNode;
    locale: string;
    messages: any;
}

/**
 * Defines the rendering behaviour of the base layout,
 * which contains most of the context providers.
 * @param children to render inside
 * @param locale from next-intl
 * @param messages from next-intl
 * @constructor
 */
const BaseLayout = async (
    {
        children,
        locale,
        messages
    }: BaseLayoutProps
) => {

    const session = await auth();

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <MantineProvider theme={mantineTheme}>
                <ProviderLayout session={session}>
                    <Notifications />
                    {children}
                </ProviderLayout>
            </MantineProvider>
        </NextIntlClientProvider>
    );
};

export default BaseLayout;