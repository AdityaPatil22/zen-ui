import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Badge';
import type { Badge } from './Badge';

const meta: Meta<Badge> = {
  title: 'Components/Badge',
  tags: ['autodocs'],
  render: (args) => html`
    <zen-badge variant="${args.variant}" size="${args.size}">
      ${args.slot || 'Badge'}
    </zen-badge>
  `,
  argTypes: {
    variant: { control: { type: 'select' }, options: ['default', 'success', 'warning', 'error', 'info'] },
    size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
    slot: { control: { type: 'text' } },
  },
};

export default meta;
type Story = StoryObj<Badge>;

export const Default: Story = { args: { variant: 'default', size: 'medium', slot: 'Default' } };
export const Success: Story = { args: { variant: 'success', size: 'medium', slot: 'Success' } };
export const Warning: Story = { args: { variant: 'warning', size: 'medium', slot: 'Warning' } };
export const Error: Story = { args: { variant: 'error', size: 'medium', slot: 'Error' } };
export const Info: Story = { args: { variant: 'info', size: 'medium', slot: 'Info' } };
