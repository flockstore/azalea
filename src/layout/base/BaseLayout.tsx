"use client";

import {NextIntlClientProvider} from "next-intl";
import React from "react";
import LayoutOrchestrator from "@/layout/orchestrator/LayoutOrchestrator";

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
            <LayoutOrchestrator>
                {children}
            </LayoutOrchestrator>
        </NextIntlClientProvider>
    );
};

export default BaseLayout;