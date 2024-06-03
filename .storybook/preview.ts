import type { Preview } from '@storybook/web-components';

import '../styles/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: 'labs-light-theme', color: 'white' },
        { name: 'dark', class: 'labs-dark-theme', color: 'black' },
      ],
    },
    backgrounds: {
      default: 'background',
      values: [
        {
          name: 'surface',
          value: 'var(--md-sys-color-surface)',
        },
        {
          name: 'background',
          value: 'var(--md-sys-color-background)',
        },
        {
          name: 'system',
          value: 'var(--color-system-background)',
        },
      ],
    },
  },
};

export default preview;
