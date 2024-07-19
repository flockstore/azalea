import {Meta, StoryObj} from "@storybook/react";
import {Box} from "@mantine/core";
import {useSidebar} from "@/module/dashboard/context/sidebar/SidebarContext";
import SidebarHeader from "@/module/dashboard/components/sidebar/partial/header/SidebarHeader";

const meta: Meta<typeof SidebarHeader> = {
    component: SidebarHeader,
    title: "Sidebar/Header"
};

export default meta;

type Story = StoryObj<typeof SidebarHeader>;

export const Default: Story = {
    decorators: [
        (Story) =>
            <Box w="400px" bg="darkblue" py="sm"><Story /></Box>
    ]
};

export const Collapsed: Story = {
    decorators: [
        (Story) => {
            const { toggle, isExpanded } = useSidebar();

            if (isExpanded) {
                toggle();
            }

            return <Box w="100px"><Story /></Box>;
        }
    ]
};