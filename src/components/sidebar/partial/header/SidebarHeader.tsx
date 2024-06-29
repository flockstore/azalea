"use client";

import {ActionIcon, Flex, Tooltip, useMantineColorScheme, useMantineTheme} from "@mantine/core";
import Logo from "@/components/logo/Logo";
import {useSidebar} from "@/context/sidebar/SidebarContext";
import {IconMoon, IconSun} from "@tabler/icons-react";

import styles from "./SidebarHeader.module.css";
import {Squircle} from "@squircle-js/react";

const SidebarHeader = () => {

    const {setColorScheme, colorScheme} = useMantineColorScheme();
    const {colors} = useMantineTheme();
    const {isExpanded} = useSidebar();

    const logoLight = colors["azalea-blue"][4];
    const logoDark = colors.gray[1];
    const logo =
        isExpanded() ?
            colorScheme === "dark" ? logoDark : logoLight : logoLight;

    const changeScheme = () => {
        setColorScheme(colorScheme === "dark" ? "light" : "dark");
    };

    const themeSwitcher = () => {
        return colorScheme === "dark" ? <IconSun/> : <IconMoon/>;
    };

    const headerStyle = `${styles.header} 
        ${isExpanded() ? styles.headerExpanded : ""}`;
    const logoStyle = isExpanded() ? styles.logoExpanded : styles.logo;
    const switcherWidth = isExpanded() ? 36 : 48;

    return (
        <Flex
            component="section"
            className={headerStyle}
        >
            <Flex className={logoStyle}>
                <Logo
                    color={logo}
                    collapsed={!isExpanded()}
                />
            </Flex>
            <Squircle
                cornerRadius={10}
                cornerSmoothing={1}
                width={switcherWidth}
                height={switcherWidth}
                onClick={changeScheme}
                className={styles.switcher}
            >
                {themeSwitcher()}
            </Squircle>
        </Flex>
    );
};

export default SidebarHeader;