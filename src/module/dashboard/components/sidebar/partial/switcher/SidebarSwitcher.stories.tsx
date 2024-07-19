import {Meta, StoryObj} from "@storybook/react";
import {Box} from "@mantine/core";
import SidebarSwitcher from "@/module/dashboard/components/sidebar/partial/switcher/SidebarSwitcher";

const meta: Meta<typeof SidebarSwitcher> = {
    component: SidebarSwitcher,
    title: "Sidebar/Theme Switcher"
};

export default meta;

type Story = StoryObj<typeof SidebarSwitcher>;

export const Default: Story = {
    args: {width: 48},
    decorators: [
        (Story) =>
            <Box w="50px"><Story /></Box>
    ]
};