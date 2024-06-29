"use client";

import {SidebarNavItem} from "@/components/sidebar/partial/nav/SidebarNav";
import {Flex, Tooltip} from "@mantine/core";
import {useTranslations} from "next-intl";
import {useSidebar} from "@/context/sidebar/SidebarContext";
import {usePathname} from "@/middleware";

import styles from "./SidebarItem.module.css";
import {Squircle} from "@squircle-js/react";

export interface SidebarItemProps {
    item: SidebarNavItem;
}

const SidebarItem = ({item}: SidebarItemProps) => {

    const t = useTranslations();
    const {isExpanded} = useSidebar();

    const route = usePathname();
    const active = route.startsWith(item.link);

    if (!isExpanded()) {
        return (
            <Tooltip
                label={t(item.translation)}
                position="right"
                offset={{mainAxis: 10, crossAxis: -4}}
            >
                <Flex>
                    <Squircle
                        cornerRadius={10}
                        cornerSmoothing={1}
                        width={48}
                        height={48}
                        className={styles.switcher}
                    >
                        {item.icon}
                    </Squircle>
                </Flex>
            </Tooltip>
        );
    }

    return (
        <Flex className={styles.sidebarItem}>
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