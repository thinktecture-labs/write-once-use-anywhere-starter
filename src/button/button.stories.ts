import type { Meta, StoryObj } from '@storybook/web-components';
import { TtButton } from './button';
import { TemplateResult, html } from 'lit';
import '../icon/icon';

const meta: Meta<TtButton> = {
  title: 'Components / Button',
  component: 'tt-button',
  render: (): TtButton => new TtButton(),
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Text: Story = {
  args: {
    label: 'Ich bin ein Text Button',
  },
  render: (args): TemplateResult =>
    html` <tt-button> ${args.label} </tt-button>`,
};

export const Outlined: Story = {
  args: {
    label: 'Ich bin ein Outlined Button',
  },
  render: (args): TemplateResult =>
    html` <tt-button type="outlined"> ${args.label} </tt-button>`,
};

export const Filled: Story = {
  args: {
    label: 'Ich bin ein Filled Button',
  },
  render: (args): TemplateResult =>
    html` <tt-button type="filled"> ${args.label} </tt-button>`,
};

export const Elevated: Story = {
  args: {
    label: 'Ich bin ein Elevated Button',
  },
  render: (args): TemplateResult =>
    html` <tt-button type="elevated"> ${args.label} </tt-button>`,
};

export const WithPrefix: Story = {
  args: {
    label: 'Ich bin ein Button',
  },
  render: (args): TemplateResult =>
    html` <tt-button type="elevated">
      <tt-icon slot="prefix"></tt-icon>
      ${args.label}
    </tt-button>`,
};

export const WithSuffix: Story = {
  args: {
    label: 'Ich bin ein Button',
  },
  render: (args): TemplateResult =>
    html` <tt-button type="elevated">
      <tt-icon slot="suffix"></tt-icon>
      ${args.label}
    </tt-button>`,
};
