import type { Preview } from '@storybook/react';
import '@atlas/tokens/build/web/tokens.light.css';
import '@atlas/tokens/build/web/tokens.dark.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
