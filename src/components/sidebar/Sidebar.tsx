import {Flex, ScrollArea} from "@mantine/core";
import {motion} from "framer-motion";
import {useSidebar} from "@/context/sidebar/SidebarContext";
import SidebarHeader from "@/components/sidebar/partial/header/SidebarHeader";
import SidebarNav from "@/components/sidebar/partial/nav/SidebarNav";
import {navigationItems} from "@/config/navigation";

import styles from "./Sidebar.module.css";
import SidebarProfile from "@/components/sidebar/partial/profile/SidebarProfile";

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
            <Flex className={styles.top}>
                <SidebarHeader/>
                <ScrollArea
                    h="75%"
                    w="100%"
                    type="hover"
                    scrollbars="y"
                    scrollbarSize={5}
                >
                    <SidebarNav items={navigationItems}/>
                </ScrollArea>
            </Flex>
            <Flex className={styles.profileHolder}>
                <SidebarProfile/>
            </Flex>
        </Flex>
    );
};

export default Sidebar;
