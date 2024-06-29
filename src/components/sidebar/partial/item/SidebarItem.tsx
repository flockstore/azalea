"use client";

import {SidebarNavItem} from "@/components/sidebar/partial/nav/SidebarNav";
import {Flex, Tooltip} from "@mantine/core";
import {useTranslations} from "next-intl";
import {useSidebar} from "@/context/sidebar/SidebarContext";
import {usePathname} from "@/middleware";
import {Squircle} from "@squircle-js/react";

import styles from "./SidebarItem.module.css";
import switcherStyles from "../switcher/SidebarSwitcher.module.css";


export interface SidebarItemProps {
    item: SidebarNavItem;
}

const SidebarItem = ({item}: SidebarItemProps) => {

    const t = useTranslations();
    const {isExpanded} = useSidebar();

    const route = usePathname();
    const active = route.startsWith(item.link);

    const style = `${switcherStyles.switcher} ${active && styles.switcherActive}`;
    const expandedStyle = `${styles.sidebarItem} ${active && styles.sidebarItemActive}`;

    if (!isExpanded()) {
        return (
            <Tooltip
                label={t(item.translation)}
                position="right"
                offset={{mainAxis: 10, crossAxis: -4}}
            >
                <Flex mb="sm">
                    <Squircle
                        cornerRadius={10}
                        cornerSmoothing={1}
                        width={48}
                        height={48}
                        className={style}
                    >
                        {item.icon}
                    </Squircle>
                </Flex>
            </Tooltip>
        );
    }

    return (
        <Flex className={expandedStyle}>
            <Flex>
                <Flex className={styles.sidebarItemIcon}>
                    {item.icon}
                </Flex>
                {isExpanded() && t(item.translation)}
            </Flex>
        </Flex>
    );
};

export default SidebarItem;