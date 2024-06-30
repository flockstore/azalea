import {SidebarNavItem} from "@/components/sidebar/partial/nav/SidebarNav";
import {
    IconBuildingFactory,
    IconBuildingFactory2, IconKey,
    IconLayoutDashboard,
    IconShoppingBag,
    IconUser
} from "@tabler/icons-react";
import {navigation} from "@/config/translation";

export const navigationItems: SidebarNavItem[] = [
    {
        translation: navigation.dashboard,
        icon: <IconLayoutDashboard/>,
        link: "/"
    },
    {
        translation: navigation.contact,
        icon: <IconUser/>,
        link: "/contacts"
    },
    {
        translation: navigation.product,
        icon: <IconShoppingBag/>,
        link: "/product"
    },
    {
        translation: navigation.manufacturing,
        icon: <IconBuildingFactory2/>,
        link: "/manufacturing"
    },
    {
        translation: navigation.iam,
        icon: <IconKey/>,
        link: "https://authadm.ianfe.dev"
    },
];