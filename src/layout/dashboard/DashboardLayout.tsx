import {Flex, Overlay} from "@mantine/core";
import React from "react";
import {useSidebar} from "@/context/sidebar/SidebarContext";

import styles from "./DashboardLayout.module.css";
import HeaderResponsive from "@/layout/dashboard/components/header-responsive/HeaderResponsive";
import Sidebar from "@/layout/dashboard/components/sidebar/Sidebar";
import Header from "@/layout/dashboard/components/header/Header";

/**
 * Defines the rendering behaviour of the dashboard
 * layout, including a sidebar and children content.
 * @param children
 * @constructor
 */
const DashboardLayout = ({children}: { children: React.ReactNode }) => {

    const { isExpanded, canCollapse, isResponsiveEnabled, toggleResponsive} = useSidebar();

    return (
        <Flex className={styles.dashboard}>
            <Sidebar/>
            {
                isResponsiveEnabled() &&
                <Overlay
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