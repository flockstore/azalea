import {Meta, StoryObj} from "@storybook/react";
import {Box} from "@mantine/core";
import SidebarProfile, {
    SidebarProfileProps
} from "@/components/sidebar/partial/profile/SidebarProfile";

const meta: Meta<typeof SidebarProfile> = {
    component: SidebarProfile,
    title: "Sidebar/Profile",
};

export default meta;

type Story = StoryObj<typeof SidebarProfile>;

const storyProfile: SidebarProfileProps = {
    name: "Ian Felipe",
    picture: "/img/avatar-holder.webp",
    organization: "Azalea",
    logoutAction: () => {},
    expanded: true
};

export const Default: Story = {
    args: {...storyProfile},
    decorators: [
        (Story) =>
            <Box w="300px"><Story /></Box>
    ]
};

export const Collapsed: Story = {
    args: {...storyProfile, expanded: false},
    decorators: [
        (Story) =>
            <Box w="80px"><Story /></Box>
    ]
};