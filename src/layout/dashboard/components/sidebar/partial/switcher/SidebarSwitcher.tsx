"use client";

import {Flex, Tooltip, useMantineColorScheme} from "@mantine/core";
import {Squircle} from "@squircle-js/react";
import {IconBrightness} from "@tabler/icons-react";
import {colorModeSwitcher} from "@/config/translation";
import {useTranslations} from "next-intl";

import styles from "./SidebarSwitcher.module.css";

/**
 * Defines the component props.
 */
export interface SidebarSwitcherProps {
    width: number;
}

/**
 * Defines the rendering behaviour of the custom
 * light/dark switcher of the sidebar.
 * @param width of the switcher.
 * @constructor
 */
const SidebarSwitcher = ({width}: SidebarSwitcherProps) => {

    const {setColorScheme, colorScheme} = useMantineColorScheme();
    const t = useTranslations();

    const changeScheme = () => {
        setColorScheme(colorScheme === "dark" ? "light" : "dark");
    };

    const tooltipTranslation = colorScheme === "dark" ? colorModeSwitcher.light : colorModeSwitcher.dark;

    return (
        <Tooltip
            label={t(tooltipTranslation)}
            position="right"
            offset={10}
        >
            <Flex>
                <Squircle
                    cornerRadius={10}
                    cornerSmoothing={1}
                    width={width}
                    height={width}
                    onClick={changeScheme}
                    className={styles.switcher}
                    data-testid="sidebar-switcher"
                >
                    <IconBrightness/>
                </Squircle>
            </Flex>
        </Tooltip>
    );
};


export default SidebarSwitcher;