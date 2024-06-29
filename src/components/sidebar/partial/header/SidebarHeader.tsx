"use client";

import {Flex, Tooltip, useMantineColorScheme, useMantineTheme} from "@mantine/core";
import Logo from "@/components/logo/Logo";
import {useSidebar} from "@/context/sidebar/SidebarContext";
import {IconBrightness} from "@tabler/icons-react";

import styles from "./SidebarHeader.module.css";
import {Squircle} from "@squircle-js/react";
import {useTranslations} from "next-intl";
import {colorModeSwitcher} from "@/config/translation";

const SidebarHeader = () => {

    const {setColorScheme, colorScheme} = useMantineColorScheme();
    const {colors} = useMantineTheme();
    const {isExpanded} = useSidebar();
    const t = useTranslations();

    const logoLight = colors["azalea-blue"][4];
    const logoDark = colors.gray[1];
    const logo =
        isExpanded() ?
            colorScheme === "dark" ? logoDark : logoLight : logoLight;

    const changeScheme = () => {
        setColorScheme(colorScheme === "dark" ? "light" : "dark");
    };

    const headerStyle = `${styles.header} 
        ${isExpanded() ? styles.headerExpanded : ""}`;
    const logoStyle = isExpanded() ? styles.logoExpanded : styles.logo;
    const switcherWidth = isExpanded() ? 36 : 48;

    const tooltipTranslation = colorScheme === "dark" ? colorModeSwitcher.light : colorModeSwitcher.dark;
    // TODO: Set switcher in separate component.

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
            <Tooltip
                label={t(tooltipTranslation)}
                position="right"
                offset={10}
            >
                <Flex>
                    <Squircle
                        cornerRadius={10}
                        cornerSmoothing={1}
                        width={switcherWidth}
                        height={switcherWidth}
                        onClick={changeScheme}
                        className={styles.switcher}
                    >
                        <IconBrightness/>
                    </Squircle>
                </Flex>
            </Tooltip>
        </Flex>
    );
};

export default SidebarHeader;