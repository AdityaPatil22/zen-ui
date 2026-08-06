import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Input';
import type { ZenInput } from './Input';

const meta: Meta<ZenInput> = {
  title: 'Components/Input',
  tags: ['autodocs'],
  render: (args) => html`
    <div style="width: 300px;">
      <zen-input
        label="${args.label}"
        placeholder="${args.placeholder}"
        variant="${args.variant}"
        type="${args.type}"
        error="${args.error}"
        ?disabled="${args.disabled}"
      ></zen-input>
    </div>
  `,
  argTypes: {
    label: { control: { type: 'text' } },
    placeholder: { control: { type: 'text' } },
    variant: { control: { type: 'select' }, options: ['default', 'filled'] },
    type: { control: { type: 'select' }, options: ['text', 'password', 'email', 'number'] },
    error: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
  },
};

export default meta;
type Story = StoryObj<ZenInput>;

export const Default: Story = { args: { label: 'Email', placeholder: 'Enter your email', variant: 'default', type: 'text', error: '', disabled: false } };
export const Filled: Story = { args: { label: 'Name', placeholder: 'Enter your name', variant: 'filled', type: 'text', error: '', disabled: false } };
export const WithError: Story = { args: { label: 'Password', placeholder: 'Enter password', variant: 'default', type: 'password', error: 'Password is required', disabled: false } };
export const Disabled: Story = { args: { label: 'Disabled', placeholder: 'Cannot type here', variant: 'default', type: 'text', error: '', disabled: true } };
