import {Meta, StoryObj} from "@storybook/react";
import {SidebarNavItem} from "@/components/sidebar/partial/nav/SidebarNav";
import {navigation} from "@/config/translation";
import SidebarItem from "@/components/sidebar/partial/item/SidebarItem";
import {IconDashboard} from "@tabler/icons-react";
import {useSidebar} from "@/context/sidebar/SidebarContext";
import {Box} from "@mantine/core";
import {useEffect} from "react";

const meta: Meta<typeof SidebarItem> = {
    component: SidebarItem,
    title: "Sidebar/Navigation Item",
};

export default meta;

type Story = StoryObj<typeof SidebarItem>;

const navigationItem: SidebarNavItem = {
    link: "/dashboard",
    translation: navigation.dashboard,
    icon: <IconDashboard />,
};

export const Default: Story = {
    args: {
        item: {...navigationItem},
    },
    decorators: [
        (Story) => {
            return <Box w="300px" bg="orange" p="md">
                <Story/>
            </Box>;
        }
    ],
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: "/name"
            }
        },
    }
};

export const DefaultActive: Story = {
    args: {
        item: {...navigationItem},
    },
    decorators: [
        (Story) => {
            return <Box w="300px" bg="orange" p="md">
                <Story/>
            </Box>;
        }
    ],
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: "/dashboard"
            }
        },
    }
};