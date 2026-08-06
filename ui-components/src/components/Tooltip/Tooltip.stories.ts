import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Tooltip';
import type { Tooltip } from './Tooltip';

const meta: Meta<Tooltip> = {
  title: 'Components/Tooltip',
  tags: ['autodocs'],
  render: (args) => html`
    <div style="padding: 60px; display: flex; justify-content: center;">
      <zen-tooltip text="${args.text}" position="${args.position}">
        <zen-button variant="primary">Hover me</zen-button>
      </zen-tooltip>
    </div>
  `,
  argTypes: {
    text: { control: { type: 'text' } },
    position: { control: { type: 'select' }, options: ['top', 'bottom', 'left', 'right'] },
  },
};

export default meta;
type Story = StoryObj<Tooltip>;

export const Top: Story = { args: { text: 'Tooltip on top', position: 'top' } };
export const Bottom: Story = { args: { text: 'Tooltip on bottom', position: 'bottom' } };
export const Left: Story = { args: { text: 'Tooltip on left', position: 'left' } };
export const Right: Story = { args: { text: 'Tooltip on right', position: 'right' } };
