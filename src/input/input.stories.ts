import type { Meta, StoryObj } from '@storybook/web-components';
import { TemplateResult, html } from 'lit';
import { TtInput } from './input';

const meta: Meta<TtInput> = {
  title: 'Components / Input',
  component: 'tt-input',
  render: (): TtInput => new TtInput(),
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    label: 'Ich bin ein Input',
  },
  render: (args): TemplateResult =>
    html` <tt-input>
      <label for="test"> ${args.label}</label>
      <input id="test" />
    </tt-input>`,
};
