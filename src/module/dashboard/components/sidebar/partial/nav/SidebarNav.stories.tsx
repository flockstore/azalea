import {Meta, StoryObj} from "@storybook/react";
import {navigationItems} from "@/common/config/navigation";
import {Box} from "@mantine/core";
import {useSidebar} from "@/module/dashboard/context/sidebar/SidebarContext";
import SidebarNav from "@/module/dashboard/components/sidebar/partial/nav/SidebarNav";

const meta: Meta<typeof SidebarNav> = {
    component: SidebarNav,
    title: "Sidebar/Navigation",
};

export default meta;

type Story = StoryObj<typeof SidebarNav>;

export const Default: Story = {
    args: {items: navigationItems},
    decorators: [
        (Story) =>
            <Box w="300px"><Story /></Box>
    ],
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: "/sidebar"
            }
        },
    }
};

export const Collapsed: Story = {
    args: {items: navigationItems},
    decorators: [
        (Story) => {

            const { toggle, isExpanded } = useSidebar();

            if (isExpanded) {
                toggle();
            }

            return  <Box w="100px"><Story /></Box>;
        }
    ],
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: "/sidebar"
            }
        },
    }
};

