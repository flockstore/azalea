import {Meta, StoryObj} from "@storybook/react";
import DropMenu, {DropMenuProps} from "@/components/drop-menu/DropMenu";


const BoxDecorator = (Story: any) => (
    <div style={{ width: "300px", height: "400px" }}>
        <Story />
    </div>
);


const meta: Meta<typeof DropMenu> = {
    component: DropMenu,
    title: "Drop Menu",
    decorators: [BoxDecorator]
};

export default meta;

type Story = StoryObj<typeof DropMenu>;

const testProps: DropMenuProps = {
    responsive: true,
    slug: "Hello world",
    maxHeight: "200px",
    children: (
        <ul>
            <li>Hello from test</li>
            <li>Hello from test</li>
            <li>Hello from test</li>
            <li>Hello from test</li>
        </ul>
    )
}

export const Default: Story = {
    args: {
        ...testProps,
    },
};

export const NonResponsive: Story = {
    args: {
        ...testProps, responsive: false
    },
};

