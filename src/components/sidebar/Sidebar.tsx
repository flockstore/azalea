"use client";

import {Button, Flex, ScrollArea} from "@mantine/core";
import {motion} from "framer-motion";
import {useSidebar} from "@/context/sidebar/SidebarContext";
import SidebarHeader from "@/components/sidebar/partial/header/SidebarHeader";
import SidebarNav from "@/components/sidebar/partial/nav/SidebarNav";
import {navigationItems} from "@/config/navigation";

import styles from "./Sidebar.module.css";
import SidebarProfile from "@/components/sidebar/partial/profile/SidebarProfile";
import SidebarShrink from "@/components/sidebar/partial/shrink/SidebarShrink";
import React from "react";
import {IconX} from "@tabler/icons-react";
import {useTranslations} from "next-intl";
import {sidebar} from "@/config/translation";

const Sidebar = () => {

    const {isExpanded, canCollapse, isResponsiveEnabled, toggleResponsive} = useSidebar();
    const width = isExpanded ? "280px" : "100px";
    const sidebarClass = `${styles.sidebar} && ${isResponsiveEnabled() && styles.sidebarActive}`;
    const t = useTranslations();

    return (
        <Flex
            component={motion.aside}
            w={width}
            initial={{width}} animate={{width}}
            className={sidebarClass}
        >

            {canCollapse && <SidebarShrink/>}
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
            {!canCollapse && (
                <Flex className={styles.button} onClick={toggleResponsive}>
                    <Button className={styles.buttonHolder}>
                        <IconX/> {t(sidebar.close)}
                    </Button>
                </Flex>
            )}
        </Flex>
    );
};

export default Sidebar;
