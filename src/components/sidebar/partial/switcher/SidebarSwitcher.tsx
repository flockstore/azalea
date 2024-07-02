"use client";

import {Flex, Tooltip, useMantineColorScheme} from "@mantine/core";
import {Squircle} from "@squircle-js/react";
import {IconBrightness} from "@tabler/icons-react";
import {colorModeSwitcher} from "@/config/translation";
import {useSidebar} from "@/context/sidebar/SidebarContext";
import {useTranslations} from "next-intl";

import styles from "./SidebarSwitcher.module.css";

const SidebarSwitcher = () => {

    const {setColorScheme, colorScheme} = useMantineColorScheme();
    const {isExpanded} = useSidebar();
    const t = useTranslations();

    const changeScheme = () => {
        setColorScheme(colorScheme === "dark" ? "light" : "dark");
    };

    const switcherWidth = isExpanded ? 36 : 48;
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
                    width={switcherWidth}
                    height={switcherWidth}
                    onClick={changeScheme}
                    className={styles.switcher}
                >
                    <IconBrightness/>
                </Squircle>
            </Flex>
        </Tooltip>
    );
};


export default SidebarSwitcher;