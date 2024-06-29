import {Flex} from "@mantine/core";
import React from "react";
import SidebarItem from "@/components/sidebar/partial/item/SidebarItem";

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
        <Flex
            direction="column"
            w="100%"
        >
            {items.map(item => (<SidebarItem key={item.translation} item={item}/>))}
        </Flex>
    );
};

export default SidebarNav;