import {Meta, StoryObj} from "@storybook/react";
import Logo from "@/components/logo/Logo";

const BoxDecorator = (Story: any) => (
    <div style={{ width: "300px" }}>
        <Story />
    </div>
);

const meta: Meta<typeof Logo> = {
    component: Logo,
    title: "Logo",
    decorators: [BoxDecorator],
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const DefaultLogo: Story = {
    name: "Default state logo",
    args: {
        color: "#000000",
        collapsed: false,
    },
};

export const CollapsedLogo: Story = {
    name: "Collapsed state logo",
    args: {
        color: "#000000",
        collapsed: true,
    },
};

export const CustomColorLogo: Story = {
    name: "Custom color logo",
    args: {
        color: "#FF5733",
        collapsed: false,
    },
};

export const CollapsedCustomColorLogo: Story = {
    name: "Collapsed custom color logo",
    args: {
        color: "#FF5733",
        collapsed: true,
    },
};
