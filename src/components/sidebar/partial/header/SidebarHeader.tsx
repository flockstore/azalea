"use client";

import {Flex, useMantineColorScheme, useMantineTheme} from "@mantine/core";
import Logo from "@/components/logo/Logo";
import {useSidebar} from "@/context/sidebar/SidebarContext";

import styles from "./SidebarHeader.module.css";
import {useTranslations} from "next-intl";
import SidebarSwitcher from "@/components/sidebar/partial/switcher/SidebarSwitcher";

const SidebarHeader = () => {

    const {colorScheme} = useMantineColorScheme();
    const {colors} = useMantineTheme();
    const {isExpanded} = useSidebar();
    const t = useTranslations();

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
            <Flex className={logoStyle}>
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