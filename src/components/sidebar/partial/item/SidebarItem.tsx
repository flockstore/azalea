"use client";

import {SidebarNavItem} from "@/components/sidebar/partial/nav/SidebarNav";
import {Flex} from "@mantine/core";
import {useTranslations} from "next-intl";
import {useSidebar} from "@/context/sidebar/SidebarContext";

export interface SidebarItemProps {
    item: SidebarNavItem;
}

const SidebarItem = ({item}: SidebarItemProps) => {

    const t = useTranslations();
    const { isExpanded } = useSidebar();

    const style = {
        borderLeft: "4px solid red"
    };

    return (
        <Flex
            w="100%"
            py="5px"
            my="6px"
            style={style}
            justify={isExpanded() ? "start" : "center"}
        >
            <Flex>

                {item.icon}

                {isExpanded() &&
                    <Flex>{t(item.translation)}</Flex>
                }

            </Flex>
        </Flex>
    );
};

export default SidebarItem;