import {Flex} from "@mantine/core";
import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";

/**
 * Defines the rendering behaviour of the dashboard
 * layout, including a sidebar and children content.
 * @param children
 * @constructor
 */
const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <Flex
            component="div"
            pos="relative"
        >
            <Sidebar/>
            <main>
                {children}
            </main>
        </Flex>
    );
};

export default DashboardLayout;