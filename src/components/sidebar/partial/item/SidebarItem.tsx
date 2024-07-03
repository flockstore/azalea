"use client";

import {Badge, Flex, Indicator, Text, Tooltip} from "@mantine/core";
import {Squircle} from "@squircle-js/react";

import styles from "./SidebarItem.module.css";
import switcherStyles from "../switcher/SidebarSwitcher.module.css";

/**
 * Defines the component props.
 */
export interface SidebarItemProps {
    text: string;
    expanded: boolean;
    action: () => void;
    active: boolean;
    notifications: number;
    icon: any;
}

/**
 * Defines the rendering behaviour for a sidebar item,
 * which serves as graphic anchor for the sidebar navigation.
 * @param text to render along the icon.
 * @param expanded or contracted version.
 * @param action to execute when clicking.
 * @param active if item is being navigated currently.
 * @param notifications if sidebar has related notifications.
 * @param icon to show as graphic representation.
 * @constructor
 */
const SidebarItem = ({
        text,
        expanded,
        action,
        active,
        notifications,
        icon,
}: SidebarItemProps) => {

    const style = `${switcherStyles.switcher} ${active && styles.switcherActive}`;
    const expandedStyle = `${styles.item} ${active && styles.active}`;
    const textStyle = `${styles.text} ${active && styles.textActive}`;

    if (!expanded) {
        return (
            <Flex>
                <Tooltip
                    label={text}
                    position="right"
                    offset={{mainAxis: 10, crossAxis: -4}}
                >

                    <Indicator color="red" disabled={notifications === 0}>
                        <Flex
                            mb="sm"
                            onClick={action}
                            data-testid={`sidebar-item-collapsed-${text}`}
                        >
                            <Squircle
                                cornerRadius={10}
                                cornerSmoothing={1}
                                width={48}
                                height={48}
                                className={style}
                            >

                                {icon}
                            </Squircle>
                        </Flex>
                    </Indicator>

                </Tooltip>
            </Flex>
        );
    }

    return (
        <Flex className={expandedStyle} onClick={action} data-testid={`sidebar-item-${text}`}>
            <Flex w="70%" mr="md">
                <Flex className={styles.icon}>
                    {icon}
                </Flex>
                <Text className={textStyle}>{expanded && text}</Text>
                {notifications !== 0 && <Badge className={styles.badge}>{notifications}</Badge>}
            </Flex>
        </Flex>
    );
};

export default SidebarItem;