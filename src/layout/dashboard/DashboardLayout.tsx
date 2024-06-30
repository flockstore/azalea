import {Flex} from "@mantine/core";
import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import SidebarShrink from "@/components/sidebar/partial/shrink/SidebarShrink";
import Header from "@/components/header/Header";
import {useSidebar} from "@/context/sidebar/SidebarContext";

import styles from "./DashboardLayout.module.css";

/**
 * Defines the rendering behaviour of the dashboard
 * layout, including a sidebar and children content.
 * @param children
 * @constructor
 */
const DashboardLayout = ({children}: { children: React.ReactNode }) => {

    const { isExpanded } = useSidebar();

    return (
        <Flex
            component="div"
            pos="relative"
        >
            <Sidebar/>
            <Flex
                component="main"
                className={isExpanded() ? styles.mainExpanded : styles.main}
            >
                <Header/>
                {children}
            </Flex>
        </Flex>
    );
};

export default DashboardLayout;