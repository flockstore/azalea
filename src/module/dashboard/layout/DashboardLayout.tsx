"use client";

import {Flex, Overlay} from "@mantine/core";
import React, {ReactNode} from "react";
import {useSidebar} from "@/module/dashboard/context/sidebar/SidebarContext";

import styles from "./DashboardLayout.module.css";
import HeaderResponsive from "@/module/dashboard/components/header-responsive/HeaderResponsive";
import Sidebar from "@/module/dashboard/components/sidebar/Sidebar";
import Header from "@/module/dashboard/components/header/Header";
import {Session} from "next-auth";

/**
 * Define the component props.
 */
export interface DashboardLayoutProps {
    session: Session | null;
    children: ReactNode;
}

/**
 * Defines the rendering behaviour of the sidebar
 * context, including a sidebar and children content.
 * @param session where to fetch dashboard.
 * @param children
 * @constructor
 */
const DashboardLayout = ({session, children}: DashboardLayoutProps) => {

    const { isExpanded, canCollapse, isResponsiveEnabled, toggleResponsive} = useSidebar();

    return (
        <Flex className={styles.dashboard}>
            <Sidebar session={session}/>
            {
                isResponsiveEnabled() &&
                <Overlay
                    data-testid="sidebar-overlay"
                    color="#000"
                    backgroundOpacity={0.85}
                    zIndex={50}
                    onClick={toggleResponsive}
                />
            }
            {!canCollapse && <HeaderResponsive/>}
            <Flex
                component="main"
                className={isExpanded ? styles.mainExpanded : styles.main}
            >
                <Header/>
                {children}
            </Flex>
        </Flex>
    );
};

export default DashboardLayout;