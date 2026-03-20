import type { Preview } from '@storybook/react';
import '@atlas/tokens/build/web/tokens.light.css';
import '@atlas/tokens/build/web/tokens.dark.css';
import './storybook.css';

// Load Figma fonts from Google Fonts
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href =
  'https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&family=Anybody:ital,wght@0,100..900;1,100..900&display=swap';
document.head.appendChild(link);

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
