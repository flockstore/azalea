"use client";

import {Button, Flex, ScrollArea} from "@mantine/core";
import {motion} from "framer-motion";
import {useSidebar} from "@/context/sidebar/SidebarContext";
import {navigationItems} from "@/config/navigation";
import React from "react";
import {IconX} from "@tabler/icons-react";
import {useTranslations} from "next-intl";
import {sidebar} from "@/config/translation";

import styles from "./Sidebar.module.css";
import SidebarProfile from "@/layout/dashboard/components/sidebar/partial/profile/SidebarProfile";
import SidebarNav from "@/layout/dashboard/components/sidebar/partial/nav/SidebarNav";
import SidebarHeader from "@/layout/dashboard/components/sidebar/partial/header/SidebarHeader";
import SidebarShrink from "@/layout/dashboard/components/sidebar/partial/shrink/SidebarShrink";
import {signOut} from "@/provider/appwrite.provider";

const Sidebar = () => {

    const {isExpanded, canCollapse, isResponsiveEnabled, toggleResponsive} = useSidebar();
    const t = useTranslations();

    const width = isExpanded ? "280px" : "100px";
    const sidebarClass = `${styles.sidebar} && ${isResponsiveEnabled() && styles.sidebarActive}`;
    const userProfile = {
        organizations: ["flock"],
        name: "Ian castano",
        image: "/img/avatar-holder.webp"
    };

    const logout = () => {
        signOut();
    };

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
                <SidebarProfile
                    name={userProfile?.name || "..."}
                    organization={userProfile?.organizations![0] || "..."}
                    picture={userProfile?.image || "img/avatar-holder.webp"}
                    logoutAction={logout}
                    expanded={isExpanded}
                />
            </Flex>
            {!canCollapse && (
                <Flex className={styles.button} onClick={toggleResponsive} data-testid="sidebar-responsive-close">
                    <Button className={styles.buttonHolder}>
                        <IconX/> {t(sidebar.close)}
                    </Button>
                </Flex>
            )}
        </Flex>
    );
};

export default Sidebar;
