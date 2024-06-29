import {Flex, ScrollArea} from "@mantine/core";
import {motion} from "framer-motion";
import {useSidebar} from "@/context/sidebar/SidebarContext";
import SidebarHeader from "@/components/sidebar/partial/header/SidebarHeader";
import SidebarNav from "@/components/sidebar/partial/nav/SidebarNav";
import {navigationItems} from "@/config/navigation";

import styles from "./Sidebar.module.css";

const Sidebar = () => {

    const {isExpanded} = useSidebar();
    const width = isExpanded() ? "270px" : "100px";

    return (
        <Flex
            component={motion.aside}
            w={width}
            initial={{width}} animate={{width}}
            className={styles.sidebar}
        >
            <SidebarHeader/>
            <ScrollArea
                h="75%"
                w="100%"
                type="hover"
                scrollbarSize={5}

            >
                <SidebarNav items={navigationItems}/>
            </ScrollArea>
        </Flex>
    );
};

export default Sidebar;
