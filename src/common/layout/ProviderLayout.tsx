"use client";

import React, {ReactNode} from "react";
import {BreadcrumbProvider} from "@/module/dashboard/context/breadcrumb/BreadcrumbContext";
import {SidebarProvider} from "@/module/dashboard/context/sidebar/SidebarContext";
import DashboardLayout from "@/module/dashboard/layout/DashboardLayout";
import {Session} from "next-auth";

/**
 * Define the component props.
 */
export interface ProviderLayoutProps {
    session: Session | null;
    children: ReactNode;
}

/**
 * Defines a client-side component which aims to
 * collect all client-side top-level contexts.
 * @param session to render context.
 * @param children to render inside.
 * @constructor
 */
const ProviderLayout = ({session, children}: ProviderLayoutProps) => {
    return (
        <SidebarProvider>
            <BreadcrumbProvider>
                <DashboardLayout session={session}>
                    {children}
                </DashboardLayout>
            </BreadcrumbProvider>
        </SidebarProvider>
    );
};

export default ProviderLayout;