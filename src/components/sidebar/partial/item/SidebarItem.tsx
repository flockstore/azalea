import {SidebarNavItem} from "@/components/sidebar/partial/nav/SidebarNav";
import {Flex} from "@mantine/core";
import {useTranslations} from "next-intl";

export interface SidebarItemProps {
    item: SidebarNavItem;
}

const SidebarItem = ({item}: SidebarItemProps) => {

    const t = useTranslations();

    return (
        <Flex>
            {item.icon}
            {t(item.translation)}
        </Flex>
    );
};

export default SidebarItem;