import {Meta, StoryObj} from "@storybook/react";
import SidebarNav from "@/components/sidebar/partial/nav/SidebarNav";
import {navigationItems} from "@/config/navigation";
import {Box} from "@mantine/core";
import {useSidebar} from "@/context/sidebar/SidebarContext";

const meta: Meta<typeof SidebarNav> = {
    component: SidebarNav,
    title: "Sidebar/Profile",
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
                pathname: "/dashboard"
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
                pathname: "/dashboard"
            }
        },
    }
};

