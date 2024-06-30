import {Flex} from "@mantine/core";
import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import SidebarShrink from "@/components/sidebar/partial/shrink/SidebarShrink";

/**
 * Defines the rendering behaviour of the dashboard
 * layout, including a sidebar and children content.
 * @param children
 * @constructor
 */
const DashboardLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <Flex
            component="div"
            pos="relative"
        >
            <Sidebar/>
            <SidebarShrink/>
            <main>
                {children}
            </main>
        </Flex>
    );
};

export default DashboardLayout;