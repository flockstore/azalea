import {Flex} from "@mantine/core";
import React from "react";
import SidebarItem from "@/components/sidebar/partial/item/SidebarItem";

import styles from "./SidebarNav.module.css";

export interface SidebarNavItem {
    icon: React.ReactNode;
    translation: string;
    link: string;
}

/**
 * Defines the component props.
 */
export interface SidebarNavProps {
    items: SidebarNavItem[];
}

const SidebarNav = ({items}: SidebarNavProps) => {
    return (
        <Flex className={styles.sidebarNav}>
            {items.map(item => (<SidebarItem key={item.translation} item={item}/>))}
        </Flex>
    );
};

export default SidebarNav;