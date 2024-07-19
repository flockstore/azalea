import type {Preview} from '@storybook/react'
import {decorators} from "@/common/storybook/mantine.decorator";
import {GlobalDecorator} from "@/common/storybook/global.decorator";

const preview: Preview = {
    decorators: [...decorators, GlobalDecorator],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview
