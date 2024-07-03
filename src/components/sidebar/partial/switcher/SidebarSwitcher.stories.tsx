import {Meta, StoryObj} from "@storybook/react";
import SidebarSwitcher from "@/components/sidebar/partial/switcher/SidebarSwitcher";
import {Box} from "@mantine/core";

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