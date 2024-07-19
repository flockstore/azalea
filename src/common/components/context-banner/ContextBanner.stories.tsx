import {Meta, StoryObj} from "@storybook/react";
import ContextBanner, {ContextBannerProps} from "@/common/components/context-banner/ContextBanner";
import {IconHeart} from "@tabler/icons-react";

const BoxDecorator = (Story: any) => (
    <div style={{ width: "500px" }}>
        <Story />
    </div>
);

const meta: Meta<typeof ContextBanner> = {
    component: ContextBanner,
    title: "Context Banner",
    decorators: [BoxDecorator]
};

export default meta;

type Story = StoryObj<typeof ContextBanner>;

const testProps: ContextBannerProps = {
    title: "Context Banner",
    subtitle: "Tell your users something amazing...",
    picture: <IconHeart size={48} color="white"/>,
    bgColor: "#4b45ef",
    color: "white"
};

export const Default: Story = {
    args: {
        ...testProps,
    },
};