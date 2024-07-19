"use client";

import {Button, Flex, ScrollArea} from "@mantine/core";
import {motion} from "framer-motion";
import {useSidebar} from "@/module/dashboard/context/sidebar/SidebarContext";
import {navigationItems} from "@/common/config/navigation";
import React from "react";
import {IconX} from "@tabler/icons-react";
import {useTranslations} from "next-intl";
import {sidebar} from "@/common/config/translation";

import styles from "./Sidebar.module.css";
import SidebarProfile from "@/module/dashboard/components/sidebar/partial/profile/SidebarProfile";
import SidebarNav from "@/module/dashboard/components/sidebar/partial/nav/SidebarNav";
import SidebarHeader from "@/module/dashboard/components/sidebar/partial/header/SidebarHeader";
import SidebarShrink from "@/module/dashboard/components/sidebar/partial/shrink/SidebarShrink";
import {getLogger} from "@/common/provider/logging.provider";
import {useRouter} from "next/navigation";
import {Session} from "next-auth";
import {signOut} from "next-auth/react";

/**
 * Define the component props.
 */
export interface SidebarProps {
    session: Session | null;
}

/**
 * Defines the rendering behaviour for the main navigation tool
 * of the application.
 * @param session to fetch logged user.
 * @constructor
 */
const Sidebar = ({session}: SidebarProps) => {

    const {isExpanded, canCollapse, isResponsiveEnabled, toggleResponsive} = useSidebar();
    const t = useTranslations();
    const router = useRouter();

    const width = isExpanded ? "280px" : "100px";
    const sidebarClass = `${styles.sidebar} && ${isResponsiveEnabled() && styles.sidebarActive}`;

    const name = session?.user?.name || "...";
    const organization = "Azalea";
    const picture = session?.user?.image || "img/avatar-holder.webp";


    const logout = () => {
        signOut().then(
            () => {
                console.log("xd");
                router.push("/api/auth/federated-logout");
            }
        ).catch(
            error => {
                getLogger().fatal("Error while logging out", error);
                window.close();
            }
        );
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
                    name={name}
                    organization={organization}
                    picture={picture}
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
