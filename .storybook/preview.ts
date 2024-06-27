import type {Preview} from '@storybook/react'
import {decorators} from "../src/util/storybook/mantine.decorator";
import {NextIntlDecorator} from "../src/util/storybook/next-intl.decorator";

const preview: Preview = {
  decorators: [...decorators, NextIntlDecorator],
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
