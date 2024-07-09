"use client";

import {NextIntlClientProvider} from "next-intl";
import React from "react";
import LayoutOrchestrator from "@/layout/orchestrator/LayoutOrchestrator";
import {MantineProvider} from "@mantine/core";
import {mantineTheme} from "@/style/theme";
import {SidebarProvider} from "@/context/sidebar/SidebarContext";
import {BreadcrumbProvider} from "@/context/breadcrumb/BreadcrumbContext";
import {UserProvider} from "@/context/user/UserContext";
import {Notifications} from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import {LoadingProvider} from "@/context/loading/LoadingContext";

/**
 * Defines the properties of the component.
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
const BaseLayout = (
    {
        children,
        locale,
        messages
    }: BaseLayoutProps
) => {
    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <MantineProvider theme={mantineTheme}>
                <SidebarProvider>
                    <BreadcrumbProvider>
                        <LoadingProvider>
                            <UserProvider>
                                <LayoutOrchestrator>
                                    <Notifications />
                                    {children}
                                </LayoutOrchestrator>
                            </UserProvider>
                        </LoadingProvider>
                    </BreadcrumbProvider>
                </SidebarProvider>
            </MantineProvider>
        </NextIntlClientProvider>
    );
};

export default BaseLayout;