"use client";

import {Flex, useMantineColorScheme, useMantineTheme} from "@mantine/core";
import Logo from "@/components/logo/Logo";
import {useSidebar} from "@/context/sidebar/SidebarContext";

import styles from "./SidebarHeader.module.css";
import SidebarSwitcher from "@/layout/dashboard/components/sidebar/partial/switcher/SidebarSwitcher";

/**
 * Defines the rendering behaviour of the
 * sidebar header.
 * @constructor
 */
const SidebarHeader = () => {

    const {colorScheme} = useMantineColorScheme();
    const {colors} = useMantineTheme();
    const {isExpanded} = useSidebar();

    const logoLight = colors["azalea-blue"][4];
    const logoDark = colors.gray[1];
    const logo =
        isExpanded ?
            colorScheme === "dark" ? logoDark : logoLight : logoLight;

    const headerStyle = `${styles.header} 
        ${isExpanded ? styles.headerExpanded : ""}`;
    const logoStyle = isExpanded ? styles.logoExpanded : styles.logo;
    const switcherWidth = isExpanded ? 36 : 48;

    return (
        <Flex
            component="section"
            className={headerStyle}
        >
            <Flex className={logoStyle} data-testid="side-header-logo">
                <Logo
                    color={logo}
                    collapsed={!isExpanded}
                />
            </Flex>
            <SidebarSwitcher width={switcherWidth}/>
        </Flex>
    );
};

export default SidebarHeader;