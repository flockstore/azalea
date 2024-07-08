import {Meta, StoryObj} from "@storybook/react";
import {Box} from "@mantine/core";
import {useSidebar} from "@/context/sidebar/SidebarContext";
import Sidebar from "@/layout/dashboard/components/sidebar/Sidebar";

const meta: Meta<typeof Sidebar> = {
    component: Sidebar,
    title: "Sidebar",
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
    name: "Full Sidebar",
    decorators: [
        (Story) =>
            <Box w="400px"><Story /></Box>
    ],
    parameters: {
        viewport: {
            defaultViewport: "sidebar",
            viewports: {
                sidebar: {
                    name: "sidebar",
                    styles: {
                        width: "1200px",
                        height: "700px"
                    }
                }
            }
        },
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: "/dashboard"
            }
        },
    }
};

export const Shrink: Story = {
    name: "Shrink Sidebar",
    decorators: [
        (Story) => {

            const { toggle, isExpanded } = useSidebar();

            if (isExpanded) {
                toggle();
            }

            return  <Box w="400px"><Story /></Box>;
        }
    ],
    parameters: {
        viewport: {
            defaultViewport: "sidebar",
            viewports: {
                sidebar: {
                    name: "sidebar",
                    styles: {
                        width: "1200px",
                        height: "700px"
                    }
                }
            }
        },
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: "/dashboard"
            }
        },
    }
};