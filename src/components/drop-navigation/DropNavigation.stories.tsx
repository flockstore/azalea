import {Meta, StoryObj} from "@storybook/react";
import DropNavigation, {DropNavigationItem, DropNavigationProps} from "@/components/drop-navigation/DropNavigation";
import {IconMail, IconUser} from "@tabler/icons-react";

const BoxDecorator = (Story: any) => (
    <div style={{ width: "300px", height: "400px" }}>
        <Story />
    </div>
);


const meta: Meta<typeof DropNavigation> = {
    component: DropNavigation,
    title: "Drop Navigation",
    decorators: [BoxDecorator]
};

export default meta;

type Story = StoryObj<typeof DropNavigation>;

/**
 * Define links to be used.
 */
const items: DropNavigationItem[] = [
    {
        text: "Account",
        link: "/account",
        icon: <IconUser/>
    },
    {
        text: "Mail",
        link: "/account/email",
        icon: <IconMail/>
    }
];

const testProps: DropNavigationProps = {
    items,
    maxHeight: "500px"
};

export const Default: Story = {
    args: {
        ...testProps,
    },
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: "/account"
            }
        },
    }
};
