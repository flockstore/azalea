"use client";

import {SidebarNavItem} from "@/components/sidebar/partial/nav/SidebarNav";
import {Badge, Flex, Indicator, Text, Tooltip} from "@mantine/core";
import {useTranslations} from "next-intl";
import {useSidebar} from "@/context/sidebar/SidebarContext";
import {usePathname} from "@/middleware";
import {Squircle} from "@squircle-js/react";

import styles from "./SidebarItem.module.css";
import switcherStyles from "../switcher/SidebarSwitcher.module.css";
import {navigation} from "@/config/translation";

/**
 * Defines the component props.
 */
export interface SidebarItemProps {
    item: SidebarNavItem;
}

/**
 * Defines the rendering behaviour for a sidebar item,
 * which serves as graphic anchor for the sidebar navigation.
 * @param item from navigation to render.
 * @constructor
 */
const SidebarItem = ({item}: SidebarItemProps) => {

    const t = useTranslations();
    const {isExpanded} = useSidebar();

    const route = usePathname();
    const active = route.startsWith(item.link);

    const style = `${switcherStyles.switcher} ${active && styles.switcherActive}`;
    const expandedStyle = `${styles.sidebarItem} ${active && styles.sidebarItemActive}`;
    const textStyle = `${styles.text} ${active && styles.textActive}`;
    const notifications = item.translation === navigation.dashboard;

    if (!isExpanded) {
        return (
            <Tooltip
                label={t(item.translation)}
                position="right"
                offset={{mainAxis: 10, crossAxis: -4}}
            >

                <Indicator color="red" disabled={!notifications}>
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
                </Indicator>

            </Tooltip>
        );
    }

    return (
        <Flex className={expandedStyle}>
            <Flex w="70%" mr="md">
                <Flex className={styles.sidebarItemIcon}>
                    {item.icon}
                </Flex>
                <Text className={textStyle}>{isExpanded && t(item.translation)}</Text>
                {notifications && <Badge className={styles.badge}>+5</Badge>}
            </Flex>
        </Flex>
    );
};

export default SidebarItem;