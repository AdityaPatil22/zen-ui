import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Alert';
import type { ZenAlert } from './Alert';

const meta: Meta<ZenAlert> = {
  title: 'Components/Alert',
  tags: ['autodocs'],
  render: (args) => html`
    <zen-alert variant="${args.variant}" ?dismissible="${args.dismissible}">
      ${args.slot || 'This is an alert message.'}
    </zen-alert>
  `,
  argTypes: {
    variant: { control: { type: 'select' }, options: ['info', 'success', 'warning', 'error'] },
    dismissible: { control: { type: 'boolean' } },
    slot: { control: { type: 'text' } },
  },
};

export default meta;
type Story = StoryObj<ZenAlert>;

export const Info: Story = { args: { variant: 'info', dismissible: false, slot: 'This is an info alert.' } };
export const Success: Story = { args: { variant: 'success', dismissible: true, slot: 'Operation completed successfully!' } };
export const Warning: Story = { args: { variant: 'warning', dismissible: true, slot: 'Please review your changes.' } };
export const Error: Story = { args: { variant: 'error', dismissible: true, slot: 'Something went wrong.' } };
