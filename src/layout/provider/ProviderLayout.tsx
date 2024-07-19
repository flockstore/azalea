"use client";

import React, {ReactNode} from "react";
import {BreadcrumbProvider} from "@/context/breadcrumb/BreadcrumbContext";
import {SidebarProvider} from "@/context/sidebar/SidebarContext";
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
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
 * @param session to render layout.
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