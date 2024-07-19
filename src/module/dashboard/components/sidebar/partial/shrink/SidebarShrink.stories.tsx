import {Meta, StoryObj} from "@storybook/react";
import {Box} from "@mantine/core";
import {useSidebar} from "@/module/dashboard/context/sidebar/SidebarContext";
import SidebarShrink from "@/module/dashboard/components/sidebar/partial/shrink/SidebarShrink";

const meta: Meta<typeof SidebarShrink> = {
    component: SidebarShrink,
    title: "Sidebar/Shrink"
};

export default meta;

type Story = StoryObj<typeof SidebarShrink>;

export const Default: Story = {
    decorators: [
        (Story) => {

            const { isExpanded } = useSidebar();
            const width = isExpanded ? "200px" : "80px";

            return <Box
                style={{transition: ".3s ease"}}
                w={width}
                h="200px"
                bg="black"
                pos="relative"
            ><Story /></Box>;
        }
    ]
};