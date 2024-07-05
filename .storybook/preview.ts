import type {Preview} from '@storybook/react'
import {decorators} from "../src/util/storybook/mantine.decorator";
import {GlobalDecorator} from "../src/util/storybook/global.decorator";

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
