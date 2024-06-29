import {SidebarNavItem} from "@/components/sidebar/partial/nav/SidebarNav";
import {IconLayoutDashboard, IconShoppingBag} from "@tabler/icons-react";
import {navigation} from "@/config/translation";

export const navigationItems: SidebarNavItem[] = [
    {
        translation: navigation.dashboard,
        icon: <IconLayoutDashboard/>,
        link: "/"
    },
    {
        translation: navigation.product,
        icon: <IconShoppingBag/>,
        link: "/product"
    }
];