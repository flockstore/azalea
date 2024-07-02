import type {Preview} from '@storybook/react'
import {decorators} from "../src/util/storybook/mantine.decorator";
import {NextIntlDecorator} from "../src/util/storybook/next-intl.decorator";
import {SidebarDecorator} from "../src/util/storybook/sidebar.decorator";

const preview: Preview = {
    decorators: [...decorators, NextIntlDecorator, SidebarDecorator],
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
