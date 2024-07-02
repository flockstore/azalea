"use client";

import {Badge, Flex, Indicator, Text, Tooltip} from "@mantine/core";
import {Squircle} from "@squircle-js/react";

import styles from "./SidebarItem.module.css";
import switcherStyles from "../switcher/SidebarSwitcher.module.css";

/**
 * Defines the component props.
 */
export interface SidebarItemProps {
    icon: any;
    text: string;
    expanded: boolean;
    action: () => void;
    active: boolean;
    notifications?: number;
}

/**
 * Defines the rendering behaviour for a sidebar item,
 * which serves as graphic anchor for the sidebar navigation.
 * @param icon to show as graphic representation.
 * @param text to render along the icon.
 * @param expanded or contracted version.
 * @param action to execute when clicking.
 * @param active if item is being navigated currently.
 * @constructor
 */
const SidebarItem = ({
        icon,
        text,
        expanded,
        action,
        active
}: SidebarItemProps) => {

    const style = `${switcherStyles.switcher} ${active && styles.switcherActive}`;
    const expandedStyle = `${styles.item} ${active && styles.active}`;
    const textStyle = `${styles.text} ${active && styles.textActive}`;
    const notifications = false;

    if (!expanded) {
        return (
            <Tooltip
                label={text}
                position="right"
                offset={{mainAxis: 10, crossAxis: -4}}
            >

                <Indicator color="red" disabled={!notifications}>
                    <Flex mb="sm" onClick={action}>
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
        );
    }

    return (
        <Flex className={expandedStyle} onClick={action}>
            <Flex w="70%" mr="md">
                <Flex className={styles.icon}>
                    {icon}
                </Flex>
                <Text className={textStyle}>{expanded && text}</Text>
                {notifications && <Badge className={styles.badge}>{notifications}</Badge>}
            </Flex>
        </Flex>
    );
};

export default SidebarItem;