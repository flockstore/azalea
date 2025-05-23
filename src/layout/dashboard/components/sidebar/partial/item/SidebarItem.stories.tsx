import {Meta, StoryObj} from "@storybook/react";
import {IconDashboard} from "@tabler/icons-react";
import {Box} from "@mantine/core";
import SidebarItem, {SidebarItemProps} from "@/layout/dashboard/components/sidebar/partial/item/SidebarItem";

const meta: Meta<typeof SidebarItem> = {
    component: SidebarItem,
    title: "Sidebar/Navigation Item",
};

export default meta;

type Story = StoryObj<typeof SidebarItem>;

const navigationItem: SidebarItemProps = {
    text: "Dashboard",
    expanded: true,
    action: () => {},
    active: false,
    notifications: 0,
    icon: <IconDashboard />,
};

export const Default: Story = {
    args: {...navigationItem},
};

export const DefaultActive: Story = {
    name: "Default active",
    args: {...navigationItem, active: true},
    decorators: [
        (Story) => {
            return <Box w="300px" bg="orange" p="md">
                <Story/>
            </Box>;
        }
    ],
};

export const DefaultNotifications: Story = {
    name: "Default with notifications",
    args: {...navigationItem, active: true, notifications: 5},
    decorators: [
        (Story) => {
            return <Box w="300px" bg="orange" p="md">
                <Story/>
            </Box>;
        }
    ],
};

export const Collapsed: Story = {
    name: "Collapsed state",
    args: {...navigationItem, expanded: false},
};

export const CollapsedActive: Story = {
    name: "Collapsed active",
    args: {...navigationItem, expanded: false, active: true},
};

export const CollapsedNotifications: Story = {
    name: "Collapsed with notifications",
    args: {...navigationItem, expanded: false, notifications: 5},
};