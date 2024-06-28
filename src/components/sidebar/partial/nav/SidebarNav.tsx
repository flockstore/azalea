import {Flex} from "@mantine/core";
import React from "react";
import SidebarItem from "@/components/sidebar/partial/item/SidebarItem";

export interface SidebarNavItem {
    icon: React.ReactNode;
    translation: string;
}

/**
 * Defines the component props.
 */
export interface SidebarNavProps {
    items: SidebarNavItem[];
}

const SidebarNav = ({items}: SidebarNavProps) => {
    return (
        <Flex
            direction="column"
        >
            {items.map(item => (<SidebarItem key={item.translation} item={item}/>))}
        </Flex>
    );
};

export default SidebarNav;