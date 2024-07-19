import {Meta, StoryObj} from "@storybook/react";
import {BreadcrumbItem, useBreadcrumb} from "@/module/dashboard/context/breadcrumb/BreadcrumbContext";
import {Box} from "@mantine/core";
import HeaderBreadcrumb from "@/module/dashboard/components/header/partial/breadcrumb/HeaderBreadcrumb";

const meta: Meta<typeof HeaderBreadcrumb> = {
    component: HeaderBreadcrumb,
    title: "Header/Breadcrumb",
};

export default meta;

type Story = StoryObj<typeof HeaderBreadcrumb>;
const breadcrumbItems: BreadcrumbItem[] = [
    {
        label: "Products",
        link: "/products",
        active: false
    },
    {
        label: "Data Sheet",
        link: "/products/datasheet",
        active: true
    }
];

export const Default: Story = {
    decorators: [
        (Story) => {
            const {setItems} = useBreadcrumb();
            setItems(breadcrumbItems);
            return <Box bg="red.9" p="lg"><Story/></Box>;
        }
    ],
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: "/sidebar"
            }
        },
    }
};